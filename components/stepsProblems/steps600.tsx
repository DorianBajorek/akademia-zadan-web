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
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2^{-1} \cdot 32^{\frac{3}{5}}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 2:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla liczby 32?"
              choices={[
                { label: "32 = 2^4", value: "a" },
                { label: "32 = 2^5", value: "b" },
                { label: "32 = 2^6", value: "c" },
                { label: "32 = 2^3", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$32 = 2^5$$, ponieważ $$2^5 = 32$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
=======
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równoległość prostych</h2>
        <p className="text-lg text-gray-800">W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)"/> proste <InlineMath math="k"/> oraz <InlineMath math="l"/> są określone równaniami:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="k: y = (3m - 2)x - 2"/> 
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="l: y = (2m + 4)x + 2"/> 
        </p>
        <p className="text-lg text-gray-800 mt-4">Proste <InlineMath math="k"/> oraz <InlineMath math="l"/> są równoległe, gdy liczba <InlineMath math="m"/> jest równa:</p>
        
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
             Jeśli wiemy, że <InlineMath math="32 = 3^5" /> zapiszmy teraz całe nasze wyrażenie  <InlineMath math="32^{\frac{3}{5}}" />
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 \\cdot \\frac{3}{5}} = 2^3", value: "a" },
                { label: "32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 + \\frac{3}{5}}", value: "b" },
                { label: "32^{\\frac{3}{5}} = 32^{\\frac{5}{3}} = 2^{\\frac{5}{3}}", value: "c" },
                { label: "32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 - \\frac{3}{5}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$32^{\frac{3}{5}} = (2^5)^{\frac{3}{5}} = 2^{5 \cdot \frac{3}{5}} = 2^3$$. Musimy pamiętać, że jeśli mamy potęgę do potęgi to wykładniki mnożymy!"
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/potegiWlasnosci.png"
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
                { label: `(3m - 2)(2m-4) = -1`, value: "a" },
                { label: `3m - 2 = -(2m + 4)`, value: "b" },
                { label: `3m-2 = 2m+4`, value: "c" },
                { label: `3m-2+2m+4 =0 `, value: "d" }
              ]}
              correctAnswer="c"
              explanation={`Poprawne równanie to: $$3m - 2 = 2m + 4$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$3m-2$$ dla prostej k i $$2m+4$$ dla prostej l`}
              onComplete={() => handleStageComplete(2)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie potęg o tej samej podstawie:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$2^{-1} \cdot 2^3$$?"
              choices={[
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 \\cdot 3} = 2^{-3}", value: "a" },
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^1 = 2", value: "b" },
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 - 3} = 2^{-4}", value: "c" },
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^2 = 4", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$2^{-1} \cdot 2^3 = 2^{-1 + 3} = 2^2 = 4$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/potegiWlasnosci.png"
=======
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="3m - 2 = 2m + 4"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = -6", value: "a" },
                { label: "m = -2", value: "b" },
                { label: "m = 2", value: "c" },
                { label: "m = 6", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki: <br>
              1. $$3m - 2 = 2m + 4$$ <br>
              2. Przenosimy wyrazy z $$m$$ na lewą stronę, a pozostałe na prawą: <br>
              $$3m - 2m = 4 + 2$$ <br>
              3. Upraszczamy: <br>
              $$m = 6$$"
              onComplete={() => handleStageComplete(3)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "2^{-1}\\cdot32^{\\frac{3}{5}} = 2^{-1}\\cdot(2^5)^{\\frac{3}{5}} = 2^{-1}\\cdot2^{5 \\cdot \\frac{3}{5}} =2^{-1}\\cdot 2^3 = ",
              },
              {
                step: " = 2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^2 = 4",
              },
            ]}
            solutions={["4"]}
=======
        {/* Podsumowanie */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste k i l są równoległe}  \newline  k: y=(3m-2)x-2 \newline l:y=(2m+4)x+2"
            steps={[
              { step: "\\text{Warunek równoległości: współczynniki kierunkowe równe } a_{1}=a_{2}" },
              { step: "3m - 2 = 2m + 4" },
              { step: "m = 6" },
            ]}
            solutions={[
              "m = 6", 
            ]}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
          />
        )}
      </div>
    </div>
  );
};

export default Page;