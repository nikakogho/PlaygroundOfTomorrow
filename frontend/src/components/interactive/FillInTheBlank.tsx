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
    const [isCorrect, setIsCorrect] = useState(null as boolean | null);
    const [attempts, setAttempts] = useState(0);
    const [showHint, setShowHint] = useState(false);

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
    const showSkipButton = attempts >= 2;

    const handleCheck = () => {
        const answerIsCorrect = userAnswer.trim().toLowerCase() === String(correctAnswer).toLowerCase();
        setIsCorrect(answerIsCorrect);
        if (answerIsCorrect) {
            setTimeout(() => onStepComplete(), 500);
        } else {
            setAttempts(prev => prev + 1);
        }
    };

    const handleSkip = () => {
        setIsCorrect(true);
        setUserAnswer(String(correctAnswer));
        setTimeout(() => onStepComplete(), 1000);
    };

    const handleChange = (e: any) => {
        setUserAnswer(e.target.value);
        setIsCorrect(null);
    };

    const borderColor = isCorrect === true ? "border-emerald-500 ring-emerald-500/50" : isCorrect === false ? "border-rose-500 ring-rose-500/50" : "border-slate-300 dark:border-slate-600 focus:border-sky-500 focus:ring-sky-500/50";
    const disabled = !isStepActive || isCorrect === true;

    return (
        <div className="my-6 flex flex-col items-start gap-4">
            <div className="flex items-center space-x-3">
                <input
                    type="text"
                    value={userAnswer}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === 'Enter' && !disabled && handleCheck()}
                    disabled={disabled}
                    className={`border-2 rounded-lg px-4 py-2 bg-transparent transition-colors w-48 focus:ring-2 focus:outline-none ${borderColor}`}
                    aria-label="Fill in the blank"
                />
                {isStepActive && isCorrect !== true && (
                    <button onClick={handleCheck} className="bg-sky-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-sky-700 transition-colors shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed" disabled={!userAnswer.trim()}>Check</button>
                )}
            </div>
            {isStepActive && (
                <div className="text-sm w-full">
                    {hint && !showHint && (
                         <button onClick={() => setShowHint(true)} className="font-semibold text-sky-600 dark:text-sky-400 hover:underline">
                            Stuck? Get a hint.
                        </button>
                    )}
                    {showHint && <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 mb-4">{hint}</div>}
                    {showSkipButton && isCorrect !== true && (
                        <div className="mt-4">
                            <button onClick={handleSkip} className="text-sm font-semibold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:underline">
                                Show Answer & Continue
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
