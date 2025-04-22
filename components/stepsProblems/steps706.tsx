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
        <p className="text-lg text-gray-800">Ile jest wszystkich liczb naturalnych czterocyfrowych, których suma cyfr jest równa 3?</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Na początek zauważmy, że wśród rozważanych liczb nie znajdą się liczby zaczynające się cyfrą większą niż 3, 
              gdyż wtedy suma cyfr automatycznie jest większa niż założone w treści 3.
              W liczbach tych na pierwszej pozycji (z czterech) nie może znaleźć się także 0, gdyż wtedy byłaby to tak naprawdę liczba trzycyfrowa.
              Rozważane liczby mogą więc zacząć się od cyfry 1, 2 lub 3.
              Zliczmy je osobno i połączmy wynik. 
            </p>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych czterocyfrowych o sumie cyfr równej 3, które zaczynają się cyfrą 3?"
              choices={[
                { label: "0", value: "a" },
                { label: "1", value: "b" },
                { label: "2", value: "c" },
                { label: "3", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Jest jedna taka liczba - 3000."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {(completedStages.includes(1)) && (
          <>
          <ChoiceQuestion
            question="Ile jest liczb naturalnych czterocyfrowych o sumie cyfr równej 3, które zaczynają się cyfrą 2?"
            choices={[
              { label: "0", value: "a" },
              { label: "1", value: "b" },
              { label: "2", value: "c" },
              { label: "3", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Są 3 takie liczby - 2100, 2010 i 2001."
            onComplete={() => handleStageComplete(2)}
          />
        </>
        )}
        {(completedStages.includes(2)) && (
          <>
          <ChoiceQuestion
            question="Ile jest liczb naturalnych czterocyfrowych o sumie cyfr równej 3, które zaczynają się cyfrą 1?"
            choices={[
              { label: "0", value: "a" },
              { label: "2", value: "b" },
              { label: "4", value: "c" },
              { label: "6", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Jest 6 takich liczb - 1110, 1101, 1011, 1200, 1020 i 1002."
            onComplete={() => handleStageComplete(3)}
          />
        </>
        )}
        {(completedStages.includes(3)) && (
          <>
          <NumericQuestion
            question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
            correctAnswer="10"
            explanation="Szukana wartość to, zgodnie z regułą dodawania, suma policzonych wyżej liczb, a więc $$1 + 3 + 6$$, 
            więc wynosi ona 10. Jest to ostateczny wynik - liczba szukanych liczb."
            onComplete={() => handleStageComplete(4)}
          />
        </>
        )}
      {completedStages.length === 4 && (
        <StudentNotes
          equation="\text{Rozważamy liczby naturalne czterocyfrowe o sumie cyfr równej 3}"
          steps={[
            {
              step: "\\text{Liczby zaczynające się od cyfry 3: 3000}",
            },
            {
              step: "\\text{Liczby zaczynające się od cyfry 2: 2100, 2010, 2001}",
            },
            {
              step: "\\text{Liczby zaczynające się od cyfry 1: 1110, 1101, 1011, 1200, 1020, 1002}",
            },
          ]}
          solutions={["\\text{Liczba szukanych liczb wynosi 10.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;