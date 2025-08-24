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
  const taskId = '6000';
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
          equation="\begin{cases} x + y = 2 \\ 2x + 3y = 5 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Z pierwszego równania wyznacz <InlineMath math="x" /> w zależności od <InlineMath math="y" />.
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x = 2 + y', value: 'a' },
                { label: 'x = 2 - y', value: 'b' },
                { label: 'x = y - 2', value: 'c' },
                { label: 'x = -2 - y', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Z równania $$x + y = 2$$ odejmujemy $$y$$ od obu stron:<br>$$x + y - y = 2 - y$$<br>$$x = 2 - y$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw wyznaczone <InlineMath math="x = 2 - y" /> do drugiego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu otrzymujemy:"
              choices={[
                { label: '2(2 + y) + 3y = 5', value: 'a' },
                { label: '2(y - 2) + 3y = 5', value: 'b' },
                { label: '2(2 - y) + 3y = 5', value: 'c' },
                { label: '2(-2 - y) + 3y = 5', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x = 2 - y$$ do drugiego równania $$2x + 3y = 5$$:<br>$$2(2 - y) + 3y = 5$$"
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
              question="Wpisz obliczoną wartość y"
              correctAnswer="1"
              explanation="Rozwiązujemy równanie $$2(2 - y) + 3y = 5$$:<br>$$4 - 2y + 3y = 5$$<br>$$4 + y = 5$$<br>$$y = 5 - 4$$<br>$$y = 1$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podstaw obliczoną wartość <InlineMath math="y = 1" /> do pierwszego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu y = 1 do pierwszego równania otrzymujemy:"
              choices={[
                { label: 'x - 1 = 2', value: 'a' },
                { label: 'x + 1 = -2', value: 'b' },
                { label: 'x - 1 = -2', value: 'c' },
                { label: 'x + 1 = 2', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Podstawiamy $$y = 1$$ do pierwszego równania $$x + y = 2$$:<br>$$x + 1 = 2$$"
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
              question="Wpisz obliczoną wartość x"
              correctAnswer="1"
              explanation="Rozwiązujemy równanie $$x + 1 = 2$$:<br>$$x = 2 - 1$$<br>$$x = 1$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} x + y = 2 \\ 2x + 3y = 5 \end{cases}"
            steps={[
              {
                step: 'x = 2 - y',
              },
              {
                step: '2(2 - y) + 3y = 5',
              },
              {
                step: '4 - 2y + 3y = 5 \\Rightarrow 4 + y = 5 \\Rightarrow y = 1',
              },
              {
                step: 'x + 1 = 2',
              },
              {
                step: 'x = 2 - 1 = 1',
              },
            ]}
            solutions={['x = 1, y = 1']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
