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
          title="Wyznaczanie współczynnika q"
          description="Dana jest funkcja w postaci kanonicznej $$f(x) = -(x - 3)² + q$$ oraz punkt $$A=(-1,-4)$$, który należący do jej wykresu. Wyznacz współczynnik q. "
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Podstawienie punktu do wzoru funkcji.
              </StepDescription>
              <ChoiceQuestion
                question="Podstawiamy współrzędne punktu $$A=(-1,-4)$$ do wzoru funkcji otrzymamy: "
                choices={[
                  { label: '4', value: 'a' },
                  { label: '12', value: 'b' },
                  { label: '16', value: 'c' },
                  { label: '-16', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawna odpowiedź to $$12$$, ponieważ <br>
                $$-4 = -(-1-3)^2 + q$$ <br>
                $$-4 = -16 + q$$ <br>
                $$12 = q$$"
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}
          {completedStages.length === 1 && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = -(x - 3)^2 + q,\; A = (-1, -4)"
                steps={[
                  { step: '-((-1) - 3)^2 + q = -4' },
                  { step: '-16 + q = -4' },
                  { step: 'q = 12' },
                ]}
                solutions={['q = 12']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
