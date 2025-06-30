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
          title="Iloraz ciągu geometrycznego"
          description="Dany jest ciąg geometryczny $$(a_n)$$, określony dla $$n \geq 1$$. Wszystkie wyrazy tego ciągu są dodatnie i spełniony jest warunek $$\frac{a_5}{a_3} = \frac{1}{9}$$. Oblicz iloraz $$q$$ tego ciągu."
        />

        {/* ETAP 1: Wyrażenie a_5 i a_3 przez a_1 i q */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zapisz piąty i trzeci wyraz ciągu za pomocą <InlineMath math="a_1"/> oraz <InlineMath math="q"/>, korzystając ze wzoru ogólnego.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wyrażasz $$a_5$$ i $$a_3$$ przez $$a_1$$ i $$q$$?"
              choices={[
                { label: "a_5 = a_1 q^4, a_3 = a_1 q^2", value: "a" },
                { label: "a_5 = a_1 q^5, a_3 = a_1 q^3", value: "b" },
                { label: "a_5 = a_1 q^2, a_3 = a_1 q^4", value: "c" },
                { label: "a_5 = a_1 q^3, a_3 = a_1 q^5", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Ogólny wyraz ciągu geometrycznego to $$a_n = a_1 q^{n-1}$$. Zatem $$a_5 = a_1 q^4$$ oraz $$a_3 = a_1 q^2$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Uproszczenie równania */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw zapisane wzory do podanego warunku <InlineMath math="\frac{a_5}{a_3} = \frac{1}{9}"/> i uprość wyrażenie.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie otrzymasz równanie po podstawieniu do warunku?"
              choices={[
                { label: "q^3 = \\frac{1}{9}", value: "a" },
                { label: "q^2 = 9", value: "b" },
                { label: "q = \\frac{1}{9}", value: "c" },
                { label: "q^2 = \\frac{1}{9}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="$$\frac{a_5}{a_3} = \frac{a_1 q^4}{a_1 q^2} = q^2$$. Zatem, $$q^2 = \frac{1}{9}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wyznaczenie q */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż otrzymane równanie, pamiętając, że wszystkie wyrazy ciągu są dodatnie.
            </StepDescription>
            <ChoiceQuestion
              question="Wszystkie wyrazy ciągu są dodatnie. Ile wynosi $$q$$?"
              choices={[
                { label: "q = \\frac{1}{3}", value: "a" },
                { label: "q = - \\frac{1}{3}", value: "b" },
                { label: "q = 3", value: "c" },
                { label: "q = -3", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Równanie $$q^2 = \frac{1}{9}$$ ma dwa rozwiązania: $$q = \frac{1}{3}$$ lub $$q = -\frac{1}{3}$$. Ponieważ wszystkie wyrazy ciągu są dodatnie, iloraz $$q$$ musi być dodatni. Zatem $$q = \frac{1}{3}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="\frac{a_5}{a_3} = \frac{1}{9}"
            steps={[
              { step: "a_5 = a_1 q^4, \\quad a_3 = a_1 q^2" },
              { step: "\\frac{a_1 q^4}{a_1 q^2} = q^2" },
              { step: "q^2 =  \\frac{1}{9}" },
              { step: "\\text{Ciąg ma wyrazy dodatnie} \\implies q > 0" },
              { step: "q =  \\frac{1}{3}" },
            ]}
            solutions={[
              "\\text{Iloraz ciągu jest równy }q = \\dfrac{1}{3}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;