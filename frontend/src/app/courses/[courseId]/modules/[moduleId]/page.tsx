import { ModulePagePure } from "@/components/ModulePage";

export default function ModulePage({
  params,
}: {
  params: { courseId: string; moduleId: string };
}) {
  return (
    <ModulePagePure
      courseId={params.courseId}
      moduleId={params.moduleId}
    />
  );
}
