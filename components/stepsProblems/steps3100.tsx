'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '3100';
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
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Arytmetyka ciągów - znajdź wyraz ciągu"
          description="Ciąg arytmetyczny $$(a_n)$$ jest określony dla każdej liczby naturalnej $$n \geq 1$$. Różnica tego ciągu jest równa $$r = 2$$, a ósmy wyraz $$a_8 = 48$$. Oblicz czwarty wyraz tego ciągu."
        />

        {/* ETAP 1: Wzór na n-ty wyraz */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Wybierz poprawny wzór ogólny na <InlineMath math="n" />
              -ty wyraz ciągu arytmetycznego.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wzór ogólny na $$n$$-ty wyraz ciągu arytmetycznego?"
              choices={[
                { label: 'a_n = a_1 + (n-1)r', value: 'a' },
                { label: 'a_n = a_1 + nr', value: 'b' },
                { label: 'a_n = a_1 \\cdot r^n', value: 'c' },
                { label: 'a_n = a_1 + n', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Wzór ogólny dla ciągu arytmetycznego to $$a_n = a_1 + (n-1)r$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/n-ty-ciag-arytmetyczny.png"
            />
          </>
        )}

        {/* ETAP 2: Wyznaczenie a_1 */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw dane do wzoru, aby obliczyć pierwszy wyraz ciągu <InlineMath math="a_1" />.
            </StepDescription>
            <NumericQuestion
              question="Podstaw dane: $$a_8 = 48$$, $$r = 2$$ i $$n=8$$. Oblicz i podaj wartość $$a_1$$."
              correctAnswer="34"
              explanation={
                '$$a_8 = a_1 + 7r$$<br/>' +
                '$$48 = a_1 + 7 \\cdot 2$$<br/>' +
                '$$48 = a_1 + 14$$<br/>' +
                '$$a_1 = 34$$'
              }
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wyznacz a_4 */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Oblicz czwarty wyraz ciągu <InlineMath math="a_4" />.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz czwarty wyraz ciągu $$a_4$$."
              choices={[
                { label: 'a_4 = 34 + 8 \\cdot 2 = 50', value: 'a' },
                { label: 'a_4 = 34 + 2 \\cdot 2 = 38', value: 'b' },
                { label: 'a_4 = 34 + 4 \\cdot 2 = 42', value: 'c' },
                { label: 'a_4 = 34 + 3 \\cdot 2 = 40', value: 'd' },
              ]}
              correctAnswer="d"
              explanation={'$$a_4 = a_1 + 3r = 34 + 3 \\cdot 2 = 34 + 6 = 40$$.'}
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="a_n = a_1 + (n-1)r"
            steps={[
              { step: '\\text{Z treści: } r = 2,\\; a_8 = 48' },
              { step: 'a_8 = a_1 + 7r' },
              { step: '48 = a_1 + 14 \\implies a_1 = 34' },
              { step: 'a_4 = a_1 + 3r = 34 + 6 = 40' },
            ]}
            solutions={['\\text{Czwarty wyraz ciągu to } a_4 = 40']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
