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
  const taskId = '2501';
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
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  const resetLesson = () => {
    setCompletedStages([]);
  };

  return (
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Rozwiązywanie nierówności liniowych"
          description="Rozwiąż nierówność:"
          equation="2(x-1) + 3(x+3) \geq x - 7"
        />

        <div className="mt-8 space-y-10">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <>
              <StepDescription stepNumber={1}>Wymnóż nawiasy po lewej stronie.</StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '2x - 2 + 3x + 9 \\geq x - 7', value: 'a' },
                  { label: '2x - 1 + 3x + 3\\geq x - 7', value: 'b' },
                  { label: '2x - 2 + 3x + 3 \\geq x - 7', value: 'c' },
                  { label: '2x - 2 + x + 9 \\geq x - 7', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="$$2(x - 1) = 2x - 2$$, $$3(x + 3) = 3x + 9$$ — czyli: $$2x - 2 + 3x + 9 \geq x - 7$$"
                onComplete={() => handleStageComplete(1)}
              />
            </>
          )}

          {completedStages.includes(1) && (
            <>
              <StepDescription stepNumber={2}>Uprość lewą stronę nierówności.</StepDescription>
              <ChoiceQuestion
                question="Jak wygląda uproszczona nierówność?"
                choices={[
                  { label: '5x + 11 \\geq x - 7', value: 'a' },
                  { label: '5x + 7 \\geq x - 7', value: 'b' },
                  { label: '6x + 7 \\geq x - 7', value: 'c' },
                  { label: '5x + 5 \\geq x - 7', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="$$2x + 3x = 5x$$ i $$-2 + 9 = 7$$ $$\Rightarrow$$ $$5x + 7 \geq x - 7$$"
                onComplete={() => handleStageComplete(2)}
              />
            </>
          )}

          {completedStages.includes(2) && (
            <>
              <StepDescription stepNumber={3}>
                Przenieś wyrażenia z <InlineMath math="x" /> na lewą stronę, a liczby na prawą.
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '5x - x \\geq 7 - 7', value: 'a' },
                  { label: '5x + x \\geq -7 + 7', value: 'b' },
                  { label: '5x - x \\geq -7 - 7', value: 'c' },
                  { label: '5x + x \\geq 7 + 7', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="$$x$$ na lewą stronę: $$5x - x$$, $$7$$ na prawą: $$-7 - 7$$ $$\Rightarrow$$ $$5x - x \geq -14$$"
                onComplete={() => handleStageComplete(3)}
              />
            </>
          )}

          {completedStages.includes(3) && (
            <>
              <StepDescription stepNumber={4}>Uprość obie strony nierówności.</StepDescription>
              <ChoiceQuestion
                question="Jak wygląda uproszczona nierówność?"
                choices={[
                  { label: '6x \\geq 0', value: 'a' },
                  { label: '4x \\geq -14', value: 'b' },
                  { label: '4x \\geq 0', value: 'c' },
                  { label: '6x \\geq 14', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="$$5x - x = 4x$$ i $$-7 - 7 = -14$$ $$\Rightarrow$$ $$4x \geq -14$$"
                onComplete={() => handleStageComplete(4)}
              />
            </>
          )}

          {completedStages.includes(4) && (
            <>
              <StepDescription stepNumber={5}>
                Podziel obie strony przez 4, aby uzyskać rozwiązanie.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie jest rozwiązanie nierówności?"
                choices={[
                  { label: 'x \\geq 0', value: 'a' },
                  { label: 'x \\geq 3.5', value: 'b' },
                  { label: 'x \\geq -3.5', value: 'c' },
                  { label: 'x \\leq -3.5', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="$$x \geq \frac{-14}{4} = -3.5$$ — dzielimy przez liczbę dodatnią, więc znak nierówności się nie zmienia."
                explanationImage="/steps-images/nierownosc-liniowa2.png"
                onComplete={() => handleStageComplete(5)}
              />
            </>
          )}

          {completedStages.length === 5 && (
            <div className="space-y-6">
              <StudentNotes
                equation="2(x-1) + 3(x+3) \geq x - 7"
                steps={[
                  { step: '2x - 2 + 3x + 9 \\geq x - 7' },
                  { step: '5x + 7 \\geq x - 7' },
                  { step: '5x - x \\geq -7 - 7' },
                  { step: '4x \\geq -14' },
                  {
                    step: 'x \\geq -3.5',
                    image: '/steps-images/nierownosc-liniowa2.png',
                  },
                ]}
                solutions={['x \\in [-3.5, \\infty)']}
              />

              <button
                onClick={resetLesson}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Spróbuj ponownie
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
