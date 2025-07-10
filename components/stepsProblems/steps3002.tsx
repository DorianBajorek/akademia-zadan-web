'use client';

import { useState } from 'react';
import { InlineMath } from 'react-katex';
import ChoiceQuestion from './ChoiceQuestion';
import StudentNotes from './StudentsNotes';

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-4 md:p-8 rounded-lg shadow-md border border-gray-300 mx-auto mt-6 md:mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Rozwiązywanie układu równań z ułamkami
        </h2>
        <p className="text-lg text-gray-800">
          Rozwiąż następujący układ równań metodą podstawiania:
        </p>

        <div className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="\begin{cases} \frac{1}{2}x + \frac{2}{3}y = 2 \\ \frac{3}{4}x - \frac{1}{5}y = 1 \end{cases}" />
        </div>

        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">Krok 1: Wyznacz x z pierwszego równania:</p>
            <ChoiceQuestion
              question="Które wyrażenie przedstawia poprawnie wyznaczone x?"
              choices={[
                { label: 'x = 4 - \\frac{4}{3}y', value: 'a' },
                { label: 'x = 2 - \\frac{2}{3}y', value: 'b' },
                { label: 'x = \\frac{4 - \\frac{2}{3}y}{\\frac{1}{2}}', value: 'c' },
                {
                  label: 'x = \\frac{2}{\\frac{1}{2}} - \\frac{\\frac{2}{3}y}{\\frac{1}{2}}',
                  value: 'd',
                },
              ]}
              correctAnswer="a"
              explanation="Wyznaczamy x z pierwszego równania:<br>
                $$\frac{1}{2}x + \frac{2}{3}y = 2$$<br>
                $$\frac{1}{2}x = 2 - \frac{2}{3}y$$<br>
                $$x = 2 \cdot (2 - \frac{2}{3}y)$$<br>
                $$x = 4 - \frac{4}{3}y$$"
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}

        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 2: Podstaw wyznaczone x do drugiego równania:
            </p>
            <ChoiceQuestion
              question="Jak będzie wyglądać drugie równanie po podstawieniu?"
              choices={[
                { label: '\\frac{3}{4}(4 - \\frac{4}{3}y) - \\frac{1}{5}y = 1', value: 'a' },
                { label: '4 - \\frac{4}{3}y - \\frac{1}{5}y = 1', value: 'b' },
                { label: '\\frac{3}{4} \\cdot 4 - \\frac{4}{3}y - \\frac{1}{5}y = 1', value: 'c' },
                {
                  label: '\\frac{3}{4}(4) - \\frac{3}{4}(\\frac{4}{3}y) - \\frac{1}{5}y = 1',
                  value: 'd',
                },
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$x = 4 - \frac{4}{3}y$$ do drugiego równania:<br>
                $$\frac{3}{4}x - \frac{1}{5}y = 1$$<br>
                $$\frac{3}{4}(4 - \frac{4}{3}y) - \frac{1}{5}y = 1$$"
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 3: Rozwiąż równanie z jedną niewiadomą:
            </p>
            <ChoiceQuestion
              question="Jakie jest rozwiązanie równania $$\frac{3}{4}(4 - \frac{4}{3}y) - \frac{1}{5}y = 1$$?"
              choices={[
                { label: 'y = \\frac{15}{8}', value: 'a' },
                { label: 'y = \\frac{8}{15}', value: 'b' },
                { label: 'y = \\frac{30}{17}', value: 'c' },
                { label: 'y = \\frac{17}{30}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Rozwiązujemy równanie:<br>
                $$\frac{3}{4}(4) - \frac{3}{4}(\frac{4}{3}y) - \frac{1}{5}y = 1$$<br>
                $$3 - y - \frac{1}{5}y = 1$$<br>
                $$3 - \frac{6}{5}y = 1$$<br>
                $$-\frac{6}{5}y = -2$$<br>
                $$y = \frac{-2}{-\frac{6}{5}} = \frac{10}{6} = \frac{5}{3}$$"
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Krok 4: Oblicz x podstawiając y = 5/3 do wyznaczonego wcześniej wyrażenia:
            </p>
            <ChoiceQuestion
              question="Jaką wartość ma x?"
              choices={[
                { label: 'x = \\frac{8}{3}', value: 'a' },
                { label: 'x = \\frac{4}{3}', value: 'b' },
                { label: 'x = \\frac{16}{9}', value: 'c' },
                { label: 'x = \\frac{9}{4}', value: 'd' },
              ]}
              correctAnswer="a"
              explanation="Podstawiamy $$y = \frac{5}{3}$$ do wyrażenia $$x = 4 - \frac{4}{3}y$$:<br>
                $$x = 4 - \frac{4}{3} \cdot \frac{5}{3}$$<br>
                $$x = 4 - \frac{20}{9}$$<br>
                $$x = \frac{36}{9} - \frac{20}{9}$$<br>
                $$x = \frac{16}{9}$$"
              onComplete={() => handleStageComplete(4)}
            />
          </>
        )}

        {completedStages.length === 4 && (
          <StudentNotes
            equation="\begin{cases} 
              \frac{1}{2}x + \frac{2}{3}y = 2 \\ 
              \frac{3}{4}x - \frac{1}{5}y = 1 
              \end{cases}"
            steps={[
              {
                step: '\\text{Wyznaczamy x z pierwszego równania}: x = 4 - \\frac{4}{3}y',
              },
              {
                step: '\\text{Podstawiamy do drugiego równania}: \\frac{3}{4}(4 - \\frac{4}{3}y) - \\frac{1}{5}y = 1',
              },
              {
                step: '\\text{Rozwiązujemy równanie}: 3 - y - \\frac{1}{5}y = 1 → -\\frac{6}{5}y = -2 → y = \\frac{5}{3}',
              },
              {
                step: '\\text{Obliczamy x}: x = 4 - \\frac{4}{3} \\cdot \\frac{5}{3} = \\frac{16}{9}',
              },
            ]}
            solutions={['\\text{Rozwiązanie układu: } \\left(\\frac{16}{9}, \\frac{5}{3}\\right)']}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
