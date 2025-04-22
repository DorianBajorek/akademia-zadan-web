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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie logarytmiczne</h2>
        <p className="text-lg text-gray-800">Oblicz wartość logarytmu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_{\frac{1}{\sqrt{3}}} 1" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "x^{\\frac{1}{\\sqrt{3}}} = 1", value: "a" },
                { label: "\\left(\\frac{1}{\\sqrt{3}}\\right)^x = 1", value: "b" },
                { label: "\\frac{1}{\\sqrt{3}} \\cdot x = 1", value: "c" },
                { label: "\\frac{1}{\\sqrt{3}} = 1^x", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Z definicji logarytmu wiemy, że $$\log_{\frac{1}{\sqrt{3}}} 1 = x$$ oznacza $$\left(\frac{1}{\sqrt{3}}\right)^x = 1$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/definicjaLogarytmu.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie wykładnicze:
            </p>
            <ChoiceQuestion
              question="Dla jakiego x równanie jest spełnione?"
              choices={[
                { label: "x = 0", value: "a" },
                { label: "x = 1", value: "b" },
                { label: "x = \\frac{1}{2}", value: "c" },
                { label: "x = -\\frac{1}{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = 0$$. <br>
              Dlaczego? <br>
              Każda liczba różna od zera podniesiona do potęgi 0 daje 1: <br>
              $$\left(\frac{1}{\sqrt{3}}\right)^0 = 1$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="\log_{\frac{1}{\sqrt{3}}} 1"
            steps={[
              {
                step: "\\log_{\\frac{1}{\\sqrt{3}}} 1 = x \\Rightarrow \\left(\\frac{1}{\\sqrt{3}}\\right)^x = 1",
              },
              {
                step: "a^0 = 1 \\text{ dla każdego } a \\neq 0",
              },
              {
                step: "x = 0",
              }
            ]}
            solutions={["x = 0"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;