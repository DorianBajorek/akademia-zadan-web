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
          <InlineMath math="-3x^2 + 3x + 36 \geq 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = -3, b = 3, c = 36", value: "a" },
                { label: "a = 3, b = 3, c = -36", value: "b" },
                { label: "a = -3, b = -3, c = 36", value: "c" },
                { label: "a = 3, b = -3, c = 36", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = -3, b = 3, c = 36$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$-3x^2 + 3x + 36 \geq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$-3$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$3$$, <br>
                $$c$$ to wyraz wolny, czyli $$36$$. <br>
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
              correctAnswer="441"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 3^2 - 4 \cdot (-3) \cdot 36 = 9 + 432 = 441$$.
                Poprawna wartość delty to $$\Delta = 441$$."
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
                { label: "x₁ = -3, x₂ = 4", value: "a" },
                { label: "x₁ = 3, x₂ = -4", value: "b" },
                { label: "x₁ = 1, x₂ = -1", value: "c" },
                { label: "x₁ = 0, x₂ = 1.5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{-3 - 21}{-6} = \frac{-24}{-6} = 4$$,
                $$x_2 = \frac{-3 + 21}{-6} = \frac{18}{-6} = -3$$.
                Poprawne wartości pierwiastków to $$x_1 = -3$$ i $$x_2 = 4$$."
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
              question="Który przedział jest rozwiązaniem nierówności $$-3x^2 + 3x + 36 \geq 0$$?"
              choices={[
                { label: "x ∈ \\langle-3, 4\\rangle", value: "a" },
                { label: "x ∈ (-∞, -3\\rangle ∪ \\langle4, ∞)", value: "b" },
                { label: "x ∈ (-3, 4)", value: "c" },
                { label: "x ∈ (-∞, -3) ∪ (4, ∞)", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem nierówności $$-3x^2 + 3x + 36 \geq 0$$ jest przedział:
                $$x \in \langle-3, 4\rangle$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do dołu (a < 0), a nierówność jest typu '≥', więc rozwiązanie obejmuje wartości między pierwiastkami, włącznie z nimi."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun5.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="-3x^2 + 3x + 36 \geq 0"
            steps={[
              {
                step: "a = -3, b = 3, c = 36",
              },
              {
                step: "\\Delta = b^2 - 4ac = 3^2 - 4 \\cdot (-3) \\cdot 36 = 9 + 432 = 441",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-3 - 21}{-6} = 4",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-3 + 21}{-6} = -3",
                image: "/steps-images/fun5.png"
              },
            ]}
            solutions={["x \\in \\langle-3, 4\\rangle"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;