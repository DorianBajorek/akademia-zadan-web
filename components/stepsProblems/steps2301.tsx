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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wartości funkcji</h2>
        <p className="text-lg text-gray-800 mt-4">
          Dana jest funkcja <InlineMath math="f(x) = \frac{2x^3 - x}{x^2 + 1} - \frac{5}{x}" />. Oblicz wartość tej funkcji dla argumentu <InlineMath math="x = 2" />.
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak poprawnie podstawić x=2 do wzoru funkcji?"
            choices={[
              { label: "f(2) = \\frac{2 \\cdot 2^3 - 2}{2^2 + 1} - \\frac{5}{2}", value: "a" },
              { label: "f(2) = \\frac{-2 \\cdot 2^3 - 2}{2^2 + 1} - \\frac{5}{2}", value: "b" },
              { label: "f(2) = \\frac{-2 \\cdot 2^3 + 2}{2^2 + 1} - \\frac{5}{2}", value: "c" },
              { label: "f(2) = \\frac{2 \\cdot 2^3 - 2}{2^2 + 1} + \\frac{5}{2}", value: "d" }
            ]}
            correctAnswer="a"
            explanation="Poprawna odpowiedź to pierwsza opcja, która pokazuje pełne podstawienie przed jakimikolwiek obliczeniami."
            onComplete={() => handleStageComplete(0)}
          />
        )}

        {(completedStages.includes(0) && (completedStages.includes(1) || completedStages.length === 1)) && (
          <ChoiceQuestion
            question="Jaki jest ostateczny wynik f(2)?"
            choices={[
              { label: "0.3", value: "a" },
              { label: "1.5", value: "b" },
              { label: "0.8", value: "c" },
              { label: "1.1", value: "d" }
            ]}
            correctAnswer="a"
            explanation={`
              Poprawny wynik to 0.3. Obliczenia:
              <br>1. Licznik pierwszego ułamka: 2·8 - 2 = 14
              <br>2. Mianownik pierwszego ułamka: 4 + 1 = 5
              <br>3. Pierwszy ułamek: 14/5 = 2.8
              <br>4. Drugi ułamek: 5/2 = 2.5
              <br>5. Wynik: 2.8 - 2.5 = 0.3
            `}
            onComplete={() => handleStageComplete(1)}
          />
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x) = \frac{2x^3 - x}{x^2 + 1} - \frac{5}{x}"
            steps={[
              { step: "f(2) = \\frac{2 \\cdot 8 - 2}{4 + 1} - \\frac{5}{2}" },
              { step: "= \\frac{14}{5} - 2.5 = 2.8 - 2.5 = 0.3" }
            ]}
            solutions={["f(2) = 0.3"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;