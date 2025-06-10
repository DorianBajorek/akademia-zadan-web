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
          <InlineMath math="x^2 + 6x + 9 \geq 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = 2, b = 6, c = 9", value: "a" },
                { label: "a = 1, b = -6, c = 9", value: "b" },
                { label: "a = 1, b = 6, c = 9", value: "c" },
                { label: "a = -1, b = 6, c = -9", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Współczynniki dla tej nierówności to $$a = 1, b = 6, c = 9$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać:  $$ax^2 + bx + c = 0$$.<br>
                W przypadku nierówności $$x^2 + 6x + 9 \geq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$6$$, <br>
                $$c$$ to wyraz wolny, czyli $$9$$. <br>
                Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wyróżnik  <InlineMath math="\Delta"/> dla tej nierówności.
            </p>
            <NumericQuestion
              question="Oblicz wartość $$\Delta$$ i wpisz poniżej"
              correctAnswer="0"
              explanation="Mamy wzór:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 6^2 - 4 \cdot 1 \cdot 9 = 36 - 36 = 0$$.
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
              correctAnswer="-3"
              explanation="Ponieważ delta wynosi 0, równanie ma dokładnie jeden pierwiastek podwójny:
                $$x_0 = \frac{-b}{2a}$$.
                Podstawiając wartości:
                $$x_0 = \frac{-6}{2} = -3$$.
                Poprawna wartość pierwiastka to $$x_0 = -3$$."
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
              question="Który przedział jest rozwiązaniem nierówności $$x^2 + 6x + 9 \geq 0$$?"
              choices={[
                { label: "x ∈ ℝ", value: "a" },
                { label: "x ∈ (-∞, -3\\rangle ∪ \\langle-3, ∞)", value: "b" },
                { label: "x ∈ (-3, ∞)", value: "c" },
                { label: "x ∈ (-∞, -3)", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem nierówności $$x^2 + 6x + 9 \geq 0$$ jest cały zbiór liczb rzeczywistych:
                $$x \in \mathbb{R}$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do góry $$(a > 0)$$, 
                a nierówność jest typu  $$\geq$$, więc parabola jest zawsze powyżej lub na poziomie osi x."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/ramionaParaboli.png"
              explanationImage="/steps-images/fun2.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="x^2 + 6x + 9 \geq 0"
            steps={[
              {
                step: "a = 1, b = 6, c = 9",
              },
              {
                step: "\\Delta = b^2 - 4ac = 6^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0",
              },
              {
                step: "x_0 = \\frac{-b}{2a} = \\frac{-6}{2} = -3",
                image: "/steps-images/fun2.png"
              },
            ]}
            solutions={["x \\in \\mathbb{R}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;