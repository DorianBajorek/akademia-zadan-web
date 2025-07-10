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
  const taskId = '605';
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
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równoległość prostych"
          description="Dane są dwie proste o równaniach:
          <br><br> $$y = (m + 2)x + 3 \\ y = (2m - 1)x - 3$$
          <br><br>
          Wyznacz wartość parametru $$m$$ , dla której te proste są równoległe.
          "
        />

        {completedStages.length === 0 && (
          <StepDescription stepNumber={1}>Kiedy dwie proste są równoległe?</StepDescription>
        )}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Który warunek musi być spełniony, aby proste były równoległe?"
            choices={[
              { label: '\\text{Ich współczynniki kierunkowe są równe}', value: 'a' },
              { label: '\\text{Ich wyrazy wolne są równe}', value: 'b' },
              { label: '\\text{Suma współczynników kierunkowych wynosi 0}', value: 'c' },
              { label: '\\text{Iloczyn współczynników kierunkowych wynosi -1}', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="Dwie proste są równoległe, gdy mają równe współczynniki kierunkowe."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Przyrównaj współczynniki kierunkowe prostych
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: 'm + 2 = -(2m - 1)', value: 'a' },
                { label: 'm + 2 = 2m - 1', value: 'b' },
                { label: '(m + 2)(2m - 1) = -1', value: 'c' },
                { label: 'm + 2 + 2m - 1 = 0', value: 'd' },
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$m + 2 = 2m - 1$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$m+2$$ dla pierwszej prostej i $$2m-1$$ dla drugiej prostej.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="m + 2 = 2m - 1" />
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: 'm = 2', value: 'a' },
                { label: 'm = 3', value: 'b' },
                { label: 'm = 0', value: 'c' },
                { label: 'm = 1', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$m + 2 = 2m - 1$$ <br>
              2. Przenosimy wyrazy z m na jedną stronę: <br>
              $$2 + 1 = 2m - m$$ <br>
              3. Upraszczamy: <br>
              $$3 = m$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste} \\ y=(m+2)x+3 \\ y=(2m-1)x-3 \\ \text{są równoległe}"
            steps={[
              { step: '\\text{Warunek równoległości: } a_1 = a_2' },
              { step: 'm + 2 = 2m - 1' },
              { step: 'm = 3' },
            ]}
            solutions={['m = 3 \\text{ (Odpowiedź B)}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
