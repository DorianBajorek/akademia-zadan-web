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
  <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
      Suma rozwiązań równania iloczynowego
    </h2>
    <p className="text-lg text-gray-800 mt-4">
      Suma wszystkich rozwiązań równania <InlineMath math="x(x-3)(x+2)=0" /> jest równa:
    </p>
    {/* Odpowiedzi do wyboru */}
    <div className="mt-8 space-y-3 text-lg text-gray-800">
      <div>
        <span className="font-bold">A.</span> 0
      </div>
      <div>
        <span className="font-bold">B.</span> 1
      </div>
      <div>
        <span className="font-bold">C.</span> 2
      </div>
      <div>
        <span className="font-bold">D.</span> 3
      </div>
    </div>

    {/* ETAP 1: Warunki zerowania iloczynu */}
    {(completedStages.includes(1) || completedStages.length === 0) && (
      <ChoiceQuestion
        question="Kiedy iloczyn $$x(x-3)(x+2)=0$$ jest równy zero?"
        choices={[
          { label: "\\text{Gdy }x = 0, x - 3 = 0 \\text{ lub }x + 2 = 0", value: "a" },
          { label: "\\text{Gdy }x = 3, x = 2,\\text{ lub } x = 0", value: "b" },
          { label: "\\text{Tylk dla } x = 0", value: "c" },
          { label: "\\text{Gdy }x = 3 \\text{ lub } x = 2", value: "d" },
        ]}
        correctAnswer="a"
        explanation="Iloczyn jest zerem, gdy przynajmniej jeden z czynników jest zerem."
        onComplete={() => handleStageComplete(1)}
      />
    )}

    {/* ETAP 2: Wypisanie wszystkich miejsc zerowych */}
    {completedStages.includes(1) && (
      <ChoiceQuestion
        question="Jakie są wszystkie rozwiązania równania $$x(x-3)(x+2)=0$$?"
        choices={[
          { label: "x = 0,\\ x = 3,\\ x = -2", value: "a" },
          { label: "x = 0,\\ x = 3,\\ x = 2", value: "b" },
          { label: "x = 0,\\ x = -3,\\ x = 2", value: "c" },
          { label: "x = 0,\\ x = -3,\\ x = -2", value: "d" },
        ]}
        correctAnswer="a"
        explanation="Rozwiązania: $$x = 0$$ (pierwszy czynnik), $$x - 3 = 0 \implies x = 3$$, $$x + 2 = 0 \implies x = -2$$."
        onComplete={() => handleStageComplete(2)}
      />
    )}

    {/* ETAP 3: Obliczenie sumy rozwiązań */}
    {completedStages.includes(2) && (
      <ChoiceQuestion
        question="Jaka jest suma wszystkich rozwiązań równania $$x(x-3)(x+2)=0$$?"
        choices={[
          { label: "0", value: "a" },
          { label: "1", value: "b" },
          { label: "2", value: "c" },
          { label: "3", value: "d" },
        ]}
        correctAnswer="b"
        explanation="Suma: $$0 + 3 + (-2) = 1$$."
        onComplete={() => handleStageComplete(3)}
      />
    )}

    {/* NOTATKI KOŃCOWE */}
    {completedStages.includes(3) && (
      <StudentNotes
        equation="x(x-3)(x+2)=0"
        steps={[
          { step: "x = 0 \\qquad x-3 = 0 \\implies x = 3 \\qquad x+2 = 0 \\implies x = -2" },
          { step: "\\text{Suma: } 0 + 3 + (-2) = 1" }
        ]}
        solutions={[
          "1"
        ]}
      />
    )}
  </div>
</div>
  );
};

export default Page;
