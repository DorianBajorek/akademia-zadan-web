"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Odejmowanie logarytmów</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_7{98} - \log_7{2}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Skorzystaj z własności logarytmów:
            </p>
            <ChoiceQuestion
              question="Jak można zapisać różnicę logarytmów o tej samej podstawie?"
              choices={[
                { label: "\\log_7{\\left(\\frac{98}{2}\\right)}", value: "a" },
                { label: "\\log_7{\\left(98 - 2\\right)}", value: "b" },
                { label: "\\log_7{\\left(98 \\cdot 2\\right)}", value: "c" },
                { label: "\\log_7{\\left(\\frac{2}{98}\\right)}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z własności logarytmów wiemy, że $$\log_a{b} - \log_a{c} = \log_a{(\frac{b}{c})}$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz iloraz argumentów logarytmów:
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{98}{2}$$?"
              choices={[
                { label: "49", value: "a" },
                { label: "50", value: "b" },
                { label: "48", value: "c" },
                { label: "47", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\frac{98}{2} = 49$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartość logarytmu:
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\log_7{49}$$?"
              choices={[
                { label: "2", value: "a" },
                { label: "3", value: "b" },
                { label: "1", value: "c" },
                { label: "7", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Ponieważ $$7^2 = 49$$, więc $$\log_7{49} = 2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <StudentNotes
            equation="\log_7{98} - \log_7{2}"
            steps={[
              {
                step: "\\log_7{98} - \\log_7{2} = \\log_7{\\left(\\frac{98}{2}\\right)} = \\log_7{49} = 2"
              }
            ]}
            solutions={["2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;