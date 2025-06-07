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
          Pole trójkąta równobocznego w układzie współrzędnych
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)" /> punkty <InlineMath math="K = (-7, -2)" /> oraz <InlineMath math="L = (-1, 4)" /> są wierzchołkami trójkąta równobocznego <InlineMath math="KLM" />.<br />
          Pole trójkąta <InlineMath math="KLM" /> jest równe:
        </p>

        {/* ETAP 1: Oblicz długość boku KL */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Jaka jest długość boku $$KL$$?"
            choices={[
              { label: "6", value: "a" },
              { label: "8", value: "b" },
              { label: "12", value: "c" },
              { label: "6\\sqrt{2}", value: "d" },
            ]}
            correctAnswer="d"
            explanation={
              "Obliczamy odległość między K i L:<br/>" +
              "$$KL = \\sqrt{(-1 - (-7))^2 + (4 - (-2))^2} = \\sqrt{6^2 + 6^2} = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}$$"
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Wzór na pole trójkąta równobocznego */}
        {completedStages.includes(1) &&  (
          <ChoiceQuestion
            question="Jakim wzorem obliczamy pole trójkąta równobocznego o boku $$a$$?"
            choices={[
              { label: "\\frac{a^2}{4}", value: "a" },
              { label: "\\frac{a^2 \\sqrt{3}}{4}", value: "b" },
              { label: "\\frac{a^2 \\sqrt{2}}{2}", value: "c" },
              { label: "\\frac{a^2 \\sqrt{2}}{4}", value: "d" },
            ]}
            correctAnswer="b"
            explanation={
              "Pole trójkąta równobocznego to $$P = \\frac{a^2 \\sqrt{3}}{4}$$, gdzie $$a$$ to długość boku."
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Oblicz pole trójkąta */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie jest pole trójkąta o boku $$6\sqrt{2}$$?"
            choices={[
              { label: "17\\sqrt{2}", value: "a" },
              { label: "17\\sqrt{3}", value: "b" },
              { label: "18\\sqrt{2}", value: "c" },
              { label: "18\\sqrt{3}", value: "d" },
            ]}
            correctAnswer="d"
            explanation={
              "$$P = \\frac{(6\\sqrt{2})^2 \\sqrt{3}}{4} = \\frac{72 \\sqrt{3}}{4} = 18\\sqrt{3}$$"
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="P = \frac{a^2 \sqrt{3}}{4}"
            steps={[
              { step: "KL = \\sqrt{(-1+7)^2 + (4+2)^2} = 6\\sqrt{2}" },
              { step: "P = \\frac{(6\\sqrt{2})^2 \\sqrt{3}}{4} = 18\\sqrt{3}" },
            ]}
            solutions={[
              "\\text{Pole: } 18\\sqrt{3}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
