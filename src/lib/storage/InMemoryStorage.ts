// src/lib/storage/InMemoryStorage.ts
import type { KeyValueStore } from "./StorageAdapter";

/**
 * In-memory fallback for SSR or restricted environments.
 * Mirrors the subset of Web Storage used by the adapter.
 */
export class InMemoryStorage implements KeyValueStore {
  private map = new Map<string, string>();

  get length(): number {
    return this.map.size;
  }

  getItem(key: string): string | null {
    return this.map.has(key) ? (this.map.get(key) as string) : null;
  }

  setItem(key: string, value: string): void {
    this.map.set(key, value);
  }

  removeItem(key: string): void {
    this.map.delete(key);
  }

  key(index: number): string | null {
    return Array.from(this.map.keys())[index] ?? null;
  }
}
