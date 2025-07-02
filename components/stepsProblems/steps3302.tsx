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
          title="Suma wyrazów ciągu - znajdź a₃"
          description="Suma $$n$$ początkowych wyrazów ciągu $$(a_n)$$, określonego dla każdej liczby naturalnej $$n \geq 1$$, wyraża się wzorem $$S_n = n^2 + 2n$$. Oblicz trzeci wyraz tego ciągu."
        />

        {/* ETAP 1: Zależność a_n od S_n */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zastanów się, jak można obliczyć dowolny wyraz ciągu <InlineMath math="a_n"/>, znając jedynie wzór na sumę <InlineMath math="S_n"/>. Pomyśl o różnicy między sumą <InlineMath math="S_3"/> a <InlineMath math="S_2"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wyrazić $$a_3$$ za pomocą sum $$S_n$$?"
              choices={[
                { label: "a_3 = S_2 - S_1", value: "a" },
                { label: "a_3 = S_3 + S_2", value: "b" },
                { label: "a_3 = S_3 - S_2", value: "c" },
                { label: "a_3 = S_3", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Dowolny wyraz ciągu (dla $$n>1$$) można wyznaczyć, odejmując od sumy $$n$$ wyrazów sumę $$n-1$$ wyrazów: $$a_n = S_n - S_{n-1}$$. Zatem dla $$n=3$$ mamy $$a_3 = S_3 - S_2$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Obliczenie S_3 */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Oblicz sumę trzech pierwszych wyrazów ciągu (<InlineMath math="S_3"/>), korzystając z podanego wzoru.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz $$S_3$$ ze wzoru $$S_n = n^2 + 2n$$."
              choices={[
                { label: "S_3 = 9 + 3 = 12", value: "a" },
                { label: "S_3 = 6 + 6 = 12", value: "b" },
                { label: "S_3 = 6 + 3 = 9", value: "c" },
                { label: "S_3 = 9 + 6 = 15", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Podstawiamy $$n=3$$ do wzoru: $$S_3 = 3^2 + 2 \cdot 3 = 9 + 6 = 15$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Obliczenie S_2 */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Teraz oblicz sumę dwóch pierwszych wyrazów ciągu (<InlineMath math="S_2"/>).
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz $$S_2$$ ze wzoru $$S_n = n^2 + 2n$$."
              choices={[
                { label: "S_2 = 2 + 2 = 4", value: "a" },
                { label: "S_2 = 2 + 4 = 6", value: "b" },
                { label: "S_2 = 4 + 4 = 8", value: "c" },
                { label: "S_2 = 4 + 2 = 6", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$n=2$$ do wzoru: $$S_2 = 2^2 + 2 \cdot 2 = 4 + 4 = 8$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Obliczenie a_3 */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Mając wartości <InlineMath math="S_3"/> i <InlineMath math="S_2"/>, oblicz wartość trzeciego wyrazu, <InlineMath math="a_3"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz $$a_3$$ na podstawie poprzednich kroków."
              choices={[
                { label: "a_3 = 15 - 8 = 7", value: "a" },
                { label: "a_3 = 8 - 7 = 1", value: "b" },
                { label: "a_3 = 8 + 7 = 15", value: "c" },
                { label: "a_3 = 15 - 7 = 8", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Zgodnie z ustaloną zależnością: $$a_3 = S_3 - S_2 = 15 - 8 = 7$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="S_n = n^2 + 2n"
            steps={[
              { step: "\\text{Kluczowa zależność: } a_3 = S_3 - S_2" },
              { step: "\\text{Obliczenie } S_3: S_3 = 3^2 + 2(3) = 15" },
              { step: "\\text{Obliczenie } S_2: S_2 = 2^2 + 2(2) = 8" },
              { step: "\\text{Wynik: } a_3 = 15 - 8 = 7" }
            ]}
            solutions={[
              "\\text{Trzeci wyraz ciągu jest równy 7.}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;