'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '3101';
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

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Arytmetyka ciągów – suma początkowych wyrazów"
          description="W ciągu arytmetycznym $$(a_n)$$, określonym dla $$n \geq 1$$, dane są dwa wyrazy: $$a_1 = -11$$ i $$a_9 = 5$$. Wyznacz sumę dziewięciu początkowych wyrazów tego ciągu ($$S_9$$) i różnicę $$r$$."
        />

        {/* ETAP 1: Równanie dla a_9 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Użyj wzoru na <InlineMath math="n" />
              -ty wyraz ciągu, aby zapisać równanie dla <InlineMath math="a_9" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest równanie na $$a_9$$ po podstawieniu $$a_1=-11$$ (ze zmienną $$r$$)?"
              choices={[
                { label: 'a_9 = -11 + 8r', value: 'a' },
                { label: 'a_9 = -11 + 9r', value: 'b' },
                { label: 'a_9 = -11 + 7r', value: 'c' },
                { label: 'a_9 = -11 + r', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={
                'Ogólnie: $$a_n = a_1 + (n-1)r$$.<br/>Dla $$n=9$$: $$a_9 = a_1 + 8r$$, więc $$a_9 = -11 + 8r$$.'
              }
              img="/steps-images/n-ty-ciag-arytmetyczny.png"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Wyznaczenie r */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Wykorzystaj podaną wartość <InlineMath math="a_9=5" />, aby obliczyć różnicę{' '}
              <InlineMath math="r" />.
            </StepDescription>
            <ChoiceQuestion
              question="Podstaw $$a_9 = 5$$ do równania $$a_9 = -11 + 8r$$ i wyznacz $$r$$."
              choices={[
                { label: 'r = 1', value: 'a' },
                { label: 'r = 2', value: 'b' },
                { label: 'r = 8', value: 'c' },
                { label: 'r = -2', value: 'd' },
              ]}
              correctAnswer="b"
              explanation={'$$5 = -11 + 8r \\implies 8r = 16 \\implies r = 2$$'}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wzór na sumę S_n */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Wybierz poprawny wzór na sumę <InlineMath math="n" /> początkowych wyrazów ciągu
              arytmetycznego.
            </StepDescription>
            <ChoiceQuestion
              question="Wskaż poprawny wzór na sumę $$S_n$$ pierwszych $$n$$ wyrazów w postaci z $$a_1$$, $$r$$, $$n$$:"
              choices={[
                { label: 'S_n = \\frac{2a_1 + (n-1)r}{2} \\cdot n', value: 'a' },
                { label: 'S_n = a_1 + n \\cdot r', value: 'b' },
                { label: 'S_n = a_1 + (n-1)r', value: 'c' },
                { label: 'S_n = \\frac{a_1 + a_n}{2}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={
                'Suma n początkowych wyrazów: $$S_n = \\frac{2a_1 + (n-1)r}{2} \\cdot n$$.'
              }
              img="/steps-images/wzor-ciag-arytmetyczny.png"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Oblicz sumę S_9 */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podstaw wszystkie znane wartości do wzoru na sumę, aby obliczyć{' '}
              <InlineMath math="S_9" />.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz sumę dziewięciu początkowych wyrazów $$S_9$$."
              choices={[
                {
                  label: 'S_9 = \\frac{2 \\cdot (-11) + 8 \\cdot 2}{2} \\cdot 9 = -27',
                  value: 'a',
                },
                {
                  label: 'S_9 = \\frac{2 \\cdot (-11) + 9 \\cdot 2}{2} \\cdot 9 = -24',
                  value: 'b',
                },
                {
                  label: 'S_9 = \\frac{2 \\cdot (-11) + 7 \\cdot 2}{2} \\cdot 9 = -18',
                  value: 'c',
                },
                {
                  label: 'S_9 = \\frac{2 \\cdot (-11) + 8 \\cdot 1}{2} \\cdot 9 = -16',
                  value: 'd',
                },
              ]}
              correctAnswer="a"
              explanation={
                '$$S_9 = \\frac{2 \\cdot (-11) + 8 \\cdot 2}{2} \\cdot 9 = \\frac{-22 + 16}{2} \\cdot 9 = \\frac{-6}{2} \\cdot 9 = -3 \\cdot 9 = -27$$'
              }
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="S_9 = \frac{2a_1 + 8r}{2} \cdot 9"
            steps={[
              { step: 'a_1 = -11,\\; a_9 = 5' },
              { step: 'a_9 = a_1 + 8r \\implies 5 = -11 + 8r \\implies r = 2' },
              { step: 'S_9 = \\frac{2 \\cdot (-11) + 8 \\cdot 2}{2} \\cdot 9 = -27' },
            ]}
            solutions={['\\text{Suma dziewięciu początkowych wyrazów to } S_9 = -27, r=2']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
