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
          <InlineMath math="\log_{\sqrt{3}} 9" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz równanie korzystając z definicji logarytmu:
            </p>
            <ChoiceQuestion
              question="Które równanie odpowiada definicji logarytmu?"
              choices={[
                { label: "(\\sqrt{3})^x = 9", value: "a" },
                { label: "x^{(\\sqrt{3})} = 9", value: "b" },
                { label: "\\sqrt{3} \\cdot x = 9", value: "c" },
                { label: "\\sqrt{3} = 9^x", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z definicji logarytmu wiemy, że $$\log_{\sqrt{3}} 9 = x$$ oznacza $$(\sqrt{3})^x = 9$$."
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
                { label: "3^{\\frac{x}{2}} = 3^2", value: "a" },
                { label: "3^{\\frac{1}{2}} = 3^x", value: "b" },
                { label: "3^{2x} = 3^1", value: "c" },
                { label: "3^{\\frac{1}{x}} = 3^{\\frac{1}{2}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$3^{\frac{x}{2}} = 3^2$$. <br>
              Dlaczego? <br>
              $$\sqrt{3} = 3^{\frac{1}{2}}$$, więc lewa strona to $$(3^{\frac{1}{2}})^x = 3^{\frac{x}{2}}$$ <br>
              Prawa strona to $$9 = 3^2$$"
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
                { label: "\\frac{x}{2} = 2", value: "a" },
                { label: "x = \\frac{1}{2}", value: "b" },
                { label: "\\frac{1}{2} = x", value: "c" },
                { label: "x = 4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne równanie to $$\frac{x}{2} = 2$$. <br>
              Dlaczego? Jeśli $$3^{\frac{x}{2}} = 3^2$$, to wykładniki muszą być równe, więc $$\frac{x}{2} = 2$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie liniowe:
            </p>
            <NumericQuestion
              question="Jaka jest wartość x?"
              correctAnswer="4"
              explanation="Poprawne rozwiązanie to $$x = 4$$. <br>
              Dlaczego? Rozwiązujemy równanie $$\frac{x}{2} = 2$$: <br>
              Mnożymy obie strony przez $$2$$ <br>
              $$x = 4$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\\log_{\sqrt{3}} 9"
            steps={[
              {
                step: "\\log_{\\sqrt{3}} 9 = x \\Rightarrow (\\sqrt{3})^x = 9",
              },
              {
                step: "\\sqrt{3} = 3^{\\frac{1}{2}} \\Rightarrow (3^{\\frac{1}{2}})^x = 3^2",
              },
              {
                step: "3^{\\frac{x}{2}} = 3^2",
              },
              {
                step: "\\frac{x}{2} = 2",
              },
              {
                step: "x = 4",
              }
            ]}
            solutions={["x = 4"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;