'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserProgress } from './types';
import coursesData from '../data/courses.json';

interface ProgressContextType {
  progress: UserProgress;
  isLoaded: boolean;
  completeModule: (courseId: string, moduleId: string) => void;
  completeSection: (courseId: string, moduleId: string, sectionIndex: number) => void;
  getModuleProgress: (courseId: string, moduleId: string) => number[];
  isModuleCompleted: (courseId: string, moduleId: string, totalSections: number) => boolean;
  resetAllProgress: () => void;
  getOverallProgress: (courseId: string) => { completed: number; total: number };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progress, setProgress] = useState<UserProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('userProgress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const updateProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    localStorage.setItem('userProgress', JSON.stringify(newProgress));
  };

  const completeModule = (courseId: string, moduleId: string) => {
    const newProgress = { ...progress };

    if (!newProgress[courseId]) {
      newProgress[courseId] = { completedModules: [], completedSections: {} };
    }
    if (!newProgress[courseId].completedModules) {
      newProgress[courseId].completedModules = [];
    }
    if (!newProgress[courseId].completedModules.includes(moduleId)) {
      newProgress[courseId].completedModules.push(moduleId);
      newProgress[courseId].completedModules.sort();
    }

    updateProgress(newProgress);
  }

  const completeSection = (courseId: string, moduleId: string, sectionIndex: number) => {
    const newProgress = { ...progress };
    if (!newProgress[courseId]) {
      newProgress[courseId] = { completedSections: {} };
    }
    if (!newProgress[courseId].completedSections[moduleId]) {
      newProgress[courseId].completedSections[moduleId] = [];
    }
    const completed = newProgress[courseId].completedSections[moduleId];
    if (!completed.includes(sectionIndex)) {
      completed.push(sectionIndex);
      completed.sort((a, b) => a - b);
    }

    updateProgress(newProgress);
  };

  const getModuleProgress = (courseId: string, moduleId: string): number[] => {
    return progress[courseId]?.completedSections[moduleId] || [];
  };
  
  const isModuleCompleted = (courseId: string, moduleId: string, totalSections: number): boolean => {
    const completed = getModuleProgress(courseId, moduleId);
    return completed.length === totalSections;
  };

  const getOverallProgress = (courseId: string) => {
    const courseProgress = progress[courseId];
    if (!courseProgress) return { completed: 0, total: 0 };

    let totalModules = coursesData.filter(course => course.id === courseId)[0]?.moduleIds.length || 0;

    return { completed: courseProgress.completedModules?.length ?? 0, total: totalModules };
  };

  const resetAllProgress = () => {
    if (window.confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      updateProgress({});
    }
  };

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      isLoaded, 
      completeModule,
      completeSection, 
      getModuleProgress, 
      isModuleCompleted, 
      resetAllProgress,
      getOverallProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};