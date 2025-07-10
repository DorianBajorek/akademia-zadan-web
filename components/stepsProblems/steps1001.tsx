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
  const taskId = '1001';
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
          title="Wartość bezwzględna"
          description="Oblicz wartość wyrażenia:"
          equation="|3 - \sqrt{5}|"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oszacujmy wartość pierwiastka aby wiedzieć, czy wartość pod pierwiastkiem jest
                ujemna czy dodatnia.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi w przybliżeniu $$\sqrt{5}$$?"
                choices={[
                  { label: '\\text{około } 2,24', value: 'a' },
                  { label: '\\text{około } 2,00', value: 'b' },
                  { label: '\\text{około } 2,50', value: 'c' },
                  { label: '\\text{około } 1,73', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="$$\sqrt{5} ≈ 2.23606798$$. Wystarczy, że weźniemy tylko dwie cyfry $$2,24$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/wartosc_pierwiastka5.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określmy znak wyrażenia pod wartością bezwzględną
              </StepDescription>
              <ChoiceQuestion
                question="Czy wyrażenie $$3 - \sqrt{5}$$ jest dodatnie czy ujemne?"
                choices={[
                  { label: '\\text{Dodatnie}', value: 'a' },
                  { label: '\\text{Ujemne}', value: 'b' },
                  { label: '\\text{Równe zero}', value: 'c' },
                ]}
                correctAnswer="a"
                explanation="Ponieważ $$\sqrt{5} ≈ 2.24$$, to $$3 - \sqrt{5} ≈ 3 - 2.24 = 0.76$$, czyli wynik jest dodatni."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Obliczenie wartości bezwzględnej</StepDescription>
              <ChoiceQuestion
                question="Jak obliczyć $$|3 - \sqrt{5}|$$?"
                choices={[
                  { label: '3 - \\sqrt{5}', value: 'a' },
                  { label: '\\sqrt{5} - 3', value: 'b' },
                  { label: '0', value: 'c' },
                ]}
                correctAnswer="a"
                explanation="Z definicji wartości bezwzględnej: jeśli wyrażenie jest dodatnie, to pozostaje bez zmian. <br>
                $$|3 - \sqrt{5}| = 3 - \sqrt{5}$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="|3 - \sqrt{5}|"
                steps={[
                  { step: '\\sqrt{5} ≈ 2.2361' },
                  { step: '3 - \\sqrt{5} ≈ 0.7639 > 0' },
                  { step: '|3 - \\sqrt{5}| = 3 - \\sqrt{5}' },
                ]}
                solutions={['3 - \\sqrt{5}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
