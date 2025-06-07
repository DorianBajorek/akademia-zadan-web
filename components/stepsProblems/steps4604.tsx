"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Question2 from "../Question2";

const letterMap = ["a", "b", "c", "d"];

const ParallelLinesTask4: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 11,
    exam_type: "mp",
    task_type: "mc4",
    description: `
        Która para prostych jest równoległa?
    `,
    choiceA: "$y = 2x + 3$ i $y = -2x + 1$",
    choiceB: "$y = \\frac{1}{2}x - 1$ i $y = -\\frac{1}{2}x + 4$",
    choiceC: "$y = 3x + 5$ i $y = 3x - 2$",
    choiceD: "$y = 4x$ i $y = \\frac{1}{4}x + 1$",
    correct_answer: "c" // Poprawna odpowiedź to C (obie mają współczynnik 3)
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
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
                ? "Poprawna odpowiedź! Proste są równoległe, bo mają ten sam współczynnik kierunkowy."
                : `Błędna odpowiedź! Poprawna: ${taskData.correct_answer.toUpperCase()} (obie funkcje mają taki sam współczynnik kierunkowy)`}
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ParallelLinesTask4;