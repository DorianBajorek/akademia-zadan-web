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
          description="Trzywyrazowy ciąg $$(12, 6, 2m-1)$$ jest arytmetyczny. Wyznacz wartość $$m$$ i określ monotoniczność ciągu."
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
                  { label: '12=\\frac{6+2m-1}{2}', value: 'a' },
                  { label: '6=\\frac{12+2m+1}{2}', value: 'b' },
                  { label: '2m-1=\\frac{12+6}{2}', value: 'c' },
                  { label: '6 = \\frac{12+2m-1}{2}', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie to $$6 = \frac{12+2m-1}{2}$$. <br>
                Dlaczego? <br>
                $$a=12, b=6, c=2m-1$$ <br>
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
                  { label: '12=10+2m', value: 'a' },
                  { label: '12=m+10', value: 'b' },
                  { label: '12=m+11', value: 'c' },
                  { label: '12=11+2m', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Poprawne rozwiązanie to $$12=11+2m$$. <br>
                Wystarczy pomnożyć równanie $$6 = \frac{12+2m-1}{2}$$ stronami przez 2."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Rozwiązanie równania i określenie monotoniczności
              </StepDescription>
              <ChoiceQuestion
                question="Oblicz wyrazy ciągu i wskaż czy ciąg jest rosnący czy malejący"
                choices={[
                  {
                    label: 'm= \\frac{1}{2}, (12,6,0) \\rightarrow \\text{ciąg malejący}',
                    value: 'a',
                  },
                  {
                    label: 'm= \\frac{1}{2}, (12,6,0) \\rightarrow \\text{ciąg rosnący}',
                    value: 'b',
                  },
                  {
                    label: 'm= \\frac{1}{2}, (12,6,1) \\rightarrow \\text{ciąg malejący}',
                    value: 'c',
                  },
                  {
                    label: 'm= \\frac{1}{2}, (12,6,1) \\rightarrow \\text{ciąg rosnący}',
                    value: 'd',
                  },
                ]}
                correctAnswer="a"
                explanation="Poprawne rozwiązanie to $$m = \frac{1}{2}, (12,6,0)$$ i ciąg malejący. <br>
                Z $$12=11+2m $$ mamy $$1=2m$$ i dalej $$m=\frac{1}{2}$$ <br>
                Jeśli $$m=\frac{1}{2}$$ to: <br>
                $$2m-1=0$$ <br>
                Otrzymujemy ciąg $$(12,6,0)$$. <br>
                Spełnione są nierówności $$12>6>0$$, więc ciąg jest malejący."
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="(12,6,2m-1) \rightarrow \text{ciąg arytmetyczny}"
                steps={[
                  {
                    step: 'a=12, b=6, c=2m-1, b=\\frac{a+c}{2}',
                  },
                  {
                    step: '6=\\frac{12+2m-1}{2}',
                  },
                  {
                    step: '12=11+2m',
                  },
                  {
                    step: 'm=0.5 \\text{ i ciąg } (12,6,0) \\text{ jest malejący}',
                  },
                ]}
                solutions={['m=0.5 \\text{ i ciąg } (12,6,0) \\text{ jest malejący}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
