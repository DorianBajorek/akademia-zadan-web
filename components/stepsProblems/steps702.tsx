"use client";

import { useState } from "react";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";
import { InlineMath } from "react-katex";
import TaskDescription from "../TaskDescription";
import StepDescription from "../StepDescription";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Zliczanie liczb"
          description="Ile jest wszystkich liczb naturalnych pięciocyfrowych, w których zapisie dziesiętnym występują tylko cyfry $$0, 5, 7$$ (np. $$57075, 55555$$)?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Ustal możliwe cyfry na pierwszej pozycji pięciocyfrowej liczby.
            </StepDescription>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Na pierwszej pozycji mogą znaleźć się $$2$$ cyfry - $$5$$ i $$7$$, gdyż liczba nie może zaczynać się od $$0$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Ustal możliwe cyfry na drugiej pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na drugiej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na drugiej pozycji mogą znaleźć się wszystkie $$3$$ rozważane cyfry $$(0, 5, 7)$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Ustal możliwe cyfry na trzeciej pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na trzeciej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na trzeciej pozycji także mogą znaleźć się wszystkie $$3$$ rozważane cyfry $$(0, 5, 7)$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Ustal możliwe cyfry na czwartej pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na czwartej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na czwartej pozycji także mogą znaleźć się $$3$$ rozważane cyfry $$(0, 5, 7)$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Ustal możliwe cyfry na piątej pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na piątej (od lewej), czyli ostatniej, pozycji może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Na ostatniej pozycji także mogą znaleźć się $$3$$ rozważane cyfry $$(0, 5, 7)$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.includes(5) && (
          <>
            <StepDescription stepNumber={6}>
              Ułóż ogólny wzór na liczbę możliwych pięciocyfrowych liczb.
            </StepDescription>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "2 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 2 \\cdot 3^4", value: "a" },
                { label: "3 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 3^5", value: "b" },
                { label: "2 + 3 + 3 + 3 + 3 = 2 + 3 \\cdot 4", value: "c" },
                { label: "3 + 3 + 3 + 3 + 3 = 3 \\cdot 5", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Na pierwszej pozycji są 2 możliwości, a na pozostałych czterech po $$3$$."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {completedStages.includes(6) && (
          <>
            <StepDescription stepNumber={7}>
              Oblicz końcowy wynik.
            </StepDescription>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="162"
              explanation="Jak ustaliliśmy wcześniej - szukana wartość wyraża się wzorem $$2 \cdot 3^4$$, więc wynosi ona $$162$$."
              onComplete={() => handleStageComplete(7)}
            />
          </>
        )}

        {completedStages.length === 7 && (
          <StudentNotes
            equation="x - \text{liczba szukanych liczb}"
            steps={[
              { step: "x = 2 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3" },
              { step: "x = 2 \\cdot 3^4" },
              { step: "x = 162" },
            ]}
            solutions={["\\text{Liczba szukanych liczb wynosi 162.}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
