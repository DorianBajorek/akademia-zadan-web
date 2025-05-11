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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie kwadratowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie kwadratowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(x+1)^2 = 3(x-4) + 15" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie do postaci ogólnej <InlineMath math="ax^2 + bx + c = 0" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda równanie w postaci ogólnej?"
              choices={[
                { label: "x^2 - 8x + 16 = 0", value: "a" },
                { label: "x^2 - 8x + 17 = 0", value: "b" },
                { label: "x^2 + x + -2", value: "c" },
                { label: "x^2 - x + -2 = 0", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Przekształcamy równanie:
                $$(x+1)^2 = 3(x-4) + 15$$ <br>
                $$x^2 + 2x + 1 = 3x - 12 + 15$$ <br>
                $$x^2 + 2x + 1 = 3x + 3$$ <br>
                $$x^2 + 2x - 3x + 1 - 3 = 0$$ <br>
                $$x^2 - x - 2 = 0$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
               Oblicz deltę <InlineMath math="\Delta"/> dla tego równania.
            </p>
            <ChoiceQuestion
              question="Która wartość jest poprawną deltą $$\Delta$$ dla tego równania?"
              choices={[
                { label: "\\Delta = 16", value: "a" },
                { label: "\\Delta = 9", value: "b" },
                { label: "\\Delta = 1", value: "c" },
                { label: "\\Delta = -1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Delta $$\Delta$$ jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości:
                $$\Delta = (-1)^2 - 4 \cdot 1 \cdot (-2) = 1 + 8 = 9$$.
                Poprawna wartość delty to $$\Delta = 9$$."
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
                { label: "x₁ = -2, x₂ = 1", value: "a" },
                { label: "x₁ = 2, x₂ = -1", value: "b" },
                { label: "x₁ = 1, x₂ = -3", value: "c" },
                { label: "x₁ = 5, x₂ = 3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta jest dodatnia (\\Delta = 9), równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{-(-1) - \sqrt{9}}{2 \cdot 1} = \frac{1 - 3}{2} = -1$$,
                $$x_2 = \frac{-(-1) + \sqrt{9}}{2 \cdot 1} = \frac{1 + 3}{2} = 2$$.
                Poprawne wartości pierwiastków to $$x_1 = -2$$ i $$x_2 = 1$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/dwaMiejscaZerowe.png"
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="(x+1)^2 = 3(x-4) + 15"
            steps={[
              {
                step: "\\text{Przekształcenie równania: } (x+1)^2 = 3(x-4) + 15 \\implies x^2 - x - 2 = 0",
              },
              {
                step: "\\Delta = b^2 - 4ac = (-1)^2 - 4 \\cdot 1 \\cdot (-2) = 1 + 8 = 9",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{1 - 3}{2} = -2",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{1 + 3}{2} = 1"
              },
            ]}
            solutions={["x_1 = -2, x_2 = 1"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;