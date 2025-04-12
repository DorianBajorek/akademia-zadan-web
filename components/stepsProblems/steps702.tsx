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
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Zliczanie liczb</h2>
        <p className="text-lg text-gray-800">Ile jest wszystkich liczb naturalnych pięciocyfrowych, w których zapisie dziesiętnym występują tylko
        cyfry 0, 5, 7 (np. 57 075, 55 555)?</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zauważmy, że w tym zadaniu, przy konstrukcji liczb możemy używać danych cyfr wielokrotnie.
            </p>
            <p className="text-lg text-gray-700 mt-6">
              Rozważmy ile możliwych różnych cyfr może znaleźć się na każdej pozycji tworzonej liczby.
            </p>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Na pierwszej pozycji mogą znaleźć się 2 cyfry - 5 i 7, 
              gdyż liczba nie może zaczynać się od 0."
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
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na drugiej pozycji mogą znaleźć się wszystkie 3 rozważane cyfry (0, 5, 7)."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {(completedStages.includes(2)) && (
          <>
            <ChoiceQuestion
              question="Na trzeciej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na trzeciej pozycji także mogą znaleźć się wszystkie 3 rozważane cyfry (0, 5, 7)."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {(completedStages.includes(3)) && (
          <>
            <ChoiceQuestion
              question="Na czwartej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na czwartej pozycji także mogą znaleźć się wszystkie 3 rozważane cyfry (0, 5, 7)."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {(completedStages.includes(4)) && (
          <>
            <ChoiceQuestion
              question="Na piątej (od lewej), czyli ostatniej, pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na ostatniej pozycji także mogą znaleźć się wszystkie 3 rozważane cyfry (0, 5, 7)."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        {(completedStages.includes(5)) && (
          <>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "2 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 2 \\cdot 3^4", value: "a" },
                { label: "3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 3^5", value: "b" },
                { label: "2 + 3 + 3 + 3 + 3 = 2 + 3 \\cdot 4", value: "c" },
                { label: "3 + 3 + 3 + 3 + 3 = 3 \\cdot 5", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Podsumowując wcześniejsze obserwacje, na pierwszej pozycji mogą znaleźć się dwie cyfry,
              a na drugiej, trzeciej, czwartej i piątej mogą znaleźć się po trzy cyfry. <br>
              Dla otrzymania ostatecznego wyniku, zgodnie z regułą mnożenia, należy je przemnożyć, 
              po uproszczeniu otrzymujemy więc wzór $$2 \cdot 3^4$$."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
        {completedStages.includes(5) && (
          <>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="162"
              explanation="Jak ustaliliśmy wcześniej - szukana wartość wyraża się wzorem $$2 \cdot 3^4$$, 
              więc wynosi ona 162. Jest to ostateczny wynik - liczba szukanych liczb."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
      {completedStages.length === 7 && (
        <StudentNotes
          equation="\text{x - liczba szukanych liczb}"
          steps={[
            {
              step: "x = 2 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3",
            },
            {
              step: "x = 2 \\cdot 3^4",
            },
            {
              step: "x = 162",
            },
          ]}
          solutions={["\\text{Liczba szukanych liczb wynosi 162.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;