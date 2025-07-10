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
  const taskId = '1905';
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
          Upraszczanie wyrażeń algebraicznych
        </h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(2x-y)(2x+y) - (x+y)^2" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: zastosuj wzory skróconego mnożenia:
            </p>
            <ChoiceQuestion
              question="Jak poprawnie rozwinąć oba wyrażenia?"
              choices={[
                { label: '(2x^2 - y^2) - (x^2 + xy + y^2)', value: 'a' },
                { label: '(4x^2 + y^2) - (x^2 + 2xy + y^2)', value: 'b' },
                { label: '(4x^2 - y^2) - (x^2 + 2xy + y^2)', value: 'c' },
                { label: '(4x^2 - y^2) - (x^2 + xy + y^2)', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne rozwinięcie:<br>
                $$(2x-y)(2x+y) = (2x)^2 - y^2 = 4x^2 - y^2$$ (wzór na różnicę kwadratów)<br>
                $$(x+y)^2 = x^2 + 2xy + y^2$$ (wzór na kwadrat sumy)"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: wykonaj odejmowanie i uprość wyrażenie:
            </p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: '3x^2 - 2xy + 2y^2', value: 'a' },
                { label: '3x^2 + 2xy - 2y^2', value: 'b' },
                { label: '5x^2 - 2xy - 2y^2', value: 'c' },
                { label: '3x^2 - 2xy - 2y^2', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne uproszczenie:<br>
                1. $$(4x^2 - y^2) - (x^2 + 2xy + y^2)$$<br>
                2. $$4x^2 - y^2 - x^2 - 2xy - y^2$$<br>
                3. $$(4x^2 - x^2) - 2xy + (-y^2 - y^2)$$<br>
                4. $$3x^2 - 2xy - 2y^2$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="(2x-y)(2x+y) - (x+y)^2"
            steps={[
              {
                step: '= [(2x)^2 - y^2] - [x^2 + 2xy + y^2]',
              },
              {
                step: '= (4x^2 - y^2) - (x^2 + 2xy + y^2)',
              },
              {
                step: '= 4x^2 - y^2 - x^2 - 2xy - y^2',
              },
              {
                step: '= (4x^2 - x^2) - 2xy + (-y^2 - y^2)',
              },
              {
                step: '= 3x^2 - 2xy - 2y^2',
              },
            ]}
            solutions={['3x^2 - 2xy - 2y^2']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
