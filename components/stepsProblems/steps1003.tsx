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
          <InlineMath math="|\sqrt{2} + 2| - |\sqrt{3} - 3|" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oszacuj wartość pierwiastków:
            </p>
            <ChoiceQuestion
              question="Ile wynosi w przybliżeniu $$\sqrt{2}$$ i $$\sqrt{3}$$?"
              choices={[
                { label: "\\sqrt{2} \\approx 1,41 \\text{ i } \\sqrt{3} \\approx 1,73", value: "a" },
                { label: "\\sqrt{2} \\approx 1,73 \\text{ i } \\sqrt{3} \\approx 2,00", value: "b" },
                { label: "\\sqrt{2} \\approx 1,41 \\text{ i } \\sqrt{3} \\approx 1,87", value: "c" },
                { label: "\\sqrt{2} \\approx 1,50 \\text{ i } \\sqrt{3} \\approx 1,73", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{2} ≈ 1.414$$ i $$\sqrt{3} ≈ 1.732$$, więc najbardziej precyzyjne przybliżenie to $$1,41$$ i $$1,73$$."
              onComplete={() => handleStageComplete(1)}
              img={"/steps-images/wartosc_pierwiastka2_3.png"}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartości wyrażeń pod wartościami bezwzględnymi:
            </p>
            <ChoiceQuestion
              question="Jakie są wartości $$\sqrt{2} + 2$$ i $$\sqrt{3} - 3$$?"
              choices={[
                { label: "\\sqrt{2} + 2 \\approx 3,41 \\text{ i } \\sqrt{3} - 3 \\approx -1,27", value: "a" },
                { label: "\\sqrt{2} + 2 \\approx 3,00 \\text{ i } \\sqrt{3} - 3 \\approx -1,00", value: "b" },
                { label: "\\sqrt{2} + 2 \\approx 3,41 \\text{ i } \\sqrt{3} - 3 \\approx -1,00", value: "c" },
                { label: "\\sqrt{2} + 2 \\approx 3,50 \\text{ i } \\sqrt{3} - 3 \\approx -1,27", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\sqrt{2} + 2 ≈ 1.41 + 2 = 3.41$$ i $$\sqrt{3} - 3 ≈ 1.73 - 3 = -1.27$$."
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
              question="Jak można zapisać wartość wyrażenia $$|\sqrt{2} + 2| - |\sqrt{3} - 3|$$?"
              choices={[
                { label: "(\\sqrt{2} + 2) - (3 - \\sqrt{3})", value: "a" },
                { label: "(\\sqrt{2} + 2) + (\\sqrt{3} - 3)", value: "b" },
                { label: "-(\\sqrt{2} + 2) - (3 - \\sqrt{3})", value: "c" },
                { label: "(\\sqrt{2} - 2) - (3 + \\sqrt{3})", value: "d" },
              ]}
              correctAnswer="a"
              explanation="
              1. $$|\sqrt{2} + 2| = \sqrt{2} + 2$$ (wyrażenie dodatnie, więc moduł nie zmienia znaku) <br>
              2. $$|\sqrt{3} - 3| = 3 - \sqrt{3}$$ (wyrażenie ujemne, więc moduł zmienia znak) <br>
              Ostatecznie: $$(\sqrt{2} + 2) - (3 - \sqrt{3})$$
              "
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

      {(completedStages.includes(3)) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość otrzymane wyrażenie:
            </p>
            <ChoiceQuestion
              question="Jak wygląda ostateczna postać uproszczona?"
              choices={[
                { label: "\\sqrt{2} + \\sqrt{3} - 1", value: "a" },
                { label: "\\sqrt{2} - \\sqrt{3} + 5", value: "b" },
                { label: "\\sqrt{2} + \\sqrt{3} + 5", value: "c" },
                { label: "-\\sqrt{2} - \\sqrt{3} - 1", value: "d" },
              ]}
              correctAnswer="a"
              explanation={`
                $$(\\sqrt{2} + 2) - (3 - \\sqrt{3}) = \\sqrt{2} + 2 - 3 + \\sqrt{3} = \\sqrt{2} + \\sqrt{3} - 1$$
              `}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
                
        {completedStages.includes(4) && (
          <StudentNotes
            equation="|\sqrt{2} + 2| - |\sqrt{3} - 3|"
            steps={[
              {
                step: "|\\sqrt{2} + 2| - |\\sqrt{3} - 3| = (\\sqrt{2} + 2) - (3 - \\sqrt{3}) = \\sqrt{2} + \\sqrt{3} - 1"
              }
            ]}
            solutions={["\\sqrt{2} + \\sqrt{3} - 1"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;