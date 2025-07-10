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
  const taskId = '1404';
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
          equation="x² - 2x - 1 = 0"
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
                  { label: 'a = -1, b = -2, c = 1', value: 'a' },
                  { label: 'a = 1, b = 2, c = -1', value: 'b' },
                  { label: 'a = 1, b = -2, c = -1', value: 'c' },
                  { label: 'a = 1, b = -2, c = 1', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Współczynniki dla tego równania to $$a = 1, b = -2, c = -1$$. 
                  Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                  W przypadku równania $$x^2 - 2x - 1 = 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                  $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                  $$b$$ to współczynnik przy $$x$$, czyli $$-2$$, <br>
                  $$c$$ to wyraz wolny, czyli $$-1$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>Obliczenie wyróżnika równania (Δ)</StepDescription>
              <ChoiceQuestion
                question="Która wartość jest poprawną deltą (Δ) dla tego równania?"
                choices={[
                  { label: 'Δ = 4', value: 'a' },
                  { label: 'Δ = 8', value: 'b' },
                  { label: 'Δ = -4', value: 'c' },
                  { label: 'Δ = 0', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Delta (Δ) jest obliczana ze wzoru:
                  $$\Delta = b^2 - 4ac$$.
                  Podstawiając wartości:
                  $$\Delta = (-2)^2 - 4 \cdot 1 \cdot (-1) = 4 + 4 = 8$$.
                  Poprawna wartość delty to $$\Delta = 8$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Wyznaczenie pierwiastków równania</StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
                choices={[
                  { label: 'x₁ = 1 - \\sqrt{2}, x₂ = 1 + \\sqrt{2}', value: 'a' },
                  { label: 'x₁ = -1, x₂ = 1 + \\sqrt{2}', value: 'b' },
                  { label: 'x₁ = 1 - \\sqrt{2}, x₂ = 1', value: 'c' },
                  { label: 'x₁ = -\\sqrt{2}, x₂ = 2', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki: <br>
                  $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,<br>
                  $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.<br>
                  Podstawiając wartości:<br>
                  $$x_1 = \frac{2 - 2\sqrt{2}}{2} = 1 - \sqrt{2}$$,<br>
                  $$x_2 = \frac{2 + 2\sqrt{2}}{2} = 1 + \sqrt{2}$$.<br>
                  Poprawne wartości pierwiastków to $$x_1 = 1 - \sqrt{2}$$ i $$x_2 = 1 + \sqrt{2}$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="x^2 - 2x - 1 = 0"
                steps={[
                  { step: 'a = 1, b = -2, c = -1' },
                  {
                    step: 'Δ = b² - 4ac = (-2)² - 4·1·(-1) = 4 + 4 = 8, \\sqrt{\\Delta} = \\sqrt{8} = 2\\sqrt{2}',
                  },
                  { step: 'x₁ = \\frac{2 + 2\\sqrt{2}}{2} = 1 + \\sqrt{2}' },
                  { step: 'x₂ = \\frac{2 - 2\\sqrt{2}}{2} = 1 - \\sqrt{2}' },
                ]}
                solutions={['x₁ = 1 - \\sqrt{2}', 'x₂ = 1 + \\sqrt{2}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
