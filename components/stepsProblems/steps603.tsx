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
        <p className="text-lg text-gray-800">Prosta <InlineMath math="l"/> o równaniu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = m^2 x + 3"/> 
        </p>
        <p className="text-lg text-gray-800">jest równoległa do prostej <InlineMath math="k"/> o równaniu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = (4m - 4)x - 3"/> 
        </p>
        <p className="text-lg text-gray-800 mt-4">Zatem:</p>
        
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
                { label: "\\text{Suma ich współczynników kierunkowych wynosi 0}", value: "c" },
                { label: "\\text{Iloczyn ich współczynników kierunkowych wynosi -1}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są równoległe, gdy mają równe współczynniki kierunkowe."
              img={"/steps-images/rownoleglosc_prostych.png"}
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {/* Krok 2 - Przyrównanie współczynników */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przyrównaj współczynniki kierunkowe prostych <InlineMath math="l"/> i <InlineMath math="k"/>
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `m^2 = 4m - 4`, value: "a" },
                { label: `m^2 = -4m + 4`, value: "b" },
                { label: `m^2 + 4m - 4 = 0`, value: "c" },
                { label: `m^2 - 4m = 0`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawne równanie to: $$m^2 = 4m - 4$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$m^{2}$$ dla prostej $$l$$ i $$4m-4$$ dla prostej $$k$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Rozwiązanie równania kwadratowego */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="m^2 = 4m - 4 "/>
            </p>
            <ChoiceQuestion
              question="Jakie rozwiązania ma to równanie?"
              choices={[
                { label: "m = 2", value: "a" },
                { label: "m = 2 \\text{ lub } m = -2", value: "b" },
                { label: "m = 2 + 2\\sqrt{2} \\text{ lub }  m = 2 - 2\\sqrt{2}", value: "c" },
                { label: "m = -2 - 2\\sqrt{2} \\text{ lub } m = -2 + 2\\sqrt{2}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$m^2 - 4m + 4 = 0$$ <br>
              2. Obliczamy wyróżnik: <br>
              $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0$$ <br>
              3. Ponieważ $$\Delta = 0$$, równanie ma jedno podwójne rozwiązanie: <br>
              $$m = \frac{4}{2} = 2$$"
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
                { label: "A. \\ m = 2", value: "a" },
                { label: "B. \\ m = -2", value: "b" },
                { label: "C. \\ m = -2 - 2√2", value: "c" },
                { label: "D. \\ m = 2 + 2√2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Jedynym poprawnym rozwiązaniem jest $$m = 2$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste k i l są równoległe} \newline k: y = m^2 x + 3 \newline l:y=(4m-4)x-3 "
            steps={[
              { step: "\\text{Warunek równoległości: współczynniki kierunkowe równe } a_{1}=a_{2}" },
              { step: "m^2 = 4m - 4" },
              { step: "m^2 - 4m + 4 = 0" },
              { step: "Δ = 0 \\Rightarrow m = 2" },
            ]}
            solutions={[
              "m = 2 \\text{ (Odpowiedź A)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;