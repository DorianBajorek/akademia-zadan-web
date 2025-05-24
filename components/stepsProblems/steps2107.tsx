"use client";
import { useState } from "react";
import Question2 from "../Question2";

const letterMap = ["a", "b", "c", "d"];

const BallHeightFunctionTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 47,
    exam_type: "mp",
    task_type: "mc4",
    description: "Funkcja $f$ opisuje wysokość piłki (w metrach) w czasie skoku, gdzie: - Piłka została podrzucona pionowo w górę, - Wznosiła się przez $2$ sekundy do wysokości $8$ metrów, - Następnie opadała przez kolejne $2$ sekundy, aż wróciła na ziemię. Jaki jest zbiór wartości funkcji $f$?",
    choiceA: "$[0, 8]$",      // poprawna (wysokość zmienia się od 0 do 8 metrów)
    choiceB: "$(−∞, 8]$",     // błędna (nie ma wysokości ujemnych)
    choiceC: "$[0, 4]$",      // błędna (maksymalna wysokość to 8 m)
    choiceD: "$(0, 8)$",      // błędna (zbiór zawiera 0 i 8)
    correct_answer: "a"
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Zadanie matematyczne
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
            <p className={`text-2xl mb-4 font-bold ${
              selectedAnswer === taskData.correct_answer 
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {selectedAnswer === taskData.correct_answer
                ? "Poprawna odpowiedź!"
                : `Błędna odpowiedź! Poprawna: ${taskData.correct_answer.toUpperCase()}`}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BallHeightFunctionTask;