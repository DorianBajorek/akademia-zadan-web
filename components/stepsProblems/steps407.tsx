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
        <p className="text-lg text-gray-800">jest arytmetyczny. Wyznacz wartość <InlineMath math="k"/>.</p>
        
        {/* Krok 1 - Warunek ciągu arytmetycznego */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6"></p>
            <ChoiceQuestion
              question="Jeśli trzywyrazowy ciąg (a, b, c) jest arytmetyczny, to które równanie jest spełnione?"
              choices={[
                { label: "a + b + c = 0", value: "a" },
                { label: "b - c = 2a", value: "b" },
                { label: "b = \\frac{a + c}{2}", value: "c" },
                { label: "2c = a + b", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Z własności ciągu arytmetycznego: środkowy wyraz jest średnią arytmetyczną wyrazów sąsiednich, czyli: $$b = \frac{a + c}{2}$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {/* Krok 2 - Zastosowanie warunku */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zastosuj własność ciągu arytmetycznego do podanego ciągu
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `2(k^2) = 2k^2 + (4k-1)`, value: "a" },
                { label: `4k^2 = k^2 - (4k-1)`, value: "b" },
                { label: `2(4k-1) = k^2 + 2k^2`, value: "c" },
                { label: `2k^2 = \\frac{2k^2 + 4k-1}{2}`, value: "d" }
              ]}
              correctAnswer="d"
              explanation={`Poprawne równanie to: $$2k^2 = \\frac{2k^2 + 4k-1}{2}$$ <br>
              Gdzie: <br>
              $$a = k^2$$, $$b = 2k^2$$, $$c = 4k-1$$ <br>
              Z własności ciągu $$b = \\frac{a + c}{2}$$ czyli  $$2k^2 = \\frac{2k^2 + 4k-1}{2}$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Przekształcenie do postaci kwadratowej */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie  <InlineMath math="2k^2 = \frac{2k^2 + 4k-1}{2}"/> do klasycznej postaci równania kwadratowego
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawnym przekształceniem?"
              choices={[
                { label: "2k^2 -4k+1=0", value: "a" },
                { label: "3k^{2} - 4k + 1 = 0", value: "b" },
                { label: "3k^{2} - 4k + 1 = 0", value: "c" },
                { label: "\\text{Wszystkie powyższe}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki: <br>
              1. $$4k^2 = 2k^2 + 4k - 1$$ <br>
              2. Przenosimy wszystkie wyrazy na lewą stronę: <br>
              $$4k^2 - k^2 - 4k + 1 = 0$$ <br>
              3. Upraszczamy: <br>
              $$3k^2 - 4k + 1 = 0$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Krok 4 - Obliczanie wyróżnika */}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wyróżnik równania kwadratowego
            </p>
            <ChoiceQuestion
              question="Wskaż poprawny wyróżnik równania"
              choices={[
                { label: "\\Delta = 8", value: "a" },
                { label: "\\Delta = 4", value: "b" },
                { label: "\\Delta = 6", value: "c" },
                { label: "\\Delta = 0", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Wzór na wyróżnik: $$\Delta = b^2 - 4ac$$ <br>
              Obliczenia: <br>
              1. $$\Delta = (-4)^2 - 4·3·1 = 16 - 12 = 4$$ <br>
              2. $$\sqrt{\Delta} = 2$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Krok 5 - Obliczanie pierwiastków */}
        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastki równania
            </p>
            <ChoiceQuestion
              question="Jakie są rozwiązania równania?"
              choices={[
                { label: "k_{1} = 1-\\frac{1}{\sqrt{2}}", value: "a" },
                { label: "k₁ = (4 + 2)/6 = 1", value: "b" },
                { label: "k₂ = (4 - 2)/6 = 1/3", value: "c" },
                { label: "Wszystkie powyższe", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Wzór na pierwiastki: $$k = \\frac{-b \pm \sqrt{Δ}}{2a}$$ <br>
              Obliczenia: <br>
              1. $$k = \\frac{4 \pm 2}{6}$$ <br>
              2. $$k_1 = \\frac{6}{6} = 1$$ <br>
              3. $$k_2 = \\frac{2}{6} = \\frac{1}{3}$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        
        {/* Krok 6 - Weryfikacja rozwiązań */}
        {completedStages.includes(5) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Sprawdź poprawność rozwiązań
            </p>
            <ChoiceQuestion
              question="Czy oba rozwiązania spełniają warunek ciągu arytmetycznego?"
              choices={[
                { label: "Tylko k = 1", value: "a" },
                { label: "Tylko k = 1/3", value: "b" },
                { label: "Oba rozwiązania", value: "c" },
                { label: "Żadne rozwiązanie", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Weryfikacja: <br>
              <strong>Dla k=1:</strong> <br>
              (1, 2, 3) <br>
              Różnica: 2-1 = 1 i 3-2 = 1 <br>
              <strong>Dla k=1/3:</strong> <br>
              (1/9, 2/9, 1/3) <br>
              Różnica: 2/9-1/9 = 1/9 i 1/3-2/9 = 1/9 <br>
              Oba ciągi są arytmetyczne."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {/* Krok 7 - Monotoniczność */}
        {completedStages.includes(6) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Określ monotoniczność ciągów
            </p>
            <ChoiceQuestion
              question="Jaka jest monotoniczność otrzymanych ciągów?"
              choices={[
                { label: "Oba rosnące", value: "a" },
                { label: "Oba malejące", value: "b" },
                { label: "Jeden rosnący, drugi malejący", value: "c" },
                { label: "Jeden stały, drugi rosnący", value: "d" }
              ]}
              correctAnswer="a"
              explanation="<strong>Część wspólna rozwiązania:</strong> <br>
              Oba ciągi są rosnące: <br>
              • (1, 2, 3) - r=1 > 0 <br>
              • (1/9, 2/9, 1/3) - r=1/9 > 0"
              onComplete={() => handleStageComplete(7)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 7 && (
          <StudentNotes
            equation="(k², 2k², 4k-1) → ciąg arytmetyczny"
            steps={[
              { step: "Zastosowano warunek: 2b = a + c" },
              { step: "2(2k²) = k² + (4k-1)" },
              { step: "4k² = k² + 4k - 1" },
              { step: "3k² - 4k + 1 = 0" },
              { step: "Δ = 16 - 12 = 4" },
              { step: "k = (4 ± 2)/6 → k₁=1, k₂=1/3" },
              { step: "Weryfikacja: oba ciągi są arytmetyczne" },
              { step: "Monotoniczność: oba ciągi rosnące" }
            ]}
            solutions={[
              "k = 1",
              "k = 1/3", 
              "Oba ciągi są rosnące",
              "Różnice: r=1 dla k=1, r=1/9 dla k=1/3"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;