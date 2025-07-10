'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import TaskDescription from '@/components/TaskDescription';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const { token } = useAuth();
  const taskId = '3904';
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
          title="Wyznaczanie dziedziny funkcji na podstawie wykresu"
          description="Wyznacz dziedzine poniższego wykresu."
          imageUrl="/steps-images/steps3904.jpeg"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 1: Określ lewą granicę dziedziny funkcji:
            </p>
            <ChoiceQuestion
              question="Gdzie zaczyna się dziedzina funkcji na osi OX?"
              choices={[
                { label: 'x = -3', value: 'a' },
                { label: 'x = -2', value: 'b' },
                { label: 'x = -4', value: 'c' },
                { label: '\\text{Funkcja jest określona dla wszystkich } x', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Wykres zaczyna się od punktu $$(-4, 3)$$ z zamkniętym kółkiem, co oznacza że $$x = -4$$ należy do dziedziny."
              onComplete={() => handleStageComplete(1)}
              explanationImage="/steps-images/steps3904a.jpeg"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Określ prawą granicę dziedziny funkcji:
            </p>
            <ChoiceQuestion
              question="Gdzie kończy się dziedzina funkcji na osi OX?"
              choices={[
                { label: 'x = 4', value: 'a' },
                { label: 'x = 3', value: 'b' },
                { label: 'x = 5', value: 'c' },
                { label: '\\text{Funkcja jest określona dla wszystkich } x', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Wykres kończy się w punkcie $$(5, 2)$$ z zamkniętym kółkiem, co oznacza że $$x = 5$$ należy do dziedziny."
              onComplete={() => handleStageComplete(2)}
              explanationImage="/steps-images/steps3904b.jpeg"
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Wybierz poprawny zapis dziedziny funkcji:
            </p>
            <ChoiceQuestion
              question="Który zapis poprawnie opisuje dziedzinę funkcji f?"
              choices={[
                { label: 'D = ⟨-3, -1⟩ \\cup (1, 3)', value: 'a' },
                { label: 'D = \\langle-4, 5\\rangle', value: 'b' },
                { label: 'D = (-4, 5)', value: 'c' },
                { label: 'D = (0; 5⟩', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Dziedzina funkcji to zbiór wszystkich argumentów, dla których funkcja jest określona. W tym przypadku obejmuje wszystkie wartości od $$-4$$ do $$5$$, włącznie. Ostateczny zapis to $$D = \langle-4, 5\rangle$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              {
                step: '\\text{Funkcja zaczyna się po lewej stronie na -4 a kończy po prawej na 5.}',
              },
            ]}
            solutions={['D = \\langle-4, 5\\rangle']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
