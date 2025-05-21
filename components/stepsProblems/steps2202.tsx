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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Układy równań - banknoty</h2>
        
        {/* ETAP 1: Równanie sumy kwot */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <div className="mb-6">
              <p className="text-lg text-gray-800">Treść zadania:</p>
              <p className="text-lg text-gray-800 italic">
                Klient wypłacił 1040 zł w banknotach 20zł, 50zł i 100zł. Banknotów 100zł było dwa razy więcej niż 50zł, 
                a 20zł o 2 mniej niż 50zł. Niech x oznacza liczbę banknotów 50zł, a y - liczbę banknotów 20zł.
              </p>
            </div>

            <ChoiceQuestion
              question="Które równanie opisuje łączną wypłaconą kwotę?"
              choices={[
                { label: String.raw`50x + 20y + 100x = 1040`, value: "a" },
                { label: String.raw`50x + 20y + 200x = 1040`, value: "b" },
                { label: String.raw`50x + 20y + 100(2y) = 1040`, value: "c" },
                { label: String.raw`20x + 50y + 200x = 1040`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={
                String.raw`Poprawna odpowiedź: $$50x + 20y + 200x = 1040$$<br>` +
                String.raw`Banknotów 100zł jest 2x (dwa razy więcej niż 50zł): ` +
                String.raw`$$100 \cdot 2x = 200x$$<br>` +
                String.raw`Suma wszystkich banknotów: $$50x + 20y + 200x = 1040$$`
              }
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Relacja między banknotami */}
        {completedStages.includes(1) && (
          <>
            <div className="mt-8 border-t-2 border-gray-200 pt-6">
              <ChoiceQuestion
                question="Które równanie opisuje zależność między liczbą banknotów 20zł i 50zł?"
                choices={[
                  { label: String.raw`y = x + 2`, value: "a" },
                  { label: String.raw`y = 2x`, value: "b" },
                  { label: String.raw`y = x - 2`, value: "c" },
                  { label: String.raw`x = y - 2`, value: "d" }
                ]}
                correctAnswer="c"
                explanation={
                  String.raw`Poprawna odpowiedź: $$y = x - 2$$<br>` +
                  String.raw`"Banknotów 20zł było o 2 mniej niż 50zł" oznacza, że liczba dwudziestek (y) ` +
                  String.raw`jest równa liczbie pięćdziesiątek (x) pomniejszonej o 2: ` +
                  String.raw`$$y = x - 2$$`
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
                step: String.raw`\text{1. Równanie sumy kwot: }250x + 20y = 1040` 
            },
            { 
                step: String.raw`2. \text{Relacja między banknotami: } y = x - 2` 
            }
            ]}
            solutions={[
            String.raw`\boxed{\begin{cases} 
                250x + 20y = 1040\\ 
                y = x - 2
            \end{cases}}`
            ]}
        />
        )}
      </div>
    </div>
  );
};

export default Page;