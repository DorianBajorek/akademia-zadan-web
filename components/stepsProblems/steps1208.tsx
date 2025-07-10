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
  const taskId = '1208';
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
    if (!completedStages.includes(stage)) {
      setCompletedStages((prev) => [...prev, stage]);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Upraszczanie wyrażeń z pierwiastkami"
          description="Uprość poniższe wyrażenie, wyłączając czynniki przed znak pierwiastka, a następnie redukując wyrazy podobne:"
          equation="2\sqrt{75} + 8\sqrt{192} - 5\sqrt{108}"
        />

        {/* ETAP 1: Uproszczenie pierwiastka z 75 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Kluczem do uproszczenia jest sprowadzenie wszystkich pierwiastków do tej samej
              postaci. Zacznij od uproszczenia pierwszego wyrazu, wyłączając czynnik przed znak
              pierwiastka w <InlineMath math="\sqrt{75}" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{75}$$?"
              choices={[
                { label: '5\\sqrt{3}', value: 'a' },
                { label: '3\\sqrt{5}', value: 'b' },
                { label: '\\sqrt{75}', value: 'c' },
                { label: '25\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Szukamy największego kwadratu liczby całkowitej, który dzieli $$75$$. Jest to $$25$$. Zatem: $$\sqrt{75} = \sqrt{25 \cdot 3} = \sqrt{25} \cdot \sqrt{3} = 5\sqrt{3}$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Uproszczenie pierwiastka z 192 */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Teraz uprość drugi pierwiastek, wyłączając czynnik przed znak pierwiastka w{' '}
              <InlineMath math="\sqrt{192}" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{192}$$?"
              choices={[
                { label: '6\\sqrt{2}', value: 'a' },
                { label: '4\\sqrt{12}', value: 'b' },
                { label: '\\sqrt{192}', value: 'c' },
                { label: '8\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Szukamy największego kwadratu liczby całkowitej, który dzieli $$192$$. Jest to $$64$$. Zatem: $$\sqrt{192} = \sqrt{64 \cdot 3} = \sqrt{64} \cdot \sqrt{3} = 8\sqrt{3}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Uproszczenie pierwiastka z 108 */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Uprość ostatni pierwiastek, wyłączając czynnik przed znak pierwiastka w{' '}
              <InlineMath math="\sqrt{108}" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{108}$$ ?"
              choices={[
                { label: '9\\sqrt{2}', value: 'a' },
                { label: '3\\sqrt{12}', value: 'b' },
                { label: '\\sqrt{108}', value: 'c' },
                { label: '6\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Szukamy największego kwadratu liczby całkowitej, który dzieli 108. Jest to 36. Zatem: $$\sqrt{108} = \sqrt{36 \cdot 3} = \sqrt{36} \cdot \sqrt{3} = 6\sqrt{3}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Obliczenie ostatecznego wyniku */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Podstaw uproszczone pierwiastki do pierwotnego wyrażenia i wykonaj ostateczne
              obliczenia.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest ostateczna wartość wyrażenia $$2\sqrt{75} + 8\sqrt{192} - 5\sqrt{108}$$?"
              choices={[
                { label: '46\\sqrt{3}', value: 'a' },
                { label: '44\\sqrt{3}', value: 'b' },
                { label: '42\\sqrt{3}', value: 'c' },
                { label: '40\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Podstawiamy uproszczone wartości: $$2(5\sqrt{3}) + 8(8\sqrt{3}) - 5(6\sqrt{3})$$ $$= 10\sqrt{3} + 64\sqrt{3} - 30\sqrt{3}$$ $$= (10 + 64 - 30)\sqrt{3} = 44\sqrt{3}.$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="2\sqrt{75} + 8\sqrt{192} - 5\sqrt{108}"
            steps={[
              {
                step: '\\text{1. Uproszczenie: } 2\sqrt{75} = 2 \cdot \sqrt{25 \cdot 3} = 2 \cdot 5\sqrt{3} = 10\sqrt{3}',
              },
              {
                step: '\\text{2. Uproszczenie: } 8\sqrt{192} = 8 \cdot \sqrt{64 \cdot 3} = 8 \cdot 8\sqrt{3} = 64\sqrt{3}',
              },
              {
                step: '\\text{3. Uproszczenie: } 5\sqrt{108} = 5 \cdot \sqrt{36 \cdot 3} = 5 \cdot 6\sqrt{3} = 30\sqrt{3}',
              },
              {
                step: '\\text{4. Redukcja: } 10\sqrt{3} + 64\sqrt{3} - 30\sqrt{3} = (10 + 64 - 30)\sqrt{3} = 44\sqrt{3}',
              },
            ]}
            solutions={['44\\sqrt{3}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
