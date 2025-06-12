/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModulePagePure } from "@/components/ModulePage";

export default function ModulePage(props: any) {
  const { params } = props;
  return (
    <ModulePagePure courseId={params.courseId} moduleId={params.moduleId} />
  );
}
