'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const { token } = useAuth();
  const taskId = '200';
  const [problemSolved, setProblemSolved] = useState(false);

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie wielomianowe:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="3x^3 - 2x^2 - 12x + 8 = 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Przekształć równanie do postaci pogrupowanej:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x^2(3x-2) + 4(3x-2) = 0', value: 'a' },
                { label: 'x^2(3x+2) - 4(3x+2) = 0', value: 'b' },
                { label: 'x^2(3x-2) - 4(3x-2) = 0', value: 'c' },
                { label: 'x^2(3x+2) + 4(3x+2) = 0', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$x^2(3x-2) - 4(3x-2) = 0$$. 
                Dlaczego? Pozwala to na wyciągnięcie wspólnego czynnika $$(3x-2)$$ w kolejnym kroku. Na tym etapie musimy zrobić tak żeby wyciągnąć najwięcej jak się da z pierwszych dwóch wyrazów, a następnie tak samo z drugiej pary w taki sposób aby po wyciągnięciu zostało to samo. W naszym przypadku jest to $$(3x-2)$$. Jeśli nie da się tego dokonać, nie można rozwiązać takiego równania wielomianowego metodą grupowania. Na maturze podstawowej z matematyki zadania są skonstruowane w taki sposób, że ta metoda najczęściej działa."
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
                { label: '(3x-2)(x^2-4) = 0', value: 'a' },
                { label: '(3x-2)(x^2+4) = 0', value: 'b' },
                { label: '(3x+2)(x^2-4) = 0', value: 'c' },
                { label: '(3x+2)(x^2+4) = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawna postać po pogrupowaniu to $$(3x-2)(x^2-4) = 0$$. 
                Dlaczego? Wyciągamy wspólny czynnik $$(3x-2)$$ z obu grup. Jeśli z pierwszej grupy $$x^2(3x-2)$$ zabierzemy $$(3x-2)$$ to zostanie $$x^2$$. Jeśli z drugiej grupy $$-4(3x-2)$$ zabierzemy $$(3x-2)$$ to zostanie nam $$-4$$. Ostatecznie otrzymamy więc: $$(3x-2)(x^2-4)$$"
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
                { label: 'x = \\frac{2}{3}, x = 4, x = -4', value: 'a' },
                { label: 'x = \\frac{3}{2}, x = 2, x = -2', value: 'b' },
                { label: 'x = \\frac{3}{2}, x = 4, x = -4', value: 'c' },
                { label: 'x = \\frac{2}{3}, x = 2, x = -2', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne rozwiązanie to $$x = \frac{2}{3}, x = 2, x = -2$$. <br>
              Dlaczego? Rozwiązujemy równanie $$(3x-2)(x^2-4) = 0$$, czyli musimy przyrównać każdy z nawiasów do zera (mamy postać iloczynową). <br>
              1. $$3x-2 = 0$$ przenosimy $$2$$ na drugą stronę i otrzymujemy $$3x=2$$, a następnie dzielimy przez $$3$$, co daje $$x=\frac{2}{3}$$. <br>
              2. $$x^2-4 = 0$$. Rozwiązujemy jak niżej: <br>
              $$x^2 = 4$$ Pierwiastkujemy stronami pamiętając o dwóch rozwiązaniach: <br>
              $$x=2$$ lub $$x=-2$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="3x^3 - 2x^2 - 12x + 8 = 0"
            steps={[
              {
                step: 'x^2(3x-2) - 4(3x-2) = 0',
              },
              {
                step: '(3x-2)(x^2-4) = 0',
              },
              {
                step: '3x - 2 = 0 \\Rightarrow x = \\frac{2}{3}',
              },
              {
                step: 'x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2 \\text{ lub } x = -2',
              },
            ]}
            solutions={['x = \\frac{2}{3}', 'x = 2', 'x = -2']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
