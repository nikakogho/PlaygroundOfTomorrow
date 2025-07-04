// src/components/MarkCompleteSection.tsx
"use client";
import { useModuleStatus } from "@/hooks/useModuleStatus";
import type { ModuleEntry } from "@/mdxModules";
import { LockIcon } from "./icons";

export default function MarkCompleteSection({ courseId, moduleId, next, isUnlocked }: {
  courseId: string;
  moduleId: string;
  next?: ModuleEntry;
  isUnlocked: boolean;
}) {
    const { isComplete, markComplete } = useModuleStatus(courseId, moduleId);
    const nextUnlocked = isComplete;

    return (
        <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-white">You're done!</h3>
                <p className="text-slate-600 dark:text-slate-400">You've completed this module. Great work!</p>
            </div>
            <div className="flex items-center gap-4">
                <button
                    className="font-semibold rounded-lg bg-emerald-600 px-4 py-2 text-white shadow-sm transition-colors disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed"
                    disabled={!isUnlocked || isComplete}
                    onClick={markComplete}
                >
                    {isComplete ? "Completed" : "Mark as Complete"}
                </button>
                {next && (
                    nextUnlocked ? (
                        <a href={`#courses/${courseId}/modules/${next.meta.moduleId}`} className="font-semibold text-sky-600 dark:text-sky-400 hover:underline">
                            Next Module →
                        </a>
                    ) : (
                        <span className="flex items-center gap-2 font-semibold text-slate-500 dark:text-slate-400">
                            <LockIcon className="h-4 w-4" /> Next Locked
                        </span>
                    )
                )}
            </div>
        </div>
    );
};
