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
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Miejsca zerowe funkcji kwadratowej
        </h2>
        <p className="text-lg text-gray-800">
          Funkcja kwadratowa <InlineMath math="f"/> jest określona wzorem <InlineMath math="f(x)=(x-2)^2-9"/>. 
          Jednym z jej miejsc zerowych jest liczba 5. Drugim miejscem zerowym funkcji <InlineMath math="f"/> jest liczba:
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Jaką postać ma podana funkcja kwadratowa?"
              choices={[
                { label: "\\text{Postać ogólna}", value: "a" },
                { label: "\\text{Postać kanoniczna}", value: "b" },
                { label: "\\text{Postać iloczynowa}", value: "c" },
                { label: "\\text{Postać mieszana}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Funkcja jest w postaci kanonicznej $$f(x) = (x-p)^2 + q$$ gdzie $$p=2$$, $$q=-9$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <ChoiceQuestion
              question="Jak wygląda postać iloczynowa funkcji f(x)?"
              choices={[
                { label: "f(x)=(x-5)(x+1)", value: "a" },
                { label: "f(x)=(x-2)(x-9)", value: "b" },
                { label: "f(x)=(x-5)(x+2)", value: "c" },
                { label: "f(x)=(x+5)(x-1)", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Przekształcamy: $$(x-2)^2-9 = (x-2-3)(x-2+3) = (x-5)(x+1)$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

                {completedStages.includes(2)  && (
          <ChoiceQuestion
            question="Jakie jest drugie miejsce zerowe funkcji, skoro wiemy że pierwsze to x=5?"
            choices={[
              { label: "x = 2", value: "a" },
              { label: "x = -1", value: "b" },
              { label: "x = 1", value: "c" },
              { label: "x = -5", value: "d" },
            ]}
            correctAnswer="b"
            explanation="Z postaci iloczynowej $$f(x)=(x-5)(x+1)$$ odczytujemy miejsca zerowe: $$x=5$$ i $$x=-1$$"
            onComplete={() => handleStageComplete(3)}
          />
        )}


        {completedStages.length === 3 && (
          <StudentNotes
            equation="f(x)=(x-2)^2-9"
            steps={[
              { step: "\\text{Przekształcenie do postaci iloczynowej:}" },
              { step: "(x-2)^2 - 9 = (x-2-3)(x-2+3)" },
              { step: "= (x-5)(x+1)" },
              { step: "\\text{Miejsca zerowe: } x_1=5, x_2=-1" },
            ]}
            solutions={["x = -1"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;