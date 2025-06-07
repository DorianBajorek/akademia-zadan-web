"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) => setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Przekątna kwadratu – sąsiednie wierzchołki
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Punkty <InlineMath math="A = (-4, 4)" /> i <InlineMath math="B = (4, 0)" /> są sąsiednimi wierzchołkami kwadratu <InlineMath math="ABCD" />.
          Przekątna tego kwadratu ma długość:
        </p>

        {/* ETAP 1: Oblicz długość boku kwadratu AB */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Jaka jest długość boku kwadratu $$AB$$?"
            choices={[
              { label: "4", value: "a" },
              { label: "8", value: "b" },
              { label: "4\\sqrt{5}", value: "c" },
              { label: "8\\sqrt{2}", value: "d" },
            ]}
            correctAnswer="c"
            explanation={
              "Długość odcinka $$AB$$ obliczamy:<br/>" +
              "$$AB = \\sqrt{(4 - (-4))^2 + (0 - 4)^2} = \\sqrt{8^2 + (-4)^2} = \\sqrt{64 + 16} = \\sqrt{80} = 4\\sqrt{5}$$"
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Wzór na przekątną kwadratu */}
        {completedStages.includes(1) &&  (
          <ChoiceQuestion
            question="Jak wyrażamy długość przekątnej kwadratu o boku $$a$$?"
            choices={[
              { label: "a", value: "a" },
              { label: "a\\sqrt{2}", value: "b" },
              { label: "2a", value: "c" },
              { label: "a^2", value: "d" },
            ]}
            correctAnswer="b"
            explanation="Przekątna kwadratu: $$d = a\sqrt{2}$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Oblicz długość przekątnej */}
        {completedStages.includes(2) &&  (
          <ChoiceQuestion
            question="Jaka jest długość przekątnej tego kwadratu?"
            choices={[
              { label: "4\\sqrt{10}", value: "a" },
              { label: "4\\sqrt{2}", value: "b" },
              { label: "4\\sqrt{5}", value: "c" },
              { label: "8\\sqrt{5}", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Bok kwadratu $$a = 4\\sqrt{5}$$, więc przekątna to $$4\\sqrt{5} \\cdot \\sqrt{2} = 4\\sqrt{10}$$."
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="d = a\sqrt{2}"
            steps={[
              { step: "AB = \\sqrt{(4 + 4)^2 + (0 - 4)^2} = 4\\sqrt{5}" },
              { step: "\\text{Przekątna: } 4\\sqrt{5} \\cdot \\sqrt{2} = 4\\sqrt{10}" },
            ]}
            solutions={[
              "\\text{Przekątna: } 4\\sqrt{10}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
