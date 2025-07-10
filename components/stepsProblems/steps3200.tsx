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
  const taskId = '3200';
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
          title="Suma początkowych wyrazów ciągu geometrycznego"
          description="W ciągu geometrycznym przez $$S_n$$ oznaczamy sumę $$n$$ początkowych wyrazów tego ciągu, dla liczb naturalnych $$n \geq 1$$. Wiadomo, że dla pewnego ciągu geometrycznego: $$S_1 = 2$$ i $$S_2 = 12$$. Wyznacz iloraz $$q$$ i piąty wyraz $$a_5$$ tego ciągu."
        />

        {/* ETAP 1: Definicje S1 i S2 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zastanów się, czym jest suma jednego i dwóch początkowych wyrazów ciągu
              geometrycznego.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie równania zapiszesz korzystając z $$S_1$$ i $$S_2$$?"
              choices={[
                { label: 'S_1 = a_1 + a_1 q, S_2 = a_1', value: 'a' },
                { label: 'S_1 = a_1 q, S_2 = a_1 + q^2', value: 'b' },
                { label: 'S_1 = a_1 + q, S_2 = a_1 q^2', value: 'c' },
                { label: 'S_1 = a_1, S_2 = a_1 + a_1 q', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Suma pierwszego wyrazu to $$S_1 = a_1$$, a suma dwóch pierwszych wyrazów to $$S_2 = a_1 + a_2 = a_1 + a_1 q$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Podstawienie wartości */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Wykorzystaj fakt, że <InlineMath math="S_1 = a_1" /> i podstaw znane wartości do
              równania na <InlineMath math="S_2" />.
            </StepDescription>
            <ChoiceQuestion
              question="Podstaw $$S_1 = a_1 = 2$$ i $$S_2 =a_1 + a_1 q = 12$$. Jaką postać ma równanie na $$q$$?"
              choices={[
                { label: 'q + 2q = 12', value: 'a' },
                { label: '2q - 2 = 12', value: 'b' },
                { label: '2 + 2q = 12', value: 'c' },
                { label: '2 + q = 12', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Skoro $$S_1 = a_1 = 2$$, podstawiamy tę wartość do równania $$S_2 = a_1 + a_1 q$$. Otrzymujemy: $$12 = 2 + 2q$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wyznaczenie q */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż utworzone równanie, aby znaleźć wartość ilorazu <InlineMath math="q" />.
            </StepDescription>
            <ChoiceQuestion
              question="Rozwiąż równanie $$2 + 2q = 12$$. Ile wynosi $$q$$?"
              choices={[
                { label: 'q = 5', value: 'a' },
                { label: 'q = 6', value: 'b' },
                { label: 'q = 10', value: 'c' },
                { label: 'q = 12', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="$$2 + 2q = 12$$<br/>$$2q = 10 \implies q = 5$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Wyznaczenie a_5 */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Użyj wzoru na <InlineMath math="n" />
              -ty wyraz ciągu geometrycznego, aby obliczyć <InlineMath math="a_5" />.
            </StepDescription>
            <ChoiceQuestion
              question="Oblicz piąty wyraz ciągu $$a_5$$."
              choices={[
                { label: 'a_5 = 2 \\cdot 5^4 = 250', value: 'a' },
                { label: 'a_5 = 2 \\cdot 5^4 = 625', value: 'b' },
                { label: 'a_5 = 2 \\cdot 5^4 = 1250', value: 'c' },
                { label: 'a_5 = 2 \\cdot 5^4 = 3125', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="$$a_5 = a_1 q^{4} = 2 \cdot 5^4 = 2 \cdot 625 = 1250$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="a_n = a_1 q^{n-1}"
            steps={[
              { step: 'S_1 = a_1 = 2' },
              { step: 'S_2 = a_1 + a_1 q = 12' },
              { step: '2 + 2q = 12' },
              { step: '2q = 10 \\implies q = 5' },
              { step: 'a_5 = a_1 q^4 = 2 \\cdot 5^4 = 2 \\cdot 625 = 1250' },
            ]}
            solutions={['\\text{Iloraz } q = 5,\\quad a_5 = 1250']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
