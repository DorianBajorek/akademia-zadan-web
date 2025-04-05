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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wartości wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Przekształć ujemne wykładniki na dodatnie:
            </p>
            <ChoiceQuestion
              question="Jak przekształcić wyrażenie z ujemnymi wykładnikami?"
              choices={[
                { label: "3^{-1} = -3, (-\\frac{1}{9})^{-2} = (-\\frac{1}{9})^2", value: "a" },
                { label: "3^{-1} = \\frac{1}{3}, (-\\frac{1}{9})^{-2} = (-9)^2", value: "b" },
                { label: "3^{-1} = \\frac{1}{3}, (-\\frac{1}{9})^{-2} = (-\\frac{1}{9})^2", value: "c" },
                { label: "3^{-1} = -3, (-\\frac{1}{9})^{-2} = (-9)^2", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenia:
              $$3^{-1} = \frac{1}{3}$$
              $$(-\frac{1}{9})^{-2} = (-9)^2$$ (odwracamy ułamek i zmieniamy znak wykładnika)"
              onComplete={() => handleStageComplete(1)}
               img="/steps-images/ujemnyWykladnik.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Oblicz wartość mianownika:
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$(-9)^2$$?"
              choices={[
                { label: "-81", value: "a" },
                { label: "81", value: "b" },
                { label: "18", value: "c" },
                { label: "-18", value: "d" },
              ]}
              correctAnswer="b"
              explanation="$$(-9)^2 = (-9) \cdot (-9) = 81$$ (minus razy minus daje plus)"
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/definicjaPotegi.png"
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wstaw obliczone wartości i uprość wyrażenie:
            </p>
            <ChoiceQuestion
              question="Jak uprościć wyrażenie $$\frac{\frac{1}{3}}{81} \cdot 81$$?"
              choices={[
                { label: "\\frac{1}{3}", value: "a" },
                { label: "3", value: "b" },
                { label: "1", value: "c" },
                { label: "81", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\frac{\frac{1}{3}}{81} \cdot 81 = \frac{1}{3} \cdot \frac{81}{81} = \frac{1}{3}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81"
            steps={[
              {
                step: "\\frac{3^{-1}}{(-\\frac{1}{9})^{-2}} \\cdot 81 = \\frac{\\frac{1}{3}}{(-9)^{2}} \\cdot 81 = \\frac{\\frac{1}{3}}{81} \\cdot 81 = \\frac{1}{3}",
              }
            ]}
            solutions={["\\frac{1}{3}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;