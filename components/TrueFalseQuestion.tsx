import { InlineMath } from "react-katex";
import 'katex/dist/katex.min.css';

interface TrueFalseQuestionProps {
  question: string;
  statements: {
    text: string;
    isTrue: boolean;
  }[];
  selectedAnswers: (boolean | null)[];
  onAnswerSelect: (index: number, isTrue: boolean) => void;
  isSubmitted?: boolean;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({
  question,
  statements,
  selectedAnswers,
  onAnswerSelect,
  isSubmitted = false,
}) => {
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

  const getButtonStyle = (index: number, isTrueButton: boolean) => {
    const isSelected = selectedAnswers[index] !== null && 
                      ((isTrueButton && selectedAnswers[index] === true) || 
                       (!isTrueButton && selectedAnswers[index] === false));

    if (!isSelected) return "border-gray-200 hover:border-blue-400";

    if (!isSubmitted) return "border-blue-500 bg-blue-50";

    const isCorrect = selectedAnswers[index] === statements[index].isTrue;
    return isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50";
  };

  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-200">
      <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-4">
        {renderText(question)}
      </h3>

      <div className="space-y-4">
        {statements.map((statement, index) => (
          <div key={index} className="space-y-2">
            <p className="text-gray-700 mb-1">{renderText(statement.text)}</p>
            <div className="flex space-x-3">
              <button
                onClick={() => onAnswerSelect(index, true)}
                disabled={isSubmitted}
                className={`flex-1 p-2 rounded-lg border-2 transition-colors ${getButtonStyle(index, true)}`}
              >
                <span className="font-bold">P</span> (Prawda)
              </button>
              <button
                onClick={() => onAnswerSelect(index, false)}
                disabled={isSubmitted}
                className={`flex-1 p-2 rounded-lg border-2 transition-colors ${getButtonStyle(index, false)}`}
              >
                <span className="font-bold">F</span> (Fałsz)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrueFalseQuestion;