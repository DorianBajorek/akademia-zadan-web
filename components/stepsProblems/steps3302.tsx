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
          Suma wyrazów ciągu - znajdź <InlineMath math="a_3"/>
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Ciąg <InlineMath math="(a_n)" /> jest określony dla każdej liczby naturalnej <InlineMath math="n \geq 1" />.<br />
          Suma <InlineMath math="n" /> początkowych wyrazów tego ciągu wyraża się wzorem <InlineMath math="S_n = n^2 + 2n" />.<br />
          Trzeci wyraz ciągu <InlineMath math="(a_n)" /> jest równy:
        </p>

        {/* ETAP 1: Wzór na a3 przez różnicę sum */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak wyrazić $$a_3$$ za pomocą sum $$S_n$$?"
            choices={[
              { label: "a_3 = S_3 - S_2", value: "a" },
              { label: "a_3 = S_3 + S_2", value: "b" },
              { label: "a_3 = S_2 - S_1", value: "c" },
              { label: "a_3 = S_3", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Każdy kolejny wyraz ciągu można wyznaczyć odejmując sumy: $$a_n = S_n - S_{n-1}$$. Dla $$n=3$$ mamy $$a_3 = S_3 - S_2$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Oblicz S_3 */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Oblicz $$S_3$$ ze wzoru $$S_n = n^2 + 2n$$."
            choices={[
              { label: "S_3 = 9 + 6 = 15", value: "a" },
              { label: "S_3 = 6 + 6 = 12", value: "b" },
              { label: "S_3 = 6 + 3 = 9", value: "c" },
              { label: "S_3 = 9 + 3 = 12", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Podstawiamy $$n=3$$: $$S_3 = 3^2 + 2 \cdot 3 = 9 + 6 = 15$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Oblicz S_2 */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Oblicz $$S_2$$ ze wzoru $$S_n = n^2 + 2n$$."
            choices={[
              { label: "S_2 = 4 + 4 = 8", value: "a" },
              { label: "S_2 = 2 + 4 = 6", value: "b" },
              { label: "S_2 = 2 + 2 = 4", value: "c" },
              { label: "S_2 = 4 + 2 = 6", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Podstawiamy $$n=2$$: $$S_2 = 2^2 + 2 \cdot 2 = 4 + 4 = 8$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Oblicz a_3 */}
        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Oblicz $$a_3$$ na podstawie poprzednich kroków."
            choices={[
              { label: "a_3 = 15 - 8 = 7", value: "a" },
              { label: "a_3 = 8 - 7 = 1", value: "b" },
              { label: "a_3 = 8 + 7 = 15", value: "c" },
              { label: "a_3 = 15 - 7 = 8", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Z poprzednich etapów: $$a_3 = S_3 - S_2 = 15 - 8 = 7$$."
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="S_n = n^2 + 2n"
            steps={[
              { step: "a_3 = S_3 - S_2" },
              { step: "S_3 = 3^2 + 2 \\cdot 3 = 9 + 6 = 15" },
              { step: "S_2 = 2^2 + 2 \\cdot 2 = 4 + 4 = 8" },
              { step: "a_3 = 15 - 8 = 7" }
            ]}
            solutions={[
              "a_3 = 7"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
