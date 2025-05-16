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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie równań z pierwiastkami</h2>
        <p className="text-lg text-gray-800">Rozwiązaniem równania jest liczba:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x\sqrt{3} + 2 = 2x - 8" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: przenieś wyrażenia z x na lewą stronę, a liczby na prawą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "x \\sqrt{3} - 2x = -8 - 2", value: "a" },
                { label: "x \\sqrt{3} + 2x = 8 - 2", value: "b" },
                { label: "x \\sqrt{3} - 2x = 8 + 2", value: "c" },
                { label: "-x \\sqrt{3} - 2x = -8 - 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$x\sqrt{3} - 2x = -8 - 2$$. <br>
                Dlaczego?<br>
                Przenosimy $$2x$$ na lewą stronę (zmieniając znak) i $$+2$$ na prawą stronę (zmieniając znak)."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: wyciągnij x przed nawias i uprość prawą stronę:
            </p>
            <ChoiceQuestion
              question="Jak wygląda przekształcone równanie?"
              choices={[
                { label: "x(\\sqrt{3} - 2) = -10", value: "a" },
                { label: "x(\\sqrt{3} + 2) = 6", value: "b" },
                { label: "x(2 - \\sqrt{3}) = 10", value: "c" },
                { label: "x(-\\sqrt{3} - 2) = -10", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$x(\sqrt{3} - 2) = -10$$. <br>
                Dlaczego?<br>
                Lewa strona: $$x\sqrt{3} - 2x = x(\sqrt{3} - 2)$$<br>
                Prawa strona: $$-8 - 2 = -10$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: rozwiąż równanie względem x:
            </p>
            <ChoiceQuestion
              question="Które rozwiązanie jest poprawne?"
              choices={[
                { label: "x = -\\frac{10}{\\sqrt{3} - 2}", value: "a" },
                { label: "x = \\frac{10}{\\sqrt{3} + 2}", value: "b" },
                { label: "x = \\frac{10}{2 - \\sqrt{3}}", value: "c" },
                { label: "x = -\\frac{10}{\\sqrt{3} + 2}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = \frac{-10}{\sqrt{3} - 2}$$. <br>
                Dlaczego?<br>
                Dzielimy obie strony przez $$(\sqrt{3} - 2)$$: <br>
                $$x = \frac{-10}{\sqrt{3} - 2}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czwarty krok: usuń niewymierność z mianownika:
            </p>
            <ChoiceQuestion
              question="Która z poniższych odpowiedzi jest poprawna?"
              choices={[
                { label: "x = 10(2 + \\sqrt{3})", value: "a" },
                { label: "x = 10/(\\sqrt{3} - 2)", value: "b" },
                { label: "x = 10(\\sqrt{3} - 2)", value: "c" },
                { label: "x = \\frac{(\\sqrt{3} + 10)}{2}", value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawna odpowiedź to A. $$10(2 + \\sqrt{3})$$.<br><br>
                Jak to otrzymaliśmy?<br>
                1. Mnożymy licznik i mianownik przez sprzężenie: $$\\frac{-10}{\\sqrt{3} - 2} \\cdot \\frac{\\sqrt{3} + 2}{\\sqrt{3} + 2}$$<br>
                2. W mianowniku stosujemy wzór skróconego mnożenia: $$(\\sqrt{3})^2 - (2)^2 = 3 - 4 = -1$$<br>
                3. Otrzymujemy: $$\\frac{-10(\\sqrt{3} + 2)}{-1} = 10(\\sqrt{3} + 2)$$<br>
                4. Co odpowiada opcji A`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="x \sqrt{3} + 2 = 2x - 8"
            steps={[
              {
                step: "x \\sqrt{3} - 2x = -8 - 2",
              },
              {
                step: "x(\\sqrt{3} - 2) = -10",
              },
              {
                step: "x = -\\frac{10}{\\sqrt{3} - 2}",
              },
                {
                step: "x = -\\frac{10}{\\sqrt{3} - 2} \\cdot \\frac{\\sqrt{3} + 2}{\\sqrt{3} + 2}",
              },
             {
                step: "x = -\\frac{10(\\sqrt{3} + 2)}{-1}",
              },
              {
                step: "x = 10(2 + \\sqrt{3})",
              },
            ]}
            solutions={["10(2 + \\sqrt{3})"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;