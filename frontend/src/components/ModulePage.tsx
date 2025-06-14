"use client";

import {
  Children,
  ReactElement,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { getCourseModules, ModuleEntry } from "@/mdxModules";
import MarkCompleteSection from "./MarkCompleteSection";
import { useStepProgress } from "@/hooks/useStepProgress";
import { StepContext } from "@/context/StepContext";

/**
 * Takes a flat array of rendered React nodes from MDX and chunks them
 * into an array of arrays, using the <hr /> element as a delimiter.
 */
function chunkChildrenByHR(children: ReactNode): ReactNode[][] {
  const chunks: ReactNode[][] = [];
  let currentChunk: ReactNode[] = [];

  Children.forEach(children, (child) => {
    // Check if the child is an <hr> element, which marks the end of a step
    const isDelimiter =
      typeof child === "object" && child !== null && "type" in child && child.type === "hr";

    if (isDelimiter) {
      if (currentChunk.length > 0) {
        chunks.push(currentChunk);
      }
      currentChunk = []; // Start a new chunk
    } else {
      currentChunk.push(child);
    }
  });

  // Add the final chunk if it has content
  if (currentChunk.length > 0) {
    chunks.push(currentChunk);
  }

  return chunks;
}


export function ModulePageLayout({
  courseId,
  moduleId,
  children, // The rendered MDX from the server page
}: {
  courseId: string;
  moduleId: string;
  children: ReactNode;
}) {
  const { currentStep, advanceStep } = useStepProgress(courseId, moduleId);
  const activeStepRef = useRef<HTMLDivElement>(null);

  // 1. Chunk the incoming children array by the <hr /> delimiter
  const stepContents = chunkChildrenByHR(children);
  
  const totalSteps = stepContents.length;
  const isModuleComplete = totalSteps > 0 && currentStep >= totalSteps;

  const modules = getCourseModules(courseId);
  const idx = modules.findIndex((m) => m.meta.moduleId === moduleId);
  const next: ModuleEntry | undefined = idx >= 0 ? modules[idx + 1] : undefined;

  useEffect(() => {
    setTimeout(() => {
        activeStepRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }, 100);
  }, [currentStep]);

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Course: {courseId}</h1>
      <p className="text-lg">Module: {moduleId}</p>
      
      {/* Progress Bar */}
      {totalSteps > 0 && !isModuleComplete && (
        <div className="w-full bg-gray-200 rounded-full h-2 my-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all" 
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      )}

      {/* Render the chunks (steps) up to the current one */}
      {stepContents.slice(0, currentStep + 1).map((chunk, index) => {
        const isActive = index === currentStep;

        const hasQuiz = chunk.some(node => {
            if (typeof node !== 'object' || !node || !('type' in node)) return false;
            
            const typeObject = (node as ReactElement).type as any;
            
            // Check if it's a lazy-loaded component
            if (typeObject?.$$typeof?.toString() === 'Symbol(react.lazy)') {
                // WARNING: Accessing private properties. This is brittle but necessary here.
                // Based on debug logs, the component name is at _payload.value[2]
                const componentName = typeObject._payload?.value?.[2];
                return componentName === 'MultipleChoice' || componentName === 'FillInTheBlank';
            }
            return false;
        });

        return (
          <div key={index} ref={isActive ? activeStepRef : null} className="border-b py-6 last:border-b-0">
            <StepContext.Provider value={{ onStepComplete: advanceStep, isStepActive: isActive }}>
                {chunk}
                {isActive && !hasQuiz && (
                    <div className="mt-6">
                        <button onClick={advanceStep} className="rounded bg-blue-600 px-4 py-2 text-white">
                            Continue
                        </button>
                    </div>
                )}
            </StepContext.Provider>
          </div>
        );
      })}

      {isModuleComplete && (
        <div className="pt-8">
            <h2 className="text-xl font-bold mb-4">Module Complete!</h2>
            <MarkCompleteSection
                courseId={courseId}
                moduleId={moduleId}
                next={next}
                isUnlocked={true}
            />
        </div>
      )}
    </main>
  );
}