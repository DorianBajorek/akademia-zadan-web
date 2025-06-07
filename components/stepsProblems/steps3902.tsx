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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie zbioru wartości funkcji na podstawie wykresu</h2>
        <p className="text-lg text-gray-800">Wyznacz zbiór wartości poniższej funkcji</p>
        <img src="/steps-images/steps3902.jpeg" alt="Wykres funkcji" className="mx-auto my-4 w-full max-w-2xl rounded-lg shadow-md" />
        
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
              correctAnswer="a"
              explanation="Aby wyznaczyć minimalną wartość funkcji, patrzymy na najniższy punkt na wykresie, który znajduje się na osi x w punkcie $$(3, 0)$$ . Wiemy, że wartości to $$y$$ więc najższa wartośc w tym przypadkuy to $$0$$, co widać na poniższej fotografii."
              onComplete={() => handleStageComplete(1)}
              explanationImage="/steps-images/steps3902a.jpeg"
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
              correctAnswer="b"
              explanation="Aby wyznaczyć maksymalną wartość funkcji, patrzymy na najwyższy punkt na wykresie, który znajduje się na osi y w punkcie $$(0, 4)$$. Wiemy, że wartości to $$y$$ więc najwyższa wartośc w tym przypadkuy to $$4$$, co widać na poniższej fotografii."
              explanationImage="/steps-images/steps3902b.jpeg"
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
                { label: "ZW = \\langle-4;3\\rangle", value: "a" },
                { label: "ZW = \\langle0;4)", value: "b" },
                { label: "ZW = \\langle0;3\\rangle", value: "c" },
                { label: "ZW = (0;3)", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Zbiór wartości to wszystkie $$y$$ od minimum $$0$$ do maximum $$4$$, włącznie z tymi wartościami."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: "\\text{Najwyższa wartośc funkcji to 3=4, a najniższa to 0.}",
              },
            ]}
            solutions={["ZW  = \\langle0;4\\rangle"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;