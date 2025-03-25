import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Proste o równaniach <InlineMath math="y = 3x - 5" /> oraz <InlineMath math="y = \frac{m-3}{2}x + \frac{9}{2}" /> są równoległe, gdy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="m = 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="m = 3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="m = 6" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="m = 9" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Warunek równoległości prostych</h2>
      <p className="mb-2">
        Dwie proste są równoległe, gdy ich współczynniki kierunkowe są równe. Porównujemy współczynniki kierunkowe obu prostych:
      </p>
      <BlockMath math="3 = \frac{m - 3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="3 = \frac{m - 3}{2}" />
      <p className="mb-2">
        Mnożymy obie strony przez 2:
      </p>
      <BlockMath math="6 = m - 3" />
      <p className="mb-2">
        Dodajemy 3 do obu stron:
      </p>
      <BlockMath math="m = 9" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Proste są równoległe, gdy <InlineMath math="m = 9" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;