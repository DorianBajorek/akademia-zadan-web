"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import NumericQuestion from "./NumericQuestion";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Równanie z wartością bezwzględną
        </h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|x - 8| = 0" />
        </p>

        {/*
          Stage 1: Rozwiąż równanie wewnątrz wartości bezwzględnej.
        */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie: <InlineMath math="x - 8 = 0" />
            </p>
            <NumericQuestion
              question="Oblicz wartość x, dla której x - 8 = 0:"
              correctAnswer="8"
              explanation={`Rozwiązujemy równanie:  
x - 8 = 0  
Dodajemy 8 do obu stron:  
x = 8.`}
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rozwiazanie-pierwsze.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy zbiór rozwiązań równania <InlineMath math="|x - 8| = 0" />.
            </p>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem równania |x - 8| = 0?"
              choices={[
                { label: "x = 8", value: "a" },
                { label: "x ∈ ℝ", value: "b" },
                { label: "x ∈ ∅", value: "c" },
                { label: "x = -8", value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Wartość bezwzględna jest równa zero tylko wtedy, gdy jej argument jest równy zero.  
Z równania x - 8 = 0 otrzymujemy x = 8.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <StudentNotes
            equation="|x - 8| = 0"
            steps={[
              { step: "Ustalamy, że |x - 8| = 0 ⇔ x - 8 = 0" },
              { step: "x - 8 = 0 → x = 8" }
            ]}
            solutions={["x = 8"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;