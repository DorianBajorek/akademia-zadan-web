'use client';

import { useEffect, useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

const Page = () => {
  const taskId = '900';
  const [problemSolved, setProblemSolved] = useState(false);

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const { token } = useAuth();

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (completedStages.length === 3) {
      solveProblem('500', token);
    }
  }, [completedStages, token]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rozwiązywanie równania procentowego
        </h2>

        <TaskDescription
          title="Równanie procentowe"
          description="$$30\%$$ liczby $$x$$ jest o $$2730$$ mniejsze od liczby $$x$$. Liczba $$x$$ jest równa?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zapisz równanie matematyczne na podstawie treści zadania.
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie poprawnie przedstawia sytuację z zadania?"
              choices={[
                { label: '0.3x = x - 2730', value: 'a' },
                { label: '30x = x - 2730', value: 'b' },
                { label: '0.3x = 2730 - x', value: 'c' },
                { label: '30x = 2730 - x', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne równanie to $$0.3x = x - 2730$$, ponieważ $$30\\%$$ liczby $$x$$ zapisujemy jako $$0.3x$$, a 'jest o $$2730$$ mniejsze od $$x$$' oznacza $$x - 2730$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Przekształć równanie <InlineMath math="0.3x = x - 2730" />.
            </StepDescription>
            <ChoiceQuestion
              question="Który krok rozwiązania jest poprawny?"
              choices={[
                { label: '0.3x + x = 2730', value: 'a' },
                { label: '0.3x - x = -2730', value: 'b' },
                { label: '0.3x = 2730', value: 'c' },
                { label: 'x - 0.3x = 2730', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawny pierwszy krok to przeniesienie $$x$$ na lewą stronę: $$0.3x - x = -2730$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="0.3x - x = -2730" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania?"
              choices={[
                { label: 'x = 3900', value: 'a' },
                { label: 'x = 1911', value: 'b' },
                { label: 'x = 9100', value: 'c' },
                { label: 'x = 2100', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Rozwiązanie: $$-0.7x = -2730$$, więc $$x = \frac{-2730}{-0.7} = 3900$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="30\% \text{ liczby } x \text{ jest o } 2730 \text{ mniejsze od liczby } x"
            steps={[
              {
                step: '0.3x = x - 2730',
              },
              {
                step: '0.3x - x = -2730 \\Rightarrow -0.7x = -2730',
              },
              {
                step: 'x = \\frac{-2730}{-0.7} = 3900',
              },
            ]}
            solutions={['3900']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
