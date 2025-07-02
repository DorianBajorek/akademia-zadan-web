"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import StepDescription from "../StepDescription";
import TaskDescription from "../TaskDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie równania prostej"
          description="Wyznacz równanie funkcji liniowej, która tworzy z osią OX kąt $$45^\circ$$ i przecina oś OY w punkcie $$(0, 3)$$."
        />
        
        {/* ETAP 1: Wyznaczenie współczynnika kierunkowego a */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Współczynnik kierunkowy <InlineMath math="a"/> prostej jest równy tangensowi jej kąta nachylenia do osi OX. Oblicz jego wartość.
            </StepDescription>
            <ChoiceQuestion
              question="Jaką wartość ma współczynnik kierunkowy $$a$$?"
              choices={[
                { label: "a = \\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}", value: "a" },
                { label: "a = \\cos(45^\\circ) = \\frac{\\sqrt{2}}{2}", value: "b" },
                { label: "a = \\tg(45^\\circ) = 1", value: "c" },
                { label: "a = \\ctg(45^\\circ) = 1", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Współczynnik kierunkowy prostej to tangens kąta jej nachylenia do osi OX: $$a = \tg(\alpha)$$. Zatem: $$a = \tg(45^\circ) = 1$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Wyznaczenie wyrazu wolnego b */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Wyraz wolny <InlineMath math="b"/> w równaniu prostej <InlineMath math="y=ax+b"/> to rzędna (współrzędna y) punktu przecięcia z osią OY. Wyznacz jego wartość.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość wyrazu wolnego $$b$$?"
              choices={[
                { label: "b = 0", value: "a" },
                { label: "b = 1", value: "b" },
                { label: "b = 3", value: "c" },
                { label: "b = 4", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Wyraz wolny $$b$$ odpowiada wartości $$y$$ w punkcie przecięcia prostej z osią OY. Skoro punkt ten to $$(0, 3)$$, to $$b = 3$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Sformułowanie równania prostej */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Podstaw obliczone wartości <InlineMath math="a"/> i <InlineMath math="b"/> do wzoru ogólnego prostej <InlineMath math="y=ax+b"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie opisuje daną funkcję?"
              choices={[
                { label: "y = \\frac{\\sqrt{2}}{2}x + 3", value: "a" },
                { label: "y = x + 3", value: "b" },
                { label: "y = x - 3", value: "c" },
                { label: "y = 3x + 1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne równanie łączy obliczone wartości współczynników $$a = 1$$ i $$b=3$$, co daje: $$y = 1 \cdot x + 3 = x+3$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="y = ax + b"
            steps={[
              {
                step: "\\text{1. Obliczenie współczynnika kierunkowego: } a = \\tg(45^\\circ) = 1",
              },
              {
                step: "\\text{2. Wyznaczenie wyrazu wolnego z punktu (0, 3): } b = 3",
              },
              {
                step: "\\text{3. Ostateczne równanie prostej: } y = x + 3",
              }
            ]}
            solutions={["y = x + 3"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;