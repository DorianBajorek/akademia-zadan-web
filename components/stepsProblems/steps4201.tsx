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
          title="Długość boku kwadratu - układ współrzędnych"
          description="W kartezjańskim układzie współrzędnych $$(x, y)$$ punkty $$A = (-2, -1)$$ oraz $$C = (3, 4)$$ są przeciwległymi wierzchołkami kwadratu $$ABCD$$. Długość boku kwadratu $$ABCD$$ jest równa:"
          equation=""
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oblicz długość przekątnej kwadratu na podstawie współrzędnych punktów A i C.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest długość przekątnej $$AC$$?"
                choices={[
                  { label: "5", value: "a" },
                  { label: "10", value: "b" },
                  { label: "5\\sqrt{2}", value: "c" },
                  { label: "\\sqrt{10}", value: "d" },
                ]}
                correctAnswer="c"
                explanation={
                  "Obliczamy odległość:<br/>" +
                  "$$AC = \\sqrt{(3 - (-2))^2 + (4 - (-1))^2} = \\sqrt{5^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$<br/>" +
                  "To długość przekątnej kwadratu."
                }
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określ związek między przekątną a bokiem kwadratu.
              </StepDescription>
              <ChoiceQuestion
                question="Jak wyrazić długość przekątnej kwadratu o boku $$a$$?"
                choices={[
                  { label: "a", value: "a" },
                  { label: "2a", value: "b" },
                  { label: "a\\sqrt{2}", value: "c" },
                  { label: "\\frac{a}{2}", value: "d" },
                ]}
                correctAnswer="c"
                explanation={
                  "Przekątna kwadratu to $$a\\sqrt{2}$$, gdzie $$a$$ to długość boku kwadratu."
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz długość boku kwadratu na podstawie znanej przekątnej.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi długość boku tego kwadratu?"
                choices={[
                  { label: "5", value: "a" },
                  { label: "10", value: "b" },
                  { label: "5\\sqrt{2}", value: "c" },
                  { label: "6", value: "d" },
                ]}
                correctAnswer="a"
                explanation={
                  "Skoro $$a\\sqrt{2} = 5\\sqrt{2}$$, to $$a = 5$$."
                }
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="AC = a\sqrt{2} = 5\sqrt{2}"
                steps={[
                  { step: "AC = \\sqrt{(3-(-2))^2 + (4-(-1))^2} = 5\\sqrt{2}" },
                  { step: "AC = a\\sqrt{2}" },
                  { step: "a\\sqrt{2} = 5\\sqrt{2} \\implies a = 5" }
                ]}
                solutions={[
                  "\\text{Bok kwadratu: } 5"
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