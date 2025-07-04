"use client";

import { useState, Children, useMemo, type ReactNode, useEffect } from "react";
import { useStepContext } from "@/context/StepContext";
import { CheckIcon, XIcon } from "../icons";

type Props = {
  children: ReactNode;
  correctAnswer: number; // 1-based index
};

export function MultipleChoice({ children, correctAnswer }: Props) {
    const { onStepComplete, isStepActive } = useStepContext();
    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        if (!isStepActive) setSelected(correctAnswer);
    }, [isStepActive, correctAnswer]);

    const { options } = useMemo(() => {
        const allChildren = Children.toArray(children);
        return { options: allChildren };
    }, [children]);

    const handleSelect = (index: number) => {
        if (!isStepActive) return;
        setSelected(index);
        if (index === correctAnswer) {
            setTimeout(() => onStepComplete(), 500);
        }
    };

    return (
        <div className="my-6">
            <ul className="flex flex-col space-y-3">
                {options.map((option, index) => {
                    const itemIndex = index + 1;
                    const isSelected = selected === itemIndex;
                    const isCorrect = itemIndex === correctAnswer;
                    
                    let stateClass = "border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300";
                    let cursorClass = "cursor-pointer hover:border-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/30";
                    let icon = null;

                    if (isSelected) {
                        if (isCorrect) {
                            stateClass = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 ring-2 ring-emerald-500/50";
                            icon = <CheckIcon className="h-6 w-6 text-emerald-500" />;
                        } else {
                            stateClass = "border-rose-500 bg-rose-50 dark:bg-rose-900/30 text-rose-800 dark:text-rose-200 ring-2 ring-rose-500/50";
                            icon = <XIcon className="h-6 w-6 text-rose-500" />;
                        }
                    }

                    if (selected === correctAnswer) cursorClass = "cursor-default";

                    return (
                        <li key={itemIndex} onClick={() => handleSelect(itemIndex)}
                            className={`flex items-center justify-between p-4 border-2 rounded-lg transition-all duration-200 ${stateClass} ${cursorClass}`}>
                            <span className="font-medium">{option}</span>
                            {icon}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}