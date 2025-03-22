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
}

const ChoiceQuestion: React.FC<ChoiceQuestionProps> = ({
  question,
  choices,
  correctAnswer,
  explanation,
  onComplete,
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

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
    return text.split(/(\$\$.*?\$\$)/g).map((part, index) =>
      part.startsWith("$$") && part.endsWith("$$") ? (
        <InlineMath key={index} math={part.replace(/\$\$/g, "")} />
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">{renderTextWithMath(question)}</h3>
      <div className="space-y-3">
        {choices.map((choice) => (
          <button
            key={choice.value}
            className={`w-full p-3 rounded-lg border-2 text-gray-800 font-medium transition ${
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
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const handleStageComplete = (stage: number) => {
    setCompletedStages((prev) => [...prev, stage]);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-5">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-md border border-gray-300 mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Zadanie dnia</h2>
        <p className="text-lg text-gray-800">Rozwiąż nierówność kwadratową:</p>
        <p className="text-2xl font-bold text-gray-900 text-center mt-4">
          <InlineMath math="x^2 - 4x + 4 \leq 0" />
        </p>
        {(completedStages.includes(1) || completedStages.length === 0) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wybierz poprawne wartości współczynników <InlineMath math="a,b,c" /> dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Które wartości są poprawne dla $$ ( a, b, c ) $$ w tej nierówności?"
              choices={[
                { label: "a = 1, b = -4, c = 4", value: "a" },
                { label: "a = 2, b = -4, c = 4", value: "b" },
                { label: "a = 1, b = 4, c = -4", value: "c" },
                { label: "a = -1, b = 4, c = -4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Współczynniki dla tej nierówności to $$a = 1, b = -4, c = 4$$. 
                Dlaczego? Równanie kwadratowe w standardowej postaci ma postać:
                $$ax^2 + bx + c = 0$$.
                W przypadku nierówności $$x^2 - 4x + 4 \leq 0$$, możemy bezpośrednio odczytać współczynniki:
                - $$a$$ to współczynnik przy $$x^2$$, czyli $$1$$,
                - $$b$$ to współczynnik przy $$x$$, czyli $$-4$$,
                - $$c$$ to wyraz wolny, czyli $$4$$.
                Wartości te są kluczowe do rozwiązania nierówności, ponieważ pozwalają obliczyć deltę oraz określić kształt paraboli."
              onComplete={() => handleStageComplete(1)}
            />
          </>
        )}
        {completedStages.includes(1) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz deltę (Δ) dla tej nierówności.
            </p>
            <ChoiceQuestion
              question="Która wartość jest poprawną deltą (Δ) dla tej nierówności?"
              choices={[
                { label: "Δ = 0", value: "a" },
                { label: "Δ = 16", value: "b" },
                { label: "Δ = -8", value: "c" },
                { label: "Δ = 4", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Delta (Δ) jest obliczana ze wzoru:
                $$\Delta = b^2 - 4ac$$.
                Podstawiając wartości współczynników:
                $$\Delta = (-4)^2 - 4 \cdot 1 \cdot 4 = 16 - 16 = 0$$.
                Poprawna wartość delty to $$\Delta = 0$$."
              onComplete={() => handleStageComplete(2)}
            />
          </>
        )}

        {completedStages.includes(2) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Oblicz pierwiastek równania kwadratowego <InlineMath math="x_0" />.
            </p>
            <ChoiceQuestion
              question="Która wartość jest poprawna dla pierwiastka $$x_0$$?"
              choices={[
                { label: "x₀ = 2", value: "a" },
                { label: "x₀ = -2", value: "b" },
                { label: "x₀ = 4", value: "c" },
                { label: "x₀ = 0", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Ponieważ delta wynosi 0, równanie ma dokładnie jeden pierwiastek podwójny:
                $$x_0 = \frac{-b}{2a}$$.
                Podstawiając wartości:
                $$x_0 = \frac{4}{2} = 2$$.
                Poprawna wartość pierwiastka to $$x_0 = 2$$."
              onComplete={() => handleStageComplete(3)}
            />
          </>
        )}

        {completedStages.includes(3) && (
          <>
            <p className="text-lg text-gray-700 mt-6">
              Wskaż prawidłowy przedział rozwiązania nierówności.
            </p>
            <ChoiceQuestion
              question="Który przedział jest rozwiązaniem nierówności $$x^2 - 4x + 4 \leq 0$$?"
              choices={[
                { label: "x = 2", value: "a" },
                { label: "x ∈ (-∞, 2] ∪ [2, ∞)", value: "b" },
                { label: "x ∈ (2, ∞)", value: "c" },
                { label: "x ∈ (-∞, 2)", value: "d" }
              ]}
              correctAnswer="a"
              explanation="Rozwiązaniem nierówności $$x^2 - 4x + 4 \leq 0$$ jest dokładnie jedna wartość:
                $$x = 2$$.
                Wynika to z faktu, że parabola skierowana jest ramionami do góry (a > 0), a nierówność jest typu '≤', więc rozwiązanie obejmuje tylko punkt, w którym parabola dotyka osi x."
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;