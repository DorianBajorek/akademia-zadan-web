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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wartości wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\left( \frac{2^{-2} \cdot 3^{-1}}{2^{-1} \cdot 3^{-2}} \right)^0" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Zastosowanie własności potęgowania dla wykładnika 0:
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość wyrażenia podniesionego do potęgi 0?"
              choices={[
                { label: "0", value: "a" },
                { label: "1", value: "b" },
                { label: "\\text{Nie da się określić}", value: "c" },
                { label: "2^{-1} \\cdot 3^1", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Każda liczba różna od zera podniesiona do potęgi 0 równa się 1. Zatem: 
              $$\left( \frac{2^{-2} \cdot 3^{-1}}{2^{-1} \cdot 3^{-2}} \right)^0 = 1$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/potegaDoZera.png"
            />
          </>
        )}
        
        {completedStages.length === 1 && (
          <StudentNotes
            equation="\left( \frac{2^{-2} \cdot 3^{-1}}{2^{-1} \cdot 3^{-2}} \right)^0"
            steps={[
              {
                step: "\\left( \\frac{2^{-2} \\cdot 3^{-1}}{2^{-1} \\cdot 3^{-2}} \\right)^0 = 1",
              }
            ]}
            solutions={["1"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;