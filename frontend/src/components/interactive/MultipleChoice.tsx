"use client";

import { useState, Children, useMemo, type ReactNode, useEffect } from "react";
import { useStepContext } from "@/context/StepContext";

type Props = {
  children: ReactNode;
  correctAnswer: number; // 1-based index
};

export function MultipleChoice({ children, correctAnswer }: Props) {
  const { onStepComplete, isStepActive } = useStepContext();
  const [selected, setSelected] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // If the step is not active, immediately show the correct answer.
  useEffect(() => {
    if (!isStepActive) {
      setSelected(correctAnswer);
    }
  }, [isStepActive, correctAnswer]);

  const { hint, options } = useMemo(() => {
    const allChildren = Children.toArray(children);
    // @ts-expect-error - Checking component type by name is a practical approach here
    const hintNode = allChildren.find((child) => child.type?.name === 'Hint');
    const optionNodes = allChildren.filter(
      // @ts-expect-error
      (child) => child.type?.name !== 'Hint'
    );
    return { hint: hintNode, options: optionNodes };
  }, [children]);

  const showSkipButton = attempts >= 3;

  const handleSelect = (index: number) => {
    // Only allow interaction if the step is active and not already answered
    if (!isStepActive || selected !== null) return;

    const isCorrect = index === correctAnswer;
    setSelected(index);

    if (isCorrect) {
      setTimeout(() => onStepComplete(), 300);
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    setSelected(correctAnswer);
    setTimeout(() => onStepComplete(), 1000);
  };

  return (
    <div className="my-4">
      <ul className="list-none p-0 space-y-2">
        {options.map((option, index) => {
          const itemIndex = index + 1;
          const isSelected = selected === itemIndex;
          const isCorrectAnswer = correctAnswer === itemIndex;

          let stateClass = "border-gray-300";
          if (isSelected) {
            stateClass = isCorrectAnswer ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500";
          } else if (selected !== null && isCorrectAnswer) {
            stateClass = "bg-green-100 border-green-500";
          }

          // Disable clicks if the step is not active
          const cursorClass = isStepActive && selected === null ? "cursor-pointer hover:bg-gray-50" : "cursor-default";

          return (
            <li
              key={itemIndex}
              onClick={() => handleSelect(itemIndex)}
              className={`p-3 border rounded-md transition-colors ${cursorClass} ${stateClass}`}
            >
              {option}
            </li>
          );
        })}
      </ul>
      
      {/* Only show hint/skip controls on the active step */}
      {isStepActive && (
         <div className="mt-4 text-sm">
          {hint && !showHint && (
            <button onClick={() => setShowHint(true)} className="text-blue-600 underline">Show Hint</button>
          )}
          {showHint && <div className="p-3 bg-gray-100 rounded-md">{hint}</div>}

          {showSkipButton && (
            <div className="mt-4">
              <p className="text-gray-600 mb-2">Stuck? You can reveal the answer and continue.</p>
              <button onClick={handleSkip} className="bg-yellow-500 text-white px-3 py-1 rounded-md">
                Show Answer & Continue
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}