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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Mnożenie nawiasu przez liczbę</h2>
        <p className="text-lg text-gray-800">Wykonaj działania i uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="4(3x - 5) - 2(2x + 7) + 3(-x + 4)" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Pomnóż pierwszy nawias przez 4
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "12x - 20", value: "a" },
                { label: "12x + 20", value: "b" },
                { label: "12x - 5", value: "c" },
                { label: "3x - 20", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożony nawias to $$12x - 20$$. <br>
                Mnożymy każdy wyraz w nawiasie przez 4:<br>
                $$4 \cdot 3x = 12x$$<br>
                $$4 \cdot (-5) = -20$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Pomnóż drugi nawias przez -2
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "-4x - 14", value: "a" },
                { label: "4x + 14", value: "b" },
                { label: "-4x + 14", value: "c" },
                { label: "-4x - 7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożony nawias to $$-4x - 14$$. <br>
                Mnożymy każdy wyraz w nawiasie przez -2:<br>
                $$-2 \cdot 2x = -4x$$<br>
                $$-2 \cdot 7 = -14$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Pomnóż trzeci nawias przez 3
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "-3x + 12", value: "a" },
                { label: "3x + 12", value: "b" },
                { label: "-3x + 4", value: "c" },
                { label: "3x - 12", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożony nawias to $$-3x + 12$$. <br>
                Mnożymy każdy wyraz w nawiasie przez 3:<br>
                $$3 \cdot (-x) = -3x$$<br>
                $$3 \cdot 4 = 12$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Połącz wszystkie wyrazy i uprość
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "5x - 22", value: "a" },
                { label: "11x - 22", value: "b" },
                { label: "5x + 6", value: "c" },
                { label: "11x + 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$5x - 22$$. <br>
                Kroki rozwiązania:<br>
                1. Połącz wszystkie wyrazy: $$12x - 20 - 4x - 14 - 3x + 12$$<br>
                2. Zredukuj wyrazy podobne: <br>
                   $$(12x - 4x - 3x) + (-20 - 14 + 12)$$<br>
                   $$5x - 22$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="4(3x - 5) - 2(2x + 7) + 3(-x + 4)"
            steps={[
              {
                step: "12x - 20 -4x - 14 - 3x + 12 = 5x - 22",
              },
            ]}
            solutions={["5x - 22"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;