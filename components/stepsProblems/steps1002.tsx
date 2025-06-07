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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wartość bezwzględna</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|\sqrt{7} - 2|" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oszacuj wartość pierwiastka:
            </p>
            <ChoiceQuestion
              question="Ile wynosi w przybliżeniu $$\sqrt{7}$$?"
              choices={[
                { label: "\\text{około 2,65}", value: "a" },
                { label: "\\text{około 2,50}", value: "b" },
                { label: "\\text{około 2,83}", value: "c" },
                { label: "\\text{około 3,00}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="$$\sqrt{7} ≈ 2.64575131$$, więc najbardziej precyzyjne przybliżenie to około $$2,65$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/wartosc_pierwiastka7.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź znak wyrażenia pod wartością bezwzględną:
            </p>
            <ChoiceQuestion
              question="Czy wyrażenie $$\sqrt{7} - 2$$ jest dodatnie czy ujemne?"
              choices={[
                { label: "\\text{Dodatnie}", value: "a" },
                { label: "\\text{Ujemne}", value: "b" },
                { label: "\\text{Równe zero}", value: "c" },
              ]}
              correctAnswer="a"
              explanation="Ponieważ $$\sqrt{7} ≈ 2.65$$, to $$\sqrt{7} - 2 ≈ 2.65 - 2 = 0.65$$, czyli wynik jest dodatni."
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
              question="Jak obliczyć $$|\sqrt{7} - 2|$$?"
              choices={[
                { label: "\\sqrt{7} - 2", value: "a" },
                { label: "2 - \\sqrt{7}", value: "b" },
                { label: "0", value: "c" },
              ]}
              correctAnswer="a"
              explanation="Z definicji wartości bezwzględnej: jeśli wyrażenie jest dodatnie, to pozostaje bez zmian. <br>
              $$|\sqrt{7} - 2| = \sqrt{7} - 2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="|\sqrt{7} - 2|"
            steps={[
              {
                step: "\\sqrt{7} \\approx 2.6458",
              },
              {
                step: "\\sqrt{7} - 2 \\approx 2.6458 - 2 = 0.6458 > 0",
              },
              {
                step: "|\\sqrt{7} - 2| = \\sqrt{7} - 2",
              }
            ]}
            solutions={["\\sqrt{7} - 2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;