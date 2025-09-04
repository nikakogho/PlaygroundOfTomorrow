// src/lib/storage/keys.ts

/**
 * Logical keys used throughout the app. These are *not* prefixed with namespace/version;
 * the adapter will add those. Callers should only use these helpers.
 */
export const storageKeys = {
  profile: "profile", // LearnerProfile
  mastery: "mastery", // MasteryState map
  portfolio: "portfolio", // Portfolio
  appVersion: "app/version",
  progress: (questSlug: string) => `progress/${questSlug.toLowerCase()}`,
};
