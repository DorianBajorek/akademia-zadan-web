'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription'; // Dodano import komponentu

const Page = () => {
  const { token } = useAuth();
  const taskId = '906';
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
          title="Obniżka ceny roweru"
          description="Cena roweru po obniżce o $$15\%$$ była równa $$850$$ zł. Przed obniżką ten rower kosztował:"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak zapisać zależność między ceną przed obniżką $$x$$ a ceną po obniżce?"
            choices={[
              { label: '2x - 0,15x = 850', value: 'a' },
              { label: 'x + 0,15x = 850', value: 'b' },
              { label: '0,15x = 850', value: 'c' },
              { label: '0,85x = 850', value: 'd' },
            ]}
            correctAnswer="d"
            explanation="Obniżka o $$15\%$$ oznacza, że nowa cena to $$0,85x$$. Równanie to: $$0,85x = 850$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak obliczyć $$x$$ z równania $$0,85x = 850$$?"
            choices={[
              { label: 'x = \\frac{850}{0,85}', value: 'a' },
              { label: 'x = 850 + 0,15 \\cdot 850', value: 'b' },
              { label: 'x = 850 \\cdot 0,85', value: 'c' },
              { label: 'x = 850 - 0,15 \\cdot 850', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="Aby obliczyć $$x$$, należy podzielić obie strony przez $$0,85$$: $$x = \frac{850}{0,85}$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Ile wynosi $$\frac{850}{0,85}$$?"
            choices={[
              { label: '1000', value: 'a' },
              { label: '900', value: 'b' },
              { label: '977,50', value: 'c' },
              { label: '865', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="$$\frac{850}{0,85} = 1000$$. Poprawna odpowiedź to $$1000$$ zł."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="0,85x = 850"
            steps={[
              { step: '0,85x = 850' },
              { step: 'x = \\frac{850}{0,85}' },
              { step: 'x = 1000' },
            ]}
            solutions={['1000 zł']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
