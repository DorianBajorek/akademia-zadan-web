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
          <InlineMath math="(x+2)^2" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: zastosuj wzór skróconego mnożenia:
            </p>
            <ChoiceQuestion
              question="Który wzór zastosujesz?"
              choices={[
                { label: "(a + b)^2 = a^2 + 2ab + b^2", value: "a" },
                { label: "(a - b)^2 = a^2 - 2ab + b^2", value: "b" },
                { label: "a^2 - b^2 = (a - b)(a + b)", value: "c" },
                { label: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawny wzór to $$(a + b)^2 = a^2 + 2ab + b^2$$. <br>
                Dlaczego? Mamy do czynienia z kwadratem sumy dwóch wyrażeń (x i 2), więc stosujemy właśnie ten wzór."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: podstaw wartości do wzoru i uprość:
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "x^2 + 4x + 4", value: "a" },
                { label: "x^2 + 2x + 4", value: "b" },
                { label: "x^2 + 4x + 2", value: "c" },
                { label: "x^2 + 2x + 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$x^2 + 4x + 4$$. <br>
                Dlaczego? Podstawiamy do wzoru:<br>
                1. $$a = x$$, $$b = 2$$<br>
                2. $$(x + 2)^2 = x^2 + 2 \\cdot x \\cdot 2 + 2^2 = x^2 + 4x + 4$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="(x+2)^2"
            steps={[
              {
                step: "(x+2)^2 = x^2 + 2 \\cdot x \\cdot 2 + 2^2 = x^2 + 4x + 4",
              },
            ]}
            solutions={["x^2 + 4x + 4"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;