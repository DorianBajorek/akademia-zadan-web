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
          title="Miejsce zerowe funkcji liniowej"
          description="Dla jakiej wartości $$a$$ miejsce zerowe funkcji $$f(x) = a x + 1 - a$$ jest liczbą $$-2$$?"
          equation=""
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Podstaw wartość miejsca zerowego do wzoru funkcji
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie należy rozwiązać, aby wyznaczyć $$a$$?"
                choices={[
                  { label: "a \\cdot (-2) + 1 - a = 0", value: "a" },
                  { label: "a \\cdot 2 + 1 - a = 0", value: "b" },
                  { label: "a - 2 + 1 - a = 0", value: "c" },
                  { label: "-2a + 1 + a = 0", value: "d" },
                ]}
                correctAnswer="a"
                explanation={
                  "Podstawiamy $$x = -2$$ do wzoru funkcji: <br/>" +
                  "$$f(-2) = a \\cdot (-2) + 1 - a = 0$$"
                }
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Rozwiąż równanie liniowe
              </StepDescription>
              <ChoiceQuestion
                question="Jakie jest rozwiązanie równania $$a \cdot (-2) + 1 - a = 0$$?"
                choices={[
                  { label: "a=\\frac{1}{3}", value: "a" },
                  { label: "a=3", value: "b" },
                  { label: "a=-\\frac{1}{3}", value: "c" },
                  { label: "a=-3", value: "d" },
                ]}
                correctAnswer="c"
                explanation={
                  "Rozwiązujemy równanie: <br/>" +
                  "$$-2a +1-a =0 $$<br/> "+
                  "$$-3a=-1$$<br/> "+
                  "$$a=-\\frac{1}{3}$$"
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = a x + 1 - a"
                steps={[
                  { step: "\\text{Miejsce zerowe: }f(-2) = 0" },
                  { step: "a \\cdot (-2) + 1 - a = 0" },
                  { step: "-2a + 1 - a = 0" },
                  { step: "-3a + 1 = 0" },
                  { step: "a = -\\frac{1}{3}" },
                ]}
                solutions={[
                  "a = -\\frac{1}{3}"
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