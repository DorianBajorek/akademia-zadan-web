'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Question2 from '../Question2';

const letterMap = ['a', 'b', 'c', 'd'];

const HardcodedTask: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 30,
    exam_type: 'mp',
    task_type: 'mc4',
    description: 'Równanie $|2x - 10| = 2$ ma rozwiązania:',
    choiceA: '$x = 4$ lub $x = 6$',
    choiceB: '$x = 6$ lub $x = -4$',
    choiceC: '$x = 4$ lub $x = -6$',
    choiceD: '$x = -4$ lub $x = -6$',
    correct_answer: 'a',
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer !== null) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Zadanie matematyczne
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
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
              taskId={1305}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <button
              onClick={handleCheckAnswer}
              disabled={!selectedAnswer}
              className={`px-8 py-3 rounded-xl font-medium text-lg transition-all duration-300 shadow-md ${
                !selectedAnswer
                  ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              Sprawdź odpowiedź
            </button>
          </motion.div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mt-8 p-6 rounded-xl ${
                selectedAnswer === taskData.correct_answer
                  ? 'bg-green-50 border-2 border-green-200'
                  : 'bg-red-50 border-2 border-red-200'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                {selectedAnswer === taskData.correct_answer ? (
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                )}
                <p
                  className={`text-xl md:text-2xl font-bold ${
                    selectedAnswer === taskData.correct_answer ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {selectedAnswer === taskData.correct_answer
                    ? 'Poprawna odpowiedź!'
                    : `Błędna odpowiedź! Poprawna: ${taskData.correct_answer.toUpperCase()}`}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HardcodedTask;
