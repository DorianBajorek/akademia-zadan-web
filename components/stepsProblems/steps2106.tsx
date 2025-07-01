"use client";
import { useState } from "react";
import Question2 from "../Question2";

const letterMap = ["a", "b", "c", "d"];

const TransportPricingTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 46,
    exam_type: "mp",
    task_type: "mc4",
    description: "Firma przewozowa stosuje następującą zasadę: Funkcja $f$ przyporządkowuje liczbę przejechanych kilometrów do ceny przejazdu według reguły: - do $5$ km – opłata stała: $10$ zł, - za każdy rozpoczęty kilometr powyżej $5$ km – dodatkowe $2$ zł za kilometr. Ile wynosi $f(8)$, czyli cena przejazdu za $8$ km?",
    choiceA: "$14$ zł",    // błędna (10 + 2*3 = 16)
    choiceB: "$15$ zł",    // błędna
    choiceC: "$16$ zł",    // poprawna (10 + 2*3 = 16)
    choiceD: "$18$ zł",    // błędna
    correct_answer: "c"
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
          Zadanie matematyczne
        </h2>

        <div className="space-y-6">
          <Question2 description={taskData.description}
            choiceA={taskData.choiceA}
            choiceB={taskData.choiceB}
            choiceC={taskData.choiceC}
            choiceD={taskData.choiceD}
            correctAnswer={taskData.correct_answer}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={(index) => setSelectedAnswer(letterMap[index])}
            isCorrect={showResult ? selectedAnswer === taskData.correct_answer : undefined}
  taskId={ 2106 } />

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

export default TransportPricingTask;