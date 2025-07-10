'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Upraszczanie wyrażeń algebraicznych
        </h2>
        <p className="text-lg text-gray-800">Uprość wyrażenie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="(x+2)^2 + (x-3)^2" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: zastosuj wzory skróconego mnożenia do obu składników:
            </p>
            <ChoiceQuestion
              question="Jak poprawnie rozwinąć oba wyrażenia?"
              choices={[
                { label: 'x^2+4x+4 + x^2-6x+9', value: 'a' },
                { label: 'x^2+2x+4 + x^2-3x+9', value: 'b' },
                { label: 'x^2+4x+2 + x^2-6x+3', value: 'c' },
                { label: '2x^2+4x+4 - 6x+9', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozwinięcie to: <br>
                $$(x+2)^2 = x^2 + 4x + 4$$<br>
                $$(x-3)^2 = x^2 - 6x + 9$$<br>
                Suma: $$x^2+4x+4 + x^2-6x+9$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Drugi krok: połącz wyrazy podobne:</p>
            <ChoiceQuestion
              question="Które uproszczenie jest poprawne?"
              choices={[
                { label: 'x^4 - 2x + 13', value: 'a' },
                { label: '2x^2 + 10x + 13', value: 'b' },
                { label: '2x^2 - 2x - 5', value: 'c' },
                { label: '2x^2 - 2x + 13', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne uproszczenie: <br>
                $$x^2 + x^2 = 2x^2$$<br>
                $$4x - 6x = -2x$$<br>
                $$4 + 9 = 13$$<br>
                Wynik: $$2x^2 - 2x + 13$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="(x+2)^2 + (x-3)^2"
            steps={[
              {
                step: '(x+2)^2 + (x-3)^2 = x^2 + 4x + 4 + x^2 - 6x + 9 = 2x^2 - 2x + 13',
              },
            ]}
            solutions={['2x^2 - 2x + 13']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
