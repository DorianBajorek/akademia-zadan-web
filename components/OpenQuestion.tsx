'use client';
import { InlineMath } from 'react-katex';
import { motion } from 'framer-motion';
import 'katex/dist/katex.min.css';
import { useState } from 'react';

interface OpenQuestionProps {
  description: string;
  descriptionImg?: string;
  solution: string;
}

const OpenQuestion: React.FC<OpenQuestionProps> = ({ description, descriptionImg, solution }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border-2 border-gray-100 max-w-3xl mx-auto"
    >
      <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-4 sm:mb-6 leading-relaxed">
        {renderText(description)}
      </h3>

      {descriptionImg && (
        <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl border-2 border-gray-100 shadow-sm">
          <img
            src={descriptionImg}
            alt="description illustration"
            className="w-full h-auto max-h-[400px] object-contain mx-auto"
          />
        </div>
      )}

      {solution.trim() && (
        <div className="text-right">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base"
          >
            {showSolution ? 'Ukryj rozwiązanie' : 'Pokaż rozwiązanie'}
          </button>
        </div>
      )}

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

export default OpenQuestion;
