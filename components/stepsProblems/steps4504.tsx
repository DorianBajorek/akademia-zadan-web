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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie równania prostej</h2>
        
        <div className="mb-6">
          <p className="text-lg text-gray-800 mb-4">Dana jest funkcja liniowa o następujących właściwościach:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-700">Tworzy z osią OX kąt <InlineMath math="45^\circ" /></li>
            <li className="text-gray-700">Przecina oś OY w punkcie <InlineMath math="(0, 3)" /></li>
          </ul>
          <br></br>
          <p className="text-lg text-gray-800 mb-4">Wyznacz równanie tej prostej</p>
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Wyznacz współczynnik kierunkowy <InlineMath math="a" /> na podstawie kąta nachylenia.
            </p>
            <ChoiceQuestion
              question="Jak obliczyć współczynnik kierunkowy a znając kąt nachylenia?"
              choices={[
                { label: "a = \\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}", value: "a" },
                { label: "a = \\cos(45^\\circ) = \\frac{\\sqrt{2}}{2}", value: "b" },
                { label: "a = \\tg(45^\\circ) = 1", value: "c" },
                { label: "a = \\ctg(45^\\circ) = 1", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Współczynnik kierunkowy to tangens kąta nachylenia prostej do osi OX: $$a = \tg(\alpha) = \tg(45^\circ) = 1$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Wyznacz wyraz wolny <InlineMath math="b" /> na podstawie punktu przecięcia z osią OY.
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość współczynnika b?"
              choices={[
                { label: "b = 0", value: "a" },
                { label: "b = 1", value: "b" },
                { label: "b = 3", value: "c" },
                { label: "b = 4", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Wyraz wolny $$b$$ to wartość $$y$$ w punkcie przecięcia z osią $$OY$$: <br>
              Punkt $$(0, 3)$$ więc $$ b = 3$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wybierz poprawne równanie funkcji.
            </p>
            <ChoiceQuestion
              question="Które równanie opisuje daną funkcję?"
              choices={[
                { label: "y = \\frac{\\sqrt{2}}{2}x + 3", value: "a" },
                { label: "y = x + 3", value: "b" },
                { label: "y = x - 3", value: "c" },
                { label: "y = 3x + 1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne równanie łączy obliczone wartości współczynników: $$y = \tg(45^\circ)x + 3 = 1 \cdot x + 3 = x + 3$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "\\text{Obliczamy współczynnik kierunkowy: } a = \\tg(45^\\circ) = 1",
              },
              {
                step: "\\text{Wyznaczamy wyraz wolny: } b = 3",
              },
              {
                step: "\\text{Ostateczne równanie: } y = x + 3",
              }
            ]}
            solutions={["y = x + 3"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;