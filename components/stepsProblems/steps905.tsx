'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription'; // Dodany import komponentu

const Page = () => {
  const { token } = useAuth();
  const taskId = '905';
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
          title="Obniżka ceny butów"
          description="Buty, które kosztowały $$220$$ złotych, przeceniono i sprzedano za $$176$$ złotych. O ile procent obniżono cenę butów?"
        />

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak obliczyć kwotę obniżki?"
            choices={[
              { label: '220 - 176 = 44', value: 'a' },
              { label: '220 + 176 = 396', value: 'b' },
              { label: '176 - 220 = -44', value: 'c' },
              { label: '220 / 176 ≈ 1,25', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="Obniżkę obliczamy odejmując nową cenę od starej: $$220 - 176 = 44$$ zł."
            onComplete={() => handleStageComplete(1)}
          />
        )}

        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Jak zapisać obniżkę jako procent ceny początkowej?"
            choices={[
              { label: '\\frac{44}{176} × 100\\%', value: 'a' },
              { label: '\\frac{220}{44} × 100\\%', value: 'b' },
              { label: '\\frac{176}{220} × 100\\%', value: 'c' },
              { label: '\\frac{44}{ 220} × 100\\%', value: 'd' },
            ]}
            correctAnswer="d"
            explanation="Procent obniżki = (kwota obniżki / cena początkowa) × $$100\\%$$ = $$\frac{44}{220} × 100\%$$."
            onComplete={() => handleStageComplete(2)}
          />
        )}

        {completedStages.includes(2) && (
          <ChoiceQuestion
            question="Oblicz $$\frac{44}{220} × 100\%$$?"
            choices={[
              { label: '20\\%', value: 'a' },
              { label: '25\\%', value: 'b' },
              { label: '44\\%', value: 'c' },
              { label: '80\\%', value: 'd' },
            ]}
            correctAnswer="a"
            explanation="$$\frac{44}{220} = 0,2$$, a $$0,2 × 100\% = 20\%$$. Obniżka wynosi $$20\%$$."
            onComplete={() => handleStageComplete(3)}
          />
        )}

        {completedStages.length === 3 && (
          <StudentNotes
            equation="\text{Procent obniżki} = \frac{\text{Kwota obniżki}}{\text{Cena początkowa}} \times 100\\%"
            steps={[
              {
                step: '\\text{Kwota obniżki: } 220 - 176 = 44 \\text{zł}',
              },
              {
                step: '\\text{Procent obniżki: } \\frac{44}{220} \\cdot 100\\%',
              },
              {
                step: '\\frac{44}{220} = 0,2',
              },
              {
                step: '0,2 \\cdot 100\\% = 20\\%',
              },
            ]}
            solutions={['20\\%']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
