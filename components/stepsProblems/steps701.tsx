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
        <p className="text-lg text-gray-800">Oblicz liczbę wszystkich kodów czterocyfrowych utworzonych tylko z cyfr 1, 3, 6, 8, gdy
        w każdym kodzie każda z tych cyfr występuje dokładnie jeden raz.</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="Powyższy problem jest równoważny zliczaniu:"
              choices={[
                { label: "\\text{jednoelementowych wariacji bez powtórzeń zbioru czteroelementowego}", value: "a" },
                { label: "\\text{jednoelementowych wariacji z powtórzeniami zbioru czteroelementowego}", value: "b" },
                { label: "\\text{jednoelementowych kombinacji zbioru czteroelementowego}", value: "c" },
                { label: "\\text{permutacji zbioru czteroelementowego}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Przedstawiony problem jest równoważny zliczeniu permutacji zbioru czteroelementowego. <br>
              Przy zadaniach, w których pojawia się stwierdzenie typu ''oblicz liczbę wszystkich kodów / oblicz liczbę wszystkich liczba''
              zwykle rozwiązanie będzie oparte o wzór na liczbę permutacji, liczbę kombinacji, liczbę wariacji z powtórzeniami lub liczbę wariacji bez powtórzeń
              - które to wzory są dostępne w tablicach maturalnych w punkcie kombinatoryka. <br>
              Kody cyfrowe / liczby są ciągami, więc w zadaniach, w których mamy za zadanie ich zliczanie, będzie nas interesował wzór na liczbę permutacji lub wariacji (z powtórzeniami lub bez).
              Powoduje to, że automatycznie możemy odrzucić odpowiedź o zliczaniu kombinacji. <br>
              W zadaniu tym kolejną kluczową kwestią jest założenie, że każda z cyfr występuje dokładnie jeden raz. Pozwala to odrzucić wariacje z powtórzeniami. <br>
              Pozostaje wybór pomiędzy liczbą permutacji, a liczbą wariacji bez powtórzeń. <br>
              Liczba permutacji jest szczególnym przypadkiem liczby wariacji bez powtórzeń, która występuje, gdy zliczamy ciągi utworzone ze wszystkich dostępnych elementów.
              Odpowiedź ''jednoelementowych wariacji bez powtórzeń zbioru czteroelementowego'' w tym przypadku nie jest poprawna, gdyż zliczamy ciągi czteroelementowe, 
              a więc czteroelementowe wariacje bez powtórzeń zbioru czteroelementowego, czyli równoważnie permutacje."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/kombinatoryka.png"
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
          <ChoiceQuestion
            question="Który wzór odpowiada zliczaniu permutacji zbioru czteroelementowego?"
            choices={[
              { label: "4^2", value: "a" },
              { label: "4!", value: "b" },
              { label: "\\binom{4}{2}", value: "c" }
            ]}
            correctAnswer="b"
            explanation="Liczba permutacji zbioru n-elementowego wynosi $$n!$$, a więc dla zbioru czteroelementowego jest to $$4!$$"
            onComplete={() => handleStageComplete(2)}
            img="/steps-images/kombinatoryka.png"
          />
        </>
        )}

        {completedStages.includes(2) && (
          <>
            <NumericQuestion
              question="Ile wynosi wartość $$4!$$"
              correctAnswer="24"
              explanation="N-silnia ($$n!$$) jest obliczana ze wzoru:
                $$ 1 \cdot 2 \cdot \ldots \cdot n$$. <br>
                Dla $$4!$$ jest to więc:
                $$ 1 \cdot 2 \cdot 3 \cdot 4$$. <br>
                Ostatecznie wynik wynosi $$24$$."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/silnia.png"
            />
          </>
        )}  

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Ostateczny wynik - liczba rozważanych kodów czterocyfrowych - jest równy 4!, a więc 24.
            </p>
          </>
        )}
      {completedStages.length === 3 && (
        <StudentNotes
          equation="\text{Liczba możliwych czteroelementowych ciągów utworzonych ze zbioru czteroelementowego}"
          steps={[
            {
              step: "4! = 4 \\cdot 3 \\cdot 2 \\cdot 1",
            },
            {
              step: "4! = 24",
            },
          ]}
          solutions={["\\text{Liczba szukanych kodów wynosi 24.}"]}
        />
      )}
      </div>
    </div>
  );
};

export default Page;