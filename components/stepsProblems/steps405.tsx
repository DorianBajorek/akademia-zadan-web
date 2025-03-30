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
          <InlineMath math="(24, 6, a-1)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="a"/> i określ monotoniczność ciągu</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6"></p>
            <ChoiceQuestion
              question="Jeśli trzywyrazowy ciąg (x, y, z) jest arytmetyczny, to które równanie jest spełnione?"
              choices={[
                { label: "x + y + z = 0", value: "a" },
                { label: "y - z = 2x", value: "b" },
                { label: "2y = x + z", value: "c" },
                { label: "z = x + y", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Z własności ciągu arytmetycznego: środkowy wyraz jest średnią arytmetyczną wyrazów sąsiednich, czyli: $$2y = x + z$$"
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
                { label: "2·24 = 6 + (a-1)", value: "a" },
                { label: "2·6 = 24 + (a-1)", value: "b" },
                { label: "2(a-1) = 24 + 6", value: "c" },
                { label: "6 = (24 + a - 1)/2", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne równanie to: $$2·6 = 24 + (a-1)$$ <br>
              Gdzie: <br>
              x = 24, y = 6, z = a-1 <br>
              Z własności ciągu: $$2y = x + z$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="12 = 24 + (a - 1)"/>
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "12 = 23 + a", value: "a" },
                { label: "a = 12 - 23", value: "b" },
                { label: "a = -11", value: "c" },
                { label: "Wszystkie powyższe", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$12 = 24 + a - 1$$ <br>
              2. $$12 = 23 + a$$ <br>
              3. $$a = 12 - 23$$ <br>
              4. $$a = -11$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź poprawność rozwiązania
            </p>
            <NumericQuestion
              question="Podaj wartość a"
              correctAnswer="-11"
              explanation="Ostateczne rozwiązanie: <br>
              $$a = -11$$ <br>
              Sprawdzenie: <br>
              Dla a = -11 ciąg to (24, 6, -12) <br>
              Różnica: 6 - 24 = -18 i -12 - 6 = -18 <br>
              Różnica jest stała, więc ciąg jest arytmetyczny."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Określ monotoniczność ciągu
            </p>
            <ChoiceQuestion
              question="Jaka jest monotoniczność ciągu (24, 6, -12)?"
              choices={[
                { label: "Ciąg jest rosnący", value: "a" },
                { label: "Ciąg jest malejący", value: "b" },
                { label: "Ciąg jest stały", value: "c" },
                { label: "Ciąg nie jest monotoniczny", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Ciąg jest malejący, ponieważ: <br>
              $$24 > 6 > -12$$ <br>
              Różnica ciągu: $$r = -18$$ (ujemna, więc ciąg maleje)"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="(24, 6, a-1) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "2y = x + z \\Rightarrow 2·6 = 24 + (a-1)",
              },
              {
                step: "12 = 24 + a - 1",
              },
              {
                step: "a = 12 - 23 = -11",
              },
              {
                step: "\\text{Ciąg } (24, 6, -12) \\text{ jest malejący (r = -18)}"
              }
            ]}
            solutions={["a = -11", "(24, 6, -12) \\text{ - ciąg malejący}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;