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
        <p className="text-lg text-gray-800 mt-4">Wierzchołek funkcji kwadratowej <InlineMath math="f"/> to punkt <InlineMath math="W=(1,2)"/>. 
        Do wykresu należy punkt <InlineMath math="P=(2,\frac{7}{2})"/>.           Wyznacz wzór funkcji f w postaci kanonicznej</p>


        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Jaka jest postać kanoniczna funkcji której  wierzchołek  ma współrzędne $$W=(p,q)$$?"
              choices={[
                { label: "f(x) = a(x - p)^2 + q", value: "a" },
                { label: "f(x) = a(x + p)^2 - q", value: "b" },
                { label: "f(x) = (x - p)^2 + q", value: "c" },
                { label: "f(x) = a(x + p)^2 + q", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$f(x) = a(x - p)^2 + q$$."
              img = "/steps-images/postac-kanoniczna.png"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
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
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <ChoiceQuestion
              question="Jak obliczyć współczynnik a korzystając z punktu (2,7/2)?"
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
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <ChoiceQuestion
              question="Oblicz wartość współczynnika a:"
              choices={[
                { label: "a = \\frac{-1}{2}", value: "a" },
                { label: "a = \\frac{1}{2}", value: "b" },
                { label: "a = \\frac{3}{2}", value: "c" },
                { label: "a = 2", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Rozwiązanie:<br>$$\frac{7}{2} = a(2-1)^2 + 2$$<br>$$\frac{7}{2} = a + 2$$<br>$$a = \frac{7}{2} - 2 = \frac{3}{2} $$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.includes(4) && (
          <>
            <ChoiceQuestion
              question="Jaki jest ostateczny wzór funkcji w postaci kanonicznej?"
              choices={[
                { label: "f(x) = \\frac{3}{2}(x - 1)^2 + 2", value: "a" },
                { label: "f(x) = \\frac{-1}{2}(x + 1)^2 - 2", value: "b" },
                { label: "f(x) = (x - 1)^2 + 2", value: "c" },
                { label: "f(x) = \\frac{1}{2}(x + 1)^2 - 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to $$f(x) = \frac{1}{2}(x - 1)^2 + 2$$. <br>Jest to pełna postać kanoniczna z wyznaczonym współczynnikiem a."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="W=(1,2), P=(2,7/2)"
            steps={[
              { step: "\\text{Postać kanoniczna: } f(x) = a(x - p)^2 + q" },
              { step: "\\text{Podstawiamy wierzchołek: } f(x) = a(x - 1)^2 + 2" },
              { step: "\\text{Podstawiamy punkt } (2,\\frac{7}{2}) \\text{ : } \\frac{7}{2} = a(2-1)^2 + 2" },
              { step: "\\text{Rozwiązujemy: } \\frac{7}{2} = a + 2 \\Rightarrow a = \\frac{1}{2}" },
              { step: "\\text{Ostateczny wzór: } f(x) = \\frac{1}{2}(x - 1)^2 + 2" }
            ]}
            solutions={["f(x) = \\frac{1}{2}(x - 1)^2 + 2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;