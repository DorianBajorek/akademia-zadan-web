"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
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
          Rozwiązanie trójmianu kwadratowego
        </h2>
        <p className="text-lg text-gray-800">
          Pierwiastkami trójmianu kwadratowego <InlineMath math="f"/> o współczynniku <InlineMath math="2"/> przy najwyższej potędze są liczby <InlineMath math="x_1 = 1 "/>, <InlineMath math="x_2 = -2"/>. Oblicz <InlineMath math="f(5)"/>.
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zapisz wzór funkcji kwadratowej <InlineMath math="f(x)"/>  w postaci iloczynowej.
            </p>
            <ChoiceQuestion
              question="Jak wygląda wzór funkcji $$f(x)$$ w postaci iloczynowej?"
              choices={[
                { label: "f(x) = (x + 1)(x + 2)", value: "a" },
                { label: "f(x) = 2(x + 1)(x - 2)", value: "b" },
                { label: "f(x) = 2(x - 1)(x + 2)", value: "c" },
                { label: "f(x) = 2(x - 1)(x - 2)", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Wzór funkcji kwadratowej w postaci iloczynowej to $$f(x) = a(x - x_1)(x - x_2)$$. Podstawiając $$a = 2$$, $$ x_1 = 1$$, $$ x_2 = -2$$, otrzymujemy $$f(x) = 2(x - 1)(x + 2)$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-iloczynowa.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz <InlineMath math="f(5)"/>
            </p>
            <ChoiceQuestion
              question="Podstaw $$x=5$$ do $$f(x) = 2(x - 1)(x + 2)$$"
              choices={[
                { label: "f(5) = 24", value: "a" },
                { label: "f(x) = 36", value: "b" },
                { label: "f(x) = 20", value: "c" },
                { label: "f(x) = 56", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Obliczamy $$f(5)=2(5-1)(x+2)=2 \\cdot 4 \\cdot 7=56$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/rozwijanie.png"
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="a=2, x_1=2, x_2=-1, f(5)=?"
            steps={[
              { step: "\\text{Wzór }: f(x) = 2(x-1)(x+2)" },
              { step: "\\text{Podstaw } x = 5 : f(5)=2(5-1)(x+2)=2 \\cdot 4 \\cdot 7=56" },
            ]}
            solutions={["f(5) = 56"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;