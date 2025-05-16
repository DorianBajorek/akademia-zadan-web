"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie równań liniowych</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="4x - 3 = 2x + 1" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: przenieś wyrażenia z x na lewą stronę, a liczby na prawą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "4x - 2x = 1 + 3", value: "a" },
                { label: "4x + 2x = 1 - 3", value: "b" },
                { label: "-4x - 2x = 1 + 3", value: "c" },
                { label: "4x - 2x = 1 - 3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$4x - 2x = 1 + 3$$. <br>
                Dlaczego? Przenosimy $$2x$$ na lewą stronę (zmieniając znak na minus) i $$-3$$ na prawą stronę (zmieniając znak na plus)."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: uprość obie strony równania:
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczone równanie?"
              choices={[
                { label: "2x = 4", value: "a" },
                { label: "6x = -2", value: "b" },
                { label: "2x = -2", value: "c" },
                { label: "-6x = 4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$2x = 4$$. <br>
                Dlaczego? Po lewej stronie mamy $$4x - 2x = 2x$$, a po prawej $$1 + 3 = 4$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: podziel obie strony przez 2 aby znaleźć x:
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania?"
              choices={[
                { label: "x = 2", value: "a" },
                { label: "x = -1", value: "b" },
                { label: "x = -\\frac{1}{3}", value: "c" },
                { label: "x = \\frac{2}{3}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = 2$$. <br>
                Dlaczego? Dzielimy obie strony przez 2: <br>
                $$2x = 4$$<br>
                $$x = \frac{4}{2}$$<br>
                $$x = 2$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="4x - 3 = 2x + 1"
            steps={[
              {
                step: "4x - 2x = 1 + 3",
              },
              {
                step: "2x = 4",
              },
              {
                step: "x = 2",
              },
            ]}
            solutions={["2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;