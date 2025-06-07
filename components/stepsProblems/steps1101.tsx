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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Dodawanie logarytmów</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_3{\left(\frac{3}{2}\right)} + \log_3{\left(\frac{2}{9}\right)}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Skorzystaj z własności logarytmów:
            </p>
            <ChoiceQuestion
              question="Jak można zapisać sumę logarytmów o tej samej podstawie?"
              choices={[
                { label: "\\log_3{\\left(\\frac{3}{2} \\cdot \\frac{2}{9}\\right)}", value: "a" },
                { label: "\\log_3{\\left(\\frac{3}{2} + \\frac{2}{9}\\right)}", value: "b" },
                { label: "\\log_3{\\left(\\frac{3}{2} - \\frac{2}{9}\\right)}", value: "c" },
                { label: "\\log_3{\\left(\\frac{3}{2} \\div \\frac{2}{9}\\right)}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z własności logarytmów wiemy, że $$\log_a{b} + \log_a{c} = \log_a{(b \cdot c)}$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz iloczyn argumentów logarytmów:
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{3}{2} \cdot \frac{2}{9}$$?"
              choices={[
                { label: "\\frac{1}{3}", value: "a" },
                { label: "\\frac{3}{9}", value: "b" },
                { label: "\\frac{2}{3}", value: "c" },
                { label: "\\frac{1}{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\frac{3}{2} \cdot \frac{2}{9} = \frac{6}{18} = \frac{1}{3}$$"
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
              question="Ile wynosi $$\log_3{(\frac{1}{3})}$$?"
              choices={[
                { label: "-1", value: "a" },
                { label: "1", value: "b" },
                { label: "0", value: "c" },
                { label: "3", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Ponieważ $$3^{-1} = \frac{1}{3}$$, więc $$\log_3{(\frac{1}{3})} = -1$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <StudentNotes
            equation="\log_3{\left(\frac{3}{2}\right)} + \log_3{\left(\frac{2}{9}\right)}"
            steps={[
              {
                step: "\\log_3{\\left(\\frac{3}{2}\\right)} + \\log_3{\\left(\\frac{2}{9}\\right)} = \\log_3{\\left(\\frac{3}{2} \\cdot \\frac{2}{9}\\right)} = \\log_3{\\left(\\frac{1}{3}\\right)} = -1"
              }
            ]}
            solutions={["-1"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;