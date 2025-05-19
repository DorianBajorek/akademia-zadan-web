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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie układu równań metodą podstawiania</h2>
        <p className="text-lg text-gray-800">Rozwiąż następujący układ równań metodą podstawiania:</p>
        
        <div className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\begin{cases} 3x + y = 7 \\ x - 2y = -4 \end{cases}" />
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Wyznacz y z pierwszego równania:
            </p>
            <ChoiceQuestion
              question="Które wyrażenie przedstawia poprawnie wyznaczone y?"
              choices={[
                { label: "y = 7 - 3x", value: "a" },
                { label: "y = 7 + 3x", value: "b" },
                { label: "y = \\frac{7}{3x}", value: "c" },
                { label: "y = 3x - 7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Wyznaczamy y z pierwszego równania:<br>
                $$3x + y = 7$$<br>
                $$y = 7 - 3x$$"
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
                { label: "x - 2(7 - 3x) = -4", value: "a" },
                { label: "x - 2(7 + 3x) = -4", value: "b" },
                { label: "x - 2 = -4(7 - 3x)", value: "c" },
                { label: "x - (7 - 3x) = -4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$y = 7 - 3x$$ do drugiego równania:<br>
                $$x - 2y = -4$$<br>
                $$x - 2(7 - 3x) = -4$$"
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
              question="Jakie jest rozwiązanie równania $$x - 2(7 - 3x) = -4$$?"
              choices={[
                { label: "x = 2", value: "a" },
                { label: "x = -2", value: "b" },
                { label: "x = \\frac{10}{7}", value: "c" },
                { label: "x = \\frac{18}{5}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązujemy równanie:<br>
                $$x - 2(7 - 3x) = -4$$<br>
                $$x - 14 + 6x = -4$$<br>
                $$7x - 14 = -4$$<br>
                $$7x = 10$$<br>
                $$x = \frac{10}{7}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Oblicz <InlineMath math="y" /> podstawiając <InlineMath math="x = \frac{10}{7}" /> do wyznaczonego wcześniej wyrażenia:
            </p>
            <ChoiceQuestion
              question="Jaką wartość ma y?"
              choices={[
                { label: "y = \\frac{19}{7}", value: "a" },
                { label: "y = -\\frac{19}{7}", value: "b" },
                { label: "y = \\frac{11}{7}", value: "c" },
                { label: "y = \\frac{1}{7}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x = \frac{10}{7}$$ do wyrażenia $$y = 7 - 3x$$:<br>
                $$y = 7 - 3 \cdot \frac{10}{7}$$<br>
                $$y = \frac{49}{7} - \frac{30}{7}$$<br>
                $$y = \frac{19}{7}$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\begin{cases} 
              3x + y = 7 \\ 
              x - 2y = -4 
              \end{cases}"
            steps={[
              {
                step: "\\text{Wyznaczamy y z pierwszego równania}: y = 7 - 3x",
              },
              {
                step: "\\text{Podstawiamy do drugiego równania}: x - 2(7 - 3x) = -4",
              },
              {
                step: "\\text{Rozwiązujemy równanie}: x - 14 + 6x = -4 → 7x = 10 → x = \\frac{10}{7}",
              },
              {
                step: "\\text{Obliczamy y}: y = 7 - 3 \\cdot \\frac{10}{7} = \\frac{19}{7}",
              }
            ]}
            solutions={["\\text{Rozwiązanie układu: } \\left(\\frac{10}{7}, \\frac{19}{7}\\right)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;