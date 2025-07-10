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
          title="Sprawdzanie rozwiązania układu równań z ułamkami"
          description="Sprawdź czy para liczb jest rozwiązaniem układu równań:"
          equation="(x, y) = (\frac{1}{2}, \frac{1}{3})\quad \begin{cases} \frac{1}{2}x + \frac{1}{3}y = \frac{1}{2} \\ 4x - 6y = 0 \end{cases}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Podstaw <InlineMath math="x = \frac{1}{2}" /> i <InlineMath math="y = \frac{1}{3}" />{' '}
              do pierwszego równania:
            </StepDescription>
            <ChoiceQuestion
              question="Czy pierwsze równanie jest spełnione?"
              choices={[
                {
                  label:
                    'Tak,\\ bo \\ \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{1}{4} + \\frac{1}{9} = \\frac{13}{36} \\ne \\frac{1}{2}',
                  value: 'a',
                },
                {
                  label:
                    'Tak,\\ bo \\ \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{1}{4} + \\frac{1}{9} = \\frac{13}{36} ≠ \\frac{1}{2}',
                  value: 'b',
                },
                {
                  label:
                    'Nie,\\ bo \\ \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{1}{4} + \\frac{1}{9} = \\frac{13}{36} ≠ \\frac{1}{2}',
                  value: 'c',
                },
                { label: '\\text{Nie można tego stwierdzić}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x=\frac{1}{2}$$ i $$y=\frac{1}{3}$$ do pierwszego równania:<br><br>$$\frac{1}{2}·\frac{1}{2} + \frac{1}{3}·\frac{1}{3} = \frac{1}{4} + \frac{1}{9} = \frac{13}{36}$$<br><br>$$\frac{13}{36} ≠ \frac{1}{2}$$ (bo $$\frac{1}{2} = \frac{18}{36}$$)<br><br>Równość nie jest prawdziwa, więc pierwsze równanie nie jest spełnione."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw <InlineMath math="x = \frac{1}{2}" /> i <InlineMath math="y = \frac{1}{3}" />{' '}
              do drugiego równania:
            </StepDescription>
            <ChoiceQuestion
              question="Czy drugie równanie jest spełnione?"
              choices={[
                {
                  label: '\\text{Tak, bo } 4·\\frac{1}{2} - 6·\\frac{1}{3} = 2 - 2 = 0',
                  value: 'a',
                },
                {
                  label: '\\text{Nie, bo } 4·\\frac{1}{2} - 6·\\frac{1}{3} = 2 + 2 = 4 ≠ 0',
                  value: 'b',
                },
                {
                  label: '\\text{Nie, bo } 4·\\frac{1}{2} + 6·\\frac{1}{3} = 2 + 2 = 4 ≠ 0',
                  value: 'c',
                },
                { label: '\\text{Nie można tego stwierdzić}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x=\frac{1}{2}$$ i $$y=\frac{1}{3}$$ do drugiego równania:<br><br>$$4·\frac{1}{2} - 6·\frac{1}{3} = 2 - 2 = 0$$<br><br>Równość jest prawdziwa, więc drugie równanie jest spełnione."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>Wyciągnij wniosek:</StepDescription>
            <ChoiceQuestion
              question="Czy para $$(\frac{1}{2}, \frac{1}{3})$$ jest rozwiązaniem układu równań?"
              choices={[
                { label: '\\text{Nie, bo nie spełnia obu równań}', value: 'a' },
                { label: '\\text{Nie, bo spełnia tylko pierwsze równanie}', value: 'b' },
                { label: '\\text{Nie, bo spełnia tylko drugie równanie}', value: 'c' },
                { label: '\\text{Tak, bo spełnia oba równania}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Para liczb jest rozwiązaniem układu równań tylko wtedy, gdy spełnia oba równania jednocześnie.<br>W naszym przypadku pierwsze równanie nie jest spełnione, więc $$(\frac{1}{2}, \frac{1}{3})$$ nie jest rozwiązaniem."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\begin{cases} \frac{1}{2}x + \frac{1}{3}y = \frac{1}{2} \\ 4x - 6y = 0 \end{cases}"
            steps={[
              {
                step: '\\text{Sprawdzenie pierwszego równania}: \\frac{1}{2}·\\frac{1}{2} + \\frac{1}{3}·\\frac{1}{3} = \\frac{13}{36} ≠ \\frac{1}{2} ✗',
              },
              {
                step: '\\text{Sprawdzenie drugiego równania: } 4·\\frac{1}{2} - 6·\\frac{1}{3} = 0 → 2-2=0 ✓',
              },
            ]}
            solutions={[
              '\\text{To równanie nie jest spełnione przez parę } (\\frac{1}{2}, \\frac{1}{3})',
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
