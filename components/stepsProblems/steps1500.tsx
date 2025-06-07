"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Miejsce zerowe funkcji kwadratowej
        </h2>
        <p className="text-lg text-gray-800">
          Jednym z miejsc zerowych funkcji kwadratowej  <InlineMath math="f(x) = 3x^2 + 7x + c" />   jest liczba <InlineMath math="-\frac{7}{3}" />. Oblicz wartość
          współczynnika <InlineMath math="c" />.
        </p>


        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Podstawiamy dane do wzoru <InlineMath math="f(x) = 0" />.
            </p>
<ChoiceQuestion
  question="Ile wynosi $$f\left(-\frac{7}{3}\right)$$?"
  choices={[
    { label: "a) c + 10", value: "a" },
    { label: "b) c", value: "b" },
    { label: "c) c - 1", value: "c" },
    { label: "d) -c", value: "d" },
  ]}
  correctAnswer="b"
  explanation="Skoro liczba $$-\frac{7}{3}$$ jest miejscem zerowym funkcji, to:
    $$f\left(-\frac{7}{3}\right) = 0$$.
    Obliczając:
    $$f(x) = 3x^2 + 7x + c$$,
    podstawiamy:
    $$f\left(-\frac{7}{3}\right) = 3 \cdot \left(\frac{49}{9}\right) - \frac{147}{9} + c = 0 + c = c$$.
    Zatem wartość wyrażenia to $$c$$."
  onComplete={() => handleStageComplete(1)}
/>
  </>
)}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jeśli  <InlineMath math="f\left(-\frac{7}{3}\right)=c" /> i  <InlineMath math="f\left(-\frac{7}{3}\right)=0" />, to
            </p>
            <ChoiceQuestion
              question="Ile wynosi wartość współczynnika $$c$$?"
              choices={[
                { label: "c = 0", value: "a" },
                { label: "c = 1", value: "b" },
                { label: "c = -98", value: "c" },
                { label: "c = 98", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Skoro $$f\left(-\frac{7}{3}\right) = c$$ i $$f\left(-\frac{7}{3}\right) = 0$$, to $$c=0$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <StudentNotes
            equation="f(x) = 3x^2 + 7x + c,f\left(-\frac{7}{3}\right) =0 "
steps={[
  { step: "\\text{Podstawiamy } x = -\\frac{7}{3} \\text{ do funkcji kwadratowej } : f(x) = 3x^2 + 7x + c" },
  { step: "3 \\cdot \\left(-\\frac{7}{3}\\right)^2 = \\frac{147}{9}" },
  { step: "7 \\cdot \\left(-\\frac{7}{3}\\right) = -\\frac{147}{9}" },
  { step: "\\frac{147}{9} - \\frac{147}{9} + c = 0" },
  { step: "0 + c = 0 \\Rightarrow c = 0" },
]}
solutions={["c = 0"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
