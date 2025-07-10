'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Funkcja ostatniej cyfry kwadratu"
          description="Funkcja $$f$$, określona dla wszystkich liczb całkowitych dodatnich, przyporządkowuje liczbie $$x$$ ostatnią cyfrę jej kwadratu. Określ wielkość zbioru wartości funkcji $$f$$."
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Przypomnij sobie definicję zbioru wartości funkcji.
            </StepDescription>
            <ChoiceQuestion
              question="Co to jest zbiór wartości funkcji?"
              choices={[
                { label: '\\text{Zbiór wszystkich argumentów funkcji}', value: 'a' },
                {
                  label: '\\text{Zbiór wszystkich wartości funkcji dla jej argumentów}',
                  value: 'b',
                },
                { label: '\\text{Zbiór wszystkich możliwych par (argument, wartość)}', value: 'c' },
                {
                  label: '\\text{Zbiór wszystkich funkcji o podobnych właściwościach}',
                  value: 'd',
                },
              ]}
              correctAnswer="b"
              explanation="Poprawna odpowiedź to: zbiór wszystkich wartości funkcji dla jej argumentów. Jest to zestaw wszystkich możliwych wartości, jakie może przyjmować funkcja."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zbadaj możliwe ostatnie cyfry kwadratów liczb całkowitych dodatnich.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie mogą być ostatnie cyfry kwadratów liczb całkowitych dodatnich?"
              choices={[
                { label: '0, 1, 4, 5, 6, 9', value: 'a' },
                { label: '0, 1, 2, 4, 5, 6, 7, 8, 9', value: 'b' },
                { label: '1, 4, 9', value: 'c' },
                { label: '0, 2, 4, 6, 8', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={`Poprawna odpowiedź to $$0, 1, 4, 5, 6, 9$$.<br/>
                Można to sprawdzić, obliczając kwadraty liczb od $$0$$ do $$9$$:<br/>
                $$0^2 = 0, 1^2 = 1, 2^2 = 4, 3^2 = 9, 4^2 = 16, 5^2 = 25, 6^2 = 36, 7^2 = 49, 8^2 = 64, 9^2 = 81$$.<br/>
                Ostatnie cyfry to: $$0, 1, 4, 9, 6, 5, 6, 9, 4, 1$$.`}
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Oceń, ile różnych wartości przyjmuje funkcja.
            </StepDescription>
            <ChoiceQuestion
              question="Ile różnych wartości zawiera zbiór wartości funkcji $$f$$?"
              choices={[
                { label: '6', value: 'a' },
                { label: '9', value: 'b' },
                { label: '3', value: 'c' },
                { label: '5', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Zbiór wartości to $${0, 1, 4, 5, 6, 9}$$, który zawiera $$6$$ różnych elementów."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <StudentNotes
            equation="f(x) = \text{ostatnia cyfra } x^2"
            steps={[
              {
                step: '\\text{Zbiór wartości to wszystkie możliwe wyniki funkcji dla jej argumentów}',
              },
              { step: '\\text{Kwadraty liczb od 0 do 9:}' },
              {
                step: '0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16, 5^2=25, 6^2=36, 7^2=49, 8^2=64, 9^2=81',
              },
              { step: '\\text{Ostatnie cyfry: } 0,1,4,9,6,5,6,9,4,1' },
              { step: '\\text{Zbiór unikalnych cyfr: } \\{0,1,4,5,6,9\\}' },
            ]}
            solutions={[
              '\\text{Zbiór wartości: } \\{0,1,4,5,6,9\\}',
              '\\text{Liczba wartości: } 6',
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
