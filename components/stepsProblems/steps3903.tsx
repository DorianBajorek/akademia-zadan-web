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
  const taskId = '3903';
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
          imageUrl="/steps-images/steps3903av2.jpeg"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Określ najniższą wartość funkcji na wykresie
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest minimalna wartość funkcji widoczna na wykresie?"
                choices={[
                  { label: '0', value: 'a' },
                  { label: '-2', value: 'b' },
                  { label: '-4', value: 'c' },
                  { label: '\\text{Funkcja nie ma wartości minimalnej}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Funkcja przedstawiona na rysunku osiąga wartość minimalną dla $$x = -2$$. To jest początek przedziału wartości funkcji, który jest zamknięty."
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps3903bv2.jpeg"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określ najwyższą wartość funkcji na wykresie
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest maksymalna wartość funkcji widoczna na wykresie?"
                choices={[
                  { label: '3', value: 'a' },
                  { label: '4', value: 'b' },
                  { label: '\\text{Funkcja nie ma wartości maksymalnej}', value: 'c' },
                  { label: '0', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Maksymalna wartość funkcji to $$3$$. W tym punkcie kółko jest pełne, co oznacza, że funkcja osiąga tę wartość. W konsekwencji przedział na koniec będzie domknięty."
                explanationImage="/steps-images/steps3903cv2.jpeg"
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
                  {
                    label: 'ZW = \\lbrace-2\\rbrace \\cup (-1;2) \\cup \\langle2;3\\rangle',
                    value: 'a',
                  },
                  {
                    label: 'ZW = \\lbrace-2\\rbrace \\cup (-1;2\\rangle \\cup (2;3\\rangle',
                    value: 'b',
                  },
                  {
                    label: 'ZW = \\lbrace-2\\rbrace \\cup \\langle-1;2) \\cup (2;3\\rangle',
                    value: 'c',
                  },
                  { label: 'ZW = \\lbrace-2\\rbrace \\cup (-1;2) \\cup (2;3\\rangle', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Ustaliliśmy, wczęśniej, że nasza funkcja zaczyna się na poziomie $$-2$$. Widać na rysunku, że funkcja ma przerwę do momentu $$-1$$ i w tym miejscu zaczyna się na nowo (kółko puste więc nawias otwarty). Następnie na poziomie $$2$$ funkcja ma przerwę (kółko puste) i zaczyna się na nowo na poziomie $$2$$ (kółko puste). Nasza funkcja idzie do poziomu $$3$$ i tam kończy się pełnym kółkiem (nawias domknięty). Dlatego poprawny zapis to $$ZW = \lbrace-2\rbrace \cup (-1;2) \cup (2;3\rangle$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[]}
                solutions={['ZW = \\lbrace-2\\rbrace \\cup (-1;2) \\cup (2;3\\rangle']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
