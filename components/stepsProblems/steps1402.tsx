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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie kwadratowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie kwadratowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^2 + 4x + 5 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tego równania.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tym równaniu?"
              choices={[
                { label: "a = -1, b = 4, c = 5", value: "a" },
                { label: "a = 1, b = -4, c = 5", value: "b" },
                { label: "a = 1, b = 4, c = -5", value: "c" },
                { label: "a = 1, b = 4, c = 5", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Współczynniki dla równania $$x^2 + 4x + 5 = 0$$ to $$a = 1, b = 4, c = 5$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/postac-ogolna.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz deltę (Δ) dla tego równania.
            </p>
            <NumericQuestion
              question="Która wartość jest poprawną deltą (Δ) dla tego równania?"
              correctAnswer="-4"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości:
                $$\Delta = 4^2 - 4 \cdot 1 \cdot 5 = 16 - 20 = -4$$.
                Poprawna wartość delty to $$\Delta = -4$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/delta.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jaka jest interpretacja rozwiązania dla <InlineMath math="\Delta < 0" />?
            </p>
            <ChoiceQuestion
              question="Co oznacza, że $$\Delta < 0$$?"
              choices={[
                { label: "\\text{Brak miejsc zerowych – brak rozwiązań rzeczywistych}", value: "a" },
                { label: "\\text{Jedno rozwiązanie rzeczywiste}", value: "b" },
                { label: "\\text{Dwa rozwiązania rzeczywiste}", value: "c" },
                { label: "\\text{Rozwiązanie jest liczbą zespoloną ujemną}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Jeśli $$\Delta < 0$$, to równanie kwadratowe nie ma miejsc zerowych w zbiorze liczb rzeczywistych. Można je rozwiązać jedynie w zbiorze liczb zespolonych."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/brakMiejscZerowych.png"
            />
          </>
        )}

        {completedStages.includes(3) && (
          <StudentNotes
            equation="x^2 + 4x + 5 = 0"
            steps={[
              {
                step: "a = 1, b = 4, c = 5",
              },
              {
                step: "\\Delta = b^2 - 4ac = 4^2 - 4 \\cdot 1 \\cdot 5 = 16 - 20 = -4",
              },
              {
                step: "\\Delta < 0 \\Rightarrow \\text{brak miejsc zerowych w } \\mathbb{R}"
              },
            ]}
            solutions={["Brak miejsc zerowych (brak rozwiązań rzeczywistych)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
