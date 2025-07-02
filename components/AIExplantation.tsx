"use client";
import { useState } from "react";
import { InlineMath } from "react-katex";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { solveWithAI } from "@/service";
import 'katex/dist/katex.min.css';

interface AIExplanationProps {
  description: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  choiceD: string;
  correctAnswer: string;
  taskId?: number;
}

const AIExplanation: React.FC<AIExplanationProps> = ({
  description,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  correctAnswer,
  taskId
}) => {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleAskAI = async () => {
    setIsLoading(true);
    setAiError(null);
    setAiResponse(null);
    setExpanded(true);

    try {
      const prompt = `Rozwiąż dokładnie następujące zadanie matematyczne krok po kroku:

Zadanie: ${description}

Opcje odpowiedzi:
A) ${choiceA}
B) ${choiceB}
C) ${choiceC}
D) ${choiceD}

Podaj szczegółowe wyjaśnienie według poniższych kroków:

1. Przeanalizuj dane i założenia zadania.
2. Opisz kolejne kroki rozwiązania.
3. Wyjaśnij, dlaczego poprawna odpowiedź to **${correctAnswer.toUpperCase()}**.
4. Podsumuj najważniejsze wnioski.

Rozwiązuj zadania w prosty sposób. Nie korzystaj z zaawansowanych technik akademickich. Wszystkie zadanie powinny być na poziomie szkoły średniej. Niektóre zadania można łatwo rozwiazać analizując warianty a,b,c,d i wybierając poprawny.

### Ważne zasady formatowania:

- Równania matematyczne zapisuj **wyłącznie w formacie \$...\$**
- Nie używaj formatu \\\[ \\\], \\\( \\\), \$\$
- Równania powinny być **w linii z tekstem** (nie jako osobne bloki)
- Zachowaj **przejrzystą strukturę tekstu z nowymi liniami i akapitami**
- Nie dodawaj numeracji równań ani nagłówków w LaTeX

Wygeneruj czysty, zrozumiały i dobrze sformatowany tekst z wyjaśnieniem.`;

      const data = await solveWithAI(prompt, taskId);
      setAiResponse(data.response);
    } catch (error) {
      let errorMessage = "Wystąpił błąd podczas korzystania z AI. Spróbuj ponownie.";
      if (axios.isAxiosError(error)) {
        errorMessage = error.response?.data?.error || errorMessage;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setAiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const renderAIResponse = () => {
    if (!aiResponse) return null;

    const cleanText = aiResponse
      .replace(/\\\[(.*?)\\\]|\$\$(.*?)\$\$/gs, (_, math1, math2) => `$${math1 || math2}$`)
      .replace(/\\\((.*?)\\\)/g, '$$1$')
      .replace(/\s+\$/g, '$')
      .replace(/\$\s+/g, '$')
      .trim();

    const paragraphs = cleanText.split(/\n{2,}/g);

    return (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-sm"
      >
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-lg font-bold text-blue-800">Wyjaśnienie AI</h4>
            <p className="text-sm text-blue-600">Krok po kroku rozwiązanie zadania</p>
          </div>
        </div>
        
        <div className="text-gray-800 space-y-6 leading-relaxed">
          {paragraphs.map((paragraph, index) => {
            const parts = paragraph.split(/(\$.*?\$)/g);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="border-l-4 border-blue-100 pl-4 py-1  rounded-r-lg"
              >
                {parts.map((part, partIndex) => {
                  if (part.startsWith('$') && part.endsWith('$')) {
                    return (
                      <span key={partIndex} className="mx-1 inline-block">
                        <InlineMath math={part.slice(1, -1)} />
                      </span>
                    );
                  } else {
                    const boldParts = part.split(/(\*\*.*?\*\*)/g);
                    return boldParts.map((bp, bpIndex) =>
                      bp.startsWith('**') && bp.endsWith('**') ? (
                        <strong key={`${partIndex}-${bpIndex}`} className="font-semibold text-blue-800">
                          {bp.slice(2, -2)}
                        </strong>
                      ) : (
                        <span key={`${partIndex}-${bpIndex}`}>{bp}</span>
                      )
                    );
                  }
                })}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="mt-6">
      <motion.button
        onClick={handleAskAI}
        disabled={isLoading}
        whileHover={!isLoading ? { scale: 1.02 } : {}}
        whileTap={!isLoading ? { scale: 0.98 } : {}}
        className={`w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center space-x-3 shadow-sm transition-all ${
          isLoading
            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-md'
        }`}
      >
        {isLoading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="flex-shrink-0"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </motion.div>
            <span>Generowanie wyjaśnienia...</span>
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>Poproś AI o szczegółowe wyjaśnienie</span>
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {aiError && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="font-medium">Błąd</p>
              <p className="text-sm">{aiError}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {expanded && (aiResponse || isLoading) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            {isLoading && !aiResponse && (
              <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <div className="flex items-center space-x-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="h-3 w-3 bg-blue-500 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                    className="h-3 w-3 bg-blue-500 rounded-full"
                  />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6
                    }}
                    className="h-3 w-3 bg-blue-500 rounded-full"
                  />
                </div>
                <p className="mt-4 text-blue-700 font-medium">AI analizuje zadanie...</p>
                <p className="text-sm text-blue-500">Proszę czekać, generujemy szczegółowe wyjaśnienie</p>
              </div>
            )}
            {renderAIResponse()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIExplanation;