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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Zliczanie liczb</h2>
        <p className="text-lg text-gray-800">Ile jest wszystkich liczb naturalnych czterocyfrowych, w których zapisie dziesiętnym cyfry się
        nie powtarzają?</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozważmy ile możliwych różnych cyfr może znaleźć się na każdej z czterech pozycji tworzonej liczby.
            </p>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może znaleźć się:"
              choices={[
                { label: "\\text{7 cyfr}", value: "a" },
                { label: "\\text{8 cyfr}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na pierwszej pozycji mogą znaleźć się 9 cyfr - wszystkie poza 0."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {(completedStages.includes(1)) && (
          <>
            <ChoiceQuestion
              question="Na drugiej (od lewej) pozycji, dla ustalonych cyfr na wcześniejszych pozycjach, może znaleźć się:"
              choices={[
                { label: "\\text{7 cyfr}", value: "a" },
                { label: "\\text{8 cyfr}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na drugiej pozycji może znaleźć się 9 cyfr - ponieważ nie mogą się one powtarzać, 
              więc dla ustalonej pierwszej cyfry pozostanie 10 - 1 = 9 możliwości (wszystkie poza cyfrą wybraną na pierwszej pozycji)."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {(completedStages.includes(2)) && (
          <>
            <ChoiceQuestion
              question="Na trzeciej (od lewej) pozycji, dla ustalonych cyfr na wcześniejszych pozycjach, może znaleźć się:"
              choices={[
                { label: "\\text{7 cyfr}", value: "a" },
                { label: "\\text{8 cyfr}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Na trzeciej pozycji może znaleźć się 8 cyfr - ponieważ nie mogą się one powtarzać, 
              więc dla ustalonych pierwszej i drugiej cyfry pozostanie 10 - 2 = 8 możliwości 
              (wszystkie poza cyfrą wybraną na pierwszej pozycji i cyfrą wybraną na drugiej)."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {(completedStages.includes(3)) && (
          <>
            <ChoiceQuestion
              question="Na czwartej (od lewej), czyli ostatniej, pozycji, dla ustalonych cyfr na wcześniejszych pozycjach, może znaleźć się:"
              choices={[
                { label: "\\text{7 cyfr}", value: "a" },
                { label: "\\text{8 cyfr}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Na czwartej pozycji może znaleźć się 7 cyfr - ponieważ nie mogą się one powtarzać, 
              więc dla ustalonych pierwszej, drugiej i trzeciej cyfry pozostanie 10 - 3 = 7 możliwości 
              (wszystkie poza cyfrą wybraną na pierwszej pozycji, cyfrą wybraną na drugiej pozycji i cyfrą wybraną na trzeciej pozycji)."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {(completedStages.includes(4)) && (
          <>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "10 + 9 + 8 + 7", value: "a" },
                { label: "9 + 9 + 8 + 7", value: "b" },
                { label: "10 \\cdot 9 \\cdot 8 \\cdot 7", value: "c" },
                { label: "9 \\cdot 9 \\cdot 8 \\cdot 7", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Podsumowując wcześniejsze obserwacje, ustalając cyfry po kolei, 
              na pierwszej pozycji może znaleźć się 9 cyfr, na drugiej - 9, na trzeciej - 8, a na czwartej - 7. <br>
              Dla otrzymania ostatecznego wyniku, zgodnie z regułą mnożenia, należy je przemnożyć, 
              otrzymujemy więc wzór $$9 \cdot 9 \cdot 8 \cdot 7$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        {completedStages.includes(5) && (
          <>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="4536"
              explanation="Jak ustaliliśmy wcześniej - szukana wartość wyraża się wzorem $$9 \cdot 9 \cdot 8 \cdot 7$$, 
              więc wynosi ona 4536. Jest to ostateczny wynik - liczba szukanych liczb."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
      {completedStages.length === 6 && (
        <StudentNotes
          equation="\text{x - liczba szukanych liczb}"
          steps={[
            {
              step: "x = 9 \\cdot 9 \\cdot 8 \\cdot 7",
            },
            {
              step: "x = 4536",
            },
          ]}
          solutions={["\\text{Liczba szukanych liczb wynosi 4536.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;