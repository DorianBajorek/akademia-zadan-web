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
    <div className="mt-8 p-8 rounded-2xl shadow-xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/kratka.png')] opacity-10 -z-10"></div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-2xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-500/10 rounded-tr-2xl -z-10"></div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Notatki maturzysty
      </h3>
      
      <div className="space-y-6">
        <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
          <InlineMath math={equation} />
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 group-hover:border-blue-300 transition-colors duration-300">
                    <p className="text-lg font-medium">
                      <InlineMath math={step.step} />
                    </p>
                    
                    {step.explanation && (
                      <div className="mt-3 p-3 bg-white/80 rounded-lg border-l-4 border-blue-400">
                        <p className="text-gray-600">
                          {renderExplanation(step.explanation)}
                        </p>
                      </div>
                    )}
                    
                    {step.image && (
                      <div className="mt-4 overflow-hidden rounded-lg border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <Image
                          src={step.image}
                          alt={`Step ${index + 1} image`}
                          width={600}
                          height={300}
                          className="w-full h-auto object-cover max-w-[400px] mx-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Solutions section */}
        <div className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-200">
          <h4 className="font-bold text-emerald-800 flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Rozwiązania:
          </h4>
          <div className="flex flex-wrap gap-2">
            {solutions.map((solution, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-white rounded-full border border-emerald-300 text-emerald-700 font-medium flex items-center"
              >
                <InlineMath math={solution} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentNotes;