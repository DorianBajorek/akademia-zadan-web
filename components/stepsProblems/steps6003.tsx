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
  const taskId = '6003';
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
          equation="\begin{cases} 2(x - 3) - y = -5 \\ 3x - (2y + 1) = 8 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Uprość nawiasy w obu równaniach.
            </StepDescription>
            <ChoiceQuestion
              question="Po uproszczeniu nawiasów otrzymujemy układ:"
                             choices={[
                 { label: '\\begin{cases} 2x - y = 1 \\\\ 3x - 2y = 9 \\end{cases}', value: 'a' },
                 { label: '\\begin{cases} 2x - y = -11 \\\\ 3x + 2y = 7 \\end{cases}', value: 'b' },
                 { label: '\\begin{cases} 2x - y = 1 \\\\ 3x + 2y = 9 \\end{cases}', value: 'c' },
                 { label: '\\begin{cases} 2x - y = -11 \\\\ 3x - 2y = 7 \\end{cases}', value: 'd' },
               ]}
              correctAnswer="a"
                             explanation="Upraszczamy nawiasy $$\\$$Pierwsze równanie:<br>$$2(x - 3) - y = 2x - 6 - y = -5$$<br>$$2x - y = 1$$ $$\\$$Drugie równanie:<br>$$3x - (2y + 1) = 3x - 2y - 1 = 8$$<br>$$3x - 2y = 9$$<br><br>Otrzymujemy układ:<br>$$\begin{cases} 2x - y = 1 \\ 3x - 2y = 9 \end{cases}$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
                         <StepDescription stepNumber={2}>
               Z pierwszego równania wyznacz <InlineMath math="x" /> w zależności od <InlineMath math="y" />.
             </StepDescription>
             <ChoiceQuestion
               question="Które przekształcenie jest poprawne?"
               choices={[
                 { label: 'x = \\frac{1 + y}{2}', value: 'a' },
                 { label: 'x = \\frac{1 - y}{2}', value: 'b' },
                 { label: 'x = \\frac{-1 + y}{2}', value: 'c' },
                 { label: 'x = \\frac{-1 - y}{2}', value: 'd' },
               ]}
               correctAnswer="a"
               explanation="Z równania $$2x - y = 1$$ dodajemy $$y$$ do obu stron:<br>$$2x - y + y = 1 + y$$<br>$$2x = 1 + y$$<br>$$x = \frac{1 + y}{2}$$"
               onComplete={() => handleStageComplete(2)}
             />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Podstaw wyznaczone <InlineMath math="x = \frac{1 + y}{2}" /> do drugiego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Po podstawieniu otrzymujemy:"
              choices={[
                { label: '3\\frac{1 + y}{2} - 2y = 9', value: 'a' },
                { label: '3\\frac{1 - y}{2} - 2y = 9', value: 'b' },
                { label: '3\\frac{1 + y}{2} + 2y = 9', value: 'c' },
                { label: '3\\frac{1 - y}{2} + 2y = 9', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x = \frac{1 + y}{2}$$ do drugiego równania $$3x - 2y = 9$$:<br>$$3(\frac{1 + y}{2}) - 2y = 9$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Oblicz wartość zmiennej <InlineMath math="y" />.
            </StepDescription>
            <NumericQuestion
              question="Wpisz obliczoną wartość y"
              correctAnswer="-15"
              explanation="Rozwiązujemy równanie $$3(\frac{1 + y}{2}) - 2y = 9$$:<br>$$\frac{3 + 3y}{2} - 2y = 9$$<br>$$\frac{3 + 3y - 4y}{2} = 9$$<br>$$\frac{3 - y}{2} = 9$$<br>$$3 - y = 18$$<br>$$-y = 15$$<br>$$y = -15$$"
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
              correctAnswer="-7"
              explanation="Podstawiamy $$y = -15$$ do $$x = \frac{1 + y}{2}$$:<br>$$x = \frac{1 + (-15)}{2}$$<br>$$x = \frac{-14}{2}$$<br>$$x = -7$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\begin{cases} 2(x - 3) - y = -5 \\ 3x - (2y + 1) = 8 \end{cases}"
                         steps={[
               {
                 step: '\\begin{cases} 2x - y = 1 \\\\ 3x - 2y = 9 \\end{cases}',
               },
               {
                 step: 'x = \\frac{1 + y}{2}',
               },
               {
                 step: '3(\\frac{1 + y}{2}) - 2y = 9',
               },
               {
                 step: '\\frac{3 - y}{2} = 9 \\Rightarrow y = -15',
               },
               {
                 step: 'x = \\frac{1 + (-15)}{2} = -7',
               },
             ]}
            solutions={['x = -7, y = -15']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
