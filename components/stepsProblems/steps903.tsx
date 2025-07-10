'use client';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription'; // Dodany import

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Podwyżka ceny"
          description="Medyczna maseczka ochronna wielokrotnego użytku z wymiennymi filtrami wskutek podwyżki zdrożała o $$40\%$$ i kosztuje obecnie $$106{,}40$$ zł. 
          Cena maseczki przed podwyżką była równa?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak zapisać zależność między ceną przed podwyżką $$x$$ a ceną po podwyżce?"
            choices={[
              { label: 'x - 0,4x = 106,40', value: 'a' },
              { label: '0,4x = 106,40', value: 'b' },
              { label: 'x = 106,40 \\cdot 1,4', value: 'c' },
              { label: 'x + 0,4x = 106,40', value: 'd' },
            ]}
            correctAnswer="d"
            explanation="Podwyżka o $$40\%$$ oznacza, że nowa cena to $$x + 0,4x$$, czyli $$1,4x$$. Równanie to: $$x + 0,4x = 106,40$$."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak uprościć równanie $$x + 0,4x = 106,40$$?"
            choices={[
              { label: 'x = 106,40', value: 'a' },
              { label: '0,6x = 106,40', value: 'b' },
              { label: '1,4x = 106,40', value: 'c' },
              { label: 'x = 0,4 \\cdot 106,40', value: 'd' },
            ]}
            correctAnswer="c"
            explanation="$$x + 0,4x = 1,4x$$, więc otrzymujemy równanie $$1,4x = 106,40$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Jak obliczyć $$x$$ z równania $$1,4x = 106,40$$?"
            choices={[
              { label: 'x = \\frac{106,40}{1,4}', value: 'a' },
              { label: 'x = 106,40 \\cdot 1,4', value: 'b' },
              { label: 'x = 1,4 \\cdot 106,40', value: 'c' },
              { label: 'x = 106,40 - 1,4', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="Aby obliczyć $$x$$, należy podzielić obie strony przez $$1,4$$: $$x = \frac{106,40}{1,4}.$$"
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.includes(3) && (
          <ChoiceQuestion
            question="Ile wynosi $$106,40$$ podzielone przez $$1,4$$?"
            choices={[
              { label: '76,00', value: 'a' },
              { label: '66,40', value: 'b' },
              { label: '65,40', value: 'c' },
              { label: '63,84', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="$$\frac{106,40}{1,4} = 76$$. Poprawna odpowiedź to $$76$$ zł."
            onComplete={() => handleStageComplete(4)}
          />
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="1,4x = 106,40"
            steps={[
              { step: 'x + 0,4x = 106,40' },
              { step: '1,4x = 106,40' },
              { step: 'x = \\frac{106,40}{1,4}' },
              { step: 'x = 76' },
            ]}
            solutions={['76 zł']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
