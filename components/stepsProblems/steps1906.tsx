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
          <InlineMath math="(\sqrt{3} - \sqrt{5})(\sqrt{3}+\sqrt{5}) - 4" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: zastosuj wzór skróconego mnożenia do pierwszego nawiasu:
            </p>
            <ChoiceQuestion
              question="Jak poprawnie rozwinąć pierwsze wyrażenie?"
              choices={[
                { label: "3 - 5 - 4", value: "a" },
                { label: "3 + 5 - 4", value: "b" },
                { label: "9 - 25 - 4", value: "c" },
                { label: "3 - 5 + 4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwinięcie:<br>
                $$(\sqrt{3} - \sqrt{5})(\sqrt{3}+\sqrt{5}) = (\sqrt{3})^2 - (\sqrt{5})^2 = 3 - 5$$<br>
                (wzór na różnicę kwadratów $$a^2 - b^2 = (a-b)(a+b)$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: wykonaj odejmowanie i uprość wyrażenie:
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "-6", value: "a" },
                { label: "2", value: "b" },
                { label: "-2 - 4", value: "c" },
                { label: "4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie:<br>
                1. $$3 - 5 = -2$$<br>
                2. $$-2 - 4 = -6$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="(\sqrt{3} - \sqrt{5})(\sqrt{3}+\sqrt{5}) - 4 = "
            steps={[
              {
                step: "= [(\\sqrt{3})^2 - (\\sqrt{5})^2] - 4",
              },
              {
                step: "= (3 - 5) - 4",
              },
              {
                step: "= -2 - 4",
              },
              {
                step: "= -6",
              },
            ]}
            solutions={["-6"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;