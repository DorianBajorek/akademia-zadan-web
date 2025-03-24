import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dane są liczby <InlineMath math="a = 3,6 \cdot 10^{-12}" /> oraz <InlineMath math="b = 2,4 \cdot 10^{-20}" />. Wtedy iloraz <InlineMath math="\frac{a}{b}" /> jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="8,64 \cdot 10^{-32}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="1,5 \cdot 10^{-8}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="1,5 \cdot 10^{8}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="8,64 \cdot 10^{32}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie ilorazu</h2>
      <p className="mb-2">
        Obliczamy iloraz <InlineMath math="\frac{a}{b}" />:
      </p>
      <BlockMath math="\frac{a}{b} = \frac{3,6 \cdot 10^{-12}}{2,4 \cdot 10^{-20}}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podzielenie współczynników</h2>
      <p className="mb-2">
        Dzielimy współczynniki liczbowe:
      </p>
      <BlockMath math="\frac{3,6}{2,4} = 1,5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie potęg</h2>
      <p className="mb-2">
        Dzielimy potęgi liczby 10, korzystając z własności potęg <InlineMath math="\frac{10^m}{10^n} = 10^{m-n}" />:
      </p>
      <BlockMath math="\frac{10^{-12}}{10^{-20}} = 10^{-12 - (-20)} = 10^{8}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Połączenie wyników</h2>
      <p className="mb-2">
        Łączymy wyniki z kroków 2 i 3:
      </p>
      <BlockMath math="\frac{a}{b} = 1,5 \cdot 10^8" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloraz <InlineMath math="\frac{a}{b}" /> jest równy <InlineMath math="1,5 \cdot 10^{8}" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;