'use client';
import { useState } from 'react';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const OrchardsTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 42,
    exam_type: 'mp',
    task_type: 'mc4',
    description:
      'W październiku 2022 roku założono dwa sady, w których posadzono łącznie 1960 drzew. Po roku stwierdzono, że uschło 5% drzew w pierwszym sadzie i 10% drzew w drugim sadzie. Liczba drzew, które pozostały w drugim sadzie, stanowiła 60% liczby drzew, które pozostały w pierwszym sadzie. Układem równań pozwalającym obliczyć liczbę drzew w sadach jest:',
    choiceA: '$\\begin{cases} x + y = 1960 \\\\ 0,6 \\cdot 0,95x = 0,9y \\end{cases}$',
    choiceB: '$\\begin{cases} x + y = 1960 \\\\ 0,95x = 0,6 \\cdot 0,9y \\end{cases}$',
    choiceC: '$\\begin{cases} x + y = 1960 \\\\ 0,05x = 0,6 \\cdot 0,1y \\end{cases}$',
    choiceD: '$\\begin{cases} x + y = 1960 \\\\ 0,4 \\cdot 0,95x = 0,9y \\end{cases}$',
    correct_answer: 'a',
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-green-600 mb-8">
          Układ równań z sadami drzew
        </h2>

        <div className="space-y-6">
          <Question2
            description={taskData.description}
            choiceA={taskData.choiceA}
            choiceB={taskData.choiceB}
            choiceC={taskData.choiceC}
            choiceD={taskData.choiceD}
            correctAnswer={taskData.correct_answer}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={(index) => setSelectedAnswer(letterMap[index])}
            isCorrect={showResult ? selectedAnswer === taskData.correct_answer : undefined}
            taskId={2204}
          />

          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Sprawdź odpowiedź
          </button>
        </div>

        {showResult && (
          <div className="mt-8 text-center">
            <p
              className={`text-2xl mb-4 font-bold ${
                selectedAnswer === taskData.correct_answer ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {selectedAnswer === taskData.correct_answer
                ? 'Poprawna odpowiedź! ✓'
                : `Błędna odpowiedź! Poprawnie: ${taskData.correct_answer.toUpperCase()}`}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrchardsTask;
