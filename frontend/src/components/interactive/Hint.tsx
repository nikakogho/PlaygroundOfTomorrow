// src/components/interactive/Hint.tsx
import type { ReactNode } from "react";

/**
 * This component's only purpose is to be a typed data carrier for hint text.
 * It will be found by its parent component (e.g., MultipleChoice) and
 * its children will be extracted and rendered elsewhere. It renders null itself.
 */
export function Hint({ children }: { children: ReactNode }) {
  // It doesn't render anything on its own.
  return null;
}