'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface StepDescriptionProps {
  children: React.ReactNode;
  stepNumber: number;
  status?: 'default' | 'active' | 'completed';
}

const StepDescription = ({ children, stepNumber, status = 'default' }: StepDescriptionProps) => {
  const getBackground = () => {
    switch (status) {
      case 'active':
        return 'bg-gradient-to-br from-blue-500 to-indigo-600';
      case 'completed':
        return 'bg-gradient-to-br from-green-500 to-emerald-600';
      default:
        return 'bg-gradient-to-br from-gray-400 to-gray-500';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 mb-6 group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={`flex-shrink-0 w-10 h-10 rounded-full ${getBackground()} 
                   text-white flex items-center justify-center font-bold 
                   shadow-md relative overflow-hidden`}
      >
        {status === 'completed' ? (
          <FaCheckCircle className="text-lg" />
        ) : (
          <span className="text-lg">{stepNumber}</span>
        )}
      </motion.div>

      <motion.p
        className={`text-xl font-medium ${
          status === 'active'
            ? 'text-blue-600'
            : status === 'completed'
              ? 'text-green-600'
              : 'text-gray-600'
        } group-hover:text-indigo-700 transition-colors`}
      >
        {children}
      </motion.p>

      {status === 'active' && (
        <motion.div
          className="h-1 flex-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full ml-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
            animate={{ width: ['0%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default StepDescription;
