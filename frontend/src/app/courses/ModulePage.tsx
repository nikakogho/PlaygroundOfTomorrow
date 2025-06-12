// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ModulePage({ params }: any) {
  const { courseId, moduleId } = params;
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Course: {courseId}</h1>
      <p className="mt-4 text-lg">Module: {moduleId}</p>
    </main>
  );
}
