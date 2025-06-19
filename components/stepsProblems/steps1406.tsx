"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie kwadratowe"
          description="Rozwiąż równanie kwadratowe:"
          equation="(x+1)² = 3(x-4) + 15"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przekształcenie do postaci ogólnej
              </StepDescription>
              <ChoiceQuestion
                question="Jak wygląda równanie w postaci ogólnej?"
                choices={[
                  { label: "x² - 8x + 16 = 0", value: "a" },
                  { label: "x² - 8x + 17 = 0", value: "b" },
                  { label: "x² + x - 2 = 0", value: "c" },
                  { label: "x² - x - 2 = 0", value: "d" }
                ]}
                correctAnswer="d"
                explanation="Przekształcamy równanie:
                  $$(x+1)^2 = 3(x-4) + 15$$ <br>
                  $$x^2 + 2x + 1 = 3x - 12 + 15$$ <br>
                  $$x^2 + 2x + 1 = 3x + 3$$ <br>
                  $$x^2 - x - 2 = 0$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Obliczenie wyróżnika równania (Δ)
              </StepDescription>
              <ChoiceQuestion
                question="Która wartość jest poprawną deltą Δ dla tego równania?"
                choices={[
                  { label: "Δ = 16", value: "a" },
                  { label: "Δ = 9", value: "b" },
                  { label: "Δ = 1", value: "c" },
                  { label: "Δ = -1", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Delta (Δ) jest obliczana ze wzoru:
                  $$Δ = b^2 - 4ac$$.
                  Podstawiając wartości:
                  $$Δ = (-1)^2 - 4 \cdot 1 \cdot (-2) = 1 + 8 = 9$$.
                  Poprawna wartość delty to $$Δ = 9$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wyznaczenie pierwiastków równania
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
                choices={[
                  { label: "x₁ = -2, x₂ = 1", value: "a" },
                  { label: "x₁ = 2, x₂ = -1", value: "b" },
                  { label: "x₁ = 1, x₂ = -3", value: "c" },
                  { label: "x₁ = 5, x₂ = 3", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Ponieważ delta jest dodatnia (Δ = 9), równanie ma dwa pierwiastki:<br>
                  $$x_1 = \frac{-b - \sqrt{Δ}}{2a} = \frac{1 - 3}{2} = -1$$,<br>
                  $$x_2 = \frac{-b + \sqrt{Δ}}{2a} = \frac{1 + 3}{2} = 2$$.<br>
                  Poprawne wartości pierwiastków to $$x_1 = -1$$ i $$x_2 = 2$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="(x+1)² = 3(x-4) + 15"
                steps={[
                  { step: "\\text{Przekształcenie: }(x+1)² = 3x - 12 + 15 → x² - x - 2 = 0" },
                  { step: "Δ = (-1)² - 4·1·(-2) = 1 + 8 = 9, \\sqrt{\\Delta} = \\sqrt{9} = 3" },
                  { step: "x₁ = \\frac{1-3}{2}= -1" },
                  { step: "x₂ = \\frac{1+3}{2} = 2" }
                ]}
                solutions={["x₁ = -1", "x₂ = 2"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;