'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1400';
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
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie kwadratowe"
          description="Rozwiąż równanie kwadratowe:"
          equation="x² - 6x + 9 = 0"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Wyznaczmy teraz współczynniki równania kwadratowe. Będzie to potrzebne do wyzaczenia
                delty.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tym równaniu?"
                choices={[
                  { label: 'a = -1, b = 6, c = -9', value: 'a' },
                  { label: 'a = 1, b = 6, c = -9', value: 'b' },
                  { label: 'a = 2, b = -6, c = 9', value: 'c' },
                  { label: 'a = 1, b = -6, c = 9', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Współczynniki dla tego równania to $$a = 1, b = -6, c = 9$$. <br>
                  Równanie kwadratowe w standardowej postaci to $$ax^2 + bx + c = 0$$. <br>
                  Tutaj: $$a = 1$$, $$b = -6$$, $$c = 9$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>Obliczenie wyróżnika równania (Δ).</StepDescription>
              <NumericQuestion
                question="Która wartość jest poprawną deltą (Δ) dla tego równania?"
                correctAnswer="0"
                explanation="Delta ($$Δ$$) obliczana jest ze wzoru:
                  $$\Delta = b^2 - 4ac$$.
                  Podstawiając:
                  $$\Delta = (-6)^2 - 4 \cdot 1 \cdot 9 = 36 - 36 = 0$$.
                  Poprawna wartość to $$\Delta = 0$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Wyznaczenie pierwiastka równania.</StepDescription>
              <ChoiceQuestion
                question="Która wartość jest poprawna dla pierwiastka $$x_0$$?"
                choices={[
                  { label: 'x_0 = -3', value: 'a' },
                  { label: 'x_0 = 3', value: 'b' },
                  { label: 'x_0 = 6', value: 'c' },
                  { label: 'x_0 = 0', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Dla $$\Delta = 0$$ mamy jeden pierwiastek podwójny:
                  $$x_0 = \frac{-b}{2a}$$.
                  Podstawiając:
                  $$x_0 = \frac{6}{2} = 3$$.
                  Poprawny pierwiastek to $$x_0 = 3$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/jedno-miejsce-zerowe.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="x^2 - 6x + 9 = 0"
                steps={[
                  { step: 'a = 1, b = -6, c = 9' },
                  { step: '\\Delta = b^2 - 4ac = (-6)^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0' },
                  { step: 'x_0 = \\frac{-b}{2a} = \\frac{6}{2} = 3' },
                ]}
                solutions={['x_0 = 3']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
