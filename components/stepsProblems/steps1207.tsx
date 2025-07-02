"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";
import StudentNotes from "./StudentsNotes";
import NumericQuestion from "./NumericQuestion";
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
          title="Usuwanie niewymierności z mianownika"
          description="Usuń niewymierność z mianownika w poniższym wyrażeniu, które zawiera różnicę w mianowniku:"
          equation="\frac{3}{\sqrt{3}-2}"
        />
        
        {/* ETAP 1: Wybór metody */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Gdy w mianowniku występuje suma lub różnica z pierwiastkiem, stosujemy mnożenie przez sprzężenie mianownika. Wybierz poprawną metodę.
            </StepDescription>
            <ChoiceQuestion
              question="Jaką metodę należy zastosować, aby usunąć niewymierność z mianownika?"
              choices={[
                { label: "\\text{Mnożymy licznik i mianownik przez sprzężenie} (\\sqrt{3}+2)", value: "a" },
                { label: "\\text{Mnożymy licznik i mianownik przez} (\\sqrt{3}-2)", value: "b" },
                { label: "\\text{Mnożymy licznik i mianownik przez} \\sqrt{3}", value: "c" },
                { label: "\\text{Mnożymy tylko mianownik przez} (\\sqrt{3}+2)", value: "d" },
              ]}
              correctAnswer="a"
              explanation="Gdy w mianowniku mamy wyrażenie postaci $$a-b$$, mnożymy licznik i mianownik przez jego sprzężenie, czyli $$a+b$$. W tym przypadku sprzężeniem jest $$(\sqrt{3} + 2)$$. Dzięki temu w mianowniku skorzystamy ze wzoru skróconego mnożenia $$(a-b)(a+b) = a^2 - b^2$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {/* ETAP 2: Wykonanie mnożenia */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zastosuj wybraną metodę, mnożąc licznik i mianownik przez <InlineMath math="\sqrt{3}+2"/>.
            </StepDescription>
            <ChoiceQuestion
              question="Które wyrażenie jest wynikiem tego mnożenia?"
              choices={[
                { label: "\\frac{3}{3-4}", value: "a" },
                { label: "\\frac{3}{(\\sqrt{3}-2)(\\sqrt{3}+2)}", value: "b" },
                { label: "\\frac{3\\sqrt{3}+6}{3-4}", value: "c" },
                { label: "\\frac{3(\\sqrt{3}+2)}{(\\sqrt{3}-2)(\\sqrt{3}+2)}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawnie wykonane mnożenie daje:
                $$\frac{3}{\sqrt{3}-2} \cdot \frac{\sqrt{3}+2}{\sqrt{3}+2} = \frac{3(\sqrt{3}+2)}{(\sqrt{3}-2)(\sqrt{3}+2)}$$.
                Pamiętaj, że musimy pomnożyć zarówno licznik, jak i mianownik przez to samo wyrażenie."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Uproszczenie mianownika */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Oblicz wartość mianownika, stosując wzór skróconego mnożenia <InlineMath math="(a-b)(a+b) = a^2 - b^2"/>.
            </StepDescription>
            <NumericQuestion
              question="Jaka jest wartość mianownika $$(\sqrt{3} - 2)(\sqrt{3} + 2)$$?"
              correctAnswer="-1"
              explanation="Mianownik po przemnożeniu wynosi:
                $$(\sqrt{3}-2)(\sqrt{3}+2) = (\sqrt{3})^2 - 2^2 = 3 - 4 = -1$$.
                Wykorzystaliśmy tutaj wzór na różnicę kwadratów."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Ostateczny wynik */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Zapisz ostateczną, uproszczoną postać wyrażenia po podzieleniu przez mianownik.
            </StepDescription>
            <ChoiceQuestion
              question="Które wyrażenie jest poprawnym wynikiem końcowym?"
              choices={[
                { label: "-3(\\sqrt{3}+2)", value: "a" },
                { label: "-3\\sqrt{3}-6", value: "b" },
                { label: "3\\sqrt{3}+6", value: "c" },
                { label: "\\sqrt{3}+2", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Ostateczny wynik po usunięciu niewymierności to $$-3\sqrt{3}-6$$.
                Wynika to z następujących przekształceń:
                $$\frac{3(\sqrt{3}+2)}{-1} = -1 \cdot (3\sqrt{3}+6) = -3\sqrt{3}-6$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{3}{\sqrt{3}-2}"
            steps={[
                {
                    step: "\\text{1. Mnożenie przez sprzężenie: } \\frac{3}{\\sqrt{3}-2} \\cdot \\frac{\\sqrt{3}+2}{\\sqrt{3}+2}",
                },
                {
                    step: "\\text{2. Upraszczanie: } \\frac{3(\\sqrt{3}+2)}{(\\sqrt{3})^2 - 2^2} = \\frac{3\\sqrt{3}+6}{3-4}",
                },
                {
                    step: "\\text{3. Wynik: } \\frac{3\\sqrt{3}+6}{-1} = -3\\sqrt{3}-6",
                }
            ]}
            solutions={["-3\\sqrt{3}-6"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;