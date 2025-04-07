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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Prostopadłość prostych</h2>
        <p className="text-lg text-gray-800">Proste opisane równaniami:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = \frac{2}{m-1}x + m - 2"/> 
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = mx + \frac{1}{m+1}"/> 
        </p>
        <p className="text-lg text-gray-800 mt-4">są prostopadłe, gdy:</p>
        
        {/* Krok 1 - Warunek prostopadłości prostych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Kiedy dwie proste są prostopadłe?
            </p>
            <ChoiceQuestion
              question="Który warunek musi być spełniony, aby proste były prostopadłe?"
              choices={[
                { label: "\\text{Iloczyn ich współczynników kierunkowych wynosi -1}", value: "a" },
                { label: "\\text{Ich współczynniki kierunkowe są równe}", value: "b" },
                { label: "\\text{Suma ich współczynników kierunkowych wynosi 0}", value: "c" },
                { label: "\\text{Ich wyrazy wolne są równe}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych wynosi -1."
              img={"/steps-images/proste_prostopadle.png"}
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {/* Krok 2 - Przyrównanie współczynników */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz warunek prostopadłości dla podanych prostych
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `\\frac{2}{m-1} \\cdot m = 1`, value: "a" },
                { label: `\\frac{2}{m-1} \\cdot m = -1`, value: "b" },
                { label: `\\frac{2}{m-1} + m = -1`, value: "c" },
                { label: `\\frac{2}{m-1} = m`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$\\frac{2}{m-1} \\cdot m = -1$$ <br>
              Wynika to z warunku prostopadłości: iloczyn współczynników kierunkowych musi być równy -1.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="\frac{2m}{m-1} = -1"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = 2", value: "a" },
                { label: "m = \\frac{1}{2}", value: "b" },
                { label: "m = \\frac{1}{3}", value: "c" },
                { label: "m = -2", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$\frac{2m}{m-1} = -1$$ <br>
              2. Mnożymy obie strony przez (m-1): <br>
              $$2m = -1(m - 1)$$ <br>
              3. Wymnażamy: <br>
              $$2m = -m + 1$$ <br>
              4. Przenosimy wyrazy z m na lewą stronę: <br>
              $$3m = 1$$ <br>
              5. Dzielimy przez 3: <br>
              $$m = \frac{1}{3}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste są prostopadłe}"
            steps={[
              { step: "\\text{Warunek prostopadłości: } a_1 \\cdot a_2 = -1" },
              { step: "\\frac{2}{m-1} \\cdot m = -1" },
              { step: "2m = -m + 1" },
              { step: "m = \\frac{1}{3}" },
            ]}
            solutions={[
              "m = \\frac{1}{3}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;