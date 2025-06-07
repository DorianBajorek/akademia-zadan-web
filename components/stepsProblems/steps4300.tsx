"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) =>
    setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Miejsce zerowe funkcji liniowej
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Dla jakiej wartości <InlineMath math="a" /> miejsce zerowe funkcji <InlineMath math="f(x) = a x + 1 - a" /> jest liczbą <InlineMath math="-2" />?
        </p>

        {/* ETAP 1: Wstawienie miejsca zerowego do wzoru */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Które równanie należy rozwiązać, aby wyznaczyć $$a$$?"
            choices={[
              { label: "a \\cdot (-2) + 1 - a = 0", value: "a" },
              { label: "a \\cdot 2 + 1 - a = 0", value: "b" },
              { label: "a - 2 + 1 - a = 0", value: "c" },
              { label: "-2a + 1 + a = 0", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Podstawiamy $$x = -2$$ do wzoru funkcji: <br/>" +
              "$$f(-2) = a \\cdot (-2) + 1 - a = 0$$"
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Przekształcenie równania */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jakie jest rozwiązanie równania $$a \cdot (-2) + 1 - a = 0$$?"
            choices={[
              { label: "a=-\\frac{1}{3}", value: "a" },
              { label: "a=\\frac{1}{3}", value: "b" },
              { label: "a=3", value: "c" },
              { label: "a=-3", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Rozwiązujemy równanie: <br/>" +
              "$$-2a +1-a =0 $$<br/> "+
             "$$-3a=-1$$<br/> "+
             "$$a=-\\frac{1}{3}$$"
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

    
        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation="f(x) = a x + 1 - a"
            steps={[
              { step: "\\text{Miejsce zerowe: }f(-2) = 0" },
              { step: "a \\cdot (-2) + 1 - a = 0" },
              { step: "-2a + 1 - a = 0" },
              { step: "-3a + 1 = 0" },
              { step: "a = -\\frac{1}{3}" },
            ]}
            solutions={[
              "a = -\\frac{1}{3}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
