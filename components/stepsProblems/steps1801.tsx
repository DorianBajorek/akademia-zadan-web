'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1801';
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
          title="Mnożenie nawiasów i upraszczanie wyrażeń"
          description="Wykonaj działania i uprość wyrażenie:"
          equation="(2x + 3)(x - 4) - (x + 5)(x - 2)"
        />

        {/* ETAP 1: Mnożenie pierwszego nawiasu */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Wymnóż pierwszą parę nawiasów: <InlineMath math="(2x + 3)(x - 4)" />. Pamiętaj o
              wymnożeniu każdego wyrazu z pierwszego nawiasu przez każdy wyraz z drugiego.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik mnożenia $$(2x + 3)(x - 4)$$?"
              choices={[
                { label: '2x^2 - 5x + 12', value: 'a' },
                { label: '2x^2 + 8x + 3x + 12', value: 'b' },
                { label: '2x^2 - 5x - 12', value: 'c' },
                { label: '2x^2 - 8x + 3x - 12', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawny wynik to $$2x^2 - 8x + 3x - 12$$. <br> 
                $$2x \cdot x = 2x^2$$ <br> 
                $$2x \cdot (-4) = -8x$$ <br> 
                $$3 \cdot x = 3x$$ <br> 
                $$3 \cdot (-4) = -12$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Mnożenie drugiego nawiasu */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Teraz wymnóż drugą parę nawiasów: <InlineMath math="(x + 5)(x - 2)" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik mnożenia $$(x + 5)(x - 2)$$?"
              choices={[
                { label: 'x^2 - 2x + 5x - 10', value: 'a' },
                { label: 'x^2 + 2x + 5x + 10', value: 'b' },
                { label: 'x^2 + 3x - 10', value: 'c' },
                { label: 'x^2 - 7x - 10', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawny wynik to $$x^2 - 2x + 5x - 10$$. <br> 
                $$x \cdot x = x^2$$<br> 
                $$x \cdot (-2) = -2x$$<br> 
                $$5 \cdot x = 5x$$ <br> 
                $$5 \cdot (-2) = -10$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Połączenie i uproszczenie */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Połącz uzyskane wyniki i zredukuj wyrazy podobne. Pamiętaj o znaku minus przed drugim
              nawiasem.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest ostateczny wynik po uproszczeniu całego wyrażenia?"
              choices={[
                { label: 'x^2 + 8x - 22', value: 'a' },
                { label: 'x^2 - 4x - 22', value: 'b' },
                { label: '3x^2 - 4x - 2', value: 'c' },
                { label: 'x^2 - 8x - 2', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawny wynik to $$x^2 - 8x - 2$$. <br> 
                1. Połącz wyniki: $$(2x^2 - 8x + 3x - 12) - (x^2 - 2x + 5x - 10)$$<br> 
                2. Uprość wyrażenia w nawiasach: $$(2x^2 - 5x - 12) - (x^2 + 3x - 10)$$<br> 
                3. Zmień znaki w drugim nawiasie z powodu odejmowania: $$2x^2 - 5x - 12 - x^2 - 3x + 10$$<br> 
                4. Zredukuj wyrazy podobne: $$(2x^2 - x^2) + (-5x - 3x) + (-12 + 10) = x^2 - 8x - 2$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="(2x + 3)(x - 4) - (x + 5)(x - 2)"
            steps={[
              {
                step: '(2x^2 - 8x + 3x - 12) - (x^2 - 2x + 5x - 10)',
              },
              {
                step: '(2x^2 - 5x - 12) - (x^2 + 3x - 10)',
              },
              {
                step: '2x^2 - 5x - 12 - x^2 - 3x + 10',
              },
              {
                step: 'x^2 - 8x - 2',
              },
            ]}
            solutions={['x^2 - 8x - 2']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
