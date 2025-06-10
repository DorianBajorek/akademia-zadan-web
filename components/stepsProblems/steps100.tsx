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
          <InlineMath math="x^2 - 4x + 4 \leq 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = 2, b = -4, c = 4", value: "a" },
                { label: "a = 1, b = 4, c = -4", value: "b" },
                { label: "a = -1, b = 4, c = -4", value: "c" },
                { label: "a = 1, b = -4, c = 4", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Współczynniki dla tej nierówności to $$a = 1, b = -4, c = 4$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: 
                $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$x^2 - 4x + 4 \leq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$-4$$, <br>
                $$c$$ to wyraz wolny, czyli $$4$$. <br>
                Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz  <InlineMath math="\Delta"/> dla tej nierówności.
            </p>
            <NumericQuestion
           //   question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
           question="Wpisz poniżej obliczoną wartość $$\Delta$$"
              correctAnswer="0"
              explanation="Wyróżnik $$\Delta$$ jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0$$.
                Poprawna wartość to $$\Delta = 0$$."
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
            <ChoiceQuestion
              question="Która wartość jest poprawna dla pierwiastka $$x_0$$?"
              choices={[
                { label: "x₀ = 2", value: "a" },
                { label: "x₀ = -2", value: "b" },
                { label: "x₀ = 4", value: "c" },
                { label: "x₀ = 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ $$\Delta$$ wynosi 0, równanie ma dokładnie jeden pierwiastek podwójny:
                $$x_0 = \frac{-b}{2a}$$.
                Podstawiając wartości:
                $$x_0 = \frac{4}{2} = 2$$.
                Poprawna wartość pierwiastka to $$x_0 = 2$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/jedno-miejsce-zerowe.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy przedział rozwiązania nierówności.
            </p>
            <ChoiceQuestion
              question="Który przedział jest rozwiązaniem nierówności $$x^2 - 4x + 4 \leq 0$$?"
              choices={[
                { label: "x ∈ (-∞, 2\\rangle \\cup \\langle2, ∞)", value: "a" },
                { label: "x ∈ (2, ∞)", value: "b" },
                { label: "x ∈ (-∞, 2)", value: "c" },
                { label: "x = 2", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Rozwiązaniem nierówności $$x^2 - 4x + 4 \leq 0$$ jest dokładnie jedna wartość:
                $$x = 2$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do góry $$(a > 0)$$, a nierówność jest typu $$\leq$$, więc rozwiązanie obejmuje tylko punkt, w którym parabola dotyka osi x."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun1.png"
            />
          </>
        )}
      {completedStages.length === 4 && (
        <StudentNotes
          equation="x^2 - 4x + 4 \leq 0"
          steps={[
            {
              step: "a = 1, b = -4, c = 4",
            },
            {
              step: "\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot 4 = 16 - 16 = 0",
            },
            {
              step: "x_0 = \\frac{-b}{2a} = \\frac{4}{2} = 2",
              image: "/steps-images/fun1.png"
            },
          ]}
          solutions={["x = 2"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;