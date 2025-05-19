"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Prostopadłościan – optymalizacja pola powierzchni
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Rozważamy wszystkie prostopadłościany  <InlineMath math="ABCDEFGH"/>, w których krawędź  <InlineMath math="AE"/> jest  <InlineMath math="3"/> razy dłuższa od krawędzi  <InlineMath math="AB"/>, a suma długości wszystkich dwunastu krawędzi prostopadłościanu jest równa  <InlineMath math="48"/>.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          Niech  <InlineMath math="P(x)"/> oznacza funkcję pola powierzchni całkowitej takiego prostopadłościanu w zależności od długości  <InlineMath math="x"/> krawędzi  <InlineMath math="AB"/>.
        </p>
        <p className="text-lg text-gray-800 mt-4">
          Wyznacz wzór i dziedzinę funkcji  <InlineMath math="P"/>. Oblicz długość  <InlineMath math="x"/> krawędzi  <InlineMath math="AB"/> tego z rozważanych prostopadłościanów, którego pole powierzchni całkowitej jest największe.
        </p>
            <div className="flex justify-center mt-4">
                <img 
                src="/problemImages/prostopadloscian_1602.png" 
                alt="Prostopadłościanu" 
                className="max-w-xs w-full h-auto rounded shadow"
                />
            </div>
        {/* ETAP 1: Oznaczenia krawędzi */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Oznaczmy: $$x = |AB|$$, $$y = |AD|$$, $$z = |AE|$$. Które równanie poprawnie wyraża zależność $$z$$ od $$x$$?"
            choices={[
              { label: "z = 3x", value: "a" },
              { label: "z = x + 3", value: "b" },
              { label: "z = \\frac{x}{3}", value: "c" },
              { label: "z = x - 3", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Z treści zadania: $$|AE|$$ jest $$3$$ razy dłuższe niż $$|AB|$$, więc $$z = 3x$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
        <ChoiceQuestion
            question="Podstaw oznaczenia do równania na sumę długości wszystkich krawędzi: $$4(x + y + z) = 48$$. Wyznacz $$y$$ w zależności od $$x$$."
            choices={[
            { label: "y = 12 - 4x", value: "a" },
            { label: "y = 12 - 3x", value: "b" },
            { label: "y = 48 - 4x", value: "c" },
            { label: "y = 4x - 12", value: "d" }
            ]}
            correctAnswer="a"
            explanation={
            "Dzielimy obustronnie przez 4: $$x + y + z = 12$$.<br/>" +
            "Podstawiamy $$z = 3x$$:<br/>" +
            "$$x + y + 3x = 12$$<br/>" +
            "$$4x + y = 12$$<br/>" +
            "$$y = 12 - 4x$$"
            }
            onComplete={() => handleStageComplete(2)}
        />
        )}

        {/* ETAP 3: Wzór na pole powierzchni */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Wskaż poprawny wzór na pole powierzchni całkowitej prostopadłościanu $$P(x)$$:"
            choices={[
              { label: "P(x) = 2(xy + yz + zx)", value: "a" },
              { label: "P(x) = x^2 + y^2 + z^2", value: "b" },
              { label: "P(x) = 4(x + y + z)", value: "c" },
              { label: "P(x) = 2xyz", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Pole powierzchni całkowitej prostopadłościanu to: $$P = 2(xy + yz + zx)$$."
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Wzór P(x) po podstawieniu */}
{completedStages.includes(3) && (
  <ChoiceQuestion
    question="Podstaw do wzoru $$P(x) = 2(xy + yz + zx)$$ i wyraź $$P(x)$$ tylko przez $$x$$."
    choices={[
      { label: "P(x) = 96x - 26x^2", value: "a" },
      { label: "P(x) = 48x - 13x^2", value: "b" },
      { label: "P(x) = 24x - 6.5x^2", value: "c" },
      { label: "P(x) = 2[x(12-4x) + 3x(12-4x) + x^2 \\cdot 3x]", value: "d" }
    ]}
    correctAnswer="a"
    explanation={
      "$$y = 12 - 4x$$, $$z = 3x$$<br/>" +
      "$$P(x) = 2[x(12-4x) + (12-4x)3x + x \\cdot 3x]$$<br/>" +
      "$$= 2[12x - 4x^2 + 36x - 12x^2 + 3x^2]$$<br/>" +
      "$$= 2[48x - 13x^2]$$<br/>" +
      "$$= 96x - 26x^2$$"
    }
    onComplete={() => handleStageComplete(4)}
  />
)}

        {/* ETAP 5: Dziedzina funkcji */}
        {completedStages.includes(4) && (
          <ChoiceQuestion
            question="Jaka jest dziedzina funkcji $$P(x)$$?"
            choices={[
              { label: "0 < x < 3", value: "a" },
              { label: "0 < x < 4", value: "b" },
              { label: "0 < x < 6", value: "c" },
              { label: "0 < x < 12", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "$$x > 0$$, $$y > 0$$, $$z > 0$$.<br/>" +
              "$$y = 12 - 4x > 0 \\implies x < 3$$<br/>" +
              "$$z = 3x > 0 \\implies x > 0$$<br/>" +
              "Zatem: $$0 < x < 3$$."
            }
            onComplete={() => handleStageComplete(5)}
          />
        )}
        {completedStages.includes(5) && (
        <ChoiceQuestion
            question="Dla jakiej wartości $$x$$ pole $$P(x)=96x - 26x^2$$ jest największe?"
            choices={[
            { label: "x = \\frac{24}{13}", value: "a" },
            { label: "x = \\frac{13}{24}", value: "b" },
            { label: "x = 2", value: "c" },
            { label: "x = 3", value: "d" }
            ]}
            correctAnswer="a"
            explanation={
            "Funkcja kwadratowa osiąga maksimum dla $$x_0 = -\\frac{b}{2a}$$.<br/>" +
            "W naszym przypadku: $$x_0 = -\\frac{96}{2 \\cdot (-26)} = -\\frac{96}{-52} = \\frac{96}{52} = \\frac{24}{13}$$.<br/>" +
            "To jest dokładna wartość $$x$$, dla której pole powierzchni całkowitej jest największe."
            }
            onComplete={() => handleStageComplete(6)}
        />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(6) && (
          <StudentNotes
            equation="P(x) = 2[x(12-4x) + 3x(12-4x) + x \cdot 3x]"
            steps={[
              { step: "\\text{Oznaczamy: } x = |AB|,\\; y = |AD|,\\; z = |AE| = 3x" },
              { step: "4(x + y + z) = 48 \\implies x + y + z = 12" },
              { step: "x + y + 3x = 12 \\implies y = 12 - 4x" },
              { step: "P(x) = 2[x(12-4x) + 3x(12-4x) + x \\cdot 3x]" },
              { step: "P(x) = 2[12x - 4x^2 + 36x - 12x^2 + 3x^2] = 2[48x - 13x^2]" },
              { step: "P(x) = 96x - 26x^2" },
              { step: "\\text{Dziedzina: } 0 < x < 3" },
              { step: "\\text{Maksimum dla } x = \\frac{96}{52}"},
            ]}
            solutions={[
              "\\text{Wzór: }P(x) = 96x - 26x^2",
              "\\text{Dziedzina: } 0 < x < 3",
              "\\text{Dla } x = 2 \\text{ pole powierzchni całkowitej jest największe}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
