"use client";
import { InlineMath } from "react-katex";
import { motion } from "framer-motion";
import 'katex/dist/katex.min.css';
import { useState } from "react";

interface OpenQuestionProps {
  description: string;
  descriptionImg?: string;
  solution: string;
}

const OpenQuestion: React.FC<OpenQuestionProps> = ({
  description,
  descriptionImg,
  solution
}) => {
  const [showSolution, setShowSolution] = useState(false);

const renderText = (text: string) => {
  // Rozbijamy tekst po kolejnych elementach: matematyka ($...$), <br>, <img>, <strong> i </strong>
  const parts = text.split(/(\$.*?\$|<br\s*\/?>|<img[^>]*?>|<\/?strong>)/gi);

  // Flaga do śledzenia, czy aktualnie jesteśmy w <strong>
  let strongOpen = false;

  return parts.map((part, index) => {
    if (part.toLowerCase() === '<strong>') {
      strongOpen = true;
      // Nie renderujemy samego tagu, tylko zmieniamy flagę
      return null;
    }
    if (part.toLowerCase() === '</strong>') {
      strongOpen = false;
      return null;
    }

    let element;

    if (/^\$.*\$$/.test(part)) {
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
            className="max-w-[90%] sm:max-w-[70%] md:max-w-[50%] h-auto mx-auto block"
          />
        );
      }
    } else {
      element = <span key={index}>{part}</span>;
    }

    // Jeśli flaga strongOpen jest true, owijamy w <strong>
    return strongOpen ? <strong key={index}>{element}</strong> : element;
  });
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100"
    >
      <h3 className="text-xl font-medium text-gray-800 mb-6 leading-relaxed">
        {renderText(description)}
      </h3>

      {descriptionImg && (
        <div className="mb-6 overflow-hidden rounded-xl border-2 border-gray-100 shadow-sm">
          <img
            src={descriptionImg}
            alt="description illustration"
            className="w-full h-auto max-h-[400px] object-contain mx-auto"
          />
        </div>
      )}

      <div className="text-right">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
        >
          {showSolution ? "Ukryj rozwiązanie" : "Pokaż rozwiązanie"}
        </button>
      </div>

      {showSolution && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800"
        >
          {renderText(solution)}
        </motion.div>
      )}
    </motion.div>
  );
};

export default OpenQuestion;
