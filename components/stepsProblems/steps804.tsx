"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";

const SubtractionPage = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Odejmowanie ułamków</h2>
        <p className="text-lg text-gray-800">Wykonaj odejmowanie:</p>
        <div className="text-2xl font-bold text-gray-900 text-center mt-4 space-y-4">
          <InlineMath math="\frac{\frac{3}{4} - \frac{2}{3}}{\frac{2}{3} - \frac{1}{2}}" />
        </div>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: Znajdź wspólny mianownik dla obu ułamków
            </p>
            <ChoiceQuestion
              question="Jaki jest wspólny mianownik dla ułamków $$\frac{3}{4}$$ i $$\frac{2}{3}$$?"
              choices={[
                { label: "24", value: "a" },
                { label: "6", value: "b" },
                { label: "8", value: "c" },
                { label: "12", value: "d" },
              ]}
              correctAnswer="d"
              explanation="$$12$$ jest wspólnym mianownikie ponieważ jest to liczba, która dzieli się przez stare mianowniki ($$12$$ można podzielić przez $$4$$ oraz $$3$$)."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: Przekształć ułamki do wspólnego mianownika
            </p>
            <ChoiceQuestion
              question="Jak przedstawić ułamki $$\frac{3}{4}$$ i $$\frac{2}{3}$$ z mianownikiem $$12$$?"
              choices={[
                { label: "\\frac{9}{12} \\text{ i } \\frac{8}{12}", value: "a" },
                { label: "\\frac{6}{12} \\text{ i } \\frac{6}{12}", value: "b" },
                { label: "\\frac{3}{12} \\text{ i } \\frac{2}{12}", value: "c" },
                { label: "\\frac{12}{12} \\text{ i } \\frac{12}{12}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\frac{3}{4} = \frac{3 \cdot 3}{4 \cdot 3} = \frac{9}{12}$$ <br><br>
              $$\frac{2}{3} = \frac{2 \cdot 4}{3 \cdot 4} = \frac{8}{12}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: Wykonaj odejmowanie ułamków w liczniku
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{9}{12} - \frac{8}{12}$$?"
              choices={[
                { label: "\\frac{17}{12}", value: "a" },
                { label: "\\frac{1}{12}", value: "b" },
                { label: "\\frac{1}{0}", value: "c" },
                { label: "\\frac{1}{24}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Odejmujemy tylko liczniki, mianownik pozostaje bez zmian: $$\frac{9}{12} - \frac{8}{12} = \frac{1}{12}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Teraz wykonaj drugie odejmowanie:  <InlineMath math="\frac{2}{3} - \frac{1}{2}" />
            </p>
            <ChoiceQuestion
              question="Jaki jest wspólny mianownik dla ułamków $$\frac{2}{3}$$ i $$\frac{1}{2}$$?"
              choices={[
                { label: "3", value: "a" },
                { label: "12", value: "b" },
                { label: "6", value: "c" },
                { label: "2", value: "d" },
              ]}
              correctAnswer="c"
              explanation="$$6$$ jest wspólnym mianownikie ponieważ jest to liczba, która dzieli się przez stare mianowniki ($$6$$ można podzielić przez $$3$$ oraz $$2$$)."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć ułamki do wspólnego mianownika
            </p>
            <ChoiceQuestion
              question="Jak przedstawić ułamki $$\frac{2}{3}$$ i $$\frac{1}{2}$$ z mianownikiem 6?"
              choices={[
                { label: "\\frac{4}{6} \\text{ i } \\frac{3}{6}", value: "a" },
                { label: "\\frac{2}{6} \\text{ i } \\frac{1}{6}", value: "b" },
                { label: "\\frac{6}{6} \\text{ i } \\frac{6}{6}", value: "c" },
                { label: "\\frac{5}{6} \\text{ i } \\frac{4}{6}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="$$\frac{2}{3} = \frac{2 \cdot 2}{3 \cdot 2} = \frac{4}{6}$$ <br><br>
              $$\frac{1}{2} = \frac{1 \cdot 3}{2 \cdot 3} = \frac{3}{6}$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.includes(5) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj odejmowanie liczników
            </p>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{4}{6} - \frac{3}{6}$$?"
              choices={[
                { label: "\\frac{1}{12}", value: "a" },
                { label: "\\frac{7}{6}", value: "b" },
                { label: "\\frac{1}{0}", value: "c" },
                { label: "\\frac{1}{6}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Odejmujemy tylko liczniki, mianownik pozostaje bez zmian: $$\frac{4}{6} - \frac{3}{6} = \frac{1}{6}$$"
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
        
        {completedStages.includes(6) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Po przekształceniach nasze wyrażenie wygląda następująca: <InlineMath math="\frac{\frac{1}{12}}{\frac{1}{6}}" />
            </p>
            <ChoiceQuestion
              question="Jak prawidłowo można przekształcić to wyrażenie?"
              choices={[
                { label: "\\frac{1}{12} : \\frac{1}{6}", value: "a" },
                { label: "\\frac{1}{12} \\cdot \\frac{1}{6}", value: "b" },
                { label: "\\frac{1}{12} + \\frac{1}{6}", value: "c" },
                { label: "\\frac{1}{12} - \\frac{1}{6}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Kreska ułamkowa w matematyce oznacza dzielenie. Możemy więc zapisać wyrażenie w postaci $$\frac{1}{12} : \frac{1}{6}$$"
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {completedStages.includes(6) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Ostatniem etapem jest dokonanie dzielania
            </p>
            <ChoiceQuestion
              question="Jaki jest wynik dzielenia tych dwóch ułamków? $$\frac{1}{12} : \frac{1}{6}$$"
              choices={[
                { label: "\\frac{1}{12}", value: "a" },
                { label: "\\frac{1}{6}", value: "b" },
                { label: "2", value: "c" },
                { label: "\\frac{1}{2}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Dzielenie zamieniamy na mnożenie a następnie skracamy na krzyż: $$\frac{1}{12} : \frac{1}{6} = \frac{1}{12} \cdot \frac{6}{1} = \frac{1}{2}$$"
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {completedStages.length === 8 && (
          <StudentNotes
            equation="\frac{\frac{3}{4} - \frac{2}{3}}{\frac{2}{3} - \frac{1}{2}}"
            steps={[
              {
                step: "\\frac{\\frac{3}{4} - \\frac{2}{3}}{\\frac{2}{3} - \\frac{1}{2}} = \\frac{\\frac{9}{12} - \\frac{8}{12}}{\\frac{4}{6} - \\frac{3}{6}} = \\frac{\\frac{1}{12}}{\\frac{1}{6}} = \\frac{1}{12} : \\frac{1}{6} = \\frac{1}{12} \\cdot \\frac{6}{1} = \\frac{1}{2}",
              },
            ]}
            solutions={["\\frac{1}{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default SubtractionPage;