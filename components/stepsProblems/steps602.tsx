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
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Prostopadłość prostych"
          description="Proste opisane równaniami:"
          equation="y = \frac{2}{m-1}x + m - 2 \\ \ y = mx + \frac{1}{m+1}"
        />
        <p className="text-lg text-gray-800 mt-4">
          Proste <InlineMath math="k" /> oraz <InlineMath math="l" /> są prostopadłe, gdy:
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Kiedy dwie proste są prostopadłe?
            </StepDescription>
            <ChoiceQuestion
              question="Który warunek musi być spełniony, aby proste były prostopadłe?"
              choices={[
                { label: "\\text{Iloczyn ich współczynników kierunkowych wynosi -1}", value: "a" },
                { label: "\\text{Ich współczynniki kierunkowe są równe}", value: "b" },
                { label: "\\text{Suma ich współczynników kierunkowych wynosi 0}", value: "c" },
                { label: "\\text{Ich wyrazy wolne są równe}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych wynosi -1."
              img="/steps-images/proste_prostopadle.png"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zapisz warunek prostopadłości dla podanych prostych
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "\\frac{2}{m-1} \\cdot m = 1", value: "a" },
                { label: "\\frac{2}{m-1} \\cdot m = -1", value: "b" },
                { label: "\\frac{2}{m-1} + m = -1", value: "c" },
                { label: "\\frac{2}{m-1} = m", value: "d" },
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$\\frac{2}{m-1} \\cdot m = -1$$ <br>
              Wynika to z warunku prostopadłości: iloczyn współczynników kierunkowych musi być równy -1.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="\\frac{2m}{m-1} = -1" />
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: "m = 2", value: "a" },
                { label: "m = \\frac{1}{2}", value: "b" },
                { label: "m = \\frac{1}{3}", value: "c" },
                { label: "m = -2", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$\\frac{2m}{m-1} = -1$$ <br>
              2. Mnożymy obie strony przez (m-1): <br>
              $$2m = -1(m - 1)$$ <br>
              3. Wymnażamy: <br>
              $$2m = -m + 1$$ <br>
              4. Przenosimy wyrazy z m na lewą stronę: <br>
              $$3m = 1$$ <br>
              5. Dzielimy przez 3: <br>
              $$m = \\frac{1}{3}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\\text{Proste są prostopadłe} \n y = \\frac{2}{m-1}x + m - 2 \n y = mx + \\frac{1}{m+1}"
            steps={[
              { step: "\\text{Warunek prostopadłości: } a_1 \\cdot a_2 = -1" },
              { step: "\\frac{2}{m-1} \\cdot m = -1" },
              { step: "2m = -m + 1" },
              { step: "m = \\frac{1}{3}" },
            ]}
            solutions={["m = \\frac{1}{3}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
