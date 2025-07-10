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
  const taskId = '2400';
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
      if (updated.length === 1 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rozwiązywanie równań liniowych
        </h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="3x - 3 = 2x + 1" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: przenieś wyrażenia z <InlineMath math="x" /> na lewą stronę, a liczby
              na prawą:
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: '3x - 2x = 1 + 3', value: 'a' },
                { label: '3x + 2x = 1 - 3', value: 'b' },
                { label: '-3x - 2x = 1 + 3', value: 'c' },
                { label: '3x - 2x = 1 - 3', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$3x - 2x = 1 + 3$$. <br>
                Dlaczego? Przenosimy $$2x$$ na lewą stronę (zmieniając znak) i $$-3$$ na prawą stronę (zmieniając znak)."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Drugi krok: uprość obie strony równania:</p>
            <ChoiceQuestion
              question="Jak wygląda uproszczone równanie?"
              choices={[
                { label: 'x = -2', value: 'a' },
                { label: '5x = -2', value: 'b' },
                { label: 'x = 4', value: 'c' },
                { label: '-5x = 4', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne uproszczenie to $$x = 4$$. <br>
                Dlaczego? Po lewej stronie mamy $$3x - 2x = x$$, a po prawej $$1 + 3 = 4$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="3x - 3 = 2x + 1"
            steps={[
              {
                step: '3x - 2x = 1 + 3',
              },
              {
                step: 'x = 4',
              },
            ]}
            solutions={['x=4']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
