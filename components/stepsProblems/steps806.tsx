"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Question2 from "../Question2";
import { useAuth } from "@/app/UserData";
import { solveProblem } from "@/service";

const letterMap = ["a", "b", "c", "d"];

const FractionTask2: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [problemSolved, setProblemSolved] = useState(false);
  const { token } = useAuth();
  const taskId = "806";

  const taskData = {
    "task_id": 24,
    "exam_type": "mp",
    "task_type": "mc4",
    "description": "Oblicz wartość wyrażenia: $\\frac{9}{10} - \\left( \\frac{1}{2} \\cdot \\frac{3}{5} \\right)$",
    "choiceA": "$\\frac{3}{5}$",
    "choiceB": "$\\frac{7}{10}$",
    "choiceC": "$\\frac{4}{5}$",
    "choiceD": "$\\frac{9}{10}$",
    "correct_answer": "a"
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
      if (selectedAnswer === taskData.correct_answer && !problemSolved) {
        setProblemSolved(true);
      }
    }
  };

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log("Problem marked as completed"))
        .catch((err) => console.error("Problem completion failed", err));
    }
  }, [problemSolved, taskId, token]);

  return (
    <div className="min-h-screen">
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

export default FractionTask2;