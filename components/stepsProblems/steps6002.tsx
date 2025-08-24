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
  const taskId = '6002';
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
          equation="\begin{cases} 3x - 5y = -7 \\ 4x + 2y = 18 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Z pierwszego równania wyznacz <InlineMath math="x" /> w zależności od <InlineMath math="y" />.
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x = \\frac{-7 + 5y}{3}', value: 'a' },
                { label: 'x = \\frac{-7 - 5y}{3}', value: 'b' },
                { label: 'x = \\frac{7 + 5y}{3}', value: 'c' },
                { label: 'x = \\frac{7 - 5y}{3}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Z równania $$3x - 5y = -7$$ dodajemy $$5y$$ do obu stron:<br>$$3x - 5y + 5y = -7 + 5y$$<br>$$3x = -7 + 5y$$<br>$$x = \frac{-7 + 5y}{3}$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw wyznaczone <InlineMath math="x = \frac{-7 + 5y}{3}" /> do drugiego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu otrzymujemy:"
              choices={[
                { label: '4(\\frac{-7 + 5y}{3}) + 2y = 18', value: 'a' },
                { label: '4(\\frac{-7 - 5y}{3}) + 2y = 18', value: 'b' },
                { label: '4(\\frac{7 + 5y}{3}) + 2y = 18', value: 'c' },
                { label: '4(\\frac{7 - 5y}{3}) + 2y = 18', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x = \frac{-7 + 5y}{3}$$ do drugiego równania $$4x + 2y = 18$$:<br>$$4(\frac{-7 + 5y}{3}) + 2y = 18$$"
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
              correctAnswer="41/13"
              explanation="Rozwiązujemy równanie $$4(\frac{-7 + 5y}{3}) + 2y = 18$$:<br>$$\frac{-28 + 20y}{3} + 2y = 18$$<br>$$\frac{-28 + 20y + 6y}{3} = 18$$<br>$$\frac{-28 + 26y}{3} = 18$$<br>$$-28 + 26y = 54$$<br>$$26y = 54 + 28$$<br>$$26y = 82$$<br>$$y = \frac{41}{13}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podstaw obliczoną wartość <InlineMath math="y = \frac{41}{13}" /> do pierwszego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu $$y = \frac{41}{13}$$ do pierwszego równania otrzymujemy:"
              choices={[
                { label: '3x - 5\\cdot\\frac{41}{13} = -7', value: 'a' },
                { label: '3x + 5\\cdot\\frac{41}{13} = -7', value: 'b' },
                { label: '3x - 5\\cdot\\frac{41}{13} = 7', value: 'c' },
                { label: '3x + 5\\cdot\\frac{41}{13} = 7', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Wystarczy podstawić za y naszą wyliczoną wartość do pierwszego równania i otrzymujemy wtedy: $$3x - 5\cdot\frac{41}{13} = -7$$"
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
              correctAnswer="38/13"
              explanation="Rozwiązujemy równanie $$3x - 5\cdot\frac{41}{13} = -7$$:<br>$$3x = -7 + 5\cdot\frac{41}{13}$$<br>$$3x = \frac{-91 + 205}{13}$$<br>$$3x = \frac{114}{13}$$<br>$$x = \frac{38}{13}$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} 3x - 5y = -7 \\ 4x + 2y = 18 \end{cases}"
            steps={[
              {
                step: 'x = \\frac{-7 + 5y}{3}',
              },
              {
                step: '4(\\frac{-7 + 5y}{3}) + 2y = 18',
              },
              {
                step: '\\frac{-28 + 26y}{3} = 18 \\Rightarrow y = 3',
              },
              {
                step: '3x - 15 = -7',
              },
              {
                step: 'x = \\frac{8}{3}',
              },
            ]}
            solutions={['x = \\frac{8}{3}, y = 3']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
