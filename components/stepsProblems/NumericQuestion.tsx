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
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 mt-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-relaxed bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
          {renderTextWithMath(question)}
        </h3>

        {img && (
          <button
            className="mb-4 self-start flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm font-medium"
            onClick={() => setShowImage(!showImage)}
          >
            {showImage ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Ukryj tablice
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Sprawdź tablice
              </>
            )}
          </button>
        )}

        {img && showImage && (
          <div className="mt-4 animate-fadeIn">
            <img
              src={img}
              alt="Tablice maturalne"
              className="rounded-xl shadow-lg mb-4 max-w-full h-auto border-2 border-gray-100"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-3">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className={`w-full p-4 rounded-xl border-2 focus:outline-none focus:ring-2 transition-all duration-300 ${
              isCorrect === null
                ? "border-gray-200 focus:border-blue-400 focus:ring-blue-100 hover:border-blue-300"
                : isCorrect
                ? "border-emerald-500 bg-emerald-50 focus:ring-emerald-100"
                : "border-rose-500 bg-rose-50 focus:ring-rose-100"
            } ${isCorrect && "animate-pulse-short"}`}
            placeholder="Wpisz odpowiedź..."
            disabled={isCorrect !== null && isCorrect}
          />
          <button
            onClick={handleCheckAnswer}
            disabled={(isCorrect !== null && isCorrect) || !userAnswer.trim()}
            className={`w-full sm:w-auto p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
              isCorrect === null
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                : isCorrect
                ? "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
                : "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
            } ${!userAnswer.trim() && "opacity-50 cursor-not-allowed"}`}
          >
            {isCorrect === null ? (
              <span className="font-medium text-white">Sprawdź</span>
            ) : isCorrect ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>

        {isCorrect !== null && (
          <div className={`mt-4 p-4 rounded-xl shadow-inner transition-all duration-300 ${
            isCorrect 
              ? "bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-100" 
              : "bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100"
          }`}>
            <div className={`flex items-center font-semibold ${
              isCorrect ? "text-emerald-700" : "text-rose-700"
            }`}>
              {isCorrect ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Świetnie! Poprawna odpowiedź
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Niestety to nie ta odpowiedź
                </>
              )}
            </div>
          </div>
        )}

        {isCorrect && showExplanation && (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 animate-fadeIn">
            <h4 className="font-bold text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Wyjaśnienie:
            </h4>
            <p className="text-gray-700 mt-2 leading-relaxed">
              {renderTextWithMath(explanation)}
            </p>
            {explanationImage && (
              <div className="mt-4 flex justify-center">
                <img
                  src={explanationImage}
                  alt="Tablice maturalne"
                  className="rounded-xl shadow-md border-2 border-gray-100 max-w-full h-auto"
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