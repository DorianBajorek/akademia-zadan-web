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
          title="Sprawdzanie rozwiązania układu równań"
          description="Sprawdź czy para liczb $$(1, 2)$$ jest rozwiązaniem układu równań:"
          equation="\begin{cases} 3x + y = 5 \\ 2x - 4y = -6 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Podstaw <InlineMath math="x = 1" /> i <InlineMath math="y = 2" /> do pierwszego
              równania:
            </StepDescription>
            <ChoiceQuestion
              question="Czy pierwsze równanie jest spełnione?"
              choices={[
                { label: '\\text{Nie, bo } 3·1 - 2 = 3 - 2 = 1 ≠ 5', value: 'a' },
                { label: '\\text{Nie, bo } 3·1 + 2 = 3 + 2 = 5 ≠ 0', value: 'b' },
                { label: '\\text{Tak, bo } 3·1 + 2 = 3 + 2 = 5', value: 'c' },
                { label: '\\text{Nie można tego stwierdzić}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x=1$$ i $$y=2$$ do pierwszego równania:<br>$$3·1 + 2 = 3 + 2 = 5$$<br>Równość jest prawdziwa, więc pierwsze równanie jest spełnione."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw <InlineMath math="x = 1" /> i <InlineMath math="y = 2" /> do drugiego
              równania:
            </StepDescription>
            <ChoiceQuestion
              question="Czy drugie równanie jest spełnione?"
              choices={[
                { label: '\\text{Nie, bo } 2·1 - 4·2 = 2 + 8 = 10 ≠ -6', value: 'a' },
                { label: '\\text{Tak, bo } 2·1 - 4·2 = 2 - 8 = -6', value: 'b' },
                { label: '\\text{Nie, bo } 2·1 + 4·2 = 2 + 8 = 10 ≠ -6', value: 'c' },
                { label: '\\text{Nie można tego stwierdzić}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Podstawiamy $$x=1$$ i $$y=2$$ do drugiego równania:<br>$$2·1 - 4·2 = 2 - 8 = -6$$<br>Równość jest prawdziwa, więc drugie równanie jest spełnione."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>Wyciągnij wniosek:</StepDescription>
            <ChoiceQuestion
              question="Czy para $$(1, 2)$$ jest rozwiązaniem układu równań?"
              choices={[
                { label: '\\text{Tak, bo spełnia oba równania}', value: 'a' },
                { label: '\\text{Nie, bo spełnia tylko pierwsze równanie}', value: 'b' },
                { label: '\\text{Nie, bo spełnia tylko drugie równanie}', value: 'c' },
                { label: '\\text{Nie można tego stwierdzić}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Para liczb jest rozwiązaniem układu równań tylko wtedy, gdy spełnia oba równania jednocześnie.<br>W naszym przypadku oba równania są spełnione, więc $$(1, 2)$$ jest rozwiązaniem."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\begin{cases} 3x + y = 5 \\ 2x - 4y = -6 \end{cases}"
            steps={[
              { step: '\\text{Sprawdzenie pierwszego równania}: 3·1 + 2 = 5 → 3+2=5 ✓' },
              { step: '\\text{Sprawdzenie drugiego równania: } 2·1 - 4·2 = -6 → 2-8=-6 ✓' },
            ]}
            solutions={['\\text{Tak, (1, 2) jest rozwiązaniem}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
