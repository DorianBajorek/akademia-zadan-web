"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import Link from 'next/link';

const BarometerResult: React.FC = () => {
  const router = useRouter();
  const [results, setResults] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("dailyResults");
  
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
                  answers={q.answers}
                  selectedAnswer={q.answers.findIndex(ans => ans === result?.user_answer)}
                  onAnswerSelect={() => {}}
                  isCorrect={isCorrect}
                  correctAnswer={correctAnswer}
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
          <div className="flex justify-center">
            <Link href="/daily-task-solution">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700">
                Zobacz rozwiązanie
              </div>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarometerResult;
