'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const { token } = useAuth();
  const taskId = '2102';
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Analiza zmiany ceny telefonu
        </h2>
        <p className="text-lg text-gray-800 mt-4">
          Cena nowego telefonu w sklepie internetowym przez pierwszy tydzień wynosiła 3000 zł. Po
          tygodniu zaczęła spadać codziennie o 100 zł aż do osiągnięcia poziomu 2400 zł. Potem
          utrzymywała się na tym poziomie przez kolejne dni.
        </p>

        {(completedStages.includes(0) || completedStages.length === 0) && (
          <>
            <ChoiceQuestion
              question="a) Po ilu dniach cena przestaje maleć?"
              choices={[
                { label: '\\text{6 dni}', value: 'a' },
                { label: '\\text{7 dni}', value: 'b' },
                { label: '\\text{8 dni}', value: 'c' },
                { label: '\\text{9 dni}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawna odpowiedź to: $$6$$ dni. <br>Obliczenia: <br>
              - Początkowa cena: $$3000$$ zł <br>
              - Końcowa cena: $$2400$$ zł <br>
              - Różnica: $$3000 - 2400 = 600$$ zł <br>
              - Codzienny spadek: $$100$$ zł <br>
              - Liczba dni spadku: $$\frac{600}{100} = 6$$ dni"
              onComplete={() => handleStageComplete(0)}
            />
          </>
        )}

        {completedStages.includes(0) &&
          (completedStages.includes(1) || completedStages.length === 1) && (
            <>
              <ChoiceQuestion
                question="b) Jaki jest zbiór wartości funkcji opisującej cenę?"
                choices={[
                  { label: '\\{2400, 3000\\}', value: 'a' },
                  { label: '\\{2400, 2500, 2600, 2700, 2800, 2900, 3000\\}', value: 'b' },
                  { label: '\\text{Wszystkie liczby całkowite od 2400 do 3000}', value: 'c' },
                  { label: '\\text{Wszystkie liczby rzeczywiste od 2400 do 3000}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawna odpowiedź to: $$\\{2400, 2500, 2600, 2700, 2800, 2900, 3000\\}$$. <br>
              Cena przyjmuje tylko wartości: <br>
              - $$3000$$ zł (pierwszy tydzień) <br>
              - $$2900, 2800, 2700, 2600, 2500, 2400$$ zł (kolejne dni) <br>
              - $$2400$$zł (cena końcowa)"
                onComplete={() => handleStageComplete(1)}
              />
            </>
          )}

        {completedStages.includes(1) &&
          (completedStages.includes(2) || completedStages.length === 2) && (
            <>
              <ChoiceQuestion
                question="c) Charakter funkcji w różnych przedziałach:"
                choices={[
                  {
                    label: '\\text{Stała (0-7 dni), malejąca (7-13 dni), stała (powyżej 13 dni)}',
                    value: 'a',
                  },
                  { label: '\\text{Stała (0-7 dni), malejąca (7-13 dni)}', value: 'b' },
                  { label: '\\text{Malejąca (0-6 dni), stała (powyżej 6 dni)}', value: 'c' },
                  {
                    label: '\\text{Stała (0-7 dni), malejąca (8-13 dni), stała (powyżej 13 dni)}',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="Poprawna odpowiedź to: <br>
              - Stała (0-7 dni) - cena 3000 zł <br>
              - Malejąca (8-13 dni) - codzienny spadek o 100 zł <br>
              - Stała (powyżej 13 dni) - cena 2400 zł <br>
              Uwaga: Pierwszy tydzień to 7 dni stałej ceny, potem 6 dni spadku (7+6=13), następnie cena stała."
                onComplete={() => handleStageComplete(2)}
              />
            </>
          )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation=""
            steps={[
              { step: '\\text{1. Okres stałej ceny: 0-7 dni (3000 zł)}' },
              { step: '\\text{2. Obliczenie czasu spadku:} (3000-2400)/100 = 6 dni' },
              { step: '\\text{3. Okres malejącej ceny: 8-13 dni (codzienny spadek o 100 zł)}' },
              { step: '\\text{4. Okres stałej ceny: powyżej 13 dni (2400 zł)}' },
              { step: '\\text{5. Zbiór wartości:} {3000, 2900, 2800, 2700, 2600, 2500, 2400}' },
              {
                step: '\\text{6. Charakter funkcji: stała-malejąca-stała w odpowiednich przedziałach}',
              },
            ]}
            solutions={['\\text{Obliczenia przedstawione wyżej zawierają odpowiedzi do zadania.}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
