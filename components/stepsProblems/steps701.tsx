"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";
import { InlineMath } from "react-katex";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Zliczanie liczb"
          description="Oblicz liczbę wszystkich kodów czterocyfrowych utworzonych tylko z cyfr $$1, 3, 6, 8,$$ gdy w każdym kodzie każda z tych cyfr występuje dokładnie jeden raz."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={2}>
              Wybierzmy właściwy wzór dla permutacji zbioru czteroelementowego.
            </StepDescription>
            <ChoiceQuestion
              question="Który wzór odpowiada zliczaniu permutacji zbioru czteroelementowego?"
              choices={[
                { label: "4^2", value: "a" },
                { label: "4!", value: "b" },
                { label: "\\binom{4}{2}", value: "c" }
              ]}
              correctAnswer="b"
              explanation="Liczba permutacji zbioru n-elementowego wynosi $$n!$$, a więc dla zbioru czteroelementowego: $$4!$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/kombinatoryka.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={3}>
              Oblicz wartość silni <InlineMath math="4!"/>
            </StepDescription>
            <NumericQuestion
              question="Ile wynosi wartość $$4!$$"
              correctAnswer="24"
              explanation="$$4! = 1 \cdot 2 \cdot 3 \cdot 4 = 24$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/silnia.png"
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="\text{Liczba możliwych czteroelementowych kodów utworzonych tylko z cyfr $$1, 3, 6, 8,$$} \\ \text{ gdy w każdym kodzie każda z tych cyfr występuje dokładnie jeden raz.}"
            steps={[
              { step: "4! = 4 \\cdot 3 \\cdot 2 \\cdot 1" },
              { step: "4! = 24" },
            ]}
            solutions={["\\text{Liczba szukanych kodów wynosi 24.}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
