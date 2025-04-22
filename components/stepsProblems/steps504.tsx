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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="100^5 \cdot (0,1)^{-6}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 10:
            </p>
            <ChoiceQuestion
              question="Które przekształcenia są poprawne dla liczb 100 i 0,1?"
              choices={[
                { label: "100 = 10^3, 0,1 = 10^{-2}", value: "a" },
                { label: "100 = 10^1, 0,1 = 10^{0}", value: "b" },
                { label: "100 = 10^2, 0,1 = 10^{-1}", value: "c" },
                { label: "100 = 10^4, 0,1 = 10^{-1}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenia to $$100 = 10^2$$ i $$0,1 = 10^{-1}$$, ponieważ: $$10^2 = 100$$ i $$10^{-1} = 0,1$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć wyrażenie <InlineMath math="100^5" />:
            </p>
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
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć wyrażenie <InlineMath math="(0,1)^{-6}" />:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{(-1) \\cdot (-6)} = 10^{6}", value: "a" },
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{-1 - 6} = 10^{-7}", value: "b" },
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{-1 + 6} = 10^{5}", value: "c" },
                { label: "(0,1)^{-6} = (10^{-1})^{-6} = 10^{1 - 6} = 10^{-5}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie: $$(0,1)^{-6} = (10^{-1})^{-6} = 10^{6}$$ (mnożymy wykładniki: $$-1 \cdot -6 = 6$$)"
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie potęg o tej samej podstawie:
            </p>
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
          </>
        )}
        
        {completedStages.length === 4 && (
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
        )}
      </div>
    </div>
  );
};

export default Page;