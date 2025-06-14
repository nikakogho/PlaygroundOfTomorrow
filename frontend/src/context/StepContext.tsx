// src/context/StepContext.tsx
"use client";

import { createContext, useContext } from "react";

interface StepContextType {
  onStepComplete: () => void;
}

export const StepContext = createContext<StepContextType | null>(null);

export function useStepContext() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepContext must be used within a Step component");
  }
  return context;
}