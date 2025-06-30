"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import StepDescription from "../StepDescription";
import TaskDescription from "../TaskDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie iloczynowe – iloczyn rozwiązań"
          description="Oblicz iloczyn wszystkich rozwiązań poniższego równania:"
          equation="2(x-4)(x^2-1)=0"
        />

        {/* ETAP 1: Znajdowanie miejsc zerowych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Równanie iloczynowe jest równe zero, gdy co najmniej jeden z jego czynników jest równy zero. Znajdź wszystkie wartości <InlineMath math="x"/>, które spełniają ten warunek.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie są miejsca zerowe równania $$2(x-4)(x^2-1)=0$$?"
              choices={[
                { label: "x = 2, x = -2, x = 4", value: "a" },
                { label: "x = 4, x = -1", value: "b" },
                { label: "x = 4, x = 1, x = -1", value: "c" },
                { label: "x = 0, x = 1, x = 4", value: "d" }
              ]}
              correctAnswer="c"
              explanation={
                "Aby iloczyn był równy zero, jeden z czynników musi być równy zero. Mamy więc dwa przypadki:<br/>" +
                "1) $$x-4=0 \\implies x=4$$<br/>" +
                "2) $$x^2-1=0 \\implies (x-1)(x+1)=0 \\implies x=1$$ lub $$x=-1$$."
              }
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Obliczanie iloczynu */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Mając wszystkie trzy rozwiązania, oblicz ich iloczyn.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest iloczyn wszystkich miejsc zerowych równania?"
              choices={[
                { label: "-8", value: "a" },
                { label: "4", value: "b" },
                { label: "8", value: "c" },
                { label: "-4", value: "d" }
              ]}
              correctAnswer="d"
              explanation={
                "Miejsca zerowe to $$4, 1, -1$$.<br/>Iloczyn tych rozwiązań wynosi: $$4 \\cdot 1 \\cdot (-1) = -4$$."
              }
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation="2(x-4)(x^2-1)=0"
            steps={[
              { step: "\\text{Przyrównujemy czynniki do zera:}" },
              { step: "x-4=0 \\implies x_1=4" },
              { step: "x^2-1=0 \\implies x_2=1, \\; x_3=-1" },
              { step: "\\text{Mnożymy rozwiązania:}" },
              { step: "x_1 \\cdot x_2 \\cdot x_3 = 4 \\cdot 1 \\cdot (-1) = -4" }
            ]}
            solutions={[
              "\\text{Iloczyn rozwiązań jest równy } -4."
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;