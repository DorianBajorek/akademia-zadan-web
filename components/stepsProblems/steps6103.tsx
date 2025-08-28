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
  const taskId = '6103';
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
          equation="\begin{cases} 2x + 4y = 2 \\ 6x + 4y = 8 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Sprawdź, czy współczynniki przy jednej ze zmiennych są przeciwne.
            </StepDescription>
            <ChoiceQuestion
              question="Które współczynniki są przeciwne?"
                             choices={[
                 { label: '\\text{Współczynniki przy y (4 i 4)}', value: 'a' },
                 { label: '\\text{Żadne współczynniki nie są przeciwne}', value: 'b' },
                 { label: '\\text{Wszystkie współczynniki są przeciwne}', value: 'c' },
                 { label: '\\text{Współczynniki przy x (2 i 6)}', value: 'd' },
               ]}
                             correctAnswer="b"
              explanation="Współczynniki przy x to 2 i 6, przy y to 4 i 4. Żadne z nich nie są przeciwne."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Pomnóż pierwsze równanie przez -1, aby uzyskać przeciwne współczynniki przy y.
            </StepDescription>
            <ChoiceQuestion
              question="Po pomnożeniu pierwszego równania przez -1 otrzymujemy:"
                             choices={[
                 { label: '2x - 4y = -2', value: 'a' },
                 { label: '-2x + 4y = -2', value: 'b' },
                 { label: '2x + 4y = -2', value: 'c' },
                 { label: '-2x - 4y = -2', value: 'd' },
               ]}
              correctAnswer="d"
              explanation="Mnożymy pierwsze równanie przez -1:<br>$$-1 \cdot (2x + 4y) = -1 \cdot 2$$<br>$$-2x - 4y = -2$$"
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
                { label: '4x = 10', value: 'a' },
                { label: 'x = 3/2', value: 'b' },
                { label: '-2x - 4y + 6x + 4y = -2 + 8', value: 'c' },
                { label: '4x = 6', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Dodajemy równania stronami:<br>$$(-2x - 4y) + (6x + 4y) = -2 + 8$$<br>$$-2x - 4y + 6x + 4y = 6$$<br>$$4x = 6$$"
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
               question="Wpisz obliczoną wartość x (jako ułamek zwykły, np. a/b)"
               correctAnswer="3/2"
               explanation="Rozwiązujemy równanie $$4x = 6$$:<br>$$x = \frac{6}{4}$$<br>$$x = \frac{3}{2}$$"
               onComplete={() => handleStageComplete(4)}
             />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Podstaw obliczoną wartość <InlineMath math="x = \frac{3}{2}" /> do pierwszego równania i oblicz <InlineMath math="y" />.
            </StepDescription>
                         <NumericQuestion
               question="Wpisz obliczoną wartość y (jako ułamek zwykły, np. a/b)"
               correctAnswer="-1/4"
               explanation="Podstawiamy $$x = \frac{3}{2}$$ do pierwszego równania $$2x + 4y = 2$$:<br>$$2 \cdot \frac{3}{2} + 4y = 2$$<br>$$3 + 4y = 2$$<br>$$4y = 2 - 3$$<br>$$4y = -1$$<br>$$y = -\frac{1}{4}$$"
               onComplete={() => handleStageComplete(5)}
             />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} 2x + 4y = 2 \\ 6x + 4y = 8 \end{cases}"
                         steps={[
               {
                 step: '\\text{Żadne współczynniki nie są przeciwne}',
               },
               {
                 step: '\\text{Mnożymy pierwsze równanie przez -1: -2x - 4y = -2}',
               },
               {
                 step: '\\text{Dodajemy równania: (-2x - 4y) + (6x + 4y) = -2 + 8} \\Rightarrow 4x = 6',
               },
               {
                 step: 'x = \\frac{6}{4} = \\frac{3}{2}',
               },
               {
                 step: '2 \\cdot \\frac{3}{2} + 4y = 2 \\Rightarrow 3 + 4y = 2 \\Rightarrow y = -\\frac{1}{4}',
               },
             ]}
            solutions={['x = 3/2, y = -1/4']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
