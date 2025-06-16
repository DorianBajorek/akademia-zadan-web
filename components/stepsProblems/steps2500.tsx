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
    setCompletedStages((prev) =>
      prev.includes(stage) ? prev : [...prev, stage]
    );
  };

  const resetLesson = () => {
    setCompletedStages([]);
  };

  return (
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Złożona nierówność liniowa"
          description="Rozwiąż nierówność:"
          equation="\frac{2x - 1}{3} - \frac{x + 2}{4} \leq \frac{5}{6}(x - 1)"
        />

        <div className="mt-8 space-y-10">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <>
              <StepDescription stepNumber={1}>
                Znajdź wspólny mianownik dla ułamków <InlineMath math="3, 4, 6" />.
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest najmniejszy wspólny mianownik?"
                choices={[
                  { label: "6", value: "a" },
                  { label: "24", value: "b" },
                  { label: "12", value: "c" },
                  { label: "36", value: "d" }
                ]}
                correctAnswer="c"
                explanation="$$NWW(3, 4, 6) = 12$$. To najmniejsza liczba podzielna przez wszystkie mianowniki."
                onComplete={() => handleStageComplete(1)}
              />
            </>
          )}

          {completedStages.includes(1) && (
            <>
              <StepDescription stepNumber={2}>
                Pomnóż obie strony przez 12, aby wyeliminować ułamki.
              </StepDescription>
              <ChoiceQuestion
                question="Jak wygląda nierówność po pomnożeniu przez 12?"
                choices={[
                  { label: "4(2x - 1) + 3(x + 2) ≤ 10(x - 1)", value: "a" },
                  { label: "12(2x - 1) - 12(x + 2) ≤ 12·\\frac{5}{6}(x - 1)", value: "b" },
                  { label: "4(2x - 1) - 3(x + 2) ≤ 10(x - 1)", value: "c" },
                  { label: "8x - 4 - 3x + 6 ≤ 10x - 10", value: "d" }
                ]}
                correctAnswer="c"
                explanation={`
                  $$12 \\cdot \\frac{2x-1}{3} = 4(2x-1)$$<br>
                  $$12 \\cdot \\frac{x+2}{4} = 3(x+2)$$<br>
                  $$12 \\cdot \\frac{5}{6}(x-1) = 10(x-1)$$
                `}
                onComplete={() => handleStageComplete(2)}
              />
            </>
          )}

          {completedStages.includes(2) && (
            <>
              <StepDescription stepNumber={3}>
                Wymnóż nawiasy.
              </StepDescription>
              <ChoiceQuestion
                question="Poprawnie wymnożona nierówność to:"
                choices={[
                  { label: "8x - 4 - 3x - 6 ≤ 10x - 10", value: "a" },
                  { label: "8x - 1 - 3x + 6 ≤ 10x - 10", value: "b" },
                  { label: "8x - 4 + 3x + 6 ≤ 10x - 10", value: "c" },
                  { label: "8x - 4 - 3x + 6 ≤ 10x - 5", value: "d" }
                ]}
                correctAnswer="a"
                explanation={`
                  $$4(2x - 1) = 8x - 4$$<br>
                  $$-3(x + 2) = -3x - 6$$<br>
                  $$10(x - 1) = 10x - 10$$
                `}
                onComplete={() => handleStageComplete(3)}
              />
            </>
          )}

          {completedStages.includes(3) && (
            <>
              <StepDescription stepNumber={4}>
                Uprość lewą stronę.
              </StepDescription>
              <ChoiceQuestion
                question="Po uproszczeniu otrzymamy:"
                choices={[
                  { label: "5x - 10 ≤ 10x - 5", value: "a" },
                  { label: "11x - 10 ≤ 10x - 10", value: "b" },
                  { label: "5x + 2 ≤ 10x - 10", value: "c" },
                  { label: "5x - 10 ≤ 10x - 10", value: "d" }
                ]}
                correctAnswer="d"
                explanation={`
                  $$8x - 3x = 5x$$<br>
                  $$-4 - 6 = -10$$
                `}
                onComplete={() => handleStageComplete(4)}
              />
            </>
          )}

          {completedStages.includes(4) && (
            <>
              <StepDescription stepNumber={5}>
                Przenieś wyrażenia z <InlineMath math="x" /> na lewą stronę, a liczby na prawą.
              </StepDescription>
              <ChoiceQuestion
                question="Poprawne przekształcenie to:"
                choices={[
                  { label: "5x - 10x ≤ -10 + 10", value: "a" },
                  { label: "5x - 10x ≤ 10 - 10", value: "b" },
                  { label: "-5x - 10x ≤ -10 - 10", value: "c" },
                  { label: "5x + 10x ≤ -10 + 10", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Przenosimy $$10x$$ na lewo (zmieniając znak) i $$-10$$ na prawo (też zmieniamy znak)."
                onComplete={() => handleStageComplete(5)}
              />
            </>
          )}

          {completedStages.includes(5) && (
            <>
              <StepDescription stepNumber={6}>
                Uprość i rozwiąż nierówność.
              </StepDescription>
              <ChoiceQuestion
                question="Ostateczne rozwiązanie to:"
                choices={[
                  { label: "x ≤ 0", value: "a" },
                  { label: "x ≥ 0", value: "b" },
                  { label: "x ≥ 4", value: "c" },
                  { label: "x ≤ -4", value: "d" }
                ]}
                correctAnswer="b"
                explanation="$$-5x ≤ 0 \Rightarrow x ≥ 0$$ (dzielimy przez liczbę ujemną, zmieniamy znak)."
                explanationImage="/steps-images/nierownosc-liniowa4.png"
                onComplete={() => handleStageComplete(6)}
              />
            </>
          )}

          {completedStages.length === 6 && (
            <div className="space-y-6">
              <StudentNotes
                equation="\frac{2x - 1}{3} - \frac{x + 2}{4} \leq \frac{5}{6}(x - 1)"
                steps={[
                  { step: "\\frac{2x - 1}{3} - \\frac{x + 2}{4} \\leq \\frac{5}{6}(x - 1) / \\cdot 12" },
                  { step: "4(2x-1) - 3(x+2) ≤ 10(x-1)" },
                  { step: "8x - 4 - 3x - 6 ≤ 10x - 10" },
                  { step: "5x - 10 ≤ 10x - 10" },
                  { step: "5x - 10x ≤ -10 + 10" },
                  { step: "-5x ≤ 0 → x ≥ 0", image: "/steps-images/nierownosc-liniowa4.png" },
                ]}
                solutions={["x \\in [0, ∞)"]}
              />
              <button
                onClick={resetLesson}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Spróbuj ponownie
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
