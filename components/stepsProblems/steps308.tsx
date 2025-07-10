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
  const taskId = '308';
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
          equation="\log_{\sqrt{3\sqrt{3}}}{\sqrt[4]{3}\cdot\sqrt[3]{3}}"
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
                  {
                    label: 'x^{(\\sqrt{3\\sqrt{3}})} = \\sqrt[4]{3} \\cdot \\sqrt[3]{3}',
                    value: 'a',
                  },
                  {
                    label: '\\sqrt{3\\sqrt{3}} \\cdot x = \\sqrt[4]{3} \\cdot \\sqrt[3]{3}',
                    value: 'b',
                  },
                  {
                    label: '(\\sqrt{3\\sqrt{3}})^x = \\sqrt[4]{3} \\cdot \\sqrt[3]{3}',
                    value: 'c',
                  },
                  {
                    label: '\\sqrt{3\\sqrt{3}} = (\\sqrt[4]{3} \\cdot \\sqrt[3]{3})^x',
                    value: 'd',
                  },
                ]}
                correctAnswer="c"
                explanation="Z definicji logarytmu wiemy, że $$\log_{\sqrt{3\sqrt{3}}}{\sqrt[4]{3}\cdot\sqrt[3]{3}} = x$$ oznacza $$(\sqrt{3\sqrt{3}})^x = \sqrt[4]{3} \cdot \sqrt[3]{3}$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przekształć podstawę i argument logarytmu do potęg liczby 3:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '3^{\\frac{x}{4}} = 3^{\\frac{7}{12}}', value: 'a' },
                  { label: '3^{\\frac{x}{2}} = 3^{\\frac{7}{12}}', value: 'b' },
                  { label: '3^{\\frac{3x}{4}} = 3^{\\frac{7}{12}}', value: 'c' },
                  { label: '3^{\\frac{4x}{3}} = 3^{\\frac{7}{12}}', value: 'd' },
                ]}
                correctAnswer="c"
                explanation={`Poprawne przekształcenie to $$3^{\\frac{3x}{4}} = 3^{\\frac{7}{12}}$$. <br>
                Dlaczego? <br>
                - Podstawa: $$\\sqrt{3\\sqrt{3}} = (3 \\cdot 3^{\\frac{1}{2}})^{\\frac{1}{2}} = 3^{\\frac{3}{4}}$$ <br>
                - Argument: $$\\sqrt[4]{3} \\cdot \\sqrt[3]{3} = 3^{\\frac{1}{4}} \\cdot 3^{\\frac{1}{3}} = 3^{\\frac{7}{12}}$$`}
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Porównaj wykładniki:</StepDescription>
              <ChoiceQuestion
                question="Które równanie wynika z porównania wykładników?"
                choices={[
                  { label: '\\frac{3x}{4} = \\frac{7}{12}', value: 'a' },
                  { label: 'x = \\frac{7}{12}', value: 'b' },
                  { label: '\\frac{x}{4} = \\frac{7}{12}', value: 'c' },
                  { label: 'x = \\frac{7}{9}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne równanie to $$\frac{3x}{4} = \frac{7}{12}$$. <br>
                Dlaczego? Jeśli $$3^{\frac{3x}{4}} = 3^{\frac{7}{12}}$$, to wykładniki muszą być równe."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Oblicz wartość x:</StepDescription>
              <NumericQuestion
                question="Jaka jest wartość x? (Podaj w formie ułamka a/b)"
                correctAnswer="7/9"
                explanation={`Poprawne rozwiązanie to $$x = \\frac{7}{9}$$. <br>
                Rozwiązujemy równanie: <br>
                1. $$\\frac{3x}{4} = \\frac{7}{12}$$ <br>
                2. Mnożymy obie strony przez 4: $$3x = \\frac{28}{12}$$ <br>
                3. Dzielimy obie strony przez 3: $$x = \\frac{28}{36} = \\frac{7}{9}$$`}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_{\sqrt{3\sqrt{3}}} (\sqrt[4]{3} \cdot \sqrt[3]{3})"
                steps={[
                  {
                    step: '\\log_{\\sqrt{3\\sqrt{3}}} (\\sqrt[4]{3} \\cdot \\sqrt[3]{3}) = x \\Rightarrow (\\sqrt{3\\sqrt{3}})^x = \\sqrt[4]{3} \\cdot \\sqrt[3]{3}',
                  },
                  {
                    step: '\\sqrt{3\\sqrt{3}} = 3^{\\frac{3}{4}} \\text{ (podstawa logarytmu)}',
                  },
                  {
                    step: '\\sqrt[4]{3} \\cdot \\sqrt[3]{3} = 3^{\\frac{7}{12}} \\text{ (liczba logarytmowana)}',
                  },
                  {
                    step: '3^{\\frac{3x}{4}} = 3^{\\frac{7}{12}}',
                  },
                  {
                    step: '\\frac{3x}{4} = \\frac{7}{12} / \\cdot 12',
                  },
                  {
                    step: '9x = 7',
                  },
                  {
                    step: 'x = \\frac{7}{9}',
                  },
                ]}
                solutions={['x = \\frac{7}{9}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
