// src/lib/storage/client.ts
import { LocalStorageAdapter } from "./LocalStorageAdapter";
import { storageKeys } from "./keys";

/**
 * Singleton storage instance for the app.
 * Swap this file to export a FirebaseAdapter later, keeping the same interface.
 */
export const storage = new LocalStorageAdapter({
  namespace: "pot", // Playground Of Tomorrow
  version: 1,
  onError: (err) => {
    // eslint-disable-next-line no-console
    console.warn("[storage]", err);
  },
});

export { storageKeys };
