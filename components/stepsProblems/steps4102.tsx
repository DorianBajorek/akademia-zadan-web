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
      Równanie iloczynowe – liczba rozwiązań rzeczywistych
    </h2>
    <p className="text-lg text-gray-800 mt-4">
      Równanie <InlineMath math="(x^2 - 27)(x^2 + 16) = 0" /> ma dokładnie:
    </p>

    {/* Odpowiedzi zamknięte na początku */}
    <div className="mt-8 space-y-3 text-lg text-gray-800">
      <div>
        <span className="font-bold">A.</span> jedno rozwiązanie rzeczywiste.
      </div>
      <div>
        <span className="font-bold">B.</span> dwa rozwiązania rzeczywiste.
      </div>
      <div>
        <span className="font-bold">C.</span> trzy rozwiązania rzeczywiste.
      </div>
      <div>
        <span className="font-bold">D.</span> cztery rozwiązania rzeczywiste.
      </div>
    </div>

    {/* ETAP 1: Kiedy iloczyn jest zerem? */}
    {(completedStages.includes(1) || completedStages.length === 0) && (
      <ChoiceQuestion
        question="Dla jakich wartości $$x$$ iloczyn $$(x^2-27)(x^2+16)=0$$ jest spełniony?"
        choices={[
          { label: "\\text{Gdy }x^2 - 27 = 0 \\text{ lub } x^2 + 16 = 0", value: "a" },
          { label: "\\text{Gdy } x^2 + 27 = 0\\text{ lub } x^2 - 16 = 0", value: "b" },
          { label: "x - 27 = 0 \\text{ lub  } x + 16 = 0", value: "c" },
          { label: "\\text{ Tylko dla } x = 0", value: "d" },
        ]}
        correctAnswer="a"
        explanation="Iloczyn jest zerem, gdy jeden z czynników jest zerem: $$x^2-27=0$$ lub $$x^2+16=0$$."
        onComplete={() => handleStageComplete(1)}
      />
    )}

    {/* ETAP 2: Rozwiązania czynnika x^2 - 27 = 0 */}
    {completedStages.includes(1) && (
      <ChoiceQuestion
        question="Jakie rozwiązania rzeczywistych ma równanie $$x^2 - 27 = 0$$?"
        choices={[
          { label: "x = \\sqrt{27}, x = -\\sqrt{27}", value: "a" },
          { label: "x = 27", value: "b" },
          { label: "\\text{Brak rozwiązań rzeczywistych}", value: "c" },
          { label: "x = \\sqrt{27}", value: "d" }
        ]}
        correctAnswer="a"
        explanation="Rozwiązujemy $$x^2 = 27 \implies x = \pm \sqrt{27}$$."
        onComplete={() => handleStageComplete(2)}
      />
    )}

    {/* ETAP 3: Rozwiązania czynnika x^2 + 16 = 0 */}
    {completedStages.includes(2) && (
      <ChoiceQuestion
        question="Ile rozwiązań rzeczywistych ma równanie $x^2 + 16 = 0$?"
        choices={[
          { label: "\\text{Brak rozwiązań rzeczywistych}", value: "a" },
          { label: "\\text{Jedno rozwiązanie rzeczywiste}", value: "b" },
          { label: "\\text{Dwa rozwiązania rzeczywiste}", value: "c" },
          { label: "\\text{Cztery rozwiązania rzeczywiste}", value: "d" }
        ]}
        correctAnswer="a"
        explanation="Równanie $$x^2 = -16$$ nie ma rozwiązań rzeczywistych, bo kwadrat liczby rzeczywistej nie może być ujemny."
        onComplete={() => handleStageComplete(3)}
      />
    )}

    {/* ETAP 4: Ile jest wszystkich rozwiązań rzeczywistych */}
    {completedStages.includes(3) && (
      <ChoiceQuestion
        question="Ile wszystkich rozwiązań rzeczywistych ma równanie $$(x^2 - 27)(x^2 + 16) = 0$$?"
        choices={[
          { label: "\\text{Jedno}", value: "a" },
          { label: "\\text{Dwa}", value: "b" },
          { label: "\\text{Trzy}", value: "c" },
          { label: "\\text{Cztery}", value: "d" },
        ]}
        correctAnswer="b"
        explanation="Są dwa rozwiązania rzeczywiste: $$x = \sqrt{27}$$ oraz $$x = -\sqrt{27}$$."
        onComplete={() => handleStageComplete(4)}
      />
    )}

    {/* NOTATKI KOŃCOWE */}
    {completedStages.includes(4) && (
      <StudentNotes
        equation="(x^2 - 27)(x^2 + 16) = 0"
        steps={[
          { step: "x^2 - 27 = 0 \\implies x = \\pm\\sqrt{27}" },
          { step: "x^2 + 16 = 0 \\implies x^2 = -16 \\to \\text{brak rozwiązań rzeczywistych}" }
        ]}
        solutions={[
          "\\text{Dwa rozwiązania rzeczywiste: } x = \\sqrt{27}, \\ x = -\\sqrt{27}"
        ]}
      />
    )}
  </div>
</div>
  );
};

export default Page;
