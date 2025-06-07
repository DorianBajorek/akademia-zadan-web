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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Usuwanie niewymierności z mianownika</h2>
        <p className="text-lg text-gray-800">Usuń niewymierność z mianownika:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{3}{\sqrt{2}}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawną metodę usuwania niewymierności z mianownika.
            </p>
            <ChoiceQuestion
              question="Jaką metodę należy zastosować do usunięcia niewymierności z mianownika?"
              choices={[
                { label: "\\text{Mnożymy licznik i mianownik przez} \\sqrt{2}", value: "a" },
                { label: "\\text{Mnożymy tylko mianownik przez} \\sqrt{2}", value: "b" },
                { label: "\\text{Mnożymy licznik i mianownik przez} 2", value: "c" },
                { label: "\\text{Rozkładamy wyrażenie na czynniki}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Aby usunąć niewymierność z mianownika, należy pomnożyć zarówno licznik jak i mianownik przez \\sqrt{2}. 
              Dzięki temu w mianowniku otrzymamy $$\sqrt{2}\cdot\sqrt{2}= 2$$, co eliminuje pierwiastek."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/mnozenie-przez-pierwiastek.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie licznika i mianownika przez √2.
            </p>
            <ChoiceQuestion
              question="Które wyrażenie jest wynikiem poprawnego mnożenia?"
              choices={[
                { label: "\\frac{3 \\cdot \\sqrt{2}}{2}", value: "a" },
                { label: "\\frac{3}{2}", value: "b" },
                { label: "\\frac{3 \\cdot \\sqrt{2}}{\\sqrt{2} \\cdot \\sqrt{2}}", value: "c" },
                { label: "\\frac{3}{\\sqrt{2} \\cdot \\sqrt{2}}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Poprawnie wykonane mnożenie daje:
                $$\frac{3}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{3 \cdot \sqrt{2}}{\sqrt{2} \cdot \sqrt{2}}$$.
                Ważne jest, aby pomnożyć zarówno licznik jak i mianownik przez ten sam pierwiastek."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/mnozenie-licznika-mianownika.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartość mianownika po mnożeniu.
            </p>
            <NumericQuestion
              question="Jaka jest wartość mianownika √2 · √2?"
              correctAnswer="2"
              explanation="Mianownik po przemnożeniu wynosi:
                $$\sqrt{2} \cdot \sqrt{2} = (\sqrt{2})^2 = 2$$.
                Jest to kluczowy krok, który eliminuje niewymierność z mianownika."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/obliczanie-mianownika.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Podaj ostateczny wynik po usunięciu niewymierności.
            </p>
            <ChoiceQuestion
              question="Które wyrażenie jest poprawnym wynikiem końcowym?"
              choices={[
                { label: "\\frac{3}{2}", value: "a" },
                { label: "\\frac{3\\sqrt{2}}{2}", value: "b" },
                { label: "3\\sqrt{2}", value: "c" },
                { label: "\\frac{\\sqrt{2}}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Ostateczny wynik po usunięciu niewymierności to:
                $$\frac{3\sqrt{2}}{2}$$.
                Wynika to z następujących przekształceń:
                $$\frac{3}{\sqrt{2}} = \frac{3 \cdot \sqrt{2}}{\sqrt{2} \cdot \sqrt{2}} = \frac{3\sqrt{2}}{2}$$.
                Wyrażenie to jest już pozbawione pierwiastka w mianowniku."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wynik-koncowy.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{3}{\sqrt{2}}"
            steps={[
              {
                step: "\\frac{3}{\\sqrt{2}} = \\frac{3 \\cdot \\sqrt{2}}{\\sqrt{2} \\cdot \\sqrt{2}} = \\frac{3\\sqrt{2}}{2}",
              }
            ]}
            solutions={["\\frac{3\\sqrt{2}}{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;