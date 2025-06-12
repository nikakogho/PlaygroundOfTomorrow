export function ModulePagePure({
  courseId,
  moduleId,
}: {
  courseId: string;
  moduleId: string;
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Course: {courseId}</h1>
      <p className="mt-4 text-lg">Module: {moduleId}</p>
    </main>
  );
}
