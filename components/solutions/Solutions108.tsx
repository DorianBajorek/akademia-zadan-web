import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkt <InlineMath math="A = \left(\frac{1}{3}, -1\right)" /> należy do wykresu funkcji
        liniowej <InlineMath math="f" /> określonej wzorem <InlineMath math="f(x) = 3x + b" />.
        Wynika stąd, że:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="b = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="b = 1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="b = -1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="b = -2" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Podstawienie punktu do wzoru funkcji
      </h2>
      <p className="mb-2">
        Skoro punkt <InlineMath math="A = \left(\frac{1}{3}, -1\right)" /> należy do wykresu funkcji{' '}
        <InlineMath math="f(x) = 3x + b" />, to możemy podstawić współrzędne punktu do wzoru
        funkcji:
      </p>
      <BlockMath math="f\left(\frac{1}{3}\right) = -1" />
      <BlockMath math="3 \cdot \frac{1}{3} + b = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie wartości <InlineMath math="b" />
      </h2>
      <p className="mb-2">
        Obliczamy wartość <InlineMath math="b" />:
      </p>
      <BlockMath math="1 + b = -1" />
      <BlockMath math="b = -1 - 1 = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="b" /> wynosi <InlineMath math="-2" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
