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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wartość bezwzględna</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|3 - \sqrt{5}|" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oszacuj wartość pierwiastka:
            </p>
            <ChoiceQuestion
              question="Ile wynosi w przybliżeniu $$\sqrt{5}$$?"
              choices={[
                { label: "\\text{około 2,24}", value: "a" },
                { label: "\\text{około 2,00}", value: "b" },
                { label: "\\text{około 2,50}", value: "c" },
                { label: "\\text{około 1,73}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{5} ≈ 2.23606798$$, więc najbardziej precyzyjne przybliżenie to około $$2,24$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/wartosc_pierwiastka5.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź znak wyrażenia pod wartością bezwzględną:
            </p>
            <ChoiceQuestion
              question="Czy wyrażenie $$3 - \sqrt{5}$$ jest dodatnie czy ujemne?"
              choices={[
                { label: "\\text{Dodatnie}", value: "a" },
                { label: "\\text{Ujemne}", value: "b" },
                { label: "\\text{Równe zero}", value: "c" },
              ]}
              correctAnswer="a"
              explanation="Ponieważ $$\sqrt{5} ≈ 2.24$$, to $$3 - \sqrt{5} ≈ 3 - 2.24 = 0.76$$, czyli wynik jest dodatni."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartość bezwzględną:
            </p>
            <ChoiceQuestion
              question="Jak obliczyć $$|3 - \sqrt{5}|$$?"
              choices={[
                { label: "3 - \\sqrt{5}", value: "a" },
                { label: "\\sqrt{5} - 3", value: "b" },
                { label: "0", value: "c" },
              ]}
              correctAnswer="a"
              explanation="Z definicji wartości bezwzględnej: jeśli wyrażenie jest dodatnie, to pozostaje bez zmian. <br>
              $$|3 - \sqrt{5}| = 3 - \sqrt{5}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="|3 - \sqrt{5}|"
            steps={[
              {
                step: "\\sqrt{5} \\approx 2.2361",
              },
              {
                step: "3 - \\sqrt{5} \\approx 3 - 2.2361 = 0.7639 > 0",
              },
              {
                step: "|3 - \\sqrt{5}| = 3 - \\sqrt{5}",
              }
            ]}
            solutions={["3 - \\sqrt{5}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;