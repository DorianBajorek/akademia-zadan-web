'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const { token } = useAuth();
  const taskId = '101';
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
          title="Nierówność kwadratowa"
          description="Rozwiąż nierówność kwadratową:"
          equation="x^2 + 6x + 9 \geq 0"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Do wyznaczenia delty potrzebne nam będę współczynniki. Wybierz poprawne wartości
                współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
                choices={[
                  { label: 'a = 2, b = 6, c = 9', value: 'a' },
                  { label: 'a = 1, b = -6, c = 9', value: 'b' },
                  { label: 'a = 1, b = 6, c = 9', value: 'c' },
                  { label: 'a = -1, b = 6, c = -9', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Współczynniki dla tej nierówności to $$a = 1, b = 6, c = 9$$. 
                  Dlaczego? Równanie kwadratowe w standardowej postaci ma postać:  $$ax^2 + bx + c = 0$$.<br>
                  W przypadku nierówności $$x^2 + 6x + 9 \geq 0$$, możemy bezpośrednio odczytać współczynniki: <br>
                  $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$, <br>
                  $$b$$ to współczynnik przy $$x$$, czyli $$6$$, <br>
                  $$c$$ to wyraz wolny, czyli $$9$$. <br>
                  Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Oblicz wyróżnik <InlineMath math="\Delta" /> dla tej nierówności.
              </StepDescription>
              <NumericQuestion
                question="Oblicz wartość $$\Delta$$ i wpisz poniżej"
                correctAnswer="0"
                explanation="Mamy wzór: <br>
                  $$\Delta = b^2 - 4ac$$. <br>
                  Podstawiając wartości współczynników: <br>
                  $$\Delta = 6^2 - 4 \cdot 1 \cdot 9 = 36 - 36 = 0$$. <br>
                  Poprawna wartość delty to $$\Delta = 0$$."
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz pierwiastek równania kwadratowego <InlineMath math="x_0" />.
              </StepDescription>
              <NumericQuestion
                question="Która wartość jest poprawna dla pierwiastka $$x_0$$?"
                correctAnswer="-3"
                explanation="Ponieważ delta wynosi 0, równanie ma dokładnie jeden pierwiastek podwójny: <br>
                  $$x_0 = \frac{-b}{2a}$$. <br>
                  Podstawiając wartości: <br>
                  $$x_0 = \frac{-6}{2} = -3$$. <br>
                  Poprawna wartość pierwiastka to $$x_0 = -3$$."
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/jedno-miejsce-zerowe.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Wskaż prawidłowy przedział rozwiązania nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Który przedział jest rozwiązaniem nierówności $$x^2 + 6x + 9 \geq 0$$?"
                choices={[
                  { label: 'x ∈ ℝ', value: 'a' },
                  { label: 'x ∈ (-∞, -3\\rangle ∪ \\langle-3, ∞)', value: 'b' },
                  { label: 'x ∈ (-3, ∞)', value: 'c' },
                  { label: 'x ∈ (-∞, -3)', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązaniem nierówności $$x^2 + 6x + 9 \geq 0$$ jest cały zbiór liczb rzeczywistych:
                  $$x \in \mathbb{R}$$.
                  Wynika to z faktu, że parabola skierowana jest ramionami do góry $$(a > 0)$$, 
                  a nierówność jest typu  $$\geq$$, więc parabola jest zawsze powyżej lub na poziomie osi x."
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/ramionaParaboli.png"
                explanationImage="/steps-images/fun2.png"
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="x^2 + 6x + 9 \geq 0"
                steps={[
                  {
                    step: 'a = 1, b = 6, c = 9',
                  },
                  {
                    step: '\\Delta = b^2 - 4ac = 6^2 - 4 \\cdot 1 \\cdot 9 = 36 - 36 = 0',
                  },
                  {
                    step: 'x_0 = \\frac{-b}{2a} = \\frac{-6}{2} = -3',
                    image: '/steps-images/fun2.png',
                  },
                ]}
                solutions={['x \\in \\mathbb{R}']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
