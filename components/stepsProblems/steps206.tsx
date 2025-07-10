'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie wielomianowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="4x^4 - 9x^2 = 0" />
        </p>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Pierwszy krok: wyciągnij wspólny czynnik przed nawias.
            </p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: '4x^2(x^2 - 9) = 0', value: 'a' },
                { label: 'x(4x^3 - 9x) = 0', value: 'b' },
                { label: 'x^2(4x^2 + 9) = 0', value: 'c' },
                { label: 'x^2(4x^2 - 9) = 0', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$x^2(4x^2 - 9) = 0$$. 
              Wyciągamy $$x²$$ przed nawias jako wspólny czynnik obu wyrazów. 
              Teraz mamy iloczyn $$x²$$ i dwumianu kwadratowego."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Drugi krok: rozłóż dwumian kwadratowy na czynniki.
            </p>
            <ChoiceQuestion
              question="Które rozłożenie jest poprawne?"
              choices={[
                { label: 'x^2(2x - 3)(2x + 3) = 0', value: 'a' },
                { label: 'x^2(4x - 3)(x + 3) = 0', value: 'b' },
                { label: 'x^2(2x - 9)(2x + 1) = 0', value: 'c' },
                { label: 'x^2(4x^2 - 9) = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne rozłożenie to $$x^2(2x - 3)(2x + 3) = 0$$. 
              Wykorzystujemy wzór skróconego mnożenia: <br>
              $$a^2 - b^2 = (a-b)(a+b)$$.
              W tym przypadku: $$4x^2 - 9 = (2x)^2 - 3^2 = (2x-3)(2x+3)$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Trzeci krok: znajdź wszystkie rozwiązania równania.
            </p>
            <ChoiceQuestion
              question="Jakie są wszystkie rozwiązania równania?"
              choices={[
                { label: 'x = 0, x = 1.5, x = -1.5', value: 'a' },
                { label: 'x = 0, x = 1.5, x = -1.5', value: 'b' },
                { label: 'x = 0, x = 3, x = -3', value: 'c' },
                { label: 'x = 1.5, x = -1.5', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Rozwiązujemy równanie $$x^2(2x - 3)(2x + 3) = 0$$: <br>
              1. $$x^2 = 0 \Rightarrow x = 0$$ <br>
              2. $$2x - 3 = 0 \Rightarrow x = 1.5$$ <br>
              3. $$2x + 3 = 0 \Rightarrow x = -1.5$$ <br>
              Równanie ma trzy rozwiązania: $$0$$ , $$1.5$$ i $$-1.5$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="4x^4 - 9x^2 = 0"
            steps={[
              {
                step: 'x^2(4x^2 - 9) = 0',
              },
              {
                step: 'x^2(2x - 3)(2x + 3) = 0',
              },
              {
                step: 'x^2 = 0 \\Rightarrow x = 0',
              },
              {
                step: '2x - 3 = 0 \\Rightarrow x = 1.5',
              },
              {
                step: '2x + 3 = 0 \\Rightarrow x = -1.5',
              },
            ]}
            solutions={['x = 0', 'x = 1.5', 'x = -1.5']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
