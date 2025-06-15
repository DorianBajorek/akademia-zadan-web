"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Działania na logarytmach"
          description="Oblicz wartość wyrażenia:"
          equation="4 \log_4 2 + 2 \log_4 8"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Skorzystaj z własności mnożenie logarytmu przez liczbę.
              </StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać wyrażenie $$4 \log_4 2 + 2 \log_4 8$$ korzystając z właściwości logarytmów?"
                choices={[
                  { label: "\\log_4{(4 \\cdot 2)} + \\log_4{(2 \\cdot 8)}", value: "a" },
                  { label: "\\log_4{2^4} + \\log_4{8^2}", value: "b" },
                  { label: "(4 + 2) \\cdot \\log_4{(2 + 8)}", value: "c" },
                  { label: "\\log_4{(2 + 8)}", value: "d" },
                ]}
                correctAnswer="b"
                explanation={`
                  Z właściwości logarytmów: $$n \\log_a b = \\log_a b^n$$ <br>
                  Czyli: <br>
                  $$4 \\log_4 2 = \\log_4 2^4 = \\log_4 16$$ <br>
                  $$2 \\log_4 8 = \\log_4 8^2 = \\log_4 64$$
                `}
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/dzialania-na-logarytmach.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Dodaj logarymty. Korzystając ze wzoru na sumę logarytmów o tej samej podstawie.
              </StepDescription>
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
                img="/steps-images/dzialania-na-logarytmach.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przemnóż wartości wewnątrz logarytmu i oblicz wartość logarytmu.
              </StepDescription>
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
                  Więc: $$\\log_4{1024} = 5$$
                `}
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="4 \log_4 2 + 2 \log_4 8"
                steps={[
                  { step: "4 \\log_4 2 + 2 \\log_4 8 = \\log_4 2^4 + \\log_4 8^2" },
                  { step: "= \\log_4{16} + \\log_4{64}" },
                  { step: "= \\log_4{(16 \\cdot 64)} = \\log_4{1024}" },
                  { step: "= 5" },
                ]}
                solutions={["5"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
