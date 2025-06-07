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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Postać kanoniczna funkcji kwadratowej</h2>
        <p className="text-lg text-gray-800 mt-4">Przekształć do postaci kanonicznej i podaj zbiór wartości funkcji</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="f(x) = -x^2 +2x -3" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Jakie są współczynniki funkcji $$f(x) = -x^2 + 2x - 3$$?"
              choices={[
                { label: "a = -1, b = -2, c = -3", value: "a" },
                { label: "a = 1, b = 2, c = 3", value: "b" },
                { label: "a = -1, b = 2, c = -3", value: "c" },
                { label: "a = -1, b = 2, c = 3", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawna odpowiedź to $$a = -1, b = 2, c = -3$$. <br>Funkcja w postaci ogólnej to $$f(x) = ax^2 + bx + c$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <ChoiceQuestion
              question="Oblicz współrzędną $$p$$ wierzchołka paraboli"
              choices={[
                { label: "p = 1", value: "a" },
                { label: "p = -1", value: "b" },
                { label: "p = 2", value: "c" },
                { label: "p = -2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to p = 1. <br>Obliczenia:<br>$$p = -\frac{b}{2a} = -\frac{2}{2 \cdot (-1)} = 1$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <ChoiceQuestion
              question="Oblicz $$\Delta$$ i  drugą współrzędną wierzchołka $$q$$ "
              choices={[
                { label: "Δ = -16, q = -4", value: "a" },
                { label: "Δ = 16, q = 4", value: "b" },
                { label: "Δ = 8, q = 2", value: "c" },
                { label: "Δ = -8, q = -2", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawna odpowiedź to Δ = -8, q = -2. <br>Obliczenia:<br>1. $$Δ = b^2 - 4ac = 4 - 4 \cdot (-1) \cdot (-3) = 4 - 12 = -8$$<br>2. $$q = -\frac{Δ}{4a} = -\frac{-8}{-4} = -2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <ChoiceQuestion
              question="Jaka jest postać kanoniczna funkcji?"
              choices={[
                { label: "f(x) = -(x - 1)^2 - 2", value: "a" },
                { label: "f(x) = (x + 1)^2 - 2", value: "b" },
                { label: "f(x) = -(x + 1)^2 + 2", value: "c" },
                { label: "f(x) = (x - 1)^2 + 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$f(x) = -(x - 1)^2 - 2$$. <br>Postać kanoniczna to $$f(x) = a(x - p)^2 + q$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.includes(4) && (
          <>
            <ChoiceQuestion
              question="Jaki jest zbiór wartości funkcji f(x)?"
              choices={[
                { label: "(-∞, -2]", value: "a" },
                { label: "[-2, ∞)", value: "b" },
                { label: "(-∞, 2]", value: "c" },
                { label: "[2, ∞)", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$(-∞, -2]$$. <br>Ponieważ $$a = -1 < 0$$, funkcja osiąga maksimum w wierzchołku. <br>Zbiór wartości to $$(-∞, q] = (-∞, -2]$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="f(x) = -x^2 + 2x - 3"
            steps={[
              { step: "\\text{ Współczynniki: } a = -1, b = 2, c = -3" },
              { step: "\\text{Oblicz p: }p = -\\frac{b}{2a} = -\\frac{2}{-2} = 1" },
              { step: "\\text{Oblicz Δ: } Δ = b^2 - 4ac = 4 - 12 = -8" },
              { step: "\\text{ Oblicz q: } q = -\\frac{Δ}{4a} = -\\frac{-8}{-4} = -2" },
              { step: "\\text{Postać kanoniczna: } f(x) = -1(x - 1)^2 + (-2) = -(x - 1)^2 - 2" },
              { step: "\\text{Zbiór wartości: } (-∞, -2] (bo a = -1 < 0)" }
            ]}
            solutions={["f(x) = -(x - 1)^2 - 2", "ZW=(-∞, -2]"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;