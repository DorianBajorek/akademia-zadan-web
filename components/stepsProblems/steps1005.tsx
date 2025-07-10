'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1005';
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
          title="Wartość bezwzględna"
          description="Oblicz wartość wyrażenia:"
          equation="2|\sqrt{2} - 1| - 3|\sqrt{2} - 3|"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Oszacuj wartość pierwiastków</StepDescription>
              <ChoiceQuestion
                question="Ile wynosi w przybliżeniu $$\sqrt{2}$$?"
                choices={[
                  { label: '\\sqrt{2} \\approx 1,20', value: 'a' },
                  { label: '\\sqrt{2} \\approx 1,50', value: 'b' },
                  { label: '\\sqrt{2} \\approx 1,41', value: 'c' },
                  { label: '\\sqrt{2} \\approx 1,30', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="$$\sqrt{2} ≈ 1.414$$."
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz wartości wyrażeń pod wartościami bezwzględnymi
              </StepDescription>
              <ChoiceQuestion
                question="Jakie są wartości $$\sqrt{2} - 1$$ i $$\sqrt{2} - 3$$?"
                choices={[
                  {
                    label: '\\sqrt{2} - 1 \\approx 0,50 \\text{ i } \\sqrt{2} - 3 \\approx -1,50',
                    value: 'a',
                  },
                  {
                    label: '\\sqrt{2} - 1 \\approx 0,30 \\text{ i } \\sqrt{2} - 3 \\approx -1,70',
                    value: 'b',
                  },
                  {
                    label: '\\sqrt{2} - 1 \\approx 0,20 \\text{ i } \\sqrt{2} - 3 \\approx -1,80',
                    value: 'c',
                  },
                  {
                    label: '\\sqrt{2} - 1 \\approx 0,41 \\text{ i } \\sqrt{2} - 3 \\approx -1,59',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="$$\sqrt{2} - 1 ≈ 1.414 - 1 = 0.414$$ i $$\sqrt{2} - 3 ≈ 1.414 - 3 = -1.586$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Oblicz wartości bezwzględne</StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać wartość wyrażenia $$2|\sqrt{2} - 1| - 3|\sqrt{2} - 3|$$?"
                choices={[
                  { label: '2(\\sqrt{2} - 1) - 3(-\\sqrt{2} + 3)', value: 'a' },
                  { label: '2(\\sqrt{2} - 1) - 3(\\sqrt{2} - 3)', value: 'b' },
                  { label: '2(-\\sqrt{2} + 1) - 3(-\\sqrt{2} + 3)', value: 'c' },
                  { label: '2(-\\sqrt{2} + 1) - 3(\\sqrt{2} - 3)', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="
                1. $$|\sqrt{2} - 1| = \sqrt{2} - 1$$ (wyrażenie dodatnie) <br>
                2. $$|\sqrt{2} - 3| = -(\sqrt{2} - 3)$$ (wyrażenie ujemne) <br>
                Ostatecznie: $$2(\sqrt{2} - 1) - 3(-(\sqrt{2} - 3))$$
                "
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Uprość otrzymane wyrażenie</StepDescription>
              <ChoiceQuestion
                question="Jak wygląda ostateczna postać uproszczona?"
                choices={[
                  { label: '2\\sqrt{2} - 5', value: 'a' },
                  { label: '2\\sqrt{2} - 1', value: 'b' },
                  { label: '1 - 2\\sqrt{2}', value: 'c' },
                  { label: '5 - 2\\sqrt{2}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation={`$$2(\\sqrt{2} - 1) - 3(-\\sqrt{2} + 3) = 2\\sqrt{2} - 2 + 3\\sqrt{2} - 9 = 5 - 2\\sqrt{2}$$`}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="2|\sqrt{2} - 1| - 3|\sqrt{2} - 3|"
                steps={[
                  {
                    step: '2|\\sqrt{2} - 1| - 3|\\sqrt{2} - 3| = 2(\\sqrt{2} - 1) - 3(-\\sqrt{2} + 3) = 2\\sqrt{2} - 2 + 3\\sqrt{2} - 9 = 5 - 2\\sqrt{2}',
                  },
                ]}
                solutions={['5 - 2\\sqrt{2}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
