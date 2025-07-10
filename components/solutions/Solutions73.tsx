import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Do wykresu funkcji <InlineMath math="f" /> określonej dla każdej liczby rzeczywistej{' '}
        <InlineMath math="x" /> wzorem
        <BlockMath math="f(x) = 3^x - 2" /> należy punkt o współrzędnych:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-1, -5)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="(0, -2)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="(0, -1)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="(2, 4)" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Sprawdzenie punktu <InlineMath math=" A (–1, –5)" />
      </h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = -1" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(-1) = 3^{-1} - 2 = \frac{1}{3} - 2 = -\frac{5}{3}" />
      <p className="mb-2">
        Punkt <InlineMath math="(-1, -\frac{5}{3})" /> nie jest równy <InlineMath math="(-1, -5)" />
        , więc punkt A nie należy do wykresu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Sprawdzenie punktu <InlineMath math="B (0, –2)" />
      </h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 0" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(0) = 3^{0} - 2 = 1 - 2 = -1" />
      <p className="mb-2">
        Punkt <InlineMath math="(0, -1)" /> nie jest równy <InlineMath math="(0, -2)" />, więc punkt
        B nie należy do wykresu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Sprawdzenie punktu <InlineMath math="C (0, –1)" />
      </h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 0" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(0) = 3^{0} - 2 = 1 - 2 = -1" />
      <p className="mb-2">
        Punkt <InlineMath math="(0, -1)" /> jest równy <InlineMath math="(0, -1)" />, więc punkt C
        należy do wykresu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 4: Sprawdzenie punktu <InlineMath math="D (2, 4)" />
      </h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 2" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(2) = 3^{2} - 2 = 9 - 2 = 7" />
      <p className="mb-2">
        Punkt <InlineMath math="(2, 7)" /> nie jest równy <InlineMath math="(2, 4)" />, więc punkt D
        nie należy do wykresu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Punkt <InlineMath math="(0, -1)" /> należy do wykresu funkcji (odpowiedź <strong>C</strong>
        ).
      </p>
    </div>
  );
};

export default Solution;
