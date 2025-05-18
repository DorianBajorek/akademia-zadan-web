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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie nierówności liniowych</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2(x-1) + 3(x+3) \geq x - 7" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: wymnóż nawiasy:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "2x - 2 + 3x + 9 \\geq x - 7", value: "a" },
                { label: "2x - 1 + 3x + 3\\geq x - 7", value: "b" },
                { label: "2x - 2 + 3x + 3 \\geq x - 7", value: "c" },
                { label: "2x - 2 + x + 9 \\geq x - 7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$2x - 2 + 3x + 9 \geq x - 7$$. <br>
                Dlaczego? <br>
                $$2(x-1) = 2x - 2$$ <br>
                $$3(x+3) = 3x + 9$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: uprość lewą stronę:
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczona nierówność?"
              choices={[
                { label: "5x + 7 \\geq x - 7", value: "a" },
                { label: "5x + 11 \\geq x - 7", value: "b" },
                { label: "6x + 7 \\geq x - 7", value: "c" },
                { label: "5x + 5 \\geq x - 7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$5x + 7 \geq x - 7$$. <br>
                Dlaczego? <br>
                $$2x + 3x = 5x$$ <br>
                $$-2 + 9 = 7$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: przenieś wyrażenia z x na lewą stronę, a liczby na prawą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "5x - x \\geq -7 - 7", value: "a" },
                { label: "5x + x \\geq -7 + 7", value: "b" },
                { label: "5x - x \\geq 7 - 7", value: "c" },
                { label: "5x + x \\geq 7 + 7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$5x - x \geq -7 - 7$$. <br>
                Dlaczego? Przenosimy $$x$$ na lewą stronę (zmieniając znak na minus) i $$7$$ na prawą stronę (zmieniając znak na minus)."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czwarty krok: uprość obie strony:
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczona nierówność?"
              choices={[
                { label: "4x \\geq -14", value: "a" },
                { label: "6x \\geq 0", value: "b" },
                { label: "4x \\geq 0", value: "c" },
                { label: "6x \\geq 14", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$4x \geq -14$$. <br>
                Dlaczego? <br>
                Po lewej: $$5x - x = 4x$$ <br>
                Po prawej: $$-7 - 7 = -14$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Piąty krok: podziel obie strony przez 4:
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie nierówności?"
              choices={[
                { label: "x \\geq -3.5", value: "a" },
                { label: "x \\geq 0", value: "b" },
                { label: "x \\geq 3.5", value: "c" },
                { label: "x \\leq -3.5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x \geq -3.5$$. <br>
                Dlaczego? Dzielimy obie strony przez 4 (liczba dodatnia, więc nie zmieniamy znaku nierówności): <br>
                $$4x \geq -14$$ <br>
                $$x \geq -\frac{14}{4}$$ <br>
                $$x \geq -3.5$$"
              explanationImage="/steps-images/nierownosc-liniowa2.png"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="2(x-1) + 3(x+3) \geq x - 7"
            steps={[
              {
                step: "2x - 2 + 3x + 9 \\geq x - 7",
              },
              {
                step: "5x + 7 \\geq x - 7",
              },
              {
                step: "5x - x \\geq -7 - 7",
              },
              {
                step: "4x \\geq -14",
              },
              {
                step: "x \\geq -3.5",
                image: "/steps-images/nierownosc-liniowa2.png",
              },
            ]}
            solutions={["[-3.5, ∞)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;