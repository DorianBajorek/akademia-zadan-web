"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="\left(\frac{4}{25}\right)^{-0.5}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Odwrócenie liczby za pomocą ujemnego wykładnika:
              </StepDescription>
              <ChoiceQuestion
                question="Jak przekształcić wyrażenie $$\left(\frac{4}{25}\right)^{-0.5}$$ używając minusa z wykładnika?"
                choices={[
                  { label: "\\left(\\frac{4}{25}\\right)^{0.5}", value: "a" },
                  { label: "\\left(\\frac{25}{4}\\right)^{0.5}", value: "b" },
                  { label: "\\left(\\frac{4}{25}\\right)^{-2}", value: "c" },
                  { label: "\\left(\\frac{25}{4}\\right)^{-2}", value: "d" },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenie: $$\left(\frac{4}{25}\right)^{-0.5} = \left(\frac{25}{4}\right)^{0.5}$$ (ułamki zamieniają się miejscami przy ujemnym wykładniku)."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/ujemnyWykladnik.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zamiana potęgi <InlineMath math="0.5" /> na pierwiastek kwadratowy:
              </StepDescription>
              <ChoiceQuestion
                question="Jak zapisać wyrażenie $$\left(\frac{25}{4}\right)^{0.5}$$ za pomocą pierwiastka?"
                choices={[
                  { label: "\\sqrt[5]{\\frac{25}{4}}", value: "a" },
                  { label: "\\sqrt{\\frac{25}{4}}", value: "b" },
                  { label: "\\sqrt[0.5]{\\frac{25}{4}}", value: "c" },
                  { label: "\\sqrt[25]{\\frac{25}{4}}", value: "d" },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenie: $$\left(\frac{25}{4}\right)^{0.5} = \sqrt{\frac{25}{4}}$$ (potęga  $$0.5$$) odpowiada pierwiastkowi kwadratowemu)."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/pierwiastekPotega.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Obliczenie pierwiastka kwadratowego:
              </StepDescription>
              <ChoiceQuestion
                question="Jak obliczyć $$\sqrt{\frac{25}{4}}$$?"
                choices={[
                  { label: "\\frac{25}{2}", value: "a" },
                  { label: "\\frac{5}{2}", value: "b" },
                  { label: "\\frac{5}{4}", value: "c" },
                  { label: "\\frac{2}{5}", value: "d" },
                ]}
                correctAnswer="b"
                explanation="Poprawne obliczenie: $$\sqrt{\frac{25}{4}} = \frac{\sqrt{25}}{\sqrt{4}} = \frac{5}{2}$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\left(\frac{4}{25}\right)^{-0.5}"
                steps={[
                  {
                    step: "\\left(\\frac{4}{25}\\right)^{-0.5} = \\left(\\frac{25}{4}\\right)^{0.5} = \\sqrt{\\frac{25}{4}} = \\frac{5}{2}",
                  }
                ]}
                solutions={["\\frac{5}{2}"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;