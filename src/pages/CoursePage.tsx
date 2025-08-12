import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Lock, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { CourseMetadata } from '@/lib/types';
import { getCourse, loadModuleSections } from '@/lib/courseLoader';
import { useProgress } from '@/lib/ProgressContext';

interface ModuleCardProps {
  moduleId: string;
  moduleIndex: number;
  courseId: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  completedSections: number;
  totalSections: number;
}

function ModuleCard({ 
  moduleId, 
  moduleIndex, 
  courseId, 
  isUnlocked, 
  isCompleted, 
  completedSections, 
  totalSections 
}: ModuleCardProps) {
  const progressPercentage = totalSections > 0 ? (completedSections / totalSections) * 100 : 0;
  
  const content = (
    <div className={`p-6 rounded-xl border transition-all duration-300 ${
      isUnlocked 
        ? 'course-card cursor-pointer' 
        : 'bg-surface/50 border-border cursor-not-allowed'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isCompleted 
                ? 'bg-accent-green text-white' 
                : isUnlocked 
                  ? 'bg-gradient-brand text-white' 
                  : 'bg-surface-interactive text-text-muted'
            }`}>
              {isCompleted ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                moduleIndex + 1
              )}
            </div>
            <h3 className={`text-lg font-semibold ${
              isUnlocked ? 'text-text-primary' : 'text-text-muted'
            }`}>
              Module {moduleIndex + 1}
            </h3>
          </div>
          
          <p className={`text-sm mb-4 capitalize ${
            isUnlocked ? 'text-text-secondary' : 'text-text-muted'
          }`}>
            {moduleId.replace(/-/g, ' ')}
          </p>
          
          {isUnlocked && totalSections > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-muted">
                  {completedSections}/{totalSections} sections
                </span>
                <span className="text-accent-blue font-medium">
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <div className="w-full bg-surface-interactive rounded-full h-2">
                <div 
                  className="bg-gradient-brand h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="ml-4">
          {!isUnlocked ? (
            <Lock className="w-5 h-5 text-text-muted" />
          ) : isCompleted ? (
            <CheckCircle className="w-5 h-5 text-accent-green" />
          ) : (
            <Play className="w-5 h-5 text-accent-blue" />
          )}
        </div>
      </div>
      
      {!isUnlocked && (
        <div className="mt-4 text-xs text-text-muted">
          Complete the previous module to unlock
        </div>
      )}
    </div>
  );

  return isUnlocked ? (
    <Link to={`/courses/${courseId}/${moduleId}`}>
      {content}
    </Link>
  ) : (
    <div>
      {content}
    </div>
  );
}

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<CourseMetadata | null>(null);
  const [moduleDetails, setModuleDetails] = useState<{ [key: string]: number }>({});
  const [loading, setLoading] = useState(true);
  const { getModuleProgress, isModuleCompleted, isLoaded } = useProgress();

  useEffect(() => {
    const loadCourseData = async () => {
      if (!courseId) return;
      
      try {
        const courseData = await getCourse(courseId);
        if (courseData) {
          setCourse(courseData);
          
          // Load module details
          const details: { [key: string]: number } = {};
          for (const moduleId of courseData.moduleIds) {
            const sections = await loadModuleSections(moduleId);
            details[moduleId] = sections.length;
          }
          setModuleDetails(details);
        }
      } catch (error) {
        console.error('Failed to load course:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourseData();
  }, [courseId]);

  if (loading || !isLoaded || !course) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue"></div>
      </div>
    );
  }

  let prevModuleCompleted = true;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>
        
        <div className="space-y-4">
          <div className={`w-full h-48 bg-${course.gradient} rounded-xl flex items-center justify-center mb-6`}>
            <div className="text-center text-white">
              <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
              <h1 className="text-3xl font-bold">{course.title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-text-secondary">
            {course.summary}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-text-primary">Course Modules</h2>
        <div className="space-y-4">
          {course.moduleIds.map((moduleId, index) => {
            const isUnlocked = prevModuleCompleted;
            const completedSections = getModuleProgress(courseId!, moduleId).length;
            const totalSections = moduleDetails[moduleId] || 0;
            const isCompleted = isModuleCompleted(courseId!, moduleId, totalSections);
            
            // Update for next iteration
            prevModuleCompleted = isCompleted;

            return (
              <ModuleCard
                key={moduleId}
                moduleId={moduleId}
                moduleIndex={index}
                courseId={courseId!}
                isUnlocked={isUnlocked}
                isCompleted={isCompleted}
                completedSections={completedSections}
                totalSections={totalSections}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}