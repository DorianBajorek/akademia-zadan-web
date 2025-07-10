'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '3900';
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
          title="Wyznaczanie zbioru wartości funkcji na podstawie wykresu"
          description="Wyznacz zbiór wartości poniższej funkcji"
          imageUrl="/steps-images/steps3900.png"
        />
        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Określ najmniejszą wartość funkcji na wykresie
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest najmniejsza wartość funkcji widoczna na wykresie?"
                choices={[
                  { label: '0', value: 'a' },
                  { label: '-2', value: 'b' },
                  { label: '4', value: 'c' },
                  { label: '\\text{Funkcja nie ma wartości minimalnej}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Aby wyznaczyć minimalną wartość funkcji, patrzymy na najniższy punkt na wykresie, który znajduje się na osi x w punkcie $$(-5, 0)$$ lub $$(7, 0)$$. Wiemy, że wartości to $$y$$ więc najniższa wartośc w tym przypadku to $$0$$, co widać na poniższej fotografii."
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps3900b.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określ największą wartość funkcji na wykresie
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest największa wartość funkcji widoczna na wykresie?"
                choices={[
                  { label: '3', value: 'a' },
                  { label: '4', value: 'b' },
                  { label: '\\text{Funkcja nie ma wartości maksymalnej}', value: 'c' },
                  { label: '0', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Aby wyznaczyć maksymalną wartość funkcji, patrzymy na najwyższy punkt na wykresie, który znajduje się na osi $$y$$ w punkcie $$(1\frac{1}{2}, 3)$$. Wiemy, że wartości to $$y$$ więc najwyższa wartośc w tym przypadku to $$3$$, co widać na poniższej fotografii."
                explanationImage="/steps-images/steps3900a.png"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wybierz poprawny zapis zbioru wartości funkcji
              </StepDescription>
              <ChoiceQuestion
                question="Który zbiór poprawnie opisuje wartości funkcji f?"
                choices={[
                  { label: 'ZW = \\langle-5;7\\rangle', value: 'a' },
                  { label: 'ZW = \\langle0;3)', value: 'b' },
                  { label: 'ZW = \\langle0;3\\rangle', value: 'c' },
                  { label: 'ZW = (0;3)', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Zbiór wartości to wszystkie $$y$$ od minimum $$0$$ do maximum $$3$$, włącznie z tymi wartościami."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[
                  {
                    step: '\\text{Najwyższa wartośc funkcji to 3, a najniższa to 0.}',
                  },
                ]}
                solutions={['ZW  = \\langle0;3\\rangle']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
