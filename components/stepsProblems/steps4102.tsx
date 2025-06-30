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
          title="Równanie iloczynowe – liczba rozwiązań rzeczywistych"
          description="Ustal, ile dokładnie rozwiązań rzeczywistych ma poniższe równanie:"
          equation="(x^2 - 27)(x^2 + 16) = 0"
        />

        {/* ETAP 1: Zasada iloczynu równego zero */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zastosuj zasadę iloczynu równego zero: iloczyn jest równy zero wtedy i tylko wtedy, gdy co najmniej jeden z jego czynników jest równy zero.
            </StepDescription>
            <ChoiceQuestion
              question="Które równania należy rozważyć, aby rozwiązać zadanie?"
              choices={[
                { label: "x - 27 = 0 \\text{ lub  } x + 16 = 0", value: "a" },
                { label: "\\text{Gdy } x^2 + 27 = 0\\text{ lub } x^2 - 16 = 0", value: "b" },
                { label: "\\text{Gdy }x^2 - 27 = 0 \\text{ lub } x^2 + 16 = 0", value: "c" },
                { label: "\\text{ Tylko dla } x = 0", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Zgodnie z zasadą iloczynu równego zero, całe wyrażenie jest równe zero, gdy jeden z czynników jest zerem. Należy więc rozważyć przypadki: $$x^2-27=0$$ lub $$x^2+16=0$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Rozwiązanie pierwszego czynnika */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozwiąż pierwsze równanie <InlineMath math="x^2 - 27 = 0"/> i znajdź jego pierwiastki rzeczywiste.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie rozwiązania rzeczywiste ma równanie $$x^2 - 27 = 0$$?"
              choices={[
                { label: "x = 27", value: "a" },
                { label: "x = \\sqrt{27}, x = -\\sqrt{27}", value: "b" },
                { label: "\\text{Brak rozwiązań rzeczywistych}", value: "c" },
                { label: "x = \\sqrt{27}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Przekształcamy równanie do $$x^2 = 27$$. Rozwiązaniami są $$x = \sqrt{27}$$ oraz $$x = -\sqrt{27}$$. Mamy więc dwa rozwiązania rzeczywiste."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Rozwiązanie drugiego czynnika */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Teraz przeanalizuj drugie równanie <InlineMath math="x^2 + 16 = 0"/>. Czy ma ono rozwiązania w zbiorze liczb rzeczywistych?
            </StepDescription>
            <ChoiceQuestion
              question="Ile rozwiązań rzeczywistych ma równanie $$x^2 + 16 = 0$$?"
              choices={[
                { label: "\\text{Cztery rozwiązania rzeczywiste}", value: "a" },
                { label: "\\text{Jedno rozwiązanie rzeczywiste}", value: "b" },
                { label: "\\text{Dwa rozwiązania rzeczywiste}", value: "c" },
                { label: "\\text{Brak rozwiązań rzeczywistych}", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Przekształcamy równanie do $$x^2 = -16$$. Równanie to nie ma rozwiązań w zbiorze liczb rzeczywistych, ponieważ kwadrat dowolnej liczby rzeczywistej nie może być ujemny."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Podsumowanie liczby rozwiązań */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Zbierz wszystkie unikalne rozwiązania rzeczywiste z obu przypadków i policz, ile ich jest.
            </StepDescription>
            <ChoiceQuestion
              question="Ile wszystkich rozwiązań rzeczywistych ma równanie $$(x^2 - 27)(x^2 + 16) = 0$$?"
              choices={[
                { label: "\\text{Jedno}", value: "a" },
                { label: "\\text{Dwa}", value: "b" },
                { label: "\\text{Trzy}", value: "c" },
                { label: "\\text{Cztery}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Pierwszy czynnik dał dwa rozwiązania rzeczywiste. Drugi czynnik nie dał żadnych rozwiązań rzeczywistych. W sumie mamy więc dwa rozwiązania rzeczywiste: $$x = \sqrt{27}$$ oraz $$x = -\sqrt{27}$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="(x^2 - 27)(x^2 + 16) = 0"
            steps={[
              { step: "\\text{1. Analiza czynnika: } x^2 - 27 = 0 \\implies x^2 = 27 \\implies x = \\pm\\sqrt{27} \\quad (\\text{dwa rozwiązania})" },
              { step: "\\text{2. Analiza czynnika: } x^2 + 16 = 0 \\implies x^2 = -16 \\quad (\\text{brak rozwiązań rzeczywistych})" }
            ]}
            solutions={[
              "\\text{Łącznie istnieją dwa rozwiązania rzeczywiste.}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;