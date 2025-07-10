'use client';
import { useState } from 'react';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const EquationSystemTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 35,
    exam_type: 'mp',
    task_type: 'mc4',
    description: 'Rozwiąż układ równań: $\\begin{cases} 3x + 2y = 8 \\\\ 2x - y = 3 \\end{cases}$',
    choiceA: '$(1, 2)$',
    choiceB: '$(2, 1)$',
    choiceC: '$(3, 0)$',
    choiceD: '$(0, 4)$',
    correct_answer: 'b',
    explanation:
      '1) Z drugiego równania: $y = 2x - 3$\n2) Podstawiamy do pierwszego: $3x + 2(2x-3) = 8$\n3) $3x + 4x - 6 = 8$ ⇒ $7x = 14$ ⇒ $x = 2$\n4) $y = 2·2 - 3 = 1$\nRozwiązanie: $(2, 1)$',
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
          Rozwiązywanie układu równań
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
            taskId={3004}
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

export default EquationSystemTask;
