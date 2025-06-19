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
          title="Wyznaczanie wzoru funkcji kwadratowej"
          description="Wierzchołek funkcji kwadratowej $$f$$ to punkt $$W=(1,2)$$. Do wykresu należy punkt $$P=(2,\frac{7}{2}
          )$$. Wyznacz wzór funkcji $$f$$ w postaci kanonicznej."
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Określ postać kanoniczną funkcji kwadratowej.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest postać kanoniczna funkcji której wierzchołek ma współrzędne $$W=(p,q)$$?"
                choices={[
                  { label: "f(x) = a(x - p)^2 + q", value: "a" },
                  { label: "f(x) = a(x + p)^2 - q", value: "b" },
                  { label: "f(x) = (x - p)^2 + q", value: "c" },
                  { label: "f(x) = a(x + p)^2 + q", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawna odpowiedź to $$f(x) = a(x - p)^2 + q$$."
                img="/steps-images/postac-kanoniczna.png"
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Podstaw współrzędne wierzchołka do postaci kanonicznej.
              </StepDescription>
              <ChoiceQuestion
                question="Jak wygląda wzór funkcji po podstawieniu wierzchołka $$W=(1,2)$$?"
                choices={[
                  { label: "f(x) = a(x + 1)^2 - 2", value: "a" },
                  { label: "f(x) = (x - 1)^2 + 2", value: "b" },
                  { label: "f(x) = a(x - 1)^2 + 2", value: "c" },
                  { label: "f(x) = a(x - 2)^2 + 1", value: "d" }
                ]}
                correctAnswer="c"
                explanation="Poprawna odpowiedź to $$f(x) = a(x - 1)^2 + 2$$. <br>Podstawiliśmy $$p=1$$ i $$q=2$$ do postaci kanonicznej."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wykorzystaj punkt <InlineMath math="P=(2,\frac{7}{2})" />do wyznaczenia współczynnika a.
              </StepDescription>
              <ChoiceQuestion
                question="Jak obliczyć współczynnik a korzystając z punktu $$P=(2,\frac{7}{2})$$?"
                choices={[
                  { label: "\\text{Podstawić } x=2 \\text{ i } f(2)=\\frac{7}{2} \\text{ do wzoru }", value: "a" },
                  { label: "\\text{ Obliczyć } a = \\frac{-b}{2a}", value: "b" },
                  { label: "\\text{ Obliczyć } a = (\\frac{7}{2} - 2)/(2 - 1)", value: "c" },
                  { label: "\\text{ Współczynnik } a \\text{ zawsze równy }1", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawna odpowiedź: podstawiamy $$x=2$$ i $$f(2)=\frac{7}{2}$$ do wzoru $$f(x) = a(x - 1)^2 + 2$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Oblicz wartość współczynnika a.
              </StepDescription>
              <ChoiceQuestion
                question="Oblicz wartość współczynnika a:"
                choices={[
                  { label: "a = \\frac{-1}{2}", value: "a" },
                  { label: "a = \\frac{1}{2}", value: "b" },
                  { label: "a = \\frac{3}{2}", value: "c" },
                  { label: "a = 2", value: "d" }
                ]}
                correctAnswer="b"
                explanation="Zgodnie ze wcześniejszymi ustaleniami wstawiamy za $$x$$ liczbę $$2$$ i przyrównujemy do $$\frac{7}{2}$$. <br>
                Rozwiązanie:<br>
                $$\frac{7}{2} = a(2-1)^2 + 2$$<br>
                $$\frac{7}{2} = a + 2$$<br>
                $$a = \frac{7}{2} - 2 = \frac{3}{2}$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Zapisz ostateczny wzór funkcji w postaci kanonicznej.
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest ostateczny wzór funkcji w postaci kanonicznej?"
                choices={[
                  { label: "f(x) = \\frac{3}{2}(x - 1)^2 + 2", value: "a" },
                  { label: "f(x) = \\frac{-1}{2}(x + 1)^2 - 2", value: "b" },
                  { label: "f(x) = (x - 1)^2 + 2", value: "c" },
                  { label: "f(x) = \\frac{1}{2}(x + 1)^2 - 2", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawna odpowiedź to $$f(x) = \frac{3}{2}(x - 1)^2 + 2$$. <br>Jest to pełna postać kanoniczna z wyznaczonym współczynnikiem a."
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="W=(1,2), P=(2,7/2)"
                steps={[
                  { step: "\\text{Postać kanoniczna: } f(x) = a(x - p)^2 + q" },
                  { step: "\\text{Podstawiamy wierzchołek: } f(x) = a(x - 1)^2 + 2" },
                  { step: "\\text{Podstawiamy punkt } (2,\\frac{7}{2}) \\text{ : } \\frac{7}{2} = a(2-1)^2 + 2" },
                  { step: "\\text{Rozwiązujemy: } \\frac{7}{2} = a + 2 \\Rightarrow a = \\frac{3}{2}" },
                  { step: "\\text{Ostateczny wzór: } f(x) = \\frac{3}{2}(x - 1)^2 + 2" }
                ]}
                solutions={["f(x) = \\frac{3}{2}(x - 1)^2 + 2"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;