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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie logarytmiczne</h2>
        <p className="text-lg text-gray-800">Oblicz wartość logarytmu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\log_{\sqrt{2}} (2\sqrt{2})" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "(\\sqrt{2})^x = 2\\sqrt{2}", value: "a" },
                { label: "x^{(\\sqrt{2})} = 2\\sqrt{2}", value: "b" },
                { label: "\\sqrt{2} \\cdot x = 2\\sqrt{2}", value: "c" },
                { label: "\\sqrt{2} = (2\\sqrt{2})^x", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z definicji logarytmu wiemy, że $$\log_{\sqrt{2}} (2\sqrt{2}) = x$$ oznacza $$(\sqrt{2})^x = 2\sqrt{2}$$."
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
                { label: "2^{\\frac{x}{2}} = 2^{\\frac{3}{2}}", value: "a" },
                { label: "2^{\\frac{x}{2}} = 2^1", value: "b" },
                { label: "2^{x} = 2^{3}", value: "c" },
                { label: "2^{\\frac{1}{2}} = 2^{\\frac{x}{2}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$2^{\frac{x}{2}} = 2^{\frac{3}{2}}$$. <br>
              Dlaczego? <br>
              $$\sqrt{2} = 2^{\frac{1}{2}}$$, więc lewa strona to $$(2^{\frac{1}{2}})^x = 2^{\frac{x}{2}}$$ <br>
              $$2\sqrt{2} = 2^1 \cdot 2^{\frac{1}{2}} = 2^{\frac{3}{2}}$$"
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
                { label: "\\frac{x}{2} = \\frac{3}{2}", value: "a" },
                { label: "x = 3", value: "b" },
                { label: "\\frac{x}{2} = 1", value: "c" },
                { label: "x = \\frac{1}{2}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne równanie to $$\frac{x}{2} = \frac{3}{2}$$. <br>
              Dlaczego? Jeśli $$2^{\frac{x}{2}} = 2^{\frac{3}{2}}$$, to wykładniki muszą być równe."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie liniowe:
            </p>
            <ChoiceQuestion
              question="Jaka jest wartość x?"
              choices={[
                { label: "x = 3", value: "a" },
                { label: "x = \\frac{3}{2}", value: "b" },
                { label: "x = 2", value: "c" },
                { label: "x = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = 3$$. <br>
              Rozwiązujemy równanie $$\frac{x}{2} = \frac{3}{2}$$: <br>
              Mnożymy obie strony przez 2: $$x = 3$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\log_{\sqrt{2}} (2\sqrt{2})"
            steps={[
              {
                step: "\\log_{\\sqrt{2}} (2\\sqrt{2}) = x \\Rightarrow (\\sqrt{2})^x = 2\\sqrt{2}",
              },
              {
                step: "\\sqrt{2} = 2^{\\frac{1}{2}} \\text{ i } 2\\sqrt{2} = 2^{\\frac{3}{2}}",
              },
              {
                step: "(2^{\\frac{1}{2}})^x = 2^{\\frac{3}{2}} \\Rightarrow 2^{\\frac{x}{2}} = 2^{\\frac{3}{2}}",
              },
              {
                step: "\\frac{x}{2} = \\frac{3}{2}",
              },
              {
                step: "x = 3",
              }
            ]}
            solutions={["x = 3"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;