"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import Link from 'next/link';

const DailyTaskResult: React.FC = () => {
  const router = useRouter();
  const [results, setResults] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("dailyResults");
    console.log(JSON.stringify(storedResults, null, 2));
    if (storedResults) {
      const { results, summary, questions } = JSON.parse(storedResults);
      setResults(results);
      setSummary(summary);
      setQuestions(questions);
    } else {
      router.push("/daily-task");
    }
  }, []);
  
  if (!summary) {
    return <p className="text-center mt-10">Ładowanie wyników...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Wyniki Daily Zadania
        </h2>

        <div className="space-y-6">
          {questions.map((q, index) => {
            const result = results.find(r => r.task_id === q.taskId);
            const isCorrect = result?.is_correct;
            const correctAnswer = result?.correct_answer;
            
            return (
              <div key={index} className="space-y-6">
                <Question
                  id={q.id}
                  text={q.text}
                  taskId={q.taskId}
                  answers={q.answers}
                  selectedAnswer={result?.user_answer}
                  onAnswerSelect={() => {}}
                  isCorrect={isCorrect}
                  correctAnswer={correctAnswer}
                  question1={q.taskType === "tf2" ? q.question1 : undefined}
                  question2={q.taskType === "tf2" ? q.question2 : undefined}
                  taskType={q.taskType}
                  images={q.images}
                />
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mb-8 space-y-6">
          <h2 className="text-xl font-bold text-center text-blue-600 mb-8">
          </h2>
          {summary.correct_answers ? 
          <div>
            <p className="text-2xl mt-2 font-bold text-center text-green-600  space-y-6">
              Poprawna odpowiedź
            </p>
            <p className="text-lg text-gray-700 mt-2 text-center">
              Gratulacje, wróć jutro, aby sprawdzić swoją wiedzę w kolejnym zadaniu
            </p>
          </div>
           : 
          <div>
            <p className="text-2xl mt-2 font-bold text-center text-gray-600 space-y-6">
              Błędna odpowiedź
            </p>
            <p className="text-lg text-gray-700 mt-2 text-center">
              Powodzenia jutro, w międzyczasie możesz zobaczyć wyjaśnienie powyższego zadania (zarówno w formie tekstowej, jak i wideo) klikając przycisk poniżej
            </p>
          </div>
          }
          <h2 className="text-xl font-bold text-center text-blue-600 mb-8">
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DailyTaskResult;
