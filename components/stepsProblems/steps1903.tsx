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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Upraszczanie wyrażeń algebraicznych</h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(\sqrt{2} - 3)^2" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: zastosuj wzór skróconego mnożenia:
            </p>
            <ChoiceQuestion
              question="Który wzór zastosujesz?"
              choices={[
                { label: "(a - b)^2 = a^2 - 2ab + b^2", value: "a" },
                { label: "(a + b)^2 = a^2 + 2ab + b^2", value: "b" },
                { label: "a^2 - b^2 = (a - b)(a + b)", value: "c" },
                { label: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawny wzór to $$(a - b)^2 = a^2 - 2ab + b^2$$. <br>
                Dlaczego? Mamy do czynienia z kwadratem różnicy dwóch wyrażeń $$(\sqrt{2},  3)$$, więc stosujemy właśnie ten wzór."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: podstaw wartości do wzoru i oblicz:
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "11 - 6\\sqrt{2}", value: "a" },
                { label: "5 - 6\\sqrt{2}", value: "b" },
                { label: "11 + 6\\sqrt{2}", value: "c" },
                { label: "2 - 6\\sqrt{2} + 9", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$11 - 6\sqrt{2}$$. <br>
                Obliczenia krok po kroku:<br>
                1. $$a = \sqrt{2}$$, $$b = 3$$<br>
                2. $$(\sqrt{2})^2 = 2$$<br>
                3. $$-2 \cdot \sqrt{2} \cdot 3 = -6\sqrt{2}$$<br>
                4. $$3^2 = 9$$<br>
                5. Suma: $$2 - 6\sqrt{2} + 9 = 11 - 6\sqrt{2}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="(\sqrt{2} - 3)^2"
            steps={[
              {
                step: "(\\sqrt{2} - 3)^2 = (\\sqrt{2})^2 - 2 \\cdot \\sqrt{2} \\cdot 3 + 3^2 = 2 - 6\\sqrt{2} + 9 = 11 - 6\\sqrt{2}",
              },
            ]}
            solutions={["11 - 6\\sqrt{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;