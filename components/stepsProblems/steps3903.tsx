"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie zbioru wartości funkcji na podstawie wykresu"
          description="Wyznacz zbiór wartości poniższej funkcji"
          imageUrl="/steps-images/chartSteps3903.jpeg"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Określ najniższą wartość funkcji na wykresie
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest minimalna wartość funkcji widoczna na wykresie?"
                choices={[
                  { label: "0", value: "a" },
                  { label: "3", value: "b" },
                  { label: "-4", value: "c" },
                  { label: "\\text{Funkcja nie ma wartości minimalnej}", value: "d" }
                ]}
                correctAnswer="d"
                explanation="Przedstawiona funkcja nie osiąga najmniejszej wartości, ponieważ na najniższych poziomach -2 ma puste kółko. Oznacza to, że funkcja nie przyjmuje wartości $$-2$$, a jedynie zbliża się do niej. Wartość ta jest widoczna na poniższej fotografii."
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps3903a.jpeg"
              />
            </div>
          )}
          
          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określ najwyższą wartość funkcji na wykresie
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest maksymalna wartość funkcji widoczna na wykresie?"
                choices={[
                  { label: "3", value: "a" },
                  { label: "4", value: "b" },
                  { label: "\\text{Funkcja nie ma wartości maksymalnej}", value: "c" },
                  { label: "0", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Maksymalna wartość funkcji to $$3$$, co widać w punktach $$(-1, 3)$$ i $$(1, 3)$$ na wykresie. Wartość ta jest osiągana przez funkcję."
                explanationImage="/steps-images/steps3903b.jpeg"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}
          
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wybierz poprawny zapis zbioru wartości funkcji
              </StepDescription>
              <ChoiceQuestion
                question="Który zbiór poprawnie opisuje wartości funkcji f?"
                choices={[
                  { label: "ZW = (-2, -1\\rangle \\cup (1, 3\\rangle", value: "a" },
                  { label: "ZW = \\langle-3;3\\rangle", value: "b" },
                  { label: "ZW = (-2, -1) \\cup (1, 3\\rangle", value: "c" },
                  { label: "ZW = (-3;2)", value: "d" }
                ]}
                correctAnswer="a"
                explanation="Zbiór wartości funkcji składa się z dwóch przedziałów: od $$-2$$ (otwarty nawias, wartość nieosiągana) do $$-1$$ (zamknięty nawias, wartość osiągana) oraz od $$1$$ (otwarty nawias) do $$3$$ (zamknięty nawias, wartość osiągana)."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}
          
          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[
                  { step: "\\text{Funkcja nie osiąga wartości } -2 \\text{ (puste kółko)}" },
                  { step: "\\text{Osiąga wartości od } -1 \\text{ do } 3" },
                  { step: "\\text{Z przerwą w przedziale } (-1, 1)" }
                ]}
                solutions={["ZW = (-2, -1\\rangle \\cup (1, 3\\rangle"]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;