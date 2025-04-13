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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie pola kwadratu</h2>
        <p className="text-lg text-gray-800">Dane są przeciwległe wierzchołki kwadratu:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="A = (-1, 5)"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="C = (3, -3)"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">Pole kwadratu <InlineMath math="ABCD"/> jest równe:</p>
        
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
              explanation="Długość przekątnej AC obliczamy ze wzoru na odległość między punktami: $$\\sqrt{(3 - (-1))^2 + (-3 - 5)^2} = \\sqrt{4^2 + (-8)^2} = \\sqrt{16 + 64} = \\sqrt{80} = 4\\sqrt{5}$$"
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/dlugosc_odcinka.png"
            />
          </>
        )}
        
        {/* Krok 2 - Związek między przekątną a polem kwadratu */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jaki jest związek między długością przekątnej a polem kwadratu?
            </p>
            <ChoiceQuestion
              question="Która zależność jest prawdziwa?"
              choices={[
                { label: "P = \\frac{d^2}{2}", value: "a" },
                { label: "P = d^2", value: "b" },
                { label: "P = 2d", value: "c" },
                { label: "P = \\frac{d}{2}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Pole kwadratu można obliczyć znając długość przekątnej ze wzoru: $$P = \\frac{d^2}{2} = \\frac{(4\\sqrt{5})^2}{2} = \\frac{16 \cdot 5}{2} = \\frac{80}{2} = 40$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Obliczenie pola kwadratu */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pole kwadratu
            </p>
            <ChoiceQuestion
              question="Jaki jest wynik końcowy?"
              choices={[
                { label: "8\\sqrt{10}", value: "a" },
                { label: "16\\sqrt{5}", value: "b" },
                { label: "40", value: "c" },
                { label: "80", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Kolejne kroki obliczeń: <br>
              1. Długość przekątnej: $$4\\sqrt{5}$$ <br>
              2. Wzór na pole: $$P = \\frac{d^2}{2}$$ <br>
              3. Podstawienie: $$P = \\frac{(4\\sqrt{5})^2}{2} = \\frac{80}{2} = 40$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Krok 4 - Weryfikacja odpowiedzi */}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Która z podanych opcji jest poprawna?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: "A. 8\\sqrt{10}", value: "a" },
                { label: "B. 16\\sqrt{5}", value: "b" },
                { label: "C. 40", value: "c" },
                { label: "D. 80", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawną odpowiedzią jest C. 40, co potwierdza nasze obliczenia."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\\text{Pole kwadratu } ABCD \\text{ o przeciwległych wierzchołkach } A = (-1, 5) \\text{ i } C = (3, -3)"
            steps={[
              { step: "\\text{Obliczenie długości przekątnej: } AC = \\sqrt{(3 - (-1))^2 + (-3 - 5)^2} = 4\\sqrt{5}" },
              { step: "\\text{Wzór na pole kwadratu: } P = \\frac{d^2}{2}" },
              { step: "\\text{Obliczenie pola: } P = \\frac{(4\\sqrt{5})^2}{2} = 40" },
            ]}
            solutions={[
              "40 \\text{ (Odpowiedź C)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;