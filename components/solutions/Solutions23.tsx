import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution23 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ciąg <InlineMath math="(a_n)" /> jest określony wzorem{' '}
        <InlineMath math="a_n = 2^n \cdot (n + 1)" /> dla każdej liczby naturalnej{' '}
        <InlineMath math="n \geq 1" />. Wyraz <InlineMath math="a_4" /> jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="64" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="40" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="48" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="80" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Podstawienie wartości <InlineMath math="n = 4" /> do wzoru
      </h2>
      <p className="mb-2">
        Aby obliczyć wyraz <InlineMath math="a_4" />, podstawiamy <InlineMath math="n = 4" /> do
        wzoru ciągu:
      </p>
      <BlockMath math="a_4 = 2^4 \cdot (4 + 1)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie wartości</h2>
      <p className="mb-2">Obliczamy potęgę i sumę w nawiasie:</p>
      <BlockMath math="2^4 = 16" />
      <BlockMath math="4 + 1 = 5" />
      <p className="mb-2">Następnie mnożymy wyniki:</p>
      <BlockMath math="a_4 = 16 \cdot 5 = 80" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wyraz <InlineMath math="a_4" /> jest równy <InlineMath math="80" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution23;
