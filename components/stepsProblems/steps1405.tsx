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
          equation="x² + 1 = 2(x + 2)"
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
                  { label: "x² - 2x - 3 = 0", value: "a" },
                  { label: "x² + 2x - 3 = 0", value: "b" },
                  { label: "x² - 4x - 7 = 0", value: "c" },
                  { label: "x² - 2x - 5 = 0", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Przekształcamy równanie:
                  $$x^2 + 1 = 2(x + 2)$$ <br>
                  $$x^2 + 1 = 2x + 4$$ <br>
                  $$x^2 - 2x - 3 = 0$$."
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
                  { label: "Δ = 12", value: "a" },
                  { label: "Δ = 16", value: "b" },
                  { label: "Δ = 4", value: "c" },
                  { label: "Δ = 8", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Delta (Δ) jest obliczana ze wzoru:
                  $$Δ = b^2 - 4ac$$.
                  Podstawiając wartości:
                  $$Δ = (-2)^2 - 4 \cdot 1 \cdot (-3) = 4 + 12 = 16$$.
                  Poprawna wartość delty to $$Δ = 16$$."
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
                  { label: "x₁ = 0, x₂ = 2", value: "a" },
                  { label: "x₁ = 1, x₂ = -3", value: "b" },
                  { label: "x₁ = -3, x₂ = 1", value: "c" },
                  { label: "x₁ = -1, x₂ = 3", value: "d" }
                ]}
                correctAnswer="d"
                explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki: <br>
                  $$x_1 = \frac{-b - \sqrt{Δ}}{2a}$$,<br>
                  $$x_2 = \frac{-b + \sqrt{Δ}}{2a}$$.<br>
                  Podstawiając wartości:<br>
                  $$x_1 = \frac{2 - 4}{2} = -1$$,<br>
                  $$x_2 = \frac{2 + 4}{2} = 3$$.<br>
                  Poprawne wartości pierwiastków to $$x_1 = -1$$ i $$x_2 = 3$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="x² + 1 = 2(x + 2)"
                steps={[
                  { step: "\\text{Przekształcenie: }x² + 1 = 2x + 4 → x² - 2x - 3 = 0" },
                  { step: "Δ = (-2)² - 4·1·(-3) = 4 + 12 = 16, \\sqrt{\\Delta} = \\sqrt{16} = 4" },
                  { step: "x₁ = \\frac{2-4}{2} = -1" },
                  { step: "x₂ = \\frac{2+4}{2} = 3" }
                ]}
                solutions={["x₁ = -1", "x₂ = 3"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;