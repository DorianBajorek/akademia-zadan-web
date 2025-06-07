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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Złożona nierówność liniowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{2x - 1}{3} - \frac{x + 2}{4} \leq \frac{5}{6}(x - 1)" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Znajdź wspólny mianownik dla ułamków  <InlineMath math="(3, 4, 6)"/>:
            </p>
            <ChoiceQuestion
              question="Jaki jest najmniejszy wspólny mianownik?"
              choices={[
                { label: "6", value: "a" },
                { label: "24", value: "b" },
                { label: "12", value: "c" },
                { label: "36", value: "d" }
              ]}
              correctAnswer="c"
              explanation="$$NWW(3, 4, 6) = 12$$. To najmniejsza liczba podzielna przez wszystkie mianowniki."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Pomnóż obie strony przez 12 aby wyeliminować ułamki:
            </p>
            <ChoiceQuestion
              question="Jak wygląda nierówność po pomnożeniu przez 12?"
              choices={[
                { label: "4(2x - 1) + 3(x + 2) ≤ 10(x - 1)  ", value: "a" },
                { label: "12(2x - 1) - 12(x + 2) ≤ 12·\\frac{5}{6}(x - 1)", value: "b" },
                { label: "4(2x - 1) - 3(x + 2) ≤ 10(x - 1)", value: "c" },
                { label: "8x - 4 - 3x + 6 ≤ 10x - 10", value: "d" }
              ]}
              correctAnswer="c"
              explanation={`
                Każdy składnik mnożymy przez 12:<br>
                $$12 \\cdot \\frac{2x-1}{3} = 4(2x-1)$$<br>
                $$12 \\cdot \\frac{x+2}{4} = 3(x+2)$$<br>
                $$12 \\cdot \\frac{5}{6}(x-1) = 10(x-1)$$
              `}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wymnóż nawiasy:
            </p>
            <ChoiceQuestion
              question="Poprawnie wymnożona nierówność to:"
              choices={[
                { label: "8x - 4 - 3x - 6 ≤ 10x - 10", value: "a" },
                { label: "8x - 1 - 3x + 6 ≤ 10x - 10", value: "b" },
                { label: "8x - 4 + 3x + 6 ≤ 10x - 10", value: "c" },
                { label: "8x - 4 - 3x + 6 ≤ 10x - 5", value: "d" }
              ]}
              correctAnswer="a"
              explanation={`
                $$4(2x - 1) = 8x - 4$$<br>
                $$-3(x + 2) = -3x - 6$$<br>
                $$10(x - 1) = 10x - 10$$
              `}
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Uprość lewą stronę:
            </p>
            <ChoiceQuestion
              question="Po uproszczeniu otrzymamy:"
              choices={[
                { label: "5x - 10 ≤ 10x - 5", value: "a" },
                { label: "11x - 10 ≤ 10x - 10", value: "b" },
                { label: "5x + 2 ≤ 10x - 10", value: "c" },
                { label: "5x - 10 ≤ 10x - 10 ", value: "d" }
              ]}
              correctAnswer="d"
              explanation={`
                $$8x - 3x = 5x$$<br>
                $$-4 - 6 = -10$$<br>
                Prawa strona pozostaje bez zmian: $$10x - 10$$
              `}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 5: Przenieś wyrażenia z x na lewą stronę, a liczby na prawą:
            </p>
            <ChoiceQuestion
              question="Poprawne przekształcenie to:"
              choices={[
                { label: "5x - 10x ≤ -10 + 10", value: "a" },
                { label: "5x - 10x ≤ 10 - 10", value: "b" },
                { label: "-5x - 10x ≤ -10 - 10", value: "c" },
                { label: "5x + 10x ≤ -10 + 10", value: "d" }
              ]}
              correctAnswer="a"
              explanation={`
                Przenosimy $$10x$$ na lewo (zmieniając znak) i $$-10$$ na prawo (zmieniając znak):<br>
                $$5x - 10 ≤ 10x - 10$$<br>
                $$5x - 10x ≤ -10 + 10$$
              `}
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.includes(5) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 6: Uprość i rozwiąż:
            </p>
            <ChoiceQuestion
              question="Ostateczne rozwiązanie to:"
              choices={[
                { label: "x ≤ 0", value: "a" },
                { label: "x ≥ 0", value: "b" },
                { label: "x ≥ 4", value: "c" },
                { label: "x ≤ -4", value: "d" }
              ]}
              correctAnswer="b"
              explanation={`
                $$-5x ≤ 0$$<br>
                Dzielimy obie strony przez -5 (pamiętając o zmianie znaku nierówności):<br>
                $$x ≥ 0$$
              `}
              explanationImage="/steps-images/nierownosc-liniowa4.png"
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
        
        {completedStages.length === 6 && (
          <StudentNotes
            equation="\frac{2x - 1}{3} - \frac{x + 2}{4} \leq \frac{5}{6}(x - 1)"
            steps={[
              { step: "\\frac{2x - 1}{3} - \\frac{x + 2}{4} \\leq \\frac{5}{6}(x - 1) / \\cdot 12 " },
              { step: "4(2x-1) - 3(x+2) ≤ 10(x-1)" },
              { step: "8x - 4 - 3x - 6 ≤ 10x - 10" },
              { step: "5x - 10 ≤ 10x - 10" },
              { step: "5x - 10x ≤ -10 + 10" },
              { step: "-5x ≤ 0 → x ≥ 0", image: "/steps-images/nierownosc-liniowa4.png" },
            ]}
            solutions={["x \\in [0, ∞)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;