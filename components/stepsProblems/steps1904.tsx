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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Upraszczanie wyrażeń algebraicznych</h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(\sqrt{3} - 2)^2 - (4 - \sqrt{3})^2" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: rozwiń oba kwadraty używając wzorów skróconego mnożenia:
            </p>
            <ChoiceQuestion
              question="Jak poprawnie rozwinąć oba wyrażenia?"
              choices={[
                { label: "(3 - 2\\sqrt{3} + 4) - (16 - 4\\sqrt{3} + 3)", value: "a" },
                { label: "(3 + 4\\sqrt{3} + 4) - (16 + 8\\sqrt{3} + 3)", value: "b" },
                { label: "(3 - 4\\sqrt{3} - 4) - (16 - 8\\sqrt{3} - 3)", value: "c" },
                { label: "(3 - 4\\sqrt{3} + 4) - (16 - 8\\sqrt{3} + 3)", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawne rozwinięcie:<br>
                $$(\sqrt{3} - 2)^2 = (\sqrt{3})^2 - 2 \cdot \sqrt{3} \cdot 2 + 2^2 = 3 - 4\sqrt{3} + 4$$<br>
                $$(4 - \sqrt{3})^2 = 4^2 - 2 \cdot 4 \cdot \sqrt{3} + (\sqrt{3})^2 = 16 - 8\sqrt{3} + 3$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: wykonaj działania i uprość wyrażenie:
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "-4\\sqrt{3} - 12", value: "a" },
                { label: "-12 - 4\\sqrt{3}", value: "b" },
                { label: "12 + 4\\sqrt{3}", value: "c" },
                { label: "4\\sqrt{3} - 12", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawne uproszczenie:<br>
                1. $$(3 - 4\sqrt{3} + 4) - (16 - 8\sqrt{3} + 3)$$<br>
                2. $$(7 - 4\sqrt{3}) - (19 - 8\sqrt{3})$$<br>
                3. $$7 - 4\sqrt{3} - 19 + 8\sqrt{3}$$<br>
                4. $$(7 - 19) + (-4\sqrt{3} + 8\sqrt{3})$$<br>
                5. $$-12 + 4\sqrt{3}$$ czyli $$4\sqrt{3} - 12$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="(\sqrt{3} - 2)^2 - (4 - \sqrt{3})^2"
            steps={[
              {
                step: "(\\sqrt{3} - 2)^2 - (4 - \\sqrt{3})^2 = [(\\sqrt{3})^2 - 2 \\cdot \\sqrt{3} \\cdot 2 + 2^2] - [4^2 - 2 \\cdot 4 \\cdot \\sqrt{3} + (\\sqrt{3})^2]",
              },
              {
                step: "= (3 - 4\\sqrt{3} + 4) - (16 - 8\\sqrt{3} + 3)",
              },
              {
                step: "= 7 - 4\\sqrt{3} - 19 + 8\\sqrt{3}",
              },
              {
                step: "= (7 - 19) + (-4\\sqrt{3} + 8\\sqrt{3})",
              },
              {
                step: "= -12 + 4\\sqrt{3} = 4\\sqrt{3} - 12",
              },
            ]}
            solutions={["4\\sqrt{3} - 12"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;