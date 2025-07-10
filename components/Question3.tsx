'use client';
import { InlineMath } from 'react-katex';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { useState } from 'react';

interface Question3Props {
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
  solution: string;
}

const answerLabels = ['A', 'B', 'C', 'D'];
const letterMap = ['a', 'b', 'c', 'd'];

const Question3: React.FC<Question3Props> = ({
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
  solution,
}) => {
  const [showSolution, setShowSolution] = useState(false);
  const answers = [choiceA, choiceB, choiceC, choiceD];
  const correctAnswerIndex = letterMap.indexOf(correctAnswer.toLowerCase());

  const renderText = (text: string): React.ReactNode[] => {
    const parts = text.split(
      /(<center>.*?<\/center>|<br\s*\/?>|\$.*?\$|<img[^>]*?>|<\/?strong>)/gi
    );

    let strongOpen = false;

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.toLowerCase() === '<strong>') {
        strongOpen = true;
        return null;
      }
      if (part.toLowerCase() === '</strong>') {
        strongOpen = false;
        return null;
      }

      let element: React.ReactNode = null;

      if (part.toLowerCase().startsWith('<center>') && part.toLowerCase().endsWith('</center>')) {
        const content = part.replace(/<\/?center>/gi, '');
        return (
          <div key={index} className="text-center">
            {renderText(content)}
          </div>
        );
      } else if (/^\$.*\$$/.test(part)) {
        element = <InlineMath key={index} math={part.slice(1, -1)} />;
      } else if (/<br\s*\/?>/i.test(part)) {
        element = <br key={index} />;
      } else if (/<img[^>]*?>/i.test(part)) {
        const srcMatch = part.match(/src=['"]([^'"]+)['"]/i);
        if (srcMatch) {
          element = (
            <img
              key={index}
              src={srcMatch[1]}
              alt=""
              className="max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] h-auto mx-auto block my-3"
            />
          );
        }
      } else {
        element = <span key={index}>{part}</span>;
      }

      return strongOpen ? <strong key={index}>{element}</strong> : element;
    });
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-gray-100 max-w-3xl mx-auto"
    >
      <motion.h3
        className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6 leading-relaxed"
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
          className="mb-4 sm:mb-6 overflow-hidden rounded-xl border-2 border-gray-100 shadow-sm"
        >
          <img
            src={descriptionImg}
            alt="description illustration"
            className="w-full h-auto max-h-[400px] object-contain mx-auto"
          />
        </motion.div>
      )}

      <div className="space-y-3 sm:space-y-4">
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
              className={`w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${buttonStyle}`}
              disabled={isCorrect !== null && isCorrect !== undefined}
              whileHover={{ scale: isCorrect === null ? 1.02 : 1 }}
              whileTap={{ scale: isCorrect === null ? 0.98 : 1 }}
            >
              <div className="flex items-start">
                <span
                  className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 text-sm sm:text-base rounded-full flex items-center justify-center mr-3 font-bold ${
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
                <div className="text-gray-700 text-sm sm:text-base">
                  {renderAnswerContent(answer)}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-6 text-right">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base"
        >
          {showSolution ? 'Ukryj rozwiązanie' : 'Pokaż rozwiązanie'}
        </button>
      </div>

      {showSolution && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm sm:text-base"
        >
          {renderText(solution)}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Question3;
