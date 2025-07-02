"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import NumericQuestion from "./NumericQuestion";
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
          title="Optymalizacja wyrażenia"
          description="Suma dwóch nieujemnych liczb rzeczywistych $$x$$ oraz $$y$$ jest równa $$12$$. Wyznacz $$x$$ oraz $$y$$, dla których wartość wyrażenia $$2x^2 + y^2$$ jest najmniejsza, a następnie oblicz tę najmniejszą wartość."
        />

        {/* ETAP 1: Wyrażenie y w zależności od x */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od wyrażenia jednej zmiennej za pomocą drugiej. Korzystając z warunku <InlineMath math="x + y = 12"/>, wyznacz wzór na <InlineMath math="y"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie dla $$y$$?"
              choices={[
                { label: "y = 12 + x", value: "a" },
                { label: "y = 12 - x", value: "b" },
                { label: "y = x - 12", value: "c" },
                { label: "y = 12x", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Z równania $$x + y = 12$$ wynika, że $$y = 12 - x$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rownowaznosc.png"
            />
          </>
        )}

        {/* ETAP 2: Podstawienie y do wyrażenia */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw uzyskany wzór na <InlineMath math="y"/> do wyrażenia <InlineMath math="2x^2 + y^2"/>, aby otrzymać funkcję jednej zmiennej <InlineMath math="x"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie po podstawieniu?"
              choices={[
                { label: "2x^2 + 144", value: "a" },
                { label: "2x^2 + 12x", value: "b" },
                { label: "2x^2 + x^2", value: "c" },
                { label: "2x^2 + (12 - x)^2", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Podstawiając $$y = 12 - x$$, otrzymujemy $$2x^{2} + (12 - x)^{2}$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/podstawienie.png"
            />
          </>
        )}

        {/* ETAP 3: Uproszczenie wyrażenia */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Przekształć otrzymaną funkcję do postaci ogólnej funkcji kwadratowej <InlineMath math="f(x) = ax^2 + bx + c"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda uproszczone wyrażenie?"
              choices={[
                { label: "x^2 - 24x + 144", value: "a" },
                { label: "2x^2 + 144", value: "b" },
                { label: "3x^2 - 24x + 144", value: "c" },
                { label: "3x^2 + 24x + 144", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Rozwijamy kwadrat różnicy: $$(12 - x)^{2} = 12^2 - 2 \cdot 12 \cdot x + x^2 = 144 - 24x + x^2$$. Po dodaniu do $$2x^{2}$$ i uporządkowaniu otrzymujemy $$3x^{2} - 24x + 144$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Znalezienie x, dla którego wyrażenie ma minimum */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Funkcja kwadratowa z dodatnim współczynnikiem <InlineMath math="a"/> osiąga minimum w wierzchołku. Oblicz jego pierwszą współrzędną <InlineMath math="p = \frac{-b}{2a}"/>, aby znaleźć <InlineMath math="x_{min}"/>.
            </StepDescription>
            <NumericQuestion
              question="Dla jakiej wartości $$x_{min}$$ wyrażenie osiąga minimum?"
              correctAnswer="4"
              explanation="Wartość $$x$$, dla której funkcja kwadratowa $$f(x)=3x^2 - 24x + 144$$ osiąga minimum, to pierwsza współrzędna wierzchołka paraboli: $$x = p = -\frac{b}{2a} = -\frac{-24}{2 \cdot 3} = \frac{24}{6} = 4$$."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wierzcholek_paraboli.png"
            />
          </>
        )}

        {/* ETAP 5: Obliczenie najmniejszej wartości */}
        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Mając optymalną wartość <InlineMath math="x_{min}"/>, oblicz <InlineMath math="y"/>, a następnie znajdź najmniejszą wartość wyrażenia <InlineMath math="2x^2 + y^2"/>.
            </StepDescription>
            <NumericQuestion
              question="Jaka jest najmniejsza wartość wyrażenia?"
              correctAnswer="96"
              explanation="Obliczamy $$y = 12 - x = 12 - 4 = 8$$. Podstawiamy $$x=4$$ i $$y=8$$ do wyrażenia $$2x^2 + y^2$$: $$2(4^2) + 8^2 = 2 \cdot 16 + 64 = 32 + 64 = 96$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 5 && (
          <StudentNotes
            equation="f(x,y) = 2x^2 + y^2"
            steps={[
              { step: "\\text{Warunek: } y = 12 - x" },
              { step: "f(x) = 2x^2 + (12 - x)^2 = 3x^2 - 24x + 144" },
              { step: "\\text{Minimum dla } x = -\\frac{-24}{2 \\cdot 3} = 4" },
              { step: "\\text{Wtedy } y = 12 - 4 = 8" },
              { step: "\\text{Najmniejsza wartość: } 2(4^2) + 8^2 = 32 + 64 = 96" },
            ]}
            solutions={["\\text{x=4, y=8, najmniejsza wartość: 96}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;