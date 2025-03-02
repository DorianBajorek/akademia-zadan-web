"use client";
import "katex/dist/katex.min.css";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { InlineMath } from "react-katex";

const questions = [
  {
    id: 1,
    parts: [
      { text: "Oblicz całkę nieoznaczoną z funkcji: ", isMath: false },
      { text: "\\int \\sin(x) \\cdot e^x \\, dx", isMath: true },
      { text: "Podaj wynik wyrażony za pomocą funkcji elementarnych.", isMath: false },
    ],
    answers: [
      "e^x (\\sin(x) - \\cos(x)) + C",
      "e^x (\\cos(x) - \\sin(x)) + C",
      "e^x (\\sin(x) + \\cos(x)) + C",
      "e^x (\\sin(x) \\cdot \\cos(x)) + C"
    ],
    correct: 0,
  },
  {
    id: 2,
    parts: [
      { text: "Rozwiąż całkę: ", isMath: false },
      { text: "\\int_0^{\\pi} x^2 \\cdot \\sin(x) \\, dx", isMath: true },
      { text: "Podaj wynik tej całki określonej.", isMath: false },
    ],
    answers: [
      "2",
      "1",
      "0",
      "4"
    ],
    correct: 2,
  },
  {
    id: 3,
    parts: [
      { text: "Zastosuj wzór całkowania przez części, aby obliczyć następującą całkę:", isMath: false },
      { text: "\\int x \\cdot e^{-x} \\, dx", isMath: true },
      { text: "Całka ta wymaga zastosowania metody całkowania przez części, gdzie wybieramy odpowiednie funkcje do rozbicia.", isMath: false },
    ],
    answers: [
      "-(x + 1) e^{-x} + C",
      "e^{-x} (x + 1) + C",
      "-(x - 1) e^{-x} + C",
      "x e^{-x} + C"
    ],
    correct: 0,
  },
];

const answerLabels = ["A", "B", "C", "D"];

const Barometer: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmit = () => {
    const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined && selectedAnswers[q.id] !== null);
    
    if (allAnswered) {
      alert("Twoje odpowiedzi zostały wysłane!");
    } else {
      alert("Proszę odpowiedzieć na wszystkie pytania.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Barometr Matematyczny
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Odpowiedz na poniższe pytania i sprawdź swoje umiejętności!
        </p>

        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl text-gray-800">
                {q.parts.map((part, index) => (
                  <span key={index}>
                    {part.isMath ? <InlineMath math={part.text} /> : part.text}
                  </span>
                ))}
              </h3>
              <div className="mt-4 space-y-3">
                {q.answers.map((answer, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center p-3 rounded-lg text-gray-800 font-medium border-2 transition 
                      ${selectedAnswers[q.id] === index
                          ? "border-blue-500 bg-blue-100"
                          : "border-gray-300 hover:border-blue-400"}`}
                    onClick={() => handleAnswerSelect(q.id, index)}
                  >
                    <span className="font-bold text-blue-600 mr-3">ODPOWIEDŹ {answerLabels[index]}</span>
                    <InlineMath math={answer} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700"
          >
            Wyślij odpowiedzi
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Barometer;
