import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="5^8 \cdot 16^{-2}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\left(\frac{5}{2}\right)^8" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{5}{4}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="10^8" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="10" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Przekształcenie wyrażenia</h2>
      <p className="mb-2">
        Rozpiszmy wyrażenie <InlineMath math="5^8 \cdot 16^{-2}" />:
      </p>
      <BlockMath math="5^8 \cdot 16^{-2} = 5^8 \cdot \left(2^4\right)^{-2}" />
      <p className="mb-2">
        Korzystając z własności potęg <InlineMath math="(a^m)^n = a^{m \cdot n}" />:
      </p>
      <BlockMath math="5^8 \cdot 2^{-8}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Połączenie potęg</h2>
      <p className="mb-2">
        Możemy zapisać wyrażenie jako:
      </p>
      <BlockMath math="5^8 \cdot 2^{-8} = \left(\frac{5}{2}\right)^8" />
      <p className="mb-2">
        Korzystając z własności potęg <InlineMath math="a^{m} \cdot b^{-m} = (\frac{a}{b})^{m}" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">
        Po przekształceniach otrzymujemy:
      </p>
      <BlockMath math="5^8 \cdot 16^{-2} = \left(\frac{5}{2}\right)^8" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="5^8 \cdot 16^{-2}" /> jest równa <InlineMath math="\left(\frac{5}{2}\right)^8" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;