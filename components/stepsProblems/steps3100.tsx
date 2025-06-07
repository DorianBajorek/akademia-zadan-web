"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
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
          Arytmetyka ciągów – znajdź wyraz ciągu
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Ciąg arytmetyczny <InlineMath math="(a_n)" /> jest określony dla każdej liczby naturalnej <InlineMath math="n \geq 1" />.
          Różnica tego ciągu jest równa <InlineMath math="2" />, a <InlineMath math="a_8 = 48" />.
          Czwarty wyraz tego ciągu jest równy:
        </p>

        {/* ETAP 1: Wzór na n-ty wyraz */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jaki jest wzór ogólny na $n$-ty wyraz ciągu arytmetycznego?"
            choices={[
              { label: "a_n = a_1 + (n-1)r", value: "a" },
              { label: "a_n = a_1 + nr", value: "b" },
              { label: "a_n = a_1 \\cdot r^n", value: "c" },
              { label: "a_n = a_1 + n", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Wzór ogólny dla ciągu arytmetycznego to $$a_n = a_1 + (n-1)r$$."
            onComplete={() => handleStageComplete(1)}
            img = "/steps-images/n-ty-ciag-arytmetyczny.png"
          />
        )}

        {/* ETAP 2: Wyznaczenie a_1 */}
        {completedStages.includes(1) && (
          <NumericQuestion
            question="Podstaw dane: $$a_8 = 48$$, $$r = 2$$. Oblicz i podaj wartość $$a_1$$."
            correctAnswer="34"
            explanation={
              "$$a_8 = a_1 + 7r$$<br/>" +
              "$$48 = a_1 + 7 \cdot 2$$<br/>" +
              "$$48 = a_1 + 14$$<br/>" +
              "$$a_1 = 34$$"
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Wyznacz a_4 */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Oblicz czwarty wyraz ciągu $$a_4$$."
            choices={[
              { label: "a_4 = 34 + 3 \\cdot 2 = 40", value: "a" },
              { label: "a_4 = 34 + 2 \\cdot 2 = 38", value: "b" },
              { label: "a_4 = 34 + 4 \\cdot 2 = 42", value: "c" },
              { label: "a_4 = 34 + 8 \\cdot 2 = 50", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "$$a_4 = a_1 + 3r = 34 + 3 \\cdot 2 = 34 + 6 = 40$$."
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="a_n = a_1 + (n-1)r"
            steps={[
              { step: "\\text{Z treści: } r = 2,\\; a_8 = 48" },
              { step: "a_8 = a_1 + 7r" },
              { step: "48 = a_1 + 14 \\implies a_1 = 34" },
              { step: "a_4 = a_1 + 3r = 34 + 6 = 40" }
            ]}
            solutions={[
              "\\text{Czwarty wyraz ciągu to } a_4 = 40"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
