// src/components/MarkCompleteSection.tsx
"use client";
import Link from "next/link";
import { useModuleStatus } from "@/hooks/useModuleStatus";
import type { ModuleEntry } from "@/mdxModules";

export default function MarkCompleteSection({
  courseId,
  moduleId,
  next,
  isUnlocked,
}: {
  courseId: string;
  moduleId: string;
  next?: ModuleEntry;
  isUnlocked: boolean;
}) {
  const { isComplete, markComplete } = useModuleStatus(courseId, moduleId);
  const nextUnlocked = isComplete;

  return (
    <div>
      <button
        className="rounded bg-green-600 px-3 py-1 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled={!isUnlocked || isComplete} // Use the new prop here
        onClick={markComplete}
      >
        {isComplete ? "Completed" : "✔ Mark complete"}
      </button>
      {next &&
        (nextUnlocked ? (
          <Link
            href={`/courses/${courseId}/modules/${next.meta.moduleId}`}
            className="ml-4 text-blue-600 underline"
          >
            Next module
          </Link>
        ) : (
          <span className="ml-4 text-gray-500">Next module locked</span>
        ))}
    </div>
  );
}