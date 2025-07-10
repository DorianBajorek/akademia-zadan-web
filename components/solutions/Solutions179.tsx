import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Miejscem zerowym funkcji liniowej <InlineMath math="f(x) = \sqrt{3}(x + 1) - 12" /> jest
        liczba:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sqrt{3} - 4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-2\sqrt{3} + 1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="4\sqrt{3} - 1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="-\sqrt{3} + 12" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Znalezienie miejsca zerowego</h2>
      <p className="mb-2">
        Miejsce zerowe funkcji liniowej to wartość <InlineMath math="x" />, dla której{' '}
        <InlineMath math="f(x) = 0" />. Zatem:
      </p>
      <BlockMath math="\sqrt{3}(x + 1) - 12 = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="\sqrt{3}(x + 1) - 12 = 0" />
      <p className="mb-2">Dodajemy 12 do obu stron:</p>
      <BlockMath math="\sqrt{3}(x + 1) = 12" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="\sqrt{3}" />:
      </p>
      <BlockMath math="x + 1 = \frac{12}{\sqrt{3}}" />
      <p className="mb-2">Usuwamy niewymierność z mianownika:</p>
      <BlockMath math="x + 1 = \frac{12}{\sqrt{3}} \cdot \frac{\sqrt{3}}{\sqrt{3}} = \frac{12\sqrt{3}}{3} = 4\sqrt{3}" />
      <p className="mb-2">Odejmujemy 1 od obu stron:</p>
      <BlockMath math="x = 4\sqrt{3} - 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">
        Miejsce zerowe funkcji to <InlineMath math="x = 4\sqrt{3} - 1" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miejscem zerowym funkcji jest liczba <InlineMath math="4\sqrt{3} - 1" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
