"use client";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";
import { getProblems, checkBarometerAnswers } from "@/service";

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

const TaskSpeedrun: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [correctAnswer, setCorrectAnswer] = useState<string>();
  const [showNextTask, setShowNextTask] = useState<boolean>(false);
  const [questionNr, setQuestionNr] = useState<number>(0);
  const letterMap = ["a", "b", "c", "d"];
  const tf2Map = ["tt", "tf", "ft", "ff"];

  const replaceHashes = (text: string) => {
    if (text == null) return "";
    return text.replace(/##/g, "\\");
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
    console.log(questions[0].correct);
    console.log(answerIndex);
    setIsCorrect(answerIndex === questions[0].correct);
    setCorrectAnswer(questions[0].taskType === "tf2" ? tf2Map[questions[0].correct] : letterMap[questions[0].correct])
    setShowNextTask(true);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleNextTask = async () => {
    setQuestionNr(questionNr + 1);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProblems(1);
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
            correct_answer: string;
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
          correct: elem.correct_answer.charCodeAt(0)-"a".charCodeAt(0),
          taskId: elem.task_id,
          taskType: elem.task_type,
          ...(elem.task_type === "tf2" && {
            question1: replaceHashes(elem.question1 || ""),
            question2: replaceHashes(elem.question2 || ""),
          }),
          images: Array.isArray(elem.images) ? elem.images.map(img => img.image) : [],
        })
      );
      setIsCorrect(undefined);
      setSelectedAnswers({});
      setCorrectAnswer(undefined);
      setShowNextTask(false);
      setQuestions(newQuestions);
    };
  
    fetchData();
  }, [questionNr]);
  
    
  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Zadaniowy speedrun
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Rozwiązuj kolejne losowo wybrane zadania i szlifuj swoje umiejętności
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
                isCorrect={isCorrect}
                correctAnswer={correctAnswer}
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
                isCorrect={isCorrect}
                correctAnswer={correctAnswer}
                taskType="mc4"
                images={q.images}
              />
            )
          ))}

        </div>

        {showNextTask && (
          <div className="mt-8 text-center">
            {isCorrect ?
              <p className="text-2xl mt-2 font-bold text-center text-green-600  space-y-6">
                Poprawna odpowiedź
              </p> :
              <p className="text-2xl mt-2 font-bold text-center text-gray-600 space-y-6">
                Błędna odpowiedź
              </p>
            }
            <br />
            <button
              onClick={handleNextTask}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700"
            >
              Zobacz kolejne zadanie
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default TaskSpeedrun;
