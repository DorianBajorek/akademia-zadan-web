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
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie kwadratowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie kwadratowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^2 - 6x + 9 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tego równania.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tym równaniu?"
              choices={[
                { label: "a = 1, b = -6, c = 9", value: "a" },
                { label: "a = -1, b = 6, c = -9", value: "b" },
                { label: "a = 1, b = 6, c = -9", value: "c" },
                { label: "a = 2, b = -6, c = 9", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tego równania to $$a = 1, b = -6, c = 9$$. 
                Równanie kwadratowe w standardowej postaci to $$ax^2 + bx + c = 0$$. 
                Tutaj: $$a = 1$$, $$b = -6$$, $$c = 9$$."
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
              correctAnswer="0"
              explanation="Delta (Δ) obliczana jest ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając:
                $$\Delta = (-6)^2 - 4 \cdot 1 \cdot 9 = 36 - 36 = 0$$.
                Poprawna wartość to $$\Delta = 0$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastek równania kwadratowego <InlineMath math="x_0" />.
            </p>
            <ChoiceQuestion
              question="Która wartość jest poprawna dla pierwiastka $$x_0$$?"
              choices={[
                { label: "x_0 = -3", value: "a" },
                { label: "x_0 = 3", value: "b" },
                { label: "x_0 = 6", value: "c" },
                { label: "x_0 = 0", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Dla $$\Delta = 0$$ mamy jeden pierwiastek podwójny:
                $$x_0 = \frac{-b}{2a}$$.
                Podstawiając:
                $$x_0 = \frac{6}{2} = 3$$.
                Poprawny pierwiastek to $$x_0 = 3$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/jedno-miejsce-zerowe.png"
            />
          </>
        )}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="x^2 - 6x + 9 = 0"
            steps={[
              { step: "a = 1, b = -6, c = 9" },
              { step: "\\Delta = b^2 - 4ac = (-6)^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0" },
              { step: "x_0 = \\frac{-b}{2a} = \\frac{6}{2} = 3" },
            ]}
            solutions={["x_0 = 3"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
