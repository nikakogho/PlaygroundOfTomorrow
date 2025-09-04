// src/lib/storage/LocalStorageAdapter.ts
import type { KeyValueStore, StorageAdapter } from "./StorageAdapter";
import { InMemoryStorage } from "./InMemoryStorage";

export type LocalStorageAdapterOptions = {
  /** Logical namespace for all keys, e.g., "pot" (Playground of Tomorrow). */
  namespace?: string;
  /** Version number for namespacing: keys are stored under `${namespace}/v${version}/...` */
  version?: number;
  /** Provide a custom backing store; defaults to window.localStorage or MemoryStorage. */
  store?: KeyValueStore;
  /** Callback for non-fatal errors (JSON parse, quota, etc.). */
  onError?: (err: unknown) => void;
};

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function safeJSONParse<T>(text: string): T | null {
  try {
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

function safeJSONStringify(value: unknown): string {
  // Avoid throwing on undefined / functions
  return JSON.stringify(value, (_k, v) => (typeof v === "undefined" ? null : v));
}

/**
 * SSR-safe, namespaced, versioned storage adapter over localStorage (with memory fallback).
 * All callers use logical keys (e.g., "profile", "progress/ep01"), not raw prefixed keys.
 */
export class LocalStorageAdapter implements StorageAdapter {
  private readonly ns: string;
  private readonly version: number;
  private readonly store: KeyValueStore;
  private readonly onError?: (err: unknown) => void;

  constructor(options?: LocalStorageAdapterOptions) {
    const { namespace = "pot", version = 1, store, onError } = options ?? {};
    this.ns = namespace;
    this.version = version;
    this.onError = onError;

    // Choose store with graceful fallbacks
    if (store) {
      this.store = store;
    } else if (isBrowser()) {
      // Some browsers (Safari private) throw on setItem—wrap in try/catch and fallback.
      try {
        window.localStorage.setItem("__pot_probe__", "1");
        window.localStorage.removeItem("__pot_probe__");
        this.store = window.localStorage;
      } catch {
        this.store = new InMemoryStorage();
      }
    } else {
      this.store = new InMemoryStorage();
    }
  }

  /** Full prefix used internally, e.g., "pot/v1/". */
  private get prefix(): string {
    return `${this.ns}/v${this.version}/`;
  }

  /** Map logical key -> physical storage key. */
  private toPhysicalKey(logicalKey: string): string {
    return `${this.prefix}${logicalKey}`;
  }

  get<T>(key: string): T | null {
    const k = this.toPhysicalKey(key);
    try {
      const raw = this.store.getItem(k);
      if (raw === null) return null;
      const parsed = safeJSONParse<T>(raw);
      return parsed;
    } catch (err) {
      this.onError?.(err);
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    const k = this.toPhysicalKey(key);
    try {
      const raw = safeJSONStringify(value);
      this.store.setItem(k, raw);
    } catch (err) {
      this.onError?.(err);
      // failed to save
      console.warn("LocalStorageAdapter: failed to save", err);
    }
  }

  remove(key: string): void {
    const k = this.toPhysicalKey(key);
    try {
      this.store.removeItem(k);
    } catch (err) {
      this.onError?.(err);
    }
  }

  list(prefix: string = ""): string[] {
    const physicalPrefix = this.prefix + prefix;
    const result: string[] = [];
    try {
      // Iterate like Web Storage
      for (let i = 0; i < this.store.length; i++) {
        const k = this.store.key(i);
        if (!k) continue;
        if (k.startsWith(physicalPrefix)) {
          // Strip the adapter prefix to return logical keys
          const logicalKey = k.substring(this.prefix.length);
          result.push(logicalKey);
        }
      }
      return result.sort();
    } catch (err) {
      this.onError?.(err);
      return [];
    }
  }

  /** Copy all keys from prevVersion namespace into current version if not present. */
  migrate(prevVersion: number): void {
    const prevPrefix = `${this.ns}/v${prevVersion}/`;
    try {
      const toCopy: Array<{ from: string; to: string }> = [];
      for (let i = 0; i < this.store.length; i++) {
        const k = this.store.key(i);
        if (!k || !k.startsWith(prevPrefix)) continue;
        const logical = k.substring(prevPrefix.length);
        const dest = this.toPhysicalKey(logical);
        if (this.store.getItem(dest) === null) {
          toCopy.push({ from: k, to: dest });
        }
      }
      toCopy.forEach(({ from, to }) => {
        const val = this.store.getItem(from);
        if (val !== null) this.store.setItem(to, val);
      });
    } catch (err) {
      this.onError?.(err);
    }
  }

  clearNamespace(): void {
    try {
      const toRemove: string[] = [];
      for (let i = 0; i < this.store.length; i++) {
        const k = this.store.key(i);
        if (k?.startsWith(this.prefix)) toRemove.push(k);
      }
      toRemove.forEach((k) => this.store.removeItem(k));
    } catch (err) {
      this.onError?.(err);
    }
  }
}
