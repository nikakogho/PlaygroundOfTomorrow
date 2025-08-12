export interface CourseMetadata {
  id: string;
  title: string;
  summary: string;
  moduleIds: string[];
  gradient: string;
  category: 'biotech' | 'neuro';
}

export interface ModuleSection {
  content: string;
  type: 'content' | 'interactive';
}

export interface UserProgress {
  [courseId: string]: {
    completedModules?: string[];
    completedSections: {
      [moduleId: string]: number[];
    };
  };
}

export interface InteractiveComponentProps {
  isComplete: boolean;
  onComplete: () => void;
}

export interface MultipleChoiceProps extends InteractiveComponentProps {
  children: React.ReactNode;
  correctAnswer: number;
  explanation?: string;
}

export interface FillInTheBlankProps extends InteractiveComponentProps {
  correctAnswer: string | string[];
  placeholder?: string;
  caseSensitive?: boolean;
}