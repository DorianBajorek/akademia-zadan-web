"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import { getBarometerProblems, checkBarometerAnswers } from "@/service";

interface QuestionType {
  id: number;
  text: string;
  answers: string[];
  correct: number;
  taskId: number;
  taskType: string;
  question1: string;
  question2: string;
  images: string[];
}

const Barometer: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
  const router = useRouter();
  const letterMap = ["a", "b", "c", "d"];
  const tf2Map = ["tt", "tf", "ft", "ff"];

  const replaceHashes = (text: string) => {
    if (text == null) return "";
    return text.replace(/##/g, "\\");
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = async () => {
    const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null);
  
    if (!allAnswered) {
      alert("Proszę odpowiedzieć na wszystkie pytania.");
      return;
    }
    
    const answersPayload = questions.map(q => {    
      return {
        task_id: q.taskId,
        user_answer: q.taskType === "tf2" ? tf2Map[selectedAnswers[q.id]!] : letterMap[selectedAnswers[q.id]!],
      };
    });
    
  
    const result = await checkBarometerAnswers(answersPayload);
    if (result) {
      localStorage.setItem("barometerResults", JSON.stringify({ results: result.results, summary: result.summary, questions }));
      router.push("/barometer-result");
    } else {
      alert("Wystąpił błąd podczas wysyłania odpowiedzi.");
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBarometerProblems();
      const newQuestions = data.map(
        (
          elem: {
            description: any;
            choiceA: string;
            choiceB: string;
            choiceC: string;
            choiceD: string;
            task_id: any;
            task_type: any;
            question1?: string;
            question2?: string;
            images: { image: string }[];
          },
          index: number
        ) => ({
          id: index + 1,
          text: replaceHashes(elem.description || ""),
          answers:
            elem.task_type === "tf2"
              ? ["tt", "tf", "ft", "ff"]
              : [
                  replaceHashes(elem.choiceA),
                  replaceHashes(elem.choiceB),
                  replaceHashes(elem.choiceC),
                  replaceHashes(elem.choiceD),
                ],
          correct: 0,
          taskId: elem.task_id,
          taskType: elem.task_type,
          ...(elem.task_type === "tf2" && {
            question1: replaceHashes(elem.question1 || ""),
            question2: replaceHashes(elem.question2 || ""),
          }),
          images: Array.isArray(elem.images) ? elem.images.map(img => "https://akademiazadan.pl/" + img.image) : [],
        })
      );
      setQuestions(newQuestions);
    };
  
    fetchData();
  }, []);
  
    
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Barometr Matematyczny
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Odpowiedz na poniższe pytania i sprawdź swoje umiejętności!
        </p>

        <div className="space-y-6">
          {questions.map((q) => (
            q.taskType === "tf2" ? 
              <Question
                key={q.id}
                id={q.id}
                taskId={q.taskId}
                text={q.text}
                answers={q.answers}
                selectedAnswer={tf2Map[selectedAnswers[q.id]!]}
                onAnswerSelect={handleAnswerSelect}
                question1={q.question1}
                question2={q.question2}
                taskType="tf2"
                images={q.images}
              />
            : (
              <Question
                key={q.id}
                id={q.id}
                taskId={q.taskId}
                text={q.text}
                answers={q.answers}
                selectedAnswer={letterMap[selectedAnswers[q.id]!]}
                onAnswerSelect={handleAnswerSelect}
                taskType="mc4"
                images={q.images}
              />
            )
          ))}

        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700"
          >
            Wyślij odpowiedzi
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Barometer;
