"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import TaskContent from "@/components/TaskContent";

interface QuestionType {
  id: number;
  text: string;
  answers: string[];
  correctAnswer: string;
  taskId: number;
  taskType: string;
  images: string[];
  content?: string;
}

interface OpneQuestion {
  content: string;
  image: string;
}

const Matura1: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [openTasks, setOpenTasks] = useState<OpneQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string | null }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawData, setRawData] = useState<any[]>([]);
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
    
    let totalPoints = 0;
    let earnedPoints = 0;
    
    const results = questions.map(q => {
      const taskData = rawData.find(item => item.task_id === q.taskId);
      const taskPoints = taskData?.points || 1;
      totalPoints += taskPoints;
      
      const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
      if (isCorrect) {
        earnedPoints += taskPoints;
      }
      
      return {
        questionId: q.id,
        userAnswer: selectedAnswers[q.id],
        isCorrect,
        points: isCorrect ? taskPoints : 0
      };
    });
  
    localStorage.setItem("matura1Results", JSON.stringify({
      questions,
      answers: selectedAnswers,
      results,
      openTasks,
      totalPoints,
      earnedPoints
    }));
    
    router.push("/matura-result");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/matura/matura1.json');
        
        if (!response.ok) {
          throw new Error(`Nie można załadować danych. Status: ${response.status}`);
        }

        const data = await response.json();
        setRawData(data);
        const formattedQuestions: QuestionType[] = [];
        const formattedOpenTasks: OpneQuestion[] = [];
        data.forEach((item: any, index: number) => {
          const baseQuestion = {
            id: index + 1,
            taskId: item.task_id || 0,
            taskType: item.task_type,
            images: item.images || []
          };

          if (item.task_type === "open") {
            formattedOpenTasks.push({
              content: replaceHashes(item.content || item.description),
              image: item.image
            });
          } else {
            formattedQuestions.push({
              ...baseQuestion,
              text: replaceHashes(item.description),
              answers: [
                replaceHashes(item.choiceA),
                replaceHashes(item.choiceB),
                replaceHashes(item.choiceC),
                replaceHashes(item.choiceD)
              ],
              correctAnswer: item.correct_answer
            });
          }
        });

        setQuestions(formattedQuestions);
        setOpenTasks(formattedOpenTasks);
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
            <h3 className="text-2xl font-bold text-blue-600 mb-6">Zadania zamknięte</h3>
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

            {openTasks.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-blue-600 mb-6">Zadania otwarte</h3>
                <div className="space-y-6">
                  {openTasks.map((task, key) => (
                    <TaskContent
                      key={key}
                      content={task.content || ""}
                      image={task.image}
                    />
                  ))}
                </div>
              </div>
            )}

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