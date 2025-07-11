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
  const taskId = '503';
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
          description="Oblicz wartość wyrażenia:"
          equation="\left( \frac{1}{81} \right)^2 \cdot \left( \sqrt{243} \right)^3"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przedstaw wszystkie liczby jako potęgi o podstawie 3:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenia są poprawne dla liczb 81 i 243?"
                choices={[
                  { label: '81 = 3^4, 243 = 3^5', value: 'a' },
                  { label: '81 = 3^3, 243 = 3^4', value: 'b' },
                  { label: '81 = 3^5, 243 = 3^6', value: 'c' },
                  { label: '81 = 3^2, 243 = 3^3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawne przekształcenia to $$81 = 3^4$$ i $$243 = 3^5$$, ponieważ: $$3^4 = 81$$ i $$3^5 = 243$$."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/definicjaPotegi.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Przekształć ułamek <InlineMath math="(\frac{1}{81})^2" /> na potęgę o podstawie{' '}
                <InlineMath math="3" />:
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  {
                    label:
                      '\\left( \\frac{1}{81} \\right)^2 = \\left( \\frac{1}{3^4} \\right)^2 = \\left( 3^{4} \\right)^2 = 3^{8}',
                    value: 'a',
                  },
                  {
                    label:
                      '\\left( \\frac{1}{81} \\right)^2 = \\left( \\frac{1}{3^4} \\right)^2 = \\left( 3^{-4} \\right)^{-2} = 3^{8}',
                    value: 'b',
                  },
                  {
                    label:
                      '\\left( \\frac{1}{81} \\right)^2 = \\left( \\frac{1}{3^4} \\right)^2 = 3^{-4} \\cdot 2 = 3^{-8}',
                    value: 'c',
                  },
                  {
                    label:
                      '\\left( \\frac{1}{81} \\right)^2 = \\left( \\frac{1}{3^4} \\right)^2 = \\left( 3^{-4}\\right)^2 = 3^{-8}',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie D: <br>1. $$81 = 3^4$$ (zamiana podstawy)<br>2. $$\frac{1}{3^4} = 3^{-4}$$ (ułamek to ujemny wykładnik)<br>3. $$(3^{-4})^2 = 3^{-8}$$ (potęga potęgi - mnożymy wykładniki)"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Przekształć wyrażenie <InlineMath math="\left( \sqrt{243} \right)^3" />
              </StepDescription>
              <ChoiceQuestion
                question="Które przekształcenie jest poprawne?"
                choices={[
                  {
                    label:
                      '\\left( \\sqrt{243} \\right)^3 = (243^{\\frac{1}{2}})^3 = (3^5)^{\\frac{1}{2} \\cdot 3} = 3^{\\frac{15}{9}}',
                    value: 'a',
                  },
                  {
                    label:
                      '\\left( \\sqrt{243} \\right)^3 = (243^{\\frac{1}{2}})^3 = (3^5)^{\\frac{1}{2} + 3} = 3^{\\frac{11}{2}}',
                    value: 'b',
                  },
                  {
                    label:
                      '\\left( \\sqrt{243} \\right)^3 = (243^{\\frac{1}{2}})^3 = (3^5)^{3} = 3^{15}',
                    value: 'c',
                  },
                  {
                    label:
                      '\\left( \\sqrt{243} \\right)^3 = (243^{\\frac{1}{2}})^3 = (3^5)^{\\frac{3}{2}} = 3^{\\frac{15}{2}}',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="Poprawne przekształcenie: <br>1. $$\sqrt{243} = 243^{\frac{1}{2}}$$<br>2. $$243 = 3^5$$<br>3. $$(3^5)^{\frac{3}{2}} = 3^{\frac{15}{2}}$$"
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
                question="Które przekształcenie jest poprawne dla $$3^{-8} \cdot 3^{\frac{15}{2}}$$"
                choices={[
                  {
                    label:
                      '3^{-8} \\cdot 3^{\\frac{15}{2}} = 3^{-8 \\cdot \\frac{15}{2}} = 3^{-60}',
                    value: 'a',
                  },
                  {
                    label:
                      '3^{-8} \\cdot 3^{\\frac{15}{2}} = 3^{-8 + \\frac{15}{2}} = 3^{-\\frac{1}{2}}',
                    value: 'b',
                  },
                  {
                    label:
                      '3^{-8} \\cdot 3^{\\frac{15}{2}} = 3^{8 + \\frac{15}{2}} = 3^{\\frac{31}{2}}',
                    value: 'c',
                  },
                  {
                    label:
                      '3^{-8} \\cdot 3^{\\frac{15}{2}} = 3^{8 - \\frac{15}{2}} = 3^{\\frac{1}{2}}',
                    value: 'd',
                  },
                ]}
                correctAnswer="b"
                explanation="Poprawne przekształcenie: $$3^{-8} \cdot 3^{\frac{15}{2}} = 3^{-8 + \frac{15}{2}} = 3^{-\frac{1}{2}}$$"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/potegiWlasnosci.png"
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="\left( \frac{1}{81} \right)^2 \cdot \left( \sqrt{243} \right)^3"
                steps={[
                  {
                    step: '81 = 3^4, \\quad 243 = 3^5',
                  },
                  {
                    step: '\\left( \\frac{1}{81} \\right)^2 = (3^4)^{-2} = 3^{-8}',
                  },
                  {
                    step: '\\left( \\sqrt{243} \\right)^3 = (3^5)^{\\frac{3}{2}} = 3^{\\frac{15}{2}}',
                  },
                  {
                    step: '3^{-8} \\cdot 3^{\\frac{15}{2}} = 3^{-8 + \\frac{15}{2}} = 3^{-\\frac{1}{2}}',
                  },
                  {
                    step: '3^{-\\frac{1}{2}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}',
                  },
                ]}
                solutions={['\\frac{\\sqrt{3}}{3}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
