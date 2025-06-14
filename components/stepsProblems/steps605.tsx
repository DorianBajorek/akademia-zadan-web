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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równoległość prostych</h2>
        <p className="text-lg text-gray-800">Proste o równaniach:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = (m + 2)x + 3"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = (2m - 1)x - 3"/>
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
                { label: `m + 2 = 2m - 1`, value: "a" },
                { label: `m + 2 = -(2m - 1)`, value: "b" },
                { label: `(m + 2)(2m - 1) = -1`, value: "c" },
                { label: `m + 2 + 2m - 1 = 0`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawne równanie to: $$m + 2 = 2m - 1$$ <br>
             Porównujemy współczynniki kierunkowe prostych, które są równe $$m+2$$ dla pierwszej prostej i $$2m-1$$ dla drugiej prostej`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="m + 2 = 2m - 1"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = 2", value: "a" },
                { label: "m = 3", value: "b" },
                { label: "m = 0", value: "c" },
                { label: "m = 1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$m + 2 = 2m - 1$$ <br>
              2. Przenosimy wyrazy z m na jedną stronę: <br>
              $$2 + 1 = 2m - m$$ <br>
              3. Upraszczamy: <br>
              $$3 = m$$"
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
                { label: "A. m = 2", value: "a" },
                { label: "B. m = 3", value: "b" },
                { label: "C. m = 0", value: "c" },
                { label: "D. m = 1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Jedynym poprawnym rozwiązaniem jest m = 3, co odpowiada opcji B."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste} \newline y=(m+2)x+3 \newline y=(2m-1)x-3 \newline \text{są równoległe}"
            steps={[
              { step: "\\text{Warunek równoległości: } a_1 = a_2" },
              { step: "m + 2 = 2m - 1" },
              { step: "m = 3" },
            ]}
            solutions={[
              "m = 3 \\text{ (Odpowiedź B)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;