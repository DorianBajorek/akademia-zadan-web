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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie wzoru funkcji kwadratowej</h2>
        <p className="text-lg text-gray-800 mt-4">Zbiorem wartości funkcji <InlineMath math="f(x) = x^2 + 2x + c" /> jest przedział <InlineMath math="[-2, \infty)" />. 
        Wyznacz współczynnik <InlineMath math="c"/> i wzór funkcji <InlineMath math="f"/> w postaci kanonicznej</p>

        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Co wynika z podanego zbioru wartości funkcji?"
              choices={[
                { label: "\\text{ Funkcja osiąga minimum równe -2 }", value: "a" },
                { label: "\\text{ Funkcja osiąga maksimum równe -2}", value: "b" },
                { label: "\\text{ Współczynnik kierunkowy jest ujemny}", value: "c" },
                { label: "\\text{ Funkcja nie ma miejsc zerowych}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź: Funkcja osiąga minimum równe $$-2$$. <br>Zbiór wartości $$[-2, \infty)$$  wskazuje, że funkcja ma minimum (bo $$a > 0$$) równe $$q = -2$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <ChoiceQuestion
              question="Jakie równanie pozwoli wyznaczyć współczynnik $$c$$?"
              choices={[
                { label: "q = \\frac{-Δ}{4a} = -2", value: "a" },
                { label: "f(0) = -2", value: "b" },
                { label: "f(-2) = 0", value: "c" },
                { label: "p = \\frac{-b}{2a} = -2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź: $$q = \frac{-Δ}{4a} = -2$$. <br>Wartość minimalna funkcji to $$q = -2$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <ChoiceQuestion
              question="Oblicz wartość współczynnika c:"
              choices={[
                { label: "c = 1", value: "a" },
                { label: "c = -1", value: "b" },
                { label: "c = 2", value: "c" },
                { label: "c = -2", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Rozwiązanie:<br>1. $$a = 1$$, $$b = 2$$<br>2. $$Δ = b² - 4ac = 4 - 4c$$<br>3. $$q = \frac{-Δ}{4} = -2 \rightarrow Δ = 8$$<br>4. $$4 - 4c = 8  \rightarrow -4c = 4 ⇒ c = -1$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <ChoiceQuestion
              question="Oblicz współrzędną p wierzchołka paraboli:"
              choices={[
                { label: "p = -1", value: "a" },
                { label: "p = 1", value: "b" },
                { label: "p = -2", value: "c" },
                { label: "p = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Obliczenia:<br>$$p = -\frac{b}{2a} = -\frac{2}{2} = -1$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.includes(4) && (
          <>
            <ChoiceQuestion
              question="Jaka jest postać kanoniczna funkcji?"
              choices={[
                { label: "f(x) = (x + 1)^2 - 2", value: "a" },
                { label: "f(x) = (x - 1)^2 - 2", value: "b" },
                { label: "f(x) = (x + 2)^2 - 1", value: "c" },
                { label: "f(x) = (x - 2)^2 - 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązanie:<br>1. $$p = -1, q = -2$$<br>2. Postać kanoniczna: $$f(x) = a(x - p)^2 + q = (x - (-1))^2 - 2 = (x + 1)^2 - 2$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="f(x) = x^2 + 2x + c, ZW = [-2, ∞)"
            steps={[
              { step: "\\text{1. Z założenia: } q = -2, \\text{ bo } ZW = [-2, \\infty)" },
              { step: "\\text{2. Oblicz Δ: } -\\frac{Δ}{4} = -2 \\Rightarrow Δ = 8" },
              { step: "\\text{3. Oblicz c: } Δ = b^2 - 4ac \\Rightarrow 8 = 4 - 4c \\Rightarrow c = -1" },
              { step: "\\text{4. Oblicz p: } p = -\\frac{b}{2a} = -1" },
              { step: "\\text{5. Postać kanoniczna: } f(x) = (x + 1)^2 - 2" }
            ]}
            solutions={[
              "c = -1",
              "f(x) = (x + 1)^2 - 2"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;