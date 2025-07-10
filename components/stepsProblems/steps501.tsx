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
  const taskId = '501';
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
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Obliczanie wyrażenia wykładniczego"
          description="Zapisz w postaci jednej potęgi o podstawie 3:"
          equation="3^{-3} \cdot \sqrt{27}"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <div>
            <StepDescription stepNumber={1}>
              Przedstaw wszystkie liczby jako potęgi o podstawie 3. Zacznijmy od liczby 27.
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla liczby 27?"
              choices={[
                { label: '27 = 3^2', value: 'a' },
                { label: '27 = 3^3', value: 'b' },
                { label: '27 = 3^4', value: 'c' },
                { label: '27 = 3^5', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$27 = 3^3$$."
              onComplete={() => handleStageComplete(1)}
              img="/steps-images/definicjaPotegi.png"
            />
          </div>
        )}

        {completedStages.includes(1) && (
          <div>
            <StepDescription stepNumber={2}>
              Zapiszmy teraz pierwiastek jako wykładnik potęgi.
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne dla wyrażenia $$\sqrt{27}$$?"
              choices={[
                { label: '\\sqrt{27} = 27^{\\frac{1}{3}} = (3^3)^{\\frac{1}{3}}', value: 'a' },
                { label: '\\sqrt{27} = 27^{2} = (3^3)^{2}', value: 'b' },
                { label: '\\sqrt{27} = 27^{-\\frac{1}{2}} = (3^3)^{-\\frac{1}{2}}', value: 'c' },
                { label: '\\sqrt{27} = 27^{\\frac{1}{2}} = (3^3)^{\\frac{1}{2}}', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$\sqrt{27} = 27^{\frac{1}{2}} = (3^3)^{\frac{1}{2}}$$, ponieważ pierwiastek kwadratowy to potęga o wykładniku $$\frac{1}{2}$$."
              onComplete={() => handleStageComplete(2)}
              img="/steps-images/pierwiastekPotega.png"
            />
          </div>
        )}

        {completedStages.includes(2) && (
          <div>
            <StepDescription stepNumber={3}>
              Zastosuj prawo potęgowania do wyrażenia
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                {
                  label: '(3^3)^{\\frac{1}{2}} = 3^{3 \\cdot \\frac{1}{2}} = 3^{\\frac{3}{2}}',
                  value: 'a',
                },
                {
                  label: '(3^3)^{\\frac{1}{2}} = 3^{3 + \\frac{1}{2}} = 3^{\\frac{7}{2}}',
                  value: 'b',
                },
                {
                  label: '(3^3)^{\\frac{1}{2}} = 3^{3 - \\frac{1}{2}} = 3^{\\frac{5}{2}}',
                  value: 'c',
                },
                { label: '(3^3)^{\\frac{1}{2}} = 3^{\\frac{1}{2}}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne przekształcenie to $$(3^3)^{\frac{1}{2}} = 3^{3 \cdot \frac{1}{2}} = 3^{\frac{3}{2}}$$. Gdy mamy potęgę potęgi, mnożymy wykładniki."
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
              question="Które przekształcenie jest poprawne dla wyrażenia $$3^{-3} \cdot 3^{\frac{3}{2}}$$?"
              choices={[
                {
                  label:
                    '3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 \\cdot \\frac{3}{2}} = 3^{-\\frac{9}{2}}',
                  value: 'a',
                },
                {
                  label:
                    '3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 + \\frac{3}{2}} = 3^{-\\frac{3}{2}}',
                  value: 'b',
                },
                {
                  label:
                    '3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 - \\frac{3}{2}} = 3^{-\\frac{9}{2}}',
                  value: 'c',
                },
                {
                  label: '3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{3 + \\frac{3}{2}} = 3^{\\frac{9}{2}}',
                  value: 'd',
                },
              ]}
              correctAnswer="b"
              explanation="Poprawne przekształcenie to $$3^{-3} \cdot 3^{\frac{3}{2}} = 3^{-3 + \frac{3}{2}} = 3^{-\frac{3}{2}}$$. Gdy mnożymy potęgi o tej samej podstawie, dodajemy wykładniki."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/potegiWlasnosci.png"
            />
          </div>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="3^{-3} \cdot \sqrt{27}"
            steps={[
              {
                step: '3^{-3} \\cdot \\sqrt{27} = 3^{-3} \\cdot \\sqrt{3^3} = 3^{-3} \\cdot (3^3)^{\\frac{1}{2}}= 3^{-3} \\cdot 3^{\\frac{3}{2}} = 3^{-3 + \\frac{3}{2}} = 3^{-\\frac{3}{2}}',
              },
            ]}
            solutions={['3^{-\\frac{3}{2}}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
