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
  const [showHint, setShowHint] = useState(false);

  // If the step is not active, immediately show the correct answer.
  useEffect(() => {
    if (!isStepActive) {
      console.log("Step is not active, showing correct answer immediately.");
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

  const handleSelect = (index: number) => {
    // Only allow interaction if the step is active and not already answered
    if (!isStepActive) return;

    setSelected(index);

    if (index === correctAnswer) {
      console.log("Correct answer selected:", index);
      setTimeout(() => onStepComplete(), 300);
    }
  };

  return (
    <div className="my-4">
      <ul className="list-none p-0 space-y-2">
        {options.map((option, index) => {
          const itemIndex = index + 1;
          const isSelected = selected === itemIndex;
          const selectedIsCorrectAnswer = correctAnswer === selected;

          let stateClass = "border-gray-300";
          if (isSelected) {
            stateClass = selectedIsCorrectAnswer ? "bg-green-100 border-green-500" : "bg-red-100 border-red-500";
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
      
      {isStepActive && (
         <div className="mt-4 text-sm">
          {hint && !showHint && (
            <button onClick={() => setShowHint(true)} className="text-blue-600 underline">Show Hint</button>
          )}
          {showHint && <div className="p-3 bg-gray-100 rounded-md">{hint}</div>}
        </div>
      )}
    </div>
  );
}