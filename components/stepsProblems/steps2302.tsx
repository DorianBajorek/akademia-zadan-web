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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie wartości funkcji wymiernej</h2>
        <p className="text-lg text-gray-800 mt-4">
          Funkcja <InlineMath math="f" /> jest określona wzorem <InlineMath math="f(x) = \frac{2x - 8}{x}" /> dla każdej liczby rzeczywistej <InlineMath math="x \neq 0" />.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Wówczas wartość funkcji <InlineMath math="f(\sqrt{2})" /> jest równa:
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak poprawnie podstawić $$x=\sqrt{2}$$ do wzoru funkcji?"
            choices={[
              { label: "f(\\sqrt{2}) = 2 - \\frac{8}{2}", value: "a" },
              { label: "f(\\sqrt{2}) = \\frac{2\\sqrt{2} - 8}{\\sqrt{2}}  ", value: "b" },
              { label: "f(\\sqrt{2}) = \\frac{2\\sqrt{2}}{\\sqrt{2}} - 8", value: "c" },
              { label: "f(\\sqrt{2}) = 2\\sqrt{2} - \\frac{8}{\\sqrt{2}}", value: "d" }
            ]}
            correctAnswer="b"
            explanation="Poprawna odpowiedź to druga opcja, która pokazuje pełne podstawienie przed jakimikolwiek przekształceniami."
            onComplete={() => handleStageComplete(0)}
          />
        )}

        {(completedStages.includes(0) && (completedStages.includes(1) || completedStages.length === 1)) && (
          <ChoiceQuestion
            question="Jaki jest ostateczny wynik $$f(\sqrt{2})$$ po uproszczeniu?"
            choices={[
              { label: "2 + 4\\sqrt{2}", value: "a" },
              { label: "1 - 2\\sqrt{2}", value: "b" },
              { label: "1 + 2\\sqrt{2}", value: "c" },
              { label: "2 - 4\\sqrt{2}", value: "d" }
            ]}
            correctAnswer="d"
            explanation={`
              Poprawny wynik to $$(2 - 4\\sqrt{2})$$. Obliczenia:
              <br>1. Podstawienie: $$f(\\sqrt{2}) = \\frac{(2\\sqrt{2} - 8)}{\\sqrt{2}}$$
              <br>2. Rozbicie na dwa ułamki: $$\\frac{2\\sqrt{2}}{\\sqrt{2}\} - \\frac{8}{\\sqrt{2}}$$
              <br>3. Uproszczenie pierwszego ułamka: $$2 - \\frac{8}{\\sqrt{2}}$$
              <br>4. Usunięcie niewymierności z mianownika: $$2 - \\frac{8\\sqrt{2}}{2}$$
              <br>5. Uproszczenie: $$2 - 4\\sqrt{2}$$
            `}
            onComplete={() => handleStageComplete(1)}
          />
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x) = \frac{2x - 8}{x}"
            steps={[
              { step: "f(\\sqrt{2}) = \\frac{2\\sqrt{2} - 8}{\\sqrt{2}}" },
              { step: "= \\frac{2\\sqrt{2}}{\\sqrt{2}} - \\frac{8}{\\sqrt{2}}" },
              { step: "= 2 - \\frac{8\\sqrt{2}}{2}" },
              { step: "= 2 - 4\\sqrt{2}" }
            ]}
            solutions={["f(\\sqrt{2}) = 2 - 4\\sqrt{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;