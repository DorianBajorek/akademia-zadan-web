'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import NumericQuestion from './NumericQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription'; // Upewnij się, że ścieżka jest poprawna

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Rozwiązanie trójmianu kwadratowego"
          description="Pierwiastkami trójmianu kwadratowego $$f$$ o współczynniku $$2$$ przy najwyższej potędze są liczby $$x_1 = 1$$, $$x_2 = -2$$. Oblicz $$f(5)$$."
        />

        {/* Etap 1 */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <ChoiceQuestion
            question="Jak wygląda wzór funkcji $$f(x)$$ w postaci iloczynowej?"
            choices={[
              { label: 'f(x) = (x + 1)(x + 2)', value: 'a' },
              { label: 'f(x) = 2(x + 1)(x - 2)', value: 'b' },
              { label: 'f(x) = 2(x - 1)(x + 2)', value: 'c' },
              { label: 'f(x) = 2(x - 1)(x - 2)', value: 'd' },
            ]}
            correctAnswer="c"
            explanation="Wzór funkcji kwadratowej w postaci iloczynowej to $$f(x) = a(x - x_1)(x - x_2)$$. Podstawiając $$a = 2$$, $$x_1 = 1$$, $$x_2 = -2$$, otrzymujemy: $$f(x) = 2(x - 1)(x + 2)$$."
            onComplete={() => handleStageComplete(1)}
            img="/steps-images/postac-iloczynowa.png"
          />
        )}

        {/* Etap 2 */}
        {completedStages.includes(1) && (
          <ChoiceQuestion
            question="Podstaw $$x = 5$$ do wzoru $$f(x) = 2(x - 1)(x + 2)$$"
            choices={[
              { label: 'f(5) = 24', value: 'a' },
              { label: 'f(5) = 36', value: 'b' },
              { label: 'f(5) = 20', value: 'c' },
              { label: 'f(5) = 56', value: 'd' },
            ]}
            correctAnswer="d"
            explanation="Obliczamy: $$f(5) = 2(5 - 1)(5 + 2) = 2 \cdot 4 \cdot 7 = 56$$."
            onComplete={() => handleStageComplete(2)}
            img="/steps-images/rozwijanie.png"
          />
        )}

        {/* Notatki końcowe */}
        {completedStages.length === 2 && (
          <StudentNotes
            equation="f(x) = 2(x - 1)(x + 2), \quad f(5) = ?"
            steps={[
              { step: '\\text{Zapisujemy wzór: } f(x) = 2(x - 1)(x + 2)' },
              { step: '\\text{Podstawiamy } x = 5: f(5) = 2(5 - 1)(5 + 2)' },
              { step: 'f(5) = 2 \\cdot 4 \\cdot 7 = 56' },
            ]}
            solutions={['f(5) = 56']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
