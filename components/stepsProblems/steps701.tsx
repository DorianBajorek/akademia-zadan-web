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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie długości boku kwadratu</h2>
        <p className="text-lg text-gray-800">Dane są przeciwległe wierzchołki kwadratu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="A = (-2, -1)"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="C = (3, 4)"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">Długość boku kwadratu <InlineMath math="ABCD"/> jest równa:</p>
        
        {/* Krok 1 - Obliczenie długości przekątnej */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jak obliczyć długość przekątnej kwadratu na podstawie współrzędnych wierzchołków?
            </p>
            <ChoiceQuestion
              question="Który wzór jest poprawny do obliczenia długości przekątnej AC?"
              choices={[
                { label: "\\sqrt{(x_C - x_A)^2 + (y_C - y_A)^2}", value: "a" },
                { label: "|x_C - x_A| + |y_C - y_A|", value: "b" },
                { label: "(x_C + x_A)^2 + (y_C + y_A)^2", value: "c" },
                { label: "\\frac{(x_C - x_A) + (y_C - y_A)}{2}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Długość przekątnej $$AC$$ obliczamy ze wzoru na odległość między punktami: $$\sqrt{(3 - (-2))^2 + (4 - (-1))^2} = \sqrt{5^2 + 5^2} = \sqrt{50} = 5\sqrt{2}$$"
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/dlugosc_odcinka.png"
            />
          </>
        )}
        
        {/* Krok 2 - Związek między przekątną a bokiem kwadratu */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Mając obliczoną przekątną <InlineMath math="d = 5 \sqrt{2}"/>, oblicz długość boku kwadratu korzystając ze wzoru:
              <InlineMath math="a = \frac{d}{\sqrt{2}}"/>
            </p>
            <ChoiceQuestion
              question="Jakie jest poprawne podstawienie i wynik?"
              choices={[
                { label: "a = \\frac{5}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{2}", value: "a" },
                { label: "a = 5\\sqrt{2} \\cdot \\sqrt{2} = 10", value: "b" },
                { label: "a = \\frac{5\\sqrt{2}}{\\sqrt{2}} = 5", value: "c" },
                { label: "a = \\frac{\\sqrt{2}}{5\\sqrt{2}} = \\frac{1}{5}", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawne podstawienie to: $$a = \frac{5\sqrt{2}}{\sqrt{2}} = 5$$, ponieważ $$\sqrt{2}$$ w liczniku i mianowniku się skracają."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Weryfikacja wyniku */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jaka jest ostateczna długość boku kwadratu?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: "5", value: "a" },
                { label: "10", value: "b" },
                { label: "5\\sqrt{2}", value: "c" },
                { label: "\\sqrt{10}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ostateczny wynik to 5, co potwierdza nasze obliczenia."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Długość boku kwadratu } ABCD \text{ o przeciwległych wierzchołkach } A = (-2, -1) \text{ i } C = (3, 4)"
            steps={[
              { step: "\\text{Obliczenie długości przekątnej: } AC = \\sqrt{(3 - (-2))^2 + (4 - (-1))^2} = 5\\sqrt{2}" },
              { step: "\\text{Podstawienie do wzoru: } a = \\frac{d}{\\sqrt{2}} = \\frac{5\\sqrt{2}}{\\sqrt{2}}" },
              { step: "\\text{Obliczenie boku: } a = 5" },
            ]}
            solutions={[
              "5 \\text{ (Odpowiedź A)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;