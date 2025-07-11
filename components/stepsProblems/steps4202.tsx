'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '4202';
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
          title="Pole trójkąta równobocznego w układzie współrzędnych"
          description="W kartezjańskim układzie współrzędnych $$(x, y)$$ punkty $$K = (-7, -2)$$ oraz $$L = (-1, 4)$$ są wierzchołkami trójkąta równobocznego $$KLM$$. Pole trójkąta $$KLM$$ jest równe:"
          equation=""
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oblicz długość boku KL na podstawie współrzędnych punktów.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest długość boku $$KL$$?"
                choices={[
                  { label: '6', value: 'a' },
                  { label: '8', value: 'b' },
                  { label: '12', value: 'c' },
                  { label: '6\\sqrt{2}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation={
                  'Obliczamy odległość między K i L:<br/>' +
                  '$$KL = \\sqrt{(-1 - (-7))^2 + (4 - (-2))^2} = \\sqrt{6^2 + 6^2} = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}$$'
                }
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przypomnij wzór na pole trójkąta równobocznego.
              </StepDescription>
              <ChoiceQuestion
                question="Jakim wzorem obliczamy pole trójkąta równobocznego o boku $$a$$?"
                choices={[
                  { label: '\\frac{a^2}{4}', value: 'a' },
                  { label: '\\frac{a^2 \\sqrt{3}}{4}', value: 'b' },
                  { label: '\\frac{a^2 \\sqrt{2}}{2}', value: 'c' },
                  { label: '\\frac{a^2 \\sqrt{2}}{4}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation={
                  'Pole trójkąta równobocznego to $$P = \\frac{a^2 \\sqrt{3}}{4}$$, gdzie $$a$$ to długość boku.'
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz pole trójkąta na podstawie znanej długości boku.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie jest pole trójkąta o boku $$6\sqrt{2}$$?"
                choices={[
                  { label: '17\\sqrt{2}', value: 'a' },
                  { label: '17\\sqrt{3}', value: 'b' },
                  { label: '18\\sqrt{2}', value: 'c' },
                  { label: '18\\sqrt{3}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation={
                  '$$P = \\frac{(6\\sqrt{2})^2 \\sqrt{3}}{4} = \\frac{72 \\sqrt{3}}{4} = 18\\sqrt{3}$$'
                }
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="P = \frac{a^2 \sqrt{3}}{4}"
                steps={[
                  { step: 'KL = \\sqrt{(-1+7)^2 + (4+2)^2} = 6\\sqrt{2}' },
                  { step: 'P = \\frac{(6\\sqrt{2})^2 \\sqrt{3}}{4} = 18\\sqrt{3}' },
                ]}
                solutions={['\\text{Pole: } 18\\sqrt{3}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
