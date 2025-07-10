'use client';

import { useEffect } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const HardcodedTask: React.FC = () => {

  const [problemSolved, setProblemSolved] = useState(false);
  const { token } = useAuth();
  const taskId = '913';

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
    task_id: 420,
    exam_type: 'mp',
    task_type: 'mc4',
    description:
      'Pan Grzegorz wpłacił do banku pewną kwotę na lokatę dwuletnią. Po każdym rocznym okresie oszczędzania bank doliczał odsetki w wysokości $5\\%$ od kwoty bieżącego kapitału znajdującego się na lokacie. Po dwóch latach oszczędzania pan Grzegorz odebrał z tego banku wraz z odsetkami kwotę $4851$ zł (bez uwzględnienia podatków). Kwota wpłacona przez pana Grzegorza na tę lokatę była równa',
    choiceA: '4300 zł',
    choiceB: '4400 zł',
    choiceC: '4500 zł',
    choiceD: '4600 zł',
    correct_answer: 'b',
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
          Zadanie matematyczne - lokata bankowa
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
            taskId={913}
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

            {selectedAnswer !== taskData.correct_answer && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg text-left">
                <h3 className="font-bold text-lg mb-2">Wyjaśnienie:</h3>
                <p className="mb-2">
                  Oznaczmy początkową kwotę jako{' '}
                  <span className="font-math">
                    K<sub>0</sub>
                  </span>
                  .
                </p>
                <p className="mb-2">
                  Po pierwszym roku:{' '}
                  <span className="font-math">
                    K<sub>1</sub> = K<sub>0</sub> × 1.05
                  </span>
                </p>
                <p className="mb-2">
                  Po drugim roku:{' '}
                  <span className="font-math">
                    K<sub>2</sub> = K<sub>1</sub> × 1.05 = K<sub>0</sub> × 1.05<sup>2</sup> = 4851
                    zł
                  </span>
                </p>
                <p className="mb-2">
                  Zatem:{' '}
                  <span className="font-math">
                    K<sub>0</sub> = 4851 / 1.1025 ≈ 4400 zł
                  </span>
                </p>
                <p>Obliczenia:</p>
                <ul className="list-disc pl-5">
                  <li>
                    1.05<sup>2</sup> = 1.1025
                  </li>
                  <li>4851 ÷ 1.1025 = 4400</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default HardcodedTask;
