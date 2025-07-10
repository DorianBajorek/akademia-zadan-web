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
          Wyciąganie czynnika przed pierwiastek trzeciego stopnia
        </h2>
        <p className="text-lg text-gray-800">Wyciągnij czynnik przed pierwiastek:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\sqrt[3]{104}" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Rozłóż liczbę 104 na czynniki pierwsze.</p>
            <ChoiceQuestion
              question="Jaki jest poprawny rozkład liczby 104 na czynniki pierwsze?"
              choices={[
                { label: '104 = 2 \\cdot 2 \\cdot 2 \\cdot 13', value: 'a' },
                { label: '104 = 2 \\cdot 2 \\cdot 13', value: 'b' },
                { label: '104 = 2 \\cdot 52', value: 'c' },
                { label: '104 = 4 \\cdot 26', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawny rozkład liczby $$104$$ to: <br>
              $$104 = 2 \cdot 2 \cdot 2 \cdot 13 = 2^3 \cdot 13$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/rozkład-104.png"
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Połącz czynniki odpowiadające pierwiastkowi trzeciego stopnia i wyciągnij idealny
              sześcian.
            </p>
            <ChoiceQuestion
              question="Które przedstawienie pierwiastka jest poprawne?"
              choices={[
                { label: '\\sqrt[3]{13}', value: 'a' },
                { label: '2\\sqrt[3]{13}', value: 'b' },
                { label: '4\\sqrt[3]{13}', value: 'c' },
                { label: '8\\sqrt[3]{13}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation={`Podczas gdy liczymy pierwiastek stopnia trzeciegiego łączymy w grupę o rozmiarze trzy te same liczby. Jedna grupa istnieje tylko w naszym przypadku i jej reprezentant jest przed pierwiastkiem. To co nie zostało sprowane zostaje pod pierwiastkiem. W naszym przypadku jest to 13`}
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/wynik-koncowy-104.png"
            />
          </>
        )}

        {completedStages.length === 2 && (
          <StudentNotes
            equation="\sqrt[3]{104}"
            steps={[
              {
                step: '\\sqrt[3]{104} = \\sqrt[3]{2 \\cdot 2 \\cdot 2 \\cdot 13} = 2\\sqrt[3]{13}',
              },
            ]}
            solutions={['2\\sqrt[3]{13}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
