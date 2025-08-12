'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { FillInTheBlankProps } from '@/lib/types';

export default function FillInTheBlank({ 
  correctAnswer, 
  isComplete,
  onComplete, 
  placeholder = "Type your answer...",
  caseSensitive = false 
}: FillInTheBlankProps) {
  const [value, setValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [attempts, setAttempts] = useState(0);

  console.log('Correct answer at first is:', correctAnswer);

  if (isComplete && value === '') {
    const aCorrectAnswer = Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer;
    setValue(aCorrectAnswer);
    setIsCorrect(true);
    return;
  }

  const checkAnswer = (userAnswer: string, correct: string | string[]): boolean => {
    const answers = Array.isArray(correct) ? correct : [correct];
    let userInput = caseSensitive ? userAnswer.trim() : userAnswer.trim().toLowerCase();
    userInput = userInput.replace(/"/g, "'"); // Normalize quotes
    
    return answers.some(answer => {
      const checkAgainst = caseSensitive ? answer : answer.toLowerCase();
      return userInput === checkAgainst;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (isComplete) return;

    e.preventDefault();
    if (isCorrect || !value.trim()) return;

    setIsSubmitted(true);
    const correct = checkAnswer(value, correctAnswer);
    console.log('Value:', value, 'Correct Answer:', correctAnswer, 'Is Correct:', correct, 'isComplete', isComplete);
    setIsCorrect(correct);
    setAttempts(prev => prev + 1);

    if (correct) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      // Reset after showing error briefly
      setTimeout(() => {
        setIsSubmitted(false);
        setValue('');
      }, 2000);
    }
  };

  const getInputClassName = () => {
    let className = "flex-1 bg-surface border border-border-interactive rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all duration-200";
    
    if (isSubmitted) {
      if (isCorrect) {
        className += " border-accent-green bg-accent-green/10";
      } else {
        className += " border-destructive bg-destructive/10";
      }
    }
    
    return className;
  };

  const getButtonClassName = () => {
    let className = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2";
    
    if (isCorrect) {
      className += " bg-accent-green text-white success-bounce";
    } else if (isSubmitted && !isCorrect) {
      className += " bg-destructive text-white";
    } else {
      className += " bg-gradient-brand text-white hover:shadow-lg hover:scale-105";
    }
    
    return className;
  };

  return (
    <div className="my-6">
      <form onSubmit={handleSubmit} className="flex gap-3 items-stretch">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={isCorrect}
          className={getInputClassName()}
          placeholder={placeholder}
          autoComplete="off"
        />
        <button 
          type="submit" 
          disabled={isCorrect || !value.trim()}
          className={getButtonClassName()}
        >
          {isCorrect ? (
            <>
              <CheckCircle className="w-4 h-4" />
              Correct!
            </>
          ) : isSubmitted ? (
            <>
              <XCircle className="w-4 h-4" />
              Try Again
            </>
          ) : (
            <>
              Check
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      
      {attempts > 2 && !isCorrect && (
        <div className="mt-3 p-3 bg-surface-elevated border border-border-interactive rounded-lg">
          <p className="text-sm text-text-muted">
            Hint: {Array.isArray(correctAnswer) ? correctAnswer[0] : correctAnswer}
          </p>
        </div>
      )}
    </div>
  );
}