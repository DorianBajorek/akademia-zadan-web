'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';

const Page = () => {
  const { token } = useAuth();
  const taskId = '1200';
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Wyciąganie czynnika przed pierwiastek
        </h2>
        <p className="text-lg text-gray-800">Wyciągnij czynnik przed pierwiastek:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\sqrt{32}" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Rozłóż liczbę 32 na czynniki pierwsze.</p>
            <ChoiceQuestion
              question="Który rozkład na czynniki pierwsze jest poprawny dla liczby 32?"
              choices={[
                { label: '32 = 2 \\cdot 16', value: 'a' },
                { label: '32 = 4 \\cdot 8', value: 'b' },
                { label: '32 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2', value: 'c' },
                { label: '32 = 2 \\cdot 2 \\cdot 4 \\cdot 2', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawny rozkład liczby 32 na czynniki pierwsze to:
                $$32 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 2^5$$.
                Jest to ważne, ponieważ pozwala nam znaleźć największy idealny kwadrat będący dzielnikiem 32."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rozkład-32.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Połączymy teraz w pary liczby w naszym rozkładzie i wyciągnijmy te pary.
            </p>
            <ChoiceQuestion
              question="Które przedstawienie pierwiastka jest poprawne?"
              choices={[
                { label: '16', value: 'a' },
                { label: '2\\cdot 2\\cdot 2\\cdot2\\cdot\\sqrt{2}', value: 'b' },
                { label: '2\\cdot 2\\cdot 2\\cdot\\sqrt{2}', value: 'c' },
                { label: '2\\cdot 2\\cdot\\sqrt{2}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Po wykonanym wcześniej rozkładzie, możemy połączyć liczby w pary i wyciągnąć ich reprezentantów przed pierwiastek. Mając cztery dwójki, możemy dwa wyciągnąć przed pierwiastek, a dwójkę zostawić pod pierwiastkiem, ponieważ nie ma pary."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/idealne-kwadraty.png"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Wyciągnij czynnik przed pierwiastek.</p>
            <ChoiceQuestion
              question="Który wynik jest poprawnym wyciągnięciem czynnika przed pierwiastek?"
              choices={[
                { label: '16', value: 'a' },
                { label: '16\\sqrt{2}', value: 'b' },
                { label: '8\\sqrt{2}', value: 'c' },
                { label: '4\\sqrt{2}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawny wynik to:
                $$4\sqrt{2}$$, wystarczy przemnożyć dwójki."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wynik-koncowy.png"
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\sqrt{32}"
            steps={[
              {
                step: '\\sqrt{32} = 2\\cdot2\\cdot\\sqrt{2} = 4\\sqrt{2}',
              },
            ]}
            solutions={['4\\sqrt{2}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
