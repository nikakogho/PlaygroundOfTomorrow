import { CourseMetadata } from './types';
import coursesData from '../data/courses.json';

export async function getCourses(): Promise<CourseMetadata[]> {
  return coursesData as CourseMetadata[];
}

export async function getCourse(courseId: string): Promise<CourseMetadata | undefined> {
  const courses = await getCourses();
  return courses.find(c => c.id === courseId);
}

export async function loadModuleSections(moduleId: string) {
  try {
    const module = await import(`../data/modules/${moduleId}.ts`);
    return module.sections || [];
  } catch (error) {
    console.error(`Error loading module ${moduleId}:`, error);
    return [];
  }
}