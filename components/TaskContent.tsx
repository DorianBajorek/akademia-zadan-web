import { InlineMath } from "react-katex";

interface TaskContentProps {
  content: string;
  image?: string;
}

const TaskContent: React.FC<TaskContentProps> = ({ content, image }) => {
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

  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg border border-gray-400">
      <div className="text-gray-800 text-lg md:text-xl">
        {renderText(content)}
      </div>
      
      {image && (
        <div className="mt-3 md:mt-4 flex justify-center">
          <img
            src={image}
            alt="Ilustracja do zadania"
            className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
            style={{ maxWidth: "40%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskContent;