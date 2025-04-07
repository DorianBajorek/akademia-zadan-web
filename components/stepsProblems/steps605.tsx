"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

<<<<<<< HEAD

=======
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
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
          <InlineMath math="\left(\frac{4}{25}\right)^{-0.5}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Odwrócenie liczby za pomocą ujemnego wykładnika:
            </p>
            <ChoiceQuestion
              question="Jak przekształcić wyrażenie $$\left(\frac{4}{25}\right)^{-0.5}$$?"
              choices={[
                { label: "\\left(\\frac{4}{25}\\right)^{0.5}", value: "a" },
                { label: "\\left(\\frac{25}{4}\\right)^{0.5}", value: "b" },
                { label: "\\left(\\frac{4}{25}\\right)^{-2}", value: "c" },
                { label: "\\left(\\frac{25}{4}\\right)^{-2}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie: $$\left(\frac{4}{25}\right)^{-0.5} = \left(\frac{25}{4}\right)^{0.5}$$ (ułamki zamieniają się miejscami przy ujemnym wykładniku)."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/ujemnyWykladnik.png"
=======
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
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Zamiana potęgi <InlineMath math="0.5" /> na pierwiastek kwadratowy:
            </p>
            <ChoiceQuestion
              question="Jak zapisać wyrażenie $$\left(\frac{25}{4}\right)^{0.5}$$ za pomocą pierwiastka?"
              choices={[
                { label: "\\sqrt[5]{\\frac{25}{4}}", value: "a" },
                { label: "\\sqrt{\\frac{25}{4}}", value: "b" },
                { label: "\\sqrt[0.5]{\\frac{25}{4}}", value: "c" },
                { label: "\\sqrt[25]{\\frac{25}{4}}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie: $$\left(\frac{25}{4}\right)^{0.5} = \sqrt{\frac{25}{4}}$$ (potęga  $$0.5$$) odpowiada pierwiastkowi kwadratowemu)."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/pierwiastekPotega.png"
=======
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
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Obliczenie pierwiastka kwadratowego:
            </p>
            <ChoiceQuestion
              question="Jak obliczyć $$\sqrt{\frac{25}{4}}$$?"
              choices={[
                { label: "\\frac{25}{2}", value: "a" },
                { label: "\\frac{5}{2}", value: "b" },
                { label: "\\frac{5}{4}", value: "c" },
                { label: "\\frac{2}{5}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne obliczenie: $$\sqrt{\frac{25}{4}} = \frac{\sqrt{25}}{\sqrt{4}} = \frac{5}{2}$$."
=======
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
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\left(\frac{4}{25}\right)^{-0.5}"
            steps={[
              {
                step: "\\left(\\frac{4}{25}\\right)^{-0.5} = \\left(\\frac{25}{4}\\right)^{0.5} = \\sqrt{\\frac{25}{4}} = \\frac{5}{2}",
              }
            ]}
            solutions={["\\frac{5}{2}"]}
=======
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
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
          />
        )}
      </div>
    </div>
  );
};

export default Page;