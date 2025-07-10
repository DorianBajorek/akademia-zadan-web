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
          title="Prostopadłość prostych"
          description="Proste $$k$$ oraz $$l$$ są określone równaniami:<br><br>$$k: y = (m + 1)x + 7 \\ l: y = -2x + 7$$<br><br>Wyznacz wartość parametru $$m$$, dla której proste $$k$$ i $$l$$ są prostopadłe."
        />

        {completedStages.length === 0 && (
          <StepDescription stepNumber={1}>Kiedy dwie proste są prostopadłe?</StepDescription>
        )}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Który warunek musi być spełniony, aby proste były prostopadłe?"
            choices={[
              { label: '\\text{Iloczyn współczynników kierunkowych wynosi -1}', value: 'a' },
              { label: '\\text{Współczynniki kierunkowe są równe}', value: 'b' },
              { label: '\\text{Suma współczynników kierunkowych wynosi 0}', value: 'c' },
              { label: '\\text{Wyrazy wolne są równe}', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="Dwie proste są prostopadłe, gdy iloczyn ich współczynników kierunkowych wynosi -1."
            onComplete={() => handleStageComplete(1)}
            img="/steps-images/proste_prostopadle.png"
          />
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zapisz warunek prostopadłości dla podanych prostych
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie jest poprawne?"
              choices={[
                { label: '(m + 1) \\cdot (-2) = 1', value: 'a' },
                { label: '(m + 1) \\cdot (-2) = -1', value: 'b' },
                { label: '(m + 1) + (-2) = -1', value: 'c' },
                { label: '(m + 1) = -2', value: 'd' },
              ]}
              correctAnswer="b"
              explanation={`Poprawne równanie to: $$(m + 1) \\cdot (-2) = -1$$ <br>
              Wynika to z warunku prostopadłości: iloczyn współczynników kierunkowych musi być równy -1. <br> 
              Współczynnik kierunkowy prostej $$k$$ to $$(m+1)$$, a współczynnik kierunkowy prostej $$l$$ to $$-2$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie <InlineMath math="(m + 1) \\cdot (-2) = -1" />
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość m?"
              choices={[
                { label: 'm = -\\frac{1}{2}', value: 'a' },
                { label: 'm = \\frac{1}{2}', value: 'b' },
                { label: 'm = -3', value: 'c' },
                { label: 'm = 1', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Kolejne kroki rozwiązania: <br>
              1. $$(m + 1) \\cdot (-2) = -1$$ <br>
              2. Dzielimy obie strony przez -2: <br>
              $$m + 1 = \\frac{-1}{-2} = \\frac{1}{2}$$ <br>
              3. Odejmujemy 1 od obu stron: <br>
              $$m = \\frac{1}{2} - 1 = -\\frac{1}{2}$$"
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
                { label: 'A. m = -\\frac{1}{2}', value: 'a' },
                { label: 'B. m = \\frac{1}{2}', value: 'b' },
                { label: 'C. m = -3', value: 'c' },
                { label: 'D. m = 1', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawnym rozwiązaniem jest $$m = -\\frac{1}{2}$$, co odpowiada opcji A."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\\text{Proste } k \\text{ i } l \\text{ są prostopadłe} \\ k: y = (m + 1)x + 7 \\ l: y = -2x + 7"
            steps={[
              { step: '\\text{Warunek prostopadłości: } a_1 \\cdot a_2 = -1' },
              { step: '(m + 1) \\cdot (-2) = -1' },
              { step: 'm + 1 = \\frac{1}{2}' },
              { step: 'm = -\\frac{1}{2}' },
            ]}
            solutions={['m = -\\frac{1}{2} \\text{ (Odpowiedź A)}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
