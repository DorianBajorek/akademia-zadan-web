'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';
import { InlineMath } from 'react-katex';

const Page = () => {
  const { token } = useAuth();
  const taskId = '707';
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
          title="Zliczanie liczb"
          description="Ile jest wszystkich trzycyfrowych liczb naturalnych większych od $$300$$ o wszystkich cyfrach parzystych?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Określ, które cyfry mogą pojawić się na pierwszej pozycji liczby.
            </StepDescription>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: '\\text{1 cyfra}', value: 'a' },
                { label: '\\text{2 cyfry}', value: 'b' },
                { label: '\\text{3 cyfry}', value: 'c' },
                { label: '\\text{4 cyfry}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Na pierwszej pozycji mogą znaleźć się 3 cyfry - $$4$$, $$6$$ i $$8$$. <br>
              Cyfry $$1$$, $$3$$, $$5$$, $$7$$ i $$9$$ są nieparzyste, więc odpadają. <br>
              Cyfra $$2$$ tworzyłaby liczbę mniejszą niż $$300$$. <br>
              Cyfra $$0$$ na początku nie tworzy liczby trzycyfrowej."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Określ możliwe cyfry na drugiej pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na drugiej (od lewej) pozycji może / mogą znaleźć się:"
              choices={[
                { label: '\\text{1 cyfra}', value: 'a' },
                { label: '\\text{3 cyfry}', value: 'b' },
                { label: '\\text{5 cyfr}', value: 'c' },
                { label: '\\text{10 cyfr}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Na drugiej pozycji mogą znaleźć się wszystkie cyfry parzyste: $$0, 2, 4, 6, 8$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Określ możliwe cyfry na trzeciej (ostatniej) pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na trzeciej (od lewej), czyli ostatniej, pozycji może / mogą znaleźć się:"
              choices={[
                { label: '\\text{1 cyfra}', value: 'a' },
                { label: '\\text{3 cyfry}', value: 'b' },
                { label: '\\text{5 cyfr}', value: 'c' },
                { label: '\\text{10 cyfr}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podobnie jak w przypadku drugiej pozycji — możemy użyć każdej z parzystych cyfr: $$0, 2, 4, 6, 8$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Wyznacz wzór pozwalający obliczyć liczbę spełniających warunek liczb.
            </StepDescription>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: '3 + 5 + 5', value: 'a' },
                { label: '3 + 10 + 10', value: 'b' },
                { label: '3 \\cdot 10 \\cdot 10', value: 'c' },
                { label: '3 \\cdot 5 \\cdot 5', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Zgodnie z regułą mnożenia: $$3 \cdot 5 \cdot 5$$, bo: <br>
              pierwsza pozycja: $$3$$ możliwości, druga: $$5$$, trzecia: $$5$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Oblicz wartość wyrażenia i zapisz ostateczny wynik.
            </StepDescription>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="75"
              explanation="$$3 \cdot 5 \cdot 5 = 75$$ - to liczba trzycyfrowych liczb większych od $$300$$,
              złożonych wyłącznie z cyfr parzystych."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.length === 5 && (
          <StudentNotes
            equation="x = \text{liczba spełniających warunki liczb}"
            steps={[{ step: 'x = 3 \\cdot 5 \\cdot 5' }, { step: 'x = 75' }]}
            solutions={['\\text{Liczba szukanych liczb wynosi } 75.']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
