'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription'; // dodany import komponentu

const Page = () => {
  const { token } = useAuth();
  const taskId = '1701';
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
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Rozwiązanie trójmianu kwadratowego"
          description="Zapisz w postaci iloczynowej funkcję kwadratową $$f(x) = 2x^2 - 4x - 6$$."
        />

        {/* Etap 1 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jakie są pierwiastki funkcji $$f(x) = 2x^2 - 4x - 6$$?"
            choices={[
              { label: 'x₁ = 1, x₂ = -3', value: 'a' },
              { label: 'x₁ = 2, x₂ = -1.5', value: 'b' },
              { label: 'x₁ = 3, x₂ = -1', value: 'c' },
              { label: 'x₁ = -2, x₂ = 1.5', value: 'd' },
            ]}
            correctAnswer="c"
            explanation={`Rozwiązujemy równanie $$2x^2 - 4x - 6 = 0$$.
Dzielimy przez 2: $$x^2 - 2x - 3 = 0$$.
$$\\Delta = 4 + 12 = 16$$, $$\\sqrt{\\Delta} = 4$$.
$$x_1 = \\frac{2+4}{2} = 3$$, $$x_2 = \\frac{2-4}{2} = -1$$.`}
            onComplete={() => handleStageComplete(1)}
            img="/steps-images/dwaMiejscaZerowe.png"
          />
        )}

        {/* Etap 2 */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak wygląda wzór funkcji $$f(x)$$ w postaci iloczynowej?"
            choices={[
              { label: 'f(x) = (x - 3)(x + 1)', value: 'a' },
              { label: 'f(x) = 2(x - 3)(x + 1)', value: 'b' },
              { label: 'f(x) = 2(x + 3)(x - 1)', value: 'c' },
              { label: 'f(x) = (x + 3)(x - 1)', value: 'd' },
            ]}
            correctAnswer="b"
            explanation={`Wzór funkcji kwadratowej w postaci iloczynowej to:
$$f(x) = a(x - x_1)(x - x_2)$$.
Podstawiając: $$a = 2$$, $$x_1 = 3$$, $$x_2 = -1$$, otrzymujemy:
$$f(x) = 2(x - 3)(x + 1)$$.`}
            onComplete={() => handleStageComplete(2)}
            img="/steps-images/postac-iloczynowa.png"
          />
        )}

        {/* Notatki końcowe */}
        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x) = 2x^2 - 4x - 6"
            steps={[
              {
                step: '\\text{Znajdź pierwiastki: } 2x^2 - 4x - 6 = 0 \\Rightarrow x^2 - 2x - 3 = 0',
              },
              { step: '\\Delta = 4 + 12 = 16, \\sqrt{\\Delta} = 4' },
              { step: 'x_1 = \\frac{2+4}{2} = 3, \\quad x_2 = \\frac{2-4}{2} = -1' },
              { step: '\\text{Postać iloczynowa: } f(x) = 2(x - 3)(x + 1)' },
            ]}
            solutions={['f(x) = 2(x - 3)(x + 1)']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
