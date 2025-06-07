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
          <InlineMath math="f(x) = 2x^2 + 4x" />
        </p>

        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Jakie są współczynniki funkcji $$f(x) = 2x^2 + 4x$$?"
              choices={[
                { label: "a = 2, b = 4, c = 0", value: "a" },
                { label: "a = 2, b = -4, c = 0", value: "b" },
                { label: "a = 1, b = 4, c = 0", value: "c" },
                { label: "a = 2, b = 4, c = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$a = 2, b = 4, c = 0$$. <br>Funkcja w postaci ogólnej to $$f(x) = ax^2 + bx + c$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <ChoiceQuestion
              question="Oblicz współrzędną $$p$$ wierzchołka paraboli"
              choices={[
                { label: "p = -1", value: "a" },
                { label: "p = 1", value: "b" },
                { label: "p = -2", value: "c" },
                { label: "p = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$p = -1$$. <br>Obliczenia:<br>$$p = -\frac{b}{2a} = -\frac{4}{2 \cdot 2} = -1$$"
              onComplete={() => handleStageComplete(2)}
              img = "/steps-images/wierzcholek_paraboli.png"
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <ChoiceQuestion
              question="Oblicz $$\Delta$$ i drugą współrzędną wierzchołka $$q$$:"
              choices={[
                { label: "Δ = 16, q = -2", value: "a" },
                { label: "Δ = 0, q = 0", value: "b" },
                { label: "Δ = 8, q = -1", value: "c" },
                { label: "Δ = 32, q = -4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$Δ = 16, q = -2$$. <br>Obliczenia:<br>1. $$Δ = b^2 - 4ac = 16 - 0 = 16$$<br>2. $$q = -\frac{Δ}{4a} = -\frac{16}{8} = -2$$"
              onComplete={() => handleStageComplete(3)}
              img = "/steps-images/wierzcholek_paraboli.png"
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <ChoiceQuestion
              question="Jaka jest postać kanoniczna funkcji?"
              choices={[
                { label: "f(x) = 2(x + 1)^2 - 2", value: "a" },
                { label: "f(x) = 2(x - 1)^2 + 2", value: "b" },
                { label: "f(x) = (x + 2)^2 - 4", value: "c" },
                { label: "f(x) = 2(x + 2)^2 - 8", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$f(x) = 2(x + 1)^2 - 2$$. <br>Postać kanoniczna to $$f(x) = a(x - p)^2 + q$$."
              onComplete={() => handleStageComplete(4)}
              img = "/steps-images/postac-kanoniczna.png"
            />
          </>
        )}
        
        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 5: Określ zbiór wartości funkcji
            </p>
            <ChoiceQuestion
              question="Jaki jest zbiór wartości funkcji f(x)?"
              choices={[
                { label: "[-2, \\infty)", value: "a" },
                { label: "(-\\infty, -2]", value: "b" },
                { label: "[2, \\infty)", value: "c" },
                { label: "(-\\infty, 2]", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$[-2, ∞)$$. <br>Ponieważ a = 2 > 0, funkcja osiąga minimum w wierzchołku. <br>Zbiór wartości to $$[q, ∞) = [-2, ∞)$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="f(x) = 2x^2 + 4x"
            steps={[
              { step: " Współczynniki: a = 2, b = 4, c = 0" },
              { step: "\\text{ Oblicz p: } p = -\\frac{b}{2a} = -\\frac{4}{4} = -1" },
              { step: "\\text{ Oblicz Δ: } Δ = b^2 - 4ac = 16 - 0 = 16" },
              { step: "\\text{ Oblicz q: }q = -\\frac{Δ}{4a} = -\\frac{16}{8} = -2" },
              { step: "\\text{Postać kanoniczna: } f(x) = 2(x - (-1))^2 + (-2) = 2(x + 1)^2 - 2" },
              { step: "\\text{ Zbiór wartości: } [ -2, ∞ ) \\text{ (bo a = 2 > 0) }" }
            ]}
            solutions={["f(x) = 2(x + 1)^2 - 2", "ZW=[-2, ∞)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;