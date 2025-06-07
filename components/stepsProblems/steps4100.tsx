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
      Równanie iloczynowe – liczba rozwiązań
    </h2>
    <p className="text-lg text-gray-800 mt-4">
      Równanie <InlineMath math="2x(x + 3)(x^2 + 25) = 0" /> w zbiorze liczb rzeczywistych ma dokładnie:
    </p>

    <div className="mt-8 space-y-3 text-lg text-gray-800">
      <div>
        <span className="font-bold">A.</span> dwa rozwiązania: <InlineMath math="(-3)" /> oraz <InlineMath math="0" />.
      </div>
      <div>
        <span className="font-bold">B.</span> dwa rozwiązania: <InlineMath math="(-3)" /> oraz <InlineMath math="2" />.
      </div>
      <div>
        <span className="font-bold">C.</span> trzy rozwiązania: <InlineMath math="(-5)" />, <InlineMath math="(-3)" /> oraz <InlineMath math="0" />.
      </div>
      <div>
        <span className="font-bold">D.</span> cztery rozwiązania: <InlineMath math="(-5)" />, <InlineMath math="(-3)" />, <InlineMath math="0" /> oraz <InlineMath math="5" />.
      </div>
    </div>
        {/* ETAP 1: Rozpisz iloczyn na czynniki równe zero */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie czynniki muszą być równe zero, aby równanie było spełnione?"
            choices={[
              { label: "2x = 0, x + 3 = 0, x^2 + 25 = 0", value: "a" },
              { label: "2x = 0, x + 25 = 0, x^2 + 3 = 0", value: "b" },
              { label: "2x = 0, x + 3 = 0, x^2 - 25 = 0", value: "c" },
              { label: "2x = 0, x^2 + 3 = 0, x^2 + 25 = 0", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Iloczyn jest równy zero wtedy, gdy któryś z czynników jest zerem: $$2x = 0$$, $$x + 3 = 0$$ lub $$x^2 + 25 = 0$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Rozwiązanie równania 2x = 0 */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jakie jest rozwiązanie równania $2x = 0$?"
            choices={[
              { label: "x = 0", value: "a" },
              { label: "x = 2", value: "b" },
              { label: "x = -2", value: "c" },
              { label: "x = 1", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Dzielimy obustronnie przez $$2$$: $$x = 0$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Rozwiązanie równania x + 3 = 0 */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie jest rozwiązanie równania $$x + 3 = 0$$?"
            choices={[
              { label: "x = -3", value: "a" },
              { label: "x = 3", value: "b" },
              { label: "x = -2", value: "c" },
              { label: "x = 2", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Przenosimy 3 na drugą stronę: $$x = -3$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Czy równanie $x^2 + 25 = 0$ ma rozwiązania rzeczywiste? */}
        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Czy równanie $$x^2 + 25 = 0$$ ma rozwiązania rzeczywiste?"
            choices={[
              { label: "\\text{Nie ma rozwiązań rzeczywistych}", value: "a" },
              { label: "\\text{Ma dwa rozwiązania rzeczywiste}", value: "b" },
              { label: "\\text{Ma jedno rozwiązanie rzeczywiste}", value: "c" },
              { label: "\\text{Ma nieskończenie wiele rozwiązań}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Rozwiązujemy: $x^2 = -25$. Nie istnieją liczby rzeczywiste, których kwadrat jest ujemny."
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* ETAP 5: Wybierz poprawny opis rozwiązania */}
        {completedStages.includes(4) && (
          <ChoiceQuestion
            question="Ile rozwiązań rzeczywistych ma równanie $$2x(x+3)(x^2+25)=0$$ i jakie to są liczby?"
            choices={[
              { label: "\\text{Dwa rozwiązania: } (-3) \\text{ oraz } 0", value: "a" },
              { label: "\\text{Dwa rozwiązania: } (-3) \\text{ oraz } 2", value: "b" },
              { label: "\\text{Trzy rozwiązania: } (-5), (-3) \\text{ oraz } 0", value: "c" },
              { label: "\\text{Cztery rozwiązania: }(-5), (-3), 0 \\text{ oraz } 5", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Tylko $$x = 0$$ i $$x = -3$$ są rozwiązaniami rzeczywistymi."
            onComplete={() => handleStageComplete(5)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(5) && (
          <StudentNotes
            equation="2x(x+3)(x^2+25)=0"
            steps={[
              { step: "2x = 0 \\implies x = 0" },
              { step: "x+3 = 0 \\implies x = -3" },
              { step: "x^2+25=0 \\implies x^2 = -25 \\to \\text{brak rozwiązań rzeczywistych}" }
            ]}
            solutions={[
              "\\text{Dwa rozwiązania rzeczywiste: } x = 0, \\ x = -3"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
