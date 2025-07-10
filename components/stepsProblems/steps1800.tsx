'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Upraszczanie wyrażeń algebraicznych"
          description="Uprość następujące wyrażenie algebraiczne:"
          equation="3x^2y + 5xy^2 - 2x^2y + 4xy - 6xy^2"
        />

        {/* ETAP 1: Grupowanie wyrazów podobnych */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Pogrupuj wyrazy podobne. Wyrazy podobne to takie, które mają te same zmienne
              podniesione do tych samych potęg.
            </StepDescription>
            <ChoiceQuestion
              question="Które grupowanie jest poprawne?"
              choices={[
                { label: '(3x^2y - 5xy^2) + (-2x^2y - 4xy) + 6xy^2', value: 'a' },
                { label: '(3x^2y + 5xy^2) + (-2x^2y + 4xy) - 6xy^2', value: 'b' },
                { label: '(3x^2y + 2x^2y) + (5xy^2 + 6xy^2) + 4xy', value: 'c' },
                { label: '(3x^2y - 2x^2y) + (5xy^2 - 6xy^2) + 4xy', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne grupowanie to $$(3x^2y - 2x^2y) + (5xy^2 - 6xy^2) + 4xy$$. <br>
                Dlaczego? Wyrazy podobne to takie, które mają te same zmienne w tej samej potędze. W tym przypadku grupujemy:<br> 
                - wyrazy z $$x^2y$$: $$3x^2y$$ i $$-2x^2y$$<br>
                - wyrazy z $$xy^2$$: $$5xy^2$$ i $$-6xy^2$$<br>
                - wyraz z $$xy$$: $$4xy$$ (nie ma innego podobnego)<br>"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Redukcja wyrazów podobnych */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Wykonaj redukcję (dodawanie lub odejmowanie) w każdej z grup wyrazów podobnych.
            </StepDescription>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: 'x^2y - xy^2 + 4xy', value: 'a' },
                { label: '5x^2y - xy^2 + 4xy', value: 'b' },
                { label: 'x^2y + 11xy^2 + 4xy', value: 'c' },
                { label: 'x^2y - xy^2 - 4xy', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne uproszczenie to $$x^2y - xy^2 + 4xy$$. <br>
                Dlaczego? Wykonujemy działania w każdej grupie:<br>
                1. $$3x^2y - 2x^2y = (3-2)x^2y = x^2y$$<br>
                2. $$5xy^2 - 6xy^2 = (5-6)xy^2 = -xy^2$$<br>
                3. $$4xy$$ pozostaje bez zmian"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 2 && (
          <StudentNotes
            equation="3x^2y + 5xy^2 - 2x^2y + 4xy - 6xy^2"
            steps={[
              {
                step: '(3x^2y - 2x^2y) + (5xy^2 - 6xy^2) + 4xy',
              },
              {
                step: 'x^2y - xy^2 + 4xy',
              },
            ]}
            solutions={['x^2y - xy^2 + 4xy']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
