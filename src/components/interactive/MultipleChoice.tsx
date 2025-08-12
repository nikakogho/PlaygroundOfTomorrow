'use client';

import React, { useState, Children, isValidElement } from 'react';
import { CheckCircle, XCircle, Circle } from 'lucide-react';
import { MultipleChoiceProps } from '@/lib/types';

export default function MultipleChoice({ children, correctAnswer, isComplete, onComplete, explanation }: MultipleChoiceProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const options = Children.toArray(children);

  if (isComplete && selected === null) {
    setSelected(correctAnswer);
    setShowResult(true);
    return;
  }

  const handleSelect = (index: number) => {
    if (showResult) return;
    
    setSelected(index);
    
    if (index === correctAnswer) {
      // Add success animation
      setShowResult(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  return (
    <div className="space-y-3 my-6">
      {options.map((option, index) => {
        if (!isValidElement(option)) return null;
        
        const isSelected = selected === index;
        const isCorrect = index === correctAnswer;
        const isWrong = isSelected && !isCorrect;

        let className = "w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between group";
        
        if (!isCorrect && showResult) {
          className += " bg-surface border-border text-text-muted cursor-not-allowed";
        } else if (isSelected && isCorrect) {
          className += " bg-accent-green/20 border-accent-green text-text-primary success-bounce";
        } else if (isSelected && isWrong) {
          className += " bg-destructive/20 border-destructive text-text-primary";
        } else {
          className += " interactive-button hover:border-accent-blue hover:bg-surface-elevated cursor-pointer";
        }

        return (
          <button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={showResult}
            className={className}
          >
            <span className="flex-1 text-left">
              {option.props.children}
            </span>
            <div className="ml-4">
              {!showResult ? (
                <Circle className="w-5 h-5 text-text-muted group-hover:text-accent-blue transition-colors" />
              ) : isCorrect ? (
                <CheckCircle className="w-5 h-5 text-accent-green" />
              ) : isWrong ? (
                <XCircle className="w-5 h-5 text-destructive" />
              ) : (
                <Circle className="w-5 h-5 text-text-muted" />
              )}
            </div>
          </button>
        );
      })}
      
      {showResult && explanation && (
        <div className="mt-4 p-4 bg-surface-elevated border border-border-interactive rounded-lg">
          <p className="text-sm text-text-secondary">{explanation}</p>
        </div>
      )}
    </div>
  );
}