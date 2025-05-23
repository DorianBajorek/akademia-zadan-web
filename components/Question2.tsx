import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

interface Question2Props {
  description: string;
  descriptionImg?: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  correctAnswer: string;
  selectedAnswer: string | null;
  onAnswerSelect: (answerIndex: number) => void;
  isCorrect?: boolean | null;
}

const answerLabels = ["A", "B", "C", "D"];
const letterMap = ["a", "b", "c", "d"];

const Question2: React.FC<Question2Props> = ({
  description,
  descriptionImg,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  correctAnswer,
  selectedAnswer,
  onAnswerSelect,
  isCorrect,
}) => {
  const answers = [choiceA, choiceB, choiceC, choiceD];

  const renderText = (text: string) => {
    const parts = text.split(/\$(.*?)\$/g);
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <InlineMath key={index} math={part} />
      )
    );
  };

  const isImage = (text: string) => {
    return /\.(jpeg|jpg|gif|png|webp|svg)$/.test(text) || text.startsWith("http");
  };

  const renderAnswerContent = (text: string) => {
    return isImage(text) ? (
      <img src={text} alt="answer option" className="max-w-full h-auto my-2 rounded" />
    ) : (
      renderText(text)
    );
  };

  const correctAnswerIndex = letterMap.indexOf(correctAnswer.toLowerCase());

  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-200">
      <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-4">
        {renderText(description)}
      </h3>

      {descriptionImg && (
        <img
          src={descriptionImg}
          alt="description illustration"
          className="w-[500px] h-[350px] mb-4 rounded mx-auto object-contain"
        />
      )}

      <div className="space-y-3">
        {answers.map((answer, index) => {
          let buttonStyle = "border-gray-200 hover:border-blue-400";
          const isSelected = selectedAnswer === letterMap[index];
          const isActuallyCorrect = index === correctAnswerIndex;

          if (isSelected) {
            buttonStyle =
              isCorrect === undefined || isCorrect === null
                ? "border-blue-500 bg-blue-50"
                : isCorrect
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50";
          }

          if (!isSelected && isCorrect === false && isActuallyCorrect) {
            buttonStyle = "border-green-500 bg-green-50";
          }

          return (
            <button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${buttonStyle}`}
              disabled={isCorrect !== null && isCorrect !== undefined}
            >
              <span className="font-bold text-blue-600 mr-2">
                {answerLabels[index]}.
              </span>
              {renderAnswerContent(answer)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question2;
