"use client";

import { useState } from "react";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_3 \frac{1}{27}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Zapisz równanie korzystając z definicji logarytmu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie odpowiada definicji logarytmu?"
                choices={[
                  { label: "x^3 = \\frac{1}{27}", value: "a" },
                  { label: "3 \\cdot x = \\frac{1}{27}", value: "b" },
                  { label: "3^x = \\frac{1}{27}", value: "c" },
                  { label: "3 = \\left(\\frac{1}{27}\\right)^x", value: "d" },
                ]}
                correctAnswer="c"
                explanation="Z definicji logarytmu wiemy, że $$\log_3 \frac{1}{27} = x$$ oznacza $$3^x = \frac{1}{27}$$."
                onComplete={() => handleStageComplete(1)}
                img={"/steps-images/definicjaLogarytmu.png"}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz prawą stronę równania jako potęgę liczby 3
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "3^x = 3^3", value: "a" },
                  { label: "3^x = -3^3", value: "b" },
                  { label: "3^x = 3^{-3}", value: "c" },
                  { label: "3^x = \\frac{1}{3^3}", value: "d" },
                ]}
                correctAnswer="c"
                explanation={`Poprawne przekształcenie to $$3^x = 3^{-3}$$. <br>
                Dlaczego? <br>
                $$\\frac{1}{27} = \\frac{1}{3^3} = 3^{-3}$$.`}
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Rozwiąż równanie
              </StepDescription>
              <NumericQuestion
                question="Jaka jest wartość x?"
                correctAnswer="-3"
                explanation={`Poprawne rozwiązanie to $$x = -3$$. <br>
                Jeśli $$3^x = 3^{-3}$$, to $$x = -3$$.`}
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_3 \frac{1}{27}"
                steps={[
                  {
                    step: "\\log_3 \\frac{1}{27} = x \\Rightarrow 3^x = \\frac{1}{27}",
                  },
                  {
                    step: "\\frac{1}{27} = 3^{-3}",
                  },
                  {
                    step: "3^x = 3^{-3}",
                  },
                  {
                    step: "x = -3",
                  },
                ]}
                solutions={["x = -3"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
