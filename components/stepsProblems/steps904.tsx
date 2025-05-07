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
          Zmiana pola prostokąta
        </h2>
        <p className="text-lg text-gray-800">
          Dany jest prostokąt o wymiarach <InlineMath math="40\,\text{cm} \times 100\,\text{cm}" />. Jeżeli każdy z dłuższych boków tego prostokąta wydłużymy o <InlineMath math="20\%"/>, a każdy z krótszych boków skrócimy o <InlineMath math="20\%"/>, to w wyniku obu przekształceń pole tego prostokąta:
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak obliczyć nowe wymiary prostokąta?"
            choices={[
              { label: "100 \\cdot 1,2 \\text { i }  40 \\cdot 0,8", value: "a" },
              { label: "100 \\cdot 0,8 \\text { i } 40 \\cdot 1,2", value: "b" },
              { label: "100 + 20 \\text { i } 40 - 20", value: "c" },
              { label: "100 \\cdot 0,2 \\text { i } 40 \\cdot 0,2", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Dłuższy bok (100 cm) zwiększamy o $$20\%$$: $$100 \cdot 1,2 = 120$$ cm. Krótszy bok (40 cm) zmniejszamy o $$20\%$$: $$40 \cdot 0,8 = 32$$ cm."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jakie jest nowe pole prostokąta?"
            choices={[
              { label: "100 \\cdot 40 = 4000 cm^2", value: "a" },
              { label: "120 \\cdot 32 = 3840 cm^2", value: "b" },
              { label: "120 \\cdot 40 = 4800 cm^2", value: "c" },
              { label: "100 \\cdot 32 = 3200 cm^2", value: "d" },
            ]}
            correctAnswer="b"
            explanation="Nowe pole to iloczyn nowych wymiarów: $$120 cm \cdot 32 cm = 3840 cm^{2}$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie było oryginalne pole prostokąta?"
            choices={[
              { label: "100 × 40 = 4000 cm²", value: "a" },
              { label: "120 × 32 = 3840 cm²", value: "b" },
              { label: "80 × 120 = 9600 cm²", value: "c" },
              { label: "50 × 200 = 10000 cm²", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Oryginalne pole to $$100 cm \cdot 40 cm = 4000 cm^2$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="O ile procent zmieniło się pole?"
            choices={[
              { label: "\\frac{4000-3840}{4000} \\cdot 100\% = 4\% spadek", value: "a" },
              { label: "\\frac{3840-4000}{4000} \\cdot 100\% = 4\% wzrost", value: "b" },
              { label: "\\frac{4000-3840}{3840} \\cdot 100\% ≈ 4,17\% spadek", value: "c" },
              { label: "\\frac{3840-4000}{3840} \\cdot 100\% ≈ -4,17\% wzrost", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Różnica: $$4000 - 3840 = 160 cm^2$$. Procentowa zmiana: $$\frac{4000-3840}{4000} \cdot 100\% = 4\%$$ spadek."
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {completedStages.includes(4) && (
          <ChoiceQuestion
            question="Która odpowiedź jest poprawna?"
            choices={[
              { label: "A. \\text{ zwiększy się o } 8\%", value: "a" },
              { label: "B. \\text{ zwiększy się o } 4\%", value: "b" },
              { label: "C. \\text{ zmniejszy się o } 8\%", value: "c" },
              { label: "D. \\text{ zmniejszy się o } 4\%", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Poprawna odpowiedź to D, ponieważ pole zmniejszyło się o 4%."
            onComplete={() => handleStageComplete(5)}
          />
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\text{Zmiana pola} = \frac{\text{P}_\text{oryg} - \text{P}_\text{nowe}}{\text{P}_\text{oryg}} \times 100\%"
            steps={[
              {
                step: "\\text{ Nowe wymiary}: 100 \\cdot 1,2 = 120 cm; 40 \\cdot 0,8 = 32 cm",
              },
              {
                step: "\\text{Nowe pole}: 120 \\cdot 32 = 3840 cm^2",
              },
              {
                step: "\\text{Oryginalne pole}: 100 \\cdot 40 = 4000 cm^2",
              },
              {
                step: "\\text{Różnica pól}: 4000 - 3840 = 160 cm^2",
              },
              {
                step: "\\text{Procentowa zmiana}: (160/4000) \\cdot 100\% = 4\% spadek",
              },
            ]}
            solutions={["Pole zmniejszyło się o 4% (Odpowiedź D)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;