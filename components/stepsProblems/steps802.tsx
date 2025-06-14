"use client";

import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import { solveProblem } from "@/service";
import { useAuth } from "@/app/UserData";

const Page = () => {
  const { token } = useAuth();
  const taskId = "802";
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [problemSolved, setProblemSolved] = useState(false);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 3 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log("Problem marked as completed"))
        .catch((err) => console.error("Problem completion failed", err));
    }
  }, [problemSolved, taskId, token]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Mnożenie ułamków mieszanych</h2>
        <p className="text-lg text-gray-800">Wykonaj mnożenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="1\frac{1}{2} \cdot 2\frac{1}{4}" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: Zamiana obu ułamków mieszanych na niewłaściwe
            </p>
            <ChoiceQuestion
              question="Jak przedstawić w postaci ułamków niewłaściwych?"
              choices={[
                { label: "\\frac{3}{2} \\text{ i } \\frac{4}{4}", value: "a" },
                { label: "\\frac{3}{2} \\text{ i } \\frac{9}{4}", value: "b" },
                { label: "\\frac{2}{3} \\text{ i } \\frac{4}{9}", value: "c" },
                { label: "\\frac{1}{2} \\text{ i } \\frac{1}{4}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Żeby zmienić całości, należy całość pomnożyć z mianownikiem i dodać licznik. Mianownik się nie zmienia <br> <br>
                $$2\\frac{1}{2} = \\frac{5}{2}$$, Bo $$2 \\cdot 2 + 1 = 5$$ <br> <br>
                $$1\\frac{1}{4} = \\frac{5}{4}$$, Bo $$1 \\cdot 4 + 1 = 5$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Teraz wykonaj mnożenie ułamków niewłaściwych:
              <InlineMath math="\frac{3}{2} \cdot \frac{9}{4}" />
            </p>
            <ChoiceQuestion
              question="Jakie jest prawidłowe mnożenie tych ułamków?"
              choices={[
                { label: "\\frac{12}{8}", value: "a" },
                { label: "\\frac{9}{8}", value: "b" },
                { label: "\\frac{6}{6}", value: "c" },
                { label: "\\frac{27}{8}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="W celu wyznaczenia ostatecznego wyniku musimy pomnożyć licznik z licznikiem oraz mianownik z mianownikiem. <br> <br>
                $$\\frac{3}{2} \\cdot \\frac{9}{4} = \\frac{27}{8}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zamiana ułamka niewłaściwego na liczbę mieszaną
            </p>
            <ChoiceQuestion
              question="Jak przedstawić $$\frac{27}{8}$$ jako liczbę mieszaną?"
              choices={[
                { label: "2\\frac{11}{8}", value: "a" },
                { label: "3\\frac{3}{8}", value: "b" },
                { label: "4\\frac{1}{8}", value: "c" },
                { label: "3\\frac{5}{8}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="$$\\frac{27}{8} = 3\\frac{3}{8}$$, bo $$27 \\div 8 = 3$$ i reszta $$3$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="1\\frac{1}{2} \\cdot 2\\frac{1}{4}"
            steps={[
              {
                step: "1\\frac{1}{2} \\cdot 2\\frac{1}{4} = \\frac{3}{2} \\cdot \\frac{9}{4} = \\frac{27}{8} = 3\\frac{3}{8}",
              },
            ]}
            solutions={["3\\frac{3}{8}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
