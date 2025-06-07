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
          <InlineMath math="\frac{2}{\sqrt[3]{2}}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawną metodę usuwania niewymierności z mianownika.
            </p>
            <ChoiceQuestion
              question="Jaką metodę należy zastosować do usunięcia niewymierności z mianownika?"
              choices={[
                { label: "\\text{Mnożymy licznik i mianownik przez} \\sqrt[3]{2^2}", value: "a" },
                { label: "\\text{Mnożymy licznik i mianownik przez} \\sqrt[3]{2}", value: "b" },
                { label: "\\text{Mnożymy licznik i mianownik przez} 2", value: "c" },
                { label: "\\text{Mnożymy tylko mianownik przez} \\sqrt[3]{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Aby usunąć pierwiastek trzeciego stopnia z mianownika, należy pomnożyć licznik i mianownik przez \\sqrt[3]{2^2} (czyli pierwiastek sześcienny z 4). 
              Dzięki temu w mianowniku otrzymamy $$\sqrt[3]{2} \cdot \sqrt[3]{2^2} = \sqrt[3]{2^3} = 2$$, co eliminuje pierwiastek."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/mnozenie-przez-pierwiastek-szescienny.png"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj mnożenie licznika i mianownika przez ∛4.
            </p>
            <ChoiceQuestion
              question="Które wyrażenie jest wynikiem poprawnego mnożenia?"
              choices={[
                { label: "\\frac{2 \\cdot \\sqrt[3]{4}}{2}", value: "a" },
                { label: "\\frac{2}{2}", value: "b" },
                { label: "\\frac{2 \\cdot \\sqrt[3]{4}}{\\sqrt[3]{2} \\cdot \\sqrt[3]{4}}", value: "c" },
                { label: "\\frac{2}{\\sqrt[3]{2} \\cdot \\sqrt[3]{4}}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Poprawnie wykonane mnożenie daje:
                $$\frac{2}{\sqrt[3]{2}} \cdot \frac{\sqrt[3]{4}}{\sqrt[3]{4}} = \frac{2 \cdot \sqrt[3]{4}}{\sqrt[3]{2} \cdot \sqrt[3]{4}}$$.
                Ważne jest, aby pomnożyć zarówno licznik jak i mianownik przez pierwiastek sześcienny z kwadratu liczby w mianowniku."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/mnozenie-licznika-mianownika-szescienny.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartość mianownika po mnożeniu.
            </p>
            <NumericQuestion
              question="Jaka jest wartość mianownika ∛2 · ∛4?"
              correctAnswer="2"
              explanation="Mianownik po przemnożeniu wynosi:
                $$\sqrt[3]{2} \cdot \sqrt[3]{4} = \sqrt[3]{2 \cdot 4} = \sqrt[3]{8} = 2$$.
                Jest to kluczowy krok, który eliminuje niewymierność z mianownika."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/obliczanie-mianownika-szescienny.png"
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
                { label: "\\frac{2}{2} = 1", value: "a" },
                { label: "\\frac{2\\sqrt[3]{4}}{2} = \\sqrt[3]{4}", value: "b" },
                { label: "2\\sqrt[3]{4}", value: "c" },
                { label: "\\frac{\\sqrt[3]{4}}{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Ostateczny wynik po usunięciu niewymierności to:
                $$\frac{2\sqrt[3]{4}}{2} = \sqrt[3]{4}$$.
                Wynika to z następujących przekształceń:
                $$\frac{2}{\sqrt[3]{2}} = \frac{2 \cdot \sqrt[3]{4}}{\sqrt[3]{2} \cdot \sqrt[3]{4}} = \frac{2\sqrt[3]{4}}{2} = \sqrt[3]{4}$$.
                Wyrażenie to jest już pozbawione pierwiastka w mianowniku."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wynik-koncowy-szescienny.png"
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{2}{\sqrt[3]{2}}"
            steps={[
              {
                step: "\\frac{2}{\\sqrt[3]{2}} = \\frac{2 \\cdot \\sqrt[3]{4}}{\\sqrt[3]{2} \\cdot \\sqrt[3]{4}} = \\frac{2\\sqrt[3]{4}}{2} = \\sqrt[3]{4}",
              }
            ]}
            solutions={["\\sqrt[3]{4}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;