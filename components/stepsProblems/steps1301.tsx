"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";
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
          title="Równanie z wartością bezwzględną"
          description="Rozwiąż równanie:"
          equation="|2x + 1| = 9"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Rozbij równanie z wartością bezwzględną na dwa przypadki.
            </StepDescription>
            <ChoiceQuestion
              question="Które rozbicie równania jest poprawne?"
              choices={[
                { label: "2x + 1 = 9", value: "a" },
                { label: "2x + 1 = -9", value: "b" },
                { label: "2x + 1 = 9 \\ , \\ 2x + 1 = -9", value: "c" },
                { label: "2x - 1 = 9 \\ , \\ 2x + 1 = -9", value: "d" }
              ]}
              correctAnswer="c"
              explanation={`Równanie z wartością bezwzględną $$|2x+1|=9$$ rozbijamy na dwa przypadki: 
              $$2x+1=9$$ lub $$2x+1=-9$$.`}
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicja-wartosci-bezwzglednej.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozwiąż pierwsze równanie.
            </StepDescription>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$2x+1=9$$?"
              correctAnswer="4"
              explanation={`Rozwiązujemy równanie:  
              $$2x+1=9$$  
              Odejmujemy 1 od obu stron:  
              $$2x=8$$  
              Dzielimy przez 2:  
              $$x=4$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż drugie równanie.
            </StepDescription>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$2x+1=-9$$?"
              correctAnswer="-5"
              explanation={`Rozwiązujemy równanie:  
              $$2x+1=-9$$  
              Odejmujemy 1 od obu stron:  
              $$2x=-10$$  
              Dzielimy przez 2:  
              $$x=-5$$.`}
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Wybierz poprawny zbiór rozwiązań dla równania.
            </StepDescription>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem równania $$|2x+1|=9$$?"
              choices={[
                { label: "x = -5, x = 4", value: "a" },
                { label: "x ∈ ⟨-5, 4⟩", value: "b" },
                { label: "x ∈ ℝ", value: "c" },
                { label: "x ∈ ∅", value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Rozwiązaniem równania $$|2x+1|=9$$ są dwie liczby:  
              $$x=-5$$ oraz $$x=4$$.  
              Wynika to z poprzednich kroków, gdzie otrzymaliśmy oba rozwiązania.`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="|2x+1| = 9"
            steps={[
              { step: "2x+1 = 9 \\ \\ lub \\ \\ 2x+1 = -9" },
              { step: "x = 4 \\ \\ lub \\ \\ x = -5" }
            ]}
            solutions={["x \\in \\{-5, 4\\}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
