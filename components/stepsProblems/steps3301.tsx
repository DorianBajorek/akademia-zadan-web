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
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rekurencyjny ciąg liczbowy - znajdź trzeci wyraz
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Ciąg <InlineMath math="(a_n)" /> jest określony następująco:
        </p>
        <div className="flex justify-center my-6">
          <InlineMath math="\begin{cases} a_1 = 2 \\ a_{n+1} = 2a_n + 1 \end{cases}" />
        </div>
        <p className="text-lg text-gray-800 mt-4">
          dla każdej liczby naturalnej <InlineMath math="n \geq 1" />. Trzeci wyraz ciągu <InlineMath math="(a_n)" /> jest równy:
        </p>

        {/* ETAP 1: Zapisanie drugiego wyrazu */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Oblicz $$a_2$$ ze wzoru rekurencyjnego."
            choices={[
              { label: "a_2 = 2 \\cdot 2 + 1 = 5", value: "a" },
              { label: "a_2 = 2 \\cdot 1 + 2 = 4", value: "b" },
              { label: "a_2 = 2 + 2 -1 = 3", value: "c" },
              { label: "a_2 = 2 \\cdot 1 + 1 = 4", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Korzystamy z wzoru: $$a_{n+1} = 2a_n + 1$$. <br/>" +
              "Dla $$n=1$$ mamy: $$a_2 = 2a_1 + 1 = 2 \\cdot 2 + 1 = 5$$."
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Zapisanie trzeciego wyrazu */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Oblicz $$a_3$$ korzystając z wyniku z poprzedniego kroku."
            choices={[
              { label: "a_3 = 2 \\cdot 5 + 1 = 11", value: "a" },
              { label: "a_3 = 2 \\cdot 2 + 5 = 9", value: "b" },
              { label: "a_3 = 2 \\cdot 3 + 1 = 7", value: "c" },
              { label: "a_3 = 2 \\cdot 5 + 2 = 12", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Ponownie korzystamy z wzoru: $$a_{n+1} = 2a_n + 1$$.<br/>" +
              "Dla $$n=2$$ mamy: $$a_3 = 2a_2 + 1 = 2 \\cdot 5 + 1 = 11$$."
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation={
              "\\begin{cases} a_1 = 2 \\\\ a_{n+1} = 2a_n + 1 \\end{cases}"
            }
            steps={[
              { step: "a_1 = 2" },
              { step: "a_2 = 2a_1 + 1 = 2 \\cdot 2 + 1 = 5" },
              { step: "a_3 = 2a_2 + 1 = 2 \\cdot 5 + 1 = 11" }
            ]}
            solutions={[
              "a_3 = 11"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
