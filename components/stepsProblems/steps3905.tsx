'use client';

import { useState } from 'react';
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
          title="Wyznaczanie dziedziny funkcji na podstawie wykresu"
          description="Wyznacz dziedzinę poniższej funkcji"
          imageUrl="/steps-images/steps3905.jpeg"
        />
        <div className="mt-8 space-y-8">
          {(completedStages.includes(1) || completedStages.length === 0) && (
            <div>
              <StepDescription stepNumber={1}>
                Określ lewą granicę dziedziny funkcji
              </StepDescription>
              <ChoiceQuestion
                question="Gdzie zaczyna się dziedzina funkcji na osi OX?"
                choices={[
                  { label: 'x = -3', value: 'a' },
                  { label: 'x = -2', value: 'b' },
                  { label: 'x = -4', value: 'c' },
                  { label: '\\text{Funkcja jest określona dla wszystkich } x', value: 'd' },
                ]}
                correctAnswer="c"
                explanation="Wykres zaczyna się od punktu $$(-4, 0)$$ z otwartym kółkiem, co oznacza że $$x = -4$$ nie należy do dziedziny. Będziemy ten punkt traktować jako lewą granicę dziedziny ale z otwartym nawiasem."
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps3905a.jpeg"
              />
            </div>
          )}

          {completedStages.includes(1) && (
            <div>
              <StepDescription stepNumber={2}>
                Określ prawą granicę dziedziny funkcji
              </StepDescription>
              <ChoiceQuestion
                question="Gdzie kończy się dziedzina funkcji na osi OX?"
                choices={[
                  { label: 'x = 0', value: 'a' },
                  { label: 'x = 3', value: 'b' },
                  { label: 'x = 4', value: 'c' },
                  { label: '\\text{Funkcja jest określona dla wszystkich } x', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Wykres kończy się w punkcie $$(3, 0)$$ z zamkniętym kółkiem, co oznacza że $$x = 3$$ należy do dziedziny. Miejsce to będziemy traktować jako prawą granicę dziedziny z zamkniętym nawiasem."
                onComplete={() => handleStageComplete(2)}
                explanationImage="/steps-images/steps3905b.jpeg"
              />
            </div>
          )}

          {completedStages.includes(2) && (
            <div>
              <StepDescription stepNumber={3}>
                Wybierz poprawny zapis dziedziny funkcji
              </StepDescription>
              <ChoiceQuestion
                question="Który zapis poprawnie opisuje dziedzinę funkcji f?"
                choices={[
                  { label: 'D = ⟨-3, -1⟩ ∪ (1, 3)', value: 'a' },
                  { label: 'D = (-4, 3⟩', value: 'b' },
                  { label: 'D = (0; 4⟩', value: 'c' },
                  { label: 'D = ⟨-4, 3⟩', value: 'd' },
                ]}
                correctAnswer="b"
                explanation="Dziedzina funkcji to zbiór wszystkich argumentów, dla których funkcja jest określona. W tym przypadku obejmuje wartości od $$-4$$ (bez $$-4$$, otwarty nawias) do $$3$$ (z $$3$$, zamknięty nawias). Ostateczny zapis to $$D = (-4, 3⟩$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[
                  { step: '\\text{Lewa granica: } x = -4 \\text{ (otwarty nawias)}' },
                  { step: '\\text{Prawa granica: } x = 3 \\text{ (zamknięty nawias)}' },
                ]}
                solutions={['D = (-4, 3⟩']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
