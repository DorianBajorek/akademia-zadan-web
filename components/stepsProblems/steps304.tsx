'use client';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_{\sqrt{2}} (2\sqrt{2})"
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
                  { label: 'x^{(\\sqrt{2})} = 2\\sqrt{2}', value: 'a' },
                  { label: '(\\sqrt{2})^x = 2\\sqrt{2}', value: 'b' },
                  { label: '\\sqrt{2} \\cdot x = 2\\sqrt{2}', value: 'c' },
                  { label: '\\sqrt{2} = (2\\sqrt{2})^x', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Z definicji logarytmu wiemy, że $$\log_{\sqrt{2}} (2\sqrt{2}) = x$$ oznacza $$(\sqrt{2})^x = 2\sqrt{2}$$."
                onComplete={() => handleStageComplete(1)}
                img={'/steps-images/definicjaLogarytmu.png'}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zapisz obie strony równania jako potęgi liczby 2
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '2^{\\frac{x}{2}} = 2^{\\frac{3}{2}}', value: 'a' },
                  { label: '2^{\\frac{x}{2}} = 2^1', value: 'b' },
                  { label: '2^{x} = 2^{3}', value: 'c' },
                  { label: '2^{\\frac{1}{2}} = 2^{\\frac{x}{2}}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation={`Poprawne przekształcenie to $$2^{\\frac{x}{2}} = 2^{\\frac{3}{2}}$$. <br>
                Dlaczego? <br>
                $$\\sqrt{2} = 2^{\\frac{1}{2}}$$, więc $$(2^{\\frac{1}{2}})^x = 2^{\\frac{x}{2}}$$ <br>
                A $$2\\sqrt{2} = 2^1 \\cdot 2^{\\frac{1}{2}} = 2^{\\frac{3}{2}}$$.`}
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
                  { label: '\\frac{x}{2} = 1', value: 'b' },
                  { label: 'x = \\frac{1}{2}', value: 'c' },
                  { label: '\\frac{x}{2} = \\frac{3}{2}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Poprawne równanie to $$\frac{x}{2} = \frac{3}{2}$$. <br>
                Jeśli $$2^{\frac{x}{2}} = 2^{\frac{3}{2}}$$, to ich wykładniki muszą być równe."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Rozwiąż równanie liniowe</StepDescription>
              <NumericQuestion
                question="Jaka jest wartość x?"
                correctAnswer="3"
                explanation={`Poprawne rozwiązanie to $$x = 3$$. <br>
                Rozwiązujemy równanie $$\\frac{x}{2} = \\frac{3}{2}$$: <br>
                Mnożymy obie strony przez 2: $$x = 3$$.`}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_{\sqrt{2}} (2\sqrt{2})"
                steps={[
                  {
                    step: '\\log_{\\sqrt{2}} (2\\sqrt{2}) = x \\Rightarrow (\\sqrt{2})^x = 2\\sqrt{2}',
                  },
                  {
                    step: '\\sqrt{2} = 2^{\\frac{1}{2}} \\text{ i } 2\\sqrt{2} = 2^{\\frac{3}{2}}',
                  },
                  {
                    step: '(2^{\\frac{1}{2}})^x = 2^{\\frac{3}{2}}',
                  },
                  {
                    step: '2^{\\frac{x}{2}} = 2^{\\frac{3}{2}} ',
                  },
                  {
                    step: '\\frac{x}{2} = \\frac{3}{2}',
                  },
                  {
                    step: 'x = 3',
                  },
                ]}
                solutions={['x = 3']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
