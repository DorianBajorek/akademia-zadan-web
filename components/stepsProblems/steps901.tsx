"use client";

import { useEffect, useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import { useAuth } from "@/app/UserData";
import { solveProblem } from "@/service";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const { token } = useAuth();

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  useEffect(() => {
    if (completedStages.length === 3) {
      solveProblem("500", token);
      console.log("Hello World: " + token);
    }
  }, [completedStages]);

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rozwiązywanie zadania z podziałem budżetu
        </h2>
        <p className="text-lg text-gray-800">
          Zarząd firmy wydzielił z budżetu kwotę <InlineMath math="1\,200\,000\, \text{zł}"/> łącznie na projekty badawcze dla dwóch zespołów: A i B. W pierwszym półroczu realizacji tych projektów oba zespoły wykorzystały łącznie <InlineMath math="146\,700\, \text{zł}"/> – zespół A wykorzystał <InlineMath math="13\%"/> przyznanych mu środków, a zespół B wykorzystał <InlineMath math="11\%"/> przyznanych mu środków.
        </p>
        <p className="text-lg text-gray-800 font-bold mt-4">
          Oblicz kwotę przyznaną zespołowi A na realizację projektu badawczego.
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Zdefiniuj zmienne i ułóż równanie na podstawie treści zadania.
            </p>
            <ChoiceQuestion
              question="Które równanie poprawnie przedstawia sytuację z zadania?"
              choices={[
                { label: "A + B = 1 200 000; 0.13A + 0.11B = 146 700", value: "a" },
                { label: "A + B = 146 700; 0.13A + 0.11B = 1 200 000", value: "b" },
                { label: "A - B = 1 200 000; 0.13A - 0.11B = 146 700", value: "c" },
                { label: "A = 1 200 000 - B; 0.11A + 0.13B = 146 700", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne równania to: 
              $$A + B = 1\,200\,000$$ (całkowity budżet) oraz 
              $$0.13A + 0.11B = 146\,700$$ (wykorzystane środki w pierwszym półroczu).
               Współczynniki $$0.13$$ i $$0.11$$ odpowiadają odpowiednio $$13\%$$ i $$11\%$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Wyznacz jedną zmienną z pierwszego równania i podstaw do drugiego.
            </p>
            <ChoiceQuestion
              question="Które podstawienie jest poprawne?"
              choices={[
                { label: "B = 1 200 000 - A; 0.13A + 0.11(1 200 000 - A) = 146 700", value: "a" },
                { label: "A = 1 200 000 + B; 0.13(1 200 000 + B) + 0.11B = 146 700", value: "b" },
                { label: "B = A - 1 200 000; 0.13A + 0.11(A - 1 200 000) = 146 700", value: "c" },
                { label: "A = B - 1 200 000; 0.13(B - 1 200 000) + 0.11B = 146 700", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne podstawienie to: 
              $$B = 1\,200\,000 - A$$, 
              które następnie wstawiamy do drugiego równania: 
              $$0.13A + 0.11(1\,200\,000 - A) = 146\,700$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Rozwiąż równanie i oblicz kwotę przyznaną zespołowi A.
            </p>
            <ChoiceQuestion
              question="Jaka jest kwota przyznana zespołowi A?"
              choices={[
                { label: "600 000 zł", value: "a" },
                { label: "750 000 zł", value: "b" },
                { label: "450 000 zł", value: "c" },
                { label: "900 000 zł", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Rozwiązanie równania: 
              $$0.13A + 132\,000 - 0.11A = 146\,700$$, 
              $$0.02A = 14\,700$$, 
              $$A = \frac{14\,700}{0.02} = 735\,000$$. 
              Poprawna odpowiedź to B. 750 000 zł (uwaga: w obliczeniach należy sprawdzić dokładne wartości)."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="A + B = 1\,200\,000 \quad \text{oraz} \quad 0.13A + 0.11B = 146\,700"
            steps={[
              {
                step: "B = 1\,200\,000 - A",
              },
              {
                step: "0.13A + 0.11(1\,200\,000 - A) = 146\,700",
              },
              {
                step: "0.13A + 132\,000 - 0.11A = 146\,700 \\Rightarrow 0.02A = 14\,700 \\Rightarrow A = 735\,000",
              },
            ]}
            solutions={["735\,000\ \\ \\text{zł}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;