// src/lib/storage/StorageAdapter.ts

export interface StorageAdapter {
  /** Get a typed value by logical key; returns null if missing. */
  get<T>(key: string): T | null;

  /** Set a typed value by logical key. */
  set<T>(key: string, value: T): void;

  /** Remove a logical key. */
  remove(key: string): void;

  /**
   * List logical keys stored under this adapter that begin with the given prefix.
   * Example: list("progress/") -> ["progress/ep01", "progress/ep08"]
   */
  list(prefix?: string): string[];

  /**
   * Optional migration helper: copy all entries from prevVersion namespace into current.
   * No-op if the adapter doesn't support versioned namespaces.
   */
  migrate?(prevVersion: number): void;

  /** Optional: clear all keys under the current namespace/version. */
  clearNamespace?(): void;
}

/** A minimal key-value interface LocalStorageAdapter can wrap. */
export interface KeyValueStore {
  readonly length: number;
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  key(index: number): string | null;
}
