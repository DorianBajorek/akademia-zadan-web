"use client";

import { useState } from "react";
import { InlineMath } from "react-katex";
import ChoiceQuestion from "./ChoiceQuestion";

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie wielomianowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^3 - 2x^2 - 3x + 6 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie do postaci pogrupowanej:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: "x^2(x-2) + 3(x-2) = 0", value: "b" },
                { label: "x^2(x-2) - 3(x-2) = 0", value: "a" },
                { label: "x^2(x+2) + 3(x+2) = 0", value: "d" },
                { label: "x^2(x+2) - 3(x+2) = 0", value: "c" }
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$x^2(x-2) - 3(x-2) = 0$$. 
                Dlaczego? Pozwala to na wyciągnięcie wspólnego czynnika $$(x-2)$$ w kolejnym kroku. Na tym etapie musimy zrobić tak żeby wyciągnąć najwięcej jak się da z pierwszych dwóch wyrazów, a następnie tak samo z drugiej pary w taki sposób aby po wyciągnięciu zostało to samo. W naszym przypadku jest to $$(x-2)$$. Jeśli nie da się tego dokonać, nie można rozwiązać takiego równania wielomianowego metodą grupowania. Na maturze podstawowej z matematyki zadania są skonstruowane w taki sposób, że ta metoda najczęściej działa."
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
                { label: "(x-2)(x^2+3) = 0", value: "b" },
                { label: "(x-2)(x^2-3) = 0", value: "a" },
                { label: "(x+2)(x^2+3) = 0", value: "d" },
                { label: "(x+2)(x^2-3) = 0", value: "c" }
              ]}
              correctAnswer="a"
              explanation="Poprawna postać po pogrupowaniu to $$(x-2)(x^2-3) = 0$$. 
                Dlaczego? Wyciągamy wspólny czynnik $$(x-2)$$ z obu grup. Jeśli z pierwszej grupy $$x^2(x-2)$$ zabierzemy $$(x-2)$$ to zostanie $$x^2$$. Jeśli z drugiej grupy $$-3(x-2)$$ zabierzemy $$(x-2)$$ to zostanie nam $$-3$$. Ostatecznie otrzymamy więc: $$(x-2)(x^2-3)$$"
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
                { label: "x = 2, x = 3", value: "b" },
                { label: "x = 2, x = \\sqrt{3}, x = -\\sqrt{3}", value: "a" },
                { label: "x = 2, x = 0", value: "d" },
                { label: "x = 2, x = 1", value: "c" }
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = 2, x = \sqrt{3}, x = -\sqrt{3}$$. <br>
              Dlaczego? Rozwiązujemy równanie $$(x-2)(x^2-3) = 0$$, czyli musimy przyrównać każdy z nawiasów do zera (mamy postać iloczynową). <br>
              1. $$x-2 = 0$$ przenosimy $$2$$ na drugą stronę i otrzymujemy $$x=2$$. <br>
              2. $$x^2-3 = 0$$. Rozwiązujemy jak niżej: <br>
              $$x^2 = 3$$ Pierwiastkujemy stronami pamiętając o dwóch rozwiązaniach: <br>
              $$x=3$$ lub $$x=-3$$."             
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.length === 3 && (
          <div className="mt-8 p-6 rounded-lg shadow-md border border-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('/kratka.png')" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Notatki maturzysty</h3>
            <div className="text-lg text-gray-700 space-y-4">
              <InlineMath math="x^3 - 2x^2 - 3x + 6 = 0" />
              <div>
                <p>
                  <InlineMath math="x^2(x-2) - 3(x-2) = 0" />
                </p>
              </div>
              <div className="text-gray-600">
                <InlineMath math="(x-2)(x^2-3) = 0" />
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    <InlineMath math="x - 2 = 0" /> daje <InlineMath math="x = 2" />.
                  </li>
                  <li>
                    <div className="space-y-2">
                      <p><InlineMath math="x^2 - 3 = 0" /></p>
                      <p><InlineMath math="x^2 = 3" /></p>
                      <p><InlineMath math="x = \sqrt{3}" /></p>
                      <p><InlineMath math="x = -\sqrt{3}" /></p>
                    </div>
                  </li>
                </ul>
                <p>Rozwiązania:</p>
                <p>
                  <InlineMath math="x = 2, x = \sqrt{3}, x = -\sqrt{3}" />
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;