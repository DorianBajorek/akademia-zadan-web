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
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <div className="mb-6">
              <p className="text-lg text-gray-800">Treść zadania:</p>
              <p className="text-lg text-gray-800 italic">
                "Obwód prostokąta wynosi 60. Jeden bok jest o 10 dłuższy od drugiego."
              </p>
            </div>

            <ChoiceQuestion
              question="Które równanie opisuje obwód?"
              choices={[
                { label: String.raw`2(a + b) = 60`, value: "a" },
                { label: String.raw`2a + b = 60`, value: "b" },
                { label: String.raw`a + b = 60`, value: "c" },
                { label: String.raw`ab = 60`, value: "d" }
              ]}
              correctAnswer="a"
              explanation={
                String.raw`Poprawna odpowiedź: $$2(a + b) = 60$$<br>` +
                String.raw`Obwód prostokąta to suma wszystkich boków: ` +
                String.raw`$$\text{obwód} = 2 \times (\text{długość} + \text{szerokość})$$`
              }
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <div className="mt-8 border-t-2 border-gray-200 pt-6">
              <ChoiceQuestion
                question="Które równanie opisuje relację między bokami?"
                choices={[
                  { label: String.raw`a + 10 = b`, value: "a" },
                  { label: String.raw`10a = b`, value: "b" },
                  { label: String.raw`a - b = 10`, value: "c" },
                  { label: String.raw`b = \frac{a}{10}`, value: "d" }
                ]}
                correctAnswer="a"
                explanation={
                  String.raw`Poprawna odpowiedź: $$a + 10 = b$$<br>` +
                  String.raw`"O 10 dłuższy", że jeden bok jest o 10 jednostek dłuższy od drugiego. ` +
                  String.raw`Jeśli bok $$b$$ jest dłuższy od $$a$$, to: ` +
                  String.raw`$$b = a + 10$$`
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          </>
        )}

        {/* Podsumowanie */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation=""
            steps={[
              { step: "\\text{1. Równanie obwodu: } 2(a + b) = 60"},
              { step: "\\text{2. Relacja między bokami: } b = a + 10" }
            ]}
            solutions={[
              String.raw`\boxed{\begin{cases} 2(a + b) = 60 \\ b = a + 10 \end{cases}}`
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;