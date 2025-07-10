'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1102';
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
      if (updated.length === 3 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Odejmowanie logarytmów"
          description="Oblicz wartość wyrażenia:"
          equation="\log_7{98} - \log_7{2}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Skorzystaj z własności logarytmów, aby zamienić różnicę logarytmów na jeden
                logarytm.
              </StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać różnicę logarytmów o tej samej podstawie?"
                choices={[
                  { label: '\\log_7{\\left(98 - 2\\right)}', value: 'a' },
                  { label: '\\log_7{\\left(98 \\cdot 2\\right)}', value: 'b' },
                  { label: '\\log_7{\\left(\\frac{98}{2}\\right)}', value: 'c' },
                  { label: '\\log_7{\\left(\\frac{2}{98}\\right)}', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Z własności logarytmów: $$\log_a{b} - \log_a{c} = \log_a{\left(\frac{b}{c}\right)}$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/dzialania-na-logarytmach.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz wartość ułamka wewnątrz logarytmu.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\frac{98}{2}$$?"
                choices={[
                  { label: '49', value: 'a' },
                  { label: '50', value: 'b' },
                  { label: '48', value: 'c' },
                  { label: '47', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="$$\frac{98}{2} = 49$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz wartość logarytmu na podstawie definicji.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\log_7{49}$$?"
                choices={[
                  { label: '3', value: 'a' },
                  { label: '1', value: 'b' },
                  { label: '7', value: 'c' },
                  { label: '2', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Ponieważ $$7^2 = 49$$, więc $$\log_7{49} = 2$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_7{98} - \log_7{2}"
                steps={[
                  {
                    step: '\\log_7{98} - \\log_7{2} = \\log_7{\\left(\\frac{98}{2}\\right)}',
                  },
                  {
                    step: '\\log_7{49}',
                  },
                  {
                    step: '2',
                  },
                ]}
                solutions={['2']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
