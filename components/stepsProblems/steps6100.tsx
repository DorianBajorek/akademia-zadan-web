'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '6100';
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
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Rozwiązywanie układu równań metodą przeciwnych współczynników"
          description="Rozwiąż układ równań metodą przeciwnych współczynników:"
          equation="\begin{cases} x + y = 7 \\ x - y = 3 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Sprawdź, czy współczynniki przy jednej ze zmiennych są przeciwne.
            </StepDescription>
            <ChoiceQuestion
              question="Które współczynniki są przeciwne?"
              choices={[
                { label: '\\text{Współczynniki przy x (1 i 1)}', value: 'a' },
                { label: '\\text{Współczynniki przy y (1 i -1)}', value: 'b' },
                { label: '\\text{Żadne współczynniki nie są przeciwne}', value: 'c' },
                { label: '\\text{Wszystkie współczynniki są przeciwne}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Współczynniki przy y to $$1$$ i $$-1$$, które są przeciwne. Współczynniki przy x to $$1$$ i $$1$$, które nie są przeciwne."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Dodaj równania stronami, aby wyeliminować zmienną y.
            </StepDescription>
            <ChoiceQuestion
              question="Po dodaniu równań stronami otrzymujemy:"
              choices={[
                { label: '2x = 10', value: 'a' },
                { label: '2y = 4', value: 'b' },
                { label: 'x + y + x - y = 7 + 3', value: 'c' },
                { label: '2x + 2y = 10', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Dodajemy równania stronami:<br>$$(x + y) + (x - y) = 7 + 3$$<br>$$x + y + x - y = 10$$<br>$$2x = 10$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Oblicz wartość zmiennej <InlineMath math="x" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość x"
              correctAnswer="5"
              explanation="Rozwiązujemy równanie $$2x = 10$$:<br>$$x = \frac{10}{2}$$<br>$$x = 5$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podstaw obliczoną wartość <InlineMath math="x = 5" /> do pierwszego równania i oblicz <InlineMath math="y" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość y"
              correctAnswer="2"
              explanation="Podstawiamy $$x = 5$$ do pierwszego równania $$x + y = 7$$:<br>$$5 + y = 7$$<br>$$y = 7 - 5$$<br>$$y = 2$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\begin{cases} x + y = 7 \\ x - y = 3 \end{cases}"
            steps={[
              {
                step: '\\text{Współczynniki przy y są przeciwne (1 i -1)}',
              },
              {
                step: '\\text{Dodajemy równania: (x + y) + (x - y) = 7 + 3} \\Rightarrow 2x = 10',
              },
              {
                step: 'x = \\frac{10}{2} = 5',
              },
              {
                step: '5 + y = 7 \\Rightarrow y = 7 - 5 = 2',
              },
            ]}
            solutions={['x = 5, y = 2']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
