/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModulePagePure } from "@/components/ModulePage";
import { getMdxModule } from "@/mdxModules";

export default function ModulePage(props: any) {
  const { params } = props;
  const mod = getMdxModule(params.courseId, params.moduleId);
  if (!mod) {
    return <p className="p-8">Module not found.</p>;
  }
  return (
    <ModulePagePure
      courseId={params.courseId}
      moduleId={params.moduleId}
      Content={mod.Component}
    />
  );
}
