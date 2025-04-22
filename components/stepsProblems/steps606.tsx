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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równoległość prostych</h2>
        <p className="text-lg text-gray-800">Proste o równaniach:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = (2m + 2)x - 2019"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = (3m - 3)x + 2019"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">są równoległe, gdy:</p>
        
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
                { label: "\\text{Suma współczynników kierunkowych wynosi 0}", value: "c" },
                { label: "\\text{Iloczyn współczynników kierunkowych wynosi -1}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są równoległe, gdy mają równe współczynniki kierunkowe."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {/* Krok 2 - Przyrównanie współczynników */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przyrównaj współczynniki kierunkowe prostych
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `2m + 2 = 3m - 3`, value: "a" },
                { label: `2m + 2 = -(3m - 3)`, value: "b" },
                { label: `(2m + 2)(3m - 3) = -1`, value: "c" },
                { label: `2m + 2 + 3m - 3 = 0`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawne równanie to: $$2m + 2 = 3m - 3$$ <br>
              Wynika to z warunku równoległości: współczynniki kierunkowe muszą być równe.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2m + 2 = 3m - 3"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = -1", value: "a" },
                { label: "m = 0", value: "b" },
                { label: "m = 1", value: "c" },
                { label: "m = 5", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$2m + 2 = 3m - 3$$ <br>
              2. Przenosimy wyrazy z m na jedną stronę: <br>
              $$2 + 3 = 3m - 2m$$ <br>
              3. Upraszczamy: <br>
              $$5 = m$$"
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
                { label: "A. m = -1", value: "a" },
                { label: "B. m = 0", value: "b" },
                { label: "C. m = 1", value: "c" },
                { label: "D. m = 5", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Jedynym poprawnym rozwiązaniem jest m = 5, co odpowiada opcji D."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste} \newline y=(2m+2)x-2019 \newline y=(3m-3)x+2019 \newline \text{są równoległe}"
            steps={[
              { step: "\\text{Warunek równoległości: } a_1 = a_2" },
              { step: "2m + 2 = 3m - 3" },
              { step: "m = 5" },
            ]}
            solutions={[
              "m = 5 \\text{ (Odpowiedź D)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;