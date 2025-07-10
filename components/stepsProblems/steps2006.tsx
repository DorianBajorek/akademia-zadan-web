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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie współczynnika funkcji kwadratowej"
          description="Funkcja w postaci kanonicznej o równaniu $$f(x) = a(x - 2)² - 16$$ ma miejsce zerowe $$x₀=4$$. Oblicz współczynnik $$a$$."
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Podstawienie miejsca zerowego do wzoru funkcji.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie równanie powstaje po podstawieniu miejsca zerowego?"
                choices={[
                  { label: '0 = a(0 - 2)^2 + 16', value: 'a' },
                  { label: '0 = a(4 + 2)^2 - 16', value: 'b' },
                  { label: '0 = a(4 - 2)^2 + 16', value: 'c' },
                  { label: '0 = a(4 - 2)^2 - 16', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Podstawiamy $$x = 4$$ do funkcji i przyrównujemy do $$0$$, bo to miejsce zerowe: <br />$$0 = a(4 - 2)^2 - 16$$"
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Rozwiązanie równania dla współczynnika a.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie jest rozwiązanie równania równania $$0 = a(4 - 2)^2 - 16$$?"
                choices={[
                  { label: 'a = 4', value: 'a' },
                  { label: 'a = 0', value: 'b' },
                  { label: 'a = -4', value: 'c' },
                  { label: 'a = 2', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="
                $$0 = a(4 - 2)^2 - 16$$ <br>
                $$0 = a\cdot2^2 - 16$$ <br>
                $$16 = 4a$$ <br>
                $$a = 4$$
                "
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 2 && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = a(x - 2)^2 - 16"
                steps={[
                  { step: '\\text{Wiadomo, że: } f(4) = 0' },
                  { step: '\\text{Podstawiamy: } 0 = a(4 - 2)^2 - 16' },
                  { step: '0 = a·4 - 16' },
                  { step: '0 = 4a - 16' },
                  { step: '4a = 16 \\Rightarrow a = 4' },
                ]}
                solutions={['a = 4']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
