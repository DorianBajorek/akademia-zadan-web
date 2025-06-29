"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Question3 from "@/components/Question3";
import OpenQuestion from "@/components/OpenQuestion";

const letterMap = ["a", "b", "c", "d"];

const ExamPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string | null}>({
    0: null,
    1: null,
    2: null,
    3: null
  });
  const [showResults, setShowResults] = useState<{[key: number]: boolean}>({
    0: false,
    1: false,
    2: false,
    3: false
  });
  const [tasksData, setTasksData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/matura2025Nowa/matura2025Maj.json")
      .then((res) => res.json())
      .then((data) => {
        setTasksData(data);

        const initialAnswers: { [key: number]: string | null } = {};
        const initialResults: { [key: number]: boolean } = {};

        data.forEach((_: string, index: number) => {
            initialAnswers[index] = null;
            initialResults[index] = false;
            });

        setSelectedAnswers(initialAnswers);
        setShowResults(initialResults);
      });
  }, []);

  const handleCheckAnswer = (taskIndex: number) => {
    if (selectedAnswers[taskIndex] !== null) {
      setShowResults(prev => ({
        ...prev,
        [taskIndex]: true
      }));
    }
  };

  const handleAnswerSelect = (taskIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [taskIndex]: letterMap[answerIndex]
    }));
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Matura maj 2025
        </h1>
        
        <div className="space-y-12">
          {tasksData.map((task, index) => (
            <div key={task.task_id} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                Zadanie {task.task_id} {task.task_type === "open" && "(0-2)"}
              </h2>

              {task.task_type === "mc4" ? (
                <div className="space-y-6">
                  <Question3
                    description={task.description}
                    choiceA={task.choiceA || ""}
                    choiceB={task.choiceB|| ""}
                    choiceC={task.choiceC || ""}
                    choiceD={task.choiceD || ""}
                    correctAnswer={task.correct_answer || ""}
                    selectedAnswer={selectedAnswers[index]}
                    onAnswerSelect={(answerIndex) => handleAnswerSelect(index, answerIndex)}
                    isCorrect={showResults[index] ? selectedAnswers[index] === task.correct_answer : undefined} 
                    solution={task.solution}
                  />

                  <button
                    onClick={() => handleCheckAnswer(index)}
                    disabled={!selectedAnswers[index]}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Sprawdź odpowiedź
                  </button>

                  {showResults[index] && (
                    <div className="mt-4 text-center">
                      <p className={`text-xl mb-2 font-bold ${
                        selectedAnswers[index] === task.correct_answer 
                          ? 'text-green-600' 
                          : 'text-red-600'
                      }`}>
                        {selectedAnswers[index] === task.correct_answer
                          ? "Poprawna odpowiedź!"
                          : `Błędna odpowiedź! Poprawna: ${task.correct_answer?.toUpperCase()}`}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <OpenQuestion
                  description={task.description}
                  solution={task.solution}
                />
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExamPage;