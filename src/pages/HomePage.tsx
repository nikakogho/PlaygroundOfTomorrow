import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Lock, CheckCircle, Clock, Star } from 'lucide-react';
import { CourseMetadata } from '@/lib/types';
import { getCourses } from '@/lib/courseLoader';
import { useProgress } from '@/lib/ProgressContext';

interface CourseCardProps {
  course: CourseMetadata;
  progress: { completed: number; total: number };
}

function CourseCard({ course, progress }: CourseCardProps) {
  const progressPercentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
  
  let logo = <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>;
  if (course.category === 'neuro') {
    logo = <img src="brain.png" alt="Brain Icon" className="w-14 h-14" />;
  }
  else if (course.category === 'biotech') {
    logo = <img src="biotech.png" alt="Biotech Icon" className="w-14 h-14" />;
  }
  else if (course.category === 'space') {
    logo = <img src="rocket.png" alt="Space Icon" className="w-14 h-14" />;
  }

  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <div className="course-card h-full">
        <div className={`w-full h-32 bg-${course.gradient} rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
          <div className="text-white/80">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                {logo}
              </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-blue transition-colors">
              {course.title}
            </h3>
            <p className="text-sm text-text-secondary mt-1 line-clamp-2">
              {course.summary}
            </p>
          </div>
          
          {progress.total > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-muted">Progress</span>
                <span className="text-text-accent font-medium">
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
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {course.moduleIds.length} modules
              </span>
              {progressPercentage === 100 && (
                <span className="flex items-center gap-1 text-accent-green">
                  <CheckCircle className="w-3 h-3" />
                  Completed
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1 text-accent-blue text-xs font-medium">
              <Play className="w-3 h-3" />
              {progressPercentage === 0 ? 'Start' : 'Continue'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [courses, setCourses] = useState<CourseMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const { getOverallProgress, isLoaded } = useProgress();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const coursesData = await getCourses();
        setCourses(coursesData);
      } catch (error) {
        console.error('Failed to load courses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading || !isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary">
          Master The Universe, Body, Mind, Machine
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          Interactive courses designed to build deep understanding through hands-on learning and problem solving.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course}
            progress={getOverallProgress(course.id)}
          />
        ))}
      </div>

      <div className="text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface-elevated border border-border-interactive rounded-lg">
          <Star className="w-4 h-4 text-accent-orange" />
          <span className="text-sm text-text-secondary">More courses coming soon!</span>
        </div>
      </div>
    </div>
  );
}