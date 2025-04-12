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
        <p className="text-lg text-gray-800">Ile jest wszystkich różnych liczb naturalnych czterocyfrowych nieparzystych podzielnych przez 5?</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Na początek rozważmy jaki warunek musi spełniać liczba nieparzysta, podzielna przez 5.<br/>
              To, czy liczba jest nieparzysta oraz to czy jest podzielna przez 5 można ustalić analizując jedynie jej cyfrę jedności.
            </p>
            <ChoiceQuestion
              question="Jaka / jakie cyfry jedności mogą wystąpić w liczbie nieparzystej podzielnej przez 5?"
              choices={[
                { label: "\\text{tylko 5}", value: "a" },
                { label: "\\text{tylko 0}", value: "b" },
                { label: "\\text{0 i 5}", value: "c" },
                { label: "\\text{0, 3 i 5}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Liczba jest nieparzysta i podzielna przez 5 wtedy i tylko wtedy, gdy jej cyfrą jedności jest 5."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {(completedStages.includes(1)) && (
          <>
          <p className="text-lg text-gray-700 mt-6">
              Biorąc pod uwagę warunek na to, aby liczba była nieparzysta i podzielna przez 5,
              roważmy ile różnych cyfr może wystąpić na danych pozycjach szukanych liczb.
            </p>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na pierwszej pozycji mogą znaleźć się 9 cyfr - wszystkie poza 0."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {(completedStages.includes(2)) && (
          <>
          <ChoiceQuestion
            question="Na drugiej (od lewej) pozycji może znaleźć się:"
            choices={[
              { label: "\\text{1 cyfra}", value: "a" },
              { label: "\\text{2 cyfry}", value: "b" },
              { label: "\\text{9 cyfr}", value: "c" },
              { label: "\\text{10 cyfr}", value: "d" },
            ]}
            correctAnswer="d"
            explanation="Na drugiej pozycji mogą znaleźć się wszystkie cyfry, czyli 10."
            onComplete={() => handleStageComplete(3)}
          />
        </>
        )}
        {(completedStages.includes(3)) && (
          <>
            <ChoiceQuestion
              question="Na trzeciej (od lewej) pozycji może znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Na trzeciej pozycji także mogą znaleźć się wszystkie cyfry, czyli 10."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {(completedStages.includes(4)) && (
          <>
            <ChoiceQuestion
              question="Na czwartej (od lewej), czyli ostatniej, pozycji może znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{9 cyfr}", value: "c" },
                { label: "\\text{10 cyfr}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Jak ustaliliśmy wcześniej, na ostatniej pozycji, czyli jako cyfra jednostek, może znaleźć się tylko jedna cyfra - 5."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        {(completedStages.includes(5)) && (
          <>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "9 + 10 + 10 + 1", value: "a" },
                { label: "9 + 10 + 10 + 5", value: "b" },
                { label: "9 \\cdot 10 \\cdot 10 \\cdot 1", value: "c" },
                { label: "9 \\cdot 10 \\cdot 10 \\cdot 5", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Podsumowując wcześniejsze obserwacje,
              na pierwszej pozycji może znaleźć się 9 cyfr, na drugiej - 10, na trzeciej - 10, a na czwartej - 1. <br>
              Dla otrzymania ostatecznego wyniku, zgodnie z regułą mnożenia, należy je przemnożyć, 
              otrzymujemy więc wzór $$9 \cdot 10 \cdot 10 \cdot 1$$."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
        {completedStages.includes(5) && (
          <>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="900"
              explanation="Jak ustaliliśmy wcześniej - szukana wartość wyraża się wzorem $$9 \\cdot 10 \\cdot 10 \\cdot 1$$, 
              więc wynosi ona 900. Jest to ostateczny wynik - liczba szukanych liczb."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}
      {completedStages.length === 7 && (
        <StudentNotes
          equation="\text{x - liczba szukanych liczb}"
          steps={[
            {
              step: "\\text{Szukane liczby to liczby naturalne cztrocyfrowe kończące się cyfrą 5}",
            },
            {
              step: "x = 9 \\cdot 10 \\cdot 10 \\cdot 1",
            },
            {
              step: "x = 900",
            },
          ]}
          solutions={["\\text{Liczba szukanych liczb wynosi 900.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;