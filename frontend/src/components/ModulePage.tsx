"use client";

import { Children, type ReactNode, useEffect, useRef, type ReactElement } from "react";
import Link from "next/link";
import { getCourseModules } from "@/mdxModules";
import MarkCompleteSection from "./MarkCompleteSection";
import { useStepProgress } from "@/hooks/useStepProgress";
import { StepContext } from "@/context/StepContext";
import courses from "../../content/mockCourses.json";

function chunkChildrenByHR(children: ReactNode): ReactNode[][] {
    // ... (The chunking function remains the same as in the single-file example)
    const chunks: ReactNode[][] = [];
    let currentChunk: ReactNode[] = [];
    Children.forEach(children, (child) => {
        const isDelimiter = typeof child === "object" && child !== null && "type" in child && child.type === "hr";
        if (isDelimiter) {
            if (currentChunk.length > 0) chunks.push(currentChunk);
            currentChunk = [];
        } else {
            currentChunk.push(child);
        }
    });
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}

export function ModulePageLayout({ courseId, moduleId, children }: { courseId: string; moduleId: string; children: ReactNode; }) {
    const { currentStep, advanceStep } = useStepProgress(courseId, moduleId);
    const activeStepRef = useRef<HTMLDivElement>(null);
    const stepContents = chunkChildrenByHR(children);
    const totalSteps = stepContents.length;
    const isModuleComplete = totalSteps > 0 && currentStep >= totalSteps;

    const modules = getCourseModules(courseId);
    const currentModuleIndex = modules.findIndex((m) => m.meta.moduleId === moduleId);
    const currentModule = modules[currentModuleIndex];
    const course = courses.find(c => c.id === courseId);
    const next = modules[currentModuleIndex + 1];

    useEffect(() => {
        setTimeout(() => {
            activeStepRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 150);
    }, [currentStep]);

    return (
        <div className="bg-white dark:bg-slate-900 flex-1">
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="lg:w-1/4 lg:sticky top-24 self-start">
                    <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <Link href="/courses" className="text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline mb-4 block">
                            &larr; Back to Courses
                        </Link>
                        <h2 className="font-bold text-lg text-slate-800 dark:text-white mb-1">{course?.title}</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Module Progress</p>
                        <nav>
                            <ul className="space-y-2">
                                {modules.map((mod, index) => {
                                    const isActive = mod.meta.moduleId === moduleId;
                                    return (
                                        <li key={mod.meta.moduleId}>
                                            <Link href={`/courses/${courseId}/modules/${mod.meta.moduleId}`}
                                               className={`flex items-center gap-3 p-3 rounded-md text-sm font-medium transition-colors ${
                                                   isActive ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                               }`}>
                                               <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                                                   {index + 1}
                                               </span>
                                               {mod.meta.title}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <h1>{currentModule.meta.title}</h1>

                        {totalSteps > 0 && !isModuleComplete && (
                            <div className="my-6">
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{currentStep} of {totalSteps}</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                    <div className="bg-sky-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
                                </div>
                            </div>
                        )}

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
                                <div key={index} ref={isActive ? activeStepRef : null} className={`py-6 border-t border-slate-200 dark:border-slate-800 transition-opacity duration-500 ${!isActive && 'opacity-60'}`}>
                                    <StepContext.Provider value={{ onStepComplete: advanceStep, isStepActive: isActive }}>
                                        {chunk}
                                        {isActive && !hasQuiz && !isModuleComplete && (
                                            <div className="mt-6">
                                                <button onClick={advanceStep} className="bg-sky-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-sky-700 transition-colors shadow-sm">
                                                    Continue
                                                </button>
                                            </div>
                                        )}
                                    </StepContext.Provider>
                                </div>
                            );
                        })}

                        {isModuleComplete && (
                            <div className="mt-8">
                                <MarkCompleteSection
                                    courseId={courseId}
                                    moduleId={moduleId}
                                    next={next}
                                    isUnlocked={true}
                                />
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}