'use client';
import { useState } from 'react';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const ClassFundraiserTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 44,
    exam_type: 'mp',
    task_type: 'mc4',
    description:
      'Dwie klasy zebrały pieniądze na wycieczkę. Uczniowie z klasy 7a wpłacali po tyle samo, co uczniowie z klasy 7b. W klasie 7a jest 5 uczniów więcej niż w klasie 7b. Klasa 7a zebrała 480 zł, a klasa 7b — 360 zł. Wybierz poprawny układ równań.',
    choiceA: '$\\begin{cases} a = b + 5 \\\\ 360a = 480b \\end{cases}$',
    choiceB: '$\\begin{cases} a = b + 5 \\\\ 480a = 360b \\end{cases}$',
    choiceC: '$\\begin{cases} a = b + 5 \\\\ \\frac{480}{a} = \\frac{360}{b} \\end{cases}$',
    choiceD: '$\\begin{cases} b = a + 5 \\\\ 480a = 360b \\end{cases}$',
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
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Układ równań dla zbiórki pieniędzy
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
            taskId={2207}
          />

          <button
            onClick={handleCheckAnswer}
            disabled={!selectedAnswer}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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

export default ClassFundraiserTask;
