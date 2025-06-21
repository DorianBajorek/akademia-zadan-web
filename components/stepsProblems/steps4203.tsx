"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) => setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Przekątna kwadratu – sąsiednie wierzchołki"
          description="Punkty $$A = (-4, 4)$$ i $$B = (4, 0)$$ są sąsiednimi wierzchołkami kwadratu $$ABCD$$. Przekątna tego kwadratu ma długość:"
          equation=""
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oblicz długość boku kwadratu na podstawie współrzędnych punktów A i B.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest długość boku kwadratu $$AB$$?"
                choices={[
                  { label: "4", value: "a" },
                  { label: "8", value: "b" },
                  { label: "4\\sqrt{5}", value: "c" },
                  { label: "8\\sqrt{2}", value: "d" },
                ]}
                correctAnswer="c"
                explanation={
                  "Długość odcinka $$AB$$ obliczamy:<br/>" +
                  "$$AB = \\sqrt{(4 - (-4))^2 + (0 - 4)^2} = \\sqrt{8^2 + (-4)^2} = \\sqrt{64 + 16} = \\sqrt{80} = 4\\sqrt{5}$$"
                }
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przypomnij wzór na przekątną kwadratu w zależności od długości boku.
              </StepDescription>
              <ChoiceQuestion
                question="Jak wyrażamy długość przekątnej kwadratu o boku $$a$$?"
                choices={[
                  { label: "a", value: "a" },
                  { label: "a\\sqrt{2}", value: "b" },
                  { label: "2a", value: "c" },
                  { label: "a^2", value: "d" },
                ]}
                correctAnswer="b"
                explanation="Przekątna kwadratu: $$d = a\sqrt{2}$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz długość przekątnej kwadratu na podstawie znanej długości boku.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest długość przekątnej tego kwadratu?"
                choices={[
                  { label: "4\\sqrt{10}", value: "a" },
                  { label: "4\\sqrt{2}", value: "b" },
                  { label: "4\\sqrt{5}", value: "c" },
                  { label: "8\\sqrt{5}", value: "d" },
                ]}
                correctAnswer="a"
                explanation={
                  "Bok kwadratu $$a = 4\\sqrt{5}$$, więc przekątna to $$4\\sqrt{5} \\cdot \\sqrt{2} = 4\\sqrt{10}$$."
                }
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="d = a\sqrt{2}"
                steps={[
                  { step: "AB = \\sqrt{(4 + 4)^2 + (0 - 4)^2} = 4\\sqrt{5}" },
                  { step: "\\text{Przekątna: } 4\\sqrt{5} \\cdot \\sqrt{2} = 4\\sqrt{10}" },
                ]}
                solutions={[
                  "\\text{Przekątna: } 4\\sqrt{10}"
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;