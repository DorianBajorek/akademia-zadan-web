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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Mnożenie trzech nawiasów</h2>
        <p className="text-lg text-gray-800">Wykonaj działania i uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(x + 2)(x - 3)(2x + 1)" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Pomnóż pierwsze dwa nawiasy (x + 2)(x - 3)
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "x^2 - 3x + 2x - 6", value: "a" },
                { label: "x^2 + 3x - 2x - 6", value: "b" },
                { label: "x^2 - x - 6", value: "c" },
                { label: "x^2 + x - 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożone pierwsze dwa nawiasy to $$x^2 - 3x + 2x - 6$$. <br>
                $$x \cdot x = x^2$$<br>
                $$x \cdot (-3) = -3x$$<br>
                $$2 \cdot x = 2x$$<br>
                $$2 \cdot (-3) = -6$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Uprość wynik mnożenia dwóch pierwszych nawiasów
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "x^2 - x - 6", value: "a" },
                { label: "x^2 + x - 6", value: "b" },
                { label: "x^2 - 5x - 6", value: "c" },
                { label: "x^2 + 5x - 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$x^2 - x - 6$$. 
                Wystarczy dodać wyrazy podobne: $$-3x + 2x = -x$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Pomnóż wynik przez trzeci nawias (x^2 - x - 6)(2x + 1)
            </p>
            <ChoiceQuestion
              question="Które mnożenie jest poprawne?"
              choices={[
                { label: "2x^3 + x^2 - 2x^2 - x - 12x - 6", value: "a" },
                { label: "2x^3 - x^2 - 12x - 6", value: "b" },
                { label: "2x^3 - 2x^2 - 13x - 6", value: "c" },
                { label: "2x^3 - x^2 - 13x - 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawnie wymnożone wyrażenie to $$2x^3 + x^2 - 2x^2 - x - 12x - 6$$. <br>
                Stosujemy mnożenie każdego wyrazu pierwszego wielomianu przez każdy wyraz drugiego:<br>
                $$x^2 \cdot 2x = 2x^3$$<br>
                $$x^2 \cdot 1 = x^2$$<br>
                $$-x \cdot 2x = -2x^2$$<br>
                $$-x \cdot 1 = -x$$<br>
                $$-6 \cdot 2x = -12x$$<br>
                $$-6 \cdot 1 = -6$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Uprość końcowe wyrażenie
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "2x^3 - x^2 - 13x - 6", value: "a" },
                { label: "2x^3 + x^2 - 13x - 6", value: "b" },
                { label: "2x^3 - 3x^2 - 13x - 6", value: "c" },
                { label: "2x^3 - x^2 - 11x - 6", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$2x^3 - x^2 - 13x - 6$$. <br>
                Redukcja wyrazów podobnych:<br>
                $$x^2 - 2x^2 = -x^2$$<br>
                $$-x - 12x = -13x$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(x + 2)(x - 3)(2x + 1)"
            steps={[
              {
                step: "(x + 2)(x - 3)(2x + 1) = (x^2 - x - 6)(2x + 1) = 2x^3 + x^2 - 2x^2 - x - 12x - 6 = ",
              },
              {
                step: " = 2x^3 - x^2 - 13x - 6",
              }
            ]}
            solutions={["2x^3 - x^2 - 13x - 6"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;