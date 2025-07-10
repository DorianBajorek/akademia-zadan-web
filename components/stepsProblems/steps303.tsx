'use client';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie logarytmiczne"
          description="Oblicz wartość logarytmu:"
          equation="\log_{\frac{1}{\sqrt{3}}} 1"
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
                  { label: 'x^{\\frac{1}{\\sqrt{3}}} = 1', value: 'a' },
                  { label: '\\left(\\frac{1}{\\sqrt{3}}\\right)^x = 1', value: 'b' },
                  { label: '\\frac{1}{\\sqrt{3}} \\cdot x = 1', value: 'c' },
                  { label: '\\frac{1}{\\sqrt{3}} = 1^x', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Z definicji logarytmu wiemy, że $$\log_{\frac{1}{\sqrt{3}}} 1 = x$$ oznacza $$\left(\frac{1}{\sqrt{3}}\right)^x = 1$$."
                onComplete={() => handleStageComplete(1)}
                img={'/steps-images/definicjaLogarytmu.png'}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                W tym przypadku mamy do czynienia z równaniem, które możemy rozwiązać poprzez
                zastosowanie własności potęg. Pamiętaj, że każda liczba różna od zera podniesiona do
                potęgi 0 daje 1. Obliczamy x.
              </StepDescription>
              <ChoiceQuestion
                question="Dla jakiego x równanie jest spełnione?"
                choices={[
                  { label: 'x = 0', value: 'a' },
                  { label: 'x = 1', value: 'b' },
                  { label: 'x = \\frac{1}{2}', value: 'c' },
                  { label: 'x = -\\frac{1}{2}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne rozwiązanie to $$x = 0$$. <br>
                Dlaczego? <br>
                Każda liczba różna od zera podniesiona do potęgi 0 daje 1: <br>
                $$\left(\frac{1}{\sqrt{3}}\right)^0 = 1$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.length === 2 && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_{\frac{1}{\sqrt{3}}} 1"
                steps={[
                  {
                    step: '\\log_{\\frac{1}{\\sqrt{3}}} 1 = x \\Rightarrow \\left(\\frac{1}{\\sqrt{3}}\\right)^x = 1',
                  },
                  {
                    step: 'a^0 = 1 \\text{ dla każdego } a \\neq 0',
                  },
                  {
                    step: 'x = 0',
                  },
                ]}
                solutions={['x = 0']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
