import type { ComponentType } from 'react';

import ModuleNeuro10101 from '../content/neuro101/01-cells-and-membranes.mdx';
import ModuleNeuro10102 from '../content/neuro101/02-action-potentials.mdx';
import ModuleNeuro10103 from '../content/neuro101/03-neuron-at-rest.mdx';
import ModuleNeuro10104 from '../content/neuro101/04-the-firing-signal.mdx';
import ModuleNeuro10105 from '../content/neuro101/05-passing-the-message.mdx';

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
  'neuro101/neuro101-03': {
    Component: ModuleNeuro10103,
    meta: {
      courseId: 'neuro101',
      moduleId: 'neuro101-03',
      title: 'Neuron at Rest',
      order: 3,
      unlockIf: 'neuro101-02',
      assetURL: '',
    },
  },
  'neuro101/neuro101-04': {
    Component: ModuleNeuro10104,
    meta: {
      courseId: 'neuro101',
      moduleId: 'neuro101-04',
      title: 'The Firing Signal',
      order: 4,
      unlockIf: 'neuro101-03',
      assetURL: '',
    },
  },
  'neuro101/neuro101-05': {
    Component: ModuleNeuro10105,
    meta: {
      courseId: 'neuro101',
      moduleId: 'neuro101-05',
      title: 'Passing the Message',
      order: 5,
      unlockIf: 'neuro101-04',
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
