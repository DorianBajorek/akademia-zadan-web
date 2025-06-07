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
          Funkcja kwadratowa z parametrem
        </h2>
        <p className="text-lg text-gray-800">
          Dla jakiego parametru <InlineMath math="m"/> funkcja kwadratowa <InlineMath math="f(x)=2(x-2)\left(x-\frac{m+1}{3}\right)"/> ma dokładnie jedno miejsce zerowe?
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Kiedy funkcja kwadratowa ma dokładnie jedno miejsce zerowe?"
              choices={[
                { label: "\\text{Gdy współczynnik przy } x^2 \\text{ jest równy zero}", value: "a" },
                { label: "\\text{Gdy wyróżnik Δ jest większy od zera}", value: "b" },
                { label: "\\text{Gdy wyróżnik Δ jest równy zero}", value: "c" },
                { label: "\\text{Gdy funkcja jest liniowa}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Funkcja kwadratowa ma dokładnie jedno miejsce zerowe, gdy jej wyróżnik $$\Delta = 0$$ (jest to tzw. pierwiastek podwójny)."
              img="/steps-images/jednoMiejsceZerowe.png"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}


 {completedStages.includes(1) &&  (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zidentyfikuj miejsca zerowe funkcji
            </p>
            <ChoiceQuestion
              question="Jakie są miejsca zerowe tej funkcji?"
              choices={[
                { label: "x_1 = 2, x_2 = \\frac{m-1}{3}", value: "a" },
                { label: "x_1 = -2, x_2 = \\frac{m+1}{3}", value: "b" },
                { label: "x_1 = 2, x_2 = \\frac{m+1}{3}", value: "c" },
                { label: "x_1 = 2, x_2 = \\frac{m+1}{2}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Z postaci iloczynowej f(x)=2(x-2)(x-(m+1)/3) odczytujemy miejsca zerowe: x_1=2, x_2=(m+1)/3."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {completedStages.includes(2) && (
          <>
            <ChoiceQuestion
              question="Rozwiąż równanie $$2 = \frac{m+1}{3}$$"
              choices={[
                { label: "m = 1", value: "a" },
                { label: "m = 5", value: "b" },
                { label: "m = -7", value: "c" },
                { label: "m = 7", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Funkcja ma jedno miejsce zerowe gdy oba pierwiastki są równe, czyli gdy 2 = (m+1)/3. Rozwiązując: m+1 = 6 ⇒ m = 5."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="f(x)=2(x-2)(x-(m+1)/3)"
            steps={[
              { step: "\\text{Warunek na jedno miejsce zerowe: } x_1 = x_2" },
              { step: "2 = \\frac{m+1}{3}" },
              { step: "m + 1 = 6" },
              { step: "m = 5" },
            ]}
            solutions={["m = 5"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;