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
    <div className="bg-gray-50 min-h-screen p-5">
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
              explanation="Żeby wrzucić całości, należy całość pomnożyć z mianownikiem i dodać licznik. Mianownik się nie zmiania <br> <br>
              $$2\frac{1}{2} = \frac{5}{2}$$, Bo $$2 \cdot 2  + 1 = 5$$ (to jest nasz licznik) <br> <br>
              $$1\frac{1}{4} = \frac{5}{4}$$, Bo $$1 \cdot 2  + 1 = 5$$ (to jest nasz licznik)
              "
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
                { label: "\\frac{27}{8}", value: "b" },
                { label: "\\frac{6}{6}", value: "c" },
                { label: "\\frac{9}{8}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="W celu wyznaczenia ostatecznego wyniku musimy pomnożyć licznik z licznikim oraz mianownik z mianownikiem.  <br> <br>
                $$\frac{3}{2} \cdot \frac{9}{4} = \frac{27}{8}$$
              "
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
              explanation="$$\frac{27}{8} = 3\frac{3}{8}$$, liczbę $$27$$ podzielić przez $$8$$ możemy $$3$$ razy u zostają nam jeszcze reszta równa $$3$$ "
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czy można uprościć wynik?
            </p>
            <ChoiceQuestion
              question="Czy ułamek $$\frac{3}{8}$$ da się skrócić?"
              choices={[
                { label: "\\text{Tak, przez 3}", value: "a" },
                { label: "\\text{Tak, przez 2}", value: "b" },
                { label: "\\text{Nie, jest już w najprostszej postaci}", value: "c" },
                { label: "\\text{Tak, przez 4}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Ułamek $$\frac{3}{8}$$ nie może być skrócony, ponieważ $$3$$ i $$8$$ nie mają wspólnych dzielników (poza 1)."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="1\frac{1}{2} \cdot 2\frac{1}{4}"
            steps={[
              {
                step: "1\\frac{1}{2} \\cdot 2\\frac{1}{4} =  \\frac{3}{2} \\cdot \\frac{9}{4} = \\frac{27}{8} = 3\\frac{3}{8}",
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