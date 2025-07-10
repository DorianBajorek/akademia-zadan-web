import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution24 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Trzywyrazowy ciąg <InlineMath math="(27, 9, a - 1)" /> jest geometryczny. Liczba{' '}
        <InlineMath math="a" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Własność ciągu geometrycznego</h2>
      <p className="mb-2">W ciągu geometrycznym dla trzech kolejnych wyrazów zachodzi:</p>
      <BlockMath math="(a_2)^2 = a_1 \cdot a_3" />
      <p className="mb-2">Podstawiamy wyrazy ciągu:</p>
      <BlockMath math="9^2 = 27 \cdot (a - 1)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">Obliczamy:</p>
      <BlockMath math="81 = 27(a - 1)" />
      <p className="mb-2">Dzielimy obie strony przez 27:</p>
      <BlockMath math="3 = a - 1" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="a = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="a" /> jest równa <InlineMath math="4" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution24;
