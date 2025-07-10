import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Średnia arytmetyczna zestawu sześciu liczb: <InlineMath math="2x, 4, 6, 8, 11, 13" />, jest
        równa 5. Wynika stąd, że:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="x = -1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="x = 7" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="x = -6" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="x = 6" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie sumy liczb</h2>
      <p className="mb-2">
        Średnia arytmetyczna sześciu liczb jest równa 5, więc suma tych liczb wynosi:
      </p>
      <BlockMath math="6 \cdot 5 = 30" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Ustalenie równania</h2>
      <p className="mb-2">Suma liczb w zestawie to:</p>
      <BlockMath math="2x + 4 + 6 + 8 + 11 + 13 = 30" />
      <p className="mb-2">Obliczamy sumę znanych liczb:</p>
      <BlockMath math="4 + 6 + 8 + 11 + 13 = 42" />
      <p className="mb-2">Podstawiamy do równania:</p>
      <BlockMath math="2x + 42 = 30" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="2x = 30 - 42" />
      <BlockMath math="2x = -12" />
      <BlockMath math="x = -6" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wynika stąd, że <InlineMath math="x = -6" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
