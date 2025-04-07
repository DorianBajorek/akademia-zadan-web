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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
<<<<<<< HEAD
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Zapisz w postaci jednej potęgi o podstawie 3:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="3^{-3} \cdot \sqrt{27}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 3:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla liczby 27?"
              choices={[
                { label: "27 = 3^2", value: "a" },
                { label: "27 = 3^3", value: "b" },
                { label: "27 = 3^4", value: "c" },
                { label: "27 = 3^5", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$27 = 3^3$$, ponieważ $$3^3 = 27$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
=======
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równoległość prostych</h2>
        <p className="text-lg text-gray-800">W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)"/> dane są proste <InlineMath math="k"/> oraz <InlineMath math="l"/> o równaniach</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="k: y = -\frac{1}{2}x - 7"/> 
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="l: y = (2m - 1)x + 13"/> 
        </p>
        <p className="text-lg text-gray-800 mt-4">Proste <InlineMath math="k"/> oraz <InlineMath math="l"/> są równoległe, gdy:</p>
        
        {/* Krok 1 - Warunek równoległości prostych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Kiedy dwie proste są równoległe?
            </p>
            <ChoiceQuestion
              question="Który warunek musi być spełniony, aby proste były równoległe?"
              choices={[
                { label: "\\text{Ich współczynniki kierunkowe są równe}", value: "a" },
                { label: "\\text{Ich wyrazy wolne są równe}", value: "b" },
                { label: "\\text{Ich współczynniki kierunkowe są przeciwne}", value: "c" },
                { label: "\\text{Ich iloczyn współczynników kierunkowych wynosi -1}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są równoległe, gdy mają równe współczynniki kierunkowe."
              img={"/steps-images/rownoleglosc_prostych.png"}
              onComplete={() => handleStageComplete(1)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć pierwiastek na potęgę o wykładniku ułamkowym:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$\sqrt{27}$$?"
              choices={[
                { label: "\\sqrt{27} = 27^{\\frac{1}{3}} = (3^3)^{\\frac{1}{3}}", value: "a" },
                { label: "\\sqrt{27} = 27^{2} = (3^3)^{2}", value: "b" },
                { label: "\\sqrt{27} = 27^{-\\frac{1}{2}} = (3^3)^{-\\frac{1}{2}}", value: "c" },
                { label: "\\sqrt{27} = 27^{\\frac{1}{2}} = (3^3)^{\\frac{1}{2}}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$\sqrt{27} = 27^{\frac{1}{2}} = (3^3)^{\frac{1}{2}}$$, ponieważ pierwiastek kwadratowy to potęga o wykładniku 1/2."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/pierwiastekPotega.png"
=======
        {/* Krok 2 - Przyrównanie współczynników */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przyrównaj współczynniki kierunkowe prostych <InlineMath math="k"/> i <InlineMath math="l"/>
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `2m - 1 = -\\frac{1}{2}`, value: "a" },
                { label: `2m - 1 = \\frac{1}{2}`, value: "b" },
                { label: `-\\frac{1}{2}(2m - 1) = -1`, value: "c" },
                { label: `-\\frac{1}{2} + (2m-1)=0`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawne równanie to: $$2m - 1 = -\\frac{1}{2}$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$-\\frac{1}{2}$$ dla prostej $$k$$ i $$2m-1$$ dla prostej $$l$$`}
              onComplete={() => handleStageComplete(2)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              {/* Zastosuj prawo potęgowania do wyrażenia $$(3^3)^{\frac{1}{2}}$$: */}
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "(3^3)^{\\frac{1}{2}} = 3^{3 \\cdot \\frac{1}{2}} = 3^{\\frac{3}{2}}", value: "a" },
                { label: "(3^3)^{\\frac{1}{2}} = 3^{3 + \\frac{1}{2}} = 3^{\\frac{7}{2}}", value: "b" },
                { label: "(3^3)^{\\frac{1}{2}} = 3^{3 - \\frac{1}{2}} = 3^{\\frac{5}{2}}", value: "c" },
                { label: "(3^3)^{\\frac{1}{2}} = 3^{\\frac{1}{2}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$(3^3)^{\frac{1}{2}} = 3^{3 \cdot \frac{1}{2}} = 3^{\frac{3}{2}}$$. Gdy mamy potęgę potęgi, mnożymy wykładniki."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/potegiWlasnosci.png"
=======
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2m - 1 = -\frac{1}{2}"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = -\\frac{1}{2}", value: "a" },
                { label: "m = \\frac{1}{4}", value: "b" },
                { label: "m = \\frac{3}{2}", value: "c" },
                { label: "m = 2", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Kolejne kroki: <br>
              1. $$2m - 1 = -\frac{1}{2}$$ <br>
              2. Dodajemy 1 do obu stron: <br>
              $$2m = \frac{1}{2}$$ <br>
              3. Dzielimy obie strony przez 2: <br>
              $$m = \frac{1}{4}$$"
              onComplete={() => handleStageComplete(3)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie potęg o tej samej podstawie:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$3^{-3} \cdot 3^{\frac{3}{2}}$$?"
              choices={[
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 + \\frac{3}{2}} = 3^{-\\frac{3}{2}}", value: "a" },
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 \\cdot \\frac{3}{2}} = 3^{-\\frac{9}{2}}", value: "b" },
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 - \\frac{3}{2}} = 3^{-\\frac{9}{2}}", value: "c" },
                { label: "3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{3 + \\frac{3}{2}} = 3^{\\frac{9}{2}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$3^{-3} \cdot 3^{\frac{3}{2}} = 3^{-3 + \frac{3}{2}} = 3^{-\frac{3}{2}}$$. Gdy mnożymy potęgi o tej samej podstawie, dodajemy wykładniki."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "3^{-3} \\cdot \\sqrt{27} = 3^{-3} \\cdot \\sqrt{3^3} = 3^{-3} \\cdot (3^3)^{\\frac{1}{2}}= 3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 + \\frac{3}{2}} = 3^{-\\frac{3}{2}}",
              },
            ]}
            solutions={["3^{-\\frac{3}{2}}"]}
=======
        {/* Podsumowanie */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste k i l są równoległe} \newline k: y=-\frac{1}{2}x-7 \newline l:y=(2m-1)x+13"
            steps={[
              { step: "\\text{Warunek równoległości: współczynniki kierunkowe równe } a_{1}=a_{2}" },
              { step: "2m - 1 = -\\frac{1}{2}" },
              { step: "m = \\frac{1}{4}" },
            ]}
            solutions={[
              "m = \\frac{1}{4}", 
            ]}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
          />
        )}
      </div>
    </div>
  );
};

export default Page;