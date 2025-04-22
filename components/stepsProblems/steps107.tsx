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
          <InlineMath math="2(x-1)(x+3) > x-1" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć nierówność do postaci <InlineMath math="ax^2 + bx + c > 0" />.
            </p>
            <ChoiceQuestion
              question="Która postać nierówności jest poprawna po przekształceniu?"
              choices={[
                { label: "2x² + 3x - 5 > 0", value: "a" },
                { label: "2x² + 5x - 5 > 0", value: "b" },
                { label: "2x² + 5x - 7 > 0", value: "c" },
                { label: "2x² + 3x - 7 > 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Aby przekształcić nierówność, wykonaj następujące kroki:
                $$2(x-1)(x+3) > x-1$$ <br>
                Rozwiń lewą stronę: <br>
                $$2(x^2 + 3x - x - 3) > x - 1$$ <br>
                $$2(x^2 + 2x - 3) > x - 1$$ <br>
                $$2x^2 + 4x - 6 > x - 1$$ <br>
                Przenieś wszystkie wyrazy na lewą stronę: <br>
                $$2x^2 + 4x - 6 - x + 1 > 0$$ <br>
                $$2x^2 + 3x - 5 > 0$$ <br>
                Poprawna postać nierówności to $$2x^2 + 3x - 5 > 0$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/przeksztalcenie.png"
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
                { label: "a = 2, b = 3, c = -5", value: "a" },
                { label: "a = 2, b = 5, c = -5", value: "b" },
                { label: "a = 2, b = 4, c = -6", value: "c" },
                { label: "a = 2, b = 3, c = -7", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = 2, b = 3, c = -5$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$2x^2 + 3x - 5 > 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$2$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$3$$, <br>
                $$c$$ to wyraz wolny, czyli $$-5$$. <br>
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
              correctAnswer="49"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 3^2 - 4 \cdot 2 \cdot (-5) = 9 + 40 = 49$$.
                Poprawna wartość delty to $$\Delta = 49$$."
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
                { label: "x₁ = -2.5, x₂ = 1", value: "a" },
                { label: "x₁ = 2.5, x₂ = -1", value: "b" },
                { label: "x₁ = 1.5, x₂ = -2", value: "c" },
                { label: "x₁ = 2, x₂ = -1.5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki:
                $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,
                $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.
                Podstawiając wartości:
                $$x_1 = \frac{-3 - 7}{4} = \frac{-10}{4} = -2.5$$,
                $$x_2 = \frac{-3 + 7}{4} = \frac{4}{4} = 1$$.
                Poprawne wartości pierwiastków to $$x_1 = -2.5$$ i $$x_2 = 1$$."
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
              question="Który przedział jest rozwiązaniem nierówności $$2x^2 + 3x - 5 > 0$$?"
              choices={[
                { label: "x ∈ (-∞, -2.5) ∪ (1, ∞)", value: "a" },
                { label: "x ∈ (-2.5, 1)", value: "b" },
                { label: "x ∈ (-∞, -2.5⟩ ∪ ⟨1, ∞)", value: "c" },
                { label: "x ∈ ⟨-2.5, 1⟩", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem nierówności $$2x^2 + 3x - 5 > 0$$ jest przedział:
                $$x \in (-\infty, -2.5) \cup (1, \infty)$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do góry (a > 0), a nierówność jest typu '>', więc rozwiązanie obejmuje wartości na zewnątrz pierwiastków."
              onComplete={() => handleStageComplete(5)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun8.png"
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="2(x-1)(x+3) > x-1"
            steps={[
              {
                step: "2(x^2+3x-x-3) > x-1",
              },
              {
                step: "2(x^2+2x-3) > x-1",
              },
              {
                step: "2x^2 + 4x - 6 > x-1",
              },
              {
                step: "2x^2 + 4x - 6 - x + 1 > 0",
              },
              {
                step: "2x^2 + 3x - 5 > 0",
              },
              {
                step: "a = 2, b = 3, c = -5",
              },
              {
                step: "\\Delta = b^2 - 4ac = 3^2 - 4 \\cdot 2 \\cdot (-5) = 9 + 40 = 49",
              },
              {
                step: "x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = \\frac{-3 - 7}{4} = -2.5",
              },
              {
                step: "x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = \\frac{-3 + 7}{4} = 1",
                image: "/steps-images/fun8.png"
              },
            ]}
            solutions={["x \\in (-\\infty, -2.5) \\cup (1, \\infty)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;