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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Obliczanie długości odcinka</h2>
        <p className="text-lg text-gray-800">Dane są punkty:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="A = (1, -4)"/>
        </p>
        <p className="text-2xl font-bold text-gray-900 text-center">
          <InlineMath math="B = (2, 3)"/>
        </p>
        <p className="text-lg text-gray-800 mt-4">Odcinek <InlineMath math="AB"/> ma długość:</p>
        
        {/* Krok 1 - Wzór na długość odcinka */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Jak obliczyć długość odcinka między dwoma punktami na płaszczyźnie?
            </p>
            <ChoiceQuestion
              question="Który wzór jest poprawny?"
              choices={[
                { label: "\\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}", value: "a" },
                { label: "\\sqrt{(x_A + x_B)^2 + (y_A + y_B)^2}", value: "b" },
                { label: "|x_B - x_A| + |y_B - y_A|", value: "c" },
                { label: "(x_B - x_A) + (y_B - y_A)", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Długość odcinka między punktami A i B oblicza się ze wzoru: $$\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/dlugosc_odcinka.png"
            />
          </>
        )}
        
        {/* Krok 2 - Podstawienie współrzędnych */}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Podstaw współrzędne punktów A i B do wzoru
            </p>
            <ChoiceQuestion
              question="Które wyrażenie jest poprawne?"
              choices={[
                { label: "\\sqrt{(2 - 1)^2 + (3 - (-4))^2}", value: "a" },
                { label: "\\sqrt{(1 - 2)^2 + (-4 - 3)^2}", value: "b" },
                { label: "\\sqrt{(2 + 1)^2 + (3 + 4)^2}", value: "c" },
                { label: "\\sqrt{(2 - 1) + (3 - (-4))}", value: "d" }
              ]}
              correctAnswer="a"
              explanation={`Poprawne podstawienie: $$\\sqrt{(2 - 1)^2 + (3 - (-4))^2}$$ <br>
              Wynika to z różnicy współrzędnych $$x$$ i $$y$$ punktów $$A$$ i $$B$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {/* Krok 3 - Obliczenia */}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wykonaj obliczenia
            </p>
            <ChoiceQuestion
              question="Jaki jest wynik obliczeń?"
              choices={[
                { label: "\\sqrt{(2 - 1)^2 + (3 - (-4))^2} = \\sqrt{1 + 7} = \\sqrt{8}", value: "a" },
                { label: "\\sqrt{(2 - 1)^2 + (3 - (-4))^2} = \\sqrt{1 + 49} = \\sqrt{50} = 5\\sqrt{2}", value: "b" },
                { label: "\\sqrt{(2 - 1)^2 + (3 - (-4))^2} = \\sqrt{9 + 49} = \\sqrt{58}", value: "c" },
                { label: "\\sqrt{(2 - 1)^2 + (3 - (-4))^2} = 1 + 7 = 8", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Kolejne kroki obliczeń: <br>
              1. $$(2 - 1)^2 = 1^2 = 1$$ <br>
              2. $$(3 - (-4))^2 = 7^2 = 49$$ <br>
              3. $$1 + 49 = 50$$ <br>
              4. $$\sqrt{50} = 5\sqrt{2}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {/* Krok 4 - Wybór odpowiedzi */}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Która z podanych opcji jest poprawna?
            </p>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: "A. 1", value: "a" },
                { label: "B. 4\\sqrt{3}", value: "b" },
                { label: "C. 5\\sqrt{2}", value: "c" },
                { label: "D. 7", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawnym wynikiem jest $$5\sqrt{2}$$, co odpowiada opcji C."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {/* Podsumowanie */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Długość odcinka } AB \text{ między punktami } A = (1, -4) \text{ i } B = (2, 3)"
            steps={[
              { step: "\\text{Wzór: } \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}" },
              { step: "\\sqrt{(2 - 1)^2 + (3 - (-4))^2}" },
              { step: "\\sqrt{1 + 49} = \\sqrt{50}" },
              { step: "\\sqrt{50} = 5\\sqrt{2}" },
            ]}
            solutions={[
              "5\\sqrt{2} \\text{ (Odpowiedź C)}", 
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;