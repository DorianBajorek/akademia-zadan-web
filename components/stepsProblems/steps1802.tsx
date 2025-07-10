'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Mnożenie trzech nawiasów"
          description="Wykonaj działania i uprość wyrażenie:"
          equation="(x + 2)(x - 3)(2x + 1)"
        />

        {/* ETAP 1: Mnożenie pierwszych dwóch nawiasów */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od pomnożenia dwóch pierwszych nawiasów: <InlineMath math="(x + 2)(x - 3)" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik mnożenia $$(x + 2)(x - 3)$$?"
              choices={[
                { label: 'x^2 + x - 6', value: 'a' },
                { label: 'x^2 + 3x - 2x - 6', value: 'b' },
                { label: 'x^2 - 3x + 2x - 6', value: 'c' },
                { label: 'x^2 - x - 6', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawny wynik to $$x^2 - 3x + 2x - 6$$. <br>
                $$x \cdot x = x^2$$<br>
                $$x \cdot (-3) = -3x$$<br>
                $$2 \cdot x = 2x$$<br>
                $$2 \cdot (-3) = -6$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Uproszczenie wyniku */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Uprość otrzymany wielomian, redukując wyrazy podobne.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie $$x^2 - 3x + 2x - 6$$ po uproszczeniu?"
              choices={[
                { label: 'x^2 + 5x - 6', value: 'a' },
                { label: 'x^2 + x - 6', value: 'b' },
                { label: 'x^2 - 5x - 6', value: 'c' },
                { label: 'x^2 - x - 6', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne uproszczenie to $$x^2 - x - 6$$. 
                Wystarczy dodać wyrazy podobne: $$-3x + 2x = -x$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Mnożenie przez trzeci nawias */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Otrzymany wynik pomnóż przez trzeci nawias:{' '}
              <InlineMath math="(x^2 - x - 6)(2x + 1)" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik tego mnożenia?"
              choices={[
                { label: '2x^3 + x^2 - 2x^2 - x - 12x - 6', value: 'a' },
                { label: '2x^3 - x^2 - 12x - 6', value: 'b' },
                { label: '2x^3 - 2x^2 - 13x - 6', value: 'c' },
                { label: '2x^3 + x^2 - 13x - 6', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawny wynik to $$2x^3 + x^2 - 2x^2 - x - 12x - 6$$. <br>
                Mnożymy każdy wyraz z pierwszego wielomianu przez każdy wyraz z drugiego:<br>
                $$x^2 \cdot 2x = 2x^3$$<br>
                $$x^2 \cdot 1 = x^2$$<br>
                $$-x \cdot 2x = -2x^2$$<br>
                $$-x \cdot 1 = -x$$<br>
                $$-6 \cdot 2x = -12x$$<br>
                $$-6 \cdot 1 = -6$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Ostateczne uproszczenie */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Dokonaj ostatecznej redukcji wyrazów podobnych, aby uzyskać końcowy wynik.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda końcowe wyrażenie po uproszczeniu?"
              choices={[
                { label: '2x^3 - x^2 - 13x - 6', value: 'a' },
                { label: '2x^3 + x^2 - 13x - 6', value: 'b' },
                { label: '2x^3 - 3x^2 - 13x - 6', value: 'c' },
                { label: '2x^3 - x^2 - 11x - 6', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$2x^3 - x^2 - 13x - 6$$. <br>
                Redukcja wyrazów podobnych:<br>
                $$x^2 - 2x^2 = -x^2$$<br>
                $$-x - 12x = -13x$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="(x + 2)(x - 3)(2x + 1)"
            steps={[
              {
                step: '(x^2 - 3x + 2x - 6)(2x + 1)',
              },
              {
                step: '(x^2 - x - 6)(2x + 1)',
              },
              {
                step: '2x^3 + x^2 - 2x^2 - x - 12x - 6',
              },
              {
                step: '2x^3 - x^2 - 13x - 6',
              },
            ]}
            solutions={['2x^3 - x^2 - 13x - 6']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
