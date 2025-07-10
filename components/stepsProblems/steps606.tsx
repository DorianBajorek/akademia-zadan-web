'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równoległość prostych"
          description="Dane są dwie proste o równaniach:<br><br>$$y = (2m + 2)x - 2019 \\ y = (3m - 3)x + 2019$$<br><br>Wyznacz wartość parametru $$m$$, dla której te proste są równoległe."
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
                { label: '2m + 2 = 3m - 3', value: 'a' },
                { label: '2m + 2 = -(3m - 3)', value: 'b' },
                { label: '(2m + 2)(3m - 3) = -1', value: 'c' },
                { label: '2m + 2 + 3m - 3 = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={`Poprawne równanie to: $$2m + 2 = 3m - 3$$ <br>
              Wynika to z warunku równoległości: współczynniki kierunkowe muszą być równe.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="2m + 2 = 3m - 3" />
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: 'm = -1', value: 'a' },
                { label: 'm = 0', value: 'b' },
                { label: 'm = 1', value: 'c' },
                { label: 'm = 5', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$2m + 2 = 3m - 3$$ <br>
              2. Przenosimy wyrazy z m na jedną stronę: <br>
              $$2 + 3 = 3m - 2m$$ <br>
              3. Upraszczamy: <br>
              $$5 = m$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste} \\ y=(2m+2)x-2019 \\ y=(3m-3)x+2019 \\ \text{są równoległe}"
            steps={[
              { step: '\\text{Warunek równoległości: } a_1 = a_2' },
              { step: '2m + 2 = 3m - 3' },
              { step: 'm = 5' },
            ]}
            solutions={['m = 5 \\text{ (Odpowiedź D)}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
