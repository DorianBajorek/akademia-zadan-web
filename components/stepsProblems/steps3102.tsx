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
          Wyznacz pierwszy wyraz i różnicę ciągu arytmetycznego
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Dany jest ciąg arytmetyczny <InlineMath math="(a_n)" /> określony dla <InlineMath math="n \geq 1" />, w którym <InlineMath math="a_5 = 22" /> oraz <InlineMath math="a_{10} = 47" />.<br />
          Oblicz pierwszy wyraz <InlineMath math="a_1" /> i różnicę <InlineMath math="r" /> tego ciągu.
        </p>

        {/* ETAP 1: Równanie dla a_5 i a_10 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie są wzory na $$a_5$$ i $$a_{10}$$ przez $$a_1$$ i $$r$$?"
            choices={[
              { label: "a_5 = a_1 + 4r, \\quad a_{10} = a_1 + 9r", value: "a" },
              { label: "a_5 = a_1 + 5r, \\quad a_{10} = a_1 + 10r", value: "b" },
              { label: "a_5 = a_1 + 3r, \\quad a_{10} = a_1 + 7r", value: "c" },
              { label: "a_5 = a_1 + 4r, \\quad a_{10} = a_1 + 8r", value: "d" },
            ]}
            correctAnswer="a"
            explanation="Korzystamy ze wzoru ogólnego: $$a_n = a_1 + (n-1)r$$."
            img = "/steps-images/n-ty-ciag-arytmetyczny.png"
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {/* ETAP 2: Układ równań i wyznaczenie r */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Ułóż układ równań:<br/> $$ a_5 = a_1 + 4r = 22 \\\\ a_{10} = a_1 + 9r = 47 $$<br/> Ile wynosi $$r$$?"
            choices={[
              { label: "r = 4", value: "a" },
              { label: "r = 5", value: "b" },
              { label: "r = 7", value: "c" },
              { label: "r = 6", value: "d" },
            ]}
            correctAnswer="b"
            explanation={
              "Odejmujemy stronami:<br/> $$(a_1 + 9r) - (a_1 + 4r) = 47 - 22$$<br/> $$5r = 25 \\implies r = 5$$"
              .replace(/5r = 25/, "5r = 25").replace(/r = 5/, "r = 5")
              .replace(/r = 5/, "r = 5") // poprawne wartości
            }
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {/* ETAP 3: Wyznaczenie a_1 */}
        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Podstaw $$r=5$$ do równania $$a_5 = a_1 + 4r = 22$$. Ile wynosi $$a_1$$?"
            choices={[
              { label: "a_1 = 2", value: "a" },
              { label: "a_1 = 1", value: "b" },
              { label: "a_1 = 3", value: "c" },
              { label: "a_1 = 6", value: "d" },
            ]}
            correctAnswer="a"
            explanation={
              "$$a_5 = a_1 + 4r = 22$$<br/>" +
              "$$a_1 + 4 \\cdot 5 = 22$$<br/>" +
              "$$a_1 = 22 - 20 = 2$$"
            }
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {/* PODSUMOWANIE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="a_n = a_1 + (n-1)r"
            steps={[
              { step: "a_5 = 22 = a_1 + 4r" },
              { step: "a_{10} = 47 = a_1 + 9r" },
              { step: "a_{10} - a_5 = 5r = 25 \\implies r = 5" },
              { step: "a_1 = 22 - 4 \\cdot 5 = 2" }
            ]}
            solutions={[
              "a_1 = 2, \\quad r = 5"
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
