"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Trzywyrazowy ciąg arytmetyczny</h2>
        <p className="text-lg text-gray-800">Trzywyrazowy ciąg </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(-4 + x, x^2 - 4, 11)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="x"/>. </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              
            </p>
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
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zastosuj własność ciągu arytmetycznego do podanego ciągu
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `2(-4 + x) = (x^2 - 4) + 11`, value: "a" },
                { label: `2(x^2 - 4) = (-4 + x) - 11`, value: "b" },
                { label: `2 \\cdot 11 = (-4 + x) + (x^2 - 4)`, value: "c" },
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
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie  <InlineMath math="x^2 - 4 = \frac{-4 + x + 11}{2}"/> do klasycznego równania kwadratowego
            </p>
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
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2x^2-x-15=0"/>
            </p>
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
          </>
        )}

        
        {completedStages.length === 4 && (
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
            solutions={["x = 3", "x = -2.5", ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;