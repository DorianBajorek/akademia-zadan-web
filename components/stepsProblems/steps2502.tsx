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
  const taskId = '2502';
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
          title="Rozwiązywanie nierówności z ułamkami"
          description="Rozwiąż nierówność:"
          equation="\frac{1}{2}x + \frac{1}{3} < \frac{2}{3}x - \frac{1}{6}"
        />

        <div className="mt-8 space-y-10">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <>
              <StepDescription stepNumber={1}>
                Pozbądź się ułamków, mnożąc obie strony przez najmniejszy wspólny mianownik.
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest najmniejszy wspólny mianownik?"
                choices={[
                  { label: '6', value: 'a' },
                  { label: '12', value: 'b' },
                  { label: '3', value: 'c' },
                  { label: '2', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Liczba $$6$$ jest najmniejszą liczbą podzielną przez $$2$$, $$3$$ i $$6$$."
                onComplete={() => handleStageComplete(1)}
              />
            </>
          )}

          {completedStages.includes(1) && (
            <>
              <StepDescription stepNumber={2}>
                Pomnóż nierówność przez <InlineMath math="6" />, aby pozbyć się ułamków.
              </StepDescription>
              <ChoiceQuestion
                question="Jak wygląda nierówność po pomnożeniu przez 6?"
                choices={[
                  { label: '2x + 3 < 4x - 2', value: 'a' },
                  { label: '6x + 6 < 12x - 6', value: 'b' },
                  { label: '3x + 2 < 4x - 1', value: 'c' },
                  { label: 'x + 2 < 2x + 1', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Obliczenia:<br>
                  $$6 \cdot \frac{1}{2}x = 3x$$<br>
                  $$6 \cdot \frac{1}{3} = 2$$<br>
                  $$6 \cdot \frac{2}{3}x = 4x$$<br>
                  $$6 \cdot (-\frac{1}{6}) = -1$$<br>
                  Finalnie: $$3x + 2 < 4x - 1$$"
                onComplete={() => handleStageComplete(2)}
              />
            </>
          )}

          {completedStages.includes(2) && (
            <>
              <StepDescription stepNumber={3}>
                Przenieś wyrażenia z <InlineMath math="x" /> na lewą stronę, liczby na prawą.
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '3x - 4x < -1 - 2', value: 'a' },
                  { label: '3x + 4x < -1 + 2', value: 'b' },
                  { label: '-3x - 4x < 1 - 2', value: 'c' },
                  { label: '3x - 4x < 1 + 2', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Przenosimy $$4x$$ na lewo: $$3x - 4x$$ i $$2$$ na prawo: $$-1 - 2$$."
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
                  { label: 'x < 3', value: 'a' },
                  { label: '7x < 1', value: 'b' },
                  { label: '-7x < -1', value: 'c' },
                  { label: '-x < -3', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Po uproszczeniu: $$3x - 4x = -x$$ i $$-1 - 2 = -3$$ $$\Rightarrow$$ $$-x < -3$$"
                onComplete={() => handleStageComplete(4)}
              />
            </>
          )}

          {completedStages.includes(4) && (
            <>
              <StepDescription stepNumber={5}>
                Pomnóż obie strony przez <InlineMath math="-1" /> (zmiana znaku nierówności!).
              </StepDescription>
              <ChoiceQuestion
                question="Jakie jest ostateczne rozwiązanie?"
                choices={[
                  { label: 'x > 3', value: 'a' },
                  { label: 'x < 3', value: 'b' },
                  { label: 'x > -3', value: 'c' },
                  { label: 'x < -3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Mnożymy obie strony przez $$-1$$:<br>
                  $$-x < -3 \Rightarrow x > 3$$"
                explanationImage="/steps-images/nierownosc-liniowa3.png"
                onComplete={() => handleStageComplete(5)}
              />
            </>
          )}

          {completedStages.length === 5 && (
            <div className="space-y-6">
              <StudentNotes
                equation="\frac{1}{2}x + \frac{1}{3} < \frac{2}{3}x - \frac{1}{6}"
                steps={[
                  { step: '\\cdot 6: 3x + 2 < 4x - 1' },
                  { step: '3x - 4x < -1 - 2' },
                  { step: '-x < -3' },
                  {
                    step: 'x > 3',
                    image: '/steps-images/nierownosc-liniowa3.png',
                  },
                ]}
                solutions={['x \\in (3, \\infty)']}
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
