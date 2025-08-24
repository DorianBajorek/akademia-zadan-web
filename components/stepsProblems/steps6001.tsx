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
  const taskId = '6001';
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
          title="Rozwiązywanie układu równań metodą podstawiania"
          description="Rozwiąż układ równań metodą podstawiania:"
          equation="\begin{cases} x + y = 6 \\ 2x - y = 4 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Z pierwszego równania wyznacz <InlineMath math="x" /> w zależności od <InlineMath math="y" />.
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x = 6 + y', value: 'a' },
                { label: 'x = y - 6', value: 'b' },
                { label: 'x = 6 - y', value: 'c' },
                { label: 'x = -6 - y', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Z równania $$x + y = 6$$ odejmujemy $$y$$ od obu stron:<br>$$x + y - y = 6 - y$$<br>$$x = 6 - y$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw wyznaczone <InlineMath math="x = 6 - y" /> do drugiego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu otrzymujemy:"
              choices={[
                { label: '2(6 + y) - y = 4', value: 'a' },
                { label: '2(y - 6) - y = 4', value: 'b' },
                { label: '2(6 - y) - y = 4', value: 'c' },
                { label: '2(-6 - y) - y = 4', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x = 6 - y$$ do drugiego równania $$2x - y = 4$$:<br>$$2(6 - y) - y = 4$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Oblicz wartość zmiennej <InlineMath math="y" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość y (w formacie ułamka a/b)"
              correctAnswer="8/3"
              explanation="Rozwiązujemy równanie $$2(6 - y) - y = 4$$:<br>$$12 - 2y - y = 4$$<br>$$12 - 3y = 4$$<br>$$-3y = 4 - 12$$<br>$$-3y = -8$$<br>$$y = \frac{8}{3}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podstaw obliczoną wartość <InlineMath math="y = \frac{8}{3}" /> do pierwszego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu y = 8/3 do pierwszego równania otrzymujemy:"
              choices={[
                { label: 'x - \\frac{8}{3} = 6', value: 'a' },
                { label: 'x + \\frac{8}{3} = -6', value: 'b' },
                { label: 'x - \\frac{8}{3} = -6', value: 'c' },
                { label: 'x + \\frac{8}{3} = 6', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Podstawiamy $$y = \frac{8}{3}$$ do pierwszego równania $$x + y = 6$$:<br>$$x + \frac{8}{3} = 6$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Oblicz wartość zmiennej <InlineMath math="x" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość x (w formacie ułamka a/b)"
              correctAnswer="10/3"
              explanation="Rozwiązujemy równanie $$x + \frac{8}{3} = 6$$:<br>$$x = 6 - \frac{8}{3}$$<br>$$x = \frac{18}{3} - \frac{8}{3}$$<br>$$x = \frac{10}{3}$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} x + y = 6 \\ 2x - y = 4 \end{cases}"
            steps={[
              {
                step: 'x = 6 - y',
              },
              {
                step: '2(6 - y) - y = 4',
              },
              {
                step: '12 - 2y - y = 4 \\Rightarrow 12 - 3y = 4 \\Rightarrow y = \\frac{8}{3}',
              },
              {
                step: 'x + \\frac{8}{3} = 6',
              },
              {
                step: 'x = 6 - \\frac{8}{3} = \\frac{10}{3}',
              },
            ]}
            solutions={['x = \\frac{10}{3}, y = \\frac{8}{3}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
