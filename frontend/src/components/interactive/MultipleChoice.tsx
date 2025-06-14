"use client";

import { useState, Children, useMemo, type ReactNode } from "react";
import { useStepContext } from "@/context/StepContext";

type Props = {
  children: ReactNode;
  correctAnswer: number; // 1-based index
};

export function MultipleChoice({ children, correctAnswer }: Props) {
  const { onStepComplete } = useStepContext();
  const [selected, setSelected] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // ** START: THIS IS THE CORRECTED LOGIC TO FIND THE HINT **
  const { hint, options } = useMemo(() => {
    const allChildren = Children.toArray(children);
    // @ts-expect-error - Checking component type by name is a practical approach here
    const hintNode = allChildren.find((child) => child.type?.name === 'Hint');
    // @ts-expect-error - Filter out the hint to get only the answer options
    const optionNodes = allChildren.filter((child) => child.type?.name !== 'Hint');
    return { hint: hintNode, options: optionNodes };
  }, [children]);
  // ** END: CORRECTED LOGIC **

  const showSkipButton = attempts >= 3;

  const handleSelect = (index: number) => {
    if (selected !== null) return; // Lock answer after first selection

    const isCorrect = index === correctAnswer;
    setSelected(index);

    if (isCorrect) {
      setTimeout(() => onStepComplete(), 300);
    } else {
      setAttempts((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    setSelected(correctAnswer); // Show the correct answer
    setTimeout(() => onStepComplete(), 1000);
  };

  return (
    <div className="my-4">
      <ul className="list-none p-0 space-y-2">
        {/* We now map over the filtered 'options' array */}
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

          return (
            <li
              key={itemIndex}
              onClick={() => handleSelect(itemIndex)}
              className={`p-3 border rounded-md transition-colors ${selected === null ? "cursor-pointer hover:bg-gray-50" : "cursor-default"} ${stateClass}`}
            >
              {option}
            </li>
          );
        })}
      </ul>
      
      {/* This section now correctly renders the hint and skip controls */}
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
    </div>
  );
}