import { InlineMath } from "react-katex";

interface QuestionTrueFalseProps {
    id: number;
    text: string;
    selectedAnswer: boolean | null;
    onAnswerSelect: (questionId: number, answer: boolean) => void;
    isCorrect?: boolean | null;
    correctAnswer?: boolean | null;
  }
  
  const QuestionTrueFalse: React.FC<QuestionTrueFalseProps> = ({
    id,
    text,
    selectedAnswer,
    onAnswerSelect,
    isCorrect,
    correctAnswer,
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
  
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-400">
        <h3 className="text-xl text-gray-800">{renderText(text)}</h3>
        <div className="mt-4 space-y-3">
          {[true, false].map((answer) => {
            let buttonClass = "border-gray-300 hover:border-blue-400";
  
            if (selectedAnswer === answer) {
              if (isCorrect === null || isCorrect === undefined) {
                buttonClass = "border-blue-500 bg-blue-100";
              } else {
                buttonClass = isCorrect ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100";
              }
            }
  
            if (isCorrect === false && correctAnswer === answer) {
              buttonClass = "border-green-500 bg-green-100";
            }
  
            return (
              <button
                key={answer ? "true" : "false"}
                className={`w-full flex items-center p-3 rounded-lg text-gray-800 font-medium border-2 transition ${buttonClass}`}
                onClick={() => onAnswerSelect(id, answer)}
                disabled={isCorrect != null}
              >
                <span className="font-bold text-blue-600 mr-3">{answer ? "PRAWDA" : "FAŁSZ"}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  
  export default QuestionTrueFalse;
  