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
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Całkowite nieujemne wyrazy ciągu
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Ciąg <InlineMath math="(a_n)" /> jest określony wzorem <InlineMath math="a_n = \frac{24-4n}{n}" /> dla <InlineMath math="n \geq 1" />.<br />
          Liczba wszystkich całkowitych nieujemnych wyrazów tego ciągu jest równa:
        </p>

        {/* ETAP 1: Przekształcenie wzoru i warunek na n */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak można przekształcić wyraz $$a_n = \frac{24-4n}{n}$$?"
            choices={[
              { label: "a_n = \\frac{24}{n} - 4", value: "a" },
              { label: "a_n = \\frac{24}{n} + 4", value: "b" },
              { label: "a_n = \\frac{24n-4}{n}", value: "c" },
              { label: "a_n = \\frac{24}{n-4}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Rozdzielamy licznik: $$\frac{24-4n}{n} = \frac{24}{n} - 4$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Dla jakich n wyraz jest całkowity? */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Dla jakich wartości $$n$$ wyraz $$a_n = \frac{24}{n} - 4$$ jest liczbą całkowitą?"
            choices={[
              { label: "\\text{ Dla n będących dzielnikami 24 }", value: "a" },
              { label: "\\text{ Dla $n$ będących dzielnikami 4}", value: "b" },
              { label: "\\text{ Dla wszystkich n}", value: "c" },
              { label: "\\text{ Dla $n$ parzystych}", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Aby $$a_n$$ był całkowity, $$n$$ musi dzielić $$24$$ - wtedy $$\frac{24}{n}$$ jest liczbą całkowitą."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Wyznacz dzielniki 24 */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Które z poniższych to wszystkie dzielniki liczby $$24$$ większe lub równe $$1$$?"
            choices={[
              { label: "1, 2, 3, 4, 6, 8, 12, 24", value: "a" },
              { label: "1, 2, 4, 8, 12, 24", value: "b" },
              { label: "2, 4, 8, 24", value: "c" },
              { label: "1, 3, 9, 24", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Dzielniki liczby $$24$$ to: $$1, 2, 3, 4, 6, 8, 12, 24$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* ETAP 4: Dla których n wyraz jest nieujemny? */}
        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Dla których z tych $$n$$ wyraz $$a_n = \frac{24-4n}{n} = \frac{24}{n} - 4$$ jest nieujemny?"
            choices={[
              { label: " n = 1, 2, 3, 4, 6", value: "a" },
              { label: " n = 1, 2, 3, 4, 6, 8", value: "b" },
              { label: " n = 1, 2, 3, 4, 6, 8, 12", value: "c" },
              { label: " n = 1, 2, 3, 4", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "Aby $$a_n$$ był nieujemny, zarówno licznik jak i mianownik muszą być dodatnie lub równe zero.<br/>" +
              "Z warunków zadania: $$n \\geq 1$$ (bo $$n$$ to liczba naturalna) i $$24-4n \\geq 0$$.<br/>" +
              "Rozwiązujemy nierówność: $$24-4n \\geq 0 \\implies 4n \\leq 24 \\implies n \\leq 6$$.<br/>" +
              "Bierzemy więc tylko te dzielniki 24, które są nie większe niż 6: $$n = 1, 2, 3, 4, 6$$."
            }
            onComplete={() => handleStageComplete(4)}
          />
        )}
        {/* ETAP 5: Ile jest wszystkich nieujemnych całkowitych wyrazów tego ciągu? */}
        {completedStages.includes(4) && (
          <ChoiceQuestion
            question="Ile jest wszystkich nieujemnych całkowitych wyrazów tego ciągu?"
            choices={[
              { label: "5", value: "a" },
              { label: "6", value: "b" },
              { label: "7", value: "c" },
              { label: "4", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Dla $n = 1, 2, 3, 4, 6$ mamy dokładnie 5 takich wyrazów."
            onComplete={() => handleStageComplete(5)}
          />
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(5) && (
          <StudentNotes
            equation="a_n = \frac{24-4n}{n} = \frac{24}{n} - 4"
            steps={[
              { step: "a_n = \\frac{24}{n} - 4" },
              { step: "\\text{n musi być dzielnikiem 24 }" },
              { step: "\\text{Dzielniki 24 }: 1, 2, 3, 4, 6, 8, 12, 24" },
              { step: "\\text{Dla }n = 1, 2, 3, 4, 6 \\text{ wyraz nieujemny }" }
            ]}
            solutions={[
              "5"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
