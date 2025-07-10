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
  const taskId = '1803';
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
          title="Mnożenie nawiasu przez liczbę"
          description="Wykonaj działania i uprość wyrażenie:"
          equation="4(3x - 5) - 2(2x + 7) + 3(-x + 4)"
        />

        {/* ETAP 1: Mnożenie pierwszego nawiasu */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od wymnożenia pierwszego nawiasu przez liczbę stojącą przed nim:{' '}
              <InlineMath math="4(3x - 5)" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik mnożenia $$4(3x - 5)$$?"
              choices={[
                { label: '12x - 5', value: 'a' },
                { label: '12x + 20', value: 'b' },
                { label: '12x - 20', value: 'c' },
                { label: '3x - 20', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawny wynik to $$12x - 20$$. <br>
                Mnożymy każdy wyraz w nawiasie przez 4:<br>
                $$4 \cdot 3x = 12x$$<br>
                $$4 \cdot (-5) = -20$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Mnożenie drugiego nawiasu */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Teraz wymnóż drugi nawias, pamiętając o znaku minus: <InlineMath math="-2(2x + 7)" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik mnożenia $$-2(2x + 7)$$?"
              choices={[
                { label: '-4x - 14', value: 'a' },
                { label: '4x + 14', value: 'b' },
                { label: '-4x + 14', value: 'c' },
                { label: '-4x - 7', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawny wynik to $$-4x - 14$$. <br>
                Mnożymy każdy wyraz w nawiasie przez -2:<br>
                $$-2 \cdot 2x = -4x$$<br>
                $$-2 \cdot 7 = -14$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Mnożenie trzeciego nawiasu */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Wymnóż trzeci nawias przez liczbę, która go poprzedza: <InlineMath math="3(-x + 4)" />
              .
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wynik mnożenia $$3(-x + 4)$$?"
              choices={[
                { label: '-3x + 4', value: 'a' },
                { label: '3x + 12', value: 'b' },
                { label: '-3x + 12', value: 'c' },
                { label: '3x - 12', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawny wynik to $$-3x + 12$$. <br>
                Mnożymy każdy wyraz w nawiasie przez 3:<br>
                $$3 \cdot (-x) = -3x$$<br>
                $$3 \cdot 4 = 12$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Połączenie i uproszczenie */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Połącz wszystkie otrzymane jednomiany i zredukuj wyrazy podobne, aby uzyskać
              ostateczny wynik.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda końcowe wyrażenie po uproszczeniu?"
              choices={[
                { label: '11x - 22', value: 'a' },
                { label: '5x - 22', value: 'b' },
                { label: '5x + 6', value: 'c' },
                { label: '11x + 6', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawny wynik to $$5x - 22$$. <br>
                1. Połącz wszystkie wyrazy: $$12x - 20 - 4x - 14 - 3x + 12$$<br>
                2. Zgrupuj wyrazy podobne: $$(12x - 4x - 3x) + (-20 - 14 + 12)$$<br>
                3. Zredukuj wyrazy: $$5x - 22$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="4(3x - 5) - 2(2x + 7) + 3(-x + 4)"
            steps={[
              {
                step: '12x - 20 - 4x - 14 - 3x + 12',
              },
              {
                step: '(12x - 4x - 3x) + (-20 - 14 + 12)',
              },
              {
                step: '5x - 22',
              },
            ]}
            solutions={['5x - 22']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
