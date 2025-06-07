"use client";
import { useState } from "react";
import TrueFalseQuestion from "../TrueFalseQuestion";

const SystemOfEquationsTask: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<(boolean | null)[]>([]);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    "task_id": 63,
    "exam_type": "mp",
    "task_type": "true_false",
    "description": "Rozważ układ równań: $\\begin{cases} 2x + 3y = 7 \\\\ x - y = 1 \\end{cases}$",
    "statements": [
      {
        "text": "Para (2, 1) jest rozwiązaniem układu",
        "isTrue": true
      },
      {
        "text": "Układ nie ma rozwiązań",
        "isTrue": false
      },
      {
        "text": "Suma x i y wynosi 3",
        "isTrue": true
      },
      {
        "text": "Różnica y - x wynosi -1",
        "isTrue": true
      }
    ]
  };

  useState(() => {
    setSelectedAnswers(Array(taskData.statements.length).fill(null));
  });

  const handleAnswerSelect = (index: number, isTrue: boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = isTrue;
    setSelectedAnswers(newAnswers);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers.every(answer => answer !== null)) {
      setShowResult(true);
    }
  };

  const allAnswersSelected = selectedAnswers.every(answer => answer !== null);

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Zadanie - układ równań
        </h2>

        <div className="space-y-6">
          <TrueFalseQuestion
            question={taskData.description}
            statements={taskData.statements}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={handleAnswerSelect}
            isSubmitted={showResult}
          />

          <button
            onClick={handleCheckAnswer}
            disabled={!allAnswersSelected}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Sprawdź odpowiedź
          </button>
        </div>

        {showResult && (
          <div className="mt-8 text-center">
            <p className={`text-2xl mb-4 font-bold ${
              selectedAnswers.every((answer, index) => answer === taskData.statements[index].isTrue)
                ? 'text-green-600' 
                : 'text-red-600'
            }`}>
              {selectedAnswers.every((answer, index) => answer === taskData.statements[index].isTrue)
                ? "Brawo! Wszystkie odpowiedzi poprawne!"
                : "Niestety, popełniłeś błędy"}
            </p>
            
            {!selectedAnswers.every((answer, index) => answer === taskData.statements[index].isTrue) && (
              <div className="mt-4 space-y-2">
                {taskData.statements.map((statement, index) => (
                  <div key={index} className="text-lg">
                    <p className={`font-semibold ${
                      selectedAnswers[index] === taskData.statements[index].isTrue 
                        ? 'text-green-600' 
                        : 'text-red-600'
                    }`}>
                      {index + 1}. {statement.text} → {statement.isTrue ? "Prawda" : "Fałsz"}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default SystemOfEquationsTask;