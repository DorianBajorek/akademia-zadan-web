'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
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
          title="Trzywyrazowy ciąg arytmetyczny"
          description="Trzywyrazowy ciąg $$(2m-5, 4, 9)$$ jest arytmetyczny. Wyznacz wartość $$m$$ i określ monotoniczność ciągu."
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Warunek na ciąg arytmetyczny</StepDescription>
              <ChoiceQuestion
                question="Jeśli trzywyrazowy ciąg $$(a,b,c)$$ jest arytmetyczny, to które równanie jest spełnione?"
                choices={[
                  { label: 'a+b+c=0', value: 'a' },
                  { label: 'b-c=2a', value: 'b' },
                  { label: 'b = \\frac{a+c}{2}', value: 'c' },
                  { label: '2c=a+b', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Z definicji ciągu arytmetycznego wiemy, że $$a_n=\frac{a_{n-1} +a_{n+1}}{2}$$ czyli $$b = \frac{a+c}{2}$$"
                onComplete={() => handleStageComplete(1)}
                img={'/steps-images/warunek_ciag_arytmetyczny.png'}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Zastosowanie warunku do naszego ciągu
              </StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne?"
                choices={[
                  { label: '2m-5=\\frac{4+9}{2}', value: 'a' },
                  { label: '4=\\frac{2m+5+9}{2}', value: 'b' },
                  { label: '9=\\frac{4+2m-5}{2}', value: 'c' },
                  { label: '4 = \\frac{2m-5+9}{2}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie to $$4 = \frac{2m-5+9}{2}$$. <br>
                Dlaczego? <br>
                $$a=2m-5, b=4, c=9$$ <br>
                $$b = \frac{a+c}{2}$$"
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Uproszczenie równania</StepDescription>
              <ChoiceQuestion
                question="Które równanie jest poprawne po uproszczeniu?"
                choices={[
                  { label: '8=2m+4', value: 'a' },
                  { label: '8=2m-4', value: 'b' },
                  { label: '4=2m-14', value: 'c' },
                  { label: '4=m+4', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne rozwiązanie to $$8=2m+4$$. <br>
                $$4 = \frac{2m-5+9}{2}$$ <br> 
                $$4 = \frac{2m+4}{2}$$ (Mnożymy stronami razy 2)<br> 
                $$8=2m+4 $$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Rozwiązanie równania</StepDescription>
              <NumericQuestion
                question="Rozwiąż równanie $$8=2m+4$$. Podaj wartość m"
                correctAnswer="2"
                explanation="Poprawne rozwiązanie to $$m = 2$$. <br>
                Skoro $$8=2m+4$$, to $$4=2m$$ i dzieląc przez dwa otrzymujemy $$m=2$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>Określenie monotoniczności ciągu</StepDescription>
              <ChoiceQuestion
                question="Dokończ zdanie. Ciąg $$(-1, 4, 9)$$ jest "
                choices={[
                  { label: '\\text{rosnący}', value: 'a' },
                  { label: '\\text{malejący}', value: 'b' },
                ]}
                correctAnswer="a"
                explanation="Poprawne rozwiązanie to ciąg rosnący ponieważ $$-1<4<9$$"
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="(2m-5,4,9) \rightarrow \text{ciąg arytmetyczny}"
                steps={[
                  {
                    step: 'a=2m-5, b=4, c=9, b=\\frac{a+c}{2}',
                  },
                  {
                    step: '4=\\frac{2m-5+9}{2}',
                  },
                  {
                    step: '8=2m+4',
                  },
                  {
                    step: 'm=2 \\text{ i ciąg } (-1,4,9) \\text{ jest rosnący}',
                  },
                ]}
                solutions={['m=2 \\text{ i ciąg } (-1,4,9) \\text{ jest rosnący}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
