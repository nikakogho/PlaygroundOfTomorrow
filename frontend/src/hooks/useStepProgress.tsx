// src/hooks/useStepProgress.tsx
import { useState, useEffect, useCallback } from "react";

export interface StepProgressState {
  currentStep: number;
  advanceStep: () => void;
}

export function useStepProgress(
  courseId: string,
  moduleId: string
): StepProgressState {
  const key = `step-progress/${courseId}/${moduleId}`;

  // Default to step 0. State will be loaded from localStorage client-side.
  const [currentStep, setCurrentStep] = useState(0);

  // Load the saved step from localStorage after the initial render.
  useEffect(() => {
    const savedStep = localStorage.getItem(key);
    if (savedStep) {
      setCurrentStep(parseInt(savedStep, 10));
    }
  }, [key]);

  // Save the current step to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem(key, String(currentStep));
  }, [currentStep, key]);

  const advanceStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  return { currentStep, advanceStep };
}