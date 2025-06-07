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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie wzoru funkcji kwadratowej</h2>
        <p className="text-lg text-gray-800 mt-4">Zbiorem wartości funkcji <InlineMath math="f(x) = x^2 + bx + 3" /> jest przedział <InlineMath math="[-1, \infty)" />. Wyznacz współczynnik <InlineMath math="b"/> i wzór funkcji <InlineMath math="f"/> w postaci kanonicznej</p>
        <p className="text-lg text-gray-800 font-bold text-center mt-4">
         
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Co możemy wywnioskować z podanego zbioru wartości?"
              choices={[
                { label: "\\text{Funkcja ma maksimum równe -1}", value: "a" },
                { label: "\\text{Funkcja ma minimum równe -1}", value: "b" },
                { label: "\\text{Współczynnik a jest ujemny}", value: "c" },
                { label: "\\text{Funkcja nie ma wierzchołka}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź: Funkcja ma minimum równe $$-1$$. <br>Zbiór wartości $$[-1, \infty)$$ wskazuje, że funkcja ma minimum (bo $$a > 0$$) równe $$q = -1$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <ChoiceQuestion
              question="Jakie jest równanie pozwalające wyznaczyć współczynnik b?"
              choices={[
                { label: "q = \\frac{-Δ}{4a} = -1", value: "a" },
                { label: "p = \\frac{-b}{2a} = -1", value: "b" },
                { label: "f(0) = -1", value: "c" },
                { label: "f(-1) = 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź: $$q = \\frac{-Δ}{4a} = -1$$. <br>Wartość minimalna funkcji to $$q = -1$$. Dla funkcji kwadratowej $$q = \frac{-Δ}{4a}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <ChoiceQuestion
              question="Oblicz wartość współczynnika b:"
              choices={[
                { label: "b = 4 \\text{ lub } b = -4", value: "a" },
                { label: "b = 2 \\text{ lub } b = -2", value: "b" },
                { label: "b = 1 \\text{ lub } b = -1", value: "c" },
                { label: "b = 3 \\text{ lub } b = -3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązanie:<br>1. $$a = 1$$ (z wzoru funkcji)<br>2. $$\Delta = b^2 - 12$$<br>3. $$q = \frac{-\Delta}{4a} = -1 \rightarrow \Delta = 4$$
              <br>4. $$b^2 - 12 = 4 \rightarrow b^2 = 16 ⇒ b = ±4$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <ChoiceQuestion
              question="Jaka jest postać kanoniczna funkcji dla $$b=4$$?"
              choices={[
                { label: "f(x) = (x + 2)^2 - 1", value: "a" },
                { label: "f(x) = (x - 2)^2 - 1", value: "b" },
                { label: "f(x) = (x + 4)^2 - 1", value: "c" },
                { label: "f(x) = (x - 4)^2 - 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązanie:<br>1. Dla $$b=4$$: $$p = \frac{-b}{2a} = -2$$<br>2. $$q = -1$$ (z założenia)<br>3. Postać kanoniczna: $$f(x) = (x - (-2))^2 - 1 = (x + 2)^2 - 1$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.includes(4) && (
          <>
            <ChoiceQuestion
              question="Jaka jest postać kanoniczna funkcji dla b=-4?"
              choices={[
                { label: "f(x) = (x - 2)^2 - 1", value: "a" },
                { label: "f(x) = (x + 2)^2 - 1", value: "b" },
                { label: "f(x) = (x - 4)^2 - 1", value: "c" },
                { label: "f(x) = (x + 4)^2 - 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązanie:<br>1. Dla $$b=-4$$: $$p = \frac{-b}{2a} = 2$$<br>2. $$q = -1$$ (z założenia)<br>3. Postać kanoniczna: $$f(x) = (x - 2)^2 - 1$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="f(x) = x^2 + bx + 3, ZW = [-1, ∞)"
            steps={[
              { step: "\\text{1. Zbiór wartości } [-1, \\infty) \\Rightarrow q = -1, a > 0" },
              { step: "\\text{2. Oblicz Δ: } q = -\\frac{Δ}{4a} = -1 \\Rightarrow Δ = 4" },
              { step: "\\text{3. Równanie: } b^2 - 12 = 4 \\Rightarrow b^2 = 16 \\Rightarrow b = \\pm4" },
              { step: "\\text{4. Dla b=4: } p = -\\frac{4}{2} = -2 \\Rightarrow f(x) = (x + 2)^2 - 1" },
              { step: "\\text{5. Dla b=-4: } p = -\\frac{-4}{2} = 2 \\Rightarrow f(x) = (x - 2)^2 - 1" }
            ]}
            solutions={[
              "b = 4 \\text{ lub } b = -4",
              "f(x) = (x + 2)^2 - 1 \\text{ lub } f(x) = (x - 2)^2 - 1"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;