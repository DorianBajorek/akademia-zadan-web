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
          <InlineMath math="\log_{\sqrt{2}} 2" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
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
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz obie strony równania jako potęgi liczby 2:
            </p>
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
          </>
        )}

        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie liniowe:
            </p>
            <NumericQuestion
              question="Jaka jest wartość x?"
              correctAnswer="2"
              explanation="Poprawne rozwiązanie to $$x = 2$$. <br>
              Dlaczego? Rozwiązujemy równanie $$\frac{x}{2} = 1$$: <br>
              Mnożymy obie strony przez $$2$$ <br>
              $$x = 2$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\\log_{\sqrt{2}} 2"
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
        )}
      </div>
    </div>
  );
};

export default Page;