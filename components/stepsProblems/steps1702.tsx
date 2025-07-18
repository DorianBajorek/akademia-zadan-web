'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription'; // dodano import

const Page = () => {
  const { token } = useAuth();
  const taskId = '1702';
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
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie współczynników funkcji kwadratowej"
          description="Wyznacz wartości współczynników $$b$$ i $$c$$ we wzorze funkcji kwadratowej $$f(x) = -x^2 + bx + c$$, jeżeli jej miejscami zerowymi są $$x_1 = -2$$, $$x_2 = \frac{1}{2}$$."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak wygląda wzór funkcji $$f(x)$$ w postaci iloczynowej?"
            choices={[
              { label: 'f(x) = -0.5(x + 2)(x - 1)', value: 'a' },
              { label: 'f(x) = (x + 2)(x - 0.5)', value: 'b' },
              { label: 'f(x) = -(x + 2)(x - 0.5)', value: 'c' },
              { label: 'f(x) = -2(x + 2)(x - 0.5)', value: 'd' },
            ]}
            correctAnswer="c"
            explanation="Postać iloczynowa to $$f(x) = a(x - x_1)(x - x_2)$$.
            <br> Podstawiając $$a = -1$$, $$x_1 = -2$$ (czyli $$(x + 2)$$),
            <br> $$x_2 = \frac{1}{2}$$ (czyli $$(x - 0.5)$$), 
            <br>otrzymujemy $$f(x) = -(x + 2)(x - 0.5)$$."
            onComplete={() => handleStageComplete(1)}
            img="/steps-images/postac-iloczynowa-funkcji.png"
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jaka jest wartość współczynnika $$b$$ w rozwiniętej postaci?"
            choices={[
              { label: 'b = -2.5', value: 'a' },
              { label: 'b = -1.5', value: 'b' },
              { label: 'b = 1.5', value: 'c' },
              { label: 'b = 2.5', value: 'd' },
            ]}
            correctAnswer="b"
            explanation="Rozwijamy postać iloczynową: 
            <br>$$-(x + 2)(x - 0.5) = -[x^2 - 0.5x + 2x - 1] = -[x^2 + 1.5x - 1] = -x^2 - 1.5x + 1$$.
            <br> Porównując z $$-x^2 + bx + c$$ widzimy, że $$b = -1.5$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jaka jest wartość współczynnika $$c$$ w rozwiniętej postaci?"
            choices={[
              { label: 'c = -1', value: 'a' },
              { label: 'c = 0.5', value: 'b' },
              { label: 'c = 1', value: 'c' },
              { label: 'c = 2', value: 'd' },
            ]}
            correctAnswer="c"
            explanation="Z rozwiniętej postaci $$-x^2 - 1.5x + 1$$ i porównania z $$-x^2 + bx + c$$ otrzymujemy $$c = 1$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="f(x) = -x^2 + bx + c, \quad x_1 = -2, \quad x_2 = \frac{1}{2}"
            steps={[
              { step: '\\text{Postać iloczynowa: } f(x) = -1(x + 2)(x - 0.5)' },
              { step: '\\text{Rozwinięcie: } -(x^2 + 1.5x - 1) = -x^2 - 1.5x + 1' },
              { step: '\\text{Porównanie z } -x^2 + bx + c' },
              { step: 'b = -1.5, \\quad c = 1' },
            ]}
            solutions={['b = -1.5', 'c = 1']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
