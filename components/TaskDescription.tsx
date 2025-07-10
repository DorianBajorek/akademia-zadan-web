'use client';

import { InlineMath } from 'react-katex';
import { motion } from 'framer-motion';

interface TaskDescriptionProps {
  title?: string;
  description?: string;
  equation?: string;
  imageUrl?: string; // <--- DODANE
}

const renderTextWithMath = (text?: string) => {
  if (!text) return null;
  return text.split(/(\$\$.*?\$\$|<br\s*\/?>|\n)/g).map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <InlineMath key={index} math={part.replace(/\$\$/g, '')} />;
    } else if (part.match(/<br\s*\/?>|\n/)) {
      return <br key={index} />;
    }
    return <span key={index}>{part}</span>;
  });
};

const TaskDescription = ({ title, description, equation, imageUrl }: TaskDescriptionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10 p-8 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/80 border-2 border-blue-100 relative overflow-hidden shadow-lg"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-indigo-200/20 rounded-full blur-xl"></div>

      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          borderColor: ['#93c5fd', '#c7d2fe', '#93c5fd'],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-3 rounded-xl shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </motion.div>

          {title && (
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text"
            >
              {title}
            </motion.h2>
          )}
        </div>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            {renderTextWithMath(description)}
          </motion.p>
        )}

        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="mb-6"
          >
            <img
              src={imageUrl}
              alt="Task related"
              className="w-full max-w-md mx-auto rounded-xl shadow-md border border-blue-100"
            />
          </motion.div>
        )}

        {equation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="p-5 bg-white rounded-xl border-2 border-blue-100 shadow-inner"
          >
            <div className="relative z-10">
              <p className="text-3xl font-bold text-center text-gray-800">
                <InlineMath math={equation} />
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TaskDescription;
