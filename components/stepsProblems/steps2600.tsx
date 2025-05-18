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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sprawdzanie rozwiązania układu równań</h2>
        <p className="text-lg text-gray-800">Sprawdź czy para liczb (2, -1) jest rozwiązaniem układu równań:</p>
        
        <div className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\begin{cases} 2x + 3y = 1 \\ x - y = 3 \end{cases}" />
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Podstaw x = 2 i y = -1 do pierwszego równania:
            </p>
            <ChoiceQuestion
              question="Czy pierwsze równanie jest spełnione?"
              choices={[
                { label: "\\text{Tak, bo } 2·2 + 3·(-1) = 4 - 3 = 1", value: "a" },
                { label: "\\text{Nie, bo } 2·2 + 3·(-1) = 4 + 3 = 7 ≠ 1", value: "b" },
                { label: "\\text{Nie, bo } 2·2 - 3·(-1) = 4 + 3 = 7 ≠ 1", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x=2$$ i $$y=-1$$ do pierwszego równania:<br>
                $$2·2 + 3·(-1) = 4 - 3 = 1$$<br>
                Równość jest prawdziwa, więc pierwsze równanie jest spełnione."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Podstaw x = 2 i y = -1 do drugiego równania:
            </p>
            <ChoiceQuestion
              question="Czy drugie równanie jest spełnione?"
              choices={[
                { label: "\\text{Tak, bo } 2 - (-1) = 2 + 1 = 3", value: "a" },
                { label: "\\text{Nie, bo } 2 - (-1) = 2 - 1 = 1 ≠ 3", value: "b" },
                { label: "\\text{Tak, bo }-2 - 1 = -3 ≠ 3", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x=2$$ i $$y=-1$$ do drugiego równania:<br>
                $$2 - (-1) = 2 + 1 = 3$$<br>
                Równość jest prawdziwa, więc drugie równanie jest spełnione."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wyciągnij wniosek:
            </p>
            <ChoiceQuestion
              question="Czy para (2, -1) jest rozwiązaniem układu równań?"
              choices={[
                { label: "\\text{Tak, bo spełnia oba równania}", value: "a" },
                { label: "\\text{Nie, bo spełnia tylko pierwsze równanie}", value: "b" },
                { label: "\\text{Nie, bo spełnia tylko drugie równanie}", value: "c" },
                { label: "\\text{Nie można tego stwierdzić}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Para liczb jest rozwiązaniem układu równań tylko wtedy, gdy spełnia <strong>oba</strong> równania jednocześnie.<br>
                W naszym przypadku oba równania są spełnione, więc (2, -1) jest rozwiązaniem."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\begin{cases} 
              2x + 3y = 1 \\ 
              x - y = 3 
              \end{cases}"
            steps={[
              {
                step: "\\text{Sprawdzenie pierwszego równania}: 2·2 + 3·(-1) = 1 → 4-3=1 ✓",
              },
              {
                step: "\\text{Sprawdzenie drugiego równania: } 2 - (-1) = 3 → 2+1=3 ✓",
              }
            ]}
            solutions={["\\text{Tak, (2, -1) jest rozwiązaniem}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;