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
        <p className="text-lg text-gray-800">Która z liczb jest rozwiązaniem równania:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2(x - 1) + x = x - 3(2 - 3x)" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: wymnóż wyrażenia w nawiasach:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "2x - 2 + x = x - 6 + 9x", value: "a" },
                { label: "2x - 1 + x = x - 6 - 9x", value: "b" },
                { label: "2x - 2 + x = x - 6 - 9x", value: "c" },
                { label: "2x - 1 + x = x - 6 + 9x", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne wymnożenie to $$2x - 2 + x = x - 6 + 9x$$. <br>
                Dlaczego?<br>
                $$2(x - 1) = 2x - 2$$<br>
                $$-3(2 - 3x) = -6 + 9x$$"
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
                { label: "3x - 2 = 10x - 6", value: "a" },
                { label: "3x - 2 = -8x - 6", value: "b" },
                { label: "3x - 1 = 10x - 6", value: "c" },
                { label: "2x - 2 = -8x - 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$3x - 2 = 10x - 6$$. <br>
                Dlaczego?<br>
                Lewa strona: $$2x + x - 2 = 3x - 2$$<br>
                Prawa strona: $$x + 9x - 6 = 10x - 6$$"
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
                { label: "-7x = -4", value: "a" },
                { label: "7x = 4", value: "b" },
                { label: "-7x = 4", value: "c" },
                { label: "13x = -8", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$-7x = -4$$. <br>
                Dlaczego?<br>
                $$3x - 10x = -6 + 2$$<br>
                $$-7x = -4$$"
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
                { label: "x = \\frac{4}{7}", value: "a" },
                { label: "x = -\\frac{4}{11}", value: "b" },
                { label: "x = \\frac{8}{11}", value: "c" },
                { label: "x = -1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = \frac{4}{7}$$. <br>
                Dlaczego? Dzielimy obie strony przez $$-7$$:<br>
                $$x = \frac{-4}{-7} = \frac{4}{7}$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="2(x - 1) + x = x - 3(2 - 3x)"
            steps={[
              {
                step: "2x - 2 + x = x - 6 + 9x",
              },
              {
                step: "3x - 2 = 10x - 6",
              },
              {
                step: "3x - 10x = -6 + 2",
              },
              {
                step: "-7x = -4",
              },
              {
                step: "x = \\frac{4}{7}",
              },
            ]}
            solutions={["\\frac{4}{7}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;