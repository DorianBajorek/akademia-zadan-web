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
    setCompletedStages((prev) => (prev.includes(stage) ? prev : [...prev, stage]));
  };

  const resetLesson = () => {
    setCompletedStages([]);
  };

  return (
    <div className="min-h-screen p-5 bg-gray-50">
      <div className="max-w-5xl w-full bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Analiza wykresu funkcji liniowej"
          description="Na rysunku przedstawiony jest fragment wykresu pewnej funkcji liniowej:"
          equation="y = ax + b"
        />

        <img
          src="/problemImages/problem4500.jpg"
          alt="Wykres funkcji liniowej"
          className="mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl h-auto mt-6 rounded-md shadow"
        />

        <div className="mt-8 space-y-10">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <>
              <StepDescription stepNumber={1}>
                Określ znak współczynnika kierunkowego <InlineMath math="a" /> na podstawie wykresu.
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest znak współczynnika a?"
                choices={[
                  { label: 'a > 0 \\text{ (funkcja rosnąca)}', value: 'a' },
                  { label: 'a < 0 \\text{ (funkcja malejąca)}', value: 'b' },
                  { label: 'a = 0 \\text{ (funkcja stała)}', value: 'c' },
                ]}
                correctAnswer="b"
                explanation="Współczynnik $$a$$ określa kierunek funkcji liniowej. Jeśli wykres opada z lewa na prawo, to $$a < 0$$ (funkcja jest malejąca)."
                onComplete={() => handleStageComplete(1)}
              />
            </>
          )}

          {completedStages.includes(1) && (
            <>
              <StepDescription stepNumber={2}>
                Określ znak wyrazu wolnego <InlineMath math="b" /> na podstawie wykresu.
              </StepDescription>
              <ChoiceQuestion
                question="Jaki jest znak współczynnika b?"
                choices={[
                  { label: 'b > 0 \\text{ (przecięcie z OY powyżej zera)}', value: 'a' },
                  { label: 'b < 0 \\text{ (przecięcie z OY poniżej zera)}', value: 'b' },
                  { label: 'b = 0 \\text{ (przecięcie w początku układu)}', value: 'c' },
                ]}
                correctAnswer="a"
                explanation="Współczynnik $$b$$ to punkt przecięcia z osią $$OY$$. Jeśli wykres przecina oś OY powyżej zera, to $$b > 0$$."
                onComplete={() => handleStageComplete(2)}
              />
            </>
          )}

          {completedStages.includes(2) && (
            <>
              <StepDescription stepNumber={3}>
                Wybierz poprawną kombinację znaków współczynników.
              </StepDescription>
              <ChoiceQuestion
                question="Jakie znaki mają współczynniki a i b?"
                choices={[
                  { label: 'a < 0 \\text{ i } b < 0', value: 'a' },
                  { label: 'a < 0 \\text{ i } b > 0', value: 'b' },
                  { label: 'a > 0 \\text{ i } b < 0', value: 'c' },
                  { label: 'a > 0 \\text{ i } b > 0', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Na podstawie analizy wykresu: funkcja jest malejąca (a < 0) i przecina oś OY powyżej zera (b > 0)."
                onComplete={() => handleStageComplete(3)}
              />
            </>
          )}

          {completedStages.length === 3 && (
            <div className="space-y-6">
              <StudentNotes
                equation="y = ax + b"
                steps={[
                  {
                    step: '\\text{Wykres opada z lewa na prawo → funkcja malejąca → } a < 0',
                  },
                  {
                    step: '\\text{Wykres przecina oś OY powyżej zera → } b > 0',
                  },
                  {
                    step: '\\text{Ostatecznie: a < 0 i b > 0}',
                  },
                ]}
                solutions={['\\text{Odpowiedź B: }a < 0 \\text{ i } b > 0']}
              />
              <button
                onClick={resetLesson}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                Spróbuj ponownie
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
