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
  const taskId = '2200';
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
      if (updated.length === 2 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Układy równań - prostokąt"
          description='Na podstawie poniższej treści zadania, ułóż układ równań opisujący długości boków prostokąta: "Obwód prostokąta wynosi 60. Jeden bok jest o 10 dłuższy od drugiego."'
        />

        {/* ETAP 1: Równanie na obwód */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od przetłumaczenia informacji o obwodzie prostokąta na równanie matematyczne.
              Przyjmij, że boki prostokąta to <InlineMath math="a" /> i <InlineMath math="b" />.
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie opisuje obwód?"
              choices={[
                { label: String.raw`2(a + b) = 60`, value: 'a' },
                { label: String.raw`2a + b = 60`, value: 'b' },
                { label: String.raw`a + b = 60`, value: 'c' },
                { label: String.raw`ab = 60`, value: 'd' },
              ]}
              correctAnswer="a"
              explanation={
                String.raw`Poprawna odpowiedź: $$2(a + b) = 60$$<br>` +
                String.raw`Obwód prostokąta to suma wszystkich boków: ` +
                String.raw`$$\text{obwód} = 2 \times (\text{długość} + \text{szerokość})$$`
              }
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Równanie na relację między bokami */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Teraz zapisz w postaci równania informację o tym, że jeden bok jest o 10 dłuższy od
              drugiego.
            </StepDescription>
            <ChoiceQuestion
              question="Które równanie opisuje relację między bokami?"
              choices={[
                { label: String.raw`b = \frac{a}{10}`, value: 'a' },
                { label: String.raw`10a = b`, value: 'b' },
                { label: String.raw`a + b = 10`, value: 'c' },
                { label: String.raw`b = a + 10`, value: 'd' },
              ]}
              correctAnswer="d"
              explanation={
                String.raw`Poprawna odpowiedź: $$b = a + 10$$<br>` +
                String.raw`Stwierdzenie "jeden bok jest o $$10$$ dłuższy od drugiego" oznacza, że do długości krótszego boku należy dodać $$10$$, aby otrzymać długość dłuższego boku. ` +
                String.raw`Jeśli bok $$b$$ jest dłuższy od $$a$$, to: ` +
                String.raw`$$b = a + 10$$`
              }
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* Podsumowanie */}
        {completedStages.includes(2) && (
          <StudentNotes
            equation=""
            steps={[
              { step: '\\text{1. Równanie obwodu: } 2(a + b) = 60' },
              { step: '\\text{2. Relacja między bokami: } b = a + 10' },
            ]}
            solutions={[
              String.raw`\text{Ostateczny układ równań: } \boxed{\begin{cases} 2(a + b) = 60 \\ b = a + 10 \end{cases}}`,
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
