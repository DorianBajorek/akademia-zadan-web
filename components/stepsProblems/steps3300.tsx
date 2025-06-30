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
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Całkowite nieujemne wyrazy ciągu"
          description="Ciąg $$(a_n)$$ jest określony wzorem $$a_n = \frac{24-4n}{n}$$ dla $$n \geq 1$$. Oblicz, ile jest wszystkich całkowitych nieujemnych wyrazów tego ciągu."
        />

        {/* ETAP 1: Przekształcenie wzoru */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Aby ułatwić analizę, zacznij od przekształcenia wzoru na <InlineMath math="a_n"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Jak można przekształcić wyraz $$a_n = \frac{24-4n}{n}$$?"
              choices={[
                { label: "a_n = \\frac{24}{n} - 4", value: "a" },
                { label: "a_n = \\frac{24}{n} + 4", value: "b" },
                { label: "a_n = \\frac{24n-4}{n}", value: "c" },
                { label: "a_n = \\frac{24}{n-4}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Rozdzielamy licznik na dwa ułamki: $$\frac{24-4n}{n} = \frac{24}{n} - \frac{4n}{n} = \frac{24}{n} - 4$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Warunek na wyraz całkowity */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zastanów się, jaki warunek musi spełniać <InlineMath math="n"/>, aby wyrażenie <InlineMath math="a_n = \frac{24}{n} - 4"/> było liczbą całkowitą.
            </StepDescription>
            <ChoiceQuestion
              question="Dla jakich wartości $$n$$ wyraz $$a_n = \frac{24}{n} - 4$$ jest liczbą całkowitą?"
              choices={[
                { label: "\\text{ Dla n będących dzielnikami 24 }", value: "a" },
                { label: "\\text{ Dla $n$ będących dzielnikami 4}", value: "b" },
                { label: "\\text{ Dla wszystkich n}", value: "c" },
                { label: "\\text{ Dla $n$ parzystych}", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Wyrażenie $$a_n$$ jest liczbą całkowitą, jeśli ułamek $$\frac{24}{n}$$ jest liczbą całkowitą. To zachodzi tylko wtedy, gdy $$n$$ jest dzielnikiem liczby 24."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wypisanie dzielników */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Wypisz wszystkie naturalne dzielniki liczby 24. To są potencjalne wartości <InlineMath math="n"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Które z poniższych to wszystkie dzielniki liczby $$24$$ większe lub równe $$1$$?"
              choices={[
                { label: "2, 4, 8, 24", value: "a" },
                { label: "1, 2, 4, 8, 12, 24", value: "b" },
                { label: "1, 2, 3, 4, 6, 8, 12, 24", value: "c" },
                { label: "1, 3, 9, 24", value: "d" },
              ]}
              correctAnswer="c"
              explanation="Dzielniki liczby $$24$$ to: $$1, 2, 3, 4, 6, 8, 12, 24$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Warunek na wyraz nieujemny */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Teraz sprawdź, dla których z tych dzielników spełniony jest warunek nieujemności, czyli <InlineMath math="a_n \geq 0"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Dla których z tych $$n$$ wyraz $$a_n = \frac{24-4n}{n}$$ jest nieujemny?"
              choices={[
                { label: " n = 1, 2, 3, 4, 6", value: "a" },
                { label: " n = 1, 2, 3, 4, 6, 8", value: "b" },
                { label: " n = 1, 2, 3, 4, 6, 8, 12", value: "c" },
                { label: " n = 1, 2, 3, 4", value: "d" },
              ]}
              correctAnswer="a"
              explanation={
                "Warunek $$a_n \\geq 0$$ jest równoważny nierówności $$\\frac{24-4n}{n}\\geq 0$$. Ponieważ $$n \\geq 1$$, mianownik jest dodatni, więc wystarczy sprawdzić, kiedy licznik jest nieujemny: <br/>" +
                "$$24-4n \\geq 0 \\implies 24 \\geq 4n \\implies n \\leq 6$$.<br/>" +
                "Zatem szukamy dzielników liczby 24, które są mniejsze lub równe 6. Są to: $$1, 2, 3, 4, 6$$."
              }
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* ETAP 5: Zliczenie wyrazów */}
        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Policz, ile jest wartości <InlineMath math="n"/>, które spełniają oba warunki jednocześnie.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest wszystkich nieujemnych całkowitych wyrazów tego ciągu?"
              choices={[
                { label: "5", value: "a" },
                { label: "6", value: "b" },
                { label: "7", value: "c" },
                { label: "4", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Wartości $$n$$, dla których wyraz $$a_n$$ jest całkowity i nieujemny, to $$1, 2, 3, 4, 6$$. Jest ich łącznie 5."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(5) && (
          <StudentNotes
            equation="a_n = \frac{24-4n}{n}"
            steps={[
              { step: "\\text{Warunek całkowitości: } n \\text{ jest dzielnikiem 24}" },
              { step: "\\text{Dzielniki 24: } \\{1, 2, 3, 4, 6, 8, 12, 24\\}" },
              { step: "\\text{Warunek nieujemności: } a_n \\ge 0 \\implies n \\le 6" },
              { step: "\\text{Część wspólna: } \\{1, 2, 3, 4, 6\\}" }
            ]}
            solutions={[
              "\\text{Liczba wyrazów: 5}"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;