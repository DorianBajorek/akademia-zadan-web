'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';
import { useState } from 'react';
import Footer from '@/components/Footer';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const RationalExpressionTask: React.FC = () => {
  const [problemSolved, setProblemSolved] = useState(false);
  const { token } = useAuth();
  const taskId = '7001';

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 13,
    exam_type: 'mp',
    task_type: 'mc4',
    description: `
        Dla każdej liczby rzeczywistej $x$ różnej od $(-2)$ oraz różnej od $0$ wartość wyrażenia
        
        $\\frac{x^2 + x}{x^2 + 4x + 4} \\cdot \\frac{x + 2}{x}$
        
        jest równa wartości wyrażenia:
    `,
    choiceA: '$\\frac{x + 2}{4x + 4}$',
    choiceB: '$\\frac{x + 1}{4x + 5}$',
    choiceC: '$\\frac{x + 1}{x + 2}$',
    choiceD: '$\\frac{2x}{x + 2}$',
    correct_answer: 'c', // Poprawna odpowiedź to C
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    
      if (selectedAnswer === taskData.correct_answer && !problemSolved) {
        setProblemSolved(true);
      }
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Zadanie 8. (0-1)
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Dokończ zdanie. Wybierz właściwą odpowiedź spośród podanych.
            </p>
          </div>

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
            taskId={7001}
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
                ? 'Poprawna odpowiedź!'
                : `Błędna odpowiedź! Poprawna: ${taskData.correct_answer.toUpperCase()}`}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default RationalExpressionTask;
