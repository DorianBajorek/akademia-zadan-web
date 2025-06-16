"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import StepDescription from "../StepDescription";
import TaskDescription from "../TaskDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Sprawdzanie rozwiązania układu równań"
          description="Sprawdź czy para liczb $$(2, -1)$$ jest rozwiązaniem układu równań:"
          equation="\begin{cases} 2x + 3y = 1 \\ x - y = 3 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Podstaw <InlineMath math="x = 2" /> i <InlineMath math="y = -1" /> do pierwszego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Czy pierwsze równanie jest spełnione?"
              choices={[
                { label: "\\text{Tak, bo } 2·2 + 3·(-1) = 4 - 3 = 1", value: "a" },
                { label: "\\text{Nie, bo } 2·2 + 3·(-1) = 4 + 3 = 7 ≠ 1", value: "b" },
                { label: "\\text{Nie, bo } 2·2 - 3·(-1) = 4 + 3 = 7 ≠ 1", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x=2$$ i $$y=-1$$ do pierwszego równania:<br>$$2·2 + 3·(-1) = 4 - 3 = 1$$<br>Równość jest prawdziwa, więc pierwsze równanie jest spełnione."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw <InlineMath math="x = 2" /> i <InlineMath math="y = -1" /> do drugiego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Czy drugie równanie jest spełnione?"
              choices={[
                { label: "\\text{Nie można tego stwierdzić}", value: "a" },
                { label: "\\text{Nie, bo } 2 - (-1) = 2 - 1 = 1 ≠ 3", value: "b" },
                { label: "\\text{Tak, bo }-2 - 1 = -3 ≠ 3", value: "c" },
                { label: "\\text{Tak, bo } 2 - (-1) = 2 + 1 = 3", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Podstawiamy $$x=2$$ i $$y=-1$$ do drugiego równania:<br>$$2 - (-1) = 2 + 1 = 3$$<br>Równość jest prawdziwa, więc drugie równanie jest spełnione."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Wyciągnij wniosek.
            </StepDescription>
            <ChoiceQuestion
              question="Czy para (2, -1) jest rozwiązaniem układu równań?"
              choices={[
                { label: "\\text{Tak, bo spełnia oba równania}", value: "a" },
                { label: "\\text{Nie, bo spełnia tylko pierwsze równanie}", value: "b" },
                { label: "\\text{Nie, bo spełnia tylko drugie równanie}", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Para liczb jest rozwiązaniem układu równań tylko wtedy, gdy spełnia <strong>oba</strong> równania jednocześnie.<br>W naszym przypadku oba równania są spełnione, więc $$(2, -1)$$ jest rozwiązaniem."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\begin{cases} 2x + 3y = 1 \\ x - y = 3 \end{cases}"
            steps={[
              {
                step: "\\text{Sprawdzenie pierwszego równania}: 2·2 + 3·(-1) = 1 \u2192 4-3=1 \u2713",
              },
              {
                step: "\\text{Sprawdzenie drugiego równania: } 2 - (-1) = 3 \u2192 2+1=3 \u2713",
              }
            ]}
            solutions={["\\text{Tak, (2, -1) jest rozwiązaniem}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
