"use client";

import { useState, useEffect } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import { solveProblem } from "@/service";
import { useAuth } from "@/app/UserData";

const Page = () => {
  const {token} = useAuth();
  const taskId = "800";
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [problemSolved, setProblemSolved] = useState(false);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 4 && !problemSolved) {
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Dodawanie ułamków</h2>
        <p className="text-lg text-gray-800">Wykonaj dodawanie ułamków:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\frac{1}{2} + \frac{1}{3}" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszym krokiem tego zadani jest znalezienie najmniejszego wspólnego mianownika.
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
              explanation="Najmniejszy wspólny mianownik $$(NWW)$$ to najmniejsza liczba, przez którą dzielą się oba mianowniki. W tym przypadku: 
                $$2$$ i $$3$$ dzielą się przez $$6$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Teraz jeśli znamy wspólny mianownik należy rozszerzyć ułamki tak aby uzyskać oczekiwany wspólny mianownik.</p>
            <ChoiceQuestion
              question="Jak prawidłowo rozszerzyć ułamki do mianownika 6?"
              choices={[
                { label: "\\frac{1}{2} = \\frac{2}{6}, \\frac{1}{3} = \\frac{2}{6}", value: "a" },
                { label: "\\frac{1}{2} = \\frac{3}{6}, \\frac{1}{3} = \\frac{2}{6}", value: "b" },
                { label: "\\frac{1}{2} = \\frac{6}{12}, \\frac{1}{3} = \\frac{6}{18}", value: "c" },
                { label: "\\frac{1}{2} = \\frac{1}{6}, \\frac{1}{3} = \\frac{1}{6}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Aby rozszerzyć ułamek, mnożymy licznik i mianownik przez tę samą liczbę. <br/> <br/>
              $$\frac{1}{2} = \frac{1 \cdot 3}{2 \cdot 3} = \frac{3}{6}$$<br/> <br/>
              $$\frac{1}{3} = \frac{1 \cdot 2}{3 \cdot 2} = \frac{2}{6}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Wykonaj dodawanie...</p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{3}{6}+ \frac{2}{6}$$?"
              choices={[
                { label: "\\frac{5}{6}", value: "a" },
                { label: "\\frac{5}{12}", value: "b" },
                { label: "\\frac{6}{6}", value: "c" },
                { label: "\\frac{2}{6}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Gdy ułamki mają ten sam mianownik, dodajemy tylko liczniki. 
        $$3 + 2 = 5$$, więc $$\frac{3}{6} + \frac{2}{6} = \frac{5}{6}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Czy można uprościć wynik...</p>
            <ChoiceQuestion
              question="Czy ułamek $$\frac{5}{6}$$ da się skrócić?"
              choices={[
                { label: "\\text{Tak, przez 5}", value: "a" },
                { label: "\\text{Tak, przez 6}", value: "b" },
                { label: "\\text{Nie, jest już w najprostszej postaci}", value: "c" },
                { label: "\\text{Tak, przez 2}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Nie da się skrócić, bo $$5$$ i $$6$$ nie mają wspólnych dzielników, czyli  liczb które dzielą jednocześnie $$5$$ i $$6$$. (oczywiście oprócz $$1$$, ale nie skracamy przez $$1$$, bo to nie zmiania wartości liczby)."
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
