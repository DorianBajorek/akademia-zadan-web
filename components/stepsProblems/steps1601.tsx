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
          Optymalizacja wyrażenia
        </h2>
        <p className="text-lg text-gray-800">
          Liczby rzeczywiste <InlineMath math="x" /> i <InlineMath math="z" /> spełniają warunek <InlineMath math="2x + z = 1" />. Wyznacz takie wartości <InlineMath math="x" /> i <InlineMath math="z" />, dla których wyrażenie <InlineMath math="x^2 + z^2 + 7xz" /> przyjmuje największą wartość. Podaj tę największą wartość.
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wyraź <InlineMath math="z" /> w zależności od <InlineMath math="x" />, korzystając z równania <InlineMath math="2x + z = 1" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie dla $$ z $$?"
              choices={[
                { label: "z = 1 - 2x", value: "a" },
                { label: "z = 1 + 2x", value: "b" },
                { label: "z = 2x - 1", value: "c" },
                { label: "z = x - 1", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z równania $$ 2x + z = 1 $$ wynika, że $$z = 1 - 2x $$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Podstaw <InlineMath math="z = 1 - 2x" /> do wyrażenia <InlineMath math="x^2 + z^2 + 7xz" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie po podstawieniu?"
              choices={[
                { label: "x^2 + (1 - 2x)^2 + 7x(1 - 2x)", value: "a" },
                { label: "x^2 + (1 + 2x)^2 + 7x(1 + 2x)", value: "b" },
                { label: "x^2 + (2x - 1)^2 + 7x(2x - 1)", value: "c" },
                { label: "x^2 + (x - 1)^2 + 7x(x - 1)", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Podstawiając $$ z = 1 - 2x$$, otrzymujemy $$ x^2 + (1 - 2x)^2 + 7x(1 - 2x)$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość wyrażenie <InlineMath math="x^2 + (1 - 2x)^2 + 7x(1 - 2x)" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczone wyrażenie?"
              choices={[
                { label: " -9x^2 +3x + 1 ", value: "a" },
                { label: "10x^2 - 14x + 1", value: "b" },
                { label: "8x^2 - 10x + 1", value: "c" },
                { label: "6x^2 - 8x + 1", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozwijamy $$(1 - 2x)^2 = 1 - 4x + 4x^2 $$ i $$ 7x(1 - 2x) = 7x - 14x^2 $$. Dodając do $$ x^2 $$, otrzymujemy $$ x^2 + 1 - 4x + 4x^2 + 7x - 14x^2 = -9x^2 +3x + 1 $$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}


{completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Znajdź wartość <InlineMath math="x" />, dla której wyrażenie <InlineMath math="-9x^2 +3x + 1" /> osiąga maksimum.
            </p>
            <ChoiceQuestion
              question="Wskaź $$x$$ dla którego wyrażenie osiąga największą wartość"
              choices={[
                { label: " x=-\\frac{1}{6} ", value: "a" },
                { label: "x=\\frac{1}{6}", value: "b" },
                { label: "x=-\\frac{1}{3}", value: "c" },
                { label: "x=\\frac{1}{3}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Wartość $$ x $$, dla której funkcja kwadratowa osiąga maksimum, to $$ x = -\frac{b}{2a} $$. Tutaj: $$ x = -\frac{-3}{2 \cdot  (-9)} = \frac{1}{6} $$."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wierzcholek_paraboli.png"
            />
          </>
        )}

{completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz największą wartość wyrażenia <InlineMath math="-9x^2 +3x + 1" />, gdy <InlineMath math="x = \frac{1}{6}" />.
            </p>
            <ChoiceQuestion
              question="Jaka jest największa wartość wyrażenia?"
              choices={[
                { label: " x=\\frac{3}{2} ", value: "a" },
                { label: "x=\\frac{7}{6}", value: "b" },
                { label: "x=\\frac{5}{4}", value: "c" },
                { label: "x=\\frac{25}{36}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$ x = \frac{1}{6} $$ do $$-9x^2 +3x + 1$$: $$  \frac{-9}{36} +\frac{3}{6} +1 = \frac{5}{4}$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}


        {completedStages.includes(5) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz <InlineMath math="z"/> jeśli <InlineMath math="x=\frac{1}{6}"/> i <InlineMath math="z=1-2x"/> 
            </p>
            <ChoiceQuestion
              question="Jaka jest największa wartość wyrażenia?"
              choices={[
                { label: "z=\\frac{1}{6}", value: "a" },
                { label: "z=\\frac{1}{2}", value: "b" },
                { label: "z=\\frac{2}{3}", value: "c" },
                { label: "z=-1", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$ x = \frac{1}{6} $$ do $$z=1-2x$$: $$z = 1 - \frac{1}{3} = \frac{2}{3}$$"
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {/* {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz największą wartość wyrażenia <InlineMath math="x^2 + z^2 + 7xz" />, gdy <InlineMath math="x = \frac{1}{6}" /> i <InlineMath math="z = 1 - 2x" />.
            </p>
            <NumericQuestion
              question="Jaka jest największa wartość wyrażenia?"
              correctAnswer="1.25"
              explanation="Podstawiamy $$ x = 0.5 $$ i $$ z = 1 - 2(0.5) = 0 $$ do $$x^2 + z^2 + 7xz $$: $$ (0.5)^2 + 0^2 + 7(0.5)(0) = 0.25 + 0 + 0 = 0.25 $$."
              onComplete={() => handleStageComplete(5)}
              img="/steps-images/obliczenia.png"
            />
          </>
        )} */}

        {completedStages.length === 6 && (
          <StudentNotes
            equation="x^2 + z^2 + 7xz"
            steps={[
              { step: "z = 1 - 2x" },
              { step: "x^2 + (1 - 2x)^2 + 7x(1 - 2x) = -9x^2 +3x + 1" },
              { step: "\\text{Maksimum dla } x=\\frac{1}{6}" },
              { step: "z = 1 - \\frac{2}{6} = \\frac{2}{3}" },
              { step: "\\text{Największa wartość}:  \\frac{-9}{36} +\\frac{3}{6} +1 = \\frac{5}{4}" },
            ]}
            solutions={["\\text{Największa wartość : } \\frac{5}{4}, x=\\frac{1}{6}, z=\\frac{2}{3}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;