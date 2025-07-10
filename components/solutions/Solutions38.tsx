import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Iloczyn wszystkich rozwiązań równania <InlineMath math="3x(x^2 - 16)(x + 2) = 0" /> jest
        równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="0" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Znalezienie rozwiązań równania</h2>
      <p className="mb-2">
        Równanie <InlineMath math="3x(x^2 - 16)(x + 2) = 0" /> ma rozwiązania, gdy którykolwiek z
        czynników jest równy zero:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>
          <InlineMath math="3x = 0 \Rightarrow x = 0" />
        </li>
        <li>
          <InlineMath math="x^2 - 16 = 0 \Rightarrow x = 4 \text{ lub } x = -4" />
        </li>
        <li>
          <InlineMath math="x + 2 = 0 \Rightarrow x = -2" />
        </li>
      </ul>
      <p className="mb-2">
        Rozwiązania to: <InlineMath math="x = 0, x = 4, x = -4, x = -2" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie iloczynu rozwiązań</h2>
      <p className="mb-2">Iloczyn rozwiązań to:</p>
      <BlockMath math="0 \cdot 4 \cdot (-4) \cdot (-2) = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloczyn wszystkich rozwiązań równania <InlineMath math="3x(x^2 - 16)(x + 2) = 0" /> jest
        równy <InlineMath math="0" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
