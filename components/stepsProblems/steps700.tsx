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
          description="Ile jest wszystkich liczb naturalnych czterocyfrowych parzystych, 
w których zapisie dziesiętnym występują tylko cyfry $$2, 4, 7$$ (np.: $$7272, 2222, 7244$$)?"
        />

        {completedStages.length === 0 && (
          <StepDescription stepNumber={1}>
            Zauważmy, że w tym zadaniu możemy używać danych cyfr wielokrotnie. Rozważmy ile możliwych różnych cyfr może znaleźć się na każdej pozycji.
          </StepDescription>
        )}

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Na pierwszej (od lewej) pozycji może / mogą znaleźć się:"
            choices={[
              { label: "\\text{1 cyfra}", value: "a" },
              { label: "\\text{2 cyfry}", value: "b" },
              { label: "\\text{3 cyfry}", value: "c" },
              { label: "\\text{4 cyfry}", value: "d" },
            ]}
            correctAnswer="c"
            explanation="Na pierwszej pozycji mogą znaleźć się wszystkie $$3$$ rozważane cyfry $$(2, 4, 7)$$, 
gdyż nie ma to wpływu na parzystość wynikowej liczby."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Sprawdźmy ile możliwości mamy dla kolejnych pozycji.
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
              explanation="Na drugiej pozycji także mogą znaleźć się wszystkie $$3$$ rozważane cyfry $$(2, 4, 7)$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Przeanalizujmy trzecią pozycję.
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
              explanation="Na trzeciej pozycji także mogą znaleźć się wszystkie $$3$$ cyfry $$(2, 4, 7)$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Zdecydujmy które cyfry mogą być na końcu.
            </StepDescription>
            <ChoiceQuestion
              question="Na czwartej (od lewej) pozycji, czyli ostatniej, może / mogą znaleźć się:"
              choices={[
                { label: "\\text{1 cyfra}", value: "a" },
                { label: "\\text{2 cyfry}", value: "b" },
                { label: "\\text{3 cyfry}", value: "c" },
                { label: "\\text{4 cyfry}", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Na ostatniej pozycji (cyfra jedności) mogą być tylko cyfry $$2$$ i $$4$$ — jedyne parzyste w zbiorze."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Ułóżmy końcowy wzór na liczbę takich liczb.
            </StepDescription>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: "3 \\cdot 3 \\cdot 3 \\cdot 3", value: "a" },
                { label: "3 \\cdot 3 \\cdot 3 \\cdot 2", value: "b" },
                { label: "3 + 3 + 3 + 3", value: "c" },
                { label: "3 + 3 + 3 + 2", value: "d" },
              ]}
              correctAnswer="b"
              explanation="Na trzech pierwszych pozycjach są 3 możliwości, a na ostatniej 2. Zgodnie z regułą mnożenia: $$3 \cdot 3 \cdot 3 \cdot 2 = 54$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.includes(5) && (
          <>
            <StepDescription stepNumber={6}>
              Oblicz wynik końcowy.
            </StepDescription>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="54"
              explanation="Jak ustaliliśmy wcześniej, szukana wartość wynosi $$3 \cdot 3 \cdot 3 \cdot 2 = 54$$."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {completedStages.length === 6 && (
          <StudentNotes
            equation="\text{x - liczba szukanych liczb}"
            steps={[
              { step: "x = 3 \\cdot 3 \\cdot 3 \\cdot 2" },
              { step: "x = 54" },
            ]}
            solutions={["\\text{Liczba szukanych liczb wynosi 54.}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
