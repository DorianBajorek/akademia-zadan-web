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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie logarytmiczne</h2>
        <p className="text-lg text-gray-800">Oblicz wartość logarytmu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_{10} \sqrt[4]{10}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "x^{10} = \\sqrt[4]{10}", value: "a" },
                { label: "10 \\cdot x = \\sqrt[4]{10}", value: "b" },
                { label: "10 = (\\sqrt[4]{10})^x", value: "c" },
                { label: "10^x = \\sqrt[4]{10}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Z definicji logarytmu wiemy, że $$\log_{10} \sqrt[4]{10} = x$$ oznacza $$10^x = \sqrt[4]{10}$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/definicjaLogarytmu.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć pierwiastek do postaci potęgowej:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "10^x = 10^{\\frac{1}{4}}", value: "a" },
                { label: "10^x = 10^{4}", value: "b" },
                { label: "10^x = 10^{-\\frac{1}{4}}", value: "c" },
                { label: "10^x = \\frac{1}{10^{4}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$10^x = 10^{\frac{1}{4}}$$. <br>
              Dlaczego? <br>
              $$\sqrt[4]{10} = 10^{\frac{1}{4}}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Porównaj wykładniki:
            </p>
            <ChoiceQuestion
              question="Które równanie wynika z porównania wykładników?"
              choices={[
                { label: "x = 4", value: "a" },
                { label: "x = \\frac{1}{4}", value: "b" },
                { label: "x = -\\frac{1}{4}", value: "c" },
                { label: "x = \\frac{1}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne równanie to $$x = \frac{1}{4}$$. <br>
              Dlaczego? Jeśli $$10^x = 10^{\frac{1}{4}}$$, to wykładniki muszą być równe."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\log_{10} \sqrt[4]{10}"
            steps={[
              {
                step: "\\log_{10} \\sqrt[4]{10} = x \\Rightarrow 10^x = \\sqrt[4]{10}",
              },
              {
                step: "\\sqrt[4]{10} = 10^{\\frac{1}{4}}",
              },
              {
                step: "10^x = 10^{\\frac{1}{4}}",
              },
              {
                step: "x = \\frac{1}{4}",
              }
            ]}
            solutions={["x = \\frac{1}{4}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;