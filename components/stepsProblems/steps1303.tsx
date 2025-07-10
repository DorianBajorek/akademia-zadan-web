'use client';

import { useState } from 'react';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import NumericQuestion from './NumericQuestion';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie z wartością bezwzględną"
          description="Rozwiąż równanie:"
          equation="|x - 8| = 0"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Równanie z wartością bezwzględną w przypadku równości do zera, można opuścić wartość
              bezwzględną bez konseekwencji. Rozwiążmy to równanie.
            </StepDescription>
            <NumericQuestion
              question="Oblicz wartość x, dla której $$x - 8 = 0$$:"
              correctAnswer="8"
              explanation={`Rozwiązujemy równanie:  
              $$x - 8 = 0$$  
              Dodajemy 8 do obu stron:  
              $$x = 8$$.`}
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Wskaż prawidłowy zbiór rozwiązań równania.
            </StepDescription>
            <ChoiceQuestion
              question="Który zbiór jest rozwiązaniem równania $$|x - 8| = 0$$?"
              choices={[
                { label: 'x = 8', value: 'a' },
                { label: 'x ∈ ℝ', value: 'b' },
                { label: 'x ∈ ∅', value: 'c' },
                { label: 'x = -8', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={`Wartość bezwzględna jest równa zero tylko wtedy, gdy jej argument jest równy zero.  
              Z równania $$x - 8 = 0$$ otrzymujemy $$x = 8$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <StudentNotes
            equation="|x - 8| = 0"
            steps={[{ step: '|x - 8| = 0 \\ \\Leftrightarrow \\ x - 8 = 0' }, { step: 'x = 8' }]}
            solutions={['x = 8']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
