"use client";
import "katex/dist/katex.min.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Question from "@/components/Question";

const questions = [
  {
    id: 1,
    text: "Oblicz całkę nieoznaczoną z funkcji: $\\int \\sin(x) \\cdot e^x \\, dx$ Podaj wynik wyrażony za pomocą funkcji elementarnych.",
    answers: [
      "$e^x (\\sin(x) - \\cos(x)) + C$",
      "$e^x (\\cos(x) - \\sin(x)) + C$",
      "$e^x (\\sin(x) + \\cos(x)) + C$",
      "$e^x (\\sin(x) \\cdot \\cos(x)) + C$"
    ],
    correct: 0,
  },
  {
    id: 2,
    text: "Rozwiąż całkę: $\\int_0^{\\pi} x^2 \\cdot \\sin(x) \\, dx$ Podaj wynik tej całki określonej.",
    answers: [
      "$2$",
      "$1$",
      "$0$",
      "$4$"
    ],
    correct: 2,
  },
  {
    id: 3,
    text: "Zastosuj wzór całkowania przez części, aby obliczyć następującą całkę: $\\int x \\cdot e^{-x} \\, dx$ Całka ta wymaga zastosowania metody całkowania przez części, gdzie wybieramy odpowiednie funkcje do rozbicia.",
    answers: [
      "$-(x + 1) e^{-x} + C$",
      "$e^{-x} (x + 1) + C$",
      "$-(x - 1) e^{-x} + C$",
      "$x e^{-x} + C$"
    ],
    correct: 0,
  },
  {
    id: 4,
    text: "Wielomian $W(x) = ax^3 + bx^2 + cx + d$ jest iloczynem wielomianów $ F(x) = (2 - 3x)^2 \\quad$ oraz$ \\quad G(x) = 3x - 2. $",
    answers: [
      "$-(x + 1) e^{-x} + C$",
      "$e^{-x} (x + 1) + C$",
      "$-(x - 1) e^{-x} + C$",
      "$x e^{-x} + C$"
    ],
    correct: 0,
  },
];

const BarometerResult: React.FC = () => {
  const userAnswers = [0, 2, 0, 1];

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (question.correct === userAnswers[index] ? 1 : 0);
    }, 0);
  };

  const score = calculateScore();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Nav />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Wyniki Barometru
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Twój wynik: {score} / {questions.length}
        </p>

        <div className="space-y-6">
          {questions.map((q, index) => {
            const isCorrect = q.correct === userAnswers[index];

            return (
              <Question
                key={q.id}
                id={q.id}
                text={q.text}
                answers={q.answers}
                selectedAnswer={userAnswers[index]}
                onAnswerSelect={() => {}}
                isCorrect={isCorrect}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarometerResult;
