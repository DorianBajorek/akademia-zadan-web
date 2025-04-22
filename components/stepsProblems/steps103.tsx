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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność kwadratową:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="-2x^2 + 3x + 2 \leq 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = 2, b = 3, c = -2", value: "a" },
                { label: "a = -2, b = -3, c = 2", value: "b" },
                { label: "a = 2, b = -3, c = 2", value: "c" },
                { label: "a = -2, b = 3, c = 2", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Współczynniki dla tej nierówności to $$a = -2, b = 3, c = 2$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$-2x^2 + 3x + 2 \leq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$-2$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$3$$, <br>
                $$c$$ to wyraz wolny, czyli $$2$$. <br>
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
              correctAnswer="25"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 3^2 - 4 \cdot (-2) \cdot 2 = 9 + 16 = 25$$.
                Poprawna wartość delty to $$\Delta = 25$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastki równania kwadratowego <InlineMath math="x_1, x_2" />.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
              choices={[
                { label: "x₁ = -0.5, x₂ = 2", value: "a" },
                { label: "x₁ = 0.5, x₂ = -2", value: "b" },
                { label: "x₁ = 1, x₂ = -1", value: "c" },
                { label: "x₁ = 0, x₂ = 1.5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{-3 - 5}{-4} = \frac{-8}{-4} = 2$$,
                $$x_2 = \frac{-3 + 5}{-4} = \frac{2}{-4} = -0.5$$.
                Poprawne wartości pierwiastków to $$x_1 = -0.5$$ i $$x_2 = 2$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/dwaMiejscaZerowe.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy przedział rozwiązania nierówności.
            </p>
            <ChoiceQuestion
              question="Który przedział jest rozwiązaniem nierówności $$-2x^2 + 3x + 2 \leq 0$$?"
              choices={[
                { label: "x ∈ \\langle-0.5, 2\\rangle", value: "a" },
                { label: "x ∈ (-0.5, 2)", value: "b" },
                { label: "x ∈ (-∞, -0.5\\rangle ∪ \\langle2, ∞)", value: "v" },
                { label: "x ∈ (-∞, -0.5) ∪ (2, ∞)", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Rozwiązaniem nierówności $$-2x^2 + 3x + 2 \leq 0$$ jest przedział:
                $$x \in (-\infty, -0.5\rangle \cup \langle2, \infty)$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do dołu (a < 0), a nierówność jest typu '≤', więc rozwiązanie obejmuje wartości na zewnątrz pierwiastków, włącznie z nimi."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun4.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="-2x^2 + 3x + 2 \leq 0"
            steps={[
              {
                step: "a = -2, b = 3, c = 2",
              },
              {
                step: "\\Delta = b^2 - 4ac = 3^2 - 4 \\cdot (-2) \\cdot 2 = 9 + 16 = 25",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-3 - 5}{-4} = 2",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-3 + 5}{-4} = -0.5",
                image: "/steps-images/fun4.png"
              },
            ]}
            solutions={["x \\in (-\\infty, -0.5\\rangle \\cup \\langle2, \\infty)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;