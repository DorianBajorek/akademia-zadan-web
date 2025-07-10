'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from '../../components/stepsProblems/ChoiceQuestion';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Nierówność kwadratowa</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność kwadratową:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^2 - 4x + 4 \leq 0" />
        </p>

        {!completedStages.includes(1) && (
          <ChoiceQuestion
            question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
            choices={[
              { label: 'a = 1, b = -4, c = 4', value: 'a' },
              { label: 'a = 2, b = -4, c = 4', value: 'b' },
              { label: 'a = 1, b = 4, c = -4', value: 'c' },
              { label: 'a = -1, b = 4, c = -4', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="..."
            onComplete={() => handleStageComplete(1)}
            img="/steps-images/postac-ogolna.png"
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
            choices={[
              { label: 'Δ = 0', value: 'a' },
              { label: 'Δ = 16', value: 'b' },
              { label: 'Δ = -8', value: 'c' },
              { label: 'Δ = 4', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="..."
            onComplete={() => handleStageComplete(2)}
            img="/steps-images/delta.png"
          />
        )}
      </div>
    </div>
  );
};

export default Page;
