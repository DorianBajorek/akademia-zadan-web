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
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Suma początkowych wyrazów ciągu geometrycznego
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          W ciągu geometrycznym przez <InlineMath math="S_n" /> oznaczamy sumę <InlineMath math="n" /> początkowych wyrazów tego ciągu, dla liczb naturalnych <InlineMath math="n \geq 1" />.<br />
          Wiadomo, że dla pewnego ciągu geometrycznego: <InlineMath math="S_1 = 2" /> i <InlineMath math="S_2 = 12" />.<br />
          Wyznacz iloraz i piąty wyraz tego ciągu.
        </p>

        {/* ETAP 1: Jakie są wartości S1 i S2 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie równania zapiszesz korzystając z S₁ i S₂?"
            choices={[
              { label: "S_1 = a_1, S_2 = a_1 + a_1 q", value: "a" },
              { label: "S_1 = a_1 q, S_2 = a_1 + q^2", value: "b" },
              { label: "S_1 = a_1 + q, S_2 = a_1 q^2", value: "c" },
              { label: "S_1 = a_1 + a_1 q, S_2 = a_1", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Suma pierwszego wyrazu to $$S_1 = a_1$$, suma dwóch: $$S_2 = a_1 + a_1 q$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Jaką postać ma równanie na q */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Podstaw $$S_1 = 2$$ i $$S_2 = 12$$. Jaką postać ma równanie na $$q$$?"
            choices={[
              { label: "2 + 2q = 12", value: "a" },
              { label: "2q - 2 = 12", value: "b" },
              { label: "q + 2q = 12", value: "c" },
              { label: "2 + q = 12", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Podstaw $$a_1 = 2$$ do $$S_2 = a_1 + a_1 q$$: $$2 + 2q = 12$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Wyznaczenie q */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Rozwiąż równanie $2 + 2q = 12$. Ile wynosi $q$?"
            choices={[
              { label: "q = 5", value: "a" },
              { label: "q = 6", value: "b" },
              { label: "q = 10", value: "c" },
              { label: "q = 12", value: "d" },
            ]}
            correctAnswer="a"
            explanation="$$2 + 2q = 12$$<br/>$$2q = 10 \implies q = 5$$"
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Wyznaczenie a_5 */}
        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Oblicz piąty wyraz ciągu $$a_5$$."
            choices={[
              { label: "a_5 = 2 · 5^4 = 250", value: "a" },
              { label: "a_5 = 2 · 5^4 = 625", value: "b" },
              { label: "a_5 = 2 · 5^4 = 1250", value: "c" },
              { label: "a_5 = 2 · 5^4 = 3125", value: "d" },
            ]}
            correctAnswer="c"
            explanation="$$a_5 = a_1 q^{4} = 2 \cdot 5^4 = 2 \cdot 625 = 1250$$"
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="S_2 = a_1 + a_1 q"
            steps={[
              { step: "S_1 = a_1 = 2" },
              { step: "S_2 = a_1 + a_1 q = 12" },
              { step: "2 + 2q = 12" },
              { step: "2q = 10 \\implies q = 5" },
              { step: "a_5 = a_1 q^4 = 2 \\cdot 625 = 1250" }
            ]}
            solutions={[
              "\\text{Iloraz } q = 5,\\quad a_5 = 1250"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
