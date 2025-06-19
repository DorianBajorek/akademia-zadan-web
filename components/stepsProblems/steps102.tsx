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
          title="Nierówność kwadratowa"
          description="Rozwiąż nierówność kwadratową:"
          equation="x^2 + 6x - 7 \leq 0"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Do wyznaczenia delty potrzebne będę nam współczynniki.
                Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
                choices={[
                  { label: "a = 1, b = 6, c = -7", value: "a" },
                  { label: "a = 2, b = 6, c = -7", value: "b" },
                  { label: "a = 1, b = -6, c = 7", value: "c" },
                  { label: "a = -1, b = 6, c = 7", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Współczynniki dla tej nierówności to $$a = 1, b = 6, c = -7$$. 
                  Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                  W przypadku nierówności $$x^2 + 6x - 7 \leq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                  $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                  $$b$$ to współczynnik przy $$x$$, czyli $$6$$, <br>
                  $$c$$ to wyraz wolny, czyli $$-7$$. <br>
                  Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz <InlineMath math="\Delta"/> dla tej nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Która wartość jest poprawną $$\Delta$$ dla tej nierówności?"
                choices={[
                  { label: "Δ = 36", value: "a" },
                  { label: "Δ = 64", value: "b" },
                  { label: "Δ = -28", value: "c" },
                  { label: "Δ = 16", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Mamy wzór: <br>
                  $$\Delta = b^2 - 4ac$$. <br>
                  Podstawiając wartości współczynników: <br>
                  $$\Delta = 6^2 - 4 \cdot 1 \cdot (-7) = 36 + 28 = 64$$. <br>
                  Poprawna wartość to $$\Delta = 64$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz pierwiastki równania kwadratowego <InlineMath math="x_1, x_2" />.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
                choices={[
                  { label: "x_1 = 0, x_2 = 6", value: "a" },
                  { label: "x_1 = 7, x_2 = -1", value: "b" },
                  { label: "x_1 = 3, x_2 = -3", value: "c" },
                  { label: "x_1 = -7, x_2 = 1", value: "d" }
                ]}
                correctAnswer="d"
                explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki: <br>
                  $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$, <br>
                  $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$. <br>
                  Podstawiając wartości: <br>
                  $$x_1 = \frac{-6 - 8}{2} = -7$$, <br>
                  $$x_2 = \frac{-6 + 8}{2} = 1$$.<br>
                  Poprawne wartości pierwiastków to $$x_1 = -7$$ i $$x_2 = 1$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Wskaż prawidłowy przedział rozwiązania nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Który przedział jest rozwiązaniem nierówności $$x^2 + 6x - 7 \leq 0$$?"
                choices={[
                  { label: "x \\in \\langle-7, 1\\rangle", value: "a" },
                  { label: "x ∈ (-∞, -7\\rangle ∪ \\langle1, ∞)", value: "b" },
                  { label: "x ∈ (-7, 1)", value: "c" },
                  { label: "x ∈ (-∞, -7) ∪ (1, ∞)", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Rozwiązaniem nierówności $$x^2 + 6x - 7 \leq 0$$ jest przedział:
                  $$x \in \langle-7, 1\rangle$$.
                  Wynika to z faktu, że parabola skierowana jest ramionami do góry $$(a > 0)$$, a nierówność jest typu $$\leq$$, więc rozwiązanie obejmuje wartości między pierwiastkami, włącznie z nimi."
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/ramionaParaboli.png"
                explanationImage="/steps-images/fun3.png"
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="x^2 + 6x - 7 \leq 0"
                steps={[
                  {
                    step: "a = 1, b = 6, c = -7",
                  },
                  {
                    step: "\\Delta = b^2 - 4ac = 6^2 - 4 \\cdot 1 \\cdot (-7) = 36 + 28 = 64",
                  },
                  {
                    step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-6 - 8}{2} = -7",
                  },
                  {
                    step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-6 + 8}{2} = 1",
                    image: "/steps-images/fun3.png"
                  },
                ]}
                solutions={["x \\in \\langle-7, 1\\rangle"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;