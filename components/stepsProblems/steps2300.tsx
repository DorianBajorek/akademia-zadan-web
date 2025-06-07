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
          Dana jest funkcja <InlineMath math="f(x) = 2x^2 - 3x + 5" />. Oblicz wartość tej funkcji dla argumentu <InlineMath math="x = -2" />.
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Jak należy obliczyć wartość funkcji dla danego argumentu?"
              choices={[
                { label: "\\text{Podstawić argument do wzoru funkcji i obliczyć}", value: "a" },
                { label: "\\text{Znaleźć miejsce zerowe funkcji}", value: "b" },
                { label: "\\text{Obliczyć pochodną funkcji}", value: "c" },
                { label: "\\text{Narysować wykres funkcji}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to: Podstawić argument do wzoru funkcji i obliczyć. <br>
              Aby obliczyć wartość funkcji dla konkretnego argumentu, należy podstawić tę wartość w miejsce x we wzorze funkcji i wykonać obliczenia."
              onComplete={() => handleStageComplete(0)}
            />
          </>
        )}

        {(completedStages.includes(0) && (completedStages.includes(1) || completedStages.length === 1)) && (
          <>
            <ChoiceQuestion
              question="Jak poprawnie podstawić wartość x = -2 do wzoru funkcji?"
              choices={[
                { label: "f(-2) = 2 \\cdot (-2)^2 - 3 \\cdot (-2) + 5", value: "a" },
                { label: "f(-2) = 2 \\cdot -2^2 - 3 \\cdot -2 + 5", value: "b" },
                { label: "f(-2) = 2(-2)^2 - 3(-2) + 5", value: "c" },
                { label: "f(-2) = 2 \\cdot -2^2 - 3 \\cdot -2 + 5", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to: $$f(-2) = 2 \cdot (-2)^2 - 3 \cdot (-2) + 5$$. <br>
              Ważne jest prawidłowe podstawienie wartości ujemnej, pamiętając o nawiasach: <br>
              $$(-2)^2 = 4$$, a $$-2^2 = -4$$ (co byłoby błędem)"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {(completedStages.includes(1) && (completedStages.includes(2) || completedStages.length === 2)) && (
          <>
            <ChoiceQuestion
              question="Jaka jest wartość $$f(-2)$$ dla funkcji $$f(x) = 2x² - 3x + 5$$?"
              choices={[
                { label: "15", value: "a" },
                { label: "19", value: "b" },
                { label: "7", value: "c" },
                { label: "11", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawna odpowiedź to: 19. <br>
              Obliczenia krok po kroku: <br>
              1. $$f(-2) = 2 \cdot (-2)^2 - 3 \cdot (-2) + 5$$ <br>
              2. $$= 2 \cdot 4 - (-6) + 5$$ <br>
              3. $$= 8 + 6 + 5$$ <br>
              4. $$= 19$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="f(x) = 2x^2 - 3x + 5"
            steps={[
              { step: "f(-2) = 2 \\cdot (-2)^2 - 3 \\cdot (-2) + 5 = 2·4 + 6 + 5 = 8 + 6 + 5 = 19" },
            ]}
            solutions={["f(-2) = 19"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;