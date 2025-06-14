"use client";

import { Children, type ReactNode } from "react";
import { StepContext } from "@/context/StepContext";

function hasChildComponent(children: ReactNode, typeName: string): boolean {
  return Children.toArray(children).some((child) => {
    if (typeof child !== "object" || !child || !("props" in child)) return false;
    // @ts-expect-error - `type.name` is not on the official type but exists at runtime
    if (child.type?.name === typeName) return true;
    if (child.props.children) {
      return hasChildComponent(child.props.children, typeName);
    }
    return false;
  });
}

export function ModuleStep({
  children,
  onComplete,
  isActive,
}: {
  children: ReactNode;
  onComplete: () => void;
  isActive: boolean;
}) {
  const hasQuiz =
    hasChildComponent(children, "MultipleChoice") ||
    hasChildComponent(children, "FillInTheBlank");

  return (
    // Pass both onComplete and the new isStepActive flag into the context
    <StepContext.Provider
      value={{ onStepComplete: onComplete, isStepActive: isActive }}
    >
      <div className="border-b py-6 last:border-b-0">
        {children}
        {isActive && !hasQuiz && (
          <div className="mt-6">
            <button
              onClick={onComplete}
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Continue
            </button>
          </div>
        )}
      </div>
    </StepContext.Provider>
  );
}

ModuleStep.isModuleStep = true;