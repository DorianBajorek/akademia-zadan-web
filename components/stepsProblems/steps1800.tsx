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
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Upraszczanie wyrażeń algebraicznych</h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="3x^2y + 5xy^2 - 2x^2y + 4xy - 6xy^2" />
        </p>
        
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: pogrupuj wyrazy podobne:
            </p>
            <ChoiceQuestion
              question="Które grupowanie jest poprawne?"
              choices={[
                { label: "(3x^2y - 2x^2y) + (5xy^2 - 6xy^2) + 4xy", value: "a" },
                { label: "(3x^2y + 5xy^2) + (-2x^2y + 4xy) - 6xy^2", value: "b" },
                { label: "(3x^2y + 2x^2y) + (5xy^2 + 6xy^2) + 4xy", value: "c" },
                { label: "(3x^2y - 5xy^2) + (-2x^2y - 4xy) + 6xy^2", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne grupowanie to $$(3x^2y - 2x^2y) + (5xy^2 - 6xy^2) + 4xy$$. <br>
                Dlaczego? Wyrazy podobne to takie, które mają te same zmienne w tej samej potędze. W tym przypadku grupujemy:<br> 
                - wyrazy z $$x^2y$$: $$3x^2y$$ i $$-2x^2y$$<br>
                - wyrazy z $$xy^2$$: $$5xy^2$$ i $$-6xy^2$$<br>
                - wyraz z $$xy$$: $$4xy$$ (nie ma innego podobnego)<br>"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: wykonaj redukcję wyrazów podobnych:
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: "x^2y - xy^2 + 4xy", value: "a" },
                { label: "5x^2y - xy^2 + 4xy", value: "b" },
                { label: "x^2y + 11xy^2 + 4xy", value: "c" },
                { label: "x^2y - xy^2 - 4xy", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$x^2y - xy^2 + 4xy$$. <br>
                Dlaczego? Wykonujemy działania w każdej grupie:<br>
                1. $$3x^2y - 2x^2y = (3-2)x^2y = x^2y$$<br>
                2. $$5xy^2 - 6xy^2 = (5-6)xy^2 = -xy^2$$<br>
                3. $$4xy$$ pozostaje bez zmian"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        
        {completedStages.length === 2 && (
          <StudentNotes
            equation="3x^2y + 5xy^2 - 2x^2y + 4xy - 6xy^2"
            steps={[
              {
                step: "3x^2y + 5xy^2 - 2x^2y + 4xy - 6xy^2 = (3x^2y - 2x^2y) + (5xy^2 - 6xy^2) + 4xy = x^2y - xy^2 + 4xy",
              },
            ]}
            solutions={["x^2y - xy^2 + 4xy"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;