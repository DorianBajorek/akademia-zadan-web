'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '7000';
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
          title="Rozwiązywanie równania wymiernego"
          description="Rozwiąż równanie wymierne:"
          equation="\frac{3}{3x - 7} = \frac{5x}{x - 8}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od mnożenia na krzyż. Które przekształcenie jest poprawne?
            </StepDescription>
            <ChoiceQuestion
              question="Po pomnożeniu na krzyż otrzymujemy:"
              choices={[
                { label: '3(x - 8) = 5x(3x - 7)', value: 'a' },
                { label: '3(3x - 7) = 5x(x - 8)', value: 'b' },
                { label: '3(x - 8) = 5x(x - 8)', value: 'c' },
                { label: '3(3x - 7) = 5x(3x - 7)', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Mnożąc na krzyż: $$\frac{3}{3x - 7} = \frac{5x}{x - 8}$$<br>$$3(x - 8) = 5x(3x - 7)$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozwiń nawiasy i uprość wyrażenie.
            </StepDescription>
            <ChoiceQuestion
              question="Po rozwinięciu nawiasów otrzymujemy:"
              choices={[
                { label: '3x - 24 = 15x^2 - 35x', value: 'a' },
                { label: '3x - 24 = 15x^2 + 35x', value: 'b' },
                { label: '3x + 24 = 15x^2 - 35x', value: 'c' },
                { label: '3x + 24 = 15x^2 + 35x', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Rozwijamy nawiasy: $$3(x - 8) = 5x(3x - 7)$$<br>$$3x - 24 = 15x^2 - 35x$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Przenieś wszystkie wyrazy na lewą stronę i uprość.
            </StepDescription>
            <ChoiceQuestion
              question="Po przeniesieniu wszystkich wyrazów na lewą stronę otrzymujemy równanie:"
              choices={[
                { label: '15x^2 - 38x + 24 = 0', value: 'a' },
                { label: '15x^2 - 38x - 24 = 0', value: 'b' },
                { label: '15x^2 + 38x + 24 = 0', value: 'c' },
                { label: '15x^2 + 38x - 24 = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Przenosimy wszystko na lewą stronę: $$3x - 24 = 15x^2 - 35x$$<br>$$15x^2 - 38x + 24 = 0$$<br>Otrzymujemy równanie kwadratowe w postaci standardowej."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Rozwiąż równanie kwadratowe i znajdź wszystkie rozwiązania.
            </StepDescription>
            <ChoiceQuestion
              question="Ile rozwiązań ma równanie kwadratowe?"
              choices={[
                { label: '0 \\text{ rozwiązań}', value: 'a' },
                { label: '1 \\text{ rozwiązanie}', value: 'b' },
                { label: '2 \\text{ rozwiązania}', value: 'c' },
                { label: '3 \\text{ rozwiązania}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Równanie $$15x^2 - 38x + 24 = 0$$ ma $$Δ = 1444 - 1440 = 4 > 0$$, więc ma $$2$$ rozwiązania: $$x = \frac{6}{5} = 1.2$$ i $$x = \frac{4}{3}$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Sprawdź, które z rozwiązań spełnia równanie wyjściowe.
            </StepDescription>
            <ChoiceQuestion
              question="Które z rozwiązań spełnia równanie wyjściowe?"
              choices={[
                { label: '\\text{Tylko x = 1.2}', value: 'a' },
                { label: '\\text{Tylko x =} \\frac{4}{3}', value: 'b' },
                { label: '\\text{Oba: x = 1.2 i } x= \\frac{4}{3}', value: 'c' },
                { label: '\\text{Żadne z powyższych}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Sprawdzamy podstawiając do równania $$\frac{3}{3x - 7} = \frac{5x}{x - 8}$$"
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="\frac{3}{3x - 7} = \frac{5x}{x - 8}"
            steps={[
              {
                step: '3(x - 8) = 5x(3x - 7)',
              },
              {
                step: '3x - 24 = 15x^2 - 35x',
              },
              {
                step: '15x^2 - 38x + 24 = 0',
              },
              {
                step: '\\text{Równanie ma } 2 \\text{ rozwiązania: } x = 1.2  \\text{ i }  x = \\frac{4}{3}',
              },
              {
                step: '\\text{Oba rozwiązania spełniają równanie wyjściowe}',
              }
            ]}
            solutions={['x = 1.2', 'x = \\frac{4}{3}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
