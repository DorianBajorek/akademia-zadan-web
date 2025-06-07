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
          Upraszczanie wyrażeń z pierwiastkami
        </h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2\sqrt{75} + 8\sqrt{192} - 5\sqrt{108}" />
        </p>

        <div>
          <p className="text-lg text-gray-700 mt-6">
            Etap 1: Uprość pierwiastek z 75.
          </p>
          <ChoiceQuestion
            question="Jak uprościć $$\sqrt{75}$$?"
            choices={[
              { label: "5\\sqrt{3}", value: "a" },
              { label: "3\\sqrt{5}", value: "b" },
              { label: "\\sqrt{75}", value: "c" },
              { label: "25\\sqrt{3}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Rozkład: $$\sqrt{75} = \sqrt{5\cdot5\cdot3} = 5\sqrt{3}$$."
            onComplete={() => handleStageComplete(1)}
          />
        </div>

        {completedStages.includes(1) && (
          <div>
            <p className="text-lg text-gray-700 mt-6">
              Etap 2: Uprość pierwiastek z 192.
            </p>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{192}$$?"
              choices={[
                { label: "8\\sqrt{3}", value: "a" },
                { label: "4\\sqrt{12}", value: "b" },
                { label: "\\sqrt{192}", value: "c" },
                { label: "6\\sqrt{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozkład: $$\sqrt{192} = \sqrt{2\cdot2\cdot2\cdot2\cdot2\cdot2\cdot3} = 2\cdot2\cdot2\sqrt{3} = 8\sqrt{3}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </div>
        )}

        {completedStages.includes(2) && (
          <div className={completedStages.includes(2) ? "" : "opacity-50"}>
            <p className="text-lg text-gray-700 mt-6">
              Etap 3: Uprość pierwiastek z 108.
            </p>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{108}$$?"
              choices={[
                { label: "6\\sqrt{3}", value: "a" },
                { label: "3\\sqrt{12}", value: "b" },
                { label: "\\sqrt{108}", value: "c" },
                { label: "9\\sqrt{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozkład: $$\sqrt{108} = \sqrt{2\cdot2\cdot3\cdot3\cdot3} = 6\sqrt{3}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </div>
        )}

        {completedStages.includes(3) && (
          <div className={completedStages.includes(3) ? "" : "opacity-50"}>
            <p className="text-lg text-gray-700 mt-6">
              Etap 4: Oblicz ostateczny wynik.
            </p>
            <ChoiceQuestion
              question="Oblicz wartość wyrażenia: $$2\sqrt{75} + 8\sqrt{192} - 5\sqrt{108}$$ po uproszczeniach."
              choices={[
                { label: "44\\sqrt{3}", value: "a" },
                { label: "46\\sqrt{3}", value: "b" },
                { label: "42\\sqrt{3}", value: "c" },
                { label: "40\\sqrt{3}", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`Uproszczenia:
$$2\\sqrt{75} = 2\\cdot5\\sqrt{3} = 10\\sqrt{3},$$ 
$$8\\sqrt{192} = 8\\cdot8\\sqrt{3} = 64\\sqrt{3},$$ 
$$5\\sqrt{108} = 5\\cdot6\\sqrt{3} = 30\\sqrt{3}.$$
Sumując: $$10\\sqrt{3} + 64\\sqrt{3} - 30\\sqrt{3} = 44\\sqrt{3}.$$`}
              onComplete={() => handleStageComplete(4)}
            />
          </div>
        )}
        {completedStages.includes(4) && (
          <div className="mt-6">
            <StudentNotes
              equation="2\sqrt{75} + 8\sqrt{192} - 5\sqrt{108}"
              steps={[
                { step: "\\sqrt{75} = 5\\sqrt{3}" },
                { step: "\\sqrt{192} = 8\\sqrt{3}" },
                { step: "\\sqrt{108} = 6\\sqrt{3}" },
                { step: "2\\sqrt{75} + 8\\sqrt{192} - 5\\sqrt{108} = 2\\cdot5\\sqrt{3} + 8\\cdot8\\sqrt{3} - 5\\cdot6\\sqrt{3} = 10\\sqrt{3} + 64\\sqrt{3} - 30\\sqrt{3} = 44\\sqrt{3}" },
              ]}
              solutions={["44\\sqrt{3}"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;