'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1302';
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
          title="Równanie z wartością bezwzględną"
          description="Rozwiąż równanie:"
          equation="|\frac{1}{2}x - 1| = 3"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Jak należy rozbić równanie z wartością bezwzględną na przypadki?
            </StepDescription>
            <ChoiceQuestion
              question="Które rozbicie równania jest poprawne?"
              choices={[
                {
                  label: '\\frac{1}{2}x + 1 = 3 \\ , \\ \\frac{1}{2}x - 1 = -3',
                  value: 'a',
                },
                {
                  label: '\\frac{1}{2}x - 1 = 3 \\ , \\ \\frac{1}{2}x - 1 = -3',
                  value: 'b',
                },
                { label: '\\frac{1}{2}x - 1 = 3', value: 'c' },
                { label: '\\frac{1}{2}x - 1 = -3', value: 'd' },
              ]}
              correctAnswer="b"
              explanation={`Równanie z wartością bezwzględną $$|\\frac{1}{2}x - 1| = 3$$ 
rozbijamy na dwa przypadki: 
$$\\frac{1}{2}x - 1 = 3$$ lub $$\\frac{1}{2}x - 1 = -3$$.`}
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicja-wartosci-bezwzglednej.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>Rozwiąż pierwsze równanie.</StepDescription>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$\frac{1}{2}x - 1 = 3$$?"
              correctAnswer="8"
              explanation={`Rozwiązujemy równanie:  
$$\\frac{1}{2}x - 1 = 3$$  
Dodajemy 1 do obu stron:  
$$\\frac{1}{2}x = 4$$  
Mnożymy przez 2:  
$$x = 8$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>Rozwiąż drugie równanie.</StepDescription>
            <NumericQuestion
              question="Jakie jest rozwiązanie równania $$\frac{1}{2}x - 1 = -3$$?"
              correctAnswer="-4"
              explanation={`Rozwiązujemy równanie:  
$$\\frac{1}{2}x - 1 = -3$$  
Dodajemy 1 do obu stron:  
$$\\frac{1}{2}x = -2$$  
Mnożymy przez 2:  
$$x = -4$$.`}
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Wskaż prawidłowy zbiór rozwiązań równania.
            </StepDescription>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem równania $$|\frac{1}{2}x - 1|= 3$$?"
              choices={[
                { label: 'x ∈ ∅', value: 'a' },
                { label: 'x = -4', value: 'b' },
                { label: 'x ∈ ℝ', value: 'c' },
                { label: 'x = -4 \\ \\ x = 8', value: 'd' },
              ]}
              correctAnswer="d"
              explanation={`Rozwiązaniem równania $$|\\frac{1}{2}x - 1|= 3$$ są dwie liczby:
$$x=-4$$ oraz $$x=8$$.`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="|\frac{1}{2}x - 1|= 3"
            steps={[
              {
                step: '\\frac{1}{2}x - 1 = 3 \\ \\text{lub} \\ \\frac{1}{2}x - 1 = -3',
              },
              {
                step: '\\frac{1}{2}x = 4 \\ \\text{lub} \\ \\frac{1}{2}x = -2',
              },
              { step: 'x = 8 \\ \\ \\text{lub} \\ \\ x = -4' },
            ]}
            solutions={['x \\in \\{-4, 8\\}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
