'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const ParallelLinesTask5: React.FC = () => {

  const [problemSolved, setProblemSolved] = useState(false);
  const { token } = useAuth();
  const taskId = '4605';

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
    task_id: 12,
    exam_type: 'mp',
    task_type: 'mc4',
    description: `
        W układzie współrzędnych (x, y) proste k oraz l są określone równaniami:
        
        Prosta k: $y = (3 - m)x + 5$
        Prosta l: $y = (m + 3)x - 4$
        
        Proste k oraz l są równoległe, gdy liczba m jest równa:
    `,
    choiceA: '$(-3)$',
    choiceB: '$0$',
    choiceC: '$\\sqrt{10}$',
    choiceD: '$3$',
    correct_answer: 'b', // Poprawna odpowiedź to B (m = 0)
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
            taskId={4605}
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
                ? 'Poprawna odpowiedź! Proste są równoległe, gdy m = 0, bo wtedy obie mają współczynnik kierunkowy równy 3.'
                : `Błędna odpowiedź! Poprawna: ${taskData.correct_answer.toUpperCase()} (m = 0, bo wtedy współczynniki kierunkowe są równe: 3 - 0 = 3 i 0 + 3 = 3)`}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ParallelLinesTask5;
