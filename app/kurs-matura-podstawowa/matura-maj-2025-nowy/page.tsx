"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Question3 from "@/components/Question3";
import OpenQuestion from "@/components/OpenQuestion";
import { Info } from "lucide-react";

const letterMap = ["a", "b", "c", "d"];

const ExamPage: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string | null }>({});
  const [showResults, setShowResults] = useState<{ [key: number]: boolean }>({});
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800 mb-2">
          Matura maj 2025
        </h1>
        <p className="text-center text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg max-w-2xl mx-auto">
          Poniżej znajdziesz zadania z matury 2025. Sprawdź swoje umiejętności, klikając w odpowiedzi zadań zamknietych i weryfikując, czy są poprawne. Powodzenia!
        </p>

        <div className="space-y-10 sm:space-y-12">
          {tasksData.map((task, index) => (
            <div
              key={task.task_id}
              className="bg-white p-4 sm:p-6 rounded-xl border-l-4 sm:border-l-8 border-blue-400 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                  Zadanie {task.task_id} {task.task_type === "open" && "(0-2)"}
                </h2>
                <div className="flex items-center text-xs sm:text-sm text-gray-600 gap-1">
                  <Info className="w-4 h-4 text-blue-500" />
                  {task.task_type === "mc4" ? "Wielokrotny wybór (1 z 4)" : "Pytanie otwarte"}
                </div>
              </div>

              {task.task_type === "mc4" ? (
                <div className="space-y-5 sm:space-y-6">
                  <Question3
                    description={task.description}
                    choiceA={task.choiceA || ""}
                    choiceB={task.choiceB || ""}
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
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    Sprawdź odpowiedź
                  </button>

                  {showResults[index] && (
                    <div className="mt-3 sm:mt-4 text-center">
                      <p className={`text-base sm:text-lg mb-2 font-bold ${
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
