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
          Wzór ogólny ciągu arytmetycznego
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          W ciągu arytmetycznym <InlineMath math="(a_n)" /> określonym dla każdej liczby naturalnej <InlineMath math="n \geq 1" /> spełnione są równości <InlineMath math="a_5 = 9" /> oraz <InlineMath math="a_{18} = 35" />.
        </p>


        {/* ETAP 2: Równanie na podstawie a_5 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie równanie utworzymy podstawiając $n = 5$ do wzoru na n-ty wyraz ciągu arytmetycznego?"
            choices={[
              { label: "a_1 + 4r = 9", value: "a" },
              { label: "a_1 + 5r = 9", value: "b" },
              { label: "a_1 + 4 = 9", value: "c" },
              { label: "a_1 + 9r = 5", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Dla $n = 5$: $a_5 = a_1 + 4r = 9$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Równanie na podstawie a_18 */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie równanie utworzymy podstawiając $n = 18$?"
            choices={[
              { label: "a_1 + 17r = 35", value: "a" },
              { label: "a_1 + 18r = 35", value: "b" },
              { label: "a_1 + 17 = 35", value: "c" },
              { label: "a_1 + 35r = 18", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Dla $n = 18$: $a_{18} = a_1 + 17r = 35$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Wyznacz r z układu równań */}
        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Jaką wartość przyjmuje różnica $r$?"
            choices={[
              { label: "r = 2", value: "a" },
              { label: "r = 1", value: "b" },
              { label: "r = 3", value: "c" },
              { label: "r = 4", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Odejmujemy oba równania:<br/>" +
              "$(a_1 + 17r) - (a_1 + 4r) = 35 - 9$<br/>" +
              "$13r = 26 \\implies r = 2$"
            }
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* ETAP 5: Wyznacz a_1 */}
        {completedStages.includes(4) && (
          <ChoiceQuestion
            question="Oblicz $a_1$ podstawiając $r$ do jednego z równań."
            choices={[
              { label: "a_1 = 1", value: "a" },
              { label: "a_1 = 3", value: "b" },
              { label: "a_1 = 5", value: "c" },
              { label: "a_1 = 9", value: "d" },
            ]}
            correctAnswer="c"
            explanation="Podstawiamy $r = 2$ do $a_1 + 4r = 9$: $a_1 + 8 = 9 \\implies a_1 = 1$."
            onComplete={() => handleStageComplete(5)}
          />
        )}

        {/* ETAP 6: Ostateczny wzór na a_n */}
        {completedStages.includes(5) && (
          <ChoiceQuestion
            question="Podaj wzór na $n$-ty wyraz tego ciągu."
            choices={[
              { label: "a_n = 1 + (n-1) \cdot 2", value: "a" },
              { label: "a_n = 9 + 2n", value: "b" },
              { label: "a_n = 2 + (n-1)", value: "c" },
              { label: "a_n = 2n + 1", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Wzór: $a_n = a_1 + (n-1)r = 1 + (n-1) \cdot 2$."
            onComplete={() => handleStageComplete(6)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(6) && (
          <StudentNotes
            equation="a_n = a_1 + (n-1) r"
            steps={[
              { step: "a_5 = a_1 + 4r = 9" },
              { step: "a_{18} = a_1 + 17r = 35" },
              { step: "13r = 26 \\implies r = 2" },
              { step: "a_1 + 4 \\cdot 2 = 9 \\implies a_1 = 1" },
              { step: "a_n = 1 + (n-1) \\cdot 2" }
            ]}
            solutions={[
              "a_n = 1 + (n-1) \cdot 2"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
