import { useEffect, useState } from 'react';

export interface ModuleStatus {
  isComplete: boolean;
  markComplete: () => void;
  reset: () => void;
}

export function useModuleStatus(courseId: string, moduleId: string): ModuleStatus {
  const key = `progress/${courseId}/${moduleId}`;
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const markComplete = () => setIsComplete(true);
  const reset = () => setIsComplete(false);

  useEffect(() => {
    const savedState = localStorage.getItem(key) === 'true';
    setIsComplete(savedState);
  }, [key]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isComplete) {
      localStorage.setItem(key, 'true');
    } else {
      localStorage.removeItem(key);
    }
  }, [isComplete, key]);

  return { isComplete, markComplete, reset };
}
