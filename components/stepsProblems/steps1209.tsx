"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    if (!completedStages.includes(stage)) {
      setCompletedStages((prev) => [...prev, stage]);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Upraszczanie wyrażeń z pierwiastkami różnych stopni
        </h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="4\sqrt[3]{24} + 2\sqrt{48} - 5\sqrt[3]{81} - 6\sqrt{12}" />
        </p>

        <div>
          <p className="text-lg text-gray-700 mt-6">
            Etap 1: Uprość pierwiastek trzeciego stopnia z 24.
          </p>
          <ChoiceQuestion
            question="Jak uprościć $$\sqrt[3]{24}$$?"
            choices={[
              { label: "2\\sqrt[3]{3}", value: "a" },
              { label: "3\\sqrt[3]{2}", value: "b" },
              { label: "\\sqrt[3]{24}", value: "c" },
              { label: "4\\sqrt[3]{6}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Rozkład: $$\sqrt[3]{24} = \sqrt[3]{2\cdot2\cdot2\cdot3} = 2\sqrt[3]{3}$$."
            onComplete={() => handleStageComplete(1)}
          />
        </div>

        {completedStages.includes(1) && (
          <div>
            <p className="text-lg text-gray-700 mt-6">
              Etap 2: Uprość pierwiastek kwadratowy z 48.
            </p>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{48}$$?"
              choices={[
                { label: "4\\sqrt{3}", value: "a" },
                { label: "3\\sqrt{4}", value: "b" },
                { label: "\\sqrt{48}", value: "c" },
                { label: "6\\sqrt{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozkład: $$\sqrt{48} = \sqrt{2\cdot2\cdot2\cdot2\cdot3} = 4\sqrt{3}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </div>
        )}

        {completedStages.includes(2) && (
          <div>
            <p className="text-lg text-gray-700 mt-6">
              Etap 3: Uprość pierwiastek trzeciego stopnia z 81.
            </p>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt[3]{81}$$?"
              choices={[
                { label: "3\\sqrt[3]{3}", value: "a" },
                { label: "2\\sqrt[3]{9}", value: "b" },
                { label: "\\sqrt[3]{81}", value: "c" },
                { label: "4\\sqrt[3]{5}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozkład: $$\sqrt[3]{81} = \sqrt[3]{3\cdot3\cdot3\cdot3} = 3\sqrt[3]{3}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </div>
        )}

        {completedStages.includes(3) && (
          <div>
            <p className="text-lg text-gray-700 mt-6">
              Etap 4: Uprość pierwiastek kwadratowy z 12.
            </p>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{12}$$?"
              choices={[
                { label: "2\\sqrt{3}", value: "a" },
                { label: "3\\sqrt{2}", value: "b" },
                { label: "\\sqrt{12}", value: "c" },
                { label: "4\\sqrt{3}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozkład: $$\sqrt{12} = \sqrt{2\cdot2\cdot3} = 2\sqrt{3}$$."
              onComplete={() => handleStageComplete(4)}
            />
          </div>
        )}

        {completedStages.includes(4) && (
          <div>
            <p className="text-lg text-gray-700 mt-6">
              Etap 5: Oblicz ostateczny wynik.
            </p>
            <ChoiceQuestion
              question="Oblicz wartość wyrażenia: $$4\sqrt[3]{24} + 2\sqrt{48} - 5\sqrt[3]{81} - 6\sqrt{12}$$ po uproszczeniach."
              choices={[
                { label: "-7\\sqrt[3]{3} + 4\\sqrt{3}", value: "a" },
                { label: "7\\sqrt[3]{3} - 4\\sqrt{3}", value: "b" },
                { label: "\\sqrt[3]{3} + \\sqrt{3}", value: "c" },
                { label: "0", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`Uproszczenia:
$$4\\sqrt[3]{24} = 4\\cdot2\\sqrt[3]{3} = 8\\sqrt[3]{3},$$ 
$$2\\sqrt{48} = 2\\cdot4\\sqrt{3} = 8\\sqrt{3},$$ 
$$5\\sqrt[3]{81} = 5\\cdot3\\sqrt[3]{3} = 15\\sqrt[3]{3},$$ 
$$6\\sqrt{12} = 6\\cdot2\\sqrt{3} = 12\\sqrt{3}.$$
Sumując: $$8\\sqrt[3]{3} + 8\\sqrt{3} - 15\\sqrt[3]{3} - 12\\sqrt{3} = -7\\sqrt[3]{3} - 4\\sqrt{3}.$$`}
              onComplete={() => handleStageComplete(5)}
            />
          </div>
        )}

        {completedStages.includes(5) && (
          <div className="mt-6">
            <StudentNotes
              equation="4\sqrt[3]{24} + 2\sqrt{48} - 5\sqrt[3]{81} - 6\sqrt{12}"
              steps={[
                { step: "\\sqrt[3]{24} = 2\\sqrt[3]{3}" },
                { step: "\\sqrt{48} = 4\\sqrt{3}" },
                { step: "\\sqrt[3]{81} = 3\\sqrt[3]{3}" },
                { step: "\\sqrt{12} = 2\\sqrt{3}" },
                { step: "4\\sqrt[3]{24} + 2\\sqrt{48} - 5\\sqrt[3]{81} - 6\\sqrt{12} = 4\\cdot2\\sqrt[3]{3} + 2\\cdot4\\sqrt{3} - 5\\cdot3\\sqrt[3]{3} - 6\\cdot2\\sqrt{3} = 8\\sqrt[3]{3} + 8\\sqrt{3} - 15\\sqrt[3]{3} - 12\\sqrt{3} = -7\\sqrt[3]{3} - 4\\sqrt{3}" },
              ]}
              solutions={["-7\\sqrt[3]{3} - 4\\sqrt{3}"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;