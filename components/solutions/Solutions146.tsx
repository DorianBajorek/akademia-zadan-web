import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="2 \log_3 6 - \log_3 4" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="2 \log_3 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\log_3 8" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zastosowanie własności logarytmów</h2>
      <p className="mb-2">
        Wykorzystujemy własność logarytmu: <InlineMath math="k \log_b a = \log_b a^k" />. Zastosujmy
        to do wyrażenia <InlineMath math="2 \log_3 6" />:
      </p>
      <BlockMath math="2 \log_3 6 = \log_3 6^2 = \log_3 36" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Połączenie logarytmów</h2>
      <p className="mb-2">
        Teraz wyrażenie <InlineMath math="2 \log_3 6 - \log_3 4" /> można zapisać jako:
      </p>
      <BlockMath math="\log_3 36 - \log_3 4" />
      <p className="mb-2">
        Korzystamy z własności logarytmu:{' '}
        <InlineMath math="\log_b a - \log_b c = \log_b \left(\frac{a}{c}\right)" />. Zatem:
      </p>
      <BlockMath math="\log_3 36 - \log_3 4 = \log_3 \left(\frac{36}{4}\right) = \log_3 9" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie wartości logarytmu</h2>
      <p className="mb-2">
        Obliczamy <InlineMath math="\log_3 9" />. Ponieważ <InlineMath math="3^2 = 9" />, to:
      </p>
      <BlockMath math="\log_3 9 = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="2 \log_3 6 - \log_3 4" /> jest równa <InlineMath math="2" />{' '}
        (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
