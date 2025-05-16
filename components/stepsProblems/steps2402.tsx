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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie równań z nawiasami</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2(x - 4) + 3(x - 2) = 3(2x - 6)" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: wymnóż wyrażenia w nawiasach:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "2x - 8 + 3x - 6 = 6x - 18", value: "a" },
                { label: "2x - 4 + 3x - 2 = 6x - 6", value: "b" },
                { label: "2x - 8 + 3x + 6 = 6x - 18", value: "c" },
                { label: "2x - 6 + 3x - 8 = 6x - 18", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne wymnożenie to $$2x - 8 + 3x - 6 = 6x - 18$$. <br>
                Dlaczego?<br>
                $$2(x - 4) = 2x - 8$$<br>
                $$3(x - 2) = 3x - 6$$<br>
                $$3(2x - 6) = 6x - 18$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: połącz wyrazy podobne po obu stronach:
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczone równanie?"
              choices={[
                { label: "5x - 14 = 6x - 18", value: "a" },
                { label: "5x - 2 = 6x - 18", value: "b" },
                { label: "5x - 14 = 6x + 18", value: "c" },
                { label: "-x - 14 = -18", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$5x - 14 = 6x - 18$$. <br>
                Dlaczego?<br>
                Lewa strona: $$2x + 3x - 8 - 6 = 5x - 14$$<br>
                Prawa strona pozostaje: $$6x - 18$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: przenieś wyrażenia z x na jedną stronę, a liczby na drugą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "-x = -4", value: "a" },
                { label: "11x = 32", value: "b" },
                { label: "x = 4", value: "c" },
                { label: "-x = 4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$-x = -4$$. <br>
                Dlaczego?<br>
                $$5x - 6x = -18 + 14$$<br>
                $$-x = -4$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czwarty krok: znajdź rozwiązanie:
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania?"
              choices={[
                { label: "x = 4", value: "a" },
                { label: "x = -4", value: "b" },
                { label: "x = 1/4", value: "c" },
                { label: "x = -1/4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = 4$$. <br>
                Dlaczego? Mnożymy obie strony przez $$-1$$:<br>
                $$-x = -4$$ → $$x = 4$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="2(x - 4) + 3(x - 2) = 3(2x - 6)"
            steps={[
              {
                step: "2x - 8 + 3x - 6 = 6x - 18",
              },
              {
                step: "5x - 14 = 6x - 18",
              },
              {
                step: "5x - 6x = -18 + 14",
              },
              {
                step: "-x = -4",
              },
              {
                step: "x = 4",
              },
            ]}
            solutions={["4"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;