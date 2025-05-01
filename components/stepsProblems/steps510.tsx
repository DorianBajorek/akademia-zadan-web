"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import Question2 from "../Question2";

const HardcodedTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = 
  {
    "task_id": 18,
    "exam_type": "mp",
    "task_type": "mc4",
    "description": "Dla każdej liczby rzeczywistej $a$ wyrażenie $\left( \sqrt[5]{5} \cdot \frac{1}{5} \right)^{-5}$ jest równe",
    "choiceA": "$5^4$",
    "choiceB": "$5^{-4}$",
    "choiceC": "$5^{0,25}$",
    "choiceD": "$5^{-0,25}$",
    "correct_answer": "a"
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Zadanie matematyczne
        </h2>

        <div className="space-y-6">
        <Question2
            id={1}
            text="W ciągu arytmetycznym $(a_n)$, określonym dla każdej liczby naturalnej $n \geq 1$, $a_5 = -31$ oraz $a_{10} = -66$. Różnica tego ciągu jest równa"
            answers={[
                "$x = -1$",
                "$x = 1$",
                "Brak rozwiązań",
                "$x = 0$"
            ]}
            selectedAnswer="a"
            onAnswerSelect={(id, index) => console.log(id, index)}
            isCorrect={true}
            correctAnswer="a"
            />
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
      <Footer />
    </div>
  );
};

export default HardcodedTask;