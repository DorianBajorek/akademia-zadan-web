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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie dziedziny funkcji na podstawie wykresu</h2>
        <p className="text-lg text-gray-800">Wyznacz dziedzinę poniższej funkcji</p>
        <img src="/steps-images/steps3905.jpeg" alt="Wykres funkcji" className="mx-auto my-4 w-full max-w-2xl rounded-lg shadow-md" />
        
        <p className="text-lg text-gray-800">Na podstawie powyższego wykresu wyznacz dziedzinę funkcji f.</p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Określ lewą granicę dziedziny funkcji:
            </p>
            <ChoiceQuestion
              question="Gdzie zaczyna się dziedzina funkcji na osi OX?"
              choices={[
                { label: "x = -3", value: "a" },
                { label: "x = -2", value: "b" },
                { label: "x = -4", value: "c" },
                { label: "\\text{Funkcja jest określona dla wszystkich } x", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Wykres zaczyna się od punktu $$(-4, 0)$$ z otwartym kółkiem, co oznacza że $$x = -4$$ nie należy do dziedziny. Będziemy ten punkt traktować jako lewą granicę dziedziny ale z otwartym nawiasem."
              onComplete={() => handleStageComplete(1)}
              explanationImage="/steps-images/steps3905a.jpeg"
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Określ prawą granicę dziedziny funkcji:
            </p>
            <ChoiceQuestion
              question="Gdzie kończy się dziedzina funkcji na osi OX?"
              choices={[
                { label: "x = 0", value: "a" },
                { label: "x = 3", value: "b" },
                { label: "x = 4", value: "c" },
                { label: "\\text{Funkcja jest określona dla wszystkich } x", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Wykres kończy się w punkcie $$(3, 0)$$ z zamkniętym kółkiem, co oznacza że $$x = 3$$ nie należy do dziedziny. Miejsce to będziemy traktować jako prawą granicę dziedziny ale z zamkniętym nawiasem."
              onComplete={() => handleStageComplete(2)}
              explanationImage="/steps-images/steps3905b.jpeg"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Wybierz poprawny zapis dziedziny funkcji:
            </p>
            <ChoiceQuestion
              question="Który zapis poprawnie opisuje dziedzinę funkcji f?"
              choices={[
                { label: "D = ⟨-3, -1⟩ ∪ (1, 3)", value: "a" },
                { label: "D = \\langle-4, 5\\rangle", value: "b" },
                { label: "D = (0; 4⟩", value: "c" },
                { label: "D = (4; 3⟩", value: "d" }
              ]}
              correctAnswer="d"
              explanation="Dziedzina funkcji to zbiór wszystkich argumentów, dla których funckcja jest określona. W przypadku tej funkcji, dziedzina obejmuje wszystkie wartości od $$-4$$ do $$3$$, bez $$-4$$ (kóło puste). Ostateczny zapis to $$D = \langle-4, 5\rangle$$. Można byłoby zastanowić czy przypadkiem dla $$x=0$$ nie ma przerwy (ze względu na puste kółko), jednak w tym przypadku mimo, że jedno kółko jest puste to drugie jest pełne, więc funkcja jest określona dla $$x=0$$. Dlatego zapisujemy $$D = \langle-4, 5\rangle$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
            ]}
            solutions={["D = (0; 4⟩"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;