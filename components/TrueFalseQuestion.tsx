'use client';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface TrueFalseQuestionProps {
  question: string;
  questionImg?: string;
  statements: {
    text: string;
    isTrue: boolean;
  }[];
  selectedAnswers: (boolean | null)[];
  onAnswerSelect: (index: number, isTrue: boolean) => void;
  isSubmitted?: boolean;
  solution?: string;
}

const TrueFalseQuestion: React.FC<TrueFalseQuestionProps> = ({
  question,
  questionImg,
  statements,
  selectedAnswers,
  onAnswerSelect,
  isSubmitted = false,
  solution = '',
}) => {
  const [showSolution, setShowSolution] = useState(false);

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

  const getButtonStyle = (index: number, isTrueButton: boolean) => {
    const isSelected =
      selectedAnswers[index] !== null &&
      ((isTrueButton && selectedAnswers[index] === true) ||
        (!isTrueButton && selectedAnswers[index] === false));

    if (!isSelected) return 'border-gray-200 hover:border-blue-400';

    if (!isSubmitted) return 'border-blue-500 bg-blue-50';

    const isCorrect = selectedAnswers[index] === statements[index].isTrue;
    return isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-200"
    >
      <h3 className="text-base sm:text-lg md:text-xl text-gray-800 mb-4">{renderText(question)}</h3>

      {questionImg && (
        <img
          src={questionImg}
          alt="question illustration"
          className="w-full max-w-[500px] h-auto mb-4 rounded mx-auto object-contain"
        />
      )}

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

      {solution.trim() && (
        <>
          <div className="text-right mt-4">
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
        </>
      )}
    </motion.div>
  );
};

export default TrueFalseQuestion;
