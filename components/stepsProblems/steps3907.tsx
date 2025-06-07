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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie miejsc zerowych funkcji na podstawie wykresu</h2>
        <p className="text-lg text-gray-800">Wyznacz miejsca zerowe poniższej funkcji</p>
        <img src="/steps-images/steps3907.jpeg" alt="Wykres funkcji" className="mx-auto my-4 w-full max-w-2xl rounded-lg shadow-md" />
        
        <p className="text-lg text-gray-800">Na podstawie powyższego wykresu wyznacz miejsca zerowe funkcji f.</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Zidentyfikuj punkty przecięcia wykresu z osią OX:
            </p>
            <ChoiceQuestion
              question="W których punktach wykres przecina oś OX?"
              choices={[
                { label: "x = -5, x=-2, x = 3, x = 5", value: "a" },
                { label: "x=-2, x = 3, x = 5", value: "b" },
                { label: "x = -5, x=-2, x = 0, x = 3, x = 5", value: "c" },
                { label: "x=-2, x = 0, x = 3, x = 5", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Miejsca zerowowe to punkty przecięcia funckji z osią OX. Omówmy niżej wszystkich kandydatów na miejsce zerowe, które można podejrzewać i wybierzmy z tej listy te prawidłowe: <br><br>
              $$x = -5$$, liczba ta nie jest miejscem zerowym funkcji ponieważ w tym miejscu kółko jest puste co oznacza, że punkt ten nie należy do wykresu naszej funckji<br><br>
              $$x = -2$$, liczba ta jest miejscem zerowym. W tym miejscu nasza funkcja osiąga wartość zero więc jest to prawidłowe miejsce zerowe<br><br>
              $$x = 0$$, liczba ta nie jest miejscem zerowym ze względu na puste kółko<br><br>
              $$x = 3$$, funkcja ten punkt przecina zatem jest to prawiłowe miejsce zerowe<br><br>
              $$x = 5$$, tutaj funkcja osiąga wartość równą zero, kółko pełne $$\rightarrow$$ ten argument bierzemy do odpowiedzi.<br><br>
              
              "
              onComplete={() => handleStageComplete(1)}
              explanationImage="/steps-images/steps3907a.jpeg"
            />
          </>
        )}
        
        {completedStages.length === 1 && (
          <StudentNotes
            equation=""
            steps={[]}
            solutions={["x=-2, x = 3, x = 5"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;