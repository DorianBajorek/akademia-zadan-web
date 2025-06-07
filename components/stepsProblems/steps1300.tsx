"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie z wartością bezwzględną</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie z wartością bezwzględną:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|x + 1| = 2" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jak należy rozbić równanie z wartością bezwzględną na przypadki?
            </p>
            <ChoiceQuestion
              question="Które rozbicie równania jest poprawne?"
              choices={[
                { label: "x + 1 = 2", value: "a" },
                { label: "x + 1 = -2", value: "b" },
                { label: "x + 1 = 2 \\ , \\ x + 1 = -2", value: "c"},
                { label: "x - 1 = 2 \\ , \\ x + 1 = -2", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Równanie z wartością bezwzględną $$|x + 1| = 2$$ rozbijamy na dwa przypadki:
                $$x + 1 = 2$$ lub $$x + 1 = -2$$.<br>
                Wynika to z definicji wartości bezwzględnej: $$|a| = b$$ oznacza $$a = b$$ lub $$a = -b$$ (dla $$b \geq 0$$)."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rozbicie-wartosci-bezwzglednej.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż pierwsze równanie.
            </p>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$x + 1 = 2$$?"
              correctAnswer="1"
              explanation="Rozwiązujemy równanie:
                $$x + 1 = 2$$<br>
                Odejmujemy 1 od obu stron:<br>
                $$x = 2 - 1$$<br>
                $$x = 1$$<br>
                Pierwsze rozwiązanie to $$x = 1$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/rozwiazanie-pierwsze.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż drugie równanie.
            </p>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$x + 1 = -2$$?"
              correctAnswer="-3"
              explanation="Rozwiązujemy równanie:
                $$x + 1 = -2$$<br>
                Odejmujemy 1 od obu stron:<br>
                $$x = -2 - 1$$<br>
                $$x = -3$$<br>
                Drugie rozwiązanie to $$x = -3$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/rozwiazanie-drugie.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy zbiór rozwiązań równania.
            </p>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem równania $$|x + 1| = 2$$?"
              choices={[
                { label: "x = -3, x = 1", value: "a" },
                { label: "x ∈ ⟨-3, 1⟩", value: "b" },
                { label: "x ∈ ℝ", value: "c" },
                { label: "x ∈ ∅", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem równania $$|x + 1| = 2$$ są dwie liczby:
                $$x \in \{-3, 1\}$$.<br>
                Wynika to z poprzednich kroków, gdzie otrzymaliśmy dwa rozwiązania:
                $$x = 1$$ i $$x = -3$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="|x + 1| = 2"
            steps={[
              {
                step: " x + 1 = 2 \\ \\ lub \\ \\ x + 1 = -2",
              },
            {
                step: " x = 1 \\ \\ lub \\ \\ x = -3",
              },
            ]}
            solutions={["x \\in \\{-3, 1\\}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;