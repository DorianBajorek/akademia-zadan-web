"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

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
          <InlineMath math="x^2 + 6x - 7 \leq 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = 1, b = 6, c = -7", value: "a" },
                { label: "a = 2, b = 6, c = -7", value: "b" },
                { label: "a = 1, b = -6, c = 7", value: "c" },
                { label: "a = -1, b = 6, c = 7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = 1, b = 6, c = -7$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$x^2 + 6x - 7 \leq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$6$$, <br>
                $$c$$ to wyraz wolny, czyli $$-7$$. <br>
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
            <ChoiceQuestion
              question="Która wartość jest poprawną  $$\Delta$$ dla tej nierówności?"
              choices={[
                { label: "Δ = 36", value: "a" },
                { label: "Δ = 64", value: "b" },
                { label: "Δ = -28", value: "c" },
                { label: "Δ = 16", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Mamy wzór:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 6^2 - 4 \cdot 1 \cdot (-7) = 36 + 28 = 64$$.
                Poprawna wartość to $$\Delta = 64$$."
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
                { label: "x_1 = 0, x_2 = 6", value: "a" },
                { label: "x_1 = 7, x_2 = -1", value: "b" },
                { label: "x_1 = 3, x_2 = -3", value: "c" },
                { label: "x_1 = -7, x_2 = 1", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{-6 - 8}{2} = -7$$,
                $$x_2 = \frac{-6 + 8}{2} = 1$$.
                Poprawne wartości pierwiastków to $$x_1 = -7$$ i $$x_2 = 1$$."
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
              question="Który przedział jest rozwiązaniem nierówności $$x^2 + 6x - 7 \leq 0$$?"
              choices={[
                { label: "x \\in \\langle-7, 1\\rangle", value: "a" },
                { label: "x ∈ (-∞, -7\\rangle ∪ \\langle1, ∞)", value: "b" },
                { label: "x ∈ (-7, 1)", value: "c" },
                { label: "x ∈ (-∞, -7) ∪ (1, ∞)", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem nierówności $$x^2 + 6x - 7 \leq 0$$ jest przedział:
                $$x \in \langle-7, 1\rangle$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do góry $$(a > 0)$$, a nierówność jest typu $$\leq$$, więc rozwiązanie obejmuje wartości między pierwiastkami, włącznie z nimi."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun3.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="x^2 + 6x - 7 \leq 0"
            steps={[
              {
                step: "a = 1, b = 6, c = -7",
              },
              {
                step: "\\Delta = b^2 - 4ac = 6^2 - 4 \\cdot 1 \\cdot (-7) = 36 + 28 = 64",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-6 - 8}{2} = -7",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-6 + 8}{2} = 1",
                image: "/steps-images/fun3.png"
              },
            ]}
            solutions={["x \\in \\langle-7, 1\\rangle"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;