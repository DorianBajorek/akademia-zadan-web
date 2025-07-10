'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const FractionalEquationSystemTask: React.FC = () => {

  const [problemSolved, setProblemSolved] = useState(false);
  const { token } = useAuth();
  const taskId = '3005';

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
    task_id: 36,
    exam_type: 'mp',
    task_type: 'mc4',
    description:
      'Rozwiąż układ równań: $\\begin{cases} \\frac{1}{2}x + \\frac{2}{3}y = 3 \\\\ \\frac{3}{4}x - \\frac{1}{2}y = 1 \\end{cases}$',
    choiceA: '$\\left(\\frac{14}{5}, \\frac{6}{5}\\right)$',
    choiceB: '$\\left(4, \\frac{3}{2}\\right)$',
    choiceC: '$\\left(\\frac{10}{3}, \\frac{7}{4}\\right)$',
    choiceD: '$\\left(\\frac{16}{7}, \\frac{15}{7}\\right)$',
    correct_answer: 'd',
    explanation: '', // Celowo puste - nie pokazujemy rozwiązania
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
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Układ równań z ułamkami
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
            taskId={3005}
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

export default FractionalEquationSystemTask;
