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
  const taskId = '1003';
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
          equation="|\sqrt{2} + 2| - |\sqrt{3} - 3|"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Oszacuj wartość pierwiastków</StepDescription>
              <ChoiceQuestion
                question="Ile wynosi w przybliżeniu $$\sqrt{2}$$ i $$\sqrt{3}$$?"
                choices={[
                  {
                    label: '\\sqrt{2} \\approx 1,73 \\text{ i } \\sqrt{3} \\approx 2,00',
                    value: 'a',
                  },
                  {
                    label: '\\sqrt{2} \\approx 1,41 \\text{ i } \\sqrt{3} \\approx 1,87',
                    value: 'b',
                  },
                  {
                    label: '\\sqrt{2} \\approx 1,50 \\text{ i } \\sqrt{3} \\approx 1,73',
                    value: 'c',
                  },
                  {
                    label: '\\sqrt{2} \\approx 1,41 \\text{ i } \\sqrt{3} \\approx 1,73',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="$$\sqrt{2} ≈ 1.414$$ i $$\sqrt{3} ≈ 1.732$$, więc najbardziej precyzyjne przybliżenie to $$1,41$$ i $$1,73$$."
                onComplete={() => handleStageComplete(1)}
                img={'/steps-images/wartosc_pierwiastka2_3.png'}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz wartości wyrażeń pod wartościami bezwzględnymi
              </StepDescription>
              <ChoiceQuestion
                question="Jakie są wartości $$\sqrt{2} + 2$$ i $$\sqrt{3} - 3$$?"
                choices={[
                  {
                    label: '\\sqrt{2} + 2 \\approx 3,00 \\text{ i } \\sqrt{3} - 3 \\approx -1,00',
                    value: 'a',
                  },
                  {
                    label: '\\sqrt{2} + 2 \\approx 3,41 \\text{ i } \\sqrt{3} - 3 \\approx -1,00',
                    value: 'b',
                  },
                  {
                    label: '\\sqrt{2} + 2 \\approx 3,41 \\text{ i } \\sqrt{3} - 3 \\approx -1,27',
                    value: 'c',
                  },
                  {
                    label: '\\sqrt{2} + 2 \\approx 3,50 \\text{ i } \\sqrt{3} - 3 \\approx -1,27',
                    value: 'd',
                  },
                ]}
                correctAnswer="c"
                explanation="$$\sqrt{2} + 2 ≈ 1.41 + 2 = 3.41$$ i $$\sqrt{3} - 3 ≈ 1.73 - 3 = -1.27$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Oblicz wartości bezwzględne</StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać wartość wyrażenia $$|\sqrt{2} + 2| - |\sqrt{3} - 3|$$?"
                choices={[
                  { label: '(\\sqrt{2} + 2) - (3 - \\sqrt{3})', value: 'a' },
                  { label: '(\\sqrt{2} + 2) + (\\sqrt{3} - 3)', value: 'b' },
                  { label: '-(\\sqrt{2} + 2) - (3 - \\sqrt{3})', value: 'c' },
                  { label: '(\\sqrt{2} - 2) - (3 + \\sqrt{3})', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="
                1. $$|\sqrt{2} + 2| = \sqrt{2} + 2$$ (wyrażenie dodatnie, więc moduł nie zmienia znaku) <br>
                2. $$|\sqrt{3} - 3| = 3 - \sqrt{3}$$ (wyrażenie ujemne, więc moduł zmienia znak) <br>
                Ostatecznie: $$(\sqrt{2} + 2) - (3 - \sqrt{3})$$
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
                  { label: '\\sqrt{2} + \\sqrt{3} - 1', value: 'a' },
                  { label: '\\sqrt{2} - \\sqrt{3} + 5', value: 'b' },
                  { label: '\\sqrt{2} + \\sqrt{3} + 5', value: 'c' },
                  { label: '-\\sqrt{2} - \\sqrt{3} - 1', value: 'd' },
                ]}
                correctAnswer="a"
                explanation={`
                  $$(\\sqrt{2} + 2) - (3 - \\sqrt{3}) = \\sqrt{2} + 2 - 3 + \\sqrt{3} = \\sqrt{2} + \\sqrt{3} - 1$$
                `}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="|\sqrt{2} + 2| - |\sqrt{3} - 3|"
                steps={[
                  {
                    step: '|\\sqrt{2} + 2| - |\\sqrt{3} - 3| = (\\sqrt{2} + 2) - (3 - \\sqrt{3}) = \\sqrt{2} + \\sqrt{3} - 1',
                  },
                ]}
                solutions={['\\sqrt{2} + \\sqrt{3} - 1']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
