import { InlineMath } from "react-katex";

interface QuestionProps {
  id: number;
  text: string;
  answers: string[];
  selectedAnswer: number | null;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
  isCorrect?: boolean | null;
}

const answerLabels = ["A", "B", "C", "D"];

const Question: React.FC<QuestionProps> = ({ id, text, answers, selectedAnswer, onAnswerSelect, isCorrect }) => {
  const renderText = (text: string) => {
    const parts = text.split(/\$(.*?)\$/g); 
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <InlineMath key={index} math={`${part}`} />
      )
    );
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h3 className="text-xl text-gray-800">
        {renderText(text)}
      </h3>
      <div className="mt-4 space-y-3">
        {answers.map((answer, index) => {
          let buttonClass = "border-gray-300 hover:border-blue-400";

          if (selectedAnswer === index) {
            if (isCorrect === null || isCorrect === undefined) {
              buttonClass = "border-blue-500 bg-blue-100";
            } else {
              buttonClass = isCorrect ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100";
            }
          }

          return (
            <button
              key={index}
              className={`w-full flex items-center p-3 rounded-lg text-gray-800 font-medium border-2 transition ${buttonClass}`}
              onClick={() => onAnswerSelect(id, index)}
              disabled={isCorrect != null}
            >
              <span className="font-bold text-blue-600 mr-3">ODPOWIEDŹ {answerLabels[index]}</span>
              {renderText(answer)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
