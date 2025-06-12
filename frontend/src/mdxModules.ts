import type { ComponentType } from 'react';

import ModuleNeuro10101 from '../content/neuro101/01-cells-and-membranes.mdx';
import ModuleNeuro10102 from '../content/neuro101/02-action-potentials.mdx';

export interface ModuleMeta {
  courseId: string;
  moduleId: string;
  title: string;
  order: number;
  unlockIf: string;
  assetURL: string;
}

export interface ModuleEntry {
  Component: ComponentType;
  meta: ModuleMeta;
}


const modules: Record<string, ModuleEntry> = {
  'neuro101/neuro101-01': {
    Component: ModuleNeuro10101,
    meta: {
      courseId: 'neuro101',
      moduleId: 'neuro101-01',
      title: 'Cells & Membranes',
      order: 1,
      unlockIf: '',
      assetURL: '',
    },
  },
  'neuro101/neuro101-02': {
    Component: ModuleNeuro10102,
    meta: {
      courseId: 'neuro101',
      moduleId: 'neuro101-02',
      title: 'Action Potential',
      order: 2,
      unlockIf: 'neuro101-01',
      assetURL: '',
    },
  },
};

export function getMdxModule(courseId: string, moduleId: string): ModuleEntry | undefined {
  return modules[`${courseId}/${moduleId}`];
}

export function getCourseModules(courseId: string): ModuleEntry[] {
  return Object.values(modules)
    .filter((m) => m.meta.courseId === courseId)
    .sort((a, b) => a.meta.order - b.meta.order);
}
