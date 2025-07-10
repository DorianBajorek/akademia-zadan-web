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

const Page = () => {
  const { token } = useAuth();
  const taskId = '705';
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
      if (updated.length === 5 && !problemSolved) {
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
          description="Ile jest wszystkich liczb naturalnych czterocyfrowych, w których zapisie dziesiętnym cyfry się nie powtarzają?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zastanówmy się, jakie cyfry mogą się pojawić na pierwszej pozycji liczby.
            </StepDescription>
            <ChoiceQuestion
              question="Na pierwszej (od lewej) pozycji może znaleźć się:"
              choices={[
                { label: '\\text{7 cyfr}', value: 'a' },
                { label: '\\text{8 cyfr}', value: 'b' },
                { label: '\\text{9 cyfr}', value: 'c' },
                { label: '\\text{10 cyfr}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Na pierwszej pozycji mogą znaleźć się $$9$$ cyfr - wszystkie poza $$0$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Zastanówmy się, ile cyfr może się pojawić na drugiej pozycji, jeśli pierwsza została
              już ustalona.
            </StepDescription>
            <ChoiceQuestion
              question="Na drugiej (od lewej) pozycji, dla ustalonych cyfr na wcześniejszych pozycjach, może znaleźć się:"
              choices={[
                { label: '\\text{7 cyfr}', value: 'a' },
                { label: '\\text{8 cyfr}', value: 'b' },
                { label: '\\text{9 cyfr}', value: 'c' },
                { label: '\\text{10 cyfr}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Na drugiej pozycji może znaleźć się $$9$$ cyfr, ponieważ nie mogą się one powtarzać - zatem $$10 - 1 = 9$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Teraz przyjrzyjmy się trzeciej pozycji – ile cyfr możemy tam umieścić?
            </StepDescription>
            <ChoiceQuestion
              question="Na trzeciej (od lewej) pozycji, dla ustalonych cyfr na wcześniejszych pozycjach, może znaleźć się:"
              choices={[
                { label: '\\text{7 cyfr}', value: 'a' },
                { label: '\\text{8 cyfr}', value: 'b' },
                { label: '\\text{9 cyfr}', value: 'c' },
                { label: '\\text{10 cyfr}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Na trzeciej pozycji może znaleźć się $$8$$ cyfr - ponieważ dwie zostały już zajęte, pozostało $$10 - 2 = 8$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Ustalmy teraz możliwe cyfry na ostatniej, czwartej pozycji.
            </StepDescription>
            <ChoiceQuestion
              question="Na czwartej (od lewej), czyli ostatniej, pozycji, dla ustalonych cyfr na wcześniejszych pozycjach, może znaleźć się:"
              choices={[
                { label: '\\text{7 cyfr}', value: 'a' },
                { label: '\\text{8 cyfr}', value: 'b' },
                { label: '\\text{9 cyfr}', value: 'c' },
                { label: '\\text{10 cyfr}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Na czwartej pozycji może znaleźć się $$7$$ cyfr - trzy zostały już zajęte, więc $$10 - 3 = 7$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Wyraźmy liczbę możliwości za pomocą wzoru.
            </StepDescription>
            <ChoiceQuestion
              question="Ostateczna liczba możliwych do uzyskania cyfr przedstawia się wzorem:"
              choices={[
                { label: '10 + 9 + 8 + 7', value: 'a' },
                { label: '9 + 9 + 8 + 7', value: 'b' },
                { label: '10 \\cdot 9 \\cdot 8 \\cdot 7', value: 'c' },
                { label: '9 \\cdot 9 \\cdot 8 \\cdot 7', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Po kolei: $$9$$ cyfr na pierwszej pozycji (bez $$0$$), $$9$$ na drugiej (bez jednej z poprzednich), potem $$8$$ i $$7$$. Zatem wzór: $$9 \cdot 9 \cdot 8 \cdot 7$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {completedStages.includes(5) && (
          <>
            <StepDescription stepNumber={6}>
              Oblicz wynik na podstawie wcześniej zapisanego wzoru.
            </StepDescription>
            <NumericQuestion
              question="Podaj ostateczny wynik - liczbę rozważanych liczb:"
              correctAnswer="4536"
              explanation="Zgodnie z wzorem: $$9 \cdot 9 \cdot 8 \cdot 7 = 4536$$."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {completedStages.length === 6 && (
          <StudentNotes
            equation="\text{x - liczba szukanych liczb}"
            steps={[{ step: 'x = 9 \\cdot 9 \\cdot 8 \\cdot 7' }, { step: 'x = 4536' }]}
            solutions={['\\text{Liczba szukanych liczb wynosi 4536.}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
