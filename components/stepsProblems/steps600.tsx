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
  const taskId = '600';
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
          description="W kartezjańskim układzie współrzędnych ($$x$$, $$y$$) proste $$k$$ oraz $$l$$ są określone równaniami:
          <br> <br> $$k: y = (3m - 2)x - 2 \\ l: y = (2m + 4)x + 2$$
          <br> <br> 
          Proste $$k$$ oraz $$l$$ są równoległe, gdy liczba $$m$$  jest równa:
          "
        />

        {/* Krok 1 - Warunek równoległości prostych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>Kiedy dwie proste są równoległe?</StepDescription>
            <ChoiceQuestion
              question="Który warunek musi być spełniony, aby proste były równoległe?"
              choices={[
                { label: '\\text{Ich współczynniki kierunkowe są równe}', value: 'a' },
                { label: '\\text{Ich wyrazy wolne są równe}', value: 'b' },
                { label: '\\text{Ich współczynniki kierunkowe są przeciwne}', value: 'c' },
                { label: '\\text{Ich iloczyn współczynników kierunkowych wynosi -1}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Dwie proste są równoległe, gdy mają równe współczynniki kierunkowe."
              img={'/steps-images/rownoleglosc_prostych.png'}
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* Krok 2 - Przyrównanie współczynników */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Przyrównaj współczynniki kierunkowe prostych <InlineMath math="k" /> i{' '}
              <InlineMath math="l" />
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: `(3m - 2)(2m-4) = -1`, value: 'a' },
                { label: `3m - 2 = -(2m + 4)`, value: 'b' },
                { label: `3m-2 = 2m+4`, value: 'c' },
                { label: `3m-2+2m+4 =0 `, value: 'd' },
              ]}
              correctAnswer="c"
              explanation={`Poprawne równanie to: $$3m - 2 = 2m + 4$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$3m-2$$ dla prostej $$k$$ i $$2m+4$$ dla prostej $$l$$`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* Krok 3 - Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="3m - 2 = 2m + 4" />
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: 'm = -6', value: 'a' },
                { label: 'm = -2', value: 'b' },
                { label: 'm = 2', value: 'c' },
                { label: 'm = 6', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki: <br>
              1. $$3m - 2 = 2m + 4$$ <br>
              2. Przenosimy wyrazy z $$m$$ na lewą stronę, a pozostałe na prawą: <br>
              $$3m - 2m = 4 + 2$$ <br>
              3. Upraszczamy: <br>
              $$m = 6$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* Podsumowanie */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste k i l są równoległe}  \\ k: y=(3m-2)x-2 \\ l:y=(2m+4)x+2"
            steps={[
              {
                step: '\\text{Warunek równoległości: współczynniki kierunkowe równe } a_{1}=a_{2}',
              },
              { step: '3m - 2 = 2m + 4' },
              { step: 'm = 6' },
            ]}
            solutions={['m = 6']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
