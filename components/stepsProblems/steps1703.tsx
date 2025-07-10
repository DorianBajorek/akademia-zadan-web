'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
const Page = () => {
  const { token } = useAuth();
  const taskId = '1703';
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
      if (updated.length === 1 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Funkcja kwadratowa z parametrem"
          description="Dla jakiego parametru $$m$$ funkcja kwadratowa $$f(x)=2(x-2)\left(x-\frac{m+1}{3}\right)$$ ma dokładnie jedno miejsce zerowe?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>Zidentyfikuj miejsca zerowe funkcji</StepDescription>
            <ChoiceQuestion
              question="Jakie są miejsca zerowe tej funkcji?"
              choices={[
                { label: 'x_1 = 2, x_2 = \\frac{m-1}{3}', value: 'a' },
                { label: 'x_1 = -2, x_2 = \\frac{m+1}{3}', value: 'b' },
                { label: 'x_1 = 2, x_2 = \\frac{m+1}{3}', value: 'c' },
                { label: 'x_1 = 2, x_2 = \\frac{m+1}{2}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Z postaci iloczynowej $$f(x)=2(x-2)(x-\frac{m+1}{3})$$ odczytujemy miejsca zerowe: $$x_1=2, x_2=\frac{m+1}{3}$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Funkcja kwadratowa ma jedno miejsce zerowe, jeśli <InlineMath math="x_1=x_2" />.
            </StepDescription>
            <ChoiceQuestion
              question="Rozwiąż równanie $$2 = \frac{m+1}{3}$$"
              choices={[
                { label: 'm = 1', value: 'a' },
                { label: 'm = 5', value: 'b' },
                { label: 'm = -7', value: 'c' },
                { label: 'm = 7', value: 'd' },
              ]}
              correctAnswer="b"
              explanation=" Rozwiązujemy: 
              <br> $$2 = \frac{m+1}{3}$$
              <br>$$6 = m+1 ⇒ m = 5$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x)=2(x-2)(x-(m+1)/3)"
            steps={[
              { step: '\\text{Warunek na jedno miejsce zerowe: } x_1 = x_2' },
              { step: '2 = \\frac{m+1}{3}' },
              { step: 'm + 1 = 6' },
              { step: 'm = 5' },
            ]}
            solutions={['m = 5']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
