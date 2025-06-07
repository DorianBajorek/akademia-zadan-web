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
          Suma dwóch nieujemnych liczb rzeczywistych <InlineMath math="x" /> oraz <InlineMath math="y" /> jest równa <InlineMath math="12" />. Wyznacz <InlineMath math="x" /> oraz <InlineMath math="y" />, dla których wartość wyrażenia <InlineMath math="2x^2 + y^2" /> jest najmniejsza. Oblicz tę najmniejszą wartość.
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wyraź <InlineMath math="y" /> w zależności od <InlineMath math="x" />, korzystając z równania <InlineMath math="x + y = 12" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie dla $$y$$?"
              choices={[
                { label: "y = 12 - x", value: "a" },
                { label: "y = 12 + x", value: "b" },
                { label: "y = x - 12", value: "c" },
                { label: "y = 12x", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Z równania $$x + y = 12$$ wynika, że $$y = 12 - x$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rownowaznosc.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Podstaw <InlineMath math="y = 12 - x" /> do wyrażenia <InlineMath math="2x^2 + y^2" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie po podstawieniu?"
              choices={[
                { label: "2x^2 + (12 - x)^2", value: "a" },
                { label: "2x^2 + 12x", value: "b" },
                { label: "2x^2 + x^2", value: "c" },
                { label: "2x^2 + 144", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Podstawiając $$y = 12 - x$$, otrzymujemy $$2x^{2} + (12 - x)^{2}$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/podstawienie.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Uprość wyrażenie <InlineMath math="2x^2 + (12 - x)^2" />.
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczone wyrażenie?"
              choices={[
                { label: "3x^2 - 24x + 144", value: "a" },
                { label: "2x^2 + 144", value: "b" },
                { label: "x^2 - 24x + 144", value: "c" },
                { label: "3x^2 + 24x + 144", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozwijamy $$(12 - x)^{2}=144 - 24x + x^2$$. Dodając do $$2x^{2}$$, otrzymujemy $$3x^{2} - 24x + 144$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Znajdź wartość <InlineMath math="x" />, dla której wyrażenie <InlineMath math="3x^2 - 24x + 144" /> osiąga minimum.
            </p>
            <NumericQuestion
              question="Dla jakiej wartości $$x$$ wyrażenie osiąga minimum?"
              correctAnswer="4"
              explanation="Wartość $$ x$$, dla której funkcja kwadratowa osiąga minimum, to $$ x = -\frac{b}{2a}$$(pierwsza współrzędna wierzchołka). Tutaj: $$ x = -\frac{-24}{2 \cdot 3} = 4$$."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wierzcholek_paraboli.png"
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz najmniejszą wartość wyrażenia <InlineMath math="2x^2 + y^2" />, gdy <InlineMath math="x = 4" /> i <InlineMath math="y = 12 - x" />.
            </p>
            <NumericQuestion
              question="Jaka jest najmniejsza wartość wyrażenia?"
              correctAnswer="96"
              explanation="Podstawiamy $$ x = 4$$ i $$ y = 12 - 4 = 8 $$ do $$ 2x^2 + y^2 $$: $$ 2(4^2) + 8^2 = 2\cdot 16 + 64 = 32 + 64 = 96 $$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="2x^2 + y^2"
            steps={[
              { step: "y = 12 - x" },
              { step: "2x^2 + (12 - x)^2 = 3x^2 - 24x + 144" },
              { step: "x_{min} = -\\frac{-24}{2 \\cdot 3} = 4" },
              { step: "y_{min} = 12 - 4 = 8" },
              { step: "\\text{Najmniejsza wartość}: 2(4^2) + 8^2 = 96" },
            ]}
            solutions={["\\text{Najmniejsza wartość: } 80"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;