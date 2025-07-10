'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription'; // Dodano import

const Page = () => {
  const { token } = useAuth();
  const taskId = '4505';
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
        <TaskDescription
          title="Wyznaczanie kąta nachylenia prostej do osi OX"
          description="Dana jest funkcja liniowa: $$y = \sqrt{3}x + 2$$. Wyznacz kąt nachylenia tej prostej do osi OX."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Odczytaj współczynnik kierunkowy <InlineMath math="a" /> z równania funkcji.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest współczynnik kierunkowy a w podanej funkcji?"
              choices={[
                { label: 'a = 2', value: 'a' },
                { label: 'a = \\sqrt{3}', value: 'b' },
                { label: 'a = 3', value: 'c' },
                { label: 'a = \\frac{\\sqrt{3}}{2}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Współczynnik kierunkowy to liczba stojąca przed $$x$$ w równaniu funkcji liniowej. Dla $$y = \sqrt{3}x + 2$$ mamy $$a = \sqrt{3}$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Oblicz wartość kąta <InlineMath math="\alpha" /> korzystając z zależności{' '}
              <InlineMath math="\tan\alpha = a" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość kąta $$\alpha$$ dla $$a = \sqrt{3}$$?"
              choices={[
                { label: '30^\\circ', value: 'a' },
                { label: '45^\\circ', value: 'b' },
                { label: '60^\\circ', value: 'c' },
                { label: '90^\\circ', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Ponieważ $$\tg(60^\circ) = \sqrt{3}$$, to $$\alpha = 60^\circ$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: '\\text{Odczytujemy współczynnik kierunkowy: } a = \\sqrt{3}',
              },
              {
                step: '\\text{Obliczamy kąt: } \\alpha = 60^\\circ \\text{, bo } \\tg(60^{\\circ}) = \\sqrt{3}',
              },
            ]}
            solutions={['60^\\circ']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
