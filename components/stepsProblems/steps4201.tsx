"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) => setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Długość boku kwadratu - układ współrzędnych
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)" /> punkty <InlineMath math="A = (-2, -1)" /> oraz <InlineMath math="C = (3, 4)" /> są przeciwległymi wierzchołkami kwadratu <InlineMath math="ABCD" />.<br />
          Długość boku kwadratu <InlineMath math="ABCD" /> jest równa:
        </p>

        {/* ETAP 1: Odległość między A i C (przekątna) */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Jaka jest długość przekątnej $$AC$$?"
            choices={[
              { label: "5", value: "a" },
              { label: "10", value: "b" },
              { label: "5\\sqrt{2}", value: "c" },
              { label: "\\sqrt{10}", value: "d" },
            ]}
            correctAnswer="c"
            explanation={
              "Obliczamy odległość:<br/>" +
              "$$AC = \\sqrt{(3 - (-2))^2 + (4 - (-1))^2} = \\sqrt{5^2 + 5^2} = \\sqrt{25 + 25} = \\sqrt{50} = 5\\sqrt{2}$$<br/>" +
              "To długość przekątnej kwadratu."
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Relacja przekątnej do boku kwadratu */}
        {completedStages.includes(1) &&  (
          <ChoiceQuestion
            question="Jak wyrazić długość przekątnej kwadratu o boku $$a$$?"
            choices={[
              { label: "a", value: "a" },
              { label: "2a", value: "b" },
              { label: "a\\sqrt{2}", value: "c" },
              { label: "\\frac{a}{2}", value: "d" },
            ]}
            correctAnswer="c"
            explanation={
              "Przekątna kwadratu to $$a\\sqrt{2}$$, gdzie $$a$$ to długość boku kwadratu."
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Obliczenie długości boku */}
        {completedStages.includes(2) &&  (
          <ChoiceQuestion
            question="Ile wynosi długość boku tego kwadratu?"
            choices={[
              { label: "5", value: "a" },
              { label: "10", value: "b" },
              { label: "5\\sqrt{2}", value: "c" },
              { label: "5", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Skoro $$a\\sqrt{2} = 5\\sqrt{2}$$, to $$a = 5$$."
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="AC = a\sqrt{2} = 5\sqrt{2}"
            steps={[
              { step: "AC = \\sqrt{(3-(-2))^2 + (4-(-1))^2} = 5\\sqrt{2}" },
              { step: "AC = a\\sqrt{2}" },
              { step: "a\\sqrt{2} = 5\\sqrt{2} \\implies a = 5" }
            ]}
            solutions={[
              "\\text{Bok kwadratu: } 5"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
