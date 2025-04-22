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
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
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
            />
          </>
        )}
        
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
            />
          </>
        )}
        
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
          />
        )}
      </div>
    </div>
  );
};

export default Page;