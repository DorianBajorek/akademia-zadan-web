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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Analiza wykresu funkcji liniowej</h2>
        <p className="text-lg text-gray-800">Na rysunku przedstawiony jest fragment wykresu pewnej funkcji liniowej:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="y = ax + b" />
        </p>
        
        <img 
            src="/problemImages/problem4501.jpg" 
            alt="Wykres funkcji liniowej rosnącej przecinającej OY poniżej zera" 
            className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl h-auto"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Określ znak współczynnika kierunkowego <InlineMath math="a" /> na podstawie wykresu.
            </p>
            <ChoiceQuestion
              question="Jaki jest znak współczynnika a?"
              choices={[
                { label: "a > 0 \\text{ (funkcja rosnąca)}", value: "a" },
                { label: "a < 0 \\text{ (funkcja malejąca)}", value: "b" },
                { label: "a = 0 \\text{ (funkcja stała)}", value: "c" }
              ]}
              correctAnswer="a"
              explanation="Współczynnik a określa kierunek funkcji liniowej. Jeśli wykres rośnie z lewa na prawo, to $$a > 0$$ (funkcja jest rosnąca)."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/wykres-rosnacy.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Określ znak wyrazu wolnego <InlineMath math="b" /> na podstawie wykresu.
            </p>
            <ChoiceQuestion
              question="Jaki jest znak współczynnika b?"
              choices={[
                { label: "b > 0 \\text{ (przecięcie z OY powyżej zera)}", value: "a" },
                { label: "b < 0 \\text{ (przecięcie z OY poniżej zera)}", value: "b" },
                { label: "b = 0 \\text{ (przecięcie w początku układu)}", value: "c" }
              ]}
              correctAnswer="b"
              explanation="Współczynnik $$b$$ to punkt przecięcia z osią $$OY$$. Jeśli wykres przecina oś OY poniżej zera, to $$b < 0$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/przecięcie-oy-ujemne.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawną kombinację znaków współczynników.
            </p>
            <ChoiceQuestion
              question="Jakie znaki mają współczynniki a i b?"
              choices={[
                { label: "a < 0 \\text{ i } b < 0", value: "a" },
                { label: "a < 0 \\text{ i } b > 0", value: "b" },
                { label: "a > 0 \\text{ i } b < 0", value: "c" },
                { label: "a > 0 \\text{ i } b > 0", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Na podstawie analizy wykresu: funkcja jest rosnąca (a > 0) i przecina oś OY poniżej zera (b < 0)."
              onComplete={() => handleStageComplete(3)}
              img="/steps-images/funkcja-liniowa-rosnaca-ujemna.png"
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="y = ax + b"
            steps={[
              {
                step: "\\text{Wykres rośnie z lewa na prawo → funkcja rosnąca → } a > 0",
              },
              {
                step: "\\text{Wykres przecina oś OY poniżej zera → } b < 0",
              },
              {
                step: "\\text{Ostatecznie: a > 0 i b < 0}",
              }
            ]}
            solutions={["\\text{Odpowiedź C: }a > 0 i b < 0"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;