'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
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
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="\left(\frac{27}{343}\right)^{-0.(3)}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Zamiana okresu <InlineMath math="0.(3)" /> na ułamek:
              </StepDescription>
              <ChoiceQuestion
                question="Jak zapisać $$0.(3)$$ jako ułamek zwykły?"
                choices={[
                  { label: '\\frac{1}{2}', value: 'a' },
                  { label: '\\frac{1}{3}', value: 'b' },
                  { label: '\\frac{1}{4}', value: 'c' },
                  { label: '\\frac{1}{5}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawna zamiana: $$0.(3) = \frac{1}{3} $$. Każdy maturzysta powinien to po prostu pamiętać. Takie coś można wyprowadzić w następujacy sposób: <br>
                $$x = 0.(3)$$ <br>
                $$x = 0.3333...   / \cdot10$$ <br>
                $$10x = 3.3333... $$. Odejmujemy teraz dwie dolne linijki i otrzymujemy <br>
                $$10x - x = 3$$ <br>
                $$9x = 3$$  Dzielimy i skracamy <br>
                $$x = \frac{1}{3}$$
                "
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Odwrócenie ułamka dzięki ujemnemu wykładnikowi:
              </StepDescription>
              <ChoiceQuestion
                question="Jak przekształcić wyrażenie $$\left(\frac{27}{343}\right)^{-\frac{1}{3}}$$, korzystając z minusa w wykładniku?"
                choices={[
                  { label: '\\left(\\frac{27}{343}\\right)^{\\frac{1}{3}}', value: 'a' },
                  { label: '\\left(\\frac{343}{27}\\right)^{\\frac{1}{3}}', value: 'b' },
                  { label: '\\left(\\frac{27}{343}\\right)^{-3}', value: 'c' },
                  { label: '\\left(\\frac{343}{27}\\right)^{-3}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenie: $$\left(\frac{27}{343}\right)^{-\frac{1}{3}} = \left(\frac{343}{27}\right)^{\frac{1}{3}}$$. Minus powoduje zamianę miejscami licznika i mianownika ułamka."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/ujemnyWykladnik.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Zamiana potęgi <InlineMath math="\frac{1}{3}" /> na pierwiastek trzeciego stopnia:
              </StepDescription>
              <ChoiceQuestion
                question="Jak zapisać wyrażenie $$\left(\frac{343}{27}\right)^{\frac{1}{3}}$$ za pomocą pierwiastka?"
                choices={[
                  { label: '\\sqrt{\\frac{343}{27}}', value: 'a' },
                  { label: '\\sqrt[3]{\\frac{343}{27}}', value: 'b' },
                  { label: '\\sqrt[4]{\\frac{343}{27}}', value: 'c' },
                  { label: '\\sqrt[5]{\\frac{343}{27}}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawna zamiana: $$\left(\frac{343}{27}\right)^{\frac{1}{3}} = \sqrt[3]{\frac{343}{27}}$$. Jaki mianownik, taki stopień pierwiastka."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/pierwiastekPotega.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Obliczenie pierwiastka trzeciego stopnia:
              </StepDescription>
              <ChoiceQuestion
                question="Jak obliczyć $$\sqrt[3]{\frac{343}{27}}$$?"
                choices={[
                  { label: '\\frac{7}{3}', value: 'a' },
                  { label: '\\frac{9}{4}', value: 'b' },
                  { label: '\\frac{5}{2}', value: 'c' },
                  { label: '\\frac{8}{3}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne obliczenie: $$\sqrt[3]{\frac{343}{27}} = \frac{\sqrt[3]{343}}{\sqrt[3]{27}} = \frac{7}{3}$$."
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\left(\frac{27}{343}\right)^{-0.(3)}"
                steps={[
                  {
                    step: '0.(3) = \\frac{1}{3}',
                  },
                  {
                    step: '\\left(\\frac{27}{343}\\right)^{-\\frac{1}{3}} = \\left(\\frac{343}{27}\\right)^{\\frac{1}{3}} = \\sqrt[3]{\\frac{343}{27}} = \\frac{7}{3}',
                  },
                ]}
                solutions={['\\frac{7}{3}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
