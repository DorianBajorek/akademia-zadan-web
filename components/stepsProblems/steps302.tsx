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
          <InlineMath math="\log_5 \sqrt{125}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "x^5 = \\sqrt{125}", value: "a" },
                { label: "5 \\cdot x = \\sqrt{125}", value: "b" },
                { label: "5^x = \\sqrt{125}", value: "c" },
                { label: "5 = (\\sqrt{125})^x", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Z definicji logarytmu wiemy, że $$\log_5 \sqrt{125} = x$$ oznacza $$5^x = \sqrt{125}$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/definicjaLogarytmu.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz obie strony równania jako potęgi liczby 5:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "5^x = 5^{\\frac{3}{2}}", value: "a" },
                { label: "5^x = 5^3", value: "b" },
                { label: "5^x = 125^{\\frac{1}{2}}", value: "c" },
                { label: "5^x = 5^{\\frac{2}{3}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$5^x = 5^{\frac{3}{2}}$$. <br>
              Dlaczego? <br>
              $$\sqrt{125} = 125^{\frac{1}{2}} = (5^3)^{\frac{1}{2}} = 5^{\frac{3}{2}}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Porównaj wykładniki po obu stronach równania:
            </p>
            <ChoiceQuestion
              question="Które równanie wynika z porównania wykładników?"
              choices={[
                { label: "x = 3", value: "a" },
                { label: "x = \\frac{2}{3}", value: "b" },
                { label: "x = \\frac{3}{2}", value: "c" },
                { label: "x = \\frac{1}{2}", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawne równanie to $$x = \frac{3}{2}$$. <br>
              Dlaczego? Jeśli $$5^x = 5^{\frac{3}{2}}$$, to wykładniki muszą być równe."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\log_5 \sqrt{125}"
            steps={[
              {
                step: "\\log_5 \\sqrt{125} = x \\Rightarrow 5^x = \\sqrt{125}",
              },
              {
                step: "\\sqrt{125} = 125^{\\frac{1}{2}} = (5^3)^{\\frac{1}{2}} = 5^{\\frac{3}{2}}",
              },
              {
                step: "5^x = 5^{\\frac{3}{2}}",
              },
              {
                step: "x = \\frac{3}{2}",
              }
            ]}
            solutions={["x = \\frac{3}{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;