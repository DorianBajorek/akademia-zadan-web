'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const { token } = useAuth();
  const taskId = '306';
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
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_{3\sqrt{3}} 27 \sqrt[3]{3}"
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
                  { label: 'x^{(3\\sqrt{3})} = 27\\sqrt[3]{3}', value: 'a' },
                  { label: '3\\sqrt{3} \\cdot x = 27\\sqrt[3]{3}', value: 'b' },
                  { label: '3\\sqrt{3} = (27\\sqrt[3]{3})^x', value: 'c' },
                  { label: '(3\\sqrt{3})^x = 27\\sqrt[3]{3}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Z definicji logarytmu wiemy, że $$\log_{3\sqrt{3}} 27\sqrt[3]{3} = x$$ oznacza $$(3\sqrt{3})^x = 27\sqrt[3]{3}$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz obie strony równania jako potęgi liczby 3
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '3^{\\frac{x}{2}} = 3^{10}', value: 'a' },
                  { label: '3^{3x} = 3^{\\frac{10}{3}}', value: 'b' },
                  { label: '3^{\\frac{3}{2}} = 3^{\\frac{x}{3}}', value: 'c' },
                  { label: '3^{\\frac{3x}{2}} = 3^{\\frac{10}{3}}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation={`Poprawne przekształcenie to $$3^{\\frac{3x}{2}} = 3^{\\frac{10}{3}}$$. <br>
                Dlaczego? <br>
                $$3\\sqrt{3} = 3^1 \\cdot 3^{\\frac{1}{2}} = 3^{\\frac{3}{2}}$$ <br>
                $$27\\sqrt[3]{3} = 3^3 \\cdot 3^{\\frac{1}{3}} = 3^{\\frac{10}{3}}$$`}
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
                  { label: '\\frac{3x}{2} = \\frac{10}{3}', value: 'a' },
                  { label: 'x = \\frac{10}{3}', value: 'b' },
                  { label: '\\frac{x}{2} = \\frac{10}{3}', value: 'c' },
                  { label: 'x = \\frac{20}{9}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne równanie to $$\frac{3x}{2} = \frac{10}{3}$$. <br>
                Dlaczego? Jeśli $$3^{\frac{3x}{2}} = 3^{\frac{10}{3}}$$, to wykładniki muszą być równe."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Rozwiąż równanie liniowe</StepDescription>
              <ChoiceQuestion
                question="Jaka jest wartość x?"
                choices={[
                  { label: 'x = \\frac{20}{9}', value: 'a' },
                  { label: 'x = \\frac{10}{3}', value: 'b' },
                  { label: 'x = \\frac{9}{20}', value: 'c' },
                  { label: 'x = \\frac{3}{10}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation={`Poprawne rozwiązanie to $$x = \\frac{20}{9}$$. <br>
                Rozwiązujemy równanie $$\\frac{3x}{2} = \\frac{10}{3}$$: <br>
                1. Mnożymy obie strony przez 2: $$3x = \\frac{20}{3}$$ <br>
                2. Dzielimy obie strony przez 3: $$x = \\frac{20}{9}$$`}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_{3\sqrt{3}} 27 \sqrt[3]{3}"
                steps={[
                  {
                    step: '\\log_{3\\sqrt{3}} 27\\sqrt[3]{3} = x \\Rightarrow (3\\sqrt{3})^x = 27\\sqrt[3]{3}',
                  },
                  {
                    step: '3\\sqrt{3} = 3^{\\frac{3}{2}}, \\quad 27\\sqrt[3]{3} = 3^{\\frac{10}{3}}',
                  },
                  {
                    step: '3^{\\frac{3x}{2}} = 3^{\\frac{10}{3}}',
                  },
                  {
                    step: '\\frac{3x}{2} = \\frac{10}{3}',
                  },
                  {
                    step: 'x = \\frac{20}{9}',
                  },
                ]}
                solutions={['x = \\frac{20}{9}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
