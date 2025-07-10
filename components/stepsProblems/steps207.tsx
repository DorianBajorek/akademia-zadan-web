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
  const taskId = '207';
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie wielomianowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^5 - x^3 = 0" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: wyciągnij wspólny czynnik przed nawias.
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x^2(x^3 - x) = 0', value: 'a' },
                { label: 'x(x^4 - x^2) = 0', value: 'b' },
                { label: 'x^3(x^2 - 1) = 0', value: 'c' },
                { label: 'x^3(x^2 + 1) = 0', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$x^3(x^2 - 1) = 0$$. 
              Wyciągamy $$x^3$$ przed nawias jako wspólny czynnik obu wyrazów."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: rozłóż dwumian kwadratowy na czynniki.
            </p>
            <ChoiceQuestion
              question="Które rozłożenie jest poprawne?"
              choices={[
                { label: 'x^3(x - 1)(x + 1) = 0', value: 'a' },
                { label: 'x^3(x^2 - 1) = 0', value: 'b' },
                { label: 'x^3(x - 1)^2 = 0', value: 'c' },
                { label: 'x^3(x + 1)^2 = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozłożenie to $$x^3(x - 1)(x + 1) = 0$$. 
              Wykorzystujemy wzór skróconego mnożenia: $$a^2 - b^2 = (a-b)(a+b)$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: znajdź wszystkie rozwiązania równania.
            </p>
            <ChoiceQuestion
              question="Jakie są wszystkie rozwiązania równania?"
              choices={[
                { label: 'x = 0, x = 1, x = -1', value: 'a' },
                { label: 'x = 0, x = 1, x = -1', value: 'b' },
                { label: 'x = 0, x = 1', value: 'c' },
                { label: 'x = 1, x = -1', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Rozwiązujemy równanie $$x^3(x - 1)(x + 1) = 0$$: <br>
              1. $$x^3 = 0 \Rightarrow x = 0$$ <br>
              2. $$x - 1 = 0 \Rightarrow x = 1$$ <br>
              3. $$x + 1 = 0 \Rightarrow x = -1$$ <br>
              Równanie ma trzy rozwiązania: $$0$$, $$1$$ i $$-1$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="x^5 - x^3 = 0"
            steps={[
              {
                step: 'x^3(x^2 - 1) = 0',
              },
              {
                step: 'x^3(x - 1)(x + 1) = 0',
              },
              {
                step: 'x^3 = 0 \\Rightarrow x = 0',
              },
              {
                step: 'x - 1 = 0 \\Rightarrow x = 1',
              },
              {
                step: 'x + 1 = 0 \\Rightarrow x = -1',
              },
            ]}
            solutions={['x = 0', 'x = 1', 'x = -1']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
