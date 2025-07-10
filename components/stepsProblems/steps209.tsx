'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Równanie wielomianowe</h2>
        <p className="text-lg text-gray-800">Rozwiąż równanie:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^3 + 2x^2 = 5x + 10" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Przenieś wszystkie wyrazy na lewą stronę:</p>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x^3 + 2x^2 + 5x + 10 = 0', value: 'a' },
                { label: 'x^3 - 2x^2 - 5x - 10 = 0', value: 'b' },
                { label: 'x^3 + 2x^2 - 5x + 10 = 0', value: 'c' },
                { label: 'x^3 + 2x^2 - 5x - 10 = 0', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Poprawne przekształcenie to $$x^3 + 2x^2 - 5x - 10 = 0$$. 
              Dlaczego? Przenosimy wszystkie wyrazy na lewą stronę, zmieniając znaki: 
              $$x^3 + 2x^2 - 5x - 10 = 0$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Rozłóż wielomian na czynniki metodą grupowania:
            </p>
            <ChoiceQuestion
              question="Które grupowanie jest poprawne?"
              choices={[
                { label: 'x^2(x + 2) - 5(x + 2) = 0', value: 'a' },
                { label: 'x^2(x - 2) + 5(x - 2) = 0', value: 'b' },
                { label: 'x(x^2 + 2x) - 5(x + 2) = 0', value: 'c' },
                { label: 'x^2(x + 2) + 5(x + 2) = 0', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Poprawne grupowanie to $$x^2(x + 2) - 5(x + 2) = 0$$. <br>
              Dlaczego? Grupujemy wyrazy w następujący sposób: 
              $$(x^3 + 2x^2) + (-5x - 10) = 0$$, 
              następnie wyciągamy $$x^2$$ z pierwszej grupy i -5 z drugiej: 
              $$x^2(x + 2) - 5(x + 2) = 0$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}
        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Wyciągnij wspólny czynnik przed nawias:</p>
            <ChoiceQuestion
              question="Która postać jest poprawna?"
              choices={[
                { label: '(x - 2)(x^2 + 5) = 0', value: 'a' },
                { label: '(x + 2)(x^2 - 5) = 0', value: 'b' },
                { label: '(x + 2)(x^2 + 5) = 0', value: 'c' },
                { label: '(x - 2)(x^2 - 5) = 0', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawna postać to $$(x + 2)(x^2 - 5) = 0$$. 
              Dlaczego? Z poprzedniego kroku mamy $$x^2(x + 2) - 5(x + 2) = 0$$, 
              więc wyciągamy $$(x + 2)$$ przed nawias: $$(x + 2)(x^2 - 5) = 0$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}
        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Rozwiąż równanie całkowicie:</p>
            <ChoiceQuestion
              question="Które rozwiązanie jest poprawne?"
              choices={[
                { label: 'x = 2, x = \\sqrt{5}, x = -\\sqrt{5}', value: 'a' },
                { label: 'x = -2, x = 5, x = -5', value: 'b' },
                { label: 'x = -2, x = \\sqrt{5}, x = -\\sqrt{5}', value: 'c' },
                { label: 'x = 2, x = 5, x = -5', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne rozwiązanie to $$x = -2, x = \sqrt{5}, x = -\sqrt{5}$$. <br>
              Dlaczego? Rozwiązujemy równanie $$(x + 2)(x^2 - 5) = 0$$: <br>
              1. $$x + 2 = 0$$ ⇒ $$x = -2$$ <br>
              2. $$x^2 - 5 = 0$$ ⇒ $$x^2 = 5$$ ⇒ $$x = \sqrt{5}$$ lub $$x = -\sqrt{5}$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="x^3 + 2x^2 = 5x + 10"
            steps={[
              {
                step: 'x^3 + 2x^2 - 5x - 10 = 0',
              },
              {
                step: 'x^2(x + 2) - 5(x + 2) = 0',
              },
              {
                step: '(x + 2)(x^2 - 5) = 0',
              },
              {
                step: 'x + 2 = 0 \\Rightarrow x = -2',
              },
              {
                step: 'x^2 - 5 = 0 \\Rightarrow x^2 = 5 \\Rightarrow x = \\sqrt{5} \\text{ lub } x = -\\sqrt{5}',
              },
            ]}
            solutions={['x = -2', 'x = \\sqrt{5}', 'x = -\\sqrt{5}']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
