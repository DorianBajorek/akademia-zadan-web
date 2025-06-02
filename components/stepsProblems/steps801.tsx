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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Odejmowanie ułamków</h2>
        <p className="text-lg text-gray-800">Wykonaj odejmowanie ułamków:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{3}{5} - \frac{1}{2}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jaki jest najmniejszy wspólny mianownik dla tych ułamków?
            </p>
            <ChoiceQuestion
              question="Wybierz najmniejszą liczbę, która dzieli się przez oba mianowniki $$5$$ i $$2$$:"
              choices={[
                { label: "5", value: "a" },
                { label: "10", value: "b" },
                { label: "15", value: "c" },
                { label: "20", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Najmniejszy wspólny mianownik to $$10$$, ponieważ jest to najmniejsza liczba, 
              która dzieli się przez oba stare mianowniki $$5$$ i $$2$$. 
              Inne wspólne mianowniki jak $$20$$ też by działały, ale $$10$$ jest najmniejszy."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Teraz rozszerz oba ułamki do wspólnego mianownika (10).
            </p>
            <ChoiceQuestion
              question="Jak prawidłowo rozszerzyć ułamki do mianownika $$10$$?"
              choices={[
                { label: "\\frac{3}{5} = \\frac{6}{10}, \\frac{1}{2} = \\frac{5}{10}", value: "a" },
                { label: "\\frac{3}{5} = \\frac{3}{10}, \\frac{1}{2} = \\frac{1}{10}", value: "b" },
                { label: "\\frac{3}{5} = \\frac{5}{10}, \\frac{1}{2} = \\frac{6}{10}", value: "c" },
                { label: "\\frac{3}{5} = \\frac{30}{50}, \\frac{1}{2} = \\frac{10}{20}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Aby rozszerzyć ułamki: <br><br>
                $$\frac{3}{5}$$ mnożymy licznik i mianownik przez $$2$$: $$\frac{3×2}{5×2} = \frac{6}{10}$$ <br><br>
                $$\frac{1}{2}$$ mnożymy licznik i mianownik przez $$5$$: $$\frac{1×5}{2×5} = \frac{5}{10}$$ <br><br>
                Teraz oba ułamki mają ten sam mianownik."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj odejmowanie ułamków o tym samym mianowniku.
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{6}{10} - \frac{5}{10}$$?"
              choices={[
                { label: "\\frac{1}{10}", value: "a" },
                { label: "\\frac{11}{10}", value: "b" },
                { label: "\\frac{1}{0}", value: "c" },
                { label: "\\frac{5}{10}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Gdy ułamki mają ten sam mianownik, odejmujemy tylko liczniki: <br>
                $$\frac{6}{10} - \frac{5}{10} = \frac{6-5}{10} = \frac{1}{10}$$ <br>
                Mianownik pozostaje bez zmian."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czy można uprościć wynik 1/10?
            </p>
            <ChoiceQuestion
              question="Czy ułamek $$\frac{1}{10}$$ da się skrócić?"
              choices={[
                { label: "\\text{Tak, przez 5}", value: "a" },
                { label: "\\text{Tak, przez 10}", value: "b" },
                { label: "\\text{Nie, jest już w najprostszej postaci}", value: "c" },
                { label: "\\text{Tak, przez 2}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Ułamek $$\frac{1}{10}$$ nie może być skrócony, ponieważ $$1$$ i $$10$$ nie mają wspólnych dzielników 
              (poza $$1$$). Jest to już najprostsza postać tego ułamka."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{3}{5} - \frac{1}{2}"
            steps={[
              {
                step: "\\frac{3}{5} - \\frac{1}{2} = \\frac{6}{10} - \\frac{5}{10} = \\frac{1}{10}",
              },
            ]}
            solutions={["\\frac{1}{10}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;