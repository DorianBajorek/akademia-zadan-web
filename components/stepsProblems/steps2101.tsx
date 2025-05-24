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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Funkcja największego pierwszego dzielnika</h2>
        <p className="text-lg text-gray-800 mt-4">
          Funkcja <InlineMath math="f" /> przyporządkowuje każdej liczbie naturalnej większej od 1 jej największy dzielnik będący liczbą pierwszą. Spośród liczb: <InlineMath math="f(42), f(44), f(45), f(48)" /> największa to:
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Co to jest największy pierwszy dzielnik liczby?"
              choices={[
                { label: "\\text{Największa liczba pierwsza mniejsza od danej liczby}", value: "a" },
                { label: "\\text{Największy dzielnik liczby, który jest liczbą pierwszą}", value: "b" },
                { label: "\\text{Największa liczba pierwsza dzieląca liczbę bez reszty}", value: "c" },
                { label: "\\text{Największa liczba pierwsza większa od danej liczby}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawna odpowiedź to: Największy dzielnik liczby, który jest liczbą pierwszą. <br>Największy pierwszy dzielnik to największa liczba pierwsza, która dzieli daną liczbę bez reszty."
              onComplete={() => handleStageComplete(0)}
            />
          </>
        )}

        {(completedStages.includes(0) && (completedStages.includes(1) || completedStages.length === 1)) && (
          <>
            <ChoiceQuestion
              question="Jak znaleźć największy pierwszy dzielnik liczby 42?"
              choices={[
                { label: "\\text{Rozłożyć 42 na czynniki pierwsze: } 2 \\cdot 3 \\cdot 7 \\text{ i wybrać największy}", value: "a" },
                { label: "\\text{Znaleźć największą liczbę pierwszą mniejszą od 42}", value: "b" },
                { label: "\\text{Podzielić 42 przez 2 i sprawdzić wynik}", value: "c" },
                { label: "\\text{Wziąć pierwiastek z 42 i zaokrąglić w dół}", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to: Rozłożyć $$42$$ na czynniki pierwsze: $$2 \cdot 3 \cdot 7$$ i wybrać największy. <br>Rozkładając 42 na czynniki pierwsze otrzymujemy $$2 \cdot 3 \cdot 7$$, więc największy pierwszy dzielnik to $$7$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {(completedStages.includes(1) && (completedStages.includes(2) || completedStages.length === 2)) && (
          <>
            <ChoiceQuestion
              question="Jakie są największe pierwsze dzielniki liczb $$44, 45, 48$$?"
              choices={[
                { label: "f(44)=11, f(45)=5, f(48)=3", value: "a" },
                { label: "f(44)=2, f(45)=3, f(48)=2", value: "b" },
                { label: "f(44)=11, f(45)=3, f(48)=3", value: "c" },
                { label: "f(44)=11, f(45)=5, f(48)=3", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Poprawna odpowiedź to: $$f(44)=11, f(45)=5, f(48)=3$$. <br>
              $$44 = 2 × 2 × 11$$ → największy pierwszy dzielnik to 11 <br>
              $$45 = 3 × 3 × 5$$ → największy pierwszy dzielnik to 5 <br>
              $$48 = 2 × 2 × 2 × 2 × 3$$ → największy pierwszy dzielnik to 3"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {(completedStages.includes(2) && (completedStages.includes(3) || completedStages.length === 3)) && (
          <>
            <ChoiceQuestion
              question="Która z wartości f(42), f(44), f(45), f(48) jest największa?"
              choices={[
                { label: "f(42)", value: "a" },
                { label: "f(44)", value: "b" },
                { label: "f(45)", value: "c" },
                { label: "f(48)", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawna odpowiedź to: $$f(44)$$. <br>
              Mamy: <br>
              $$f(42) = 7$$ <br>
              $$f(44) = 11$$ <br>
              $$f(45) = 5$$ <br>
              $$f(48) = 3$$ <br>
              Największa z tych wartości to $$11$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 4 && (
          <StudentNotes
            equation="f(n) = \text{największy pierwszy dzielnik } n"
            steps={[
              { step: "\\text{Definicja: Największy pierwszy dzielnik to największa liczba pierwsza dzieląca n}" },
              { step: "\\text{Rozkład na czynniki pierwsze:}" },
              { step: "42 = 2 \\cdot 3 \\cdot 7 \\rightarrow f(42) = 7" },
              { step: "44 = 2 \\cdot 2 \\cdot 11 \\rightarrow f(44) = 11" },
              { step: "45 = 3 \\cdot 3 \\cdot 5 \\rightarrow f(45) = 5" },
              { step: "48 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 3 \\rightarrow f(48) = 3" },
              { step: "\\text{Porównanie wartości: } 7, 11, 5, 3" },
              { step: "\\text{Największa wartość: } 11" }
            ]}
            solutions={[
              "f(42) = 7", 
              "f(44) = 11", 
              "f(45) = 5", 
              "f(48) = 3", 
              "\\text{Największa wartość: } f(44) = 11"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;