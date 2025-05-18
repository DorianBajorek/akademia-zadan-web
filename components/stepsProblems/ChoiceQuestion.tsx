"use client";

import "katex/dist/katex.min.css";
import { useState } from "react";
import { InlineMath } from "react-katex";

interface ChoiceQuestionProps {
  question: string;
  choices: { label: string; value: string }[];
  correctAnswer: string;
  explanation: string;
  onComplete?: () => void;
  img?: string;
  explanationImage?: string;
}

const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({
  question,
  choices,
  correctAnswer,
  explanation,
  onComplete,
  img,
  explanationImage,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const handleSelect = (value: string) => {
    if (isCorrect !== null && isCorrect) return;

    setSelected(value);
    const correct = value === correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setShowExplanation(true);
      if (onComplete) {
        onComplete();
      }
    }
  };

  const renderTextWithMath = (text: string) => {
    return text.split(/(\$\$.*?\$\$|<br\s*\/?>|\n)/g).map((part, index) => {
      if (part.startsWith("$$") && part.endsWith("$$")) {
        return <InlineMath key={index} math={part.replace(/\$\$/g, "")} />;
      } else if (part.match(/<br\s*\/?>|\n/)) {
        return <br key={index} />;
      }
      return part;
    });
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-300 mt-4 sm:mt-6">
      <div className="flex flex-col">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
          {renderTextWithMath(question)}
        </h3>

        {img && (
          <button
            className="mb-3 sm:mb-4 self-start flex items-center justify-center gap-2 bg-blue-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
            onClick={() => setShowImage(!showImage)}
          >
            Sprawdź tablice
          </button>
        )}

        {img && showImage && (
          <div className="mt-4 sm:mt-6">
            <img
              src={img}
              alt="Tablice maturalne"
              className="rounded-lg shadow-md mb-3 sm:mb-4 max-w-full h-auto"
            />
          </div>
        )}

        <div className="space-y-2 sm:space-y-3">
          {choices.map((choice) => (
            <button
              key={choice.value}
              className={`w-full p-2 sm:p-3 rounded-lg border-2 text-gray-800 font-medium transition ${
                selected === choice.value
                  ? isCorrect
                    ? "border-green-500 bg-green-100"
                    : "border-red-500 bg-red-100"
                  : "border-gray-300 hover:border-blue-400"
              }`}
              onClick={() => handleSelect(choice.value)}
              disabled={isCorrect !== null && isCorrect}
            >
              <InlineMath math={choice.label} />
            </button>
          ))}
        </div>

        {isCorrect !== null && (
          <p
            className={`mt-3 sm:mt-4 p-2 sm:p-3 rounded-lg ${
              isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isCorrect ? "Dobrze!" : "Niepoprawna odpowiedź."}
          </p>
        )}

        {isCorrect && showExplanation && (
          <div className="mt-3 sm:mt-4 p-3 sm:p-4 border-t border-gray-200">
            <h4 className="font-bold text-gray-700">Wyjaśnienie:</h4>
            <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
              {renderTextWithMath(explanation)}
            </p>

            {explanationImage && (
              <div className="mt-3 sm:mt-4 flex justify-center">
                <img
                  src={explanationImage}
                  alt="Tablice maturalne"
                  width={400}
                  height={200}
                  className="rounded-lg shadow-md mb-3 sm:mb-4 mx-auto max-w-full h-auto"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceQuestion;