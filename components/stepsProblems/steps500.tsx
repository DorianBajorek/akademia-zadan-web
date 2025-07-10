'use client';

import { useEffect, useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

const Page = () => {
  const taskId = '500';
  const [problemSolved, setProblemSolved] = useState(false);

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const { token } = useAuth();

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (completedStages.length === 3) {
      solveProblem('500', token);
    }
  }, [completedStages]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="2^{-1} \cdot 32^{\frac{3}{5}}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Chcemy zapisać wszystkie liczby w postaci potęgi liczby 2. Zapiszmy liczbę 32 jako
                potęgę liczby 2.
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne dla liczby 32?"
                choices={[
                  { label: '32 = 2^4', value: 'a' },
                  { label: '32 = 2^5', value: 'b' },
                  { label: '32 = 2^6', value: 'c' },
                  { label: '32 = 2^3', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenie to $$32 = 2^5$$, ponieważ $$2^5 = 32$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaPotegi.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz całe wyrażenie z wykorzystaniem potęgi liczby 2.
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  {
                    label:
                      '32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 \\cdot \\frac{3}{5}} = 2^3',
                    value: 'a',
                  },
                  {
                    label: '32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 + \\frac{3}{5}}',
                    value: 'b',
                  },
                  {
                    label: '32^{\\frac{3}{5}} = 32^{\\frac{5}{3}} = 2^{\\frac{5}{3}}',
                    value: 'c',
                  },
                  {
                    label: '32^{\\frac{3}{5}} = (2^5)^{\\frac{3}{5}} = 2^{5 - \\frac{3}{5}}',
                    value: 'd',
                  },
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenie to $$32^{\frac{3}{5}} = (2^5)^{\frac{3}{5}} = 2^{5 \cdot \frac{3}{5}} = 2^3$$. Musimy pamiętać, że jeśli mamy potęgę do potęgi to wykładniki mnożymy!"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wykonaj mnożenie potęg o tej samej podstawie, aby uprościć wyrażenie.
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne dla wyrażenia $$2^{-1} \cdot 2^3$$?"
                choices={[
                  {
                    label: '2^{-1} \\cdot 2^3 = 2^{-1 \\cdot 3} = 2^{-3}',
                    value: 'a',
                  },
                  {
                    label: '2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^1 = 2',
                    value: 'b',
                  },
                  {
                    label: '2^{-1} \\cdot 2^3 = 2^{-1 - 3} = 2^{-4}',
                    value: 'c',
                  },
                  {
                    label: '2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^2 = 4',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie to $$2^{-1} \cdot 2^3 = 2^{-1 + 3} = 2^2 = 4$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="2^{-1} \cdot 32^{\frac{3}{5}}"
                steps={[
                  {
                    step: '2^{-1}\\cdot32^{\\frac{3}{5}} = 2^{-1}\\cdot(2^5)^{\\frac{3}{5}} = 2^{-1}\\cdot2^{5 \\cdot \\frac{3}{5}}',
                  },
                  {
                    step: '= 2^{-1} \\cdot 2^3 = 2^{-1 + 3} = 2^2 = 4',
                  },
                ]}
                solutions={['4']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
