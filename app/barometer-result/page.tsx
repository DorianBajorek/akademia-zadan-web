"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";

const BarometerResult: React.FC = () => {
  const router = useRouter();
  const [results, setResults] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("barometerResults");
  
    if (storedResults) {
      const { results, summary, questions } = JSON.parse(storedResults);
      setResults(results);
      setSummary(summary);
      setQuestions(questions);
    } else {
      router.push("/barometer");
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
          Wyniki Barometru
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Twój wynik: {summary.correct_answers} / {summary.total_tasks} ({summary.success_rate}%)
        </p>

        <div className="space-y-6">
          {questions.map((q, index) => {
            const result = results.find(r => r.task_id === q.taskId);
            const isCorrect = result?.is_correct;
            const correctAnswer = result?.correct_answer;

            return (
              <div className="space-y-6">
                <Question
                  id={q.id}
                  text={q.text}
                  answers={q.answers}
                  selectedAnswer={q.answers.findIndex((ans: any) => ans === result?.user_answer)}
                  onAnswerSelect={() => {}}
                  isCorrect={isCorrect}
                  correctAnswer={correctAnswer}
                />
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarometerResult;
