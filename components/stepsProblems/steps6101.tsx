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
  const taskId = '6101';
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
          equation="\begin{cases} 2x + y = 11 \\ 3x - 2y = 6 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Sprawdź, czy współczynniki przy jednej ze zmiennych są przeciwne.
            </StepDescription>
            <ChoiceQuestion
              question="Które współczynniki są przeciwne?"
                             choices={[
                 { label: '\\text{Współczynniki przy x (2 i 3)}', value: 'a' },
                 { label: '\\text{Współczynniki przy y (1 i -2)}', value: 'b' },
                 { label: '\\text{Żadne współczynniki nie są przeciwne}', value: 'c' },
                 { label: '\\text{Wszystkie współczynniki są przeciwne}', value: 'd' },
               ]}
              correctAnswer="c"
              explanation="Współczynniki przy x to 2 i 3, przy y to 1 i -2. Żadne z nich nie są przeciwne."
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
                { label: '4x + 2y = 22', value: 'a' },
                { label: '4x + y = 22', value: 'b' },
                { label: '2x + 2y = 22', value: 'c' },
                { label: '4x - 2y = 22', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Mnożymy pierwsze równanie przez 2:<br>$$2 \cdot (2x + y) = 2 \cdot 11$$<br>$$4x + 2y = 22$$"
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
                { label: '7x = 28', value: 'a' },
                { label: '7x = 16', value: 'b' },
                { label: 'x = 4', value: 'c' },
                { label: '4x + 2y + 3x - 2y = 22 + 6', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Dodajemy równania stronami:<br>$$(4x + 2y) + (3x - 2y) = 22 + 6$$<br>$$4x + 2y + 3x - 2y = 28$$<br>$$7x = 28$$"
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
              correctAnswer="4"
              explanation="Rozwiązujemy równanie $$7x = 28$$:<br>$$x = \frac{28}{7}$$<br>$$x = 4$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Podstaw obliczoną wartość <InlineMath math="x = 4" /> do pierwszego równania i oblicz <InlineMath math="y" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość y"
              correctAnswer="3"
              explanation="Podstawiamy $$x = 4$$ do pierwszego równania $$2x + y = 11$$:<br>$$2 \cdot 4 + y = 11$$<br>$$8 + y = 11$$<br>$$y = 11 - 8$$<br>$$y = 3$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} 2x + y = 11 \\ 3x - 2y = 6 \end{cases}"
                         steps={[
               {
                 step: '\\text{Żadne współczynniki nie są przeciwne}',
               },
               {
                 step: '\\text{Mnożymy pierwsze równanie przez 2: 4x + 2y = 22}',
               },
               {
                 step: '\\text{Dodajemy równania: (4x + 2y) + (3x - 2y) = 22 + 6} \\Rightarrow 7x = 28',
               },
               {
                 step: 'x = \\frac{28}{7} = 4',
               },
               {
                 step: '2 \\cdot 4 + y = 11 \\Rightarrow 8 + y = 11 \\Rightarrow y = 3',
               },
             ]}
            solutions={['x = 4, y = 3']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
