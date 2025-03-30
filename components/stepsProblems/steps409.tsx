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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Trzywyrazowy ciąg arytmetyczny</h2>
        <p className="text-lg text-gray-800">Trzywyrazowy ciąg </p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(k, 2k+3, 3k+5)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="k"/> i określ monotoniczność ciągu</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6"></p>
            <ChoiceQuestion
              question="Jeśli trzywyrazowy ciąg (a, b, c) jest arytmetyczny, to które równanie jest spełnione?"
              choices={[
                { label: "a + b + c = 0", value: "a" },
                { label: "b - c = 2a", value: "b" },
                { label: "2b = a + c", value: "c" },
                { label: "2c = a + b", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Z własności ciągu arytmetycznego: środkowy wyraz jest średnią arytmetyczną wyrazów sąsiednich, czyli: $$2b = a + c$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zastosuj własność ciągu arytmetycznego do podanego ciągu
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `2k = (2k+3) + (3k+5)`, value: "a" },
                { label: `2(2k+3) = k + (3k+5)`, value: "b" },
                { label: `2(3k+5) = k + (2k+3)`, value: "c" },
                { label: `2k+3 = (k + 3k+5)/2`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$2(2k+3) = k + (3k+5)$$ <br>
              Gdzie: <br>
              a = k, b = 2k+3, c = 3k+5 <br>
              Z własności ciągu: $$2b = a + c$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="4k + 6 = 4k + 5"/>
            </p>
            <ChoiceQuestion
              question="Co wynika z tego równania?"
              choices={[
                { label: "6 = 5 (sprzeczność)", value: "a" },
                { label: "k = 0", value: "b" },
                { label: "k = -1", value: "c" },
                { label: "Równanie tożsamościowe", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Po uproszczeniu równania: <br>
              1. $$4k + 6 = 4k + 5$$ <br>
              2. $$6 = 5$$ <br>
              Otrzymujemy sprzeczność, co oznacza że nie istnieje taka wartość k, dla której ciąg jest arytmetyczny."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wnioski z rozwiązania
            </p>
            <ChoiceQuestion
              question="Jaki wniosek płynie z rozwiązania?"
              choices={[
                { label: "Ciąg jest arytmetyczny dla k = 1", value: "a" },
                { label: "Ciąg jest arytmetyczny dla każdego k", value: "b" },
                { label: "Nie istnieje k, dla którego ciąg jest arytmetyczny", value: "c" },
                { label: "Ciąg jest arytmetyczny tylko dla k = 0", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Ponieważ równanie doprowadziło nas do sprzeczności (6 = 5), oznacza to że nie istnieje żadna wartość k, dla której ten ciąg byłby arytmetyczny."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="(k, 2k+3, 3k+5) \rightarrow \text{brak rozwiązań}"
            steps={[
              {
                step: "2b = a + c \\Rightarrow 2(2k+3) = k + (3k+5)",
              },
              {
                step: "4k + 6 = 4k + 5",
              },
              {
                step: "6 = 5 \\text{ (sprzeczność)}",
              },
              {
                step: "\\text{Nie istnieje } k \\text{ spełniający warunek}"
              }
            ]}
            solutions={["\\text{Brak rozwiązań}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;