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
  const taskId = '6102';
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
      if (updated.length === 5 && !problemSolved) {
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
          equation="\begin{cases} x + y = 5 \\ 3x - 2y = -20 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Sprawdź, czy współczynniki przy jednej ze zmiennych są przeciwne.
            </StepDescription>
            <ChoiceQuestion
              question="Które współczynniki są przeciwne?"
                             choices={[
                 { label: '\\text{Współczynniki przy x (1 i 3)}', value: 'a' },
                 { label: '\\text{Współczynniki przy y (1 i -2)}', value: 'b' },
                 { label: '\\text{Żadne współczynniki nie są przeciwne}', value: 'c' },
                 { label: '\\text{Wszystkie współczynniki są przeciwne}', value: 'd' },
               ]}
              correctAnswer="c"
              explanation="Współczynniki przy x to 1 i 3, przy y to 1 i -2. Żadne z nich nie są przeciwne."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Pomnóż pierwsze równanie przez 2, aby uzyskać przeciwne współczynniki przy y.
            </StepDescription>
            <ChoiceQuestion
              question="Po pomnożeniu pierwszego równania przez 2 otrzymujemy:"
              choices={[
                { label: '2x + 2y = 10', value: 'a' },
                { label: '2x + y = 10', value: 'b' },
                { label: 'x + 2y = 10', value: 'c' },
                { label: '2x - 2y = 10', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Mnożymy pierwsze równanie przez 2:<br>$$2 \cdot (x + y) = 2 \cdot 5$$<br>$$2x + 2y = 10$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Dodaj równania stronami, aby wyeliminować zmienną y.
            </StepDescription>
            <ChoiceQuestion
              question="Po dodaniu równań stronami otrzymujemy:"
              choices={[
                { label: '5x = -10', value: 'a' },
                { label: '5x = 30', value: 'b' },
                { label: 'x = -2', value: 'c' },
                { label: '2x + 2y + 3x - 2y = 10 + (-20)', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Dodajemy równania stronami:<br>$$(2x + 2y) + (3x - 2y) = 10 + (-20)$$<br>$$2x + 2y + 3x - 2y = -10$$<br>$$5x = -10$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Oblicz wartość zmiennej <InlineMath math="x" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość x"
              correctAnswer="-2"
              explanation="Rozwiązujemy równanie $$5x = -10$$:<br>$$x = \frac{-10}{5}$$<br>$$x = -2$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Podstaw obliczoną wartość <InlineMath math="x = -2" /> do pierwszego równania i oblicz <InlineMath math="y" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość y"
              correctAnswer="7"
              explanation="Podstawiamy $$x = -2$$ do pierwszego równania $$x + y = 5$$:<br>$$-2 + y = 5$$<br>$$y = 5 - (-2)$$<br>$$y = 5 + 2$$<br>$$y = 7$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} x + y = 5 \\ 3x - 2y = -20 \end{cases}"
                         steps={[
               {
                 step: '\\text{Żadne współczynniki nie są przeciwne}',
               },
               {
                 step: '\\text{Mnożymy pierwsze równanie przez 2: 2x + 2y = 10}',
               },
               {
                 step: '\\text{Dodajemy równania: (2x + 2y) + (3x - 2y) = 10 + (-20)} \\Rightarrow 5x = -10',
               },
               {
                 step: 'x = \\frac{-10}{5} = -2',
               },
               {
                 step: '-2 + y = 5 \\Rightarrow y = 5 - (-2) = 7',
               },
             ]}
            solutions={['x = -2, y = 7']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
