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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie współrzędnej punktu</h2>
        <p className="text-lg text-gray-800">Dane są punkty końcowe odcinka:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="K = (4, -10)"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="L = (b, 2)"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">Pierwsza współrzędna środka odcinka <InlineMath math="KL"/> jest równa <InlineMath math="-12"/>. Wynika stąd, że:</p>
        
        {/* Krok 1 - Wzór na środek odcinka */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jak obliczyć pierwszą współrzędną środka odcinka?
            </p>
            <ChoiceQuestion
              question="Który wzór jest poprawny?"
              choices={[
                { label: "\\frac{x_K + x_L}{2}", value: "a" },
                { label: "\\frac{x_K - x_L}{2}", value: "b" },
                { label: "x_K + x_L", value: "c" },
                { label: "\\frac{x_L - x_K}{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Pierwsza współrzędna środka odcinka to średnia arytmetyczna pierwszych współrzędnych końców: $$\\frac{4 + b}{2}$$"
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/dlugosc_odcinka.png"
            />
          </>
        )}
        
        {/* Krok 2 - Rozwiązanie równania */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie dla pierwszej współrzędnej środka
            </p>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: "\\frac{4 + b}{2} = -12", value: "a" },
                { label: "\\frac{b - 4}{2} = -12", value: "b" },
                { label: "4 + b = -12", value: "c" },
                { label: "\\frac{4 - b}{2} = -12", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne równanie to: $$\\frac{4 + b}{2} = -12$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Obliczenie wartości b */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz wartość b
            </p>
            <ChoiceQuestion
              question="Jaki jest wynik?"
              choices={[
                { label: "b = -28", value: "a" },
                { label: "b = -14", value: "b" },
                { label: "b = -24", value: "c" },
                { label: "b = -10", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$\\frac{4 + b}{2} = -12$$ <br>
              2. Mnożymy obie strony przez 2: $$4 + b = -24$$ <br>
              3. Odejmujemy 4 od obu stron: $$b = -28$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Krok 4 - Weryfikacja odpowiedzi */}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Która z podanych odpowiedzi jest poprawna?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: "A. b = -28", value: "a" },
                { label: "B. b = -14", value: "b" },
                { label: "C. b = -24", value: "c" },
                { label: "D. b = -10", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawną odpowiedzią jest A. b = -28, co potwierdza nasze obliczenia."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\\text{Wyznaczenie współrzędnej } b \\text{ punktu } L = (b, 2) \\text{ dla środka odcinka } KL \\text{ w punkcie } (-12, y)"
            steps={[
              { step: "\\text{Wzór na pierwszą współrzędną środka: } \\frac{4 + b}{2} = -12" },
              { step: "\\text{Rozwiązanie równania: } 4 + b = -24" },
              { step: "\\text{Obliczenie: } b = -28" },
            ]}
            solutions={[
              "b = -28 \\text{ (Odpowiedź A)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;