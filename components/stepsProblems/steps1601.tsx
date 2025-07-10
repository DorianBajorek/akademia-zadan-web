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
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <TaskDescription
          title="Optymalizacja wyrażenia"
          description="Liczby rzeczywiste $$x$$ i $$z$$ spełniają warunek $$2x + z = 1$$. Wyznacz takie wartości $$x$$ i $$z$$, dla których wyrażenie $$x^2 + z^2 + 7xz$$ przyjmuje największą wartość. Podaj tę największą wartość."
        />

        {/* ETAP 1: Wyrażenie z w zależności od x */}
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <StepDescription stepNumber={1}>
              Zacznij od wyrażenia jednej zmiennej za pomocą drugiej. Korzystając z warunku{' '}
              <InlineMath math="2x + z = 1" />, wyznacz wzór na <InlineMath math="z" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie dla $$z$$?"
              choices={[
                { label: 'z = x - 1', value: 'a' },
                { label: 'z = 1 + 2x', value: 'b' },
                { label: 'z = 2x - 1', value: 'c' },
                { label: 'z = 1 - 2x', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Z równania $$2x + z = 1$$ wynika, że $$z = 1 - 2x$$."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {/* ETAP 2: Podstawienie z do wyrażenia */}
        {completedStages.includes(1) && (
          <>
            <StepDescription stepNumber={2}>
              Podstaw uzyskany wzór na <InlineMath math="z" /> do wyrażenia{' '}
              <InlineMath math="x^2 + z^2 + 7xz" />, aby otrzymać funkcję jednej zmiennej{' '}
              <InlineMath math="x" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda wyrażenie po podstawieniu?"
              choices={[
                { label: 'x^2 + (2x - 1)^2 + 7x(2x - 1)', value: 'a' },
                { label: 'x^2 + (1 + 2x)^2 + 7x(1 + 2x)', value: 'b' },
                { label: 'x^2 + (1 - 2x)^2 + 7x(1 - 2x)', value: 'c' },
                { label: 'x^2 + (x - 1)^2 + 7x(x - 1)', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiając $$z = 1 - 2x$$, otrzymujemy $$x^2 + (1 - 2x)^2 + 7x(1 - 2x)$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {/* ETAP 3: Uproszczenie wyrażenia */}
        {completedStages.includes(2) && (
          <>
            <StepDescription stepNumber={3}>
              Przekształć otrzymaną funkcję do postaci ogólnej funkcji kwadratowej{' '}
              <InlineMath math="f(x) = ax^2 + bx + c" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jak wygląda uproszczone wyrażenie?"
              choices={[
                { label: '6x^2 - 8x + 1', value: 'a' },
                { label: '10x^2 - 14x + 1', value: 'b' },
                { label: '8x^2 - 10x + 1', value: 'c' },
                { label: '-9x^2 + 3x + 1', value: 'd' },
              ]}
              correctAnswer="d"
              explanation="Rozwijamy wyrażenia: $$(1 - 2x)^2 = 1 - 4x + 4x^2$$ oraz $$7x(1 - 2x) = 7x - 14x^2$$. Sumując wszystko, otrzymujemy: $$x^2 + (1 - 4x + 4x^2) + (7x - 14x^2) = -9x^2 + 3x + 1$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {/* ETAP 4: Znalezienie x, dla którego wyrażenie ma maksimum */}
        {completedStages.includes(3) && (
          <>
            <StepDescription stepNumber={4}>
              Funkcja kwadratowa z ujemnym współczynnikiem <InlineMath math="a" /> osiąga maksimum w
              wierzchołku. Oblicz jego pierwszą współrzędną <InlineMath math="p = \frac{-b}{2a}" />,
              aby znaleźć <InlineMath math="x_{max}" />.
            </StepDescription>
            <ChoiceQuestion
              question="Wskaż $$x_{max}$$, dla którego wyrażenie osiąga największą wartość."
              choices={[
                { label: 'x_{max} = \\frac{1}{6}', value: 'a' },
                { label: 'x_{max} = -\\frac{1}{6}', value: 'b' },
                { label: 'x_{max} = -\\frac{1}{3}', value: 'c' },
                { label: 'x_{max} = \\frac{1}{3}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Wartość $$x$$, dla której funkcja $$f(x)=-9x^2+3x+1$$ osiąga maksimum, to $$x_{max} = -\frac{b}{2a}$$. Tutaj: $$x_{max} = -\frac{3}{2 \cdot (-9)} = -\frac{3}{-18} = \frac{1}{6}$$."
              onComplete={() => handleStageComplete(4)}
              img="/steps-images/wierzcholek_paraboli.png"
            />
          </>
        )}

        {/* ETAP 5: Obliczenie największej wartości */}
        {completedStages.includes(4) && (
          <>
            <StepDescription stepNumber={5}>
              Oblicz największą wartość wyrażenia, podstawiając{' '}
              <InlineMath math="x_{max} = \frac{1}{6}" /> do uproszczonej funkcji{' '}
              <InlineMath math="-9x^2 + 3x + 1" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest największa wartość wyrażenia?"
              choices={[
                { label: '\\frac{3}{2}', value: 'a' },
                { label: '\\frac{7}{6}', value: 'b' },
                { label: '\\frac{5}{4}', value: 'c' },
                { label: '\\frac{25}{36}', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x = \frac{1}{6}$$ do $$-9x^2 + 3x + 1$$: $$-9\left(\frac{1}{6}\right)^2 + 3\left(\frac{1}{6}\right) + 1 = -9\left(\frac{1}{36}\right) + \frac{3}{6} + 1 = -\frac{1}{4} + \frac{1}{2} + 1 = \frac{5}{4}$$."
              onComplete={() => handleStageComplete(5)}
            />
          </>
        )}

        {/* ETAP 6: Obliczenie z */}
        {completedStages.includes(5) && (
          <>
            <StepDescription stepNumber={6}>
              Na koniec, oblicz odpowiadającą optymalnemu <InlineMath math="x" /> wartość{' '}
              <InlineMath math="z" />.
            </StepDescription>
            <ChoiceQuestion
              question="Jaka jest wartość $$z$$?"
              choices={[
                { label: 'z = \\frac{1}{6}', value: 'a' },
                { label: 'z = \\frac{1}{2}', value: 'b' },
                { label: 'z = \\frac{2}{3}', value: 'c' },
                { label: 'z = -1', value: 'd' },
              ]}
              correctAnswer="c"
              explanation="Podstawiamy $$x = \frac{1}{6}$$ do wzoru $$z = 1 - 2x$$: $$z = 1 - 2\left(\frac{1}{6}\right) = 1 - \frac{1}{3} = \frac{2}{3}$$."
              onComplete={() => handleStageComplete(6)}
            />
          </>
        )}

        {/* NOTATKI KOŃCOWE */}
        {completedStages.length === 6 && (
          <StudentNotes
            equation="f(x,z) = x^2 + z^2 + 7xz"
            steps={[
              { step: '\\text{Warunek: } z = 1 - 2x' },
              { step: '\\text{Funkcja jednej zmiennej: } f(x) = -9x^2 + 3x + 1' },
              { step: '\\text{Maksimum dla } x = \\frac{1}{6}' },
              { step: '\\text{Obliczenie } z = 1 - 2(\\frac{1}{6}) = \\frac{2}{3}' },
              { step: '\\text{Największa wartość: } f(\\frac{1}{6}) = \\frac{5}{4}' },
            ]}
            solutions={[
              '\\text{Największa wartość: } \\frac{5}{4}, \\text{ dla } x=\\frac{1}{6}, z=\\frac{2}{3}',
            ]}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
