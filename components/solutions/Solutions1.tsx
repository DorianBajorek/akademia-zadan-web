import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution1 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\left( \frac{1}{16} \right)^8 \cdot 8^{16}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="2^{24}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="2^{16}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="2^{12}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="2^8" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Przekształcenie wyrażenia</h2>
      <p className="mb-2">
        Najpierw zapiszemy liczby jako potęgi liczby 2:
      </p>
      <BlockMath math="16 = 2^4 \quad \text{oraz} \quad 8 = 2^3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie do wyrażenia</h2>
      <p className="mb-2">
        Podstawiamy do wyrażenia:
      </p>
      <BlockMath math="\left( \frac{1}{16} \right)^8 \cdot 8^{16} = \left( \frac{1}{2^4} \right)^8 \cdot (2^3)^{16}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Upraszczamy potęgi:
      </p>
      <BlockMath math="\left( \frac{1}{2^4} \right)^8 = 2^{-4 \cdot 8} = 2^{-32}" />
      <BlockMath math="(2^3)^{16} = 2^{3 \cdot 16} = 2^{48}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Mnożenie potęg</h2>
      <p className="mb-2">
        Mnożymy potęgi o tej samej podstawie:
      </p>
      <BlockMath math="2^{-32} \cdot 2^{48} = 2^{-32 + 48} = 2^{16}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\left( \frac{1}{16} \right)^8 \cdot 8^{16}" /> jest równa <InlineMath math="2^{16}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution1;