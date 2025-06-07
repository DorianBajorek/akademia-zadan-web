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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Rozwiązywanie nierówności liniowych</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="2x + 2 > 3x + 1" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: przenieś wyrażenia z <InlineMath math="x"/> na lewą stronę, a liczby na prawą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "-2x - 3x > 1 - 2", value: "a" },
                { label: "2x + 3x > 1 + 2", value: "b" },
                { label: "2x - 3x > 1 - 2", value: "c" },
                { label: "2x - 3x > -1 + 2", value: "d" }
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$2x - 3x > 1 - 2$$. <br>
                Dlaczego? Przenosimy $$3x$$ na lewą stronę (zmieniając znak na minus) i $$2$$ na prawą stronę (zmieniając znak na minus)."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: uprość obie strony nierówności:
            </p>
            <ChoiceQuestion
              question="Jak wygląda uproszczona nierówność?"
              choices={[
                { label: "-x > -1", value: "a" },
                { label: "5x > 3", value: "b" },
                { label: "-5x > -1", value: "c" },
                { label: "x > 1", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$-x > -1$$. <br>
                Dlaczego? Po lewej stronie mamy $$2x - 3x = -x$$, a po prawej $$1 - 2 = -1$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: pomnóż obie strony przez <InlineMath math="-1"/> (pamiętaj o zmianie znaku nierówności!):
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie nierówności?"
              choices={[
                { label: "x > 1", value: "a" },
                { label: "x < 1", value: "b" },
                { label: "x < -1", value: "c" },
                { label: "x > -1", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne rozwiązanie to $$x < 1$$. <br>
                Dlaczego? Mnożymy obie strony przez -1 i zmieniamy znak nierówności: <br>
                $$-x > -1$$<br>
                $$x < 1$$"
              explanationImage="/steps-images/nierownosc-liniowa1.png"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        
        {completedStages.length === 3 && (
          <StudentNotes
            equation="2x + 2 > 3x + 1"
            steps={[
              {
                step: "2x - 3x > 1 - 2",
              },
              {
                step: "-x > -1",
              },
              {
                step: "x < 1",
                image: "/steps-images/nierownosc-liniowa1.png",
              },
            ]}
            solutions={["x \\in(-∞, 1)"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;