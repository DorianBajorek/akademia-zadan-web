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
  const taskId = '1000';
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
          equation="|-2 + \sqrt{2}|"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Oszacujmy wartość pierwiastka aby wiedzieć, czy wartość pod pierwiastkiem jest
                ujemna czy dodatnia.
              </StepDescription>
              <ChoiceQuestion
                question="Ile wynosi w przybliżeniu $$\sqrt{2}$$?"
                choices={[
                  { label: '\\text{około } 1,41', value: 'a' },
                  { label: '\\text{około } 1,73', value: 'b' },
                  { label: '\\text{około } 2,00', value: 'c' },
                  { label: '\\text{około } 0,87', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="$$\sqrt{2} ≈ 1,41421357$$, wystarczy do dwóch miejsc po przecniku więć będzie to $$1,41$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/wartosc_pierwiastka2.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określmy czy wewnątrz pierwiastka jest liczba ujemna. Jeśli tak to usuwając wartość
                bezwzględną zmienimy znak na ujemny, jeśli nie znaku nie zmienimy.
              </StepDescription>
              <ChoiceQuestion
                question="Czy wyrażenie $$-2 + \sqrt{2}$$ jest dodatnie czy ujemne?"
                choices={[
                  { label: '\\text{Dodatnie}', value: 'a' },
                  { label: '\\text{Ujemne}', value: 'b' },
                  { label: '\\text{Równe zero}', value: 'c' },
                ]}
                correctAnswer="b"
                explanation="Ponieważ $$\sqrt{2} ≈ 1.41$$, to $$-2 + \sqrt{2} ≈ -2 + 1.41 = -0.59$$, czyli wynik jest ujemny."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Obliczenie wartości bezwzględnej</StepDescription>
              <ChoiceQuestion
                question="Jak obliczyć $$|-2 + \sqrt{2}|$$?"
                choices={[
                  { label: '-2 + \\sqrt{2}', value: 'a' },
                  { label: '2 - \\sqrt{2}', value: 'b' },
                  { label: '0', value: 'c' },
                ]}
                correctAnswer="b"
                explanation="Z definicji wartości bezwzględnej: jeśli wyrażenie jest ujemne, to zmieniamy znak na przeciwny. <br>
                $$|-2 + \sqrt{2}| = -(-2 + \sqrt{2}) = 2 - \sqrt{2}$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="|-2 + √2|"
                steps={[
                  { step: '\\sqrt{2} ≈ 1.4142' },
                  { step: '-2 + \\sqrt{2} ≈ -0.5858 < 0' },
                  { step: '|-2 + \\sqrt{2}| = 2 - \\sqrt{2}' },
                ]}
                solutions={['2 - \\sqrt{2}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
