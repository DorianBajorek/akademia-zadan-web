'use client';
import { InlineMath } from 'react-katex';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import AIExplanation from './AIExplantation';

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
  taskId?: number;
}

const answerLabels = ['A', 'B', 'C', 'D'];
const letterMap = ['a', 'b', 'c', 'd'];

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
  taskId,
}) => {
  const answers = [choiceA, choiceB, choiceC, choiceD];

  const renderText = (text: string) => {
    const parts = text.split(/(\$.*?\$)/g);
    return parts.map((part, index) =>
      part.startsWith('$') && part.endsWith('$') ? (
        <InlineMath key={index} math={part.slice(1, -1)} />
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const isImage = (text: string) => {
    return /\.(jpeg|jpg|gif|png|webp|svg)$/.test(text) || text.startsWith('http');
  };

  const renderAnswerContent = (text: string) => {
    return isImage(text) ? (
      <img src={text} alt="answer option" className="max-w-full h-auto my-2 rounded-lg" />
    ) : (
      renderText(text)
    );
  };
  const correctAnswerIndex = letterMap.indexOf(correctAnswer.toLowerCase());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100"
    >
      <motion.h3
        className="text-xl font-medium text-gray-800 mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {renderText(description)}
      </motion.h3>

      {descriptionImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 overflow-hidden rounded-xl border-2 border-gray-100 shadow-sm"
        >
          <img
            src={descriptionImg}
            alt="description illustration"
            className="w-full h-auto max-h-[400px] object-contain mx-auto"
          />
        </motion.div>
      )}

      <div className="space-y-4">
        {answers.map((answer, index) => {
          let buttonStyle = 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50';
          const isSelected = selectedAnswer === letterMap[index];
          const isActuallyCorrect = index === correctAnswerIndex;

          if (isSelected) {
            buttonStyle =
              isCorrect === undefined || isCorrect === null
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : isCorrect
                  ? 'border-emerald-500 bg-emerald-50 shadow-md'
                  : 'border-rose-500 bg-rose-50 shadow-md';
          }

          if (!isSelected && isCorrect === false && isActuallyCorrect) {
            buttonStyle = 'border-emerald-500 bg-emerald-50 shadow-md';
          }

          return (
            <motion.button
              key={index}
              onClick={() => onAnswerSelect(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${buttonStyle}`}
              disabled={isCorrect !== null && isCorrect !== undefined}
              whileHover={{ scale: isCorrect === null ? 1.02 : 1 }}
              whileTap={{ scale: isCorrect === null ? 0.98 : 1 }}
            >
              <div className="flex items-start">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 font-bold ${
                    isSelected
                      ? isCorrect === true
                        ? 'bg-emerald-500 text-white'
                        : isCorrect === false
                          ? 'bg-rose-500 text-white'
                          : 'bg-blue-500 text-white'
                      : isCorrect === false && isActuallyCorrect
                        ? 'bg-emerald-500 text-white'
                        : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {answerLabels[index]}
                </span>
                <div className="text-gray-700">{renderAnswerContent(answer)}</div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AIExplanation
        description={description}
        choiceA={choiceA}
        choiceB={choiceB}
        choiceC={choiceC}
        choiceD={choiceD}
        correctAnswer={correctAnswer}
        taskId={taskId}
      />
    </motion.div>
  );
};

export default Question2;
