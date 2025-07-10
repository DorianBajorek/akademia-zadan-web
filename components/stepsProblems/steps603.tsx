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
  const taskId = '603';
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
          title="Równoległość prostych"
          description="Prosta $$l$$ o równaniu:
          <br><br> $$y = m^2 x + 3$$
          <br><br>
          jest równoległa do prostej $$k$$ o równaniu:
          <br><br> $$y = (4m - 4)x - 3$$
          <br><br>
          Kiedy prosta $$l$$ jest równoległa do prostej $$k$$
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
              { label: '\\text{Suma ich współczynników kierunkowych wynosi 0}', value: 'c' },
              { label: '\\text{Iloczyn ich współczynników kierunkowych wynosi -1}', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="Dwie proste są równoległe, gdy mają równe współczynniki kierunkowe."
            img="/steps-images/rownoleglosc_prostych.png"
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Przyrównaj współczynniki kierunkowe prostych <InlineMath math="l" /> i{' '}
              <InlineMath math="k" />
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: 'm^2 - 4m = 0', value: 'a' },
                { label: 'm^2 = -4m + 4', value: 'b' },
                { label: 'm^2 + 4m - 4 = 0', value: 'c' },
                { label: 'm^2 = 4m - 4', value: 'd' },
              ]}
              correctAnswer="d"
              explanation={`Poprawne równanie to: $$m^2 = 4m - 4$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$m^2$$ dla prostej $$l$$ i $$4m - 4$$ dla prostej $$k$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="m^2 = 4m - 4" />
            </StepDescription>
            <ChoiceQuestion
              question="Jakie rozwiązania ma to równanie?"
              choices={[
                { label: 'm = 2', value: 'a' },
                { label: 'm = 2 \\text{ lub } m = -2', value: 'b' },
                { label: 'm = 2 + 2\\sqrt{2} \\text{ lub }  m = 2 - 2\\sqrt{2}', value: 'c' },
                { label: 'm = -2 - 2\\sqrt{2} \\text{ lub } m = -2 + 2\\sqrt{2}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$m^2 - 4m + 4 = 0$$ <br>
              2. Obliczamy wyróżnik: <br>
              $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0$$ <br>
              3. Ponieważ $$\Delta = 0$$, równanie ma jedno podwójne rozwiązanie: <br>
              $$m = \frac{4}{2} = 2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>Która z podanych opcji jest poprawna?</StepDescription>
            <ChoiceQuestion
              question="Wybierz właściwą odpowiedź:"
              choices={[
                { label: 'A. \\ m = 2', value: 'a' },
                { label: 'B. \\ m = -2', value: 'b' },
                { label: 'C. \\ m = -2 - 2√2', value: 'c' },
                { label: 'D. \\ m = 2 + 2√2', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Jedynym poprawnym rozwiązaniem jest $$m = 2$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\text{Proste k i l są równoległe} \\ k: y = m^2 x + 3 \\ l:y=(4m-4)x-3"
            steps={[
              {
                step: '\\text{Warunek równoległości: współczynniki kierunkowe równe } a_{1}=a_{2}',
              },
              { step: 'm^2 = 4m - 4' },
              { step: 'm^2 - 4m + 4 = 0' },
              { step: 'Δ = 0 \\Rightarrow m = 2' },
            ]}
            solutions={['m = 2 \\text{ (Odpowiedź A)}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
