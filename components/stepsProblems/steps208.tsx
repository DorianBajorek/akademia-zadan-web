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
  const taskId = '208';
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
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie wielomianowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^2(x+4) - 5 = (x-1)^2" />
        </p>
        {
          <>
            <p className="text-lg text-gray-700 mt-6">Zredukuj wyrazy podobne:</p>
            <ChoiceQuestion
              question="Która postać jest poprawna po redukcji?"
              choices={[
                { label: 'x^3 + 3x^2 + 2x - 6 = 0', value: 'a' },
                { label: 'x^3 + 5x^2 + 2x - 6 = 0', value: 'b' },
                { label: 'x^3 + 3x^2 - 2x - 6 = 0', value: 'c' },
                { label: 'x^3 + 5x^2 - 2x - 4 = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawna postać po redukcji to $$x^3 + 3x^2 + 2x - 6 = 0$$. 
              Dlaczego? Redukujemy wyrazy podobne z poprzedniego kroku: 
              $$x^3$$ (tylko jeden), $$4x^2 - x^2 = 3x^2$$, $$2x$$ (tylko jeden), $$-5 -1 = -6$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        }
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozłóż wielomian na czynniki metodą grupowania:
            </p>
            <ChoiceQuestion
              question="Które grupowanie jest poprawne?"
              choices={[
                { label: 'x^2(x + 3) + 2(x - 3) = 0', value: 'a' },
                { label: 'x^2(x + 1) + 2(x^2 + x - 3) = 0', value: 'b' },
                { label: 'x^2(x + 3) + 2(x + 3) = 0', value: 'c' },
                { label: 'x(x^2 + 3x + 2) - 6 = 0', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne grupowanie to $$x^2(x + 3) + 2(x + 3) = 0$$. <br>
              Dlaczego? Grupujemy wyrazy w następujący sposób: <br>
              $$(x^3 + 3x^2) + (2x + 6) = 0$$, <br>
              następnie wyciągamy $$x^2$$ z pierwszej grupy i 2 z drugiej: <br>
              $$x^2(x + 3) + 2(x + 3) = 0$$.
              Teraz możemy wyciągnąć wspólny czynnik $$(x + 3)$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Wyciągnij wspólny czynnik przed nawias:</p>
            <ChoiceQuestion
              question="Która postać jest poprawna?"
              choices={[
                { label: '(x + 3)(x^2 + 2) = 0', value: 'a' },
                { label: '(x + 3)(x^2 - 2) = 0', value: 'b' },
                { label: '(x - 3)(x^2 + 2) = 0', value: 'c' },
                { label: '(x + 3)(x^2 + 2x) = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawna postać to $$(x + 3)(x^2 + 2) = 0$$. 
              Dlaczego? Z poprzedniego kroku mamy $$x^2(x + 3) + 2(x + 3) = 0$$, 
              więc wyciągamy $$(x + 3)$$ przed nawias: $$(x + 3)(x^2 + 2) = 0$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {completedStages.includes(4) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozwiąż równanie całkowicie (uwzględniając tylko rozwiązania rzeczywiste):
            </p>
            <ChoiceQuestion
              question="Które rozwiązanie jest poprawne?"
              choices={[
                { label: 'x = -3', value: 'a' },
                { label: 'x = -3, x = \\sqrt2, x = -\\sqrt2', value: 'b' },
                { label: 'x = 3', value: 'c' },
                { label: 'x = -3, x = 1, x = -1', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwiązanie to $$x = -3$$. 
            Dlaczego? Rozwiązujemy równanie $$(x + 3)(x^2 + 2) = 0$$: <br>
            1. $$x + 3 = 0$$ ⇒ $$x = -3$$ <br>
            2. $$x^2 + 2 = 0$$ ⇒ $$x^2 = -2$$ - to równanie nie ma rozwiązań rzeczywistych
            Dlatego jedynym rzeczywistym rozwiązaniem jest $$x = -3$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="x^2(x+4) - 5 = (x-1)^2"
            steps={[
              {
                step: 'x^3 + 4x^2 - 5 - x^2 + 2x - 1 = 0',
              },
              {
                step: 'x^3 + 3x^2 + 2x - 6 = 0',
              },
              {
                step: 'x^2(x + 3) + 2(x + 3) = 0',
              },
              {
                step: '(x + 3)(x^2 + 2) = 0',
              },
              {
                step: 'x + 3 = 0 \\Rightarrow x = -3',
              },
              {
                step: 'x^2 + 2 = 0 \\Rightarrow x^2 = -2 \\Rightarrow \\text{brak rozwiązań rzeczywistych}',
              },
            ]}
            solutions={['x = -3']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
