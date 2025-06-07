"use client";

import { useState } from "react";
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Układy równań - prostokąt</h2>
        
        {/* ETAP 1: Równanie pola */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <div className="mb-6">
              <p className="text-lg text-gray-800">Treść zadania:</p>
              <p className="text-lg text-gray-800 italic">
                Pole prostokąta wynosi 100. Dłuższy bok jest dwa razy większy od krótszego boku. Wskaż układ równań, który opisuje ten problem.
              </p>
            </div>

            <ChoiceQuestion
              question="Które równanie opisuje pole powierzchni?"
              choices={[
                { label: String.raw`a \cdot b = 100`, value: "a" },
                { label: String.raw`2(a + b) = 100`, value: "b" },
                { label: String.raw`a + b = 100`, value: "c" },
                { label: String.raw`(a + b)^2 = 100`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={
                String.raw`Poprawna odpowiedź: $$a \cdot b = 100$$<br>` +
                String.raw`Pole prostokąta obliczamy mnożąc długości sąsiednich boków: ` +
                String.raw`$$\text{pole} = \text{długość} \cdot \text{szerokość}$$`
              }
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Relacja między bokami */}
        {completedStages.includes(1) && (
          <>
            <div className="mt-8 border-t-2 border-gray-200 pt-6">
              <ChoiceQuestion
                question="Które równanie opisuje zależność między bokami?"
                choices={[
                  { label: String.raw`a = 2b`, value: "a" },
                  { label: String.raw`b = 2a`, value: "b" },
                  { label: String.raw`a - b = 2`, value: "c" },
                  { label: String.raw`a + b = 2`, value: "d" }
                ]}
                correctAnswer="a"
                explanation={
                  String.raw`Poprawna odpowiedź: $$a = 2b$$<br>` +
                  String.raw`"Dwa razy większy" oznacza relację mnożenia między bokami (słowo "razy" to mnożenie!) ` +
                  String.raw`Jeśli dłuższy bok $$a$$ jest dwukrotnością krótszego $$b$$: ` +
                  String.raw`$$a = 2b$$`
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          </>
        )}

        {completedStages.includes(2) && (
        <StudentNotes
            equation=""
            steps={[
            { 
                step: String.raw`\text{1. Równanie pola: }ab = 100` 
            },
            { 
                step: String.raw`2. \text{Relacja między bokami: } a = 2b` 
            }
            ]}
            solutions={[
            String.raw`\boxed{\begin{cases} 
                ab = 100\\ 
                a = 2b
            \end{cases}}`
            ]}
        />
        )}
      </div>
    </div>
  );
};

export default Page;