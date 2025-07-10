'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const { token } = useAuth();
  const taskId = '307';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_2(0{,}125^6 \cdot \sqrt{64})"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Zapisz równanie korzystając z definicji logarytmu:
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie odpowiada definicji logarytmu?"
                choices={[
                  { label: 'x^2 = 0{,}125^6 \\cdot \\sqrt{64}', value: 'a' },
                  { label: '2 \\cdot x = 0{,}125^6 \\cdot \\sqrt{64}', value: 'b' },
                  { label: '2^x = 0{,}125^6 \\cdot \\sqrt{64}', value: 'c' },
                  { label: '2 = (0{,}125^6 \\cdot \\sqrt{64})^x', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Z definicji logarytmu wiemy, że $$\log_2(0{,}125^6 \cdot \sqrt{64}) = x$$ oznacza $$2^x = 0{,}125^6 \cdot \sqrt{64}$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przekształć wyrażenie wewnątrz logarytmu do prostszej postaci:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '2^x = (2^{-3})^6 \\cdot 2^3', value: 'a' },
                  { label: '2^x = (2^{-6})^3 \\cdot 2^6', value: 'b' },
                  { label: '2^x = 2^{-18} \\cdot 2^{-3}', value: 'c' },
                  { label: '2^x = 2^{-9} \\cdot 2^6', value: 'd' },
                ]}
                correctAnswer="a"
                explanation={`Poprawne przekształcenie to $$(2^{-3})^6 \\cdot 2^3$$.<br>
                  Dlaczego?<br>
                  $$0{,}125 = \\frac{1}{8} = 2^{-3}$$<br>
                  $$\\sqrt{64} = 8 = 2^3$$`}
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Uprość wyrażenie korzystając z własności potęg:
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne?"
                choices={[
                  { label: '2^x = 2^{-3}', value: 'a' },
                  { label: '2^x = 2^9', value: 'b' },
                  { label: '2^x = 2^{-15}', value: 'c' },
                  { label: '2^x = 2^{-18}', value: 'd' },
                ]}
                correctAnswer="c"
                explanation={`Poprawne rozwiązanie to $$2^{-15}$$.<br>
                  $$(2^{-3})^6 \\cdot 2^3 = 2^{-18} \\cdot 2^3 = 2^{-15}$$`}
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Oblicz wartość logarytmu:</StepDescription>
              <NumericQuestion
                question="Jaka jest wartość x?"
                correctAnswer="-15"
                explanation={`Poprawne rozwiązanie to $$x = -15$$.<br>
                  Skoro $$2^x = 2^{-15}$$, to z porównania wykładników wynika, że $$x = -15$$.`}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_2(0{,}125^6 \cdot \sqrt{64})"
                steps={[
                  {
                    step: '\\log_2(0{,}125^6 \\cdot \\sqrt{64}) = x \\Rightarrow 2^x = 0{,}125^6 \\cdot \\sqrt{64}',
                  },
                  {
                    step: '0{,}125 = 2^{-3}, \\\\ \\sqrt{64} = 2^3 \\\\ 2^x = (2^{-3})^6 \\cdot 2^3',
                  },
                  {
                    step: '2^x = 2^{-18} \\cdot 2^3',
                  },
                  {
                    step: '2^x = 2^{-15}',
                  },
                  {
                    step: 'x = -15',
                  },
                ]}
                solutions={['x = -15']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
