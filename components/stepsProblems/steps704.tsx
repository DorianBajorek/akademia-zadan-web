'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import { InlineMath } from 'react-katex';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '704';
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
          description="Ile jest wszystkich liczb naturalnych trzycyfrowych o sumie cyfr równej $$3$$?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Rozważ liczby trzycyfrowe zaczynające się cyfrą 3.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych trzycyfrowych o sumie cyfr równej 3, które zaczynają się cyfrą 3?"
              choices={[
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Jest jedna taka liczba - 300."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozważ liczby trzycyfrowe zaczynające się cyfrą 2.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych trzycyfrowych o sumie cyfr równej 3, które zaczynają się cyfrą 2?"
              choices={[
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Są 2 takie liczby - 210 i 201."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozważ liczby trzycyfrowe zaczynające się cyfrą 1.
            </StepDescription>
            <ChoiceQuestion
              question="Ile jest liczb naturalnych trzycyfrowych o sumie cyfr równej 3, które zaczynają się cyfrą 1?"
              choices={[
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Są trzy takie liczby - 111, 120 i 102."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>Oblicz końcowy wynik.</StepDescription>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="6"
              explanation="Szukana wartość to, zgodnie z regułą dodawania, suma policzonych wyżej liczb, a więc $$1 + 2 + 3 = 6$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\\text{Rozważamy liczby naturalne trzycyfrowe o sumie cyfr równej 3}"
            steps={[
              { step: '\\text{Liczby zaczynające się od cyfry 3: 300}' },
              { step: '\\text{Liczby zaczynające się od cyfry 2: 210, 201}' },
              { step: '\\text{Liczby zaczynające się od cyfry 1: 111, 120, 102}' },
            ]}
            solutions={['\\text{Liczba szukanych liczb wynosi 6.}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
