import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności <InlineMath math="3(1-x) > 2(3x-1)-12x" /> jest
        przedział
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\left(-\frac{5}{3}, +\infty \right)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\left(-\infty, \frac{5}{3}\right)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\left(\frac{5}{3}, +\infty \right)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\left(-\infty, -\frac{5}{3}\right)" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie nierówności</h2>
      <p className="mb-2">Rozpoczynamy od rozwinięcia obu stron nierówności:</p>
      <BlockMath math="3(1 - x) > 2(3x - 1) - 12x" />
      <BlockMath math="3 - 3x > 6x - 2 - 12x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Uproszczenie wyrażeń</h2>
      <p className="mb-2">Redukujemy wyrazy podobne:</p>
      <BlockMath math="3 - 3x > -6x - 2" />
      <BlockMath math="-3x + 6x > -2 - 3" />
      <BlockMath math="3x > -5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wyznaczenie rozwiązania</h2>
      <p className="mb-2">Dzielimy obie strony przez 3:</p>
      <BlockMath math="x > -\frac{5}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Interpretacja wyniku</h2>
      <p className="mb-2">
        Rozwiązaniem nierówności jest zbiór liczb rzeczywistych większych od{' '}
        <InlineMath math="-\frac{5}{3}" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiór rozwiązań to <InlineMath math="\left(-\frac{5}{3}, +\infty \right)" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
