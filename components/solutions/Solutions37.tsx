import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution37 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności{' '}
        <InlineMath math="\frac{2}{5} - \frac{x}{3} > \frac{x}{5}" /> jest przedział:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-\infty, 0)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="(0, +\infty)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="(-\infty, \frac{3}{4})" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="(\frac{3}{4}, +\infty)" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Pomnożenie obu stron przez 15</h2>
      <p className="mb-2">
        Aby pozbyć się ułamków, mnożymy obie strony nierówności przez 15 (najmniejszą wspólną
        wielokrotność mianowników 5 i 3):
      </p>
      <BlockMath math="15 \cdot \left( \frac{2}{5} - \frac{x}{3} \right) > 15 \cdot \left( \frac{x}{5} \right)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wykonanie mnożenia</h2>
      <p className="mb-2">Wykonujemy mnożenie:</p>
      <BlockMath math="15 \cdot \frac{2}{5} - 15 \cdot \frac{x}{3} > 15 \cdot \frac{x}{5}" />
      <BlockMath math="6 - 5x > 3x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Przeniesienie wyrazów z <InlineMath math="x" /> na jedną stronę
      </h2>
      <p className="mb-2">
        Przenosimy wszystkie wyrazy zawierające <InlineMath math="x" /> na lewą stronę, a stałe na
        prawą:
      </p>
      <BlockMath math="6 > 5x + 3x" />
      <BlockMath math="6 > 8x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Rozwiązanie nierówności</h2>
      <p className="mb-2">Dzielimy obie strony przez 8:</p>
      <BlockMath math="\frac{6}{8} > x" />
      <BlockMath math="x < \frac{3}{4}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiorem wszystkich rozwiązań nierówności jest przedział{' '}
        <InlineMath math="(-\infty, \frac{3}{4})" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution37;
