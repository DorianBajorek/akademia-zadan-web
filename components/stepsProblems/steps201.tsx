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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie wielomianowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^3 + 5x^2 - 2x - 10 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie do postaci pogrupowanej:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "x^2(x+5) - 2(x+5) = 0", value: "a" },
                { label: "x^2(x+5) + 2(x+5) = 0", value: "b" },
                { label: "x^2(x-5) - 2(x-5) = 0", value: "c" },
                { label: "x^2(x-5) + 2(x-5) = 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$x^2(x+5) - 2(x+5) = 0$$. 
                Dlaczego? Pozwala to na wyciągnięcie wspólnego czynnika $$(x+5)$$ w kolejnym kroku. Na tym etapie musimy zrobić tak żeby wyciągnąć najwięcej jak się da z pierwszych dwóch wyrazów, a następnie tak samo z drugiej pary w taki sposób aby po wyciągnięciu zostało to samo. W naszym przypadku jest to $$(x+5)$$. Jeśli nie da się tego dokonać, nie można rozwiązać takiego równania wielomianowego metodą grupowania. Na maturze podstawowej z matematyki zadania są skonstruowane w taki sposób, że ta metoda najczęściej działa."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Zaznacz poprawną postać po pogrupowaniu:
            </p>
            <ChoiceQuestion
              question="Która postać jest poprawna po pogrupowaniu?"
              choices={[
                { label: "(x+5)(x^2+2) = 0", value: "a" },
                { label: "(x+5)(x^2-2) = 0", value: "b" },
                { label: "(x-5)(x^2-2) = 0", value: "c" },
                { label: "(x-5)(x^2+2) = 0", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawna postać po pogrupowaniu to $$(x+5)(x^2-2) = 0$$. 
                Dlaczego? Wyciągamy wspólny czynnik $$(x+5)$$ z obu grup. Jeśli z pierwszej grupy $$x^2(x+5)$$ zabierzemy $$(x+5)$$ to zostanie $$x^2$$. Jeśli z drugiej grupy $$-2(x+5)$$ zabierzemy $$(x+5)$$ to zostanie nam $$-2$$. Ostatecznie otrzymamy więc: $$(x+5)(x^2-2)$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie całkowicie.
            </p>
            <ChoiceQuestion
              question="Które rozwiązanie jest poprawne dla całego równania?"
              choices={[
                { label: "x = 5, x = \\sqrt{2}, x = -\\sqrt{2}", value: "a" },
                { label: "x = -5, x = 2, x = -2", value: "b" },
                { label: "x = 5, x = 2, x = -2", value: "c" },
                { label: "x = -5, x = \\sqrt{2}, x = -\\sqrt{2}", value: "d" },
              ]}
              correctAnswer="d"
              explanation="Poprawne rozwiązanie to $$x = -5, x = \sqrt{2}, x = -\sqrt{2}$$. <br>
              Dlaczego? Rozwiązujemy równanie $$(x+5)(x^2-2) = 0$$, czyli musimy przyrównać każdy z nawiasów do zera (mamy postać iloczynową). <br>
              1. $$x+5 = 0$$ przenosimy $$5$$ na drugą stronę i otrzymujemy $$x=-5$$. <br>
              2. $$x^2-2 = 0$$. Rozwiązujemy jak niżej: <br>
              $$x^2 = 2$$ Pierwiastkujemy stronami pamiętając o dwóch rozwiązaniach: <br>
              $$x=\sqrt{2}$$ lub $$x=-\sqrt{2}$$."             
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="x^3 + 5x^2 - 2x - 10 = 0"
            steps={[
              {
                step: "x^2(x+5) - 2(x+5) = 0",
              },
              {
                step: "(x+5)(x^2-2) = 0",
              },
              {
                step: "x + 5 = 0 \\Rightarrow x = -5",
              },
              {
                step: "x^2 - 2 = 0 \\Rightarrow x^2 = 2 \\Rightarrow x = \\sqrt{2} \\text{ lub } x = -\\sqrt{2}",
              }
            ]}
            solutions={["x = -5", "x = \\sqrt{2}", "x = -\\sqrt{2}"]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;