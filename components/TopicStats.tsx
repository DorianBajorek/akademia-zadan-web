"use client";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

interface TopicStatsProps {
  completedCount: number;
  totalCount: number;
  topicTitle: string;
  description?: string;
}

const TopicStats = ({ 
  completedCount, 
  totalCount, 
  topicTitle,
  description 
}: TopicStatsProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{topicTitle}</h1>
      {description && (
        <p className="text-base sm:text-lg text-gray-600 mb-6">{description}</p>
      )}
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between bg-blue-50 p-4 rounded-lg space-y-4 md:space-y-0">
        <div>
          <h3 className="text-sm font-semibold text-blue-800">Stan realizacji</h3>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            {completedCount}/{totalCount} zadań
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
            <span>rozwiązane</span>
          </div>
          <div className="flex items-center space-x-1 mt-2 sm:mt-0">
            <XCircleIcon className="w-5 h-5 text-gray-400" />
            <span>do wykonania</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicStats;
