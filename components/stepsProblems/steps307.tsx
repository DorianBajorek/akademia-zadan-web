"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie logarytmiczne</h2>
        <p className="text-lg text-gray-800">Oblicz wartość logarytmu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_2(0{,}125^6 \cdot \sqrt{64})" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "2^x = 0{,}125^6 \\cdot \\sqrt{64}", value: "a" },
                { label: "x^2 = 0{,}125^6 \\cdot \\sqrt{64}", value: "b" },
                { label: "2 \\cdot x = 0{,}125^6 \\cdot \\sqrt{64}", value: "c" },
                { label: "2 = (0{,}125^6 \\cdot \\sqrt{64})^x", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z definicji logarytmu wiemy, że $$\log_2(0{,}125^6 \cdot \sqrt{64}) = x$$ oznacza $$2^x = 0{,}125^6 \cdot \sqrt{64}$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć wyrażenie wewnątrz logarytmu do prostszej postaci:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "(2^{-3})^6 \\cdot 2^3", value: "a" },
                { label: "(2^{-6})^3 \\cdot 2^6", value: "b" },
                { label: "2^{-18} \\cdot 2^{-3}", value: "c" },
                { label: "2^{-9} \\cdot 2^6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$(2^{-3})^6 \cdot 2^3$$. <br>
              Dlaczego? <br>
              $$0{,}125 = \frac{1}{8} = 2^{-3}$$ <br>
              $$\sqrt{64} = 8 = 2^3$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość wyrażenie korzystając z własności potęg:
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "2^{-15}", value: "a" },
                { label: "2^{-3}", value: "b" },
                { label: "2^9", value: "c" },
                { label: "2^{-18}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$2^{-15}$$. <br>
              $$(2^{-3})^6 \cdot 2^3 = 2^{-18} \cdot 2^3 = 2^{-15}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
        <>
            <p className="text-lg text-gray-700 mt-6">
            Oblicz wartość logarytmu:
            </p>
            <NumericQuestion
            question="Jaka jest wartość x?"
            correctAnswer="-15"
            explanation="Poprawne rozwiązanie to $$x = -15$$. <br>
            Skoro $$2^x = 2^{-15}$$, to z porównania wykładników wynika, że $$x = -15$$."
            onComplete={() => handleStageComplete(4)}
            />
        </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\log_2(0{,}125^6 \cdot \sqrt{64})"
            steps={[
              {
                step: "\\log_2(0{,}125^6 \\cdot \\sqrt{64}) = x \\Rightarrow 2^x = 0{,}125^6 \\cdot \\sqrt{64}",
              },
              {
                step: "0{,}125 = 2^{-3}, \\\\ \\sqrt{64} = 2^3 \\\\ 2^x = (2^{-3})^6 \\cdot 2^3",
              },
              {
                step: "2^x = 2^{-18} \\cdot 2^3 = 2^{-15}",
              },
              {
                step: "x = -15",
              }
            ]}
            solutions={["x = -15"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;