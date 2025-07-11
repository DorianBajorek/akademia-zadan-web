'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '4200';
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
          title="Przekątna kwadratu w układzie współrzędnych"
          description="W kartezjańskim układzie współrzędnych $$(x, y)$$ dany jest kwadrat $$ABCD$$, w którym $$A = (4, -1)$$. Przekątne tego kwadratu przecinają się w punkcie $$S = (1, 3)$$. Przekątna kwadratu $$ABCD$$ ma długość:"
          equation=""
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oblicz odległość między punktem A a środkiem kwadratu S.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest odległość między punktem $$A = (4, -1)$$ a $$S = (1, 3)$$?"
                choices={[
                  { label: '5', value: 'a' },
                  { label: '7', value: 'b' },
                  { label: '10', value: 'c' },
                  { label: '4', value: 'd' },
                ]}
                correctAnswer="a"
                explanation={
                  'Odległość obliczamy ze wzoru:<br/>' +
                  '$$AS = \\sqrt{(4-1)^2 + ((-1)-3)^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$'
                }
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określ relację między odcinkiem AS a przekątną kwadratu.
              </StepDescription>
              <ChoiceQuestion
                question="Jaką częścią przekątnej kwadratu jest odcinek $$AS$$?"
                choices={[
                  { label: '\\text{Całą przekątną}', value: 'a' },
                  { label: '\\text{Połową przekątnej}', value: 'b' },
                  { label: '\\text{Jedną trzecią przekątnej}', value: 'c' },
                  { label: '\\text{Jedną czwartą przekątnej}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation={
                  'Punkt $$S$$ jest środkiem kwadratu, więc $$AS$$ to połowa przekątnej kwadratu.'
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz długość całej przekątnej kwadratu.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest długość całej przekątnej kwadratu?"
                choices={[
                  { label: '5', value: 'a' },
                  { label: '7', value: 'b' },
                  { label: '10', value: 'c' },
                  { label: '14', value: 'd' },
                ]}
                correctAnswer="c"
                explanation={
                  'Jeśli $$AS = 5$$, a jest to połowa przekątnej, to przekątna ma długość $$2 \\cdot 5 = 10$$.'
                }
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="AS = \sqrt{(4-1)^2 + ((-1)-3)^2} = 5"
                steps={[
                  { step: '\\text{Odległość między } A \\text{ i } S: AS = 5' },
                  {
                    step: 'S \\text{ to środek przekątnej } \\to AS = \\frac{1}{2} \\text{ przekątnej}',
                  },
                  { step: '\\text{Przekątna: } 2 \\cdot 5 = 10' },
                ]}
                solutions={['\\text{Długość przekątnej kwadratu: } 10']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
