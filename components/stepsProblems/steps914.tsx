"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Question2 from "../Question2";

const letterMap = ["a", "b", "c", "d"];

const HardcodedTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    "task_id": 421,
    "exam_type": "mp",
    "task_type": "mc4",
    "description": "Na początku sezonu letniego cenę $x$ pary sandalów podwyższono o $20\\%$. Po miesiącu nową cenę obniżono o $10\\%$. Po obu tych zmianach ta para sandalów kosztowała $81$ zł. Początkowa cena $x$ pary sandalów była równa",
    "choiceA": "45 zł",
    "choiceB": "73,63 zł",
    "choiceC": "75 zł",
    "choiceD": "87,48 zł",
    "correct_answer": "c"
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
          Zadanie matematyczne - zmiany cen
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
                <h3 className="font-bold text-lg mb-2">Wyjaśnienie:</h3>
                <p className="mb-2">1. Podwyżka o 20%: <span className="font-math">x × 1.20</span></p>
                <p className="mb-2">2. Obniżka o 10%: <span className="font-math">x × 1.20 × 0.90 = 81 zł</span></p>
                <p className="mb-2">3. Równanie: <span className="font-math">x × 1.08 = 81</span></p>
                <p className="mb-2">4. Rozwiązanie: <span className="font-math">x = 81 ÷ 1.08 = 75 zł</span></p>
                <p>Weryfikacja:</p>
                <ul className="list-disc pl-5">
                  <li>75 zł + 20% = 90 zł</li>
                  <li>90 zł - 10% = 81 zł</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HardcodedTask;