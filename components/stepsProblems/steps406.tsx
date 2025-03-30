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
          <InlineMath math="(-4 + x, x^2 - 4, 11)"/> 
        </p>
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="x"/> i określ monotoniczność ciągu</p>
        
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
                { label: `2(-4 + x) = (x^2 - 4) + 11`, value: "a" },
                { label: `2(x^2 - 4) = (-4 + x) + 11`, value: "b" },
                { label: `2·11 = (-4 + x) + (x^2 - 4)`, value: "c" },
                { label: `x^2 - 4 = ((-4 + x) + 11)/2`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$2(x^2 - 4) = (-4 + x) + 11$$ <br>
              Gdzie: <br>
              a = -4 + x, b = x² - 4, c = 11 <br>
              Z własności ciągu: $$2b = a + c$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="2(x^2 - 4) = x + 7"/>
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "2x^2 - 8 = x + 7", value: "a" },
                { label: "2x^2 - x - 15 = 0", value: "b" },
                { label: "x = 3 \text{ lub } x = -2.5", value: "c" },
                { label: "Wszystkie powyższe", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$2x^2 - 8 = x + 7$$ <br>
              2. $$2x^2 - x - 15 = 0$$ <br>
              3. Rozwiązanie równania kwadratowego: <br>
              $$Δ = 1 + 120 = 121$$ <br>
              $$x = \frac{1 \pm 11}{4}$$ <br>
              $$x = 3$$ lub $$x = -2.5$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź poprawność rozwiązań
            </p>
            <ChoiceQuestion
              question="Które rozwiązania są poprawne?"
              choices={[
                { label: "Tylko x = 3", value: "a" },
                { label: "Tylko x = -2.5", value: "b" },
                { label: "Obydwa rozwiązania", value: "c" },
                { label: "Żadne z rozwiązań", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Obydwa rozwiązania są poprawne: <br>
              Dla x = 3: ciąg (-1, 5, 11) - różnica r = 6 <br>
              Dla x = -2.5: ciąg (-6.5, 2.25, 11) - różnica r = 8.75 <br>
              Oba ciągi są arytmetyczne."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Określ monotoniczność ciągów
            </p>
            <ChoiceQuestion
              question="Jaka jest monotoniczność otrzymanych ciągów?"
              choices={[
                { label: "Oba ciągi są rosnące", value: "a" },
                { label: "Oba ciągi są malejące", value: "b" },
                { label: "Jeden rosnący, drugi malejący", value: "c" },
                { label: "Jeden stały, drugi rosnący", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Oba ciągi są rosnące: <br>
              1. Dla x = 3: (-1, 5, 11) - różnica r = 6 > 0 <br>
              2. Dla x = -2.5: (-6.5, 2.25, 11) - różnica r = 8.75 > 0"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="(-4 + x, x^2 - 4, 11) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "2b = a + c \\Rightarrow 2(x^2 - 4) = (-4 + x) + 11",
              },
              {
                step: "2x^2 - 8 = x + 7",
              },
              {
                step: "2x^2 - x - 15 = 0 \\Rightarrow x = 3 \\text{ lub } x = -2.5",
              },
              {
                step: "\\text{Ciągi: } (-1, 5, 11) \\text{ (r=6)} \\text{ i } (-6.5, 2.25, 11) \\text{ (r=8.75)} \\text{ - oba rosnące}"
              }
            ]}
            solutions={["x = 3", "x = -2.5", "Oba ciągi są rosnące"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;