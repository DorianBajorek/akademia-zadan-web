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
          <InlineMath math="(k^2, 2k^2, 4k-1)"/> 
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
                { label: `2(k^2) = 2k^2 + (4k-1)`, value: "a" },
                { label: `2(2k^2) = k^2 + (4k-1)`, value: "b" },
                { label: `2(4k-1) = k^2 + 2k^2`, value: "c" },
                { label: `2k^2 = (k^2 + 4k-1)/2`, value: "d" }
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$2(2k^2) = k^2 + (4k-1)$$ <br>
              Gdzie: <br>
              a = k², b = 2k², c = 4k - 1 <br>
              Z własności ciągu: $$2b = a + c$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie <InlineMath math="4k^2 = k^2 + 4k - 1"/>
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "3k^2 - 4k + 1 = 0", value: "a" },
                { label: "k = 1 \text{ lub } k = \frac{1}{3}", value: "b" },
                { label: "Δ = 16 - 12 = 4", value: "c" },
                { label: "Wszystkie powyższe", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$4k^2 = k^2 + 4k - 1$$ <br>
              2. $$3k^2 - 4k + 1 = 0$$ <br>
              3. Obliczamy wyróżnik: $$Δ = 16 - 12 = 4$$ <br>
              4. Rozwiązania: $$k = \frac{4 \pm 2}{6}$$ <br>
              $$k = 1$$ lub $$k = \frac{1}{3}$$"
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
                { label: "Tylko k = 1", value: "a" },
                { label: "Tylko k = 1/3", value: "b" },
                { label: "Obydwa rozwiązania", value: "c" },
                { label: "Żadne z rozwiązań", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Obydwa rozwiązania są poprawne: <br>
              Dla k = 1: ciąg (1, 2, 3) - różnica r = 1 <br>
              Dla k = 1/3: ciąg (1/9, 2/9, 1/3) - różnica r = 1/9 <br>
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
              1. Dla k = 1: (1, 2, 3) - różnica r = 1 > 0 <br>
              2. Dla k = 1/3: (1/9, 2/9, 1/3) - różnica r = 1/9 > 0"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {completedStages.length === 5 && (
          <StudentNotes
            equation="(k^2, 2k^2, 4k-1) \rightarrow \text{ciąg arytmetyczny}"
            steps={[
              {
                step: "2b = a + c \\Rightarrow 2(2k^2) = k^2 + (4k-1)",
              },
              {
                step: "4k^2 = k^2 + 4k - 1",
              },
              {
                step: "3k^2 - 4k + 1 = 0 \\Rightarrow k = 1 \\text{ lub } k = \\frac{1}{3}",
              },
              {
                step: "\\text{Ciągi: } (1, 2, 3) \\text{ (r=1)} \\text{ i } (\\frac{1}{9}, \\frac{2}{9}, \\frac{1}{3}) \\text{ (r=}\\frac{1}{9}\\text{)} \\text{ - oba rosnące}"
              }
            ]}
            solutions={["k = 1", "k = \\frac{1}{3}", "Oba ciągi są rosnące"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;