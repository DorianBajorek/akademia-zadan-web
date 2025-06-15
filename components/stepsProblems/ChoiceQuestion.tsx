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
  const [showSolutionBeforeAnswer, setShowSolutionBeforeAnswer] = useState<boolean>(false);

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
      // Po poprawnej odpowiedzi ukrywamy możliwość podglądu (opcjonalnie)
      setShowSolutionBeforeAnswer(false);
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Ukryj tablice
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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

        <div className="space-y-3">
          {choices.map((choice) => (
            <button
              key={choice.value}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 font-medium flex items-center
                ${
                  selected === choice.value
                    ? isCorrect
                      ? "border-emerald-500 bg-emerald-50 shadow-md"
                      : "border-rose-500 bg-rose-50 shadow-md"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                }
                ${selected && selected !== choice.value ? "opacity-80" : ""}
                ${isCorrect !== null && isCorrect && selected === choice.value ? "animate-pulse-short" : ""}
              `}
              onClick={() => handleSelect(choice.value)}
              disabled={isCorrect !== null && isCorrect}
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center
                ${
                  selected === choice.value
                    ? isCorrect
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "bg-rose-500 border-rose-500 text-white"
                    : "bg-white border-gray-300"
                }`}
              >
                {selected === choice.value && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
              <InlineMath math={choice.label} />
            </button>
          ))}
        </div>

        {/* Przycisk podejrzenia rozwiązania pod odpowiedziami */}
        {explanation && (
          <button
            className="mt-4 self-start flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm font-medium"
            onClick={() => setShowSolutionBeforeAnswer(!showSolutionBeforeAnswer)}
            disabled={isCorrect === true}
          >
            {showSolutionBeforeAnswer ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Ukryj rozwiązanie
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                Podejrzyj rozwiązanie
              </>
            )}
          </button>
        )}

        {(isCorrect && showExplanation) || showSolutionBeforeAnswer ? (
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 animate-fadeIn">
            <h4 className="font-bold text-gray-700 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Wyjaśnienie:
            </h4>
            <p className="text-gray-700 mt-2 leading-relaxed">{renderTextWithMath(explanation)}</p>
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
        ) : null}
      </div>
    </div>
  );
};

export default ChoiceQuestion;
