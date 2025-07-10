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
          title="Dodawanie logarytmów"
          description="Oblicz wartość wyrażenia:"
          equation="\log_3{3} + \log_3{27}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Skorzystaj z własności logarytmów</StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać sumę logarytmów o tej samej podstawie?"
                choices={[
                  { label: '\\log_3{(3 + 27)}', value: 'a' },
                  { label: '\\log_3{(3 \\cdot 27)}', value: 'b' },
                  { label: '(\\log_3{3}) \\cdot (\\log_3{27})', value: 'c' },
                  { label: '\\log_3{(27 - 3)}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Z własności logarytmów wiemy, że $$\log_a{b} + \log_a{c} = \log_a{(b \cdot c)}$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/dzialania-na-logarytmach.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>Oblicz iloczyn argumentów logarytmów</StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$3 \cdot 27$$?"
                choices={[
                  { label: '81', value: 'a' },
                  { label: '30', value: 'b' },
                  { label: '24', value: 'c' },
                  { label: '9', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="$$3 \cdot 27 = 81$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Oblicz wartość logarytmu</StepDescription>
              <ChoiceQuestion
                question="Ile wynosi $$\log_3{81}$$?"
                choices={[
                  { label: '27', value: 'a' },
                  { label: '3', value: 'b' },
                  { label: '4', value: 'c' },
                  { label: '9', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Ponieważ $$3^4 = 81$$, więc $$\log_3{81} = 4$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/definicjaLogarytmu.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="\log_3{3} + \log_3{27}"
                steps={[
                  {
                    step: '\\log_3{3} + \\log_3{27} = \\log_3{(3 \\cdot 27)} = \\log_3{81}',
                  },
                  {
                    step: '3^4 = 81 \\text{, więc } \\log_3{81} = 4',
                  },
                ]}
                solutions={['4']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
