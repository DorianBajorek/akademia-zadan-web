"use client";
import { useState } from "react";
import { InlineMath } from "react-katex";
import { motion } from "framer-motion";
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
}

const AIExplanation: React.FC<AIExplanationProps> = ({
  description,
  choiceA,
  choiceB,
  choiceC,
  choiceD,
  correctAnswer,
}) => {
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleAskAI = async () => {
    setIsLoading(true);
    setAiError(null);
    setAiResponse(null);

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

      const data = await solveWithAI(prompt);
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
        transition={{ duration: 0.3 }}
        className="mt-6 p-4 bg-blue-50 rounded-xl border-2 border-blue-200"
      >
        <h4 className="font-bold text-blue-800 mb-2">Wyjaśnienie AI:</h4>
        <div className="text-gray-800 space-y-4 leading-relaxed">
          {paragraphs.map((paragraph, index) => {
            const parts = paragraph.split(/(\$.*?\$)/g);

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="whitespace-pre-line"
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
                        <strong key={`${partIndex}-${bpIndex}`} className="font-semibold text-black">
                          {bp.slice(2, -2)}
                        </strong>
                      ) : (
                        <span key={`${partIndex}-${bpIndex}`}>{bp}</span>
                      )
                    );
                  }
                })}
              </motion.p>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleAskAI}
        disabled={isLoading}
        className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 ${
          isLoading
            ? 'bg-gray-200 text-gray-500'
            : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Przetwarzanie...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            Zapytaj AI o wyjaśnienie
          </>
        )}
      </button>

      {aiError && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {aiError}
        </div>
      )}

      {renderAIResponse()}
    </div>
  );
};

export default AIExplanation;
