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
      Równanie iloczynowe – iloczyn rozwiązań
    </h2>
    <p className="text-lg text-gray-800 mt-4">
      Iloczyn wszystkich rozwiązań równania <InlineMath math="2(x-4)(x^2-1)=0" /> jest równy:
    </p>

    {/* Odpowiedzi zamknięte na początku */}
    <div className="mt-8 space-y-3 text-lg text-gray-800">
      <div>
        <span className="font-bold">A.</span> <InlineMath math="-8" />
      </div>
      <div>
        <span className="font-bold">B.</span> <InlineMath math="-4" />
      </div>
      <div>
        <span className="font-bold">C.</span> <InlineMath math="4" />
      </div>
      <div>
        <span className="font-bold">D.</span> <InlineMath math="8" />
      </div>
    </div>

    {/* ETAP 1: Rozpisanie iloczynu na czynniki */}
    {(completedStages.includes(1) || completedStages.length === 0) && (
      <ChoiceQuestion
        question="Jakie są miejsca zerowe równania $$2(x-4)(x^2-1)=0$$?"
        choices={[
          { label: "x = 4, x = 1, x = -1", value: "a" },
          { label: "x = 4, x = -1", value: "b" },
          { label: "x = 2, x = -2, x = 4", value: "c" },
          { label: "x = 0, x = 1, x = 4", value: "d" }
        ]}
        correctAnswer="a"
        explanation={
          "Równanie przyjmuje wartość zero, gdy $$x-4=0$$ lub $$x^2-1=0$$.<br/>" +
          "$$x-4=0\\implies x=4$$<br/>" +
          "$$x^2-1=0\\implies x=1$$ lub $$x=-1$$."
        }
        onComplete={() => handleStageComplete(1)}
      />
    )}

    {/* ETAP 3: Wyznaczenie iloczynu wszystkich rozwiązań */}
    {completedStages.includes(1) && (
      <ChoiceQuestion
        question="Oblicz iloczyn wszystkich miejsc zerowych równania."
        choices={[
          { label: "-8", value: "a" },
          { label: "-4", value: "b" },
          { label: "4", value: "c" },
          { label: "8", value: "d" }
        ]}
        correctAnswer="b"
        explanation={
          "Iloczyn rozwiązań: $$4 \\cdot 1 \\cdot (-1) = -4$$"
        }
        onComplete={() => handleStageComplete(2)}
      />
    )}

    {/* NOTATKI KOŃCOWE */}
    {completedStages.includes(2) && (
      <StudentNotes
        equation="2(x-4)(x^2-1)=0"
        steps={[
          { step: "2(x-4)(x^2-1)=0 \\implies x-4=0 \\text{ lub } x^2-1=0" },
          { step: "x-4=0 \\implies x=4" },
          { step: "x^2-1=0 \\implies x=1 \\text{ lub } x=-1" },
          { step: "\\text{Miejsca zerowe: }x=4,\\ 1,\\ -1" },
          { step: "\\text{Iloczyn rozwiązań: }4 \\cdot 1 \\cdot (-1) = -4" }
        ]}
        solutions={[
          "\\text{Odpowiedź: } -4"
        ]}
      />
    )}
  </div>
</div>
  );
};

export default Page;
