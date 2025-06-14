"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
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
          equation="\log_{\sqrt{2}} 2"
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
                  { label: "x^{(\\sqrt{2})} = 2", value: "a" },
                  { label: "\\sqrt{2} \\cdot x = 2", value: "b" },
                  { label: "(\\sqrt{2})^x = 2", value: "c" },
                  { label: "\\sqrt{2} = 2^x", value: "d" },
                ]}
                correctAnswer="c"
                explanation="Z definicji logarytmu wiemy, że $$\log_{\sqrt{2}} 2 = x$$ oznacza $$(\sqrt{2})^x = 2$$."
                onComplete={() => handleStageComplete(1)}
                img={"/steps-images/definicjaLogarytmu.png"}
              />
            </div>
          )}
          
          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz obie strony równania jako potęgi liczby 2
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "2^{\\frac{x}{2}} = 2^1", value: "a" },
                  { label: "2^{\\frac{1}{2}} = 2^x", value: "b" },
                  { label: "2^{2x} = 2^1", value: "c" },
                  { label: "2^{\\frac{1}{x}} = 2^{\\frac{1}{2}}", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenie to $$2^{\frac{x}{2}} = 2^1$$. <br>
                Dlaczego? <br>
                $$\sqrt{2} = 2^{\frac{1}{2}}$$, więc lewa strona to $$(2^{\frac{1}{2}})^x = 2^{\frac{x}{2}}$$ <br>
                Prawa strona to po prostu $$2 = 2^1$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Rozwiąż równanie liniowe
              </StepDescription>
              <NumericQuestion
                question="Jaka jest wartość x?"
                correctAnswer="2"
                explanation="Poprawne rozwiązanie to $$x = 2$$. <br>
                Dlaczego? Rozwiązujemy równanie $$\frac{x}{2} = 1$$: <br>
                Mnożymy obie strony przez $$2$$ <br>
                $$x = 2$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_{\sqrt{2}} 2"
                steps={[
                  {
                    step: "\\log_{\\sqrt{2}} 2 = x \\Rightarrow (\\sqrt{2})^x = 2",
                  },
                  {
                    step: "\\sqrt{2} = 2^{\\frac{1}{2}} \\Rightarrow (2^{\\frac{1}{2}})^x = 2^1",
                  },
                  {
                    step: "2^{\\frac{x}{2}} = 2^1",
                  },
                  {
                    step: "\\frac{x}{2} = 1",
                  },
                  {
                    step: "x = 2",
                  }
                ]}
                solutions={["x = 2"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;