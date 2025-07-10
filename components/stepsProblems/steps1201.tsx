'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1201';
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
      if (updated.length === 1 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Wyciąganie czynnika przed pierwiastek
        </h2>
        <p className="text-lg text-gray-800">Wyciągnij czynnik przed pierwiastek:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\sqrt{48}" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Rozłóż liczbę 48 na czynniki pierwsze.</p>
            <ChoiceQuestion
              question="Który rozkład na czynniki pierwsze jest poprawny dla liczby 48?"
              choices={[
                { label: '48 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 3', value: 'a' },
                { label: '48 = 2 \\cdot 2 \\cdot 2 \\cdot 3', value: 'b' },
                { label: '48 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2', value: 'c' },
                { label: '48 = 2 \\cdot 3 \\cdot 8', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawny rozkład liczby 48 na czynniki pierwsze to: $$48 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 3$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rozkład-48.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Połącz liczby w pary i wyciągnij idealny kwadrat.
            </p>
            <ChoiceQuestion
              question="Które przedstawienie pierwiastka jest poprawne?"
              choices={[
                { label: '2\\sqrt{3}', value: 'a' },
                { label: '4\\sqrt{3}', value: 'b' },
                { label: '8\\sqrt{3}', value: 'c' },
                { label: '6\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Jak widać w poprzednim kroku można zgrupować dwie pary dwójek $$(2, 2), (2, 2)$$. Po jednym reprezentancje grupy piszemy przed przed pierwiastkiem. Otrzemujemy $$2\cdot2$$ co daje nam przed pierwiastekiem 4. Pod pierwiastkiem zostaje to co się nie wzięło do pary czyli $$3$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/wynik-koncowy-48.png"
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="\sqrt{48}"
            steps={[
              {
                step: '\\sqrt{48} = \\sqrt{2\\cdot2\\cdot2\\cdot2\\cdot3} = 2\\cdot2\\cdot\\sqrt{3} = 4\\sqrt{3}',
              },
            ]}
            solutions={['4\\sqrt{3}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
