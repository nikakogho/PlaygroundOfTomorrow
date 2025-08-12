import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, User, Home, Brain } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="flex items-center gap-3 text-xl font-bold text-text-primary hover:text-accent-blue transition-colors"
            >
              <div className="p-2 bg-gradient-brand rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              LearnMind
            </Link>
            
            <nav className="flex items-center gap-6">
              <Link 
                to="/" 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-surface-elevated text-text-primary' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-interactive'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Courses</span>
              </Link>
              
              <Link 
                to="/profile" 
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                  isActive('/profile') 
                    ? 'bg-surface-elevated text-text-primary' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-interactive'
                }`}
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="mt-16 border-t border-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-text-muted">
            <p>&copy; 2024 LearnMind. Interactive learning for curious minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}