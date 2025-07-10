'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { BlockMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '4301';
  const [problemSolved, setProblemSolved] = useState(false);

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const handleStageComplete = (stage: number) => setCompletedStages((prev) => [...prev, stage]);

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Miejsce zerowe funkcji liniowej z tabeli"
          description="Dana jest funkcja liniowa $$f(x)$$ przedstawiona w tabeli. Oblicz miejsce zerowe tej funkcji."
          imageUrl="/steps-images/table4301.png"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Wybierz dwa punkty z tabeli do wyznaczenia równania prostej
              </StepDescription>
              <ChoiceQuestion
                question="Które dwa punkty można wybrać, aby napisać równanie prostej?"
                choices={[
                  {
                    label:
                      '(x_A, y_A) = (-1, \\frac{3}{\\sqrt{2}}), \\ (x_B, y_B) = (5, \\frac{7}{\\sqrt{2}})',
                    value: 'a',
                  },
                  {
                    label:
                      '(x_A, y_A) = (1, \\frac{3}{\\sqrt{2}}), \\ (x_B, y_B) = (-5, \\frac{7}{\\sqrt{2}})',
                    value: 'b',
                  },
                  {
                    label:
                      '(x_A, y_A) = (1, \\frac{1}{\\sqrt{2}}), \\ (x_B, y_B) = (5, \\frac{3}{\\sqrt{2}})',
                    value: 'c',
                  },
                  {
                    label:
                      '(x_A, y_A) = (-1, \\frac{1}{\\sqrt{2}}), \\ (x_B, y_B) = (1, \\frac{3}{\\sqrt{2}})',
                    value: 'd',
                  },
                ]}
                correctAnswer="d"
                explanation="Wybieramy dwa dowolne różne punkty z tabeli, np. $$A = (-1, \frac{1}{\sqrt{2}}), B = (1, \frac{3}{\sqrt{2}})$$."
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Podstaw wybrane punkty do wzoru na równanie prostej
              </StepDescription>
              <ChoiceQuestion
                question="Podstaw wybrane punkty do wzoruna równanie prostej przechodzącej przez punkt $$A$$ i $$B$$:<br/> $$ (y - y_A)(x_B - x_A) - (y_B - y_A)(x - x_A) = 0 $$"
                choices={[
                  {
                    label:
                      '(y - \\frac{1}{\\sqrt{2}}) (1 - (-1)) - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x - (-1)) = 0',
                    value: 'a',
                  },
                  { label: '(y - 1) (1 - (-1)) - (3 - 1) (x - (-1)) = 0', value: 'b' },
                  {
                    label:
                      '(y - \\frac{1}{\\sqrt{2}}) (2-1) - (\\frac{7}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0',
                    value: 'c',
                  },
                  {
                    label:
                      '(y - \\frac{1}{\\sqrt{2}}) (2-1) - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x - 1) = 0',
                    value: 'd',
                  },
                ]}
                correctAnswer="a"
                explanation={
                  'Podstawiamy:<br/> $$x_A = -1,\\ y_A = \\frac{1}{\\sqrt{2}},\\ x_B = 1,\\ y_B = \\frac{3}{\\sqrt{2}}$$.<br/>' +
                  'Wzór: $$(y - \\frac{1}{\\sqrt{2}}) (1 - (-1)) - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x - (-1)) = 0$$'
                }
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Podstaw y=0 aby znaleźć miejsce zerowe
              </StepDescription>
              <ChoiceQuestion
                question="Jakie równanie otrzymasz, podstawiając $$y=0$$ do poprzedniego wzoru?"
                choices={[
                  {
                    label:
                      '(0 - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0',
                    value: 'a',
                  },
                  {
                    label:
                      '(0 + \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0',
                    value: 'b',
                  },
                  { label: '(0 - 1) \\cdot 2 - (3 - 1)(x + 1) = 0', value: 'c' },
                  {
                    label:
                      '(0 - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{7}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}})(x + 1) = 0',
                    value: 'd',
                  },
                ]}
                correctAnswer="a"
                explanation="Szukamy miejsca zerowego, czyli podstawiamy $$y = 0$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Rozwiąż równanie aby znaleźć miejsce zerowe
              </StepDescription>
              <NumericQuestion
                question={
                  'Wyznacz $$x$$ z równania:<br/>' +
                  '$$ (0 - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{3}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}}) (x + 1) = 0 $$'
                }
                correctAnswer="-2"
                explanation={
                  '$$ ( -\\frac{1}{\\sqrt{2}} ) \\cdot 2 - ( \\frac{2}{\\sqrt{2}} ) (x + 1) = 0 $$<br/>' +
                  '$$ -\\frac{2}{\\sqrt{2}} - \\frac{2}{\\sqrt{2}} (x + 1) = 0 $$<br/>' +
                  '$$ -\\frac{2}{\\sqrt{2}} (x + 2) = 0 $$<br/>' +
                  'Dzielimy przez $$-\\frac{2}{\\sqrt{2}}$$:<br/> $$x + 2 = 0$$<br/> $$x = -2$$'
                }
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div className="mt-8">
              <StudentNotes
                equation="(y - y_A)(x_B - x_A) - (y_B - y_A)(x - x_A) = 0"
                steps={[
                  {
                    step: '\\text{Wybieramy punkty: }A = (-1, \\frac{1}{\\sqrt{2}}), B = (1, \\frac{3}{\\sqrt{2}})',
                  },
                  {
                    step: '\\text{Podstawiamy do wzoru: }(y - \\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{2}{\\sqrt{2}}) (x + 1) = 0',
                  },
                  {
                    step: '\\text{Podstawiamy }y=0 \\text{ :  }(-\\frac{1}{\\sqrt{2}}) \\cdot 2 - (\\frac{2}{\\sqrt{2}}) (x + 1) = 0',
                  },
                  { step: '\\text{Ostatecznie: }x + 2 = 0 \\implies x = -2' },
                ]}
                solutions={['x = -2']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
