'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '4103';
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
      if (updated.length === 3 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Suma rozwiązań równania iloczynowego"
          description="Oblicz sumę wszystkich rozwiązań poniższego równania:"
          equation="x(x-3)(x+2)=0"
        />

        {/* ETAP 1: Warunki zerowania iloczynu */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Aby równanie iloczynowe było równe zero, co najmniej jeden z jego czynników musi być
              równy zero. Określ warunki, które muszą spełnić poszczególne czynniki.
            </StepDescription>
            <ChoiceQuestion
              question="Kiedy iloczyn $$x(x-3)(x+2)=0$$ jest równy zero?"
              choices={[
                { label: '\\text{Gdy }x = 0, x - 3 = 0 \\text{ lub }x + 2 = 0', value: 'a' },
                { label: '\\text{Gdy }x = 3, x = 2,\\text{ lub } x = 0', value: 'b' },
                { label: '\\text{Tylko dla } x = 0', value: 'c' },
                { label: '\\text{Gdy }x = 3 \\text{ lub } x = 2', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Zgodnie z zasadą iloczynu równego zero, całe wyrażenie jest równe zero, gdy którykolwiek z jego czynników $$x$$, $$x-3$$, lub $$x+2$$ jest równy zero."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Wypisanie wszystkich miejsc zerowych */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Rozwiąż proste równania z poprzedniego kroku, aby znaleźć wszystkie pierwiastki.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie są wszystkie rozwiązania równania $$x(x-3)(x+2)=0$$?"
              choices={[
                { label: 'x = 0,\\ x = -3,\\ x = -2', value: 'a' },
                { label: 'x = 0,\\ x = 3,\\ x = 2', value: 'b' },
                { label: 'x = 0,\\ x = -3,\\ x = 2', value: 'c' },
                { label: 'x = 0,\\ x = 3,\\ x = -2', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Rozwiązując każdy warunek osobno, otrzymujemy: $$x = 0$$ (z pierwszego czynnika), $$x - 3 = 0 \implies x = 3$$ oraz $$x + 2 = 0 \implies x = -2$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Obliczenie sumy rozwiązań */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Dodaj do siebie wszystkie znalezione rozwiązania, aby obliczyć ich sumę.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest suma wszystkich rozwiązań?"
              choices={[
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Sumujemy znalezione pierwiastki: $$0 + 3 + (-2) = 1$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(3) && (
          <StudentNotes
            equation="x(x-3)(x+2)=0"
            steps={[
              { step: '\\text{1. Znajdź pierwiastki, przyrównując czynniki do zera:}' },
              { step: 'x_1 = 0' },
              { step: 'x_2 - 3 = 0 \\implies x_2 = 3' },
              { step: 'x_3 + 2 = 0 \\implies x_3 = -2' },
              { step: '\\text{2. Oblicz sumę pierwiastków:}' },
              { step: 'x_1 + x_2 + x_3 = 0 + 3 + (-2) = 1' },
            ]}
            solutions={['\\text{Suma rozwiązań jest równa 1.}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
