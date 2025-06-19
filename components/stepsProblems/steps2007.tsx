"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
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
          title="Wyznaczanie współczynników funkcji kwadratowej"
          description="Dana jest funkcja kwadratowa w postaci kanonicznej $$f(x) = 2(x - p)² + q$$ z jednym miejscem zerowym, $$x_0 = 3$$. Wyznacz $$p$$ oraz $$q$$."
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Wykorzystanie informacji o miejscu zerowym.
              </StepDescription>
              <ChoiceQuestion
                question="Jeśli $$x = 3$$ jest miejscem zerowym, to co wiemy o wartości $$f(3)$$?"
                choices={[
                  { label: "f(3) = 0", value: "a" },
                  { label: "f(3) = 3", value: "b" },
                  { label: "f(3) = p", value: "c" },
                  { label: "f(3) = q", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Miejsce zerowe to taka wartość $$x$$, dla której $$f(x) = 0$$, więc $$f(3) = 0$$."
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Interpretacja geometryczna jednego miejsca zerowego.
              </StepDescription>
              <ChoiceQuestion
                question="Ponieważ liczba $$3$$ jest JEDYNYM miejscem zerowym, to wierzchołek $$(p, q)$$ tej funkcji to:"
                choices={[
                  { label: "(0, 3)", value: "a" },
                  { label: "(3, 0)", value: "b" },
                  { label: "(3, 3)", value: "c" },
                  { label: "(0, 0)", value: "d" }
                ]}
                correctAnswer="b"
                explanation="W postaci kanonicznej wierzchołek to punkt $$(p, q)$$. Skoro $$3$$ to jedyne miejsce zerowe, to $$p = 3$$ i $$q = 0$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = 2(x - p)^2 + q"
                steps={[
                  { step: "\\text{Wiadomo, że } f(3) = 0 \\text{ (bo 3 jest miejscem zerowym)}" },
                  { step: "\\text{Funkcja ma jedno miejsce zerowe } \\rightarrow \\text{ jej wierzchołek to } (3, 0)" },
                  { step: "\\text{Zatem: } p = 3, q = 0" }
                ]}
                solutions={["p = 3", "q = 0"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;