'use client';
import { useState } from 'react';
import TrueFalseQuestion from '../TrueFalseQuestion';

const LinearFunctionPropertiesTask: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(boolean | null)[]>([]);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 78,
    exam_type: 'mp',
    task_type: 'true_false',
    description:
      'Funkcja liniowa $f$ jest określona wzorem $f(x) = \\frac{1}{2}x - 4$. Oceń prawdziwość poniższych stwierdzeń.',
    statements: [
      {
        text: 'Funkcja $f$ jest rosnąca w całej swojej dziedzinie.',
        isTrue: true,
      },
      {
        text: 'Wykres funkcji $f$ przecina oś $Ox$ w punkcie $(8, 0)$.',
        isTrue: true,
      },
      {
        text: 'Funkcja $f$ przyjmuje wartości ujemne dla $x < 8$.',
        isTrue: true,
      },
      {
        text: 'Pole trójkąta ograniczonego osiami układu współrzędnych i wykresem funkcji $f$ wynosi 16.',
        isTrue: true,
      },
    ],
  };

  useState(() => {
    setSelectedAnswers(Array(taskData.statements.length).fill(null));
  });

  const handleAnswerSelect = (index: number, isTrue: boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = isTrue;
    setSelectedAnswers(newAnswers);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers.every((answer) => answer !== null)) {
      setShowResult(true);
    }
  };

  const allAnswersSelected = selectedAnswers.every((answer) => answer !== null);

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Własności funkcji liniowej
        </h2>

        <div className="space-y-6">
          <TrueFalseQuestion
            question={taskData.description}
            statements={taskData.statements}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={handleAnswerSelect}
            isSubmitted={showResult}
          />

          <button
            onClick={handleCheckAnswer}
            disabled={!allAnswersSelected}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Zweryfikuj odpowiedzi
          </button>
        </div>

        {showResult && (
          <div className="mt-8 text-center">
            <p
              className={`text-2xl mb-4 font-bold ${
                selectedAnswers.every(
                  (answer, index) => answer === taskData.statements[index].isTrue
                )
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {selectedAnswers.every(
                (answer, index) => answer === taskData.statements[index].isTrue
              )
                ? 'Brawo! Wszystkie odpowiedzi są poprawne!'
                : 'Niestety, popełniłeś błędy!'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default LinearFunctionPropertiesTask;
