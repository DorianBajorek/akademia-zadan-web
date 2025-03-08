"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import { motion } from "framer-motion";
import LoadingSpinner from "@/components/LoadingSpinner";

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

  const getBarometerColor = (rate: number) => {
    if (rate >= 80) return "bg-green-500";
    if (rate >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Wyniki Barometru
        </h2>

        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-md h-10 bg-gray-200 rounded-full overflow-hidden shadow-lg border-2 border-gray-300">
            <motion.div 
              className={`h-full ${getBarometerColor(summary.success_rate)} flex items-center justify-center text-white font-bold text-lg`} 
              initial={{ width: "0%" }}
              animate={{ width: `${summary.success_rate}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
            </motion.div>
          </div>
          <p className="text-lg text-gray-700 mt-2">
            Twój wynik: {summary.success_rate}%
          </p>
        </div>

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
      </main>
      <Footer />
    </div>
  );
};

export default BarometerResult;
