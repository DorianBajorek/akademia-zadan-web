"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import TaskContent from "@/components/TaskContent";

interface ResultType {
  questionId: number;
  userAnswer: string | null;
  isCorrect: boolean;
}

interface StoredResults {
  questions: any[];
  answers: { [key: number]: string | null };
  results: ResultType[];
  openTasks: any[];
  totalPoints: number;
  earnedPoints: number;
}

const Matura1Result: React.FC = () => {
  const router = useRouter();
  const [storedResults, setStoredResults] = useState<StoredResults | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("matura1Results");
    if (storedData) {
      const parsedData: StoredResults = JSON.parse(storedData);
      setStoredResults(parsedData);
    } else {
      router.push("/matura1");
    }
  }, []);

  if (!storedResults) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <Nav />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <p className="text-center mt-10 text-xl font-semibold text-gray-600">
            Ładowanie wyników, proszę czekać...
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-10">
          Wyniki testu maturalnego
        </h2>

        <div className="mb-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <h3 className="text-2xl font-bold text-center mb-4">Podsumowanie</h3>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-600">{storedResults.earnedPoints}</p>
            <p className="text-gray-600">Zdobyte punkty</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-700">{storedResults.totalPoints}</p>
            <p className="text-gray-600">Maksymalna liczba punktów</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">
              {Math.round((storedResults.earnedPoints / storedResults.totalPoints) * 100)}%
            </p>
            <p className="text-gray-600">Wynik procentowy</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Ten wynik został obliczony na podstawie 10 przykładowych zadań. Jeśli chcesz uzyskać dostęp do pełnego arkusza, sprawdź informacje na dole strony.
        </p>
      </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-blue-600 mb-6">Zadania zamknięte</h3>
          {storedResults.questions.map((q, index) => {
            const result = storedResults.results.find(r => r.questionId === q.id);
            return (
              <Question
                key={index}
                id={q.id}
                text={q.text}
                taskId={q.taskId}
                answers={q.answers}
                selectedAnswer={storedResults.answers[q.id]}
                onAnswerSelect={() => {}}
                isCorrect={result?.isCorrect}
                correctAnswer={q.correctAnswer}
                taskType={q.taskType}
                images={q.images}
                youtubeVideoId={q.youtubeVideoId}
              />
            );
          })}

          {storedResults.openTasks.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Zadania otwarte</h3>
              <div className="space-y-6">
                {storedResults.openTasks.map((task, index) => (
                  <TaskContent
                    key={index}
                    content={task.content}
                    image={task.image}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sekcja kontaktowa */}
        <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Chcesz uzyskać dostęp do pełnej wersji?</h3>
          <p className="text-gray-700 mb-4">
          Aby otrzymać pełny arkusz maturalny wraz z omówieniem każdego zadania w formie wideo, szczegółowymi rozwiązaniami oraz praktycznymi wskazówkami od naszych ekspertów, skontaktuj się z nami. Koszt zestawu: 30 PLN. <br></br> <br></br>
         Dodatkowo oferujemy dokładne sprawdzenie zadań otwartych zgodnie z oficjalnym kluczem CKE – wraz z komentarzem i oceną punktową.
          </p>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-800">
              📧 Email: <a href="mailto:kontakt@akademiazadan.pl" className="text-blue-600 hover:underline">akademiazadan@gmail.com</a>
            </p>
            <p className="text-lg font-medium text-gray-800">
              📞 Telefon: <a href="tel:+48530421473" className="text-blue-600 hover:underline">+48 530 421 473</a>
            </p>
          </div>
          <p className="mt-4 text-gray-600">
            Nasi konsultanci są dostępni przez całą dobę.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Matura1Result;