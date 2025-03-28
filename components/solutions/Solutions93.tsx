import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\log_5 125" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{2}{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{3}{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozkład liczby 125 na potęgę podstawy 5</h2>
      <p className="mb-2">
        Rozłóżmy liczbę 125 na czynniki:
      </p>
      <BlockMath math="125 = 5 \times 5 \times 5 = 5^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie logarytmu</h2>
      <p className="mb-2">
        Korzystając z definicji logarytmu:
      </p>
      <BlockMath math="\log_5 125 = \log_5 (5^3) = 3 \cdot \log_5 5 = 3 \cdot 1 = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość logarytmu wynosi <InlineMath math="3" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;