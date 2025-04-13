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
  youtubeVideoId?: string;
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
  youtubeVideoId,
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
    win!.focus();
  };

  const handleVideoClick = () => {
    if (youtubeVideoId) {
      const win = window.open(youtubeVideoId, "_blank");
      win!.focus();
    }
  };

  const correctAnswerIndex = taskType === "tf2" && correctAnswer ? tf2Map.indexOf(correctAnswer.toLowerCase()) : answerLabels.indexOf(correctAnswer?.toUpperCase() || "");

  const displayAnswers = taskType === "tf2" 
    ? tf2Map.map((_, index) => <strong key={index}>{["1. Prawda, 2. Prawda", "1. Prawda, 2. Fałsz", "1. Fałsz, 2. Prawda", "1. Fałsz, 2. Fałsz"][index]}</strong>) 
    : answers.map((answer, index) => <strong key={index}>{renderText(answer)}</strong>);

  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-400 relative flex flex-col">
      <h3 className="text-lg md:text-xl text-gray-800">{renderText(text)}</h3>
      {question1 && <h5 className="text-lg md:text-xl text-gray-800">Oceń prawdziwość podanych zdań:</h5>}
      {question1 && (
        <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-700">
          <span className="font-bold">Pytanie 1: </span>
          {renderText(question1)}
        </p>
      )}
      {question2 && (
        <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-700">
          <span className="font-bold">Pytanie 2: </span>
          {renderText(question2)}
        </p>
      )}
      {images && images.map((image, index) => (
        <div key={index} className="mt-2 md:mt-4 flex justify-center">
          <img 
            src={image} 
            alt={`Image ${index + 1}`}
            className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </div>
      ))}

      <div className="mt-3 md:mt-4 space-y-2 md:space-y-3 flex-grow">
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
              className={`w-full flex items-center p-2 md:p-3 rounded-lg text-sm md:text-base text-gray-800 font-medium border-2 transition ${buttonClass}`}
              onClick={() => onAnswerSelect(id, index)}
              disabled={isCorrect != null}
            >
              <span className="font-bold text-blue-600 mr-2 md:mr-3 text-xs md:text-sm">ODP. {answerLabels[index]}</span>
              {answer}
            </button>
          );
        })}
      </div>

      <div className="mt-3 md:mt-4 flex justify-end space-x-2">
        {isCorrect != undefined && isCorrect != null && (
          <>
            {youtubeVideoId && (
              <button
                className="px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition text-sm md:text-base bg-red-500 text-white hover:bg-red-600 flex items-center"
                onClick={handleVideoClick}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                Obejrzyj
              </button>
            )}
            <button
              className={`px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition text-sm md:text-base ${
                solutionsMap.hasOwnProperty(taskId.toString())
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              onClick={handleSolutionClick}
              disabled={!solutionsMap.hasOwnProperty(taskId.toString())}
            >
              Rozwiązanie
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Question;