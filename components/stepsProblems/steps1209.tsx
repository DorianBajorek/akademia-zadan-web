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
    if (!completedStages.includes(stage)) {
      setCompletedStages((prev) => [...prev, stage]);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Upraszczanie wyrażeń z pierwiastkami różnych stopni"
          description="Uprość poniższe wyrażenie, wyłączając czynniki przed znak pierwiastka, a następnie grupując i redukując wyrazy podobne:"
          equation="4\sqrt[3]{24} + 2\sqrt{48} - 5\sqrt[3]{81} - 6\sqrt{12}"
        />

        {/* ETAP 1: Uproszczenie ∛24 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od uproszczenia pierwszego wyrazu. Aby uprościć{' '}
              <InlineMath math="\sqrt[3]{24}" />, znajdź największy sześcian liczby całkowitej,
              który jest dzielnikiem 24.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt[3]{24}$$?"
              choices={[
                { label: '2\\sqrt[3]{3}', value: 'a' },
                { label: '3\\sqrt[3]{2}', value: 'b' },
                { label: '\\sqrt[3]{24}', value: 'c' },
                { label: '4\\sqrt[3]{6}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Rozkładamy 24 na czynniki, szukając sześcianu: $$\sqrt[3]{24} = \sqrt[3]{8 \cdot 3} = \sqrt[3]{8} \cdot \sqrt[3]{3} = 2\sqrt[3]{3}$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Uproszczenie √48 */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Uprość drugi wyraz. Aby uprościć <InlineMath math="\sqrt{48}" />, znajdź największy
              kwadrat liczby całkowitej, który jest dzielnikiem 48.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{48}$$?"
              choices={[
                { label: '4\\sqrt{3}', value: 'a' },
                { label: '3\\sqrt{4}', value: 'b' },
                { label: '\\sqrt{48}', value: 'c' },
                { label: '6\\sqrt{2}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Rozkładamy 48 na czynniki, szukając kwadratu: $$\sqrt{48} = \sqrt{16 \cdot 3} = \sqrt{16} \cdot \sqrt{3} = 4\sqrt{3}$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Uproszczenie ∛81 */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Kontynuuj z trzecim wyrazem, upraszczając <InlineMath math="\sqrt[3]{81}" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt[3]{81}$$?"
              choices={[
                { label: '2\\sqrt[3]{9}', value: 'a' },
                { label: '3\\sqrt[3]{3}', value: 'b' },
                { label: '\\sqrt[3]{81}', value: 'c' },
                { label: '4\\sqrt[3]{5}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Rozkładamy $$81$$ na czynniki, szukając sześcianu: $$\sqrt[3]{81} = \sqrt[3]{27 \cdot 3} = \sqrt[3]{27} \cdot \sqrt[3]{3} = 3\sqrt[3]{3}$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Uproszczenie √12 */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Uprość ostatni wyraz z pierwiastkiem kwadratowym <InlineMath math="\sqrt{12}" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak uprościć $$\sqrt{12}$$?"
              choices={[
                { label: '\\sqrt{12}', value: 'a' },
                { label: '3\\sqrt{2}', value: 'b' },
                { label: '2\\sqrt{3}', value: 'c' },
                { label: '4\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Rozkładamy 12 na czynniki, szukając kwadratu: $$\sqrt{12} = \sqrt{4 \cdot 3} = \sqrt{4} \cdot \sqrt{3} = 2\sqrt{3}$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* ETAP 5: Obliczenie ostatecznego wyniku */}
        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Podstaw wszystkie uproszczone pierwiastki do pierwotnego wyrażenia. Zgrupuj osobno
              wyrazy z <InlineMath math="\sqrt{3}" /> i <InlineMath math="\sqrt[3]{3}" />, a
              następnie wykonaj ostateczne obliczenia.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest ostateczna wartość wyrażenia po uproszczeniach?"
              choices={[
                { label: '0', value: 'a' },
                { label: '7\\sqrt[3]{3} + 4\\sqrt{3}', value: 'b' },
                { label: '-11\\sqrt{3}', value: 'c' },
                { label: '-7\\sqrt[3]{3} - 4\\sqrt{3}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation={`Podstawiamy uproszczone wartości:
                  <br/>$$4(2\\sqrt[3]{3}) + 2(4\\sqrt{3}) - 5(3\\sqrt[3]{3}) - 6(2\\sqrt{3})$$
                  <br/>$$= 8\\sqrt[3]{3} + 8\\sqrt{3} - 15\\sqrt[3]{3} - 12\\sqrt{3}$$<br/>
                Grupujemy wyrazy podobne:
                  <br/>$$(8\\sqrt[3]{3} - 15\\sqrt[3]{3}) + (8\\sqrt{3} - 12\\sqrt{3})$$<br/>
                       $$= -7\\sqrt[3]{3} - 4\\sqrt{3}$$`}
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(5) && (
          <StudentNotes
            equation="4\sqrt[3]{24} + 2\sqrt{48} - 5\sqrt[3]{81} - 6\sqrt{12}"
            steps={[
              { step: '\\text{1. Uproszczenie składników:}' },
              { step: '4\\sqrt[3]{24} = 4 \\cdot 2\\sqrt[3]{3} = 8\\sqrt[3]{3}' },
              { step: '2\\sqrt{48} = 2 \\cdot 4\\sqrt{3} = 8\\sqrt{3}' },
              { step: '5\\sqrt[3]{81} = 5 \\cdot 3\\sqrt[3]{3} = 15\\sqrt[3]{3}' },
              { step: '6\\sqrt{12} = 6 \\cdot 2\\sqrt{3} = 12\\sqrt{3}' },
              { step: '\\text{2. Podstawienie i grupowanie:}' },
              { step: '8\\sqrt[3]{3} + 8\\sqrt{3} - 15\\sqrt[3]{3} - 12\\sqrt{3}' },
              { step: '(8\\sqrt[3]{3} - 15\\sqrt[3]{3}) + (8\\sqrt{3} - 12\\sqrt{3})' },
              { step: '\\text{3. Wynik:}' },
              { step: '-7\\sqrt[3]{3} - 4\\sqrt{3}' },
            ]}
            solutions={['-7\\sqrt[3]{3} - 4\\sqrt{3}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
