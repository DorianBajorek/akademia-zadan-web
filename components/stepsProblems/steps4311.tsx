"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Question2 from "../Question2";

const letterMap = ["a", "b", "c", "d"];

const GeometricSequenceRatioTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
const taskData = {
  task_id: 89,
  exam_type: "mp",
  task_type: "mc4",
  description: `
    Takie samo miejsce zerowe jak funkcja $f(x)=\\frac{1}{2}x-\\frac{1}{2}$ ma funkcja
  `,
  choiceA: "$f(x)=\\frac{4}{5}x+\\frac{4}{5}$",
  choiceB: "$f(x)=\\frac{4}{5}x-\\frac{5}{4}$",
  choiceC: "$f(x)=x-1$",
  choiceD: "$f(x)=-\\frac{1}{2}x-\\frac{1}{2}$",
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

export default GeometricSequenceRatioTask;
