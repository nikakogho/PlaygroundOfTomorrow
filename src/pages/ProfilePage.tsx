import React, { useState, useEffect } from 'react';
import { User, Trophy, Target, RotateCcw, BookOpen, CheckCircle } from 'lucide-react';
import { useProgress } from '@/lib/ProgressContext';
import { getCourses } from '@/lib/courseLoader';
import { CourseMetadata } from '@/lib/types';

interface CourseProgressProps {
  course: CourseMetadata;
  completed: number;
  total: number;
}

function CourseProgressCard({ course, completed, total }: CourseProgressProps) {
  const progressPercentage = total > 0 ? (completed / total) * 100 : 0;
  
  return (
    <div className="bg-surface border border-border rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-text-primary">{course.title}</h3>
          <p className="text-sm text-text-muted capitalize">{course.category}</p>
        </div>
        <div className={`p-2 bg-${course.gradient} rounded-lg`}>
          <BookOpen className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-muted">Progress</span>
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
        
        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>{completed} sections completed</span>
          {progressPercentage === 100 && (
            <span className="flex items-center gap-1 text-accent-green">
              <CheckCircle className="w-3 h-3" />
              Complete
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { progress, isLoaded, resetAllProgress } = useProgress();
  const [courses, setCourses] = useState<CourseMetadata[]>([]);
  const [stats, setStats] = useState({
    totalSections: 0,
    completedSections: 0,
    coursesStarted: 0,
    coursesCompleted: 0
  });

  useEffect(() => {
    const loadData = async () => {
      const coursesData = await getCourses();
      setCourses(coursesData);
      
      // Calculate stats
      let totalSections = 0;
      let completedSections = 0;
      let coursesStarted = 0;
      let coursesCompleted = 0;
      
      coursesData.forEach(course => {
        const courseProgress = progress[course.id];
        if (courseProgress) {
          coursesStarted++;
          const courseCompletedSections = Object.values(courseProgress.completedSections)
            .reduce((sum, sections) => sum + sections.length, 0);
          completedSections += courseCompletedSections;
          
          // Estimate if course is completed (this is simplified)
          if (courseCompletedSections >= course.moduleIds.length * 2) {
            coursesCompleted++;
          }
        }
        
        // Estimate total sections (simplified)
        totalSections += course.moduleIds.length * 3;
      });
      
      setStats({
        totalSections,
        completedSections,
        coursesStarted,
        coursesCompleted
      });
    };

    if (isLoaded) {
      loadData();
    }
  }, [progress, isLoaded]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-brand rounded-full flex items-center justify-center mx-auto">
          <User className="w-10 h-10 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Your Learning Profile</h1>
          <p className="text-text-secondary">Track your progress and achievements</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface border border-border rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Target className="w-6 h-6 text-accent-blue" />
          </div>
          <div className="text-2xl font-bold text-text-primary">{stats.completedSections}</div>
          <div className="text-sm text-text-muted">Sections Completed</div>
        </div>
        
        <div className="bg-surface border border-border rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-accent-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-accent-purple" />
          </div>
          <div className="text-2xl font-bold text-text-primary">{stats.coursesStarted}</div>
          <div className="text-sm text-text-muted">Courses Started</div>
        </div>
        
        <div className="bg-surface border border-border rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Trophy className="w-6 h-6 text-accent-green" />
          </div>
          <div className="text-2xl font-bold text-text-primary">{stats.coursesCompleted}</div>
          <div className="text-sm text-text-muted">Courses Completed</div>
        </div>
      </div>

      {/* Course Progress */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-text-primary">Course Progress</h2>
        
        {courses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-text-muted">No courses available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map(course => {
              const courseProgress = progress[course.id];
              const completed = courseProgress 
                ? Object.values(courseProgress.completedSections)
                    .reduce((sum, sections) => sum + sections.length, 0)
                : 0;
              const total = course.moduleIds.length * 3; // Estimated
              
              return (
                <CourseProgressCard
                  key={course.id}
                  course={course}
                  completed={completed}
                  total={total}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Debug Information */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-text-primary">Progress Data</h3>
        <div className="bg-surface border border-border rounded-xl p-6">
          <pre className="text-xs text-text-muted overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(progress, null, 2)}
          </pre>
        </div>
        
        <button
          onClick={resetAllProgress}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-destructive/20 border border-destructive/50 text-destructive rounded-lg hover:bg-destructive/30 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Reset All Progress
        </button>
      </div>
    </div>
  );
}