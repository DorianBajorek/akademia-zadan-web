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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie wielomianowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="5x^3 + 6x^2 + 10x + 12 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie do postaci pogrupowanej:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "x^2(5x + 6) + 2(5x + 6) = 0", value: "a" },
                { label: "x^2(5x + 6) - 2(5x + 6) = 0", value: "b" },
                { label: "x^2(5x - 6) + 2(5x - 6) = 0", value: "c" },
                { label: "x^2(5x - 6) - 2(5x - 6) = 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$x^2(5x + 6) + 2(5x + 6) = 0$$. 
                Dlaczego? Pozwala to na wyciągnięcie wspólnego czynnika $$(5x + 6)$$ w kolejnym kroku. Na tym etapie musimy zrobić tak żeby wyciągnąć najwięcej jak się da z pierwszych dwóch wyrazów, a następnie tak samo z drugiej pary w taki sposób aby po wyciągnięciu zostało to samo. W naszym przypadku jest to $$(5x + 6)$$. Jeśli nie da się tego dokonać, nie można rozwiązać takiego równania wielomianowego metodą grupowania. Na maturze podstawowej z matematyki zadania są skonstruowane w taki sposób, że ta metoda najczęściej działa."
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
                { label: "(5x + 6)(x^2 + 2) = 0", value: "a" },
                { label: "(5x + 6)(x^2 - 2) = 0", value: "b" },
                { label: "(5x - 6)(x^2 + 2) = 0", value: "c" },
                { label: "(5x - 6)(x^2 - 2) = 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Poprawna postać po pogrupowaniu to $$(5x + 6)(x^2 + 2) = 0$$. 
                Dlaczego? Wyciągamy wspólny czynnik $$(5x + 6)$$ z obu grup. Jeśli z pierwszej grupy $$x^2(5x + 6)$$ zabierzemy $$(5x + 6)$$ to zostanie $$x^2$$. Jeśli z drugiej grupy $$2(5x + 6)$$ zabierzemy $$(5x + 6)$$ to zostanie nam $$2$$. Ostatecznie otrzymamy więc: $$(5x + 6)(x^2 + 2)$$"
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
                { label: "x = -\\frac{6}{5}, x = \\sqrt{2}, x = -\\sqrt{2}", value: "a" },
                { label: "x = -\\frac{6}{5}", value: "b" },
                { label: "x = -\\frac{6}{5}, x = \\sqrt{2}", value: "c" },
                { label: "x = \\sqrt{2}, x = -\\sqrt{2}", value: "d" }
              ]}
              correctAnswer="b"
              explanation="Poprawne rozwiązanie to $$x = -\frac{6}{5}$$. <br>
              Dlaczego? Rozwiązujemy równanie $$(5x + 6)(x^2 + 2) = 0$$, czyli musimy przyrównać każdy z nawiasów do zera (mamy postać iloczynową). <br>
              1. $$5x + 6 = 0$$ przenosimy $$6$$ na drugą stronę i otrzymujemy $$5x = -6$$, a następnie dzielimy przez $$5$$, co daje $$x = -\frac{6}{5}$$. <br>
              2. $$x^2 + 2 = 0$$. Rozwiązujemy jak niżej: <br>
              $$x^2 = -2$$. Ponieważ delta jest ujemna, równanie nie ma rozwiązań rzeczywistych."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.length === 3 && (
        <StudentNotes
            equation="x^3 - 3x^2 - 4x + 12 = 0"
            steps={[
            {
                step: "x^2(x - 3) - 4(x - 3) = 0",
                explanation: "",
            },
            {
                step: "(x - 3)(x^2 - 4) = 0",
                explanation: "",
            },
            {
                step: "x - 3 = 0 \\quad \\text{lub} \\quad x^2 - 4 = 0",
                explanation: "",
            },
            {
                step: "x - 3 = 0 \\Rightarrow x = 3",
                explanation: "",
            },
            {
                step: "x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2 \\quad \\text{lub} \\quad x = -2",
                explanation: "",
            },
            ]}
            solutions={["x = 3", "x = 2", "x = -2"]}
        />
        )}
      </div>
    </div>
  );
};

export default Page;