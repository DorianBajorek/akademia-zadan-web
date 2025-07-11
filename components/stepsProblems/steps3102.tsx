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
  const taskId = '3102';
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
          title="Wyznacz pierwszy wyraz i różnicę ciągu arytmetycznego"
          description="Dany jest ciąg arytmetyczny $$(a_n)$$ określony dla $$n \geq 1$$, w którym $$a_5 = 22$$ oraz $$a_{10} = 47$$. Oblicz pierwszy wyraz $$a_1$$ i różnicę $$r$$ tego ciągu."
        />

        {/* ETAP 1: Równanie dla a_5 i a_10 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zapisz wzory na piąty i dziesiąty wyraz ciągu, wykorzystując <InlineMath math="a_1" />{' '}
              i <InlineMath math="r" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie są wzory na $$a_5$$ i $$a_{10}$$ przez $$a_1$$ i $$r$$?"
              choices={[
                { label: 'a_5 = a_1 + 3r, \\quad a_{10} = a_1 + 7r', value: 'a' },
                { label: 'a_5 = a_1 + 5r, \\quad a_{10} = a_1 + 10r', value: 'b' },
                { label: 'a_5 = a_1 + 4r, \\quad a_{10} = a_1 + 9r', value: 'c' },
                { label: 'a_5 = a_1 + 4r, \\quad a_{10} = a_1 + 8r', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Korzystamy ze wzoru ogólnego: $$a_n = a_1 + (n-1)r$$."
              img="/steps-images/n-ty-ciag-arytmetyczny.png"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Układ równań i wyznaczenie r */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Na podstawie wzorów oblicz różnicę <InlineMath math="r" />.
            </StepDescription>
            <ChoiceQuestion
              question="Z układu równań:<br/> $$ a_5 = a_1 + 4r = 22 \\\\ a_{10} = a_1 + 9r = 47 $$<br/>  Oblicz ile wynosi $$r$$"
              choices={[
                { label: 'r = 4', value: 'a' },
                { label: 'r = 5', value: 'b' },
                { label: 'r = 7', value: 'c' },
                { label: 'r = 6', value: 'd' },
              ]}
              correctAnswer="b"
              explanation={
                'Odejmujemy stronami:<br/> $$(a_1 + 9r) - (a_1 + 4r) = 47 - 22$$<br/> $$5r = 25 \\implies r = 5$$'
              }
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wyznaczenie a_1 */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Podstaw obliczoną wartość <InlineMath math="r=5" /> do jednego z równań, aby wyznaczyć
              pierwszy wyraz <InlineMath math="a_1" />.
            </StepDescription>
            <ChoiceQuestion
              question="Podstaw $$r=5$$ do równania $$a_5 = a_1 + 4r = 22$$. Ile wynosi $$a_1$$?"
              choices={[
                { label: 'a_1 = 2', value: 'a' },
                { label: 'a_1 = 1', value: 'b' },
                { label: 'a_1 = 3', value: 'c' },
                { label: 'a_1 = 6', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={
                '$$a_5 = a_1 + 4r = 22$$<br/>' +
                '$$a_1 + 4 \\cdot 5 = 22$$<br/>' +
                '$$a_1 = 22 - 20 = 2$$'
              }
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* PODSUMOWANIE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="a_n = a_1 + (n-1)r"
            steps={[
              { step: 'a_5 = 22 = a_1 + 4r' },
              { step: 'a_{10} = 47 = a_1 + 9r' },
              { step: 'a_{10} - a_5 = 5r = 25 \\implies r = 5' },
              { step: 'a_1 = 22 - 4 \\cdot 5 = 2' },
            ]}
            solutions={['a_1 = 2, \\quad r = 5']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
