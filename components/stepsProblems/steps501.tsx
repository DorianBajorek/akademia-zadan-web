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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Zapisz w postaci jednej potęgi o podstawie 3:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="3^{-3} \cdot \sqrt{27}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 3:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla liczby 27?"
              choices={[
                { label: "27 = 3^2", value: "a" },
                { label: "27 = 3^3", value: "b" },
                { label: "27 = 3^4", value: "c" },
                { label: "27 = 3^5", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$27 = 3^3$$, ponieważ $$3^3 = 27$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć pierwiastek na potęgę o wykładniku ułamkowym:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$\sqrt{27}$$?"
              choices={[
                { label: "\\sqrt{27} = 27^{\\frac{1}{3}} = (3^3)^{\\frac{1}{3}}", value: "a" },
                { label: "\\sqrt{27} = 27^{2} = (3^3)^{2}", value: "b" },
                { label: "\\sqrt{27} = 27^{-\\frac{1}{2}} = (3^3)^{-\\frac{1}{2}}", value: "c" },
                { label: "\\sqrt{27} = 27^{\\frac{1}{2}} = (3^3)^{\\frac{1}{2}}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$\sqrt{27} = 27^{\frac{1}{2}} = (3^3)^{\frac{1}{2}}$$, ponieważ pierwiastek kwadratowy to potęga o wykładniku 1/2."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/pierwiastekPotega.png"
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              {/* Zastosuj prawo potęgowania do wyrażenia $$(3^3)^{\frac{1}{2}}$$: */}
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "(3^3)^{\\frac{1}{2}} = 3^{3 \\cdot \\frac{1}{2}} = 3^{\\frac{3}{2}}", value: "a" },
                { label: "(3^3)^{\\frac{1}{2}} = 3^{3 + \\frac{1}{2}} = 3^{\\frac{7}{2}}", value: "b" },
                { label: "(3^3)^{\\frac{1}{2}} = 3^{3 - \\frac{1}{2}} = 3^{\\frac{5}{2}}", value: "c" },
                { label: "(3^3)^{\\frac{1}{2}} = 3^{\\frac{1}{2}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$(3^3)^{\frac{1}{2}} = 3^{3 \cdot \frac{1}{2}} = 3^{\frac{3}{2}}$$. Gdy mamy potęgę potęgi, mnożymy wykładniki."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie potęg o tej samej podstawie:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$3^{-3} \cdot 3^{\frac{3}{2}}$$?"
              choices={[
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 + \\frac{3}{2}} = 3^{-\\frac{3}{2}}", value: "a" },
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 \\cdot \\frac{3}{2}} = 3^{-\\frac{9}{2}}", value: "b" },
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 - \\frac{3}{2}} = 3^{-\\frac{9}{2}}", value: "c" },
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{3 + \\frac{3}{2}} = 3^{\\frac{9}{2}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$3^{-3} \cdot 3^{\frac{3}{2}} = 3^{-3 + \frac{3}{2}} = 3^{-\frac{3}{2}}$$. Gdy mnożymy potęgi o tej samej podstawie, dodajemy wykładniki."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "3^{-3} \\cdot \\sqrt{27} = 3^{-3} \\cdot \\sqrt{3^3} = 3^{-3} \\cdot (3^3)^{\\frac{1}{2}}= 3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 + \\frac{3}{2}} = 3^{-\\frac{3}{2}}",
              },
            ]}
            solutions={["3^{-\\frac{3}{2}}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;