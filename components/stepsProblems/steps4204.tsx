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
          Odległość punktu od środka odcinka
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Końcami odcinka <InlineMath math="PR" /> są punkty <InlineMath math="P = (4, 7)" /> i <InlineMath math="R = (-2, -3)" />.<br />
          Odległość punktu <InlineMath math="T = (3, -1)" /> od środka odcinka <InlineMath math="PR" /> jest równa:
        </p>

        {/* ETAP 1: Wyznaczenie środka odcinka PR */}
        {(completedStages.length === 0 || completedStages.includes(1)) && (
          <ChoiceQuestion
            question="Jakie są współrzędne środka odcinka $$PR$$?"
            choices={[
              { label: "(1, 2)", value: "a" },
              { label: "(1, 5)", value: "b" },
              { label: "(3, -1)", value: "c" },
              { label: "(1, 7)", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Współrzędne środka to:<br/>" +
              "$$\\left( \\frac{4 + (-2)}{2}, \\frac{7 + (-3)}{2} \\right) = (1, 2)$$"
            }
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Wzór na odległość punktów w układzie współrzędnych */}
        {completedStages.includes(1) &&  (
          <ChoiceQuestion
            question="Jaki jest wzór na odległość dwóch punktów $$(x_1, y_1)$$ i $$(x_2, y_2)$$?"
            choices={[
              { label: "\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}", value: "a" },
              { label: "\\sqrt{(x_2 + x_1)^2 + (y_2 + y_1)^2}", value: "b" },
              { label: "(x_2 - x_1) + (y_2 - y_1)", value: "c" },
              { label: "\\sqrt{|x_2 - x_1| + |y_2 - y_1|}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Odległość: $$\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$"
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Podstawienie liczb i wybór wyniku */}
        {completedStages.includes(2) &&  (
          <ChoiceQuestion
            question="Ile wynosi odległość punktu $$T = (3, -1)$$ od środka odcinka $$PR$$?"
            choices={[
              { label: "\\sqrt{3}", value: "a" },
              { label: "\\sqrt{13}", value: "b" },
              { label: "\\sqrt{17}", value: "c" },
              { label: "6\\sqrt{2}", value: "d" },
            ]}
            correctAnswer="b"
            explanation={
              "Podstawiamy:<br/>" +
              "$$\\sqrt{(3-1)^2 + ((-1)-2)^2} = \\sqrt{2^2 + (-3)^2} = \\sqrt{4 + 9} = \\sqrt{13}$$"
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="d = \sqrt{(3-1)^2 + ((-1)-2)^2} = \sqrt{13}"
            steps={[
              { step: "Środek: (1, 2)" },
              { step: "Odległość: \\sqrt{(3-1)^2 + ((-1)-2)^2} = \\sqrt{4 + 9} = \\sqrt{13}" }
            ]}
            solutions={[
              "\\text{Odpowiedź: } \\sqrt{13}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
