"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="100^5 \cdot (0,1)^{-6}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przedstaw wszystkie liczby jako potęgi o podstawie 10:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenia są poprawne dla liczb 100 i 0,1?"
                choices={[
                  { label: "100 = 10^3, 0,1 = 10^{-2}", value: "a" },
                  { label: "100 = 10^1, 0,1 = 10^{0}", value: "b" },
                  { label: "100 = 10^2, 0,1 = 10^{-1}", value: "c" },
                  { label: "100 = 10^4, 0,1 = 10^{-1}", value: "d" },
                ]}
                correctAnswer="c"
                explanation="Poprawne przekształcenia to $$100 = 10^2$$ i $$0,1 = 10^{-1}$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaPotegi.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przekształć wyrażenie <InlineMath math="100^5" /> o podstawie 10.
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "100^5 = (10^2)^5 = 10^{2 \\cdot 5} = 10^{10}", value: "a" },
                  { label: "100^5 = (10^2)^5 = 10^{2 + 5} = 10^{7}", value: "b" },
                  { label: "100^5 = (10^2)^5 = 10^{5} = 10^{5}", value: "c" },
                  { label: "100^5 = (10^2)^5 = 10^{2 - 5} = 10^{-3}", value: "d" },
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenie: $$100^5 = (10^2)^5 = 10^{2 \cdot 5} = 10^{10}$$ (potęga potęgi - mnożymy wykładniki)"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przekształć wyrażenie <InlineMath math="(0,1)^{-6}" />:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{-1 - 6} = 10^{-7}", value: "a" },
                  { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{-1 + 6} = 10^{5}", value: "b" },
                  { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{1 - 6} = 10^{-5}", value: "c" },
                  { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{(-1) \\cdot (-6)} = 10^{6}", value: "d" },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie: $$(0,1)^{-6} = (10^{-1})^{-6} = 10^{6}$$, bo mnożymy wykładniki: $$-1 \cdot (-6) = 6$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Wykonaj mnożenie potęg o tej samej podstawie:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne dla $$10^{10} \cdot 10^{6}$$"
                choices={[
                  { label: "10^{10} \\cdot 10^{6} = 10^{10 \\cdot 6} = 10^{60}", value: "a" },
                  { label: "10^{10} \\cdot 10^{6} = 10^{10 - 6} = 10^{4}", value: "b" },
                  { label: "10^{10} \\cdot 10^{6} = 10^{6 - 10} = 10^{-4}", value: "c" },
                  { label: "10^{10} \\cdot 10^{6} = 10^{10 + 6} = 10^{16}", value: "d" },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie: $$10^{10} \cdot 10^{6} = 10^{10 + 6} = 10^{16}$$ (dodajemy wykładniki)"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="100^5 \cdot (0,1)^{-6}"
                steps={[
                  {
                    step: "100 = 10^2, \\quad 0,1 = 10^{-1}",
                  },
                  {
                    step: "100^5 = (10^2)^5 = 10^{10}",
                  },
                  {
                    step: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{6}",
                  },
                  {
                    step: "10^{10} \\cdot 10^{6} = 10^{16}",
                  }
                ]}
                solutions={["10^{16}"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;