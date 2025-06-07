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
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Zadanie – równanie osi symetrii funkcji kwadratowej
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Najmniejsza wartość funkcji
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="f(x) = 2(x - p)^2 + p^2 + 3" />
        </p>
        <p className="text-lg text-gray-800 mt-4">
          jest równa <InlineMath math="7" />. Wyznacz równanie osi symetrii tej funkcji.
        </p>

        {/* ETAP 1: Jaka jest najmniejsza wartość funkcji? */}
        {(completedStages.includes(1) || completedStages.length === 0)  && (
          <ChoiceQuestion
            question="Najmniejsza wartość funkcji kwadratowej $$f(x) = 2(x-p)^2 + p^2 + 3$$ to:"
            choices={[
              { label: "p^2 + 3", value: "a" },
              { label: "2p^2 + 3", value: "b" },
              { label: "2 + p^2", value: "c" },
              { label: "3", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
            "Wierzchołek funkcji kwadratowej $$f(x) = 2(x-p)^2 + p^2 + 3$$ ma współrzędne $$(p, p^2 + 3)$$.<br/>" +
            "Najmniejsza wartość funkcji jest osiągana właśnie w wierzchołku, czyli wynosi $$p^2 + 3$$."
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

{completedStages.includes(1) && (
  <ChoiceQuestion
    question="Z równania $$p^2 + 3 = 7$$ wynika, że:"
    choices={[
      { label: "p = 2, p=-2", value: "a" },
      { label: "p = -2, p=4", value: "b" },
      { label: "p = 4, p=-2", value: "c" },
      { label: "p = -4, p=2", value: "d" },
    ]}
    correctAnswer="a"
    explanation={
      "Rozwiązujemy równanie:<br/>" +
      "$$p^2 + 3 = 7$$<br/>" +
      "$$p^2 = 4$$<br/>" +
      "$$p = 2$$ lub $$p = -2$$."
    }
    onComplete={() => handleStageComplete(2)}
  />
)}

        {/* ETAP 3: Wybór poprawnej osi symetrii */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie jest równanie osi symetrii tej funkcji dla $$p=2$$?"
            choices={[
              { label: "x = -2", value: "a" },
              { label: "x = 2", value: "b" },
              { label: "y = 2", value: "c" },
              { label: "x = 0", value: "d" },
            ]}
            correctAnswer="b"
            explanation={
              "Funkcja jest w postaci kanonicznej: $$f(x) = 2(x-p)^2 + p^2+3$$<br/>" +
              "Osią symetrii jest prosta $$x = p$$.<br/>" +
              "Dla $$p = 2$$ oś symetrii to $$x=2$$"
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

                {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Jakie jest równanie osi symetrii tej funkcji dla $$p=-2$$?"
            choices={[
              { label: "x = -2", value: "a" },
              { label: "x = 2", value: "b" },
              { label: "y = 2", value: "c" },
              { label: "x = 0", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Funkcja jest w postaci kanonicznej: $$f(x) = 2(x-p)^2 + p^2+3$$<br/>" +
              "Osią symetrii jest prosta $$x = -p$$.<br/>" +
              "Dla $$p = -2$$ oś symetrii to $$x=-2$$"
            }
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {/* NOTATKI */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="f(x) = 2(x - p)^2 + p^2 + 3"
steps={[
  { step: "\\text{Wierzchołek  } f(x) = 2(x-p)^2 + p^2 + 3 \\text{ ma współrzędne } (p,\\, p^2 + 3)." },
  { step: "\\text{Najmniejsza wartość funkcji to wartość w wierzchołku } q = p^2 + 3." },
  { step: "\\text{Wiemy, że } p^2 + 3 = 7." },
  { step: "p^2 = 4" },
  { step: "p = 2 \\text{ lub } p = -2" },
  { step: "\\text{Osią symetrii funkcji kwadratowej jest prosta } x = p." },
  { step: "\\text{Zatem równaniem osi symetrii może być } x = 2 \\text{ lub } x = -2." },
]}
            solutions={[
              "\\text{ Oś symetrii: }x = 2  \\text{ lub } x=-2",
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
