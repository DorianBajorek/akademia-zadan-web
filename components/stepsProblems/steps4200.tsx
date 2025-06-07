"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
import StudentNotes from "./StudentsNotes";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) => setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Przekątna kwadratu w układzie współrzędnych
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)" /> dany jest kwadrat <InlineMath math="ABCD" />, w którym <InlineMath math="A = (4, -1)" />.
          Przekątne tego kwadratu przecinają się w punkcie <InlineMath math="S = (1, 3)" />.<br />
          Przekątna kwadratu <InlineMath math="ABCD" /> ma długość:
        </p>
        
        {/* ETAP 1: Odległość między punktem A a S */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Jaka jest odległość między punktem $$A = (4, -1)$$ a $$S = (1, 3)$$?"
            choices={[
              { label: "5", value: "a" },
              { label: "7", value: "b" },
              { label: "10", value: "c" },
              { label: "4", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Odległość obliczamy ze wzoru:<br/>" +
              "$$AS = \\sqrt{(4-1)^2 + ((-1)-3)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$"
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Relacja odcinka AS do przekątnej */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jaką częścią przekątnej kwadratu jest odcinek $AS$?"
            choices={[
              { label: "\\text{Całą przekątną}", value: "a" },
              { label: "\\text{Połową przekątnej}", value: "b" },
              { label: "\\text{Jedną trzecią przekątnej}", value: "c" },
              { label: "\\text{Jedną czwartą przekątnej}", value: "d" },
            ]}
            correctAnswer="b"
            explanation={
              "Punkt $$S$$ jest środkiem kwadratu, więc $$AS$$ to połowa przekątnej kwadratu."
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Długość całej przekątnej */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jaka jest długość całej przekątnej kwadratu?"
            choices={[
              { label: "5", value: "a" },
              { label: "7", value: "b" },
              { label: "10", value: "c" },
              { label: "14", value: "d" },
            ]}
            correctAnswer="c"
            explanation={
              "Jeśli $$AS = 5$$, a jest to połowa przekątnej, to przekątna ma długość $$2 \\cdot 5 = 10$$."
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="AS = \sqrt{(4-1)^2 + ((-1)-3)^2} = 5"
            steps={[
              { step: "\\text{Odległość między } A \\text{ i } S: AS = 5" },
              { step: "S \\text{ to środek przekątnej } \\to AS = \\frac{1}{2} \\text{ przekątnej}" },
              { step: "\\text{Przekątna: } 2 \\cdot 5 = 10" },
            ]}
            solutions={[
              "\\text{Długość przekątnej kwadratu: } 10"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
