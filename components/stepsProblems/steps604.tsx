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
        <p className="text-lg text-gray-800">Proste o równaniach:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = 2mx - m^2 - 1"/> 
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = 4m^2x + m^2 + 1"/> 
        </p>
        <p className="text-lg text-gray-800 mt-4">są prostopadłe dla:</p>
        
        {/* Krok 1 - Warunek prostopadłości prostych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Kiedy dwie proste są prostopadłe?
            </p>
            <ChoiceQuestion
              question="Który warunek musi być spełniony, aby proste były prostopadłe?"
              choices={[
                { label: "\\text{Iloczyn współczynników kierunkowych wynosi -1}", value: "a" },
                { label: "\\text{Współczynniki kierunkowe są równe}", value: "b" },
                { label: "\\text{Suma współczynników kierunkowych wynosi 0}", value: "c" },
                { label: "\\text{Wyrazy wolne są przeciwne}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych wynosi -1."
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
                { label: `2m \\cdot 4m^2 = 1`, value: "a" },
                { label: `2m \\cdot 4m^2 = -1`, value: "b" },
                { label: `2m + 4m^2 = -1`, value: "c" },
                { label: `2m = 4m^2`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$2m \\cdot 4m^2 = -1$$ <br>
              Wynika to z warunku prostopadłości: $$a_{1} \\cdot {a_2} = -1$$ <br> 
              Odczytujemy z równań prostych $$a_{1}=2m$$ i $$a_{2}=4m^2$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2m \cdot 4m^{2}=-1"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = -\\frac{1}{2}", value: "a" },
                { label: "m = \\frac{1}{2}", value: "b" },
                { label: "m = 1", value: "c" },
                { label: "m = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$8m^3 = -1$$ <br>
              2. Dzielimy obie strony przez 8: <br>
              $$m^3 = -\frac{1}{8}$$ <br>
              3. Pierwiastkujemy obustronnie: <br>
              $$m = \sqrt[3]{-\frac{1}{8}} = -\frac{1}{2}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Krok 4 - Weryfikacja rozwiązań */}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Która z podanych opcji jest poprawna?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: "A. m = -\\frac{1}{2}", value: "a" },
                { label: "B. m = \\frac{1}{2}", value: "b" },
                { label: "C. m = 1", value: "c" },
                { label: "D. m = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Jedynym poprawnym rozwiązaniem jest m = -1/2, co odpowiada opcji A."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste} \newline y = 2mx - m^2 - 1  \newline y = 4m^2x + m^2 + 1 \newline \text{są prostopadłe}"
            steps={[
              { step: "\\text{Warunek prostopadłości: } a_1 \\cdot a_2 = -1" },
              { step: "2m \\cdot 4m^2 = -1" },
              { step: "8m^3 = -1" },
              { step: "m^3 = -\\frac{1}{8}" },
              { step: "m = -\\frac{1}{2}" },
            ]}
            solutions={[
              "m = -\\frac{1}{2} \\text{ (Odpowiedź A)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;