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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wartość bezwzględna</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|5 - \sqrt{7}| + |\sqrt{5} - 2|" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oszacuj wartość pierwiastków:
            </p>
            <ChoiceQuestion
              question="Ile wynosi w przybliżeniu $$\sqrt{5}$$ i $$\sqrt{7}$$?"
              choices={[
                { label: "\\sqrt{5} \\approx 2,24 \\text{ i } \\sqrt{7} \\approx 2,65", value: "a" },
                { label: "\\sqrt{5} \\approx 2,00 \\text{ i } \\sqrt{7} \\approx 2,50", value: "b" },
                { label: "\\sqrt{5} \\approx 2,24 \\text{ i } \\sqrt{7} \\approx 2,80", value: "c" },
                { label: "\\sqrt{5} \\approx 2,50 \\text{ i } \\sqrt{7} \\approx 2,65", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{5} ≈ 2.236$$ i $$\sqrt{7} ≈ 2.645$$, więc najbardziej precyzyjne przybliżenie to $$2,24$$ i $$2,65$$."
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
              question="Jakie są wartości $$5 - \sqrt{7}$$ i $$\sqrt{5} - 2$$?"
              choices={[
                { label: "5 - \\sqrt{7} \\approx 2,35 \\text{ i } \\sqrt{5} - 2 \\approx 0,24", value: "a" },
                { label: "5 - \\sqrt{7} \\approx 2,50 \\text{ i } \\sqrt{5} - 2 \\approx 0,50", value: "b" },
                { label: "5 - \\sqrt{7} \\approx 2,35 \\text{ i } \\sqrt{5} - 2 \\approx 0,50", value: "c" },
                { label: "5 - \\sqrt{7} \\approx 2,00 \\text{ i } \\sqrt{5} - 2 \\approx 0,24", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$5 - \sqrt{7} ≈ 5 - 2.645 = 2.355$$ i $$\sqrt{5} - 2 ≈ 2.236 - 2 = 0.236$$."
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
              question="Jak można zapisać wartość wyrażenia $$|5 - \sqrt{7}| + |\sqrt{5} - 2|$$?"
              choices={[
                { label: "(5 - \\sqrt{7}) + (\\sqrt{5} - 2)", value: "a" },
                { label: "(5 - \\sqrt{7}) - (\\sqrt{5} - 2)", value: "b" },
                { label: "-(5 - \\sqrt{7}) + (\\sqrt{5} - 2)", value: "c" },
                { label: "(\\sqrt{7} - 5) + (2 - \\sqrt{5})", value: "d" },
              ]}
              correctAnswer="a"
              explanation="
              1. $$|5 - \sqrt{7}| = 5 - \sqrt{7}$$ (wyrażenie dodatnie, więc moduł nie zmienia znaku) <br>
              2. $$|\sqrt{5} - 2| = \sqrt{5} - 2$$ (wyrażenie dodatnie, więc moduł nie zmienia znaku) <br>
              Ostatecznie: $$(5 - \sqrt{7}) + (\sqrt{5} - 2)$$
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
                { label: "3 + \\sqrt{5} - \\sqrt{7}", value: "a" },
                { label: "3 - \\sqrt{5} + \\sqrt{7}", value: "b" },
                { label: "3 + \\sqrt{7} - \\sqrt{5}", value: "c" },
                { label: "3 - \\sqrt{7} - \\sqrt{5}", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`$$(5 - \\sqrt{7}) + (\\sqrt{5} - 2) = 3 + \\sqrt{5} - \\sqrt{7}$$`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
                
        {completedStages.includes(4) && (
          <StudentNotes
            equation="|5 - \sqrt{7}| + |\sqrt{5} - 2|"
            steps={[
              {
                step: "|5 - \\sqrt{7}| + |\\sqrt{5} - 2| = (5 - \\sqrt{7}) + (\\sqrt{5} - 2) = 3 + \\sqrt{5} - \\sqrt{7}"
              }
            ]}
            solutions={["3 + \\sqrt{5} - \\sqrt{7}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
