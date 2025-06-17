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
          title="Trzywyrazowy ciąg arytmetyczny"
          description="Trzywyrazowy ciąg $$(-4 + x, x^2 - 4, 11)$$ jest arytmetyczny. Wyznacz wartość $$x$$."
          equation="(-4 + x, x^2 - 4, 11)"
        />
        
        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Warunek na ciąg arytmetyczny
              </StepDescription>
              <ChoiceQuestion
                question="Jeśli trzywyrazowy ciąg $$(a,b,c)$$ jest arytmetyczny, to które równanie jest spełnione?"
                choices={[
                  { label: "a+b+c=0", value: "a" },
                  { label: "b-c=2a", value: "b" },
                  { label: "b = \\frac{a+c}{2}", value: "c" },
                  { label: "2c=a+b", value: "d" },
                ]}
                correctAnswer="c"
                explanation="Z definicji ciągu arytmetycznego wiemy, że $$a_n=\frac{a_{n-1} +a_{n+1}}{2}$$ czyli $$b = \frac{a+c}{2}$$"
                onComplete={() => handleStageComplete(1)}
                img={"/steps-images/warunek_ciag_arytmetyczny.png"}
              />
            </div>
          )}
          
          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zastosowanie warunku do naszego ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne?"
                choices={[
                  { label: `x^2 - 4 = \\frac{-4 + x + 11}{2}`, value: "a" },
                  { label: `x^2 + 4 = \\frac{-4 + x + 11}{2}`, value: "b" },
                  { label: `x^2 - 4 = \\frac{4 - x - 11}{2}`, value: "c" },
                  { label: `x^2 - 4 = \\frac{-4 + x + 11}{2}`, value: "d" }
                ]}
                correctAnswer="d"
                explanation={`Poprawne równanie to: $$x^2 - 4 = \\frac{-4 + x + 11}{2}$$ <br>
                Z własności ciągu: $$b = \\frac{a + c}{2}$$
                Gdzie: <br>
                $$a = -4 + x$$, $$b = x^{2} - 4$$, $$c = 11$$ <br>
                `}
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}
          
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przekształcenie równania
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "2x^{2}-x-15=0", value: "a" },
                  { label: "x^{2}-x-9=0", value: "b" },
                  { label: "x^{2}-x-15=0", value: "c" },
                  { label: "x^{2}=x+7", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Kolejne kroki rozwiązania: <br>
                1. $$x^2 - 4 = \frac{-4 + x + 11}{2}$$ <br>
                2. $$x^2 - 4 = \frac{ x + 7}{2}$$ <br>
                3. $$2x^2 - 8 = x+7$$ <br>
                4. $$ 2x^2-x-15=0$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Rozwiązanie równania kwadratowego
              </StepDescription>
              <ChoiceQuestion
                question="Które rozwiązania są poprawne?"
                choices={[
                  { label: "x_{1}=-3, x_{2}=\\frac{5}{2}", value: "a" },
                  { label: "x_{1}=3, x_{2}=\\frac{5}{2}", value: "b" },
                  { label: "x_{1}=3, x_{2}=-\\frac{5}{2}", value: "c" },
                  { label: "x_{1}=3, x_{2}=\\frac{2}{5}", value: "d" }
                ]}
                correctAnswer="c"
                explanation="Rozwiązujemy równanie $$2x^2-x-15=0$$  <br>
                $$\Delta = b^{2}-4ac=(-1)^2-4\cdot 2\cdot (-15)=121$$ <br>
                $$\sqrt{\Delta}=11$$ <br>
                $$x_{1}=3, x_{2}=-\frac{5}{2}$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="(-4 + x, x^2 - 4, 11) \rightarrow \text{ciąg arytmetyczny}"
                steps={[
                  {
                    step: "b = \\frac{a+c}{2} \\Rightarrow x^2 - 4 = \\frac{-4 + x + 11}{2}",
                  },
                  {
                    step: "2x^2 - 8 = x + 7",
                  },
                  {
                    step: "2x^2 - x - 15 = 0 \\Rightarrow x = 3 \\text{ lub } x = -2.5",
                  },
                ]}
                solutions={["x = 3", "x = -2.5"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;