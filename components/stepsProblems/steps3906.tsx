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
      <div className="max-w-5xl w-full mx-auto">
        <TaskDescription
          title="Wyznaczanie dziedziny funkcji na podstawie wykresu"
          description="Wyznacz dziedzinę poniższej funkcji"
          imageUrl="/steps-images/steps3906av1.jpeg"
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
                correctAnswer="a"
                explanation="Wykres zaczyna się od punktu $$(-3, -1)$$ z pustym kółkiem, co oznacza że $$x = -3$$ nie na należy do dziedziny ale będzie początkiem przedziału dziedziny. Miejsce to będziemy traktować jako lewą granicę dziedziny ale z otwartym nawiasem."
                onComplete={() => handleStageComplete(1)}
                explanationImage="/steps-images/steps3906bv2.jpeg"
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
                explanation="Wykres kończy się w punkcie $$(3, 3)$$ z zamkniętym kółkiem, co oznacza że $$x = 3$$ należy do dziedziny. Miejsce to będziemy traktować jako prawą granicę dziedziny ale z zamkniętym nawiasem."
                onComplete={() => handleStageComplete(2)}
                explanationImage="/steps-images/steps3906cv2.jpeg"
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
                  { label: 'D = (-3;  -1) \\cup (0;3\\rangle', value: 'a' },
                  { label: 'D = \\langle-4, 5\\rangle', value: 'b' },
                  { label: 'D = (-3; 3)', value: 'c' },
                  { label: 'D = (-3; 3⟩', value: 'd' },
                ]}
                correctAnswer="d"
                explanation="Dziedzina funkcji to zbiór wszystkich argumentów, dla których funkcja jest określona. W naszym przypadku nasza funkcja zaczyna się w $$-3$$ (kółko puste więc nawiast otwrty), a kończy w $$3$$ (kółko pełne). Może wydawać się, że występuję przerwa. Mimo nieciągłości funkcji, każdy argument naszej funkcji jest gdzieś osiągany więc z pozoru podejrzana przerwa nie jest istotna. Dlatego zapisujemy dziedzinę jako $$D = (-3; 3⟩$$."
                onComplete={() => handleStageComplete(3)}
              />
            </div>
          )}

          {completedStages.length === 3 && (
            <div className="mt-8">
              <StudentNotes
                equation=""
                steps={[]}
                solutions={['D = ⟨-3, -1⟩ ∪ \\langle1, 3\\rangle']}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
