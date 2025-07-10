'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';
import StepDescription from '../StepDescription';
import TaskDescription from '../TaskDescription';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-3xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Równanie iloczynowe – liczba rozwiązań"
          description="Ustal, ile dokładnie rozwiązań w zbiorze liczb rzeczywistych ma poniższe równanie:"
          equation="2x(x + 3)(x^2 + 25) = 0"
        />

        {/* ETAP 1: Analiza pierwszego czynnika */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Aby iloczyn był równy zero, jeden z jego czynników musi być zerem. Przeanalizujmy
              każdy czynnik osobno, zaczynając od <InlineMath math="2x" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania $$2x = 0$$?"
              choices={[
                { label: 'x = 0', value: 'a' },
                { label: 'x = 2', value: 'b' },
                { label: 'x = -2', value: 'c' },
                { label: '\\text{Brak rozwiązań}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Dzieląc obie strony przez 2, otrzymujemy $$x = 0$$. To jest pierwsze rozwiązanie rzeczywiste."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Analiza drugiego czynnika */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Teraz znajdź pierwiastek drugiego czynnika: <InlineMath math="x + 3 = 0" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania $$x + 3 = 0$$?"
              choices={[
                { label: 'x = \\frac{1}{3}', value: 'a' },
                { label: 'x = 3', value: 'b' },
                { label: 'x = -3', value: 'c' },
                { label: 'Brak rozwiązań', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Przenosząc $$3$$ na drugą stronę, otrzymujemy $$x = -3$$. To jest drugie rozwiązanie rzeczywiste."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Analiza trzeciego czynnika */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Na koniec przeanalizuj trzeci czynnik: <InlineMath math="x^2 + 25 = 0" />. Czy ma on
              rozwiązania w zbiorze liczb rzeczywistych?
            </StepDescription>
            <ChoiceQuestion
              question="Czy równanie $$x^2 + 25 = 0$$ ma rozwiązania rzeczywiste?"
              choices={[
                { label: '\\text{Nie ma rozwiązań rzeczywistych}', value: 'a' },
                { label: '\\text{Ma dwa rozwiązania rzeczywiste}', value: 'b' },
                { label: '\\text{Ma jedno rozwiązanie rzeczywiste}', value: 'c' },
                { label: '\\text{Ma nieskończenie wiele rozwiązań}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Przekształcamy równanie do $$x^2 = -25$$. Nie istnieje liczba rzeczywista, której kwadrat jest ujemny. Ten czynnik nie dostarcza rozwiązań rzeczywistych."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Podsumowanie */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Zbierz wszystkie unikalne, rzeczywiste rozwiązania z analizy poszczególnych czynników,
              aby określić ostateczną odpowiedź.
            </StepDescription>
            <ChoiceQuestion
              question="Ile rozwiązań rzeczywistych ma całe równanie i jakie to są liczby?"
              choices={[
                { label: '\\text{Dwa rozwiązania: } -3 \\text{ oraz } 0', value: 'a' },
                { label: '\\text{Dwa rozwiązania: } -3 \\text{ oraz } 2', value: 'b' },
                { label: '\\text{Trzy rozwiązania: } -5, -3 \\text{ oraz } 0', value: 'c' },
                { label: '\\text{Cztery rozwiązania: } -5, -3, 0 \\text{ oraz } 5', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Z analizy czynników wynikają tylko dwa rozwiązania rzeczywiste: $$x = 0$$ oraz $$x = -3$$."
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.includes(4) && (
          <StudentNotes
            equation="2x(x+3)(x^2+25)=0"
            steps={[
              { step: '\\text{1. Analiza czynnika } 2x=0 \\implies x=0' },
              { step: '\\text{2. Analiza czynnika } x+3=0 \\implies x=-3' },
              {
                step: '\\text{3. Analiza czynnika } x^2+25=0 \\implies x^2=-25 \\quad (\\text{brak rozwiązań rzeczywistych})',
              },
            ]}
            solutions={[
              '\\text{Równanie ma dokładnie dwa rozwiązania rzeczywiste: } x = 0 \\text{ i } x = -3.',
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
