"use client";

import { useState } from "react";
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Zliczanie liczb</h2>
        <p className="text-lg text-gray-800">Ile jest wszystkich trzycyfrowych liczb naturalnych większych od 300 o wszystkich cyfrach
        parzystych?</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozważmy ile możliwych różnych cyfr może znaleźć się na każdej z trzech pozycji tworzonej liczby.
            </p>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na pierwszej pozycji mogą znaleźć się 3 cyfry - 4, 6 i 8. <br>
              Cyfry 1, 3, 5, 7 i 9 nie mogą się tam znaleźć, gdyż są nieparzyste, a zgodnie z treścią, wszystkie cyfry tej liczby maja być parzyste. <br> 
              Cyfra 2 nie może się znaleźć na pierwszej pozycji gdyż wtedy cała liczba byłaby mniejsza od 300, 
              niezależnie od ustalenia pozostałych cyfr, co także jest niezgodne z wymaganiami z treści zadania. <br>
              Cyfra 0 nie może się znaleźć na pierwszej pozycji, gdyż wtedy bałaby to liczba dwucyfrowa, a także mniejsza niż 300."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {(completedStages.includes(1)) && (
          <>
            <ChoiceQuestion
              question="Na drugiej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{3 cyfry}", value: "b" },
                { label: "\\text{5 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na drugiej pozycji mogą znaleźć się wszystkie cyfry parzyste, a więc 5 cyfr - 0, 2, 4, 6 i 8."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {(completedStages.includes(2)) && (
          <>
            <ChoiceQuestion
              question="Na trzeciej (od lewej), czyli ostatniej, pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{3 cyfry}", value: "b" },
                { label: "\\text{5 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na trzeciej pozycji także mogą znaleźć się wszystkie cyfry parzyste, a więc 5 cyfr - 0, 2, 4, 6 i 8."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {(completedStages.includes(3)) && (
          <>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "3 + 5 + 5", value: "a" },
                { label: "3 + 10 + 10", value: "b" },
                { label: "3 \\cdot 10 \\cdot 10", value: "c" },
                { label: "3 \\cdot 5 \\cdot 5", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Podsumowując wcześniejsze obserwacje,
              na pierwszej pozycji mogą znaleźć się 3 cyfry, na drugiej - 5, na trzeciej też 5. <br>
              Dla otrzymania ostatecznego wyniku, zgodnie z regułą mnożenia, należy je przemnożyć, 
              otrzymujemy więc wzór $$3 \cdot 5 \cdot 5$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {(completedStages.includes(3)) && (
          <>
          <NumericQuestion
            question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
            correctAnswer="75"
            explanation="Jak ustaliliśmy wcześniej - szukana wartość wyraża się wzorem $$3 \cdot 5 \cdot 5$$, 
              więc wynosi ona 75. Jest to ostateczny wynik - liczba szukanych liczb."
            onComplete={() => handleStageComplete(4)}
          />
        </>
        )}
      {completedStages.length === 5 && (
        <StudentNotes
          equation="\text{x - liczba szukanych liczb}"
          steps={[
            {
              step: "x = 3 \\cdot 5 \\cdot 5",
            },
            {
              step: "x = 75",
            },
          ]}
          solutions={["\\text{Liczba szukanych liczb wynosi 75.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;