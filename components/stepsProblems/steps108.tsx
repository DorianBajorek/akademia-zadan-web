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
          equation="2(x+1)(x-3) < x^2 - 9"
        />

        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Przekształć nierówność do postaci <InlineMath math="ax^2 + bx + c < 0" />.
              </StepDescription>
              <ChoiceQuestion
                question="Która postać nierówności jest poprawna po przekształceniu?"
                choices={[
                  { label: 'x² - 4x - 3 < 0', value: 'a' },
                  { label: 'x² - 4x + 3 < 0', value: 'b' },
                  { label: 'x² + 4x + 3 < 0', value: 'c' },
                  { label: 'x² + 4x - 3 < 0', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Przekształcenie krok po kroku:<br>
                  $$2(x+1)(x-3) < x^2 - 9$$ <br>
                  $$2(x^2 - 2x - 3) < x^2 - 9$$ <br>
                  $$2x^2 - 4x - 6 < x^2 - 9$$ <br>
                  $$x^2 - 4x + 3 < 0$$"
                onComplete={() => handleStageComplete(1)}
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" />.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
                choices={[
                  { label: 'a = 1, b = -4, c = 3', value: 'a' },
                  { label: 'a = 1, b = 4, c = 3', value: 'b' },
                  { label: 'a = 1, b = -4, c = -3', value: 'c' },
                  { label: 'a = 1, b = 4, c = -3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Dla nierówności $$x^2 - 4x + 3 < 0$$: <br>
                  $$a = 1$$ (współczynnik przy $$x^2$$) <br>
                  $$b = -4$$ (współczynnik przy $$x$$) <br>
                  $$c = 3$$ (wyraz wolny)"
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
                correctAnswer="4"
                explanation="Wzór na deltę:
                  $$\Delta = b^2 - 4ac$$ <br>
                  Podstawiając wartości: <br>
                  $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 3 = 16 - 12 = 4$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>
                Oblicz pierwiastki równania kwadratowego.
              </StepDescription>
              <ChoiceQuestion
                question="Które wartości są poprawne dla pierwiastków $$x_1, x_2$$?"
                choices={[
                  { label: 'x₁ = 1, x₂ = 3', value: 'a' },
                  { label: 'x₁ = -1, x₂ = -3', value: 'b' },
                  { label: 'x₁ = 1, x₂ = -3', value: 'c' },
                  { label: 'x₁ = -1, x₂ = 3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Dla $$Δ = 4$$: <br>
                  $$x_1 = \frac{4 - 2}{2} = 1$$ <br>
                  $$x_2 = \frac{4 + 2}{2} = 3$$"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/dwaMiejscaZerowe.png"
              />
            </div>
          )}

          {completedStages.includes(4) && (
            <div>
              <StepDescription stepNumber={5}>
                Wskaż prawidłowy przedział rozwiązania.
              </StepDescription>
              <ChoiceQuestion
                question="Który przedział jest rozwiązaniem nierówności $$x^2 - 4x + 3 < 0$$?"
                choices={[
                  { label: 'x ∈ (1, 3)', value: 'a' },
                  { label: 'x ∈ (-∞, 1) ∪ (3, ∞)', value: 'b' },
                  { label: 'x ∈ (-∞, 1⟩ ∪ ⟨3, ∞)', value: 'c' },
                  { label: 'x ∈ ⟨1, 3⟩', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Rozwiązanie dla a > 0 i nierówności '<': <br>
                  $$x \in (1, 3)$$ <br>
                  Parabola skierowana ramionami do góry, wartości ujemne między pierwiastkami."
                onComplete={() => handleStageComplete(5)}
                img="/steps-images/ramionaParaboli.png"
                explanationImage="/steps-images/fun9.png"
              />
            </div>
          )}

          {completedStages.length === 5 && (
            <div className="mt-8">
              <StudentNotes
                equation="2(x+1)(x-3) < x^2 - 9"
                steps={[
                  { step: '2(x^2 - 2x - 3) < x^2 - 9' },
                  { step: '2x^2 - 4x - 6 < x^2 - 9' },
                  { step: 'x^2 - 4x + 3 < 0' },
                  { step: 'a = 1, b = -4, c = 3' },
                  { step: 'Δ = (-4)² - 4·1·3 = 4' },
                  { step: 'x₁ = (4 - 2)/2 = 1' },
                  { step: 'x₂ = (4 + 2)/2 = 3' },
                ]}
                solutions={['x ∈ (1, 3)']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
