"use client";

import { useState } from "react";
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
          title="Dodawanie logarytmów"
          description="Oblicz wartość wyrażenia:"
          equation="\log_3{\left(\frac{3}{2}\right)} + \log_3{\left(\frac{2}{9}\right)}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Skorzystaj z własności logarytmów i zapisz sumę jako jeden logarytm.
              </StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać sumę logarytmów o tej samej podstawie?"
                choices={[
                  {
                    label: "\\log_3{\\left(\\frac{3}{2} + \\frac{2}{9}\\right)}",
                    value: "a",
                  },
                  {
                    label: "\\log_3{\\left(\\frac{3}{2} - \\frac{2}{9}\\right)}",
                    value: "b",
                  },
                  {
                    label: "\\log_3{\\left(\\frac{3}{2} \\div \\frac{2}{9}\\right)}",
                    value: "c",
                  },
                  {
                    label: "\\log_3{\\left(\\frac{3}{2} \\cdot \\frac{2}{9}\\right)}",
                    value: "d",
                  },
                ]}
                correctAnswer="d"
                explanation="Z własności logarytmów: $$\log_a{b} + \log_a{c} = \log_a{(b \cdot c)}$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/dzialania-na-logarytmach.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz iloczyn argumentów logarytmów.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\frac{3}{2} \cdot \frac{2}{9}$$, w najprostrzej postaci?"
                choices={[
                  { label: "\\frac{1}{3}", value: "a" },
                  { label: "\\frac{3}{9}", value: "b" },
                  { label: "\\frac{2}{3}", value: "c" },
                  { label: "\\frac{1}{2}", value: "d" },
                ]}
                correctAnswer="a"
                explanation="$$\frac{3}{2} \cdot \frac{2}{9} = \frac{6}{18} = \frac{1}{3}$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz wartość logarytmu z otrzymanej liczby.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\log_3{\left(\frac{1}{3}\right)}$$?"
                choices={[
                  { label: "-1", value: "a" },
                  { label: "1", value: "b" },
                  { label: "0", value: "c" },
                  { label: "3", value: "d" },
                ]}
                correctAnswer="a"
                explanation="Ponieważ $$3^{-1} = \frac{1}{3}$$, to $$\log_3{\left(\frac{1}{3}\right)} = -1$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_3{\left(\frac{3}{2}\right)} + \log_3{\left(\frac{2}{9}\right)}"
                steps={[
                  {
                    step: "\\log_3{\\left(\\frac{3}{2}\\right)} + \\log_3{\\left(\\frac{2}{9}\\right)} = \\log_3{\\left(\\frac{3}{2} \\cdot \\frac{2}{9}\\right)}",
                  },
                  {
                    step: "\\log_3{\\left(\\frac{6}{18}\\right)} = \\log_3{\\left(\\frac{1}{3}\\right)}",
                  },
                  {
                    step: "\\log_3{\\left(\\frac{1}{3}\\right)} = -1",
                  },
                ]}
                solutions={["-1"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
