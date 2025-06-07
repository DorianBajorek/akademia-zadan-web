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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie kwadratowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie kwadratowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="6x^2 - x - 1 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tego równania.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tym równaniu?"
              choices={[
                { label: "a = 6, b = -1, c = -1", value: "a" },
                { label: "a = 1, b = -6, c = 1", value: "b" },
                { label: "a = 6, b = 1, c = -1", value: "c" },
                { label: "a = -6, b = -1, c = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tego równania to $$a = 6, b = -1, c = -1$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku równania $$6x^2 - x - 1 = 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$6$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$-1$$, <br>
                $$c$$ to wyraz wolny, czyli $$-1$$."
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
            <ChoiceQuestion
              question="Która wartość jest poprawną deltą (Δ) dla tego równania?"
              choices={[
                { label: "\\Delta = 1", value: "a" },
                { label: "\\Delta = 25", value: "b" },
                { label: "\\Delta = -23", value: "c" },
                { label: "\\Delta = 0", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości:
                $$\Delta = (-1)^2 - 4 \cdot 6 \cdot (-1) = 1 + 24 = 25$$.
                Poprawna wartość delty to $$\Delta = 25$$."
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
                  { label: "x₁ = -\\frac{1}{3}, x₂ = \\frac{1}{2}", value: "a" },
                  { label: "x₁ = -\\frac{1}{2}, x₂ = \\frac{1}{3}", value: "b" },
                  { label: "x₁ = -1, x₂ = 1", value: "c" },
                  { label: "x₁ = 0, x₂ = 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{-(-1) - \sqrt{25}}{2 \cdot 6} = \frac{1 - 5}{12} = -\frac{1}{3}$$,
                $$x_2 = \frac{-(-1) + \sqrt{25}}{2 \cdot 6} = \frac{1 + 5}{12} = \frac{1}{2}$$.
                Poprawne wartości pierwiastków to $$x_1 = -\frac{1}{3}$$ i $$x_2 = \frac{1}{2}$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/dwaMiejscaZerowe.png"
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="6x^2 - x - 1 = 0"
            steps={[
              {
                step: "a = 6, b = -1, c = -1",
              },
              {
                step: "\\Delta = b^2 - 4ac = (-1)^2 - 4 \\cdot 6 \\cdot (-1) = 1 + 24 = 25",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{1 - 5}{12} = -\\frac{1}{3}",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{1 + 5}{12} = \\frac{1}{2}"
              },
            ]}
            solutions={["x_1 = -\\frac{1}{3}, x_2 = \\frac{1}{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;