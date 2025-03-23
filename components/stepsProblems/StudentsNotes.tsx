"use client";

import { InlineMath } from "react-katex";
import Image from "next/image";

interface StudentNotesProps {
  equation: string;
  steps: { step: string; explanation?: string; image?: string }[];
  solutions: string[];
}

const renderExplanation = (text: string) => {
  const parts = text.split(/(\$\$.*?\$\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      return <InlineMath key={index} math={part.slice(2, -2)} />;
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

const StudentNotes = ({ equation, steps, solutions }: StudentNotesProps) => {
  return (
    <div className="mt-8 p-6 rounded-lg shadow-md border border-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('/kratka.png')" }}>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Notatki maturzysty</h3>
      <div className="text-lg text-gray-700 space-y-4">
        <InlineMath math={equation} />
        <div>
          {steps.map((step, index) => (
            <div key={index} className="mb-4">
              <p>
                <InlineMath math={step.step} />
              </p>
              {step.explanation && (
                <p className="text-gray-600">{renderExplanation(step.explanation)}</p>
              )}
              {step.image && (
                <div className="mt-4">
                  <Image
                    src={step.image}
                    alt={`Step ${index + 1} image`}
                    width={300}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-gray-600">
          <p>Rozwiązania:</p>
          <p>
            {solutions.map((solution, index) => (
              <span key={index}>
                <InlineMath math={solution} />
                {index < solutions.length - 1 && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentNotes;