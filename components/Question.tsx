import { InlineMath } from "react-katex";

interface QuestionProps {
  id: number;
  text: string;
  answers: string[];
  selectedAnswer: number | null;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
  isCorrect?: boolean | null;
  correctAnswer?: string | null;
  question1?: string | null;
  question2?: string | null;
  taskType?: string;
}

const answerLabels = ["A", "B", "C", "D"];

const Question: React.FC<QuestionProps> = ({
  id,
  text,
  answers,
  selectedAnswer,
  onAnswerSelect,
  isCorrect,
  correctAnswer,
  question1,
  question2,
  taskType,
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

  const correctAnswerIndex = correctAnswer ? answerLabels.indexOf(correctAnswer.toUpperCase()) : -1;

  const displayAnswers = taskType === "tf2" 
    ? ["1. Prawda, 2. Prawda", "1. Prawda, 2. Fałsz", "1. Fałsz, 2. Prawda", "1. Fałsz, 2. Fałsz"].map((answer) => <strong>{answer}</strong>) 
    : answers.map((answer) => <strong>{renderText(answer)}</strong>);

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-400">
      <h3 className="text-xl text-gray-800">{renderText(text)}</h3>
      {question1 && (
         <h5 className="text-xl text-gray-800">Oceń prawdziwość podanych zdań: </h5>
      )}
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

      <div className="mt-4 space-y-3">
        {displayAnswers.map((answer, index) => {
          let buttonClass = "border-gray-300 hover:border-blue-400";

          if (selectedAnswer === index) {
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
    </div>
  );
};

export default Question;
