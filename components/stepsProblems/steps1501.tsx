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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Zadanie – miejsce zerowe funkcji kwadratowej
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Jednym z miejsc zerowych funkcji
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="f(x) = 2x^2 + bx - 2" />
        </p>
        <p className="text-lg text-gray-800 mt-4">
          jest liczba <InlineMath math="-2" />. Wyznacz współczynnik <InlineMath math="b" /> tej funkcji i jej drugie miejsce zerowe.
        </p>

        {/* ETAP 1 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie równanie otrzymamy po podstawieniu $$x = -2$$ do wzoru $$f(x) = 2x^2 + bx - 2$$ i przyrównaniu do zera?"
            choices={[
              { label: "0 = 2(-2)^2 + b \\cdot (-2) - 2", value: "a" },
              { label: "0 = 2(-2)^2 + b \\cdot 2 - 2", value: "b" },
              { label: "0 = 2(-2)^2 - b \\cdot 2 - 2", value: "c" },
              { label: "0 = 2 \\cdot 2^2 + b \\cdot 2 - 2", value: "d" }
            ]}
            correctAnswer="a"
            explanation={
              "Podstawiamy $$x = -2$$ do wzoru funkcji i przyrównujemy do zera:<br/>" +
              "$$0 = 2(-2)^2 + b \\cdot (-2) - 2$$"
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2 */}
        {completedStages.includes(1) && (
          <NumericQuestion
            question="Rozwiąż równanie $$0 = 2(-2)^2 + b \cdot (-2) - 2$$"
            correctAnswer="3"
            explanation={
              "Upraszczamy równanie:<br/>" +
              "$$0 = 2 \\cdot 4 + b \\cdot (-2) - 2$$<br/>" +
              "$$0 = 8 - 2b - 2$$<br/>" +
              "$$0 = 6 - 2b$$<br/>" +
              "$$2b = 6$$<br/>" +
              "$$b = 3$$"
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}
{completedStages.includes(2) && (
  <ChoiceQuestion
    question="Która z poniższych liczb jest drugim miejscem zerowym funkcji $$f(x) = 2x^2 + 3x - 2$$, jeśli jednym z miejsc zerowych jest $$x = -2$$?"
    choices={[
      { label: "-3", value: "a" },
      { label: "2", value: "b" },
      { label: "0.5", value: "c" },
      { label: "-1", value: "d" }
    ]}
    correctAnswer="c"
    explanation={
      "Szukamy miejsc zerowych równania:<br/>" +
      "$$2x^2 + 3x - 2 = 0$$<br/>" +
      "Podstawiamy do wzoru kwadratowego:<br/>" +
      "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$<br/>" +
      "Dla $$a = 2, b = 3, c = -2$$:<br/>" +
      "$$\\Delta = 3^2 - 4 \\cdot 2 \\cdot (-2) = 9 + 16 = 25$$<br/>" +
      "$$x_1 = \\frac{-3 - 5}{4} = -2$$<br/>" +
      "$$x_2 = \\frac{-3 + 5}{4} = 0.5$$"
    }
    onComplete={() => handleStageComplete(3)}
  />
)}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="f(x) = 2x^2 + bx - 2"
steps={[
  { step: "\\text{Wiadomo, że jednym z miejsc zerowych jest } x = -2." },
  { step: "\\text{Podstawiamy } x = -2 \\text{ do funkcji}:\\ f(x) = 2x^2 + bx - 2" },
  { step: "2 \\cdot (-2)^2 = 8" },
  { step: "b \\cdot (-2) = -2b" },
  { step: "8 - 2b - 2 = 0" },
  { step: "6 - 2b = 0" },
  { step: "-2b = -6 \\Rightarrow b = 3" },
  { step: "\\text{Drugie miejsce zerowe obliczamy z równania: } 2x^2 + 3x - 2 = 0" },
  { step: "\\Delta = 3^2 - 4 \\cdot 2 \\cdot (-2) = 9 + 16 = 25" },
  { step: "x_1 = \\frac{-3 - 5}{4} = -2" },
  { step: "x_2 = \\frac{-3 + 5}{4} = 0.5" },
]}
            solutions={[
              "b = 3",
              "\\text{Drugie miejsce zerowe: }x = 0.5"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
