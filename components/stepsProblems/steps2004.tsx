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
  const taskId = '2004';
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
      if (updated.length === 4 && !problemSolved) {
        setProblemSolved(true);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie wzoru funkcji kwadratowej"
          description="Zbiorem wartości funkcji kwadratowej  $$f(x) = x^2+2x+c $$ jest przedział $$[-2, ∞)$$. Wyznacz współczynnik $$c$$ i zapisz wzór funkcji w postaci kanonicznej."
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Analiza zbioru wartości funkcji.</StepDescription>
              <ChoiceQuestion
                question="Co wynika z podanego zbioru wartości funkcji?"
                choices={[
                  { label: '\\text{ Funkcja osiąga minimum równe -2 }', value: 'a' },
                  { label: '\\text{ Funkcja osiąga maksimum równe -2}', value: 'b' },
                  { label: '\\text{ Współczynnik kierunkowy jest ujemny}', value: 'c' },
                  { label: '\\text{ Funkcja nie ma miejsc zerowych}', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawna odpowiedź: Funkcja osiąga minimum równe $$-2$$. <br>Zbiór wartości $$[-2, \infty)$$ wskazuje, że funkcja ma minimum (bo $$a > 0$$) równe $$q = -2$$."
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Wyznaczenie równania dla współczynnika c.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie równanie pozwoli wyznaczyć współczynnik $$c$$?"
                choices={[
                  { label: 'f(0) = -2', value: 'a' },
                  { label: 'f(-2) = 0', value: 'b' },
                  { label: 'q = \\frac{-Δ}{4a} = -2', value: 'c' },
                  { label: 'p = \\frac{-b}{2a} = -2', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Poprawna odpowiedź: $$q = \frac{-Δ}{4a} = -2$$. <br>Wartość minimalna funkcji to $$q = -2$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Obliczenie wartości współczynnika c.</StepDescription>
              <ChoiceQuestion
                question="Oblicz wartość współczynnika c:"
                choices={[
                  { label: 'c = 1', value: 'a' },
                  { label: 'c = -1', value: 'b' },
                  { label: 'c = 2', value: 'c' },
                  { label: 'c = -2', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Rozwiązanie:<br>1. $$a = 1$$, $$b = 2$$<br>2. $$Δ = b² - 4ac = 4 - 4c$$<br>3. $$q = \frac{-Δ}{4} = -2 \rightarrow Δ = 8$$<br>4. $$4 - 4c = 8 \rightarrow -4c = 4 ⇒ c = -1$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Obliczenie współrzędnej p wierzchołka.
              </StepDescription>
              <ChoiceQuestion
                question="Oblicz współrzędną p wierzchołka paraboli:"
                choices={[
                  { label: 'p = -1', value: 'a' },
                  { label: 'p = 1', value: 'b' },
                  { label: 'p = -2', value: 'c' },
                  { label: 'p = 2', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Obliczenia:<br>$$p = -\frac{b}{2a} = -\frac{2}{2} = -1$$"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/wierzcholek_paraboli.png"
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Zapisanie postaci kanonicznej funkcji.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest postać kanoniczna funkcji?"
                choices={[
                  { label: 'f(x) = (x + 1)^2 - 2', value: 'a' },
                  { label: 'f(x) = (x - 1)^2 - 2', value: 'b' },
                  { label: 'f(x) = (x + 2)^2 - 1', value: 'c' },
                  { label: 'f(x) = (x - 2)^2 - 1', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązanie:<br>1. $$p = -1, q = -2$$<br>2. Postać kanoniczna: $$f(x) = a(x - p)^2 + q = (x - (-1))^2 - 2 = (x + 1)^2 - 2$$"
                onComplete={() => handleStageComplete(5)}
                img="/steps-images/postac-kanoniczna.png"
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = x^2 + 2x + c, ZW = [-2, ∞)"
                steps={[
                  { step: '\\text{1. Z założenia: } q = -2, \\text{ bo } ZW = [-2, \\infty)' },
                  { step: '\\text{2. Oblicz Δ: } -\\frac{Δ}{4} = -2 \\Rightarrow Δ = 8' },
                  {
                    step: '\\text{3. Oblicz c: } Δ = b^2 - 4ac \\Rightarrow 8 = 4 - 4c \\Rightarrow c = -1',
                  },
                  { step: '\\text{4. Oblicz p: } p = -\\frac{b}{2a} = -1' },
                  { step: '\\text{5. Postać kanoniczna: } f(x) = (x + 1)^2 - 2' },
                ]}
                solutions={['c = -1', 'f(x) = (x + 1)^2 - 2']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
