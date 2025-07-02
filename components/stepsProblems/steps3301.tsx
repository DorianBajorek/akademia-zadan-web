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
          title="Rekurencyjny ciąg liczbowy - znajdź trzeci wyraz"
          description="Oblicz trzeci wyraz ciągu $$(a_n)$$ określonego rekurencyjnie dla każdej liczby naturalnej $$n \geq 1$$:"
          equation="\begin{cases} a_1 = 2 \\ a_{n+1} = 2a_n + 1 \end{cases}"
        />

        {/* ETAP 1: Obliczenie drugiego wyrazu */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Aby obliczyć trzeci wyraz, musimy najpierw znaleźć drugi. Użyj wzoru rekurencyjnego dla <InlineMath math="n=1"/>, aby obliczyć <InlineMath math="a_2"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz $$a_2$$ ze wzoru rekurencyjnego."
              choices={[
                { label: "a_2 = 2 \\cdot 1 + 2 = 4", value: "a" },
                { label: "a_2 = 2 \\cdot 2 + 1 = 5", value: "b" },
                { label: "a_2 = 2 + 2 -1 = 3", value: "c" },
                { label: "a_2 = 2 \\cdot 1 + 1 = 3", value: "d" },
              ]}
              correctAnswer="b"
              explanation={
                "Korzystamy ze wzoru: $$a_{n+1} = 2a_n + 1$$. <br/>" +
                "Dla $$n=1$$ mamy: $$a_2 = 2a_1 + 1$$. Podstawiając $$a_1 = 2$$, otrzymujemy: $$a_2 = 2 \\cdot 2 + 1 = 5$$."
              }
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Obliczenie trzeciego wyrazu */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Mając wartość <InlineMath math="a_2"/>, użyj ponownie wzoru rekurencyjnego, tym razem dla <InlineMath math="n=2"/>, aby obliczyć <InlineMath math="a_3"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz $$a_3$$ korzystając z faktu, że $$a_2 = 5$$."
              choices={[
                { label: "a_3 = 2 \\cdot 2 + 5 = 9", value: "a" },
                { label: "a_3 = 2 \\cdot 5 + 1 = 11", value: "b" },
                { label: "a_3 = 2 \\cdot 3 + 1 = 7", value: "c" },
                { label: "a_3 = 2 \\cdot 5 + 2 = 12", value: "d" },
              ]}
              correctAnswer="b"
              explanation={
                "Ponownie korzystamy z wzoru: $$a_{n+1} = 2a_n + 1$$.<br/>" +
                "Dla $$n=2$$ mamy: $$a_3 = 2a_2 + 1$$. Podstawiając $$a_2 = 5$$, otrzymujemy: $$a_3 = 2 \\cdot 5 + 1 = 11$$."
              }
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation={
              "\\begin{cases} a_1 = 2 \\\\ a_{n+1} = 2a_n + 1 \\end{cases}"
            }
            steps={[
              { step: "\\text{Krok 1: Obliczenie } a_2" },
              { step: "a_2 = 2a_1 + 1 = 2 \\cdot 2 + 1 = 5" },
              { step: "\\text{Krok 2: Obliczenie } a_3" },
              { step: "a_3 = 2a_2 + 1 = 2 \\cdot 5 + 1 = 11" }
            ]}
            solutions={[
              "\\text{Trzeci wyraz ciągu jest równy 11.}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;