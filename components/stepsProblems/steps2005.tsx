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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Wyznaczanie współczynnika q
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Dana jest funkcja <InlineMath math="f(x) = -(x - 3)^2 + q" /> w postaci kanonicznej oraz punkt  <InlineMath math="A=(-1,-4)"/> należący do jej wykresu. Wyznacz współczynnik <InlineMath math="q" />.
        </p>


        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Podstawiamy współrzędne punktu $$A=(-1,-4)$$ do wzoru funkcji: $$f(-1) = -((-1) - 3)^2 + q$$. Ile to jest $$(-1 - 3)^2$$?"
            choices={[
              { label: "4", value: "a" },
              { label: "-4", value: "b" },
              { label: "16", value: "c" },
              { label: "-16", value: "d" }
            ]}
            correctAnswer="c"
            explanation="Poprawna odpowiedź to $$16$$, ponieważ $$(-1 - 3)^2 = (-4)^2 = 16$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Podstawiając do wzoru funkcji otrzymujemy równanie: $$-4 = -16 + q$$. Jakie jest rozwiązanie tego równania?"
            choices={[
              { label: "q = 12", value: "a" },
              { label: "q = -20", value: "b" },
              { label: "q = -12", value: "c" },
              { label: "q = 20", value: "d" }
            ]}
            correctAnswer="a"
            explanation="Dodajemy $$16$$ do obu stron: $$-4 + 16 = q \Rightarrow q = 12$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x) = -(x - 3)^2 + q,\; A = (-1, -4)"
            steps={[
              { step: "\\text{Podstawiamy punkt do wzoru: } f(-1) = -((-1) - 3)^2 + q = -16 + q" },
              { step: "\\text{Ponieważ } f(-1) = -4, \\text{ mamy: } -4 = -16 + q" },
              { step: "\\text{Dodajemy 16 do obu stron: } q = -4 + 16 = 12" }
            ]}
            solutions={["q = 12"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
