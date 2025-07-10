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
  const taskId = '2404';
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
    if (!completedStages.includes(stage)) {
      setCompletedStages((prev) => [...prev, stage]);
    }
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Rozwiązywanie równań z pierwiastkami"
          description="Rozwiąż poniższe równanie, a następnie uprość wynik, usuwając niewymierność z mianownika:"
          equation="x\sqrt{3} + 2 = 2x - 8"
        />

        {/* ETAP 1: Porządkowanie równania */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Pierwszym krokiem w rozwiązaniu równania jest uporządkowanie go. Przenieś wszystkie
              wyrazy zawierające niewiadomą <InlineMath math="x" /> na jedną stronę, a pozostałe na
              drugą.
            </StepDescription>
            <ChoiceQuestion
              question="Które przekształcenie jest poprawne?"
              choices={[
                { label: 'x \\sqrt{3} - 2x = 8 + 2', value: 'a' },
                { label: 'x \\sqrt{3} + 2x = 8 - 2', value: 'b' },
                { label: 'x \\sqrt{3} - 2x = -8 - 2', value: 'c' },
                { label: '-x \\sqrt{3} - 2x = -8 - 2', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Poprawne przekształcenie to $$x\sqrt{3} - 2x = -8 - 2$$. Przenosimy $$2x$$ na lewą stronę (zmieniając znak na przeciwny) i $$+2$$ na prawą stronę (również zmieniając znak)."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Wyciągnięcie x przed nawias */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Aby wyizolować <InlineMath math="x" />, wyłącz je jako wspólny czynnik przed nawias.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda przekształcone równanie?"
              choices={[
                { label: 'x(\\sqrt{3} + 2) = 6', value: 'a' },
                { label: 'x(\\sqrt{3} - 2) = -10', value: 'b' },
                { label: 'x(2 - \\sqrt{3}) = 10', value: 'c' },
                { label: 'x(-\\sqrt{3} - 2) = -10', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawne uproszczenie to $$x(\sqrt{3} - 2) = -10$$.<br/>Lewa strona: $$x\sqrt{3} - 2x = x(\sqrt{3} - 2)$$<br/>Prawa strona: $$-8 - 2 = -10$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Rozwiązanie względem x */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Podziel obie strony równania przez wyrażenie w nawiasie, aby otrzymać surowe
              rozwiązanie dla <InlineMath math="x" />.
            </StepDescription>
            <ChoiceQuestion
              question="Które rozwiązanie jest poprawne?"
              choices={[
                { label: 'x = \\frac{10}{\\sqrt{3} + 2}', value: 'a' },
                { label: 'x = \\frac{-10}{\\sqrt{3} - 2}', value: 'b' },
                { label: 'x = \\frac{-10}{2 - \\sqrt{3}}', value: 'c' },
                { label: 'x = -\\frac{10}{\\sqrt{3} + 2}', value: 'd' },
              ]}
              correctAnswer="b"
              explanation="Poprawne rozwiązanie to $$x = \frac{-10}{\sqrt{3} - 2}$$. Dzielimy obie strony równania $$x(\sqrt{3} - 2) = -10$$ przez $$(\sqrt{3} - 2)$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Usunięcie niewymierności */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Wynik zawiera niewymierność w mianowniku. Usuń ją, mnożąc licznik i mianownik przez
              sprzężenie mianownika, czyli <InlineMath math="(\sqrt{3} + 2)" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaki jest ostateczny, uproszczony wynik?"
              choices={[
                { label: '10(2 + \\sqrt{3})', value: 'a' },
                { label: '10/(\\sqrt{3} - 2)', value: 'b' },
                { label: '10(\\sqrt{3} - 2)', value: 'c' },
                { label: '\\frac{10(2 + \\sqrt{3})}{-1}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation={`1. Mnożymy przez sprzężenie: $$\\frac{-10}{\\sqrt{3} - 2} \\cdot \\frac{\\sqrt{3} + 2}{\\sqrt{3} + 2}$$<br>
                2. Obliczamy mianownik: $$(\\sqrt{3})^2 - 2^2 = 3 - 4 = -1$$<br>
                3. Otrzymujemy: $$\\frac{-10(\\sqrt{3} + 2)}{-1}$$<br>
                4. Upraszczamy minusy: $$10(\\sqrt{3} + 2)$$, co jest równe $$10(2 + \\sqrt{3})$$.`}
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 4 && (
          <StudentNotes
            equation="x \sqrt{3} + 2 = 2x - 8"
            steps={[
              { step: 'x\\sqrt{3} - 2x = -8 - 2' },
              { step: 'x(\\sqrt{3} - 2) = -10' },
              { step: 'x = \\frac{-10}{\\sqrt{3} - 2}' },
              {
                step: 'x = \\frac{-10}{\\sqrt{3} - 2} \\cdot \\frac{\\sqrt{3} + 2}{\\sqrt{3} + 2}',
              },
              { step: 'x = \\frac{-10(\\sqrt{3} + 2)}{3 - 4} = \\frac{-10(\\sqrt{3} + 2)}{-1}' },
              { step: 'x = 10(\\sqrt{3} + 2) = 10(2 + \\sqrt{3})' },
            ]}
            solutions={['10(2 + \\sqrt{3})']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
