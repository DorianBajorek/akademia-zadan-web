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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wartość bezwzględna</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|-2 + \sqrt{2}|" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oszacuj wartość pierwiastka:
            </p>
            <ChoiceQuestion
              question="Ile wynosi w przybliżeniu $$\sqrt{2}$$  ?"
              choices={[
                { label: "\\text{około 1,41}", value: "a" },
                { label: "\\text{około 1,73}", value: "b" },
                { label: "\\text{około 2,00}", value: "c" },
                { label: "\\text{około 0,87}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{2} ≈ 1,41421357$$, więc najbardziej precyzyjne przybliżenie to około $$1,41$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/wartosc_pierwiastka2.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź znak wyrażenia pod wartością bezwzględną:
            </p>
            <ChoiceQuestion
              question="Czy wyrażenie $$-2 + \sqrt{2}$$ jest dodatnie czy ujemne?"
              choices={[
                { label: "\\text{Dodatnie}", value: "a" },
                { label: "\\text{Ujemne}", value: "b" },
                { label: "\\text{Równe zero}", value: "c" },
              ]}
              correctAnswer="b"
              explanation="Ponieważ $$\sqrt{2} ≈ 1.41$$, to $$-2 + \sqrt{2} ≈ -2 + 1.41 = -0.59$$, czyli wynik jest ujemny."
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
              question="Jak obliczyć $$|-2 + \sqrt{2}|$$?"
              choices={[
                { label: "-2 + \\sqrt{2}", value: "a" },
                { label: "2 - \\sqrt{2}", value: "b" },
                { label: "0", value: "c" },
              ]}
              correctAnswer="b"
              explanation="Z definicji wartości bezwzględnej: jeśli wyrażenie jest ujemne, to zmieniamy znak na przeciwny. <br>
              $$|-2 +\sqrt{2}| = -(-2 + \sqrt{2}) = 2 - \sqrt{2}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="|-2 + \sqrt{2}|"
            steps={[
              {
                step: "\\sqrt{2} \\approx 1.4142",
              },
              {
                step: "-2 + \\sqrt{2} \\approx -2 + 1.4142 = -0.5858 < 0",
              },
              {
                step: "|-2 + \\sqrt{2}| = 2 - \\sqrt{2}",
              }
            ]}
            solutions={["2 - \\sqrt{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;