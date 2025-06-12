import type { ComponentType } from "react";
import { getCourseModules, ModuleEntry } from "@/mdxModules";
import MarkCompleteSection from "./MarkCompleteSection";

export function ModulePagePure({
  courseId,
  moduleId,
  Content,
}: {
  courseId: string;
  moduleId: string;
  Content: ComponentType;
}) {
  const modules = getCourseModules(courseId);
  const idx = modules.findIndex((m) => m.meta.moduleId === moduleId);
  const next: ModuleEntry | undefined = idx >= 0 ? modules[idx + 1] : undefined;

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Course: {courseId}</h1>
      <p className="text-lg">Module: {moduleId}</p>
      <div className="prose mt-6">
        <Content />
      </div>
      <MarkCompleteSection courseId={courseId} moduleId={moduleId} next={next} />
    </main>
  );
}
