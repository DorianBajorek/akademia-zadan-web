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
          <InlineMath math="\log_{3\sqrt{3}} 27 \sqrt[3]{3}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "x^{(3\\sqrt{3})} = 27\\sqrt[3]{3}", value: "a" },
                { label: "3\\sqrt{3} \\cdot x = 27\\sqrt[3]{3}", value: "b" },
                { label: "3\\sqrt{3} = (27\\sqrt[3]{3})^x", value: "c" },
                { label: "(3\\sqrt{3})^x = 27\\sqrt[3]{3}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Z definicji logarytmu wiemy, że $$\log_{3\sqrt{3}} 27\sqrt[3]{3} = x$$ oznacza $$(3\sqrt{3})^x = 27\sqrt[3]{3}$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/definicjaLogarytmu.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz obie strony równania jako potęgi liczby 3:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "3^{\\frac{x}{2}} = 3^{10}", value: "a" },
                { label: "3^{3x} = 3^{\\frac{10}{3}}", value: "b" },
                { label: "3^{\\frac{3}{2}} = 3^{\\frac{x}{3}}", value: "c" },
                { label: "3^{\\frac{3x}{2}} = 3^{\\frac{10}{3}}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$3^{\frac{3x}{2}} = 3^{\frac{10}{3}}$$. <br>
              Dlaczego? <br>
              $$3\sqrt{3} = 3^1 \cdot 3^{\frac{1}{2}} = 3^{\frac{3}{2}}$$ <br>
              $$27\sqrt[3]{3} = 3^3 \cdot 3^{\frac{1}{3}} = 3^{\frac{10}{3}}$$"
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
                { label: "\\frac{3x}{2} = \\frac{10}{3}", value: "a" },
                { label: "x = \\frac{10}{3}", value: "b" },
                { label: "\\frac{x}{2} = \\frac{10}{3}", value: "c" },
                { label: "x = \\frac{20}{9}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne równanie to $$\frac{3x}{2} = \frac{10}{3}$$. <br>
              Dlaczego? Jeśli $$3^{\frac{3x}{2}} = 3^{\frac{10}{3}}$$, to wykładniki muszą być równe."
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
              { label: "x = \\frac{20}{9}", value: "a" },
              { label: "x = \\frac{10}{3}", value: "b" },
              { label: "x = \\frac{9}{20}", value: "c" },
              { label: "x = \\frac{3}{10}", value: "d" }
            ]}
            correctAnswer="a"
            explanation="Poprawne rozwiązanie to $$x = \frac{20}{9}$$. <br>
            Rozwiązujemy równanie $$\frac{3x}{2} = \frac{10}{3}$$: <br>
            1. Mnożymy obie strony przez 2: $$3x = \frac{20}{3}$$ <br>
            2. Dzielimy obie strony przez 3: $$x = \frac{20}{9}$$"
            onComplete={() => handleStageComplete(4)}
          />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\log_{3\sqrt{3}} 27 \sqrt[3]{3}"
            steps={[
              {
                step: "\\log_{3\\sqrt{3}} 27\\sqrt[3]{3} = x \\Rightarrow (3\\sqrt{3})^x = 27\\sqrt[3]{3}",
              },
              {
                step: "3\\sqrt{3} = 3^{\\frac{3}{2}} \\text{ i } 27\\sqrt[3]{3} = 3^{\\frac{10}{3}}",
              },
              {
                step: "(3^{\\frac{3}{2}})^x = 3^{\\frac{10}{3}} \\Rightarrow 3^{\\frac{3x}{2}} = 3^{\\frac{10}{3}}",
              },
              {
                step: "\\frac{3x}{2} = \\frac{10}{3}",
              },
              {
                step: "x = \\frac{20}{9}",
              }
            ]}
            solutions={["x = \\frac{20}{9}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;