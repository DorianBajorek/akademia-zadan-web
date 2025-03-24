import { InlineMath } from "react-katex";
import { useRouter } from "next/navigation";
import { solutionsMap } from "@/app/rozwiazanie/[id]/solutionsMap";

interface QuestionProps {
  id: number;
  text: string;
  taskId: number;
  answers: string[];
  selectedAnswer: string | null;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
  isCorrect?: boolean | null;
  correctAnswer?: string | null;
  question1?: string | null;
  question2?: string | null;
  taskType?: string;
  images?: string[];
}

const answerLabels = ["A", "B", "C", "D"];
const letterMap = ["a", "b", "c", "d"];
const tf2Map = ["tt", "tf", "ft", "ff"];

const Question: React.FC<QuestionProps> = ({
  id,
  taskId,
  text,
  answers,
  selectedAnswer,
  onAnswerSelect,
  isCorrect,
  correctAnswer,
  question1,
  question2,
  taskType,
  images,
}) => {
  const renderText = (text: string) => {
    const parts = text?.split(/\$(.*?)\$/g);
    return parts?.map((part, index) =>
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <InlineMath key={index} math={`${part}`} />
      )
    );
  };

  const router = useRouter();

  const handleSolutionClick = () => {
    const win = window.open(`/rozwiazanie/${taskId}`, "_blank");
    win.focus();
  };

  const correctAnswerIndex = taskType === "tf2" && correctAnswer ? tf2Map.indexOf(correctAnswer.toLowerCase()) : answerLabels.indexOf(correctAnswer?.toUpperCase() || "");

  const displayAnswers = taskType === "tf2" 
    ? tf2Map.map((_, index) => <strong key={index}>{["1. Prawda, 2. Prawda", "1. Prawda, 2. Fałsz", "1. Fałsz, 2. Prawda", "1. Fałsz, 2. Fałsz"][index]}</strong>) 
    : answers.map((answer, index) => <strong key={index}>{renderText(answer)}</strong>);

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-400 relative flex flex-col">
      <h3 className="text-xl text-gray-800">{renderText(text)}</h3>
      {question1 && <h5 className="text-xl text-gray-800">Oceń prawdziwość podanych zdań:</h5>}
      {question1 && (
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Pytanie 1: </span>
          {renderText(question1)}
        </p>
      )}
      {question2 && (
        <p className="mt-2 text-gray-700">
          <span className="font-bold">Pytanie 2: </span>
          {renderText(question2)}
        </p>
      )}
      {images && images.map((image, index) => (
        <img 
          key={index}
          src={"https://akademiazadan.pl/" + image} 
          alt={`Image ${index + 1}`} 
          width={300} 
          height={300} 
          className="mt-4 self-center"
        />
      ))}

      <div className="mt-4 space-y-3 flex-grow">
        {displayAnswers.map((answer, index) => {
          let buttonClass = "border-gray-300 hover:border-blue-400";
          if ((taskType === "mc4" && selectedAnswer === letterMap[index]) || (taskType === "tf2" && selectedAnswer?.toLowerCase() === tf2Map[index])) {
            if (isCorrect === null || isCorrect === undefined) {
              buttonClass = "border-blue-500 bg-blue-100";
            } else {
              buttonClass = isCorrect ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100";
            }
          }

          if (isCorrect === false && correctAnswerIndex === index) {
            buttonClass = "border-green-500 bg-green-100";
          }

          return (
            <button
              key={index}
              className={`w-full flex items-center p-3 rounded-lg text-gray-800 font-medium border-2 transition ${buttonClass}`}
              onClick={() => onAnswerSelect(id, index)}
              disabled={isCorrect != null}
            >
              <span className="font-bold text-blue-600 mr-3">ODPOWIEDŹ {answerLabels[index]}</span>
              {answer}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex justify-end">
        {isCorrect != undefined && isCorrect != null && (
          <button
            className={`px-4 py-2 rounded-lg shadow-md transition ${
              solutionsMap.hasOwnProperty(taskId.toString())
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            onClick={handleSolutionClick}
            disabled={!solutionsMap.hasOwnProperty(taskId.toString())}
          >
            Rozwiązanie
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
