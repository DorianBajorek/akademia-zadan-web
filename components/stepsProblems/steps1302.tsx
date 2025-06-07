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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Równanie z wartością bezwzględną
        </h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="|\frac{1}{2}x - 1| = 3" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jak należy rozbić równanie z wartością bezwzględną na przypadki?
            </p>
            <ChoiceQuestion
              question="Które rozbicie równania jest poprawne?"
              choices={[
                { label: "\\frac{1}{2}x + 1 = 3 \\ , \\ \\frac{1}{2}x - 1 = -3", value: "a" },
                { label: "\\frac{1}{2}x - 1 = 3 \\ , \\ \\frac{1}{2}x - 1 = -3", value: "b" },
                { label: "\\frac{1}{2}x - 1 = 3", value: "c" },
                { label: "\\frac{1}{2}x - 1 = -3", value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Równanie z wartością bezwzględną $$|\\frac{1}{2}x - 1| = 3$$ 
rozbijamy na dwa przypadki: 
$$\\frac{1}{2}x + 1 = 3$$ lub $$\\frac{1}{2}x + 1 = -3$$.`}
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
              question="Jakie jest rozwiązanie równania $$\frac{1}{2}x + 1 = 3$$?"
              correctAnswer="4"
              explanation={`Rozwiązujemy równanie:  
            $$\\frac{1}{2}x + 1 = 3$$  
            przesuwamy 1 na drugą stronę:
            $$\\frac{1}{2}x = 3 - 1$$  
            $$\\frac{1}{2}x = 2$$
            Mnożymy przez 2:
            $$x = 2 \\cdot 2$$
            $$x = 4$$.`}
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/rozwiazanie-pierwsze.png"
            />
          </>
        )}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż pierwsze równanie.
            </p>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$\frac{1}{2}x + 1 = -3$$?"
              correctAnswer="-8"
              explanation={`Rozwiązujemy równanie:  
            $$\\frac{1}{2}x + 1 = 3$$  
            przesuwamy 1 na drugą stronę:
            $$\\frac{1}{2}x = -3 - 1$$ 
            $$\\frac{1}{2}x = -4$$
            Mnożymy przez 2:
            $$x = -4 \\cdot 2$$
            $$x = -8$$.`}
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/rozwiazanie-pierwsze.png"
            />
          </>
        )}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy zbiór rozwiązań równania.
            </p>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem równania $$|\frac{1}{2}x + 1|= 3$$?"
              choices={[
                { label: "x ∈ ∅", value: "a" },
                { label: "x = -4", value: "b" },
                { label: "x ∈ ℝ", value: "c" },
                { label: "x = -8 \\ \\ x = 4", value: "d" }
              ]}
              correctAnswer="d"
              explanation={`Rozwiązaniem równania $$|\\frac{1}{2}x + 1|= 3$$ są dwie liczby:
            $$x=-8$$ oraz $$x=4$$.`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="|\frac{1}{2}x + 1|= 3"
            steps={[
              { step: "\\frac{1}{2}x + 1= 3 \\ \\ \\frac{1}{2}x + 1= -3" },
              { step: "\\frac{1}{2}x = 3 - 1 \\ \\ \\frac{1}{2}x = -3 - 1" },
              { step: "\\frac{1}{2}x = 2 \\ \\ \\frac{1}{2}x = -4" },
            { step: "\\frac{1}{2}x = 2 \\ \\ \\frac{1}{2}x = -4" },
            { step: "x = 2 \\cdot 2 \\ \\ \\ x = -4 \\cdot 2" },
            { step: "x = 4 \\ \\ \\ x = -8" }
            ]}
            solutions={["x \\in \\{-8, 4\\}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;