import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Suma wszystkich rozwiązań równania <InlineMath math="x(x - 3)(x + 2) = 0" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="0" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="3" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie rozwiązań równania</h2>
      <p className="mb-2">
        Równanie <InlineMath math="x(x - 3)(x + 2) = 0" /> ma trzy rozwiązania:
      </p>
      <BlockMath math="x_1 = 0" />
      <BlockMath math="x_2 = 3" />
      <BlockMath math="x_3 = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie sumy rozwiązań</h2>
      <p className="mb-2">
        Suma wszystkich rozwiązań wynosi:
      </p>
      <BlockMath math="0 + 3 + (-2) = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Suma rozwiązań równania wynosi <InlineMath math="1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;