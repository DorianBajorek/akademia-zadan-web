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
    <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-400">
      <div className="text-gray-800 text-xl">{renderText(content)}</div>
      
      {image && (
        <div className="mt-4 flex justify-center">
          <img
            src={image}
            alt="Ilustracja do zadania"
            className="max-w-full h-auto"
            style={{ maxHeight: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default TaskContent;