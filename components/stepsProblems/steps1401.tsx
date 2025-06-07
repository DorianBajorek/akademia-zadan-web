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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie kwadratowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie kwadratowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^2 - 3x + 2 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tego równania.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tym równaniu?"
              choices={[
                { label: "a = 2, b = -3, c = 1", value: "a" },
                { label: "a = 1, b = -3, c = -2", value: "b" },
                { label: "a = 1, b = -3, c = 2", value: "c" },             
                { label: "a = -1, b = 3, c = 2", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Współczynniki dla równania $$x^2 - 3x + 2 = 0$$ to $$a = 1, b = -3, c = 2$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz deltę (Δ) dla tego równania.
            </p>
            <NumericQuestion
              question="Która wartość jest poprawną deltą (Δ) dla tego równania?"
              correctAnswer="1"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości:
                $$\Delta = (-3)^2 - 4 \cdot 1 \cdot 2 = 9 - 8 = 1$$.
                Poprawna wartość delty to $$\Delta = 1$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastki równania kwadratowego <InlineMath math="x_1, x_2" />.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
              choices={[
                { label: "x_1 = 2, x_2 = 1", value: "a" },
                { label: "x_1 = -2, x_2 = -1", value: "b" },
                { label: "x_1 = 1, x_2 = 2", value: "c" },
                { label: "x_1 = 3, x_2 = -2", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Pierwiastki wyznaczamy ze wzoru:
                $$x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{3 - 1}{2} = 1$$,
                $$x_2 = \frac{3 + 1}{2} = 2$$.
                Poprawne pierwiastki to $$x_1 = 1$$ i $$x_2 = 2$$ (lub odwrotnie)."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/dwaMiejscaZerowe.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <StudentNotes
            equation="x^2 - 3x + 2 = 0"
            steps={[
              {
                step: "a = 1, b = -3, c = 2",
              },
              {
                step: "\\Delta = b^2 - 4ac = (-3)^2 - 4 \\cdot 1 \\cdot 2 = 9 - 8 = 1",
              },
              {
                step: "x_1 = \\frac{3 - 1}{2} = 1, \\quad x_2 = \\frac{3 + 1}{2} = 2"
              },
            ]}
            solutions={["x₁ = 1", "x_2 = 2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
