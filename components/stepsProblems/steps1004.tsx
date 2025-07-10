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
  const taskId = '1004';
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
          equation="|5 - \sqrt{7}| + |\sqrt{5} - 2|"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Oszacuj wartość pierwiastków</StepDescription>
              <ChoiceQuestion
                question="Ile wynosi w przybliżeniu $$\sqrt{5}$$ i $$\sqrt{7}$$?"
                choices={[
                  {
                    label: '\\sqrt{5} \\approx 2,00 \\text{ i } \\sqrt{7} \\approx 2,50',
                    value: 'a',
                  },
                  {
                    label: '\\sqrt{5} \\approx 2,24 \\text{ i } \\sqrt{7} \\approx 2,80',
                    value: 'b',
                  },
                  {
                    label: '\\sqrt{5} \\approx 2,24 \\text{ i } \\sqrt{7} \\approx 2,65',
                    value: 'c',
                  },
                  {
                    label: '\\sqrt{5} \\approx 2,50 \\text{ i } \\sqrt{7} \\approx 2,65',
                    value: 'd',
                  },
                ]}
                correctAnswer="c"
                explanation="$$\sqrt{5} ≈ 2.236$$ i $$\sqrt{7} ≈ 2.645$$, więc najbardziej precyzyjne przybliżenie to $$2,24$$ i $$2,65$$."
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
                question="Jakie są wartości $$5 - \sqrt{7}$$ i $$\sqrt{5} - 2$$?"
                choices={[
                  {
                    label: '5 - \\sqrt{7} \\approx 2,35 \\text{ i } \\sqrt{5} - 2 \\approx 0,24',
                    value: 'a',
                  },
                  {
                    label: '5 - \\sqrt{7} \\approx 2,50 \\text{ i } \\sqrt{5} - 2 \\approx 0,50',
                    value: 'b',
                  },
                  {
                    label: '5 - \\sqrt{7} \\approx 2,35 \\text{ i } \\sqrt{5} - 2 \\approx 0,50',
                    value: 'c',
                  },
                  {
                    label: '5 - \\sqrt{7} \\approx 2,00 \\text{ i } \\sqrt{5} - 2 \\approx 0,24',
                    value: 'd',
                  },
                ]}
                correctAnswer="a"
                explanation="$$5 - \sqrt{7} ≈ 5 - 2.645 = 2.355$$ i $$\sqrt{5} - 2 ≈ 2.236 - 2 = 0.236$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Oblicz wartości bezwzględne</StepDescription>
              <ChoiceQuestion
                question="Jak można zapisać wartość wyrażenia $$|5 - \sqrt{7}| + |\sqrt{5} - 2|$$?"
                choices={[
                  { label: '(5 - \\sqrt{7}) + (\\sqrt{5} - 2)', value: 'a' },
                  { label: '(5 - \\sqrt{7}) - (\\sqrt{5} - 2)', value: 'b' },
                  { label: '-(5 - \\sqrt{7}) + (\\sqrt{5} - 2)', value: 'c' },
                  { label: '(\\sqrt{7} - 5) + (2 - \\sqrt{5})', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="
                1. $$|5 - \sqrt{7}| = 5 - \sqrt{7}$$ (wyrażenie dodatnie, więc moduł nie zmienia znaku) <br>
                2. $$|\sqrt{5} - 2| = \sqrt{5} - 2$$ (wyrażenie dodatnie, więc moduł nie zmienia znaku) <br>
                Ostatecznie: $$(5 - \sqrt{7}) + (\sqrt{5} - 2)$$
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
                  { label: '3 + \\sqrt{5} - \\sqrt{7}', value: 'a' },
                  { label: '3 - \\sqrt{5} + \\sqrt{7}', value: 'b' },
                  { label: '3 + \\sqrt{7} - \\sqrt{5}', value: 'c' },
                  { label: '3 - \\sqrt{7} - \\sqrt{5}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation={`$$(5 - \\sqrt{7}) + (\\sqrt{5} - 2) = 3 + \\sqrt{5} - \\sqrt{7}$$`}
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="|5 - \sqrt{7}| + |\sqrt{5} - 2|"
                steps={[
                  {
                    step: '|5 - \\sqrt{7}| + |\\sqrt{5} - 2| = (5 - \\sqrt{7}) + (\\sqrt{5} - 2) = 3 + \\sqrt{5} - \\sqrt{7}',
                  },
                ]}
                solutions={['3 + \\sqrt{5} - \\sqrt{7}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
