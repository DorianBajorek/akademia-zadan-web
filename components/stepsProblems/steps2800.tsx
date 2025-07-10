'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '2800';
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
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie osi symetrii funkcji kwadratowej"
          description="Najmniejsza wartość funkcji $$f(x) = 2(x - m)^2 + m^2 + 3$$ jest równa $$7$$. Wyznacz równanie osi symetrii tej funkcji."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zidentyfikuj najmniejszą wartość funkcji w postaci kanonicznej.
            </StepDescription>
            <ChoiceQuestion
              question="Najmniejsza wartość funkcji kwadratowej <br> $$f(x) = 2(x-m)^2 + m^2 + 3$$  <br> to:"
              choices={[
                { label: 'm^2 + 3', value: 'a' },
                { label: '2m^2 + 3', value: 'b' },
                { label: '2 + m^2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Wierzchołek funkcji $$f(x) = 2(x-m)^2 + m^2 + 3$$ to $$(m, m^2 + 3)$$. Najmniejsza wartość to $$m^2 + 3$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozwiąż równanie na podstawie wartości najmniejszej.
            </StepDescription>
            <ChoiceQuestion
              question="Z równania $$m^2 + 3 = 7$$ wynika, że:"
              choices={[
                { label: 'm = 4, m = -2', value: 'a' },
                { label: 'm = -2, m = 4', value: 'b' },
                { label: 'm = 2, m = -2', value: 'c' },
                { label: 'm = -4, m = 2', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Rozwiązujemy równanie: $$m^2 + 3 = 7 \Rightarrow m^2 = 4 \Rightarrow m = 2$$ lub $$m = -2$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Wyznacz równanie osi symetrii dla wartości <InlineMath math="m = 2" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest równanie osi symetrii tej funkcji dla $$m = 2$$?"
              choices={[
                { label: 'x = -2', value: 'a' },
                { label: 'x = 2', value: 'b' },
                { label: 'y = 2', value: 'c' },
                { label: 'x = 0', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="W postaci kanonicznej $$f(x) = 2(x - m)^2 + ...$$, osią symetrii jest prosta $$x = m$$. Dla $$m = 2$$ mamy $$x = 2$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Wyznacz równanie osi symetrii dla wartości <InlineMath math="m = -2" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest równanie osi symetrii tej funkcji dla $$m = -2$$?"
              choices={[
                { label: 'x = -2', value: 'a' },
                { label: 'x = 2', value: 'b' },
                { label: 'y = 2', value: 'c' },
                { label: 'x = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Osią symetrii jest zawsze $$x = p$$ (pierwsza współrzędna wierzchołka). Dla $$m = -2$$ to $$x = -2$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <StudentNotes
            equation="f(x) = 2(x - m)^2 + m^2 + 3"
            steps={[
              {
                step: '\\text{Wierzchołek funkcji to } (m,\\, m^2 + 3).',
              },
              {
                step: '\\text{Najmniejsza wartość: } m^2 + 3 = 7',
              },
              { step: 'm^2 = 4' },
              { step: 'm = 2 \\text{ lub } m = -2' },
              {
                step: '\\text{Oś symetrii funkcji kwadratowej: } x = m',
              },
              {
                step: '\\text{Możliwe rozwiązania: } x = 2 \\text{ lub } x = -2',
              },
            ]}
            solutions={['x = 2', 'x = -2']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
