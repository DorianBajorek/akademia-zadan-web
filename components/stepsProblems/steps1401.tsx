'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
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
          title="Równanie kwadratowe"
          description="Rozwiąż równanie kwadratowe:"
          equation="x² - 3x + 2 = 0"
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
                  { label: 'a = 2, b = -3, c = 1', value: 'a' },
                  { label: 'a = 1, b = -3, c = -2', value: 'b' },
                  { label: 'a = 1, b = -3, c = 2', value: 'c' },
                  { label: 'a = -1, b = 3, c = 2', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Współczynniki dla równania $$x^2 - 3x + 2 = 0$$ to $$a = 1, b = -3, c = 2$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>Obliczenie wyróżnika równania (Δ)</StepDescription>
              <NumericQuestion
                question="Która wartość jest poprawną deltą (Δ) dla tego równania?"
                correctAnswer="1"
                explanation="Delta (Δ) jest obliczana ze wzoru:
                  $$\Delta = b^2 - 4ac$$. <br>
                  Podstawiając wartości:<br>
                  $$\Delta = (-3)^2 - 4 \cdot 1 \cdot 2 = 9 - 8 = 1$$.<br>
                  Poprawna wartość delty to $$\Delta = 1$$."
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
                  { label: 'x_1 = 2, x_2 = 1', value: 'a' },
                  { label: 'x_1 = -2, x_2 = -1', value: 'b' },
                  { label: 'x_1 = 1, x_2 = 2', value: 'c' },
                  { label: 'x_1 = 3, x_2 = -2', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Pierwiastki wyznaczamy ze wzoru: <br>
                  $$x_{1} = \frac{-b + \sqrt{\Delta}}{2a}$$. <br>
                  $$x_{2} = \frac{-b - \sqrt{\Delta}}{2a}$$. <br>
                  Podstawiając wartości:<br>
                  $$x_1 = \frac{3 - 1}{2} = 1$$,<br>
                  $$x_2 = \frac{3 + 1}{2} = 2$$.<br>
                  Poprawne pierwiastki to $$x_1 = 1$$ i $$x_2 = 2$$ (lub odwrotnie)."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="x^2 - 3x + 2 = 0"
                steps={[
                  { step: 'a = 1, b = -3, c = 2' },
                  { step: '\\Delta = b^2 - 4ac = (-3)^2 - 4 \\cdot 1 \\cdot 2 = 9 - 8 = 1' },
                  { step: 'x_1 = \\frac{3 - 1}{2} = 1, \\quad x_2 = \\frac{3 + 1}{2} = 2' },
                ]}
                solutions={['x₁ = 1', 'x₂ = 2']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
