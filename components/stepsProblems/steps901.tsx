'use client';

import { useEffect, useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

const Page = () => {
  const taskId = '901';
  const [problemSolved, setProblemSolved] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const { token } = useAuth();
  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);



  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  useEffect(() => {
    if (completedStages.length === 3) {
      solveProblem('500', token);
    }
  }, [completedStages, token]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rozwiązywanie zadania z podziałem budżetu
        </h2>

        <TaskDescription
          title="Podział budżetu"
          description="Zarząd firmy wydzielił z budżetu kwotę $$1\,200\,000\ \text{zł}$$ na projekty badawcze dla dwóch zespołów: $$A$$ i $$B$$. W pierwszym półroczu zespół $$A$$ wykorzystał $$13\%$$ przyznanych mu środków, a zespół $$B$$ wykorzystał $$11\%$$. Łącznie wydano $$146\,700\ \text{zł}$$. Oblicz kwotę przyznaną zespołowi $$A$$."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zdefiniuj zmienne i ułóż układ równań opisujący sytuację.
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie poprawnie przedstawia sytuację z zadania?"
              choices={[
                { label: 'A + B = 1 200 000; 0.13A + 0.11B = 146 700', value: 'a' },
                { label: 'A + B = 146 700; 0.13A + 0.11B = 1 200 000', value: 'b' },
                { label: 'A - B = 1 200 000; 0.13A - 0.11B = 146 700', value: 'c' },
                { label: 'A = 1 200 000 - B; 0.11A + 0.13B = 146 700', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Układ równań to:
              $$A + B = 1\,200\,000$$ oraz $$0.13A + 0.11B = 146\,700$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw zmienną <InlineMath math="B = 1\,200\,000 - A" /> do drugiego równania.
            </StepDescription>
            <ChoiceQuestion
              question="Które podstawienie jest poprawne?"
              choices={[
                { label: 'B = A - 1 200 000; 0.13A + 0.11(A - 1 200 000) = 146 700', value: 'a' },
                { label: 'A = 1 200 000 + B; 0.13(1 200 000 + B) + 0.11B = 146 700', value: 'b' },
                { label: 'B = 1 200 000 - A; 0.13A + 0.11(1 200 000 - A) = 146 700', value: 'c' },
                { label: 'A = B - 1 200 000; 0.13(B - 1 200 000) + 0.11B = 146 700', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawienie $$B = 1\,200\,000 - A$$ i wstawienie do równania:
              $$0.13A + 0.11(1\,200\,000 - A) = 146\,700$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż równanie i znajdź wartość <InlineMath math="A" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest kwota przyznana zespołowi $$A$$?"
              choices={[
                { label: '600 000 zł', value: 'a' },
                { label: '750 000 zł', value: 'b' },
                { label: '450 000 zł', value: 'c' },
                { label: '900 000 zł', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Podstawienie i przekształcenie daje:
              $$0.13A + 132\,000 - 0.11A = 146\,700$$,
              $$0.02A = 14\,700$$, zatem
              $$A = \frac{14\,700}{0.02} = 735\,000$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="A + B = 1\,200\,000 \quad \text{oraz} \quad 0.13A + 0.11B = 146\,700"
            steps={[
              {
                step: 'B = 1\,200\,000 - A',
              },
              {
                step: '0.13A + 0.11(1\,200\,000 - A) = 146\,700',
              },
              {
                step: '0.13A + 132\,000 - 0.11A = 146\,700 \\Rightarrow 0.02A = 14\,700 \\Rightarrow A = 735\,000',
              },
            ]}
            solutions={['735\,000\\ \\text{zł}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
