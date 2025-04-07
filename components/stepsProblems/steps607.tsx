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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Przekształcanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Przekształć wyrażenie do postaci z potęgą o podstawie 5:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{9^5 \cdot 5^9}{45^5}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Rozbij liczbę 45 na czynniki:
            </p>
            <ChoiceQuestion
              question="Jak zapisać liczbę 45 w postaci iloczynu potęg liczb pierwszych?"
              choices={[
                { label: "45 = 9 \\cdot 5", value: "a" },
                { label: "45 = 3^2 \\cdot 5", value: "b" },
                { label: "45 = 3 \\cdot 15", value: "c" },
                { label: "45 = 5^2 \\cdot 2", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozbicie: $$45 = 9 \cdot 5$$ (najpierw upraszczamy do znanych liczb)."
=======
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równoległość prostych</h2>
        <p className="text-lg text-gray-800">Proste o równaniach:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = (4m + 1)x - 19"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="y = (5m - 4)x + 20"/>
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
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Podstaw rozbicie 45 do wyrażenia:
            </p>
            <ChoiceQuestion
              question="Jak teraz wygląda wyrażenie po podstawieniu?"
              choices={[
                { label: "\\frac{9^5 \\cdot 5^9}{(9 \\cdot 5)^5}", value: "a" },
                { label: "\\frac{9^5 \\cdot 5^9}{9^5 + 5^5}", value: "b" },
                { label: "\\frac{9^5 \\cdot 5^9}{9 \\cdot 5^5}", value: "c" },
                { label: "\\frac{9^5 \\cdot 5^9}{9^5 \\cdot 5^5}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne podstawienie: $$45^5 = (9 \cdot 5)^5 = 9^5 \cdot 5^5$$ (potęgowanie rozdzielne względem mnożenia)."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/potegiWlasnosci.png"
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
                { label: `4m + 1 = 5m - 4`, value: "a" },
                { label: `4m + 1 = -(5m - 4)`, value: "b" },
                { label: `(4m + 1)(5m - 4) = -1`, value: "c" },
                { label: `4m + 1 + 5m - 4 = 0`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawne równanie to: $$4m + 1 = 5m - 4$$ <br>
             Porównujemy współczynniki kierunkowe prostych, które są równe $$4m+1$$ dla pierwszej prostej i $$5m-4$$ dla drugiej prostej`}
              onComplete={() => handleStageComplete(2)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Skróć wyrażenie:
            </p>
            <ChoiceQuestion
            question="Jak będzie wyglądało wyrażenie po skróceniu $$\frac{9^5 \cdot 5^9}{9^5 \cdot 5^5}$$?"
            choices={[
                { label: "5^4", value: "a" },
                { label: "9^4 \\cdot 5^4", value: "b" },
                { label: "9 \\cdot 5^4", value: "c" },
                { label: "9^4", value: "d" },
            ]}
            correctAnswer="a"
            explanation={"W tym etapie skracamy licznik z mianownikiem. Widzimy, że w liczniku i mianowniku jest liczna: $$9^5$$. Czynnik ten się skraca. Natomiast dla potęg o podstawie $$5$$ odejmujemy wykładniki. Zostaje nam ostatenie $$5^{9-5} = 5^4$$"}
            onComplete={() => handleStageComplete(3)}
            img="/steps-images/potegiWlasnosci.png"
=======
        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="4m + 1 = 5m - 4"/>
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = 5", value: "a" },
                { label: "m = -\\frac{1}{4}", value: "b" },
                { label: "m = \\frac{5}{4}", value: "c" },
                { label: "m = -5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$4m + 1 = 5m - 4$$ <br>
              2. Przenosimy wyrazy z m na jedną stronę: <br>
              $$1 + 4 = 5m - 4m$$ <br>
              3. Upraszczamy: <br>
              $$5 = m$$"
              onComplete={() => handleStageComplete(3)}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
            />
          </>
        )}
        
<<<<<<< HEAD
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\frac{9^5 \cdot 5^9}{45^5}"
            steps={[
              {
                step: "45 = 9 \\cdot 5",
              },
              {
                step: "45^5 = (9 \\cdot 5)^5 = 9^5 \\cdot 5^5",
              },
              {
                step: "\\frac{9^5 \\cdot 5^9}{45^5} = \\frac{9^5 \\cdot 5^9}{9^5 \\cdot 5^5} = 5^4",
              }
            ]}
            solutions={["5^4"]}
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
                { label: "A. m = 5", value: "a" },
                { label: "B. m = -\\frac{1}{4}", value: "b" },
                { label: "C. m = \\frac{5}{4}", value: "c" },
                { label: "D. m = -5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Jedynym poprawnym rozwiązaniem jest m = 5, co odpowiada opcji A."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste} \newline y=(4m+1)x-19 \newline y=(5m-4)x+20 \newline \text{są równoległe}"
            steps={[
              { step: "\\text{Warunek równoległości: } a_1 = a_2" },
              { step: "4m + 1 = 5m - 4" },
              { step: "m = 5" },
            ]}
            solutions={[
              "m = 5 \\text{ (Odpowiedź A)}", 
            ]}
>>>>>>> d44fec7 (Added proste rownolegle i prostopadle)
          />
        )}
      </div>
    </div>
  );
};

export default Page;