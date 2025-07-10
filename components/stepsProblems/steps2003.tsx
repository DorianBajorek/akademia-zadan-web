'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import TaskDescription from '../TaskDescription';
import StepDescription from '../StepDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Wyznaczanie wzoru funkcji kwadratowej"
          description="Zbiorem wartości funkcji kwadratowej $$f(x)=x^2+bx+3$$ jest przedział $$[-1, ∞)$$. Wyznacz wzór funkcji w postaci kanonicznej i wartość współczynnika $$b$$."
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>Analiza zbioru wartości funkcji.</StepDescription>
              <ChoiceQuestion
                question="Co możemy wywnioskować z podanego zbioru wartości?"
                choices={[
                  { label: '\\text{Funkcja ma maksimum równe -1}', value: 'a' },
                  { label: '\\text{Funkcja ma minimum równe -1}', value: 'b' },
                  { label: '\\text{Współczynnik a jest ujemny}', value: 'c' },
                  { label: '\\text{Funkcja nie ma wierzchołka}', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Poprawna odpowiedź: Funkcja ma minimum równe $$-1$$. <br>Zbiór wartości $$[-1, \infty)$$ wskazuje, że funkcja ma minimum (bo $$a > 0$$) równe $$q = -1$$."
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Teraz ustalmy równanie jakie można ułożyć na podstawie tego, że mimimum naszej
                funkcji to -1
              </StepDescription>
              <ChoiceQuestion
                question="Jakie równanie można ułożyć korzystajc faktu, że minimum to $$-1$$?"
                choices={[
                  { label: 'q = \\frac{-Δ}{4a} = -1', value: 'a' },
                  { label: 'p = \\frac{-b}{2a} = -1', value: 'b' },
                  { label: 'f(0) = -1', value: 'c' },
                  { label: 'f(-1) = 0', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Poprawna odpowiedź: $$q = \frac{-Δ}{4a} = -1$$. <br>Wartość minimalna funkcji to $$q = -1$$. Dla funkcji kwadratowej $$q = \frac{-Δ}{4a}$$."
                onComplete={() => handleStageComplete(2)}
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>Obliczenie wartości współczynnika b.</StepDescription>
              <ChoiceQuestion
                question="Oblicz wartość współczynnika b:"
                choices={[
                  { label: 'b = 4 \\text{ lub } b = -4', value: 'a' },
                  { label: 'b = 2 \\text{ lub } b = -2', value: 'b' },
                  { label: 'b = 1 \\text{ lub } b = -1', value: 'c' },
                  { label: 'b = 3 \\text{ lub } b = -3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązanie:<br>1. $$a = 1$$ (z wzoru funkcji)<br>2. $$Δ = b^2 - 12$$<br>3. $$q = \frac{-Δ}{4a} = -1 \rightarrow Δ = 4$$
                <br>4. $$b^2 - 12 = 4 \rightarrow b^2 = 16 ⇒ b = ±4$$"
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Wyznaczmy postać kanoniczna dla b=4.</StepDescription>
              <ChoiceQuestion
                question="Jaka jest postać kanoniczna funkcji dla $$b=4$$?"
                choices={[
                  { label: 'f(x) = (x - 2)^2 - 1', value: 'a' },
                  { label: 'f(x) = (x + 4)^2 - 1', value: 'b' },
                  { label: 'f(x) = (x - 4)^2 - 1', value: 'c' },
                  { label: 'f(x) = (x + 2)^2 - 1', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Rozwiązanie:<br>1. Dla $$b=4$$: $$p = \frac{-b}{2a} = -2$$<br>2. $$q = -1$$ (z założenia)<br>3. Postać kanoniczna: $$f(x) = (x - (-2))^2 - 1 = (x + 2)^2 - 1$$"
                onComplete={() => handleStageComplete(4)}
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Wyznaczmy postać kanoniczna dla b=-4.
              </StepDescription>
              <ChoiceQuestion
                question="Jaka jest postać kanoniczna funkcji dla b=-4?"
                choices={[
                  { label: 'f(x) = (x - 2)^2 - 1', value: 'a' },
                  { label: 'f(x) = (x + 2)^2 - 1', value: 'b' },
                  { label: 'f(x) = (x - 4)^2 - 1', value: 'c' },
                  { label: 'f(x) = (x + 4)^2 - 1', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązanie:<br>1. Dla $$b=-4$$: $$p = \frac{-b}{2a} = 2$$<br>2. $$q = -1$$ (z założenia)<br>3. Postać kanoniczna: $$f(x) = (x - 2)^2 - 1$$"
                onComplete={() => handleStageComplete(5)}
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="f(x) = x^2 + bx + 3, ZW = [-1, ∞)"
                steps={[
                  { step: '\\text{1. Zbiór wartości } [-1, \\infty) \\Rightarrow q = -1, a > 0' },
                  { step: '\\text{2. Oblicz Δ: } q = -\\frac{Δ}{4a} = -1 \\Rightarrow Δ = 4' },
                  {
                    step: '\\text{3. Równanie: } b^2 - 12 = 4 \\Rightarrow b^2 = 16 \\Rightarrow b = \\pm4',
                  },
                  {
                    step: '\\text{4. Dla b=4: } p = -\\frac{4}{2} = -2 \\Rightarrow f(x) = (x + 2)^2 - 1',
                  },
                  {
                    step: '\\text{5. Dla b=-4: } p = -\\frac{-4}{2} = 2 \\Rightarrow f(x) = (x - 2)^2 - 1',
                  },
                ]}
                solutions={[
                  'b = 4 \\text{ lub } b = -4',
                  'f(x) = (x + 2)^2 - 1 \\text{ lub } f(x) = (x - 2)^2 - 1',
                ]}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
