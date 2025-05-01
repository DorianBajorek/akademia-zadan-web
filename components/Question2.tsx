import { InlineMath } from "react-katex";

interface QuestionProps {
  id: number;
  text: string;
  answers: string[];
  selectedAnswer: string | null;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
  isCorrect?: boolean | null;
  correctAnswer?: string | null;
  images?: string[];
}

const answerLabels = ["A", "B", "C", "D"];
const letterMap = ["a", "b", "c", "d"];

const Question2: React.FC<QuestionProps> = ({
  id,
  text,
  answers,
  selectedAnswer,
  onAnswerSelect,
  isCorrect,
  correctAnswer,
  images,
}) => {
  const  renderText = (text: string) => {
    const parts = text?.split(/\$(.*?)\$/g);
    console.log("SIEMA: " + parts)
    return parts?.map((part, index) =>
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <InlineMath key={index} math={part} />
      )
    );
  };

  const getButtonClass = (index: number) => {
    if (selectedAnswer?.toLowerCase() === letterMap[index]) {
      if (isCorrect === undefined || isCorrect === null) {
        return "border-blue-500 bg-blue-100";
      }
      return isCorrect ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100";
    }
    
    if (isCorrect === false && correctAnswer?.toLowerCase() === letterMap[index]) {
      return "border-green-500 bg-green-100";
    }
    
    return "border-gray-300 hover:border-blue-400";
  };

  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-400 relative flex flex-col">
      <div className="text-lg md:text-xl text-gray-800 mb-4">
        {renderText(text)}
      </div>

      {images?.map((image, index) => (
        <div key={index} className="mt-2 md:mt-4 flex justify-center">
          <img 
            src={image} 
            alt={`Image ${index + 1}`}
            className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
          />
        </div>
      ))}

      <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
        {answers.map((answer, index) => (
          <button
            key={index}
            className={`w-full flex items-start p-2 md:p-3 rounded-lg text-sm md:text-base text-gray-800 font-medium border-2 transition ${getButtonClass(index)}`}
            onClick={() => onAnswerSelect(id, index)}
            disabled={isCorrect !== undefined && isCorrect !== null}
          >
            <span className="font-bold text-blue-600 mr-2 md:mr-3 text-xs md:text-sm min-w-[50px]">
              {answerLabels[index]}
            </span>
            <div className="text-left">{renderText(answer)}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question2;