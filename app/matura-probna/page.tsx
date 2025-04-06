"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";

interface QuestionType {
  id: number;
  text: string;
  answers: string[];
  correctAnswer: string;
  taskId: number;
  taskType: string;
  images: string[];
}

const Matura1: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string | null }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const replaceHashes = (text: string) => {
    if (!text) return "";
    return text.replace(/##/g, "\\");
  };

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null);
  
    if (!allAnswered) {
      alert("Proszę odpowiedzieć na wszystkie pytania.");
      return;
    }
    
    const results = questions.map(q => ({
      questionId: q.id,
      userAnswer: selectedAnswers[q.id],
      isCorrect: selectedAnswers[q.id] === q.correctAnswer
    }));

    localStorage.setItem("matura1Results", JSON.stringify({
      questions,
      answers: selectedAnswers,
      results
    }));
    
    router.push("/matura1-result");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Zakładając, że plik jest w public/data/
        const response = await fetch('/matura/matura1.json');
        
        if (!response.ok) {
          throw new Error(`Nie można załadować danych. Status: ${response.status}`);
        }

        const data = await response.json();
        
        const formattedQuestions = data.map((item: any, index: number) => ({
          id: index + 1,
          text: replaceHashes(item.description),
          answers: [
            replaceHashes(item.choiceA),
            replaceHashes(item.choiceB),
            replaceHashes(item.choiceC),
            replaceHashes(item.choiceD)
          ],
          correctAnswer: item.correct_answer,
          taskId: item.task_id,
          taskType: item.task_type,
          images: item.images || []
        }));

        setQuestions(formattedQuestions);
      } catch (err) {
        console.error("Błąd podczas ładowania zadań:", err);
        setError("Wystąpił problem podczas ładowania zadań. Spróbuj odświeżyć stronę.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Matura próbna - przewidywania sztucznej inteligencji
        </h2>
        <p className="text-md text-gray-800 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Ten próbny arkusz maturalny to <span className="font-semibold text-blue-700">coś więcej niż zwykły zestaw zadań</span> – to starannie wyselekcjonowane typy, które <span className="font-semibold">z dużym prawdopodobieństwem pojawią się na prawdziwej maturze z matematyki</span>. 🔥
            <br /><br />
            Zadania zostały przygotowane przez <span className="font-semibold text-blue-700">sztuczną inteligencję</span>, która przeanalizowała dziesiątki arkuszy z ostatnich lat, aby wytypować najbardziej prawdopodobne zagadnienia.
            <br /><br />
            To lista tzw. <span className="font-bold text-green-700">pewniaków maturalnych</span> – jeśli chcesz mieć realną przewagę i uczyć się tego, co naprawdę się liczy, <span className="font-semibold text-blue-600">zacznij właśnie od tych zadań!</span>
        </p>

        {loading && (
          <div className="text-center py-8">
            <p className="text-lg">Ładowanie zadań...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8 text-red-600">
            <p className="text-lg">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="space-y-6">
              {questions.map((q) => (
                <Question
                  key={q.id}
                  id={q.id}
                  taskId={q.taskId}
                  text={q.text}
                  answers={q.answers}
                  selectedAnswer={selectedAnswers[q.id] || null}
                  onAnswerSelect={(id, answerIndex) => 
                    handleAnswerSelect(id, String.fromCharCode(97 + answerIndex))}
                  taskType={q.taskType}
                  images={q.images}
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors"
                disabled={loading}
              >
                Zakończ test
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Matura1;