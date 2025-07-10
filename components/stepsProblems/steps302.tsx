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
  const taskId = '302';
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
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_5 \sqrt{125}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Zapisz równanie korzystając z definicji logarytmu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie odpowiada definicji logarytmu?"
                choices={[
                  { label: 'x^5 = \\sqrt{125}', value: 'a' },
                  { label: '5 \\cdot x = \\sqrt{125}', value: 'b' },
                  { label: '5^x = \\sqrt{125}', value: 'c' },
                  { label: '5 = (\\sqrt{125})^x', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Z definicji logarytmu wiemy, że $$\log_5 \sqrt{125} = x$$ oznacza $$5^x = \sqrt{125}$$."
                onComplete={() => handleStageComplete(1)}
                img={'/steps-images/definicjaLogarytmu.png'}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz obie strony równania jako potęgi liczby 5
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '5^x = 5^{\\frac{3}{2}}', value: 'a' },
                  { label: '5^x = 5^3', value: 'b' },
                  { label: '5^x = 125^{\\frac{1}{2}}', value: 'c' },
                  { label: '5^x = 5^{\\frac{2}{3}}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenie to $$5^x = 5^{\frac{3}{2}}$$. <br>
                Dlaczego? <br>
                $$\sqrt{125} = 125^{\frac{1}{2}} = (5^3)^{\frac{1}{2}} = 5^{\frac{3}{2}}$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Porównaj wykładniki po obu stronach równania
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie wynika z porównania wykładników?"
                choices={[
                  { label: 'x = 3', value: 'a' },
                  { label: 'x = \\frac{2}{3}', value: 'b' },
                  { label: 'x = \\frac{3}{2}', value: 'c' },
                  { label: 'x = \\frac{1}{2}', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Poprawne równanie to $$x = \frac{3}{2}$$. <br>
                Dlaczego? Jeśli $$5^x = 5^{\frac{3}{2}}$$, to wykładniki muszą być równe."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_5 \sqrt{125}"
                steps={[
                  {
                    step: '\\log_5 \\sqrt{125} = x \\Rightarrow 5^x = \\sqrt{125}',
                  },
                  {
                    step: '\\sqrt{125} = 125^{\\frac{1}{2}} = (5^3)^{\\frac{1}{2}} = 5^{\\frac{3}{2}}',
                  },
                  {
                    step: '5^x = 5^{\\frac{3}{2}}',
                  },
                  {
                    step: 'x = \\frac{3}{2}',
                  },
                ]}
                solutions={['x = \\frac{3}{2}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
