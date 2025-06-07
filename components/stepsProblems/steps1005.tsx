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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wartość bezwzględna</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2|\sqrt{2} - 1| - 3|\sqrt{2} - 3|" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oszacuj wartość pierwiastków:
            </p>
            <ChoiceQuestion
              question="Ile wynosi w przybliżeniu $$\sqrt{2}$$?"
              choices={[
                { label: "\\sqrt{2} \\approx 1,41", value: "a" },
                { label: "\\sqrt{2} \\approx 1,50", value: "b" },
                { label: "\\sqrt{2} \\approx 1,20", value: "c" },
                { label: "\\sqrt{2} \\approx 1,30", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{2} ≈ 1.414$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartości wyrażeń pod wartościami bezwzględnymi:
            </p>
            <ChoiceQuestion
              question="Jakie są wartości $$\sqrt{2} - 1$$ i $$\sqrt{2} - 3$$?"
              choices={[
                { label: "\\sqrt{2} - 1 \\approx 0,41 \\text{ i } \\sqrt{2} - 3 \\approx -1,59", value: "a" },
                { label: "\\sqrt{2} - 1 \\approx 0,50 \\text{ i } \\sqrt{2} - 3 \\approx -1,50", value: "b" },
                { label: "\\sqrt{2} - 1 \\approx 0,30 \\text{ i } \\sqrt{2} - 3 \\approx -1,70", value: "c" },
                { label: "\\sqrt{2} - 1 \\approx 0,20 \\text{ i } \\sqrt{2} - 3 \\approx -1,80", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{2} - 1 ≈ 1.414 - 1 = 0.414$$ i $$\sqrt{2} - 3 ≈ 1.414 - 3 = -1.586$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartości bezwzględne:
            </p>
            <ChoiceQuestion
              question="Jak można zapisać wartość wyrażenia $$2|\sqrt{2} - 1| - 3|\sqrt{2} - 3|$$?"
              choices={[
                { label: "2(\\sqrt{2} - 1) - 3(-\\sqrt{2} + 3)", value: "a" },
                { label: "2(\\sqrt{2} - 1) - 3(\\sqrt{2} - 3)", value: "b" },
                { label: "2(-\\sqrt{2} + 1) - 3(-\\sqrt{2} + 3)", value: "c" },
                { label: "2(-\\sqrt{2} + 1) - 3(\\sqrt{2} - 3)", value: "d" },
              ]}
              correctAnswer="a"
              explanation="
              1. $$|\sqrt{2} - 1| = \sqrt{2} - 1$$ (wyrażenie dodatnie) <br>
              2. $$|\sqrt{2} - 3| = -(\sqrt{2} - 3)$$ (wyrażenie ujemne) <br>
              Ostatecznie: $$2(\sqrt{2} - 1) - 3(-(\sqrt{2} - 3))$$
              "
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość otrzymane wyrażenie:
            </p>
            <ChoiceQuestion
              question="Jak wygląda ostateczna postać uproszczona?"
              choices={[
                { label: "5 - 2\\sqrt{2}", value: "a" },
                { label:"2\\sqrt{2} - 5", value:"b" },
                { label:"2\\sqrt{2} - 1", value:"c" },
                { label:"1 - 2\\sqrt{2}", value:"d" },
              ]}
              correctAnswer="a"
              explanation={`$$2(\\sqrt{2} - 1) - 3(-\\sqrt{2} + 3) = 2\\sqrt{2} - 2 + 3\\sqrt{2} - 9 = 5 - 2\\sqrt{2}$$`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
                
        {completedStages.includes(4) && (
          <StudentNotes
            equation="2|\sqrt{2} - 1| - 3|\sqrt{2} - 3|"
            steps={[
              {
                step: "2|\\sqrt{2} - 1| - 3|\\sqrt{2} - 3| = 2(\\sqrt{2} - 1) - 3(-\\sqrt{2} + 3) = 2\\sqrt{2} - 2 + 3\\sqrt{2} - 9 = 5 - 2\\sqrt{2}"
              }
            ]}
            solutions={["5 - 2\\sqrt{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;