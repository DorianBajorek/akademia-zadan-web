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
          title="Postać kanoniczna funkcji kwadratowej"
          description="Przekształć do postaci kanonicznej i podaj zbiór wartości funkcji:"
          equation="f(x) = -x^2 + 2x - 3"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Określ współczynniki funkcji kwadratowej.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie są współczynniki funkcji $$f(x) = -x^2 + 2x - 3$$?"
                choices={[
                  { label: "a = -1, b = -2, c = -3", value: "a" },
                  { label: "a = 1, b = 2, c = 3", value: "b" },
                  { label: "a = -1, b = 2, c = -3", value: "c" },
                  { label: "a = -1, b = 2, c = 3", value: "d" }
                ]}
                correctAnswer="c"
                explanation="Funkcja w postaci ogólnej to $$f(x) = ax^2 + bx + c$$. <br>
                Dla $$f(x) = -x^2 + 2x - 3$$: <br>
                $$a = -1$$, $$b = 2$$, $$c = -3$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz współrzędną <InlineMath math="p" /> wierzchołka paraboli.
              </StepDescription>
              <ChoiceQuestion
                question="Oblicz współrzędną $$p$$ wierzchołka paraboli"
                choices={[
                  { label: "p = -1", value: "a" },
                  { label: "p = 1", value: "b" },
                  { label: "p = 2", value: "c" },
                  { label: "p = -2", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Wzór na współrzędną p: <br>
                $$p = -\frac{b}{2a}$$ <br>
                Obliczenia: <br>
                $$p = -\frac{2}{2 \cdot (-1)} = 1$$"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/wierzcholek_paraboli.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz  <InlineMath math="\Delta" /> i współrzędną  <InlineMath math="q" />  wierzchołka.
              </StepDescription>
              <ChoiceQuestion
                question="Oblicz $$\Delta$$ i drugą współrzędną wierzchołka $$q$$"
                choices={[
                  { label: "Δ = -16, q = -4", value: "a" },
                  { label: "Δ = 16, q = 4", value: "b" },
                  { label: "Δ = 8, q = 2", value: "c" },
                  { label: "Δ = -8, q = -2", value: "d" }
                ]}
                correctAnswer="d"
                explanation="Obliczenia: <br>
                1. $$\Delta = b^2 - 4ac = 4 - 4 \cdot (-1) \cdot (-3) = -8$$ <br>
                2. $$q = -\frac{\Delta}{4a} = -\frac{-8}{-4} = -2$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/wierzcholek_paraboli.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Zapisz postać kanoniczną funkcji.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest postać kanoniczna funkcji?"
                choices={[
                  { label: "f(x) = -(x - 1)^2 - 2", value: "a" },
                  { label: "f(x) = (x + 1)^2 - 2", value: "b" },
                  { label: "f(x) = -(x + 1)^2 + 2", value: "c" },
                  { label: "f(x) = (x - 1)^2 + 2", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Postać kanoniczna: <br>
                $$f(x) = a(x - p)^2 + q$$ <br>
                Podstawiając wartości: <br>
                $$f(x) = -1(x - 1)^2 + (-2) = -(x - 1)^2 - 2$$"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/postac-kanoniczna.png"
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Określ zbiór wartości funkcji.
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest zbiór wartości funkcji f(x)?"
                choices={[
                  { label: "(-∞, -2]", value: "a" },
                  { label: "[-2, ∞)", value: "b" },
                  { label: "(-∞, 2]", value: "c" },
                  { label: "[2, ∞)", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Ponieważ a = -1 < 0, funkcja osiąga maksimum w wierzchołku. <br>
                Zbiór wartości to: <br>
                $$(-\infty, q] = (-\infty, -2]$$"
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = -x^2 + 2x - 3"
                steps={[
                  { step: "\\text{Współczynniki: }a = -1, b = 2, c = -3" },
                  { step: "p = -\\frac{b}{2a} = 1" },
                  { step: "Δ = b^2 - 4ac = -8" },
                  { step: "q = -\\frac{Δ}{4a} = -2" },
                  { step: "\\text{Postać kanoniczna: }-(x - 1)^2 - 2" },
                  { step: "\\text{Zbiór wartości: }(-∞, -2]" }
                ]}
                solutions={["f(x) = -(x - 1)^2 - 2", "ZW = (-∞, -2]"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;