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
    return <p className="text-center mt-10 text-xl font-semibold text-gray-600">Ładowanie wyników, proszę czekać...</p>;
  }

  const getBarometerColor = (rate: number) => {
    if (rate >= 80) return "bg-green-500";
    if (rate >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getResultMessage = (rate: number) => {
    if (rate >= 80) {
      return (
        <>
          <p className="text-lg text-gray-700 mb-4">
            Gratulacje! Twój wynik sugeruje, że jesteś świetnie przygotowany do matury z matematyki. Tak trzymaj!
          </p>
          <p className="text-md text-gray-600">
            Twój poziom wiedzy jest naprawdę wysoki. Z takim przygotowaniem na pewno poradzisz sobie na maturze. Kontynuuj regularną naukę, a wyniki będą jeszcze lepsze!
          </p>
        </>
      );
    } else if (rate >= 50) {
      return (
        <>
          <p className="text-lg text-gray-700 mb-4">
            Całkiem nieźle! Masz solidne podstawy, ale warto jeszcze popracować nad trudniejszymi zagadnieniami.
          </p>
          <p className="text-md text-gray-600">
            Widać, że opanowałeś podstawy, ale są jeszcze obszary, które wymagają dopracowania. Skup się na trudniejszych zadaniach, a wyniki z pewnością się poprawią.
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-lg text-gray-700 mb-4">
            Nie poddawaj się! Wynik sugeruje, że warto jeszcze poćwiczyć matematykę. Spróbuj rozwiązać więcej zadań i przeanalizować błędy.
          </p>
          <p className="text-md text-gray-600">
            Chociaż wynik nie jest jeszcze zadowalający, masz jeszcze czas na poprawę. Skup się na ćwiczeniach z matematyki, analizuj błędy, aby uniknąć ich w przyszłości. Praca, którą włożysz, zaprocentuje na maturze!
          </p>
        </>
      );
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-10">
          Wyniki Barometru - Analiza
        </h2>

        <div className="flex flex-col items-center mb-8">
          <div className="relative w-full max-w-md h-16 bg-gray-200 rounded-full overflow-hidden shadow-lg border-4 border-gray-300">
            <motion.div
              className={`h-full ${getBarometerColor(summary.points)} flex items-center justify-center text-white font-bold text-xl rounded-full shadow-md transition-all duration-500 ease-in-out`}
              initial={{ width: "0%" }}
              animate={{ width: `${summary.points}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
            </motion.div>
          </div>
          <div className="text-lg text-gray-700 mt-4 text-center font-semibold">
            Estymowany wynik z matury podstawowej z matematyki: <span className="font-bold text-black">{summary.bot_points}% - {summary.top_points}%</span>
          </div>
          <div className="text-md text-gray-600 mt-4 text-center max-w-lg font-medium">
            {getResultMessage(summary.points)}
          </div>
        </div>

        <div className="space-y-8">
          {questions.map((q, index) => {
            const result = results.find((r) => r.task_id === q.taskId);
            const isCorrect = result?.is_correct;
            const correctAnswer = result?.correct_answer;
            return (
              <div key={index} className="space-y-8">
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
      </main>
      <Footer />
    </div>
  );
};

export default BarometerResult;
