import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Proste o równaniach <InlineMath math="y = (m + 2)x + 3" /> oraz{' '}
        <InlineMath math="y = (2m - 1)x - 3" /> są równoległe, gdy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="m = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="m = 3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="m = 0" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="m = 1" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Warunek równoległości prostych</h2>
      <p className="mb-2">
        Dwie proste są równoległe, jeśli ich współczynniki kierunkowe są równe. Współczynniki
        kierunkowe prostych to:
      </p>
      <BlockMath math="k_1 = m + 2" />
      <BlockMath math="k_2 = 2m - 1" />
      <p className="mb-2">Warunek równoległości:</p>
      <BlockMath math="k_1 = k_2" />
      <BlockMath math="m + 2 = 2m - 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="m + 2 = 2m - 1" />
      <p className="mb-2">
        Przenosimy wyrażenia z <InlineMath math="m" /> na jedną stronę, a stałe na drugą:
      </p>
      <BlockMath math="m - 2m = -1 - 2" />
      <BlockMath math="-m = -3" />
      <p className="mb-2">
        Mnożymy obie strony przez <InlineMath math="-1" />:
      </p>
      <BlockMath math="m = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Proste są równoległe, gdy <InlineMath math="m = 3" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
