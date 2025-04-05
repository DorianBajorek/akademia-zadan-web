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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wyrażenia wykładniczego</h2>
        <p className="text-lg text-gray-800">Oblicz wartość wyrażenia:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\left( \frac{1}{16} \right)^8 \cdot 8^{16}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przedstaw wszystkie liczby jako potęgi o podstawie 2:
            </p>
            <ChoiceQuestion
              question="Które przekształcenia są poprawne dla liczb 16 i 8?"
              choices={[
                { label: "16 = 2^4, 8 = 2^3", value: "a" },
                { label: "16 = 2^3, 8 = 2^4", value: "b" },
                { label: "16 = 2^5, 8 = 2^2", value: "c" },
                { label: "16 = 2^2, 8 = 2^3", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenia to $$16 = 2^4$$ i $$8 = 2^3$$, ponieważ: $$2^4 = 16$$ i $$2^3 = 8$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć ułamek <InlineMath math="\frac{1}{16}" /> na potęgę o podstawie <InlineMath math="2" />:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = \\left( 2^{4} \\right)^8 = 2^{32}", value: "a" },
                { label: "\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = \\left( 2^{-4} \\right)^{-8} = 2^{32}", value: "b" },
                { label: "\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = 2^{-4} \\cdot 8 = 2^{-32}", value: "c" },
                { label: "\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = \\left( 2^{-4}\\right)^8 = 2^{-32}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie D: <br>1. $$16 = 2^4$$ (zamiana podstawy)<br>2. $$\frac{1}{2^4} = 2^{-4}$$ (ułamek to ujemny wykładnik)<br>3. $$(2^{-4})^8 = 2^{-32}$$ (potęga potęgi - mnożymy wykładniki)"
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć wyrażenie <InlineMath math="8^{16}" />
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "8^{16} = (2^3)^{16} = 2^{19}", value: "a" },
                { label: "8^{16} = (2^3)^{16} = 2^{3 \\cdot 16} = 2^{48}", value: "b" },
                { label: "8^{16} = (2^4)^{16} = 2^{64}", value: "c" },
                { label: "8^{16} = (2^2)^{16} = 2^{32}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$8^{16} = (2^3)^{16} = 2^{3 \cdot 16} = 2^{48}$$. Stosujemy prawo potęgowania potęgi."
              onComplete={() => handleStageComplete(4)}
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
              question="Które przekształcenie jest poprawne dla \(2^{-32} \cdot 2^{48}\)?"
              choices={[
                { label: "2^{-32} \\cdot 2^{48} = 2^{-32 + 48} = 2^{16}", value: "a" },
                { label: "2^{-32} \\cdot 2^{48} = 2^{-32 \\cdot 48}", value: "b" },
                { label: "2^{-32} \\cdot 2^{48} = 2^{32 + 48} = 2^{80}", value: "c" },
                { label: "2^{-32} \\cdot 2^{48} = 2^{32 - 48} = 2^{-16}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$2^{-32} \cdot 2^{48} = 2^{-32 + 48} = 2^{16}$$. Gdy mnożymy potęgi o tej samej podstawie, dodajemy wykładniki."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\left( \frac{1}{16} \right)^8 \cdot 8^{16}"
            steps={[
              {
                step: "16 = 2^4, \\quad 8 = 2^3",
              },
              {
                step: "\\left( \\frac{1}{16} \\right)^8 = (2^4)^{-8} = 2^{-32}",
              },
              {
                step: "8^{16} = (2^3)^{16} = 2^{48}",
              },
              {
                step: "2^{-32} \\cdot 2^{48} = 2^{-32 + 48} = 2^{16}",
              },
              {
                step: "2^{16} = 65536",
              }
            ]}
            solutions={["65536"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;