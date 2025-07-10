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
  const taskId = '106';
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
          title="Nierówność kwadratowa"
          description="Rozwiąż nierówność kwadratową:"
          equation="5x^2 - 45 \leq 0"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej
                nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
                choices={[
                  { label: 'a = 5, b = 0, c = -45', value: 'a' },
                  { label: 'a = 5, b = -45, c = 0', value: 'b' },
                  { label: 'a = -5, b = 0, c = 45', value: 'c' },
                  { label: 'a = 5, b = 45, c = 0', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Współczynniki dla tej nierówności to $$a = 5, b = 0, c = -45$$. 
                  Dlaczego? Równanie kwadratowe w standardowej postaci ma postać: $$ax^2 + bx + c = 0$$. <br>
                  W przypadku nierówności $$5x^2 - 45 \leq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                  $$a$$ to współczynnik przy $$x^2$$, czyli $$5$$, <br>
                  $$b$$ to współczynnik przy $$x$$, czyli $$0$$, <br>
                  $$c$$ to wyraz wolny, czyli $$-45$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz deltę (Δ) dla tej nierówności.
              </StepDescription>
              <NumericQuestion
                question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
                correctAnswer="900"
                explanation="Delta (Δ) jest obliczana ze wzoru: <br>
                  $$\Delta = b^2 - 4ac$$.<br>
                  Podstawiając wartości współczynników:<br>
                  $$\Delta = 0^2 - 4 \cdot 5 \cdot (-45) = 0 + 900 = 900$$.<br>
                  Poprawna wartość delty to $$\Delta = 900$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz pierwiastki równania kwadratowego <InlineMath math="x_1, x_2" />.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
                choices={[
                  { label: 'x₁ = -3, x₂ = 3', value: 'a' },
                  { label: 'x₁ = 3, x₂ = -1', value: 'b' },
                  { label: 'x₁ = 1, x₂ = -1', value: 'c' },
                  { label: 'x₁ = 0, x₂ = 1.5', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Ponieważ delta jest dodatnia, równanie ma dwa pierwiastki: <br>
                  $$x_1 = \frac{-b - \sqrt{\Delta}}{2a}$$,<br>
                  $$x_2 = \frac{-b + \sqrt{\Delta}}{2a}$$.<br>
                  Podstawiając wartości:<br>
                  $$x_1 = \frac{-0 - 30}{10} = -3$$,<br>
                  $$x_2 = \frac{-0 + 30}{10} = 3$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Wskaż prawidłowy przedział rozwiązania nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Który przedział jest rozwiązaniem nierówności $$5x^2 - 45 \leq 0$$?"
                choices={[
                  { label: 'x ∈ \\langle-3, 3\\rangle', value: 'a' },
                  { label: 'x ∈ (-∞, -3\\rangle ∪ \\langle3, ∞)', value: 'b' },
                  { label: 'x ∈ (-3, 3)', value: 'c' },
                  { label: 'x ∈ (-∞, -3) ∪ (3, ∞)', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązaniem nierówności $$5x^2 - 45 \leq 0$$ jest przedział:
                  $$x \in \langle-3, 3\rangle$$.
                  Wynika to z faktu, że parabola skierowana jest ramionami do góry (a > 0), a nierówność jest typu '≤', więc rozwiązanie obejmuje wartości między pierwiastkami, włącznie z nimi."
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/ramionaParaboli.png"
                explanationImage="/steps-images/fun7.png"
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="5x^2 - 45 \leq 0"
                steps={[
                  {
                    step: 'a = 5, b = 0, c = -45',
                  },
                  {
                    step: '\\Delta = b^2 - 4ac = 0^2 - 4 \\cdot 5 \\cdot (-45) = 900',
                  },
                  {
                    step: 'x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a} = -3',
                  },
                  {
                    step: 'x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a} = 3',
                    image: '/steps-images/fun7.png',
                  },
                ]}
                solutions={['x \\in \\langle-3, 3\\rangle']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
