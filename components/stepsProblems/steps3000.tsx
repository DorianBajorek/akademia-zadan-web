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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie układu równań metodą podstawiania</h2>
        <p className="text-lg text-gray-800">Rozwiąż następujący układ równań metodą podstawiania:</p>
        
        <div className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\begin{cases} 2x + y = 5 \\ 3x - 2y = 4 \end{cases}" />
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Wyznacz y z pierwszego równania:
            </p>
            <ChoiceQuestion
              question="Które wyrażenie przedstawia poprawnie wyznaczone y?"
              choices={[
                { label: "y = 5 - 2x", value: "a" },
                { label: "y = 5 + 2x", value: "b" },
                { label: "y = \\frac{5}{2x}", value: "c" },
                { label: "y = 2x - 5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Wyznaczamy y z pierwszego równania:<br>
                $$2x + y = 5$$<br>
                $$y = 5 - 2x$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Podstaw wyznaczone y do drugiego równania:
            </p>
            <ChoiceQuestion
              question="Jak będzie wyglądać drugie równanie po podstawieniu?"
              choices={[
                { label: "3x - 2(5 - 2x) = 4", value: "a" },
                { label: "3x - 2(5 + 2x) = 4", value: "b" },
                { label: "3x - 2 = 4(5 - 2x)", value: "c" },
                { label: "3x - (5 - 2x) = 4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$y = 5 - 2x$$ do drugiego równania:<br>
                $$3x - 2y = 4$$<br>
                $$3x - 2(5 - 2x) = 4$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Rozwiąż równanie z jedną niewiadomą:
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania $$3x - 2(5 - 2x) = 4$$?"
              choices={[
                { label: "x = 2", value: "a" },
                { label: "x = -2", value: "b" },
                { label: "x = 1", value: "c" },
                { label: "x = \\frac{4}{7}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązujemy równanie:<br>
                $$3x - 2(5 - 2x) = 4$$<br>
                $$3x - 10 + 4x = 4$$<br>
                $$7x - 10 = 4$$<br>
                $$7x = 14$$<br>
                $$x = 2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Oblicz  <InlineMath math="y" /> podstawiając  <InlineMath math="x = 2" /> do wyznaczonego wcześniej wyrażenia:
            </p>
            <ChoiceQuestion
              question="Jaką wartość ma y?"
              choices={[
                { label: "y = 1", value: "a" },
                { label: "y = -1", value: "b" },
                { label: "y = 9", value: "c" },
                { label: "y = \\frac{1}{2}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x = 2$$ do wyrażenia $$y = 5 - 2x$$:<br>
                $$y = 5 - 2·2$$<br>
                $$y = 5 - 4$$<br>
                $$y = 1$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\begin{cases} 
              2x + y = 5 \\ 
              3x - 2y = 4 
              \end{cases}"
            steps={[
              {
                step: "\\text{Wyznaczamy y z pierwszego równania}: y = 5 - 2x",
              },
              {
                step: "\\text{Podstawiamy do drugiego równania}: 3x - 2(5 - 2x) = 4",
              },
              {
                step: "\\text{Rozwiązujemy równanie}: 3x - 10 + 4x = 4 → 7x = 14 → x = 2",
              },
              {
                step: "\\text{Obliczamy y}: y = 5 - 2·2 = 1",
              }
            ]}
            solutions={["\\text{Rozwiązanie układu: } (2, 1)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;