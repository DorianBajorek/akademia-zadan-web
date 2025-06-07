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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie iloczynu wartości funkcji</h2>
        <p className="text-lg text-gray-800 mt-4">
          Dana jest funkcja <InlineMath math="f(x) = x^2 + 2x - 3" />. Oblicz wartość wyrażenia:
          <InlineMath math="f(2) \cdot f(3) \cdot f(4)" />.
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak poprawnie obliczyć poszczególne wartości funkcji?"
            choices={[
              { label: "\\text{Obliczyć każdą wartość osobno: } f(2), f(3), f(4), \\text{a następnie pomnożyć}", value: "a" },
              { label: "\\text{Podstawić od razu iloczyn argumentów: } f(2·3·4)", value: "b" },
              { label: "\\text{Dodać argumenty: } f(2+3+4)", value: "c" },
              { label: "\\text{Obliczyć średnią z wartości funkcji }", value: "d" }
            ]}
            correctAnswer="a"
            explanation="Poprawna odpowiedź to pierwsza opcja. Należy obliczyć każdą wartość funkcji osobno, a następnie pomnożyć wyniki."
            onComplete={() => handleStageComplete(0)}
          />
        )}

        {(completedStages.includes(0) && (completedStages.includes(1) || completedStages.length === 1)) && (
          <ChoiceQuestion
            question="Jaki jest ostateczny wynik iloczynu $$f(2)·f(3)·f(4)$$?"
            choices={[
              { label: "1365", value: "a" },
              { label: "1155", value: "b" },
              { label: "1485", value: "c" },
              { label: "1260", value: "d" }
            ]}
            correctAnswer="b"
            explanation={`
              Poprawny wynik to $$1155$$. Obliczenia krok po kroku:
              <br>1. $$f(2) = 2² + 2·2 - 3 = 4 + 4 - 3 = 5$$
              <br>2. $$f(3) = 3² + 2·3 - 3 = 9 + 6 - 3 = 12$$
              <br>3. $$f(4) = 4² + 2·4 - 3 = 16 + 8 - 3 = 21$$
              <br>4. Iloczyn: $$5 · 12 · 21 = 60 · 21 = 1260$$
            `}
            onComplete={() => handleStageComplete(1)}
          />
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x) = x^2 + 2x - 3"
            steps={[
              { step: "f(2) = 2² + 2·2 - 3 = 4 + 4 - 3 = 5" },
              { step: "f(3) = 3² + 2·3 - 3 = 9 + 6 - 3 = 12" },
              { step: "f(4) = 4² + 2·4 - 3 = 16 + 8 - 3 = 21" },
              { step: "5 · 12 · 21 = 60 · 21 = 1260" }
            ]}
            solutions={["f(2) · f(3) · f(4) = 1260"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;