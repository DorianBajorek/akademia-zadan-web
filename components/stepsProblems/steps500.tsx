"use client";

import { useEffect, useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import { useAuth } from "@/app/UserData";
import { solveProblem } from "@/service";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const {token} = useAuth()

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  useEffect(() => {
    if (completedStages.length === 3) {
      solveProblem("500", token)
    }
  }, [completedStages]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2^{-1} \cdot 32^{\frac{3}{5}}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 2:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla liczby 32?"
              choices={[
                { label: "32 = 2^4", value: "a" },
                { label: "32 = 2^5", value: "b" },
                { label: "32 = 2^6", value: "c" },
                { label: "32 = 2^3", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$32 = 2^5$$, ponieważ $$2^5 = 32$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
             Jeśli wiemy, że <InlineMath math="32 = 3^5" /> zapiszmy teraz całe nasze wyrażenie  <InlineMath math="32^{\frac{3}{5}}" />
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 \\cdot \\frac{3}{5}} = 2^3", value: "a" },
                { label: "32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 + \\frac{3}{5}}", value: "b" },
                { label: "32^{\\frac{3}{5}} = 32^{\\frac{5}{3}} = 2^{\\frac{5}{3}}", value: "c" },
                { label: "32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 - \\frac{3}{5}}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$32^{\frac{3}{5}} = (2^5)^{\frac{3}{5}} = 2^{5 \cdot \frac{3}{5}} = 2^3$$. Musimy pamiętać, że jeśli mamy potęgę do potęgi to wykładniki mnożymy!"
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie potęg o tej samej podstawie:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$2^{-1} \cdot 2^3$$?"
              choices={[
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 \\cdot 3} = 2^{-3}", value: "a" },
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^1 = 2", value: "b" },
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 - 3} = 2^{-4}", value: "c" },
                { label: "2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^2 = 4", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$2^{-1} \cdot 2^3 = 2^{-1 + 3} = 2^2 = 4$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "2^{-1}\\cdot32^{\\frac{3}{5}} = 2^{-1}\\cdot(2^5)^{\\frac{3}{5}} = 2^{-1}\\cdot2^{5 \\cdot \\frac{3}{5}} =2^{-1}\\cdot 2^3 = ",
              },
              {
                step: " = 2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^2 = 4",
              },
            ]}
            solutions={["4"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;