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
          <InlineMath math="2(x+1)(x-3) < x^2 - 9" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć nierówność do postaci <InlineMath math="ax^2 + bx + c < 0" />.
            </p>
            <ChoiceQuestion
              question="Która postać nierówności jest poprawna po przekształceniu?"
              choices={[
                { label: "x² - 4x + 3 < 0", value: "a" },
                { label: "x² - 4x - 3 < 0", value: "b" },
                { label: "x² + 4x + 3 < 0", value: "c" },
                { label: "x² + 4x - 3 < 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Aby przekształcić nierówność, wykonaj następujące kroki:
                $$2(x+1)(x-3) < x^2 - 9$$ <br>
                Rozwiń lewą stronę: <br>
                $$2(x^2 - 3x + x - 3) < x^2 - 9$$ <br>
                $$2(x^2 - 2x - 3) < x^2 - 9$$ <br>
                $$2x^2 - 4x - 6 < x^2 - 9$$ <br>
                Przenieś wszystkie wyrazy na lewą stronę: <br>
                $$2x^2 - 4x - 6 - x^2 + 9 < 0$$ <br>
                $$x^2 - 4x + 3 < 0$$ <br>
                Poprawna postać nierówności to $$x^2 - 4x + 3 < 0$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = 1, b = -4, c = 3", value: "a" },
                { label: "a = 1, b = 4, c = 3", value: "b" },
                { label: "a = 1, b = -4, c = -3", value: "c" },
                { label: "a = 1, b = 4, c = -3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = 1, b = -4, c = 3$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$x^2 - 4x + 3 < 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$-4$$, <br>
                $$c$$ to wyraz wolny, czyli $$3$$. <br>
                Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz deltę (Δ) dla tej nierówności.
            </p>
            <NumericQuestion
              question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
              correctAnswer="4"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 3 = 16 - 12 = 4$$.
                Poprawna wartość delty to $$\Delta = 4$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastki równania kwadratowego <InlineMath math="x_1, x_2" />.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
              choices={[
                { label: "x₁ = 1, x₂ = 3", value: "a" },
                { label: "x₁ = -1, x₂ = -3", value: "b" },
                { label: "x₁ = 1, x₂ = -3", value: "c" },
                { label: "x₁ = -1, x₂ = 3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{4 - 2}{2} = 1$$,
                $$x_2 = \frac{4 + 2}{2} = 3$$.
                Poprawne wartości pierwiastków to $$x_1 = 1$$ i $$x_2 = 3$$."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/dwaMiejscaZerowe.png"
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy przedział rozwiązania nierówności.
            </p>
            <ChoiceQuestion
              question="Który przedział jest rozwiązaniem nierówności $$x^2 - 4x + 3 < 0$$?"
              choices={[
                { label: "x ∈ (1, 3)", value: "a" },
                { label: "x ∈ (-∞, 1) ∪ (3, ∞)", value: "b" },
                { label: "x ∈ (-∞, 1⟩ ∪ ⟨3, ∞)", value: "c" },
                { label: "x ∈ ⟨1, 3⟩", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem nierówności $$x^2 - 4x + 3 < 0$$ jest przedział:
                $$x \in (1, 3)$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do góry (a > 0), a nierówność jest typu '<', więc rozwiązanie obejmuje wartości między pierwiastkami."
              onComplete={() => handleStageComplete(5)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun9.png"
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="2(x+1)(x-3) < x^2 - 9"
            steps={[
            {
            step: "2(x+1)(x-3) = 2(x^2 - 3x + x - 3)",
            },
            {
            step: "2(x^2 - 2x - 3) = 2x^2 - 4x - 6",
            },
            {
            step: "2x^2 - 4x - 6 < x^2 - 9",
            },
            {
            step: "2x^2 - 4x - 6 - x^2 + 9 < 0",
            },
            {
            step: "x^2 - 4x + 3 < 0",
            },
              {
                step: "a = 1, b = -4, c = 3",
              },
              {
                step: "\\Delta = b^2 - 4ac = (-4)^2 - 4 \\cdot 1 \\cdot 3 = 16 - 12 = 4",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{4 - 2}{2} = 1",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{4 + 2}{2} = 3",
                image: "/steps-images/fun9.png"
              },
            ]}
            solutions={["x \\in (1, 3)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;