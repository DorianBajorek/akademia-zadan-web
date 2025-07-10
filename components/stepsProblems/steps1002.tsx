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
          title="Potęgowanie i pierwiastki"
          description="Oblicz wartość wyrażenia:"
          equation="\left(\frac{1}{2}\right)^{-3} + \sqrt[3]{27}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oblicz pierwszą część wyrażenia - potęgowanie
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\left(\frac{1}{2}\right)^{-3}$$?"
                choices={[
                  { label: '\\frac{1}{8}', value: 'a' },
                  { label: '8', value: 'b' },
                  { label: '-\\frac{3}{2}', value: 'c' },
                  { label: '\\frac{3}{2}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Podnosząc ułamek do potęgi ujemnej, odwracamy go i podnosimy do potęgi dodatniej: <br>
                $$\left(\frac{1}{2}\right)^{-3} = \left(\frac{2}{1}\right)^{3} = 2^3 = 8$$"
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz drugą część wyrażenia - pierwiastek sześcienny
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\sqrt[3]{27}$$?"
                choices={[
                  { label: '9', value: 'a' },
                  { label: '3', value: 'b' },
                  { label: '81', value: 'c' },
                  { label: '\\sqrt{27}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Pierwiastek sześcienny z 27 to liczba, która podniesiona do potęgi trzeciej daje 27: <br>
                $$3^3 = 27$$, więc $$\sqrt[3]{27} = 3$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Dodaj obie części wyrażenia</StepDescription>
              <ChoiceQuestion
                question="Jaki jest wynik końcowy wyrażenia $$8 + 3$$?"
                choices={[
                  { label: '11', value: 'a' },
                  { label: '5', value: 'b' },
                  { label: '24', value: 'c' },
                  { label: '\\frac{11}{1}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Po obliczeniu obu części wyrażenia wystarczy je dodać: <br>
                $$8 + 3 = 11$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\left(\frac{1}{2}\right)^{-3} + \sqrt[3]{27}"
                steps={[
                  { step: '\\left(\\frac{1}{2}\\right)^{-3} = 8' },
                  { step: '\\sqrt[3]{27} = 3' },
                  { step: '8 + 3 = 11' },
                ]}
                solutions={['11']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
