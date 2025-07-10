'use client';

import { useState, useEffect } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { solveProblem } from '@/service';
import { useAuth } from '@/app/UserData';

const Page = () => {
  const { token } = useAuth();
  const taskId = '800';
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [problemSolved, setProblemSolved] = useState(false);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Dodawanie ułamków"
          description="Wykonaj dodawanie: $$\frac{1}{2} + \frac{1}{3}$$"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Znajdź najmniejszy wspólny mianownik ułamków.
            </StepDescription>
            <ChoiceQuestion
              question="Wybierz najmniejszą liczbę, która dzieli się przez oba mianowniki $$(2$$ i $$3)$$:"
              choices={[
                { label: '4', value: 'a' },
                { label: '5', value: 'b' },
                { label: '6', value: 'c' },
                { label: '12', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Najmniejszy wspólny mianownik $$(NWW)$$ dla $$2$$ i $$3$$ to $$6$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozszerz ułamki tak, aby miały wspólny mianownik równy <InlineMath math="6" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak prawidłowo rozszerzyć ułamki do mianownika $$6$$?"
              choices={[
                { label: '\\frac{1}{2} = \\frac{2}{6}, \\frac{1}{3} = \\frac{2}{6}', value: 'a' },
                { label: '\\frac{1}{2} = \\frac{3}{6}, \\frac{1}{3} = \\frac{2}{6}', value: 'b' },
                { label: '\\frac{1}{2} = \\frac{6}{12}, \\frac{1}{3} = \\frac{6}{18}', value: 'c' },
                { label: '\\frac{1}{2} = \\frac{1}{6}, \\frac{1}{3} = \\frac{1}{6}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="$$\frac{1}{2} = \frac{3}{6}, \quad \frac{1}{3} = \frac{2}{6}$$, bo: <br />
              $$\frac{1 \cdot 3}{2 \cdot 3} = \frac{3}{6}, \quad \frac{1 \cdot 2}{3 \cdot 2} = \frac{2}{6}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>Dodaj ułamki o wspólnym mianowniku.</StepDescription>
            <ChoiceQuestion
              question="Ile wynosi $$\frac{3}{6}+ \frac{2}{6}$$?"
              choices={[
                { label: '\\frac{5}{6}', value: 'a' },
                { label: '\\frac{5}{12}', value: 'b' },
                { label: '\\frac{6}{6}', value: 'c' },
                { label: '\\frac{2}{6}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Dodajemy liczniki: $$3 + 2 = 5$$, więc wynik to $$\frac{5}{6}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>Sprawdź, czy wynik można uprościć.</StepDescription>
            <ChoiceQuestion
              question="Czy ułamek $$\frac{5}{6}$$ da się skrócić?"
              choices={[
                { label: '\\text{Tak, przez 5}', value: 'a' },
                { label: '\\text{Tak, przez 6}', value: 'b' },
                { label: '\\text{Nie, jest już w najprostszej postaci}', value: 'c' },
                { label: '\\text{Tak, przez 2}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="$$5$$ i $$6$$ nie mają wspólnych dzielników większych niż $$1$$, więc ułamek jest nieskracalny."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\frac{1}{2} + \frac{1}{3}"
            steps={[
              {
                step: '\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}',
              },
            ]}
            solutions={['\\frac{5}{6}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
