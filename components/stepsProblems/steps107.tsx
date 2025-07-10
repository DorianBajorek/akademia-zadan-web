'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import NumericQuestion from './NumericQuestion';
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
          title="Nierówność kwadratowa"
          description="Rozwiąż nierówność kwadratową:"
          equation="2(x-1)(x+3) > x-1"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przekształć nierówność do postaci <InlineMath math="ax^2 + bx + c > 0" />.
              </StepDescription>
              <ChoiceQuestion
                question="Która postać nierówności jest poprawna po przekształceniu?"
                choices={[
                  { label: '2x² + 5x - 5 > 0', value: 'a' },
                  { label: '2x² + 5x - 7 > 0', value: 'b' },
                  { label: '2x² + 3x - 7 > 0', value: 'c' },
                  { label: '2x² + 3x - 5 > 0', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Aby przekształcić nierówność, wykonaj następujące kroki:
                  $$2(x-1)(x+3) > x-1$$ <br>
                  Rozwiń lewą stronę: <br>
                  $$2(x^2 + 3x - x - 3) > x - 1$$ <br>
                  $$2(x^2 + 2x - 3) > x - 1$$ <br>
                  $$2x^2 + 4x - 6 > x - 1$$ <br>
                  Przenieś wszystkie wyrazy na lewą stronę: <br>
                  $$2x^2 + 4x - 6 - x + 1 > 0$$ <br>
                  $$2x^2 + 3x - 5 > 0$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/przeksztalcenie.png"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej
                nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
                choices={[
                  { label: 'a = 2, b = 3, c = -5', value: 'a' },
                  { label: 'a = 2, b = 5, c = -5', value: 'b' },
                  { label: 'a = 2, b = 4, c = -6', value: 'c' },
                  { label: 'a = 2, b = 3, c = -7', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Współczynniki dla tej nierówności to $$a = 2, b = 3, c = -5$$. 
                  Standardowa postać równania kwadratowego to: $$ax^2 + bx + c = 0$$. <br>
                  Dla nierówności $$2x^2 + 3x - 5 > 0$$: <br>
                  $$a = 2$$ (współczynnik przy $$x^2$$) <br>
                  $$b = 3$$ (współczynnik przy $$x$$) <br>
                  $$c = -5$$ (wyraz wolny)"
                onComplete={() => handleStageComplete(2)}
                img="/steps-images/postac-ogolna.png"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Oblicz deltę (Δ) dla tej nierówności.
              </StepDescription>
              <NumericQuestion
                question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
                correctAnswer="49"
                explanation="Wzór na deltę:
                  $$\Delta = b^2 - 4ac$$ <br>
                  Podstawiając wartości: <br>
                  $$\Delta = 3^2 - 4 \cdot 2 \cdot (-5) = 9 + 40 = 49$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Oblicz pierwiastki równania kwadratowego <InlineMath math="x_1, x_2" />.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
                choices={[
                  { label: 'x₁ = -2.5, x₂ = 1', value: 'a' },
                  { label: 'x₁ = 2.5, x₂ = -1', value: 'b' },
                  { label: 'x₁ = 1.5, x₂ = -2', value: 'c' },
                  { label: 'x₁ = 2, x₂ = -1.5', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Dla dodatniej delty (Δ = 49): <br>
                  $$x_1 = \frac{-b - \sqrt{\Delta}}{2a} = \frac{-3 - 7}{4} = -2.5$$ <br>
                  $$x_2 = \frac{-b + \sqrt{\Delta}}{2a} = \frac{-3 + 7}{4} = 1$$"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Wskaż prawidłowy przedział rozwiązania nierówności.
              </StepDescription>
              <ChoiceQuestion
                question="Który przedział jest rozwiązaniem nierówności $$2x^2 + 3x - 5 > 0$$?"
                choices={[
                  { label: 'x ∈ (-∞, -2.5) ∪ (1, ∞)', value: 'a' },
                  { label: 'x ∈ (-2.5, 1)', value: 'b' },
                  { label: 'x ∈ (-∞, -2.5⟩ ∪ ⟨1, ∞)', value: 'c' },
                  { label: 'x ∈ ⟨-2.5, 1⟩', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązanie dla a > 0 i nierówności '>': <br>
                  $$x \in (-\infty, -2.5) \cup (1, \infty)$$ <br>
                  Parabola skierowana ramionami do góry, wartości dodatnie na zewnątrz pierwiastków."
                onComplete={() => handleStageComplete(5)}
                img="/steps-images/ramionaParaboli.png"
                explanationImage="/steps-images/fun8.png"
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="2(x-1)(x+3) > x-1"
                steps={[
                  { step: '2(x^2+2x-3) > x-1' },
                  { step: '2x^2 + 4x - 6 > x-1' },
                  { step: '2x^2 + 3x - 5 > 0' },
                  { step: 'a = 2, b = 3, c = -5' },
                  { step: 'Δ = 3² - 4·2·(-5) = 49' },
                  { step: 'x₁ = (-3 - 7)/4 = -2.5' },
                  { step: 'x₂ = (-3 + 7)/4 = 1' },
                ]}
                solutions={['x ∈ (-∞, -2.5) ∪ (1, ∞)']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
