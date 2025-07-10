'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznacz iloraz ciągu geometrycznego"
          description="Dany jest ciąg geometryczny $$(a_n)$$, w którym $$a_1 = 72$$ i $$a_4 = 9$$. Oblicz iloraz $$q$$ tego ciągu."
        />

        {/* ETAP 1: Wzór na wyraz a_4 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Rozpocznij od przypomnienia sobie wzoru na <InlineMath math="n" />
              -ty wyraz ciągu geometrycznego.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest wzór na czwarty wyraz ciągu geometrycznego?"
              choices={[
                { label: 'a_4 = a_1 q^2', value: 'a' },
                { label: 'a_4 = a_1 q^4', value: 'b' },
                { label: 'a_4 = a_1 q^3', value: 'c' },
                { label: 'a_4 = a_1 q', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Wzór ogólny: $$a_n = a_1 q^{n-1}$$. Dla $$n=4$$: $$a_4 = a_1 q^3$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Podstawienie wartości */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw znane wartości do wzoru, aby utworzyć równanie z niewiadomą{' '}
              <InlineMath math="q" />.
            </StepDescription>
            <ChoiceQuestion
              question="Podstaw dane do wzoru $$a_4 = a_1 q^3$$. Jakie otrzymasz równanie?"
              choices={[
                { label: '9 = 72 q^3', value: 'a' },
                { label: '72 = 9 q^3', value: 'b' },
                { label: '9 = 72 q^4', value: 'c' },
                { label: '72 = 9 q^2', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Po podstawieniu $$a_1 = 72$$ i $$a_4 = 9$$ mamy: $$9 = 72 q^3$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Wyznaczenie q^3 */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Przekształć równanie, aby wyznaczyć wartość <InlineMath math="q^3" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaką wartość ma $$q^3$$ po przekształceniu równania?"
              choices={[
                { label: 'q^3 = \\frac{9}{72^{2}}', value: 'a' },
                { label: 'q^3 = 8', value: 'b' },
                { label: 'q^3 = \\frac{72}{9}', value: 'c' },
                { label: 'q^3 = \\frac{1}{8}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="$$9 = 72q^3 \implies q^3 = \frac{9}{72} = \frac{1}{8}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Wyznaczenie q */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Oblicz pierwiastek sześcienny z otrzymanej wartości, aby znaleźć iloraz{' '}
              <InlineMath math="q" />.
            </StepDescription>
            <ChoiceQuestion
              question="Ile wynosi $$q$$?"
              choices={[
                { label: 'q = \\frac{1}{4}', value: 'a' },
                { label: 'q = \\frac{1}{2}', value: 'b' },
                { label: 'q = \\frac{1}{6}', value: 'c' },
                { label: 'q = \\frac{1}{8}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Pierwiastek trzeciego stopnia z $$\frac{1}{8}$$ to $$\frac{1}{2}$$, więc $$q = \frac{1}{2}$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="a_4 = a_1 q^3"
            steps={[
              { step: 'a_1 = 72, a_4 = 9' },
              { step: '9 = 72 q^3' },
              { step: 'q^3 = \\frac{9}{72} = \\frac{1}{8}' },
              { step: 'q = \\frac{1}{2}' },
            ]}
            solutions={['q = \\frac{1}{2}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
