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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie równań liniowych</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{x}{3} + \frac{x}{4} = 1" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: znajdź wspólny mianownik dla ułamków
            </p>
            <ChoiceQuestion
              question="Jaki jest najmniejszy wspólny mianownik dla liczb 3 i 4?"
              choices={[
                { label: "12", value: "a" },
                { label: "7", value: "b" },
                { label: "24", value: "c" },
                { label: "3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Najmniejszy wspólny mianownik dla 3 i 4 to 12. <br>
                Dlaczego? 12 to najmniejsza liczba, która dzieli się zarówno przez 3 jak i 4."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: pomnóż obie strony równania przez 12
            </p>
            <ChoiceQuestion
              question="Jak będzie wyglądać równanie po pomnożeniu przez 12?"
              choices={[
                { label: "4x + 3x = 12", value: "a" },
                { label: "x + x = 12", value: "b" },
                { label: "12x + 12x = 12", value: "c" },
                { label: "4x + 3x = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne równanie po mnożeniu to $$4x + 3x = 12$$. <br>
                Mnożymy każdy wyraz przez 12: <br>
                $$12 \cdot \frac{x}{3} = 4x$$, <br>
                $$12 \cdot \frac{x}{4} = 3x$$, <br>
                $$12 \cdot 1 = 12$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: rozwiąż otrzymane równanie
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania 4x + 3x = 12?"
              choices={[
                { label: "x = \\frac{12}{7}", value: "a" },
                { label: "x = \\frac{7}{12}", value: "b" },
                { label: "x = 12", value: "c" },
                { label: "x = 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Dodajemy wyrazy podobne i otrzymujemy: $$7x = 12$$, <br>
                Następnie dzielimy obie strony przez $$7$$ i otrzymujemy: <br>
                $$x = \frac{12}{7}$$<br>
                "
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\frac{x}{3} + \frac{x}{4} = 1"
            steps={[
            {
                step: "\\frac{x}{3} + \\frac{x}{4} = 1   /\\cdot 12",
            },
            {
                step: "4x + 3x = 12",
            },
            {
                step: "7x = 12",
            },
            {
                step: "x = \\frac{12}{7}",
            }
            ]}
            solutions={["\\frac{12}{7}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;