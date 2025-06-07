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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie wielomianowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^3 - 4x^2 + 4x = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: wyciągnij wspólny czynnik przed nawias.
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "x^2(x - 4) + 4x = 0", value: "a" },
                { label: "x(x^2 - 4x) = -4", value: "b" },
                { label: "x(x^2 - 4x + 4) = 0", value: "c" },
                { label: "x(x^2 + 4x - 4) = 0", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$x(x^2 - 4x + 4) = 0$$. 
              Wyciągamy x przed nawias jako wspólny czynnik wszystkich wyrazów. 
              Teraz mamy iloczyn x i trójmianu kwadratowego."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: oblicz deltę dla trójmianu kwadratowego.
            </p>
            <NumericQuestion
                    question="Oblicz deltę $$Δ$$ dla trójmianu $$x² - 4x + 4$$"
                    correctAnswer="0"
                    explanation="Delta obliczana jest ze wzoru: 
                    $$\Delta = b^2 - 4ac$$
                    
                    Dla trójmianu $$x² - 4x + 4$$ <br>
                    $$a = 1$$ (współczynnik przy $$x²$$) <br>
                    $$b = -4$$ (współczynnik przy $$x$$) <br>
                    $$c = 4$$ (wyraz wolny) <br>
                    
                    Podstawiamy wartości do wzoru:
                    $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0$$
                    
                    Poprawna wartość delty to $$\Delta = 0$$."
                    onComplete={() => handleStageComplete(2)}
                    img="/steps-images/delta-calculation.png"
                    />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: znajdź pierwiastki trójmianu kwadratowego.
            </p>
            <ChoiceQuestion
              question="Jakie są pierwiastki trójmianu $$x² - 4x + 4$$?"
              choices={[
                { label: "x₀ = 2", value: "a" },
                { label: "x₁ = 2, x₂ = -2", value: "b" },
                { label: "x₁ = 4, x₂ = 1", value: "c" },
                { label: "Brak\\ pierwiastków\\ rzeczywistych", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Gdy $$Δ = 0$$, trójmian ma jeden pierwiastek podwójny:
              $$x₀ = \frac{-b}{2a}= \frac{4}{2} = 2$$
              Jest to pierwiastek podwójny, więc zapisujemy go jako $$x = 2 $$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Czwarty krok: podaj wszystkie rozwiązania równania.
            </p>
            <ChoiceQuestion
              question="Jakie są wszystkie rozwiązania równania $$x³ - 4x² + 4x = 0$$?"
              choices={[
                { label: "x = 0, x = 2", value: "a" },
                { label: "x = 0, x = 2, x = -2", value: "b" },
                { label: "x = 0, x = 4, x = 1", value: "c" },
                { label: "x = 2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Pełne rozwiązanie: <br>
              1. $$x = 0$$ (z pierwszego czynnika) <br>
              2. $$x = 2$$ (podwójny pierwiastek z trójmianu) <br>
              Równanie ma więc dwa rozwiązania: $$0$$ i $$2$$, przy czym $$2$$ jest pierwiastkiem podwójnym."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="x^3 - 4x^2 + 4x = 0"
            steps={[
              {
                step: "x(x^2 - 4x + 4) = 0",
              },
              {
                step: "x = 0",
                explanation: "Wynik pierwszego czynniku iloczyny"
              },
              {
                step: "Δ = b² - 4ac = (-4)² - 4·1·4 = 0",
              },
              {
                step: "x₀ = -\\frac{-b}{2a} = \\frac{4}{2} = 2",
              },
              {
                step: "x = 2",
              }
            ]}
            solutions={["x = 0", "x = 2"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;