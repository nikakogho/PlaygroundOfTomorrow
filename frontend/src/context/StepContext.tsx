"use client";

import { createContext, useContext } from "react";

// The "contract" for our context.
interface StepContextType {
  onStepComplete: () => void;
  isStepActive: boolean;
}

export const StepContext = createContext<StepContextType | null>(null);

export function useStepContext() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext must be used within a ModuleStep component");
  }
  return context;
}