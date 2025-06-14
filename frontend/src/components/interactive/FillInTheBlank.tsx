"use client";

import { useState, useMemo, Children, type ReactNode } from "react";
import { useStepContext } from "@/context/StepContext";
import { Hint } from "./Hint";

type Props = {
  children?: ReactNode;
  correctAnswer: string | number;
};

export function FillInTheBlank({ children, correctAnswer }: Props) {
  const { onStepComplete } = useStepContext();
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const hint = useMemo(() => {
    // @ts-expect-error - Checking component type by name is a practical approach here
    return Children.toArray(children).find((child) => child.type?.name === 'Hint');
  }, [children]);

  const showSkipButton = attempts >= 3;

  const handleCheck = () => {
    const answerIsCorrect = userAnswer.trim().toLowerCase() === String(correctAnswer).toLowerCase();
    setIsCorrect(answerIsCorrect);

    if (answerIsCorrect) {
      setTimeout(() => onStepComplete(), 300);
    } else {
      setAttempts((prev) => prev + 1);
    }
  };
  
  const handleSkip = () => {
    setIsCorrect(true);
    setUserAnswer(String(correctAnswer));
    setTimeout(() => onStepComplete(), 1000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    setIsCorrect(null); // Reset validation state to give visual feedback that this is a new attempt
  };

  const borderColor = isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : "border-gray-300";

  return (
    <div className="my-4 flex flex-col items-start">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userAnswer}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && isCorrect !== true && handleCheck()}
          disabled={isCorrect === true}
          className={`border rounded-md px-2 py-1 bg-transparent transition-colors ${borderColor}`}
          aria-label="Fill in the blank"
        />
        {isCorrect !== true && (
          <button onClick={handleCheck} className="bg-blue-600 text-white px-3 py-1 rounded-md">Check</button>
        )}
      </div>

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