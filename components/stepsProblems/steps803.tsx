'use client';

import { useEffect, useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

const DivisionPage = () => {
  const { token } = useAuth();
  const taskId = '803';
  const [problemSolved, setProblemSolved] = useState(false);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

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
          title="Dzielenie ułamków mieszanych"
          description="Wykonaj dzielenie: $$2\frac{1}{2} : 1\frac{1}{4}$$"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>Zamień ułamki mieszane na niewłaściwe.</StepDescription>
            <ChoiceQuestion
              question="Jak przedstawić w postaci ułamków niewłaściwych?"
              choices={[
                { label: '\\frac{5}{2} \\text{ i } \\frac{5}{4}', value: 'a' },
                { label: '\\frac{3}{2} \\text{ i } \\frac{5}{4}', value: 'b' },
                { label: '\\frac{2}{5} \\text{ i } \\frac{4}{5}', value: 'c' },
                { label: '\\frac{1}{2} \\text{ i } \\frac{1}{4}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Aby zamienić liczby mieszane na ułamki niewłaściwe: <br/><br/>
              $$2\frac{1}{2} = \frac{5}{2}$$, ponieważ $$2 \cdot 2 + 1 = 5$$ <br/>
              $$1\frac{1}{4} = \frac{5}{4}$$, ponieważ $$1 \cdot 4 + 1 = 5$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zastosuj dzielenie ułamków jako mnożenie przez odwrotność:
              <InlineMath math="\frac{5}{2} : \frac{5}{4} = \frac{5}{2} \cdot \frac{4}{5}" />
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest prawidłowe mnożenie tych ułamków?"
              choices={[
                { label: '\\frac{20}{10}', value: 'a' },
                { label: '\\frac{25}{8}', value: 'b' },
                { label: '\\frac{9}{7}', value: 'c' },
                { label: '\\frac{5}{9}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Mnożymy licznik przez licznik i mianownik przez mianownik: <br/>
              $$\frac{5 \cdot 4}{2 \cdot 5} = \frac{20}{10}$$ <br/><br/>
             Ciekawostka: Ułamki można skracać na krzyż — piątki się skracają i otrzymujemy od razu wynik."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Skróć ułamek i przedstaw wynik jako liczbę mieszaną.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\frac{20}{10}$$?"
              choices={[
                { label: '1\\frac{10}{10}', value: 'a' },
                { label: '2', value: 'b' },
                { label: '2\\frac{0}{10}', value: 'c' },
                { label: '1\\frac{1}{2}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="$$\frac{20}{10} = 2$$, ponieważ $$20$$ podzielone przez $$10$$ równa się $$2$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="2\frac{1}{2} : 1\frac{1}{4}"
            steps={[
              {
                step: '2\\frac{1}{2} : 1\\frac{1}{4} = \\frac{5}{2} : \\frac{5}{4} = \\frac{5}{2} \\cdot \\frac{4}{5} = \\frac{20}{10} = 2',
              },
            ]}
            solutions={['2']}
          />
        )}
      </div>
    </div>
  );
};

export default DivisionPage;
