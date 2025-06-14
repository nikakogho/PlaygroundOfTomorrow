// src/components/ModuleStep.tsx
"use client";

import { Children, type ReactNode } from "react";
import { StepContext } from "@/context/StepContext";

// A helper to recursively check if a component of a certain type exists in the tree
function hasChildComponent(children: ReactNode, typeName: string): boolean {
  return Children.toArray(children).some((child) => {
    if (typeof child !== "object" || !child || !("props" in child)) return false;
    // This check is simplistic. It relies on the component's function name.
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
  // Check if this step contains an interactive quiz component
  const hasQuiz =
    hasChildComponent(children, "MultipleChoice") ||
    hasChildComponent(children, "FillInTheBlank");

  return (
    // Provide the context to children
    <StepContext.Provider value={{ onStepComplete: onComplete }}>
      <div className="border-b py-6 last:border-b-0">
        {children}
        {/* If this is the active step and it has no quiz, show a Continue button */}
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