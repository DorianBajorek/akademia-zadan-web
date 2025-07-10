'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const BookstoreTask: React.FC = () => {

  const [problemSolved, setProblemSolved] = useState(false);
  const { token } = useAuth();
  const taskId = '2205';

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
    exam_type: 'mp',
    task_type: 'mc4',
    description:
      'W księgarni sprzedano pewną liczbę książek i zeszytów. Książka kosztuje 25 zł, a zeszyt 8 zł. Łącznie sprzedano 80 przedmiotów za 980 zł. Ile sprzedano książek, a ile zeszytów? Który z poniższych układów równań pozwala obliczyć liczbę sprzedanych książek i zeszytów?',
    choiceA: '$\\begin{cases} x + y = 80 \\\\ 25x + 8y = 980 \\end{cases}$',
    choiceB: '$\\begin{cases} x + y = 980 \\\\ 25x + 8y = 80 \\end{cases}$',
    choiceC: '$\\begin{cases} x - y = 80 \\\\ 25x - 8y = 980 \\end{cases}$',
    choiceD: '$\\begin{cases} x + y = 80 \\\\ 8x + 25y = 80 \\end{cases}$',
    correct_answer: 'a',
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
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-8">
          Układ równań dla zadania z księgarni
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
            taskId={2205}
          />

          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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

export default BookstoreTask;
