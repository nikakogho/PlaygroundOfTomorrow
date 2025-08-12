import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Trophy } from 'lucide-react';
import { loadModuleSections } from '@/lib/courseLoader';
import { useProgress } from '@/lib/ProgressContext';
import { MDXRenderer } from '@/components/MDXRenderer';

interface ModuleSection {
  content: string;
  type: 'content' | 'interactive';
}

export default function ModulePage() {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const navigate = useNavigate();
  const [sections, setSections] = useState<ModuleSection[]>([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const { getModuleProgress, completeSection, completeModule, isLoaded } = useProgress();
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const loadModule = async () => {
      if (!moduleId) return;
      
      try {
        const sectionsData = await loadModuleSections(moduleId);
        setSections(sectionsData);
        
        if (isLoaded && courseId) {
          const completed = getModuleProgress(courseId, moduleId);
          setCurrentSectionIndex(completed.length);
        }
        
        // Initialize refs array
        sectionRefs.current = new Array(sectionsData.length).fill(null);
      } catch (error) {
        console.error('Failed to load module:', error);
      } finally {
        setLoading(false);
      }
    };

    loadModule();
  }, [moduleId, courseId, isLoaded, getModuleProgress]);

  // Auto-scroll to current section
  useEffect(() => {
    if (sectionRefs.current[currentSectionIndex] && sections.length > 0) {
        const targetElement = sectionRefs.current[currentSectionIndex];
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }
  }, [currentSectionIndex, sections.length]);

  const handleSectionComplete = () => {
    if (!courseId || !moduleId) return;
    
    completeSection(courseId, moduleId, currentSectionIndex);
    
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      completeModule(courseId, moduleId);
      // Module completed
      setShowCelebration(true);
      setTimeout(() => {
        navigate(`/courses/${courseId}`);
      }, 3000);
    }
  };

  const canProceed = () => {
    const currentSection = sections[currentSectionIndex];
    return currentSection?.type === 'content';
  };

  const handleNext = () => {
    if (canProceed()) {
      handleSectionComplete();
    }
  };

  if (loading || !isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue"></div>
      </div>
    );
  }

  if (sections.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="text-2xl font-bold text-text-primary">Module Not Found</h1>
        <p className="text-text-secondary">This module doesn't exist or failed to load.</p>
        <Link 
          to={`/courses/${courseId}`}
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course
        </Link>
      </div>
    );
  }

  const currentSection = sections[currentSectionIndex];
  const progress = ((currentSectionIndex) / sections.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link 
          to={`/courses/${courseId}`}
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Course
        </Link>
        
        { currentSectionIndex < sections.length && 
        <div className="text-sm text-text-muted">
          Section {currentSectionIndex + 1} of {sections.length}
        </div>
        }
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted capitalize">
            {moduleId?.replace(/-/g, ' ')}
          </span>
          <span className="text-accent-blue font-medium">
            {currentSectionIndex === sections.length && <>✅</> } {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-surface-interactive rounded-full h-2">
          <div 
            className="bg-gradient-brand h-2 rounded-full transition-all duration-500 progress-animate"
            style={{ '--progress-width': `${progress}%` } as React.CSSProperties}
          />
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[500px]">
        {sections.map((section, index) => {
          if (index > currentSectionIndex) return null;

          return (
            <div 
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`transition-all duration-500 ${
                index === currentSectionIndex 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-60 transform -translate-y-4'
              }`}
            >
              <div className="bg-surface border border-border rounded-xl p-8 mb-6">
                <MDXRenderer 
                  content={section.content}
                  isComplete={currentSectionIndex > index}
                  onComplete={index === currentSectionIndex ? handleSectionComplete : () => {}}
                />
                
                {section.type === 'content' && index === currentSectionIndex && (
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-brand text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      {index === sections.length - 1 ? 'Complete Module' : 'Continue'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Celebration Modal */}
      {showCelebration && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-surface border border-border rounded-xl p-8 text-center space-y-4 max-w-md mx-4">
            <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto success-bounce">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary">Module Complete!</h2>
            <p className="text-text-secondary">
              Great job! You've successfully completed this module. 
              Keep up the excellent work!
            </p>
            <div className="flex justify-center">
              <CheckCircle className="w-6 h-6 text-accent-green" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}