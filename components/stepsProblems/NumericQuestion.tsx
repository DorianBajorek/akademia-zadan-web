"use client";

import "katex/dist/katex.min.css";
import { useState } from "react";
import { InlineMath } from "react-katex";

interface NumericQuestionProps {
  question: string;
  correctAnswer: string;
  explanation: string;
  onComplete?: () => void;
  img?: string;
  explanationImage?: string;
}

const NumericQuestion: React.FC<NumericQuestionProps> = ({
  question,
  correctAnswer,
  explanation,
  onComplete,
  img,
  explanationImage,
}) => {
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);

  const handleCheckAnswer = () => {
    if (userAnswer.trim() === correctAnswer) {
      setIsCorrect(true);
      setShowExplanation(true);
      if (onComplete) {
        onComplete();
      }
    } else {
      setIsCorrect(false);
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
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mt-6">
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          {renderTextWithMath(question)}
        </h3>

        {img && (
          <button
            className="mb-4 self-start flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            onClick={() => setShowImage(!showImage)}
          >
            Sprawdź tablice
          </button>
        )}

        {img && showImage && (
          <div className="mt-6">
            <img
              src={img}
              alt="Tablice maturalne"
              className="rounded-lg shadow-md mb-4"
            />
          </div>
        )}

        <div className="flex items-center gap-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-blue-400 focus:outline-none"
            placeholder="Wpisz odpowiedź"
            disabled={isCorrect !== null && isCorrect}
          />
          <button
            onClick={handleCheckAnswer}
            disabled={isCorrect !== null && isCorrect}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sprawdź
          </button>
        </div>

        {isCorrect !== null && (
          <p
            className={`mt-4 p-3 rounded-lg ${
              isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isCorrect ? "Dobrze!" : "Niepoprawna odpowiedź."}
          </p>
        )}

        {isCorrect && showExplanation && (
          <div className="mt-4 p-4 border-t border-gray-200">
            <h4 className="font-bold text-gray-700">Wyjaśnienie:</h4>
            <p className="text-gray-700 mt-2 leading-relaxed">
              {renderTextWithMath(explanation)}
            </p>

            {explanationImage && (
              <div className="mt-4 flex justify-center">
                <img
                  src={explanationImage}
                  alt="Tablice maturalne"
                  width={300}
                  height={150}
                  className="rounded-lg shadow-md mb-4 mx-auto"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NumericQuestion;