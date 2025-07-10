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
  const taskId = '509';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wartości wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przekształć ujemne wykładniki na dodatnie:
              </StepDescription>
              <ChoiceQuestion
                question="Jak przekształcić wyrażenie z ujemnymi wykładnikami?"
                choices={[
                  { label: '3^{-1} = -3, (-\\frac{1}{9})^{-2} = (-\\frac{1}{9})^2', value: 'a' },
                  { label: '3^{-1} = \\frac{1}{3}, (-\\frac{1}{9})^{-2} = (-9)^2', value: 'b' },
                  {
                    label: '3^{-1} = \\frac{1}{3}, (-\\frac{1}{9})^{-2} = (-\\frac{1}{9})^2',
                    value: 'c',
                  },
                  { label: '3^{-1} = -3, (-\\frac{1}{9})^{-2} = (-9)^2', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenia:
                $$3^{-1} = \frac{1}{3}$$
                $$(-\frac{1}{9})^{-2} = (-9)^2$$ (odwracamy ułamek i zmieniamy znak wykładnika)"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/ujemnyWykladnik.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>Oblicz wartość mianownika:</StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$(-9)^2$$?"
                choices={[
                  { label: '-81', value: 'a' },
                  { label: '81', value: 'b' },
                  { label: '18', value: 'c' },
                  { label: '-18', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="$$(-9)^2 = (-9) \cdot (-9) = 81$$ (minus razy minus daje plus)"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/definicjaPotegi.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wstaw obliczone wartości i uprość wyrażenie:
              </StepDescription>
              <ChoiceQuestion
                question="Jak uprościć wyrażenie $$\frac{\frac{1}{3}}{81} \cdot 81$$?"
                choices={[
                  { label: '\\frac{1}{3}', value: 'a' },
                  { label: '3', value: 'b' },
                  { label: '1', value: 'c' },
                  { label: '81', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="$$\frac{\frac{1}{3}}{81} \cdot 81 = \frac{1}{3} \cdot \frac{81}{81} = \frac{1}{3}$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\frac{3^{-1}}{(-\frac{1}{9})^{-2}} \cdot 81"
                steps={[
                  {
                    step: '\\frac{3^{-1}}{(-\\frac{1}{9})^{-2}} \\cdot 81 = \\frac{\\frac{1}{3}}{(-9)^{2}} \\cdot 81 = \\frac{\\frac{1}{3}}{81} \\cdot 81 = \\frac{1}{3}',
                  },
                ]}
                solutions={['\\frac{1}{3}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
