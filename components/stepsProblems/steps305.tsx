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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie logarytmiczne</h2>
        <p className="text-lg text-gray-800">Oblicz wartość logarytmu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_3 \frac{1}{27}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
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
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz prawą stronę równania jako potęgę liczby 3:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "3^x = 3^3", value: "a" },
                { label: "3^x = -3^3", value: "b" },
                { label: "3^x = 3^{-3}", value: "c" },
                { label: "3^x = \\frac{1}{3^3}", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$3^x = 3^{-3}$$. <br>
              Dlaczego? <br>
              $$\frac{1}{27} = \frac{1}{3^3} = 3^{-3}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie:
            </p>
            <NumericQuestion
              question="Jaka jest wartość x?"
              correctAnswer="-3"
              explanation="Poprawne rozwiązanie to $$x = -3$$. <br>
              Wynika to bezpośrednio z porównania wykładników."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
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
              }
            ]}
            solutions={["x = -3"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;