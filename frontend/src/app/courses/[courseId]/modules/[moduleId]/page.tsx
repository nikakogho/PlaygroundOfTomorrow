/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModulePageLayout } from "@/components/ModulePage";
import { getMdxModule } from "@/mdxModules";

export default async function ModulePage(props: any) {
  const params = await props.params;
  const mod = getMdxModule(params.courseId, params.moduleId);

  if (!mod) {
    return <p className="p-8">Module not found.</p>;
  }

  const { Component } = mod;

  return (
    <ModulePageLayout
      courseId={params.courseId}
      moduleId={params.moduleId}
    >
      <Component />
    </ModulePageLayout>
  );
}
