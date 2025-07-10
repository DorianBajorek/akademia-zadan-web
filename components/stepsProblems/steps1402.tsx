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
  const taskId = '1402';
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
          title="Równanie kwadratowe"
          description="Rozwiąż równanie kwadratowe:"
          equation="x² + 4x + 5 = 0"
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
                  { label: 'a = -1, b = 4, c = 5', value: 'a' },
                  { label: 'a = 1, b = -4, c = 5', value: 'b' },
                  { label: 'a = 1, b = 4, c = -5', value: 'c' },
                  { label: 'a = 1, b = 4, c = 5', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Współczynniki dla równania $$x^2 + 4x + 5 = 0$$ to $$a = 1, b = 4, c = 5$$."
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
                correctAnswer="-4"
                explanation="Delta (Δ) jest obliczana ze wzoru:
                  $$\Delta = b^2 - 4ac$$.
                  Podstawiając wartości:
                  $$\Delta = 4^2 - 4 \cdot 1 \cdot 5 = 16 - 20 = -4$$.
                  Poprawna wartość delty to $$\Delta = -4$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Interpretacja rozwiązania dla Δ &lt; 0
              </StepDescription>
              <ChoiceQuestion
                question="Co oznacza, że $$\Delta < 0$$?"
                choices={[
                  {
                    label: '\\text{Brak miejsc zerowych – brak rozwiązań rzeczywistych}',
                    value: 'a',
                  },
                  { label: '\\text{Jedno rozwiązanie rzeczywiste}', value: 'b' },
                  { label: '\\text{Dwa rozwiązania rzeczywiste}', value: 'c' },
                  { label: '\\text{Rozwiązanie jest liczbą zespoloną ujemną}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Jeśli $$\Delta < 0$$, to równanie kwadratowe nie ma miejsc zerowych w zbiorze liczb rzeczywistych. Można je rozwiązać jedynie w zbiorze liczb zespolonych."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/brakMiejscZerowych.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div className="mt-8">
              <StudentNotes
                equation="x^2 + 4x + 5 = 0"
                steps={[
                  { step: 'a = 1, b = 4, c = 5' },
                  { step: '\\Delta = b^2 - 4ac = 4^2 - 4 \\cdot 1 \\cdot 5 = 16 - 20 = -4' },
                  { step: '\\Delta < 0 \\Rightarrow \\text{brak miejsc zerowych w } \\mathbb{R}' },
                ]}
                solutions={['\\text{Brak miejsc zerowych (brak rozwiązań rzeczywistych)}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
