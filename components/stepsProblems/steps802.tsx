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
  const taskId = '802';
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [problemSolved, setProblemSolved] = useState(false);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => {
      const updated = [...prev, stage];
      if (updated.length === 3 && !problemSolved) {
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
          title="Mnożenie ułamków mieszanych"
          description="Wykonaj mnożenie: $$1\frac{1}{2} \cdot 2\frac{1}{4}$$"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>Zamień ułamki mieszane na niewłaściwe.</StepDescription>
            <ChoiceQuestion
              question="Jak przedstawić w postaci ułamków niewłaściwych?"
              choices={[
                { label: '\\frac{3}{2} \\text{ i } \\frac{4}{4}', value: 'a' },
                { label: '\\frac{3}{2} \\text{ i } \\frac{9}{4}', value: 'b' },
                { label: '\\frac{2}{3} \\text{ i } \\frac{4}{9}', value: 'c' },
                { label: '\\frac{1}{2} \\text{ i } \\frac{1}{4}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Aby zamienić liczbę mieszaną na ułamek niewłaściwy, mnożymy całość przez mianownik i dodajemy licznik. <br><br/>
              $$1\frac{1}{2} = \frac{3}{2}$$, ponieważ $$1 \cdot 2 + 1 = 3$$ <br/>
              $$2\frac{1}{4} = \frac{9}{4}$$, ponieważ $$2 \cdot 4 + 1 = 9$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Wykonaj mnożenie ułamków niewłaściwych:{' '}
              <InlineMath math="\frac{3}{2} \cdot \frac{9}{4}" />
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest prawidłowe mnożenie tych ułamków?"
              choices={[
                { label: '\\frac{12}{8}', value: 'a' },
                { label: '\\frac{9}{8}', value: 'b' },
                { label: '\\frac{6}{6}', value: 'c' },
                { label: '\\frac{27}{8}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Mnożymy licznik przez licznik i mianownik przez mianownik: <br/>
              $$\frac{3}{2} \cdot \frac{9}{4} = \frac{3 \cdot 9}{2 \cdot 4} = \frac{27}{8}$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Zamień ułamek niewłaściwy na liczbę mieszaną.
            </StepDescription>
            <ChoiceQuestion
              question="Jak przedstawić $$\frac{27}{8}$$ jako liczbę mieszaną?"
              choices={[
                { label: '2\\frac{11}{8}', value: 'a' },
                { label: '3\\frac{3}{8}', value: 'b' },
                { label: '4\\frac{1}{8}', value: 'c' },
                { label: '3\\frac{5}{8}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="$$\frac{27}{8} = 3\frac{3}{8}$$, bo $$27 \div 8 = 3$$ i reszta $$3$$, czyli: <br/>
              $$\frac{27}{8} = 3 + \frac{3}{8} = 3\frac{3}{8}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="1\frac{1}{2} \cdot 2\frac{1}{4}"
            steps={[
              {
                step: '1\\frac{1}{2} \\cdot 2\\frac{1}{4} = \\frac{3}{2} \\cdot \\frac{9}{4} = \\frac{27}{8} = 3\\frac{3}{8}',
              },
            ]}
            solutions={['3\\frac{3}{8}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
