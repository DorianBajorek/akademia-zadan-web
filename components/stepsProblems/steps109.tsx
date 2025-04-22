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
          <InlineMath math="(x+1)^2 + 2 < 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć nierówność do postaci <InlineMath math="ax^2 + bx + c < 0" />.
            </p>
            <ChoiceQuestion
              question="Która postać nierówności jest poprawna po przekształceniu?"
              choices={[
                { label: "x² + 2x + 3 < 0", value: "a" },
                { label: "x² + 2x - 3 < 0", value: "b" },
                { label: "x² - 2x + 3 < 0", value: "c" },
                { label: "x² - 2x - 3 < 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Aby przekształcić nierówność, wykonaj następujące kroki:
                $$(x+1)^2 + 2 < 0$$ <br>
                Rozwiń lewą stronę: <br>
                $$x^2 + 2x + 1 + 2 < 0$$ <br>
                $$x^2 + 2x + 3 < 0$$ <br>
                Poprawna postać nierówności to $$x^2 + 2x + 3 < 0$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/wzorySkrocenegoMnozenia.png"
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
                { label: "a = 1, b = 2, c = 3", value: "a" },
                { label: "a = 1, b = -2, c = 3", value: "b" },
                { label: "a = 1, b = 2, c = -3", value: "c" },
                { label: "a = 1, b = -2, c = -3", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = 1, b = 2, c = 3$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                W przypadku nierówności $$x^2 + 2x + 3 < 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                $$b$$ to współczynnik przy $$x$$, czyli $$2$$, <br>
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
              correctAnswer="-8"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = 2^2 - 4 \cdot 1 \cdot 3 = 4 - 12 = -8$$.
                Poprawna wartość delty to $$\Delta = -8$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Określ rozwiązanie nieróności.
            </p>
            <ChoiceQuestion
              question="Określ rozwiązanie nieróności. $$x^2 + 2x + 3 < 0$$?"
              choices={[
                { label: "x = -8", value: "a" },
                { label: "x \\in (-8;8)", value: "b" },
                { label: "x \\in \\R", value: "c" },
                { label: "x \\in \\emptyset", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Ponieważ delta jest ujemna $$(Δ = -8)$$, równanie nie ma pierwiastków rzeczywistych. 
                Parabola skierowana jest ramionami do góry $$(a > 0)$$, a nierówność jest typu '<', więc nie ma rozwiązań."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/brakMiejscZerowych.png"
              explanationImage="/steps-images/fun10.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="(x+1)^2 + 2 < 0"
            steps={[
              {
                step: "x^2 + 2x + 1 + 2 < 0",
              },
              {
                step: "x^2 + 2x + 3 < 0",
              },
              {
                step: "a = 1, b = 2, c = 3",
              },
              {
                step: "\\Delta = b^2 - 4ac = 2^2 - 4 \\cdot 1 \\cdot 3 = 4 - 12 = -8",
                image: "/steps-images/fun10.png"
              },
            ]}
            solutions={["x \\in \\emptyset"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;