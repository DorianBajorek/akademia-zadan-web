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
          description="Dane są dwie proste o równaniach:<br><br>$$y = (4m + 1)x - 19 \\ y = (5m - 4)x + 20$$<br><br>Wyznacz wartość parametru $$m$$, dla której te proste są równoległe."
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
                { label: '(4m + 1)(5m - 4) = -1', value: 'a' },
                { label: '4m + 1 = -(5m - 4)', value: 'b' },
                { label: '4m + 1 = 5m - 4', value: 'c' },
                { label: '4m + 1 + 5m - 4 = 0', value: 'd' },
              ]}
              correctAnswer="c"
              explanation={`Poprawne równanie to: $$4m + 1 = 5m - 4$$ <br>
              Porównujemy współczynniki kierunkowe prostych, które są równe $$4m+1$$ dla pierwszej prostej i $$5m-4$$ dla drugiej prostej.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="4m + 1 = 5m - 4" />
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: 'm = 5', value: 'a' },
                { label: 'm = -\\frac{1}{4}', value: 'b' },
                { label: 'm = \\frac{5}{4}', value: 'c' },
                { label: 'm = -5', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$4m + 1 = 5m - 4$$ <br>
              2. Przenosimy wyrazy z m na jedną stronę: <br>
              $$1 + 4 = 5m - 4m$$ <br>
              3. Upraszczamy: <br>
              $$5 = m$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Proste} \\ y=(4m+1)x-19 \\ y=(5m-4)x+20 \\ \text{są równoległe}"
            steps={[
              { step: '\\text{Warunek równoległości: } a_1 = a_2' },
              { step: '4m + 1 = 5m - 4' },
              { step: 'm = 5' },
            ]}
            solutions={['m = 5 \\text{ (Odpowiedź A)}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
