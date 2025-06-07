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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Działania na logarytmach</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="4 \log_4 2 + 2 \log_4 8" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zastosuj właściwości logarytmów:
            </p>
            <ChoiceQuestion
              question="Jak można zapisać wyrażenie $$4 \log_4 2 + 2 \log_4 8$$ korzystając z właściwości logarytmów?"
              choices={[
                { label: "\\log_4{2^4} + \\log_4{8^2}", value: "a" },
                { label: "\\log_4{(4 \\cdot 2)} + \\log_4{(2 \\cdot 8)}", value: "b" },
                { label: "(4 + 2) \\cdot \\log_4{(2 + 8)}", value: "c" },
                { label: "\\log_4{(2 + 8)}", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`
                Z właściwości logarytmów: $$n \\log_a b = \\log_a b^n$$ <br>
                Czyli: <br>
                $$4 \\log_4 2 = \\log_4 2^4 = \\log_4 16$$ <br>
                $$2 \\log_4 8 = \\log_4 8^2 = \\log_4 64$$
              `}
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Dodaj logarytmy:
            </p>
            <ChoiceQuestion
              question="Jak można zapisać sumę $$\log_4{16} + \log_4{64}$$?"
              choices={[
                { label: "\\log_4{(16 \\cdot 64)}", value: "a" },
                { label: "\\log_4{(16 + 64)}", value: "b" },
                { label: "\\log_{16}{64}", value: "c" },
                { label: "\\log_4{80}", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`
                Z właściwości logarytmów: <br>
                $$\\log_a b + \\log_a c = \\log_a (b \\cdot c)$$ <br>
                Czyli: <br>
                $$\\log_4{16} + \\log_4{64} = \\log_4{(16 \\cdot 64)} = \\log_4{1024}$$
              `}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartość logarytmu:
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\log_4{1024}$$?"
              choices={[
                { label: "5", value: "a" },
                { label: "4", value: "b" },
                { label: "6", value: "c" },
                { label: "10", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`
                $$1024 = 4^5$$, ponieważ: <br>
                $$4^5 = (2^2)^5 = 2^{10} = 1024$$ <br>
                Więc: $$\log_4{1024} = 5$$
              `}
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <StudentNotes
            equation="4 \log_4 2 + 2 \log_4 8"
            steps={[
              {
                step: "4 \\log_4 2 + 2 \\log_4 8 = \\log_4{2^4} + \\log_4{8^2} = \\log_4{16} + \\log_4{64} = \\log_4{(16 \\cdot 64)} = \\log_4{1024} = 5"
              }
            ]}
            solutions={["5"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;