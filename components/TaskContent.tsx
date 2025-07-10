import { InlineMath } from 'react-katex';
import { useState } from 'react';
import { solveProblem } from '@/service';
import { useAuth } from '@/app/UserData';

interface TaskContentProps {
  content: string;
  image?: string;
  youtubeId?: string;
  taskId?: string;
}

const TaskContent: React.FC<TaskContentProps> = ({ content, image, youtubeId, taskId }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { token } = useAuth();

  const renderText = (text: string) => {
    const parts = text.split(/\$(.*?)\$/g);
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <InlineMath key={index} math={`${part}`} />
      )
    );
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const handleCompleteTask = async () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    console.log(newState ? 'Zadanie oznaczone jako rozwiązane' : 'Anulowano rozwiązanie zadania');

    if (newState && taskId && token) {
      try {
        await solveProblem(taskId, token);
        console.log('Problem marked as completed (manual)');
      } catch (err) {
        console.error('Problem completion failed', err);
      }
    }
  };

  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-400">
      <div className="text-gray-800 text-lg md:text-xl">{renderText(content)}</div>

      {image && (
        <div className="mt-3 md:mt-4 flex justify-center">
          <img
            src={image}
            alt="Ilustracja do zadania"
            className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
            style={{ maxWidth: '40%', height: 'auto' }}
          />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        {/* Przycisk rozwiązania zadania */}
        <button
          onClick={handleCompleteTask}
          className={`flex items-center gap-2 font-medium py-2 px-4 rounded-lg transition-all 
            ${
              isCompleted
                ? 'bg-green-100 hover:bg-green-200 text-green-800 border border-green-300'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
            }`}
        >
          {isCompleted ? (
            <>
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Rozwiązane</span>
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Oznacz jako rozwiązane</span>
            </>
          )}
        </button>

        {/* Przycisk rozwiązania wideo */}
        {youtubeId && (
          <button
            onClick={toggleSolution}
            className={`flex items-center gap-2 font-medium py-2 px-4 rounded-lg transition-all
              ${
                showSolution
                  ? 'bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-300'
                  : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200'
              }`}
          >
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            <span>{showSolution ? 'Ukryj rozwiązanie' : 'Pokaż rozwiązanie'}</span>
          </button>
        )}
      </div>

      {youtubeId && showSolution && (
        <div className="mt-4 w-full">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="Rozwiązanie zadania"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskContent;
