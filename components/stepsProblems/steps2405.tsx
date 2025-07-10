'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '2405';
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
          title="Rozwiązywanie równań liniowych"
          description="Rozwiąż poniższe równanie liniowe z ułamkami:"
          equation="\frac{x}{3} + \frac{x}{4} = 1"
        />

        {/* ETAP 1: Znalezienie wspólnego mianownika */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Aby pozbyć się ułamków, musimy pomnożyć obie strony równania przez wspólny mianownik.
              Znajdź najmniejszy wspólny mianownik (NWW) dla <InlineMath math="3" /> i{' '}
              <InlineMath math="4" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest najmniejszy wspólny mianownik dla liczb $$3$$ i $$4$$?"
              choices={[
                { label: '7', value: 'a' },
                { label: '12', value: 'b' },
                { label: '24', value: 'c' },
                { label: '1', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Najmniejszy wspólny mianownik dla $$3$$ i $$4$$ to $$12$$. Jest to najmniejsza liczba, która dzieli się bez reszty zarówno przez $$3$$, jak i przez $$4$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Mnożenie przez wspólny mianownik */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Teraz pomnóż każdy wyraz w równaniu przez znaleziony wspólny mianownik, czyli{' '}
              <InlineMath math="12" /> aby uprościć równanie.
            </StepDescription>
            <ChoiceQuestion
              question="Jak będzie wyglądać równanie po pomnożeniu przez 12?"
              choices={[
                { label: '4x + 3x = 1', value: 'a' },
                { label: 'x + x = 12', value: 'b' },
                { label: '12x + 12x = 12', value: 'c' },
                { label: '4x + 3x = 12', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne równanie po mnożeniu to $$4x + 3x = 12$$.<br/>Mnożymy każdy wyraz przez 12:<br/>$$12 \cdot \frac{x}{3} = 4x$$<br/>$$12 \cdot \frac{x}{4} = 3x$$<br/>$$12 \cdot 1 = 12$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Rozwiązanie równania */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Rozwiąż otrzymane proste równanie liniowe, aby znaleźć wartość <InlineMath math="x" />
              .
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania $$4x + 3x = 12$$?"
              choices={[
                { label: 'x = \\frac{12}{7}', value: 'a' },
                { label: 'x = \\frac{7}{12}', value: 'b' },
                { label: 'x = 12', value: 'c' },
                { label: 'x = 1', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Sumujemy wyrazy po lewej stronie: $$7x = 12$$.<br/>Następnie dzielimy obie strony przez 7, aby otrzymać wynik: $$x = \frac{12}{7}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 3 && (
          <StudentNotes
            equation="\frac{x}{3} + \frac{x}{4} = 1"
            steps={[
              { step: '\\text{1. Pomnóż obie strony przez NWW(3,4)=12}' },
              { step: '12 \\cdot \\frac{x}{3} + 12 \\cdot \\frac{x}{4} = 12 \\cdot 1' },
              { step: '4x + 3x = 12' },
              { step: '7x = 12' },
              { step: 'x = \\frac{12}{7}' },
            ]}
            solutions={['x = \\frac{12}{7}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
