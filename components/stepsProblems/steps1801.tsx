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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Mnożenie nawiasów i upraszczanie wyrażeń</h2>
        <p className="text-lg text-gray-800">Wykonaj działania i uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(2x + 3)(x - 4) - (x + 5)(x - 2)" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Wymnóż pierwszy nawias (2x + 3)(x - 4)
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "2x^2 - 8x + 3x - 12", value: "a" },
                { label: "2x^2 + 8x + 3x + 12", value: "b" },
                { label: "2x^2 - 5x - 12", value: "c" },
                { label: "2x^2 - 5x + 12", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożony pierwszy nawias to $$2x^2 - 8x + 3x - 12$$. <br> 
                $$2x \cdot x = 2x^2$$ <br> 
                $$2x \cdot (-4) = -8x$$ <br> 
                $$3 \cdot x = 3x$$ <br> 
                $$3 \cdot (-4) = -12$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Wymnóż drugi nawias (x + 5)(x - 2)
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "x^2 - 2x + 5x - 10", value: "a" },
                { label: "x^2 + 2x + 5x + 10", value: "b" },
                { label: "x^2 + 3x - 10", value: "c" },
                { label: "x^2 - 7x - 10", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożony drugi nawias to $$x^2 - 2x + 5x - 10$$. <br> 
                $$x \cdot x = x^2$$<br> 
                $$x \cdot (-2) = -2x$$<br> 
                $$5 \cdot x = 5x$$ <br> 
                $$5 \cdot (-2) = -10$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Połącz i uprość całe wyrażenie
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "x^2 - 8x - 2", value: "a" },
                { label: "x^2 - 4x - 22", value: "b" },
                { label: "3x^2 - 4x - 2", value: "c" },
                { label: "x^2 + 8x - 22", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$x^2 - 8x - 2$$. <br> 
                Kroki rozwiązania:<br> 
                1. Połącz wyniki mnożenia: $$(2x^2 - 8x + 3x - 12) - (x^2 - 2x + 5x - 10)$$<br> 
                2. Uprość każdy nawias: $$(2x^2 - 5x - 12) - (x^2 + 3x - 10)$$<br> 
                3. Usuń nawiasy: $$2x^2 - 5x - 12 - x^2 - 3x + 10$$<br> 
                4. Zredukuj wyrazy podobne: $$x^2 - 8x - 2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="(2x + 3)(x - 4) - (x + 5)(x - 2)"
            steps={[
              {
                step: "( 2x^2 - 8x + 3x - 12) - (x^2 - 2x + 5x - 10) = 2x^2 - 5x - 12 - x^2 - 3x + 10 = x^2 - 8x - 2",
              },
            ]}
            solutions={["x^2 - 8x - 2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;