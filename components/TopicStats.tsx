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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{topicTitle}</h1>
      {description && (
        <p className="text-lg text-gray-600 mb-6">{description}</p>
      )}
      
      <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
        <div>
          <h3 className="text-sm font-semibold text-blue-800">Stan realizacji</h3>
          <p className="text-2xl font-bold text-blue-600">
            {completedCount}/{totalCount} zadań
          </p>
        </div>
        <div className="flex space-x-2">
          <CheckCircleIcon className="w-6 h-6 text-green-500" />
          <span className="text-gray-700">- rozwiązane</span>
          <XCircleIcon className="w-6 h-6 text-gray-400" />
          <span className="text-gray-700">- do wykonania</span>
        </div>
      </div>
    </div>
  );
};

export default TopicStats;