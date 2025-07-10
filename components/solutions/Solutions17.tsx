import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution17 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\log_4 8 + \log_4 2" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="3" />
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

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zastosowanie własności logarytmów</h2>
      <p className="mb-2">Korzystamy z własności logarytmów, która mówi, że:</p>
      <BlockMath math="\log_b a + \log_b c = \log_b (a \cdot c)" />
      <p className="mb-2">Stosujemy tę własność do wyrażenia:</p>
      <BlockMath math="\log_4 8 + \log_4 2 = \log_4 (8 \cdot 2) = \log_4 16" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie logarytmu</h2>
      <p className="mb-2">
        Wiemy, że <InlineMath math="4^2 = 16" />, więc:
      </p>
      <BlockMath math="\log_4 16 = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\log_4 8 + \log_4 2" /> jest równa <InlineMath math="2" />{' '}
        (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution17;
