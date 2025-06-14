"use client";

import { useState, useMemo, Children, type ReactNode, useEffect } from "react";
import { useStepContext } from "@/context/StepContext";

type Props = {
  children?: ReactNode;
  correctAnswer: string | number;
};

export function FillInTheBlank({ children, correctAnswer }: Props) {
  const { onStepComplete, isStepActive } = useStepContext();
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // If the step is not active, show the correct answer immediately.
  useEffect(() => {
    if (!isStepActive) {
      setUserAnswer(String(correctAnswer));
      setIsCorrect(true);
    }
  }, [isStepActive, correctAnswer]);

  const hint = useMemo(() => {
    // @ts-expect-error
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
    setIsCorrect(null);
  };

  const borderColor = isCorrect === true ? "border-green-500" : isCorrect === false ? "border-red-500" : "border-gray-300";

  return (
    <div className="my-4 flex flex-col items-start">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={userAnswer}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && isCorrect !== true && isStepActive && handleCheck()}
          disabled={!isStepActive || isCorrect === true} // Disable if not active or correct
          className={`border rounded-md px-2 py-1 bg-transparent transition-colors ${borderColor}`}
          aria-label="Fill in the blank"
        />
        {isStepActive && isCorrect !== true && (
          <button onClick={handleCheck} className="bg-blue-600 text-white px-3 py-1 rounded-md">Check</button>
        )}
      </div>

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