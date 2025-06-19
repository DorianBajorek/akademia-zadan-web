"use client";

import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";
import { solveProblem } from "@/service";
import { useAuth } from "@/app/UserData";

const Page = () => {
  const { token } = useAuth();
  const taskId = "801";
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [problemSolved, setProblemSolved] = useState(false);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log("Problem marked as completed"))
        .catch((err) => console.error("Problem completion failed", err));
    }
  }, [problemSolved, taskId, token]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">

        <TaskDescription
          title="Odejmowanie ułamków"
          description="Wykonaj odejmowanie: $$\frac{3}{5} - \frac{1}{2}$$"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Znajdź najmniejszy wspólny mianownik dla  <InlineMath math="\frac{3}{5}"/> i <InlineMath math="\frac{1}{2}"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Wybierz najmniejszą liczbę, która dzieli się przez oba mianowniki $$5$$ i $$2$$:"
              choices={[
                { label: "5", value: "a" },
                { label: "10", value: "b" },
                { label: "15", value: "c" },
                { label: "20", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Najmniejszy wspólny mianownik to $$10$$, ponieważ jest to najmniejsza liczba, która dzieli się przez oba stare mianowniki $$5$$ i $$2$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozszerz oba ułamki do wspólnego mianownika <InlineMath math="10"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Jak prawidłowo rozszerzyć ułamki do mianownika $$10$$?"
              choices={[
                { label: "\\frac{3}{5} = \\frac{6}{10}, \\frac{1}{2} = \\frac{5}{10}", value: "a" },
                { label: "\\frac{3}{5} = \\frac{3}{10}, \\frac{1}{2} = \\frac{1}{10}", value: "b" },
                { label: "\\frac{3}{5} = \\frac{5}{10}, \\frac{1}{2} = \\frac{6}{10}", value: "c" },
                { label: "\\frac{3}{5} = \\frac{30}{50}, \\frac{1}{2} = \\frac{10}{20}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Aby rozszerzyć ułamki: <br><br>
              $$\frac{3}{5} = \frac{3 \cdot 2}{5 \cdot 2} = \frac{6}{10}$$ <br><br>
              $$\frac{1}{2} = \frac{1 \cdot 5}{2 \cdot 5} = \frac{5}{10}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Odejmij rozszerzone ułamki.
            </StepDescription>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{6}{10} - \frac{5}{10}$$?"
              choices={[
                { label: "\\frac{1}{10}", value: "a" },
                { label: "\\frac{11}{10}", value: "b" },
                { label: "\\frac{1}{0}", value: "c" },
                { label: "\\frac{5}{10}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Odejmujemy liczniki, mianownik zostaje: $$\frac{6}{10} - \frac{5}{10} = \frac{1}{10}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Sprawdź, czy wynik można uprościć.
            </StepDescription>
            <ChoiceQuestion
              question="Czy ułamek $$\frac{1}{10}$$ da się skrócić?"
              choices={[
                { label: "\\text{Tak, przez 5}", value: "a" },
                { label: "\\text{Tak, przez 10}", value: "b" },
                { label: "\\text{Nie, jest już w najprostszej postaci}", value: "c" },
                { label: "\\text{Tak, przez 2}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Ułamek $$\frac{1}{10}$$ jest już w najprostszej postaci – licznik i mianownik nie mają wspólnych dzielników oprócz $$1$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{3}{5} - \frac{1}{2}"
            steps={[
              {
                step: "\\frac{3}{5} - \\frac{1}{2} = \\frac{6}{10} - \\frac{5}{10} = \\frac{1}{10}",
              },
            ]}
            solutions={["\\frac{1}{10}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
