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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Dodawanie ułamków</h2>
        <p className="text-lg text-gray-800">Wykonaj dodawanie ułamków:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{1}{2} + \frac{1}{3}" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jaki jest najmniejszy wspólny mianownik dla tych ułamków?
            </p>
            <ChoiceQuestion
              question="Wybierz najmniejszą liczbę, która dzieli się przez oba mianowniki (2 i 3):"
              choices={[
                { label: "4", value: "a" },
                { label: "5", value: "b" },
                { label: "6", value: "c" },
                { label: "12", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Najmniejszy wspólny mianownik to $$6$$, ponieważ jest to najmniejsza liczba, 
              która dzieli się przez oba stare mianowniki ($$2$$ i $$3$$). 
              Inne wspólne mianowniki jak $$12$$ też by działały, ale $$6$$ jest najmniejszy."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Teraz rozszerz oba ułamki do wspólnego mianownika (6).
            </p>
            <ChoiceQuestion
              question="Jak prawidłowo rozszerzyć ułamki do mianownika 6?"
              choices={[
                { label: "\\frac{1}{2} = \\frac{2}{6}, \\frac{1}{3} = \\frac{2}{6}", value: "a" },
                { label: "\\frac{1}{2} = \\frac{3}{6}, \\frac{1}{3} = \\frac{2}{6}", value: "b" },
                { label: "\\frac{1}{2} = \\frac{6}{12}, \\frac{1}{3} = \\frac{6}{18}", value: "c" },
                { label: "\\frac{1}{2} = \\frac{1}{6}, \\frac{1}{3} = \\frac{1}{6}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Aby rozszerzyć ułamki: <br><br>
                $$\frac{1}{2}$$ mnożymy licznik i mianownik przez $$3$$: $$\frac{1×3}{2×3} = \frac{3}{6}$$ <br><br>
                $$\frac{1}{3}$$ mnożymy licznik i mianownik przez $$2$$: $$\frac{1×2}{3×2} = \frac{3}{6}$$ <br><br>
                Teraz oba ułamki mają ten sam mianownik."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj dodawanie ułamków o tym samym mianowniku.
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{3}{6}+ \frac{2}{6}$$?"
              choices={[
                { label: "\\frac{5}{6}", value: "a" },
                { label: "\\frac{5}{12}", value: "b" },
                { label: "\\frac{6}{6}", value: "c" },
                { label: "\\frac{2}{6}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Gdy ułamki mają ten sam mianownik, dodajemy tylko liczniki: <br>
                $$\frac{3}{6} + \frac{2}{6} = \frac{3+2}{6} = \frac{5}{6}$$ <br>
                Mianownik pozostaje bez zmian."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czy można uprościć wynik 5/6?
            </p>
            <ChoiceQuestion
              question="Czy ułamek $$\frac{5}{6}$$ da się skrócić?"
              choices={[
                { label: "\\text{Tak, przez 5}", value: "a" },
                { label: "\\text{Tak, przez 6}", value: "b" },
                { label: "\\text{Nie, jest już w najprostszej postaci}", value: "c" },
                { label: "\\text{Tak, przez 2}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Ułamek $$\frac{5}{6}$$ nie może być skrócony, ponieważ $$5$$ i $$6$$ nie mają wspólnych dzielników 
              (poza 1). Jest to już najprostsza postać tego ułamka."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{1}{2} + \frac{1}{3}"
            steps={[
              {
                step: "\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}",
              },

            ]}
            solutions={["\\frac{5}{6}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;