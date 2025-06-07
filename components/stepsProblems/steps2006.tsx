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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Wyznaczanie współczynnika funkcji kwadratowej</h2>
        <p className="text-lg text-gray-800 mt-4">Funkcja   <InlineMath math="f(x) = a(x - 2)^2 - 16" /> ma miejsce zerowe <InlineMath math="x_0=4"/>. Oblicz współczynnik  <InlineMath math="a"/> tej funkcji.</p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie równanie powstaje po podstawieniu $$x = 4$$ i $$f(4) = 0$$?"
            choices={[
              { label: "0 = a(2)^2 + 16", value: "a" },
              { label: "0 = a(4 + 2)^2 - 16", value: "b" },
              { label: "0 = a(4 - 2)^2 + 16", value: "c" },
              { label: "0 = a(4 - 2)^2 - 16", value: "d" }
            ]}
            correctAnswer="d"
            explanation="Podstawiamy $$x = 4$$ do funkcji i przyrównujemy do $$0$$, bo to miejsce zerowe: <br />$$0 = a(4 - 2)^2 - 16$$"
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak przekształcimy równanie: $$0 = a(4 - 2)^2 - 16$$?"
            choices={[
              { label: "0 = a·4 - 16", value: "a" },
              { label: "0 = 2a - 16", value: "b" },
              { label: "0 = 4a - 16", value: "c" },
              { label: "0 = a·2 - 16", value: "d" }
            ]}
            correctAnswer="c"
            explanation="Obliczamy: $$4 - 2 = 2$$, a potem $$2^2 = 4$$. Otrzymujemy: $$0 = 4a - 16$$"
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jakie jest rozwiązanie równania $$0 = 4a - 16$$?"
            choices={[
              { label: "a = 4", value: "a" },
              { label: "a = 0", value: "b" },
              { label: "a = -4", value: "c" },
              { label: "a = 2", value: "d" }
            ]}
            correctAnswer="a"
            explanation="Dodajemy 16 do obu stron: $$4a = 16$$, a następnie dzielimy przez 4: $$a = 4$$"
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="f(x) = a(x - 2)^2 - 16"
            steps={[
              { step: "\\text{Wiadomo, że: } f(4) = 0" },
              { step: "\\text{Podstawiamy: } 0 = a(4 - 2)^2 - 16" },
              { step: "0 = a·4 - 16" },
              { step: "0 = 4a - 16" },
              { step: "4a = 16 \\Rightarrow a = 4" }
            ]}
            solutions={["a = 4"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
