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
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\left(\frac{4}{25}\right)^{-0.5}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Odwrócenie liczby za pomocą ujemnego wykładnika:
            </p>
            <ChoiceQuestion
              question="Jak przekształcić wyrażenie $$\left(\frac{4}{25}\right)^{-0.5}$$?"
              choices={[
                { label: "\\left(\\frac{4}{25}\\right)^{0.5}", value: "a" },
                { label: "\\left(\\frac{25}{4}\\right)^{0.5}", value: "b" },
                { label: "\\left(\\frac{4}{25}\\right)^{-2}", value: "c" },
                { label: "\\left(\\frac{25}{4}\\right)^{-2}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie: $$\left(\frac{4}{25}\right)^{-0.5} = \left(\frac{25}{4}\right)^{0.5}$$ (ułamki zamieniają się miejscami przy ujemnym wykładniku)."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/ujemnyWykladnik.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Zamiana potęgi <InlineMath math="0.5" /> na pierwiastek kwadratowy:
            </p>
            <ChoiceQuestion
              question="Jak zapisać wyrażenie $$\left(\frac{25}{4}\right)^{0.5}$$ za pomocą pierwiastka?"
              choices={[
                { label: "\\sqrt[5]{\\frac{25}{4}}", value: "a" },
                { label: "\\sqrt{\\frac{25}{4}}", value: "b" },
                { label: "\\sqrt[0.5]{\\frac{25}{4}}", value: "c" },
                { label: "\\sqrt[25]{\\frac{25}{4}}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie: $$\left(\frac{25}{4}\right)^{0.5} = \sqrt{\frac{25}{4}}$$ (potęga  $$0.5$$) odpowiada pierwiastkowi kwadratowemu)."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/pierwiastekPotega.png"
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Obliczenie pierwiastka kwadratowego:
            </p>
            <ChoiceQuestion
              question="Jak obliczyć $$\sqrt{\frac{25}{4}}$$?"
              choices={[
                { label: "\\frac{25}{2}", value: "a" },
                { label: "\\frac{5}{2}", value: "b" },
                { label: "\\frac{5}{4}", value: "c" },
                { label: "\\frac{2}{5}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne obliczenie: $$\sqrt{\frac{25}{4}} = \frac{\sqrt{25}}{\sqrt{4}} = \frac{5}{2}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\left(\frac{4}{25}\right)^{-0.5}"
            steps={[
              {
                step: "\\left(\\frac{4}{25}\\right)^{-0.5} = \\left(\\frac{25}{4}\\right)^{0.5} = \\sqrt{\\frac{25}{4}} = \\frac{5}{2}",
              }
            ]}
            solutions={["\\frac{5}{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;