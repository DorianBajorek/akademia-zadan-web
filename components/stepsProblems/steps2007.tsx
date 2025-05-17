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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Wyznaczanie współczynników funkcji kwadratowej
        </h2>

        <p className="text-lg text-gray-800 mt-4">Dana jest funkcja kwadratowa <InlineMath math="f(x) = 2(x - p)^2 + q"/>. 
         Wiadomo, że liczba <InlineMath math="3" /> jest jedynym miejscem zerowym tej funkcji. Wyznacz <InlineMath math="p"/> i <InlineMath math="q"/>.</p>
        <p className="text-lg text-gray-800 text-center mt-2">
         
        </p>

        {/* STAGE 1 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jeśli $$x = 3$$ jest miejscem zerowym, to co wiemy o wartości $$f(3)$$?"
            choices={[
              { label: "f(3) = 0", value: "a" },
              { label: "f(3) = 3", value: "b" },
              { label: "f(3) = p", value: "c" },
              { label: "f(3) = q", value: "d" }
            ]}
            correctAnswer="a"
            explanation="Miejsce zerowe to taka wartość $$x$$, dla której $$f(x) = 0$$, więc $$f(3) = 0$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Ponieważ liczba $$3$$ jest JEDYNYM miejscem zerowym, to wierzchołek $$(p, q)$$ tej funkcji to:"
            choices={[
              { label: "(0, 3)", value: "a" },
              { label: "(3, 0)", value: "b" },
              { label: "(3, 3)", value: "c" },
              { label: "(0, 0)", value: "d" }
            ]}
            correctAnswer="b"
            explanation="W postaci kanonicznej wierzchołek to punkt $$(p, q)$$. Skoro $$3$$ to jedyne miejsce zerowe, to $$p = 3$$ i $$q = 0$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* STAGE 4: Final explanation */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation="f(x) = 2(x - p)^2 + q"
            steps={[
               { step:"\\text{ Wiadomo, że } f(3) = 0 \\text{ (bo 3 jest miejscem zerowym).} "},
               { step:"\\text{ Funkcja ma jedno miejsce zerowe } \\rightarrow  \\text{ jej wierzchołek to } (3, 0)."},
               { step:"\\text{ Zatem: } p = 3, q = 0.}"}
            ]}
            solutions={["p = 3", "q = 0"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
