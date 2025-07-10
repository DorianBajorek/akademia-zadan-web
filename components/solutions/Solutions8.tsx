import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution8 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcje liniowe <InlineMath math="f" /> oraz <InlineMath math="g" />, określone wzorami{' '}
        <InlineMath math="f(x) = 3x + 6" /> oraz <InlineMath math="g(x) = ax + 7" />, mają to samo
        miejsce zerowe. Współczynnik <InlineMath math="a" /> we wzorze funkcji{' '}
        <InlineMath math="g" /> jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-\frac{7}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-\frac{3}{7}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{3}{7}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{7}{2}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Znalezienie miejsca zerowego funkcji <InlineMath math="f" />
      </h2>
      <p className="mb-2">
        Miejsce zerowe funkcji <InlineMath math="f" /> to wartość <InlineMath math="x" />, dla
        której <InlineMath math="f(x) = 0" />:
      </p>
      <BlockMath math="3x + 6 = 0" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="3x = -6" />
      <BlockMath math="x = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Znalezienie współczynnika <InlineMath math="a" />
      </h2>
      <p className="mb-2">
        Funkcja <InlineMath math="g" /> ma to samo miejsce zerowe. Oznacza to, że po podstawieniu{' '}
        <InlineMath math="x = -2" /> do wzoru funckji <InlineMath math="g" /> uzyskujemy{' '}
        <InlineMath math="0" /> tzn. <InlineMath math="g(-2) = 0" />:
      </p>
      <BlockMath math="g(-2) = a(-2) + 7 = 0" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="-2a + 7 = 0" />
      <BlockMath math="-2a = -7" />
      <BlockMath math="a = \frac{7}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Współczynnik <InlineMath math="a" /> jest równy <InlineMath math="\frac{7}{2}" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution8;
