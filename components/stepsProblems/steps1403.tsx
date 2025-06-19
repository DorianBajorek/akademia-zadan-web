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
          equation="6x² - x - 1 = 0"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Wyznaczmy teraz współczynniki równania kwadratowe. Będzie to potrzebne do wyzaczenia delty.
              </StepDescription>
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
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Obliczenie wyróżnika równania (Δ)
              </StepDescription>
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
                  { label: "x₁ = -\\frac{1}{3}, x₂ = \\frac{1}{2}", value: "a" },
                  { label: "x₁ = -\\frac{1}{2}, x₂ = \\frac{1}{3}", value: "b" },
                  { label: "x₁ = -1, x₂ = 1", value: "c" },
                  { label: "x₁ = 0, x₂ = 6", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki: <br>
                  $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$, <br>
                  $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$. <br>
                  Podstawiając wartości: <br>
                  $$x_1 = \frac{-(-1) - \sqrt{25}}{2 \cdot 6} = \frac{1 - 5}{12} = -\frac{1}{3}$$, <br>
                  $$x_2 = \frac{-(-1) + \sqrt{25}}{2 \cdot 6} = \frac{1 + 5}{12} = \frac{1}{2}$$. <br>
                  Poprawne wartości pierwiastków to $$x_1 = -\frac{1}{3}$$ i $$x_2 = \frac{1}{2}$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="6x^2 - x - 1 = 0"
                steps={[
                  { step: "a = 6, b = -1, c = -1" },
                  { step: "\\Delta = b^2 - 4ac = (-1)^2 - 4 \\cdot 6 \\cdot (-1) = 1 + 24 = 25" },
                  { step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{1 - 5}{12} = -\\frac{1}{3}" },
                  { step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{1 + 5}{12} = \\frac{1}{2}" }
                ]}
                solutions={["x_1 = -\\frac{1}{3}, x_2 = \\frac{1}{2}"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;