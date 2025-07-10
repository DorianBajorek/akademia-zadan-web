'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '508';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wartości wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="\left( \frac{2^{-2} \cdot 3^{-1}}{2^{-1} \cdot 3^{-2}} \right)^0"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Zastosowanie własności potęgowania dla wykładnika 0:
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest wartość wyrażenia podniesionego do potęgi 0?"
                choices={[
                  { label: '0', value: 'a' },
                  { label: '1', value: 'b' },
                  { label: '\\text{Nie da się określić}', value: 'c' },
                  { label: '2^{-1} \\cdot 3^1', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Każda liczba różna od zera podniesiona do potęgi 0 równa się 1. Zatem: 
                $$\left( \frac{2^{-2} \cdot 3^{-1}}{2^{-1} \cdot 3^{-2}} \right)^0 = 1$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/potegaDoZera.png"
              />
            </div>
          )}

          {completedStages.length === 1 && (
            <div className="mt-8">
              <StudentNotes
                equation="\left( \frac{2^{-2} \cdot 3^{-1}}{2^{-1} \cdot 3^{-2}} \right)^0"
                steps={[
                  {
                    step: '\\left( \\frac{2^{-2} \\cdot 3^{-1}}{2^{-1} \\cdot 3^{-2}} \\right)^0 = 1',
                  },
                ]}
                solutions={['1']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
