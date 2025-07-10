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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wyrażenia wykładniczego"
          description="Oblicz wartość wyrażenia:"
          equation="\left( \frac{1}{16} \right)^8 \cdot 8^{16}"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przedstaw wszystkie liczby jako potęgi o podstawie 2:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenia są poprawne dla liczb 16 i 8?"
                choices={[
                  { label: '16 = 2^4, 8 = 2^3', value: 'a' },
                  { label: '16 = 2^3, 8 = 2^4', value: 'b' },
                  { label: '16 = 2^5, 8 = 2^2', value: 'c' },
                  { label: '16 = 2^2, 8 = 2^3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenia to $$16 = 2^4$$ i $$8 = 2^3$$, ponieważ: $$2^4 = 16$$ i $$2^3 = 8$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaPotegi.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przekształć ułamek <InlineMath math="\frac{1}{16}" /> na potęgę o podstawie{' '}
                <InlineMath math="2" />:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  {
                    label:
                      '\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = \\left( 2^{4} \\right)^8 = 2^{32}',
                    value: 'a',
                  },
                  {
                    label:
                      '\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = \\left( 2^{-4} \\right)^{-8} = 2^{32}',
                    value: 'b',
                  },
                  {
                    label:
                      '\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = 2^{-4} \\cdot 8 = 2^{-32}',
                    value: 'c',
                  },
                  {
                    label:
                      '\\left( \\frac{1}{16} \\right)^8 = \\left( \\frac{1}{2^4} \\right)^8 = \\left( 2^{-4}\\right)^8 = 2^{-32}',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie D: <br>1. $$16 = 2^4$$ (zamiana podstawy)<br>2. $$\frac{1}{2^4} = 2^{-4}$$ (ułamek to ujemny wykładnik)<br>3. $$(2^{-4})^8 = 2^{-32}$$ (potęga potęgi - mnożymy wykładniki)"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przekształć wyrażenie <InlineMath math="8^{16}" />
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  { label: '8^{16} = (2^3)^{16} = 2^{19}', value: 'a' },
                  { label: '8^{16} = (2^3)^{16} = 2^{3 \\cdot 16} = 2^{48}', value: 'b' },
                  { label: '8^{16} = (2^4)^{16} = 2^{64}', value: 'c' },
                  { label: '8^{16} = (2^2)^{16} = 2^{32}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenie to $$8^{16} = (2^3)^{16} = 2^{3 \cdot 16} = 2^{48}$$. Stosujemy prawo potęgowania potęgi."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Wykonaj mnożenie potęg o tej samej podstawie:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne dla $$2^{-32} \cdot 2^{48}$$?"
                choices={[
                  { label: '2^{-32} \\cdot 2^{48} = 2^{-32 + 48} = 2^{16}', value: 'a' },
                  { label: '2^{-32} \\cdot 2^{48} = 2^{-32 \\cdot 48}', value: 'b' },
                  { label: '2^{-32} \\cdot 2^{48} = 2^{32 + 48} = 2^{80}', value: 'c' },
                  { label: '2^{-32} \\cdot 2^{48} = 2^{32 - 48} = 2^{-16}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenie to $$2^{-32} \cdot 2^{48} = 2^{-32 + 48} = 2^{16}$$. Gdy mnożymy potęgi o tej samej podstawie, dodajemy wykładniki."
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\left( \frac{1}{16} \right)^8 \cdot 8^{16}"
                steps={[
                  {
                    step: '16 = 2^4, \\quad 8 = 2^3',
                  },
                  {
                    step: '\\left( \\frac{1}{16} \\right)^8 = (2^4)^{-8} = 2^{-32}',
                  },
                  {
                    step: '8^{16} = (2^3)^{16} = 2^{48}',
                  },
                  {
                    step: '2^{-32} \\cdot 2^{48} = 2^{-32 + 48} = 2^{16}',
                  },
                  {
                    step: '2^{16} = 65536',
                  },
                ]}
                solutions={['65536']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
