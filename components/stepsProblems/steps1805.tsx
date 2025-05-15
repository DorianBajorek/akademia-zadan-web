"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Question2 from "../Question2";

const letterMap = ["a", "b", "c", "d"];

const MultiplyBracketsTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    "task_id": 25,
    "exam_type": "mp",
    "task_type": "mc4",
    "description": "Wykonaj mnożenie i uprość wyrażenie: $(x + 5)(2x - 3)$",
    "choiceA": "$2x^2 + 7x - 15$",
    "choiceB": "$2x^2 - 7x - 15$",
    "choiceC": "$2x^2 + 13x - 15$",
    "choiceD": "$2x^2 - 13x - 15$",
    "correct_answer": "a",
    "solution_steps": [
      "Rozpoczynamy od zastosowania metody FOIL:",
      "1. First (pierwsze wyrazy): $x \\cdot 2x = 2x^2$",
      "2. Outer (zewnętrzne wyrazy): $x \\cdot (-3) = -3x$",
      "3. Inner (wewnętrzne wyrazy): $5 \\cdot 2x = 10x$",
      "4. Last (ostatnie wyrazy): $5 \\cdot (-3) = -15$",
      "Łączymy wszystkie wyrazy: $2x^2 - 3x + 10x - 15$",
      "Redukujemy wyrazy podobne: $2x^2 + 7x - 15$"
    ]
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
          Mnożenie nawiasów
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
            
            {selectedAnswer !== taskData.correct_answer && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg text-left">
                <h3 className="font-bold text-lg mb-2">Rozwiązanie krok po kroku:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  {taskData.solution_steps.map((step, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MultiplyBracketsTask;