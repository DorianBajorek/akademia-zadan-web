import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import React from 'react';

const Solution151 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja kwadratowa jest określona wzorem <InlineMath math="f(x) = -2(x + 3)(x - 5)" />.
        Liczby <InlineMath math="x_1, x_2" /> są różnymi miejscami zerowymi funkcji{' '}
        <InlineMath math="f" />. Zatem:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="x_1 + x_2 = -8" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="x_1 + x_2 = -2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="x_1 + x_2 = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="x_1 + x_2 = 8" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Znalezienie miejsc zerowych</h2>
      <p className="mb-2">
        Miejsca zerowe funkcji kwadratowej <InlineMath math="f(x) = -2(x + 3)(x - 5)" /> znajdujemy
        rozwiązując równanie:
      </p>
      <BlockMath math="f(x) = 0 \Rightarrow -2(x + 3)(x - 5) = 0" />
      <p className="mb-2">Równanie to jest spełnione, gdy:</p>
      <BlockMath math="x + 3 = 0 \quad \text{lub} \quad x - 5 = 0" />
      <p className="mb-2">Rozwiązując te równania, otrzymujemy miejsca zerowe:</p>
      <BlockMath math="x_1 = -3 \quad \text{oraz} \quad x_2 = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie sumy miejsc zerowych</h2>
      <p className="mb-2">Suma miejsc zerowych wynosi:</p>
      <BlockMath math="x_1 + x_2 = -3 + 5 = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Suma miejsc zerowych <InlineMath math="x_1 + x_2" /> jest równa <InlineMath math="2" />{' '}
        (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution151;
