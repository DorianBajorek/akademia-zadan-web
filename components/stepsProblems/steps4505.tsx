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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie kąta nachylenia prostej do osi OX</h2>
        
        <div className="mb-6">
          <p className="text-lg text-gray-800 mb-4">Dana jest funkcja liniowa:</p>
          <div className="text-center text-2xl my-4">
            <InlineMath math="y = \sqrt{3}x + 2" />
          </div>
          <p className="text-lg text-gray-800 mb-4">Wyznacz kąt nachylenia tej prostej do osi OX</p>
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Odczytaj współczynnik kierunkowy <InlineMath math="a" /> z równania.
            </p>
            <ChoiceQuestion
              question="Jaki jest współczynnik kierunkowy a w podanej funkcji?"
              choices={[
                { label: "a = 2", value: "a" },
                { label: "a = \\sqrt{3}", value: "b" },
                { label: "a = 3", value: "c" },
                { label: "a = \\frac{\\sqrt{3}}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Współczynnik kierunkowy to liczba stojąca przed x w równaniu funkcji liniowej. Dla $$y = \sqrt{3}x + 2$$ mamy $$a = \sqrt{3}$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Oblicz wartość kąta α.
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość kąta $$α$$ dla $$a = \sqrt{3}$$?"
              choices={[
                { label: "30^\\circ", value: "a" },
                { label: "45^\\circ", value: "b" },
                { label: "60^\\circ", value: "c" },
                { label: "90^\\circ", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Ponieważ $$\tg(60^\circ) = \sqrt{3}$$, to $$\alpha = 60^\circ$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "\\text{Odczytujemy współczynnik kierunkowy: } a = \\sqrt{3}",
              },
              {
                step: "\\text{Obliczamy kąt: } \\alpha = 60^\\circ \\text{ Bo } \\tg(60^{\\circ}) = \\sqrt{3}",
              }
            ]}
            solutions={["60^\\circ"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;