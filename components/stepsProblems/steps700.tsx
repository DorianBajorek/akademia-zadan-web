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
        <p className="text-lg text-gray-800">Ile jest wszystkich liczb naturalnych czterocyfrowych <u>parzystych</u>, 
        w których zapisie dziesiętnym występują tylko cyfry 2, 4, 7 (np.: 7272, 2222, 7244)?</p>
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
              correctAnswer="c"
              explanation="Na pierwszej pozycji mogą znaleźć się wszystkie 3 rozważane cyfry (2, 4, 7), 
              gdyż nie ma to wpływu na parzystość wynikowej liczby."
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
              explanation="Na drugiej pozycji także mogą znaleźć się wszystkie 3 rozważane cyfry (2, 4, 7), 
              gdyż nie ma to wpływu na parzystość wynikowej liczby."
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
              explanation="Na trzeciej pozycji także mogą znaleźć się wszystkie 3 rozważane cyfry (2, 4, 7), 
              gdyż nie ma to wpływu na parzystość wynikowej liczby."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {(completedStages.includes(3)) && (
          <>
            <ChoiceQuestion
              question="Na czwartej (od lewej) pozycji, czyli ostatniej, może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Na ostatniej pozycji (będącej cyfrą jedności) mogą znaleźć się jedynie cyfry 2 i 4. 
              Jest tak ponieważ, to od parzystości tej ostatniej cyfry zależy parzystość całej liczby, 
              a spośród cyfr 2, 4 i 7 jedynie cyfry 2 i 4 symbolizują liczby parzyste."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {(completedStages.includes(4)) && (
          <>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "3 \\cdot 3 \\cdot 3 \\cdot 3", value: "a" },
                { label: "3 \\cdot 3 \\cdot 3 \\cdot 2", value: "b" },
                { label: "3 + 3 + 3 + 3", value: "c" },
                { label: "3 + 3 + 3 + 2", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Podsumowując wcześniejsze obserwacje, na pozycjach pierwszej, drugiej i trzeciej mogą znaleźć się po trzy cyfry, 
              a na ostatniej - dwie. Dla otrzymania ostatecznego wyniku, zgodnie z regułą mnożenia, należy je przemnożyć, 
              otrzymujemy więc wzór $$3 \cdot 3 \cdot 3 \cdot 2$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        {completedStages.includes(5) && (
          <>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="54"
              explanation="Jak ustaliliśmy wcześniej - szukana wartość wyraża się wzorem $$3 \cdot 3 \cdot 3 \cdot 2$$, 
              więc wynosi ona 54. Jest to ostateczny wynik - liczba szukanych liczb."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
      {completedStages.length === 6 && (
        <StudentNotes
          equation="\text{x - liczba szukanych liczb}"
          steps={[
            {
              step: "x = 3 \\cdot 3 \\cdot 3 \\cdot 2",
            },
            {
              step: "x = 54",
            },
          ]}
          solutions={["\\text{Liczba szukanych liczb wynosi 54.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;