'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '408';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Trzywyrazowy ciąg arytmetyczny"
          description="Trzywyrazowy ciąg $$(m, 4, 9-3m)$$ jest arytmetyczny. Wyznacz wartość $$m$$ i określ monotoniczność ciągu."
        />

        <div className="mt-8 space-y-8">
          {/* Krok 1 - Warunek ciągu arytmetycznego */}
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Warunek na ciąg arytmetyczny</StepDescription>
              <ChoiceQuestion
                question="Jeśli trzywyrazowy ciąg $$(a,b,c)$$ jest arytmetyczny, to które równanie jest spełnione?"
                choices={[
                  { label: 'a+b+c=0', value: 'a' },
                  { label: 'b-c=2a', value: 'b' },
                  { label: 'b = \\frac{a+c}{2}', value: 'c' },
                  { label: '2c=a+b', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Z definicji ciągu arytmetycznego wiemy, że $$a_n=\frac{a_{n-1} +a_{n+1}}{2}$$ czyli $$b = \frac{a+c}{2}$$"
                onComplete={() => handleStageComplete(1)}
                img={'/steps-images/warunek_ciag_arytmetyczny.png'}
              />
            </div>
          )}

          {/* Krok 2 - Zastosowanie warunku */}
          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zastosowanie warunku do naszego ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne?"
                choices={[
                  { label: '\\frac{2m - 9 + 3m}{2} = 4', value: 'a' },
                  { label: '\\frac{m + 3m - 9}{2} = 4', value: 'b' },
                  { label: '4 = \\frac{9 - m - 3m}{2}', value: 'c' },
                  { label: '4 = \\frac{m + 9 - 3m}{2}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Poprawne równanie to: $$4 = \frac{m + 9-3m}{2}$$ <br>
                Do własności ciągu $$b=\frac{a+c}{2}$$ podstawiamy: <br>
                $$a = m$$, $$b = 4$$, $$c = 9-3m$$ <br>"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {/* Krok 3 - Rozwiązanie równania */}
          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Rozwiązanie równania</StepDescription>
              <ChoiceQuestion
                question="Wskaż poprawne rozwiązanie"
                choices={[
                  { label: 'm = -0.5', value: 'a' },
                  { label: 'm = 0.5', value: 'b' },
                  { label: 'm = 1', value: 'c' },
                  { label: 'm = -1', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Kolejne kroki rozwiązania: <br>
                1. $$8 = 9 - 2m$$ <br>
                2. $$-1 = -2m$$ <br>
                3. $$2m = 1$$ <br>
                4. $$m = 0.5$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {/* Krok 4 - Monotoniczność ciągu */}
          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Monotoniczność ciągu</StepDescription>
              <ChoiceQuestion
                question="Jaka jest monotoniczność ciągu $$(0.5, 4, 7.5)$$?"
                choices={[
                  { label: '\\text{Ciąg jest rosnący}', value: 'a' },
                  { label: '\\text{Ciąg jest malejący}', value: 'b' },
                  { label: '\\text{Ciąg jest stały}', value: 'c' },
                  { label: '\\text{Ciąg nie jest monotoniczny}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Ciąg jest rosnący, ponieważ: <br>
                $$0.5 < 4 < 7.5$$ <br>
                Różnica ciągu: $$r = 3.5$$ (dodatnia, więc ciąg rośnie)"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {/* Podsumowanie */}
          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="(m, 4, 9-3m) \rightarrow \text{ciąg arytmetyczny}"
                steps={[
                  {
                    step: 'b = \\frac{a + c}{2} \\Rightarrow 4 = \\frac{m + (9-3m)}{2}',
                  },
                  {
                    step: '8 = 9 - 2m',
                  },
                  {
                    step: 'm = 0.5',
                  },
                  {
                    step: '\\text{Ciąg } (0.5, 4, 7.5) \\text{ jest rosnący (r = 3.5)}',
                  },
                ]}
                solutions={['m = 0.5', '(0.5, 4, 7.5) \\text{ - ciąg rosnący}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
