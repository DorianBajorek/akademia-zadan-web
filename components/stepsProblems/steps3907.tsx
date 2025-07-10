'use client';

import { useState } from 'react';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie miejsc zerowych funkcji na podstawie wykresu"
          description="Wyznacz miejsca zerowe poniższej funkcji"
          imageUrl="/steps-images/steps3907.jpeg"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Zidentyfikuj punkty przecięcia wykresu z osią OX
              </StepDescription>
              <ChoiceQuestion
                question="W których punktach wykres przecina oś OX?"
                choices={[
                  { label: 'x = -5, x = -2, x = 3, x = 5', value: 'a' },
                  { label: 'x = -2, x = 3, x = 5', value: 'b' },
                  { label: 'x = -5, x = -2, x = 0, x = 3, x = 5', value: 'c' },
                  { label: 'x = -2, x = 0, x = 3, x = 5', value: 'd' },
                ]}
                correctAnswer="b"
                explanation={
                  'Miejsca zerowe to punkty przecięcia funkcji z osią OX. Omówmy wszystkich kandydatów:<br><br>' +
                  '$$x = -5$$: Nie jest miejscem zerowym (puste kółko)<br>' +
                  '$$x = -2$$: Miejsce zerowe (funkcja osiąga wartość zero)<br>' +
                  '$$x = 0$$: Nie jest miejscem zerowym (puste kółko)<br>' +
                  '$$x = 3$$: Miejsce zerowe (przecięcie osi OX)<br>' +
                  '$$x = 5$$: Miejsce zerowe (wartość zero, pełne kółko)'
                }
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps3907a.jpeg"
              />
            </div>
          )}

          {completedStages.length === 1 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[
                  { step: '\\text{Miejsca zerowe to punkty przecięcia z osią OX}' },
                  { step: '\\text{Uwzględniamy tylko punkty z pełnymi kółkami}' },
                ]}
                solutions={['x = -2, x = 3, x = 5']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
