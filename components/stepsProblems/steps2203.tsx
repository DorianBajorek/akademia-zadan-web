'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const StorePurchasesTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 42,
    exam_type: 'mp',
    task_type: 'mc4',
    description:
      'Właściciel sklepu kupił w hurtowni $50$ par identycznych spodni po $x$ zł za parę i $40$ identycznych marynarek po $y$ zł za sztukę. Za zakupy zapłacił $8000$ zł. Po doliczeniu marży $50%$ na spodnie i $20%$ na marynarki ceny detaliczne były jednakowe. Układ równań pozwalający obliczyć ceny hurtowe to:',
    choiceA: '$\\begin{cases} x + y = 8000 \\\\ 0,5x = 0,2y \\end{cases}$',
    choiceB: '$\\begin{cases} 50x + 40y = 8000 \\\\ 0,5x = 0,2y \\end{cases}$',
    choiceC: '$\\begin{cases} 50x + 40y = 8000 \\\\ 1,5x = 1,2y \\end{cases}$',
    choiceD: '$\\begin{cases} x + y = 8000 \\\\ 1,5x = 1,2y \\end{cases}$',
    correct_answer: 'c',
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Układ równań z zakupami hurtowymi
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
            taskId={2203}
          />

          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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

export default StorePurchasesTask;
