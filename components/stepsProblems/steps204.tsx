'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

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
                { label: 'x^2(x-2) + 3(x-2) = 0', value: 'b' },
                { label: 'x^2(x-2) - 3(x-2) = 0', value: 'a' },
                { label: 'x^2(x+2) + 3(x+2) = 0', value: 'd' },
                { label: 'x^2(x+2) - 3(x+2) = 0', value: 'c' },
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
            <p className="text-lg text-gray-700 mt-6">Zaznacz poprawną postać po pogrupowaniu:</p>
            <ChoiceQuestion
              question="Która postać jest poprawna po pogrupowaniu?"
              choices={[
                { label: '(x-2)(x^2+3) = 0', value: 'b' },
                { label: '(x-2)(x^2-3) = 0', value: 'a' },
                { label: '(x+2)(x^2+3) = 0', value: 'd' },
                { label: '(x+2)(x^2-3) = 0', value: 'c' },
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
            <p className="text-lg text-gray-700 mt-6">Rozwiąż równanie całkowicie.</p>
            <ChoiceQuestion
              question="Które rozwiązanie jest poprawne dla całego równania?"
              choices={[
                { label: 'x = 2, x = 3', value: 'b' },
                { label: 'x = 2, x = \\sqrt{3}, x = -\\sqrt{3}', value: 'a' },
                { label: 'x = 2, x = 0', value: 'd' },
                { label: 'x = 2, x = 1', value: 'c' },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = 2, x = \sqrt{3}, x = -\sqrt{3}$$. <br>
              Dlaczego? Rozwiązujemy równanie $$(x-2)(x^2-3) = 0$$, czyli musimy przyrównać każdy z nawiasów do zera (mamy postać iloczynową). <br>
              1. $$x-2 = 0$$ przenosimy $$2$$ na drugą stronę i otrzymujemy $$x=2$$. <br>
              2. $$x^2-3 = 0$$. Rozwiązujemy jak niżej: <br>
              $$x^2 = 3$$ Pierwiastkujemy stronami pamiętając o dwóch rozwiązaniach: <br>
              $$x=\sqrt{3}$$ lub $$x=-\sqrt{3}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="x^3 - 2x^2 - 3x + 6 = 0"
            steps={[
              {
                step: 'x^2(x-2) - 3(x-2) = 0',
              },
              {
                step: '(x-2)(x^2-3) = 0',
              },
              {
                step: 'x - 2 = 0 \\Rightarrow x = 2',
              },
              {
                step: 'x^2 - 3 = 0 \\Rightarrow x^2 = 3 \\Rightarrow x = \\sqrt{3} \\text{ lub } x = -\\sqrt{3}',
              },
            ]}
            solutions={['x = 2', 'x = \\sqrt{3}', 'x = -\\sqrt{3}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
