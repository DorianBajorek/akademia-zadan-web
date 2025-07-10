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
          equation="(x+1)^2 + 2 < 0"
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
                  { label: 'x² + 2x + 3 < 0', value: 'a' },
                  { label: 'x² + 2x - 3 < 0', value: 'b' },
                  { label: 'x² - 2x + 3 < 0', value: 'c' },
                  { label: 'x² - 2x - 3 < 0', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Przekształcenie krok po kroku: <br>
                  $$(x+1)^2 + 2 < 0$$ <br>
                  $$x^2 + 2x + 1 + 2 < 0$$ <br>
                  $$x^2 + 2x + 3 < 0$$"
                onComplete={() => handleStageComplete(1)}
                img="/steps-images/wzorySkrocenegoMnozenia.png"
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
                  { label: 'a = 1, b = 2, c = 3', value: 'a' },
                  { label: 'a = 1, b = -2, c = 3', value: 'b' },
                  { label: 'a = 1, b = 2, c = -3', value: 'c' },
                  { label: 'a = 1, b = -2, c = -3', value: 'd' },
                ]}
                correctAnswer="a"
                explanation="Dla nierówności $$x^2 + 2x + 3 < 0$$: <br>
                  $$a = 1$$ (współczynnik przy $$x^2$$) <br>
                  $$b = 2$$ (współczynnik przy $$x$$) <br>
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
                correctAnswer="-8"
                explanation="Wzór na deltę:
                  $$\Delta = b^2 - 4ac$$ <br>
                  Podstawiając wartości: <br>
                  $$\Delta = 2^2 - 4 \cdot 1 \cdot 3 = 4 - 12 = -8$$"
                onComplete={() => handleStageComplete(3)}
                img="/steps-images/delta.png"
              />
            </div>
          )}

          {completedStages.includes(3) && (
            <div>
              <StepDescription stepNumber={4}>Określ rozwiązanie nierówności.</StepDescription>
              <ChoiceQuestion
                question="Określ rozwiązanie nierówności $$x^2 + 2x + 3 < 0$$?"
                choices={[
                  { label: 'x = -8', value: 'a' },
                  { label: 'x ∈ (-8;8)', value: 'b' },
                  { label: 'x ∈ ℝ', value: 'c' },
                  { label: 'x ∈ ∅', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Rozwiązanie: <br>
                  - Δ = -8 < 0 (brak pierwiastków) <br>
                  - a = 1 > 0 (parabola skierowana ramionami do góry) <br>
                  - Nierówność '<' nie ma rozwiązań, gdy parabola jest zawsze nad osią X"
                onComplete={() => handleStageComplete(4)}
                img="/steps-images/brakMiejscZerowych.png"
                explanationImage="/steps-images/fun10.png"
              />
            </div>
          )}

          {completedStages.length === 4 && (
            <div className="mt-8">
              <StudentNotes
                equation="(x+1)^2 + 2 < 0"
                steps={[
                  { step: 'x² + 2x + 1 + 2 < 0' },
                  { step: 'x² + 2x + 3 < 0' },
                  { step: 'a = 1, b = 2, c = 3' },
                  { step: 'Δ = 2² - 4·1·3 = -8' },
                ]}
                solutions={['x ∈ ∅']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
