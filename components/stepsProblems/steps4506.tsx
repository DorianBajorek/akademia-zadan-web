'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/app/UserData';
import { solveProblem } from '@/service';
import TrueFalseQuestion from '../TrueFalseQuestion';

const LinearFunctionTrueFalseTask: React.FC = () => {
  const { token } = useAuth();
  const taskId = '4506';
  const [problemSolved, setProblemSolved] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState<(boolean | null)[]>([]);
  const [showResult, setShowResult] = useState(false);

  const taskData = {
    task_id: 32,
    exam_type: 'mp',
    task_type: 'true_false',
    description:
      'Miejscem zerowym funkcji liniowej $f$ jest liczba $2$, a punkt przecięcia wykresu funkcji $f$ z osią $Oy$ kartezjańskiego układu współrzędnych $(x, y)$ ma współrzędne $(0, 4)$. Oceń prawdziwość poniższych stwierdzeń.',
    statements: [
      {
        text: 'Współczynnik kierunkowy prostej, która jest wykresem funkcji $f$, jest równy $(-2)$.',
        isTrue: true,
      },
      {
        text: 'Pole trójkąta ograniczonego osiami kartezjańskiego układu współrzędnych $(x, y)$ oraz wykresem funkcji $f$ jest równe $8$.',
        isTrue: false,
      },
    ],
    questionImg: '/problemImages/problem4506.png',
  };

  useEffect(() => {
    setSelectedAnswers(Array(taskData.statements.length).fill(null));
  }, [taskData.statements.length]);

  useEffect(() => {
    if (problemSolved) {
      solveProblem(taskId, token)
        .then(() => console.log('Problem marked as completed'))
        .catch((err) => console.error('Problem completion failed', err));
    }
  }, [problemSolved, taskId, token]);

  const handleAnswerSelect = (index: number, isTrue: boolean) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = isTrue;
    setSelectedAnswers(newAnswers);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswers.every((answer) => answer !== null)) {
      setShowResult(true);

      const allCorrect = selectedAnswers.every(
        (answer, index) => answer === taskData.statements[index].isTrue
      );

      if (allCorrect) {
        setProblemSolved(true);
      }
    }
  };

  const allAnswersSelected = selectedAnswers.every((answer) => answer !== null);

  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Zadanie matematyczne</h2>

        <div className="space-y-6">
          <TrueFalseQuestion
            question={taskData.description}
            statements={taskData.statements}
            selectedAnswers={selectedAnswers}
            onAnswerSelect={handleAnswerSelect}
            isSubmitted={showResult}
            questionImg={taskData.questionImg}
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
            <p
              className={`text-2xl mb-4 font-bold ${
                selectedAnswers.every(
                  (answer, index) => answer === taskData.statements[index].isTrue
                )
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {selectedAnswers.every(
                (answer, index) => answer === taskData.statements[index].isTrue
              )
                ? 'Wszystkie odpowiedzi poprawne!'
                : 'Nie wszystkie odpowiedzi są poprawne!'}
            </p>

            {!selectedAnswers.every(
              (answer, index) => answer === taskData.statements[index].isTrue
            ) && (
              <div className="mt-4 space-y-2">
                {taskData.statements.map((statement, index) => (
                  <p key={index} className="text-lg">
                    Stwierdzenie {index + 1}: {statement.isTrue ? 'Prawda' : 'Fałsz'}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default LinearFunctionTrueFalseTask;
