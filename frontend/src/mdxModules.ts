import type { ComponentType } from 'react';
import ModuleNeuro10101 from '../content/neuro101/01-cells-and-membranes.mdx';
import ModuleNeuro10102 from '../content/neuro101/02-action-potentials.mdx';

interface ModuleEntry {
  Component: ComponentType;
}

const modules: Record<string, ModuleEntry> = {
  'neuro101/neuro101-01': { Component: ModuleNeuro10101 },
  'neuro101/neuro101-02': { Component: ModuleNeuro10102 },
};

export function getMdxModule(courseId: string, moduleId: string): ModuleEntry | undefined {
  return modules[`${courseId}/${moduleId}`];
}
