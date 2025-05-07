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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Obniżka ceny butów
        </h2>
        <p className="text-lg text-gray-800">
          Buty, które kosztowały <InlineMath math="220" /> złotych, przeceniono i sprzedano za <InlineMath math="176" /> złotych. O ile procent obniżono cenę butów?
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak obliczyć kwotę obniżki?"
            choices={[
              { label: "220 - 176 = 44", value: "a" },
              { label: "220 + 176 = 396", value: "b" },
              { label: "176 - 220 = -44", value: "c" },
              { label: "220 / 176 ≈ 1,25", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Obniżkę obliczamy odejmując nową cenę od starej: $$220 - 176 = 44$$ zł."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak zapisać obniżkę jako procent ceny początkowej?"
            choices={[
              { label: "(44 / 176) × 100%", value: "a" },
              { label: "(220 / 44) × 100%", value: "b" },
              { label: "(176 / 220) × 100%", value: "c" },
              { label: "(44 / 220) × 100%", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Procent obniżki = (kwota obniżki / cena początkowa) × $$100\%$$ = $$(44 / 220) × 100\%$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question=" Oblicz $$\frac{44}{220} × 100\%$$?"
            choices={[
              { label: "20%", value: "a" },
              { label: "25%", value: "b" },
              { label: "44%", value: "c" },
              { label: "80%", value: "d" },
            ]}
            correctAnswer="a"
            explanation="$$\frac{44}{220} = 0,2, \text{ a } 0,2 × 100% = 20%$$. Obniżka wynosi $$20\%$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Która odpowiedź jest poprawna?"
            choices={[
              { label: "A. 80", value: "a" },
              { label: "B. 20", value: "b" },
              { label: "C. 22", value: "c" },
              { label: "D. 44", value: "d" },
            ]}
            correctAnswer="b"
            explanation="Poprawna odpowiedź to B. $$20$$, ponieważ obniżka wynosi $$20\%$$."
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Procent obniżki} = \frac{\text{Kwota obniżki}}{\text{Cena początkowa}} \times 100\%"
            steps={[
              {
                step: "\\text{Kwota obniżki} = 220 - 176 = 44 zł",
              },
              {
                step: "\\text{Procent obniżki} = (44 / 220) \\cdot 100%",
              },
              {
                step: "44 / 220 = 0,2",
              },
              {
                step: "0,2 \\cdot 100\\% = 20%",
              },
            ]}
            solutions={["20\\%"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;