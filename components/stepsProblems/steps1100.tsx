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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Dodawanie logarytmów</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_3{3} + \log_3{27}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Skorzystaj z własności logarytmów:
            </p>
            <ChoiceQuestion
              question="Jak można zapisać sumę logarytmów o tej samej podstawie?"
              choices={[
                { label: "\\log_3{(3 \\cdot 27)}", value: "a" },
                { label: "\\log_3{(3 + 27)}", value: "b" },
                { label: "(\\log_3{3}) \\cdot (\\log_3{27})", value: "c" },
                { label: "\\log_3{(27 - 3)}", value: "d" },
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
              question="Ile wynosi $$3 \cdot 27$$?"
              choices={[
                { label: "81", value: "a" },
                { label: "30", value: "b" },
                { label: "24", value: "c" },
                { label: "9", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$3 \cdot 27 = 81$$"
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
              question="Ile wynosi $$\log_3{81}$$?"
              choices={[
                { label: "4", value: "a" },
                { label: "3", value: "b" },
                { label: "27", value: "c" },
                { label: "9", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Ponieważ $$3^4 = 81$$, więc $$\log_3{81} = 4$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <StudentNotes
            equation="\log_3{3} + \log_3{27}"
            steps={[
              {
                step: "\\log_3{3} + \\log_3{27} = \\log_3{(3 \\cdot 27)} = \\log_3{81} = 4"
              }
            ]}
            solutions={["4"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;