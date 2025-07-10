'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '507';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Przekształcanie wyrażenia wykładniczego"
          description="Przekształć wyrażenie do postaci z potęgą o podstawie 5:"
          equation="\frac{9^5 \cdot 5^9}{45^5}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Rozbij liczbę 45 na czynniki liczby 9 i 5 ponieważ takie liczby są w liczniku.
              </StepDescription>
              <ChoiceQuestion
                question="Jak zapisać liczbę 45 w postaci iloczynu liczb 9 i 5?"
                choices={[
                  { label: '45 = 9 \\cdot 5', value: 'a' },
                  { label: '45 = 6 \\cdot 5', value: 'b' },
                  { label: '45 = 9^2 \\cdot 15', value: 'c' },
                  { label: '45 = 5^2 \\cdot 9', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne rozbicie: $$45 = 9 \cdot 5$$ (najpierw upraszczamy do znanych liczb)."
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Podstaw i uzyj wykładnika 5 dla kazdej z liczb w iloczynie.
              </StepDescription>
              <ChoiceQuestion
                question="Jak teraz wygląda wyrażenie po podstawieniu?"
                choices={[
                  { label: '\\frac{9^5 \\cdot 5^9}{9^5 \\cdot 5}', value: 'a' },
                  { label: '\\frac{9^5 \\cdot 5^9}{9^5 + 5^5}', value: 'b' },
                  { label: '\\frac{9^5 \\cdot 5^9}{9 \\cdot 5^5}', value: 'c' },
                  { label: '\\frac{9^5 \\cdot 5^9}{9^5 \\cdot 5^5}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Poprawne podstawienie: $$45^5 = (9 \cdot 5)^5 = 9^5 \cdot 5^5$$ (potęgowanie rozdzielne względem mnożenia)."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Skróć wyrażenie:</StepDescription>
              <ChoiceQuestion
                question="Jak będzie wyglądało wyrażenie po skróceniu $$\frac{9^5 \cdot 5^9}{9^5 \cdot 5^5}$$?"
                choices={[
                  { label: '5^4', value: 'a' },
                  { label: '9^4 \\cdot 5^4', value: 'b' },
                  { label: '9 \\cdot 5^4', value: 'c' },
                  { label: '9^4', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="W tym etapie skracamy licznik z mianownikiem. Widzimy, że w liczniku i mianowniku jest liczba: $$9^5$$. Czynnik ten się skraca. Natomiast dla potęg o podstawie $$5$$ odejmujemy wykładniki. Zostaje nam ostatecznie $$5^{9-5} = 5^4$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation="\frac{9^5 \cdot 5^9}{45^5}"
                steps={[
                  {
                    step: '45 = 9 \\cdot 5',
                  },
                  {
                    step: '45^5 = (9 \\cdot 5)^5 = 9^5 \\cdot 5^5',
                  },
                  {
                    step: '\\frac{9^5 \\cdot 5^9}{45^5} = \\frac{9^5 \\cdot 5^9}{9^5 \\cdot 5^5} = 5^4',
                  },
                ]}
                solutions={['5^4']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
