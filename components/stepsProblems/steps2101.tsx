'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '2101';
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
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Funkcja największego pierwszego dzielnika"
          description="Funkcja $$f$$ przyporządkowuje każdej liczbie naturalnej większej od 1 jej największy dzielnik będący liczbą pierwszą. Spośród liczb: $$f(42), f(44), f(45), f(48)$$ największa to:"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Przypomnij sobie, co oznacza największy pierwszy dzielnik liczby.
            </StepDescription>
            <ChoiceQuestion
              question="Co to jest największy pierwszy dzielnik liczby?"
              choices={[
                {
                  label: '\\text{Największa liczba pierwsza mniejsza od danej liczby}',
                  value: 'a',
                },
                {
                  label: '\\text{Największy dzielnik liczby, który jest liczbą pierwszą}',
                  value: 'b',
                },
                {
                  label: '\\text{Największa liczba pierwsza dzieląca liczbę z resztą}',
                  value: 'c',
                },
                { label: '\\text{Największa liczba pierwsza większa od danej liczby}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawna odpowiedź to: największy dzielnik liczby, który jest liczbą pierwszą. To największa liczba pierwsza, która dzieli daną liczbę bez reszty."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zastosuj definicję do liczby 42 – rozłóż ją na czynniki pierwsze.
            </StepDescription>
            <ChoiceQuestion
              question="Jak znaleźć największy pierwszy dzielnik liczby 42?"
              choices={[
                {
                  label:
                    '\\text{Rozłożyć 42 na czynniki pierwsze: $$2 \cdot 3 \cdot 7$$ i wybrać największy}',
                  value: 'a',
                },
                { label: '\\text{Znaleźć największą liczbę pierwszą mniejszą od 42}', value: 'b' },
                { label: '\\text{Podzielić 42 przez 2 i sprawdzić wynik}', value: 'c' },
                { label: '\\text{Wziąć pierwiastek z 42 i zaokrąglić w dół}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Rozkładając $$42$$ na czynniki pierwsze otrzymujemy $$2 \cdot 3 \cdot 7$$. Największy z nich to $$7$$ – to największy pierwszy dzielnik."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Ustal największe pierwsze dzielniki liczb 44, 45 i 48.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie są największe pierwsze dzielniki liczb $$44, 45, 48$$?"
              choices={[
                { label: 'f(44)=11, f(45)=5, f(48)=3', value: 'a' },
                { label: 'f(44)=2, f(45)=3, f(48)=2', value: 'b' },
                { label: 'f(44)=11, f(45)=3, f(48)=3', value: 'c' },
                { label: 'f(44)=11, f(45)=5, f(48)=3', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="$$44 = 2 \cdot 2 \cdot 11$$ → $$f(44) = 11$$ <br/>$$45 = 3 \cdot 3 \cdot 5$$ → $$f(45) = 5$$ <br/>$$48 = 2^4 \cdot 3$$ → $$f(48) = 3$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Wybierz największą wartość spośród obliczonych wartości funkcji.
            </StepDescription>
            <ChoiceQuestion
              question="Która z wartości $$f(42), f(44), f(45), f(48)$$ jest największa?"
              choices={[
                { label: 'f(42)', value: 'a' },
                { label: 'f(44)', value: 'b' },
                { label: 'f(45)', value: 'c' },
                { label: 'f(48)', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Największy pierwszy dzielnik z podanych to $$f(44) = 11$$. Pozostałe: $$f(42)=7$$, $$f(45)=5$$, $$f(48)=3$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <StudentNotes
            equation="f(n) = \text{największy pierwszy dzielnik } n"
            steps={[
              { step: '\\text{Rozkład na czynniki pierwsze:}' },
              { step: '42 = 2 \\cdot 3 \\cdot 7 \\Rightarrow f(42) = 7' },
              { step: '44 = 2 \\cdot 2 \\cdot 11 \\Rightarrow f(44) = 11' },
              { step: '45 = 3 \\cdot 3 \\cdot 5 \\Rightarrow f(45) = 5' },
              { step: '48 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 3 \\Rightarrow f(48) = 3' },
              { step: '\\text{Porównujemy: } 7, 11, 5, 3' },
              { step: '\\text{Największa wartość to } 11' },
            ]}
            solutions={[
              'f(42) = 7',
              'f(44) = 11',
              'f(45) = 5',
              'f(48) = 3',
              '\\text{Największa wartość: } f(44) = 11',
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
