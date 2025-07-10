'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { InlineMath } from 'react-katex';

const Page = () => {
  const { token } = useAuth();
  const taskId = '706';
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
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Zliczanie liczb"
          description="Ile jest wszystkich liczb naturalnych czterocyfrowych, których suma cyfr jest równa $$3$$?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Rozważ liczby zaczynające się od cyfry <InlineMath math="3" />.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych czterocyfrowych o sumie cyfr równej $$3$$, które zaczynają się cyfrą $$3$$?"
              choices={[
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Jest jedna taka liczba - $$3000$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozważ liczby zaczynające się od cyfry 2.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych czterocyfrowych o sumie cyfr równej $$3$$, które zaczynają się cyfrą $$2$$?"
              choices={[
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Są $$3$$ takie liczby - $$2100$$, $$2010$$ i $$2001$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozważ liczby zaczynające się od cyfry <InlineMath math="1" />.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych czterocyfrowych o sumie cyfr równej $$3$$, które zaczynają się cyfrą $$1$$?"
              choices={[
                { label: '0', value: 'a' },
                { label: '2', value: 'b' },
                { label: '4', value: 'c' },
                { label: '6', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Jest 6 takich liczb - $$1110, 1101, 1011, 1200, 1020, 1002$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podsumuj wszystkie przypadki i podaj ostateczny wynik.
            </StepDescription>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="10"
              explanation="Szukana wartość to suma liczby przypadków z trzech analizowanych sytuacji: $$1 + 3 + 6 = 10$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Rozważamy liczby naturalne czterocyfrowe o sumie cyfr równej 3}"
            steps={[
              { step: '\\text{Liczby zaczynające się od cyfry 3: 3000}' },
              { step: '\\text{Liczby zaczynające się od cyfry 2: 2100, 2010, 2001}' },
              {
                step: '\\text{Liczby zaczynające się od cyfry 1: 1110, 1101, 1011, 1200, 1020, 1002}',
              },
            ]}
            solutions={['\\text{Liczba szukanych liczb wynosi 10.}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
