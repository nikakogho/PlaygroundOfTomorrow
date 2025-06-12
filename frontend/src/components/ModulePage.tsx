import type { ComponentType } from "react";

export function ModulePagePure({
  courseId,
  moduleId,
  Content,
}: {
  courseId: string;
  moduleId: string;
  Content: ComponentType;
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Course: {courseId}</h1>
      <p className="mt-4 text-lg">Module: {moduleId}</p>
      <div className="prose mt-6">
        <Content />
      </div>
    </main>
  );
}
