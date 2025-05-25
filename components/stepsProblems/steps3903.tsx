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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie zbioru wartości funkcji na podstawie wykresu</h2>
        <p className="text-lg text-gray-800">Wyznacz zbiór wartości poniższej funkcji</p>
        <img src="/steps-images/steps3903.jpeg" alt="Wykres funkcji" className="mx-auto my-4 w-full max-w-2xl rounded-lg shadow-md" />
        
        <p className="text-lg text-gray-800">Na podstawie powyższego wykresu wyznacz zbiór wartości funkcji f.</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Określ najniższą wartość funkcji na wykresie:
            </p>
            <ChoiceQuestion
              question="Jaka jest minimalna wartość funkcji widoczna na wykresie?"
              choices={[
                { label: "0", value: "a" },
                { label: "3", value: "b" },
                { label: "-4", value: "c" },
                { label: "\\text{Funkcja nie ma wartości minimalnej}", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Przedstawiona funckcja nie osiąga najmniejszej wartości, ponieważ na najniższych poziomach -2 ma puste kółko. Oznacza to, że funkcja nie przyjmuje wartości $$-2$$, a więc nie ma najmniejszej wartości. Będziemy jednak otwartym nawiastem brać liczbę $$-2$$, ponieważ funkcja zbliża się do niej, ale jej nie osiąga. Wartość ta jest widoczna na poniższej fotografii."
              onComplete={() => handleStageComplete(1)}
              explanationImage="/steps-images/steps3903a.jpeg"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Określ najwyższą wartość funkcji na wykresie:
            </p>
            <ChoiceQuestion
              question="Jaka jest maksymalna wartość funkcji widoczna na wykresie?"
              choices={[
                { label: "3", value: "a" },
                { label: "4", value: "b" },
                { label: "\\text{Funkcja nie ma wartości maksymalnej}", value: "c" },
                { label: "0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Aby wyznaczyć maksymalną wartość funkcji, patrzymy na najwyższy punkt na wykresie, który znajduje się na osi y w punkcie $$(-1, 3)$$ lub $$(1, 3)$$. Wiemy, że wartości to $$y$$ więc najwyższa wartośc w tym przypadkuy to $$3$$, co widać na poniższej fotografii."
              explanationImage="/steps-images/steps3903b.jpeg"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Wybierz poprawny zapis zbioru wartości funkcji:
            </p>
            <ChoiceQuestion
              question="Który zbiór poprawnie opisuje wartości funkcji f?"
              choices={[
                { "label": "ZW = (-2, -1\\rangle \\cup (1, 3\\rangle", "value": "a" },
                { "label": "ZW = \\langle-3;3\\rangle", "value": "b" },
                { "label": "ZW = (-2, -1) \\cup (1, 3\\rangle", "value": "c" },
                { "label": "ZW = (-3;2)", "value": "d" }
              ]}
              correctAnswer="a"
              explanation="Zgodnie z wcześniejszymi krokami udało nam się ustalić, że wynkcja najniżej jest na poziomie $$-2$$, jednak tej wartości nie osiąga. Kosztem tego od tej liczby zaczniemy budować zbiór wartości jednak oznaczymy ją nawiasem otwartym. Następnie nasz wykres unosi się do góry na poziom $$-1$$ który osiąga jednak później występuje przerwa w funkcji. Nie osiąga ona w tym przedziale rzadnych wartości więc ozanczamy ten przedział nawiastem otwartym. Następnie nasza funkcja zaczyna się unośić do góry od poziomu $$1$$ do poziomu $$3$$, który osiąga. Oznaczamy ten przedział nawiasem otwartym i zamkniętym."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "ZW = (-2, -1\\rangle \\cup (1, 3\\rangle",
              },
            ]}
            solutions={["ZW = (-2, -1\\rangle \\cup (1, 3\\rangle"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;