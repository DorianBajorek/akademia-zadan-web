"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";
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
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_{\sqrt{3}} 9"
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
                  { label: "x^{(\\sqrt{3})} = 9", value: "a" },
                  { label: "\\sqrt{3} \\cdot x = 9", value: "b" },
                  { label: "\\sqrt{3} = 9^x", value: "c" },
                  { label: "(\\sqrt{3})^x = 9", value: "d" },
                ]}
                correctAnswer="d"
                explanation="Z definicji logarytmu wiemy, że $$\log_{\sqrt{3}} 9 = x$$ oznacza $$(\sqrt{3})^x = 9$$."
                onComplete={() => handleStageComplete(1)}
                img={"/steps-images/definicjaLogarytmu.png"}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz obie strony równania jako potęgi liczby 3
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "3^{\\frac{x}{2}} = 3^2", value: "a" },
                  { label: "3^{\\frac{1}{2}} = 3^x", value: "b" },
                  { label: "3^{2x} = 3^1", value: "c" },
                  { label: "3^{\\frac{1}{x}} = 3^{\\frac{1}{2}}", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenie to $$3^{\frac{x}{2}} = 3^2$$. <br>
                Dlaczego? <br>
                $$\sqrt{3} = 3^{\frac{1}{2}}$$, więc lewa strona to $$(3^{\frac{1}{2}})^x = 3^{\frac{x}{2}}$$ <br>
                Prawa strona to $$9 = 3^2$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Porównaj wykładniki po obu stronach równania
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie wynika z porównania wykładników?"
                choices={[
                  { label: "x = \\frac{1}{2}", value: "a" },
                  { label: "\\frac{1}{2} = x", value: "b" },
                  { label: "x = 4", value: "c" },
                  { label: "\\frac{x}{2} = 2", value: "d" },
                ]}
                correctAnswer="d"
                explanation="Poprawne równanie to $$\frac{x}{2} = 2$$. <br>
                Dlaczego? Jeśli $$3^{\frac{x}{2}} = 3^2$$, to wykładniki muszą być równe, więc $$\frac{x}{2} = 2$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Rozwiąż równanie liniowe
              </StepDescription>
              <NumericQuestion
                question="Jaka jest wartość x?"
                correctAnswer="4"
                explanation="Poprawne rozwiązanie to $$x = 4$$. <br>
                Dlaczego? Rozwiązujemy równanie $$\frac{x}{2} = 2$$: <br>
                Mnożymy obie strony przez $$2$$ <br>
                $$x = 4$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_{\sqrt{3}} 9"
                steps={[
                  {
                    step: "\\log_{\\sqrt{3}} 9 = x \\Rightarrow (\\sqrt{3})^x = 9",
                  },
                  {
                    step: "\\sqrt{3} = 3^{\\frac{1}{2}} \\Rightarrow (3^{\\frac{1}{2}})^x = 3^2",
                  },
                  {
                    step: "3^{\\frac{x}{2}} = 3^2",
                  },
                  {
                    step: "\\frac{x}{2} = 2",
                  },
                  {
                    step: "x = 4",
                  }
                ]}
                solutions={["x = 4"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
