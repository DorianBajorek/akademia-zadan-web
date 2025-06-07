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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność kwadratową:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="-x^2 + 2x - 1 < 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = -1, b = 2, c = -1", value: "a" },
                { label: "a = 1, b = 2, c = -1", value: "b" },
                { label: "a = -1, b = -2, c = -1", value: "c" },
                { label: "a = 1, b = -2, c = -1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = -1, b = 2, c = -1$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$-x^2 + 2x - 1 < 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$-1$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$2$$, <br>
                $$c$$ to wyraz wolny, czyli $$-1$$. <br>
                Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz deltę (Δ) dla tej nierówności.
            </p>
            <NumericQuestion
              question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
              correctAnswer="0"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 2^2 - 4 \cdot (-1) \cdot (-1) = 4 - 4 = 0$$.
                Poprawna wartość delty to $$\Delta = 0$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastek równania kwadratowego <InlineMath math="x_0" />.
            </p>
            <NumericQuestion
              question="Która wartość jest poprawna dla pierwiastka $$x_0$$?"
              correctAnswer="1"
              explanation="Ponieważ delta wynosi 0, równanie ma dokładnie jeden pierwiastek podwójny:
                $$x_0 = \frac{-b}{2a}$$.
                Podstawiając wartości:
                $$x_0 = \frac{-2}{-2} = 1$$.
                Poprawna wartość pierwiastka to $$x_0 = 1$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/jednoMiejsceZerowe.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy zbiór rozwiązań nierówności.
            </p>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem nierówności $$-x^2 + 2x - 1 < 0$$?"
              choices={[
                { label: "x ∈ ℝ \\setminus \\Set{-1}", value: "a" },
                { label: "x ∈ ℝ \\setminus \\Set{1}", value: "b" },
                { label: "x ∈ ∅", value: "c" },
                { label: "x ∈ ℝ", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Rozwiązaniem nierówności $$-x^2 + 2x - 1 < 0$$ jest zbiór:
                $$x \in (-\infty, 1) \cup (1, \infty) => x ∈ ℝ \setminus \Set{1} $$.
                Wynika to z faktu, że parabola skierowana jest ramionami do dołu (a < 0), a nierówność jest typu '<', więc rozwiązanie obejmuje wszystkie wartości poza pierwiastkiem podwójnym."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun6.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="-x^2 + 2x - 1 < 0"
            steps={[
              {
                step: "a = -1, b = 2, c = -1",
              },
              {
                step: "\\Delta = b^2 - 4ac = 2^2 - 4 \\cdot (-1) \\cdot (-1) = 4 - 4 = 0",
              },
              {
                step: "x_0 = \\frac{-b}{2a} = \\frac{-2}{-2} = 1",
                image: "/steps-images/fun6.png"
              },
            ]}
            solutions={["x \\in ℝ \\setminus \\Set{1}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;