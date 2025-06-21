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
          title="Odległość punktu od środka odcinka"
          description="Końcami odcinka $$PR$$ są punkty $$P = (4, 7)$$ i $$R = (-2, -3)$$. Odległość punktu $$T = (3, -1)$$ od środka odcinka $$PR$$ jest równa:"
          equation=""
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Wyznacz współrzędne środka odcinka PR
              </StepDescription>
              <ChoiceQuestion
                question="Jakie są współrzędne środka odcinka $$PR$$?"
                choices={[
                  { label: "(1, 2)", value: "a" },
                  { label: "(1, 5)", value: "b" },
                  { label: "(3, -1)", value: "c" },
                  { label: "(1, 7)", value: "d" },
                ]}
                correctAnswer="a"
                explanation={
                  "Współrzędne środka to:<br/>" +
                  "$$\\left( \\frac{4 + (-2)}{2}, \\frac{7 + (-3)}{2} \\right) = (1, 2)$$"
                }
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przypomnij wzór na odległość między punktami w układzie współrzędnych
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest wzór na odległość dwóch punktów $$(x_1, y_1)$$ i $$(x_2, y_2)$$?"
                choices={[
                  { label: "\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}", value: "a" },
                  { label: "\\sqrt{(x_2 + x_1)^2 + (y_2 + y_1)^2}", value: "b" },
                  { label: "(x_2 - x_1) + (y_2 - y_1)", value: "c" },
                  { label: "\\sqrt{|x_2 - x_1| + |y_2 - y_1|}", value: "d" },
                ]}
                correctAnswer="a"
                explanation="Odległość: $$\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz odległość punktu T od środka odcinka PR
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi odległość punktu $$T = (3, -1)$$ od środka odcinka $$PR$$?"
                choices={[
                  { label: "\\sqrt{3}", value: "a" },
                  { label: "\\sqrt{13}", value: "b" },
                  { label: "\\sqrt{17}", value: "c" },
                  { label: "6\\sqrt{2}", value: "d" },
                ]}
                correctAnswer="b"
                explanation={
                  "Podstawiamy:<br/>" +
                  "$$\\sqrt{(3-1)^2 + ((-1)-2)^2} = \\sqrt{2^2 + (-3)^2} = \\sqrt{4 + 9} = \\sqrt{13}$$"
                }
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="d = \sqrt{(3-1)^2 + ((-1)-2)^2} = \sqrt{13}"
                steps={[
                  { step: "Środek: (1, 2)" },
                  { step: "Odległość: \\sqrt{(3-1)^2 + ((-1)-2)^2} = \\sqrt{4 + 9} = \\sqrt{13}" }
                ]}
                solutions={[
                  "\\text{Odpowiedź: } \\sqrt{13}"
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