import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\sqrt[3]{-\frac{27}{16}} \cdot \sqrt[3]{-2}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="-\frac{3}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{3}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{2}{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="-\frac{2}{3}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie pierwiastków sześciennych</h2>
      <p className="mb-2">
        Obliczamy każdy z pierwiastków sześciennych osobno:
      </p>
      <BlockMath math="\sqrt[3]{-\frac{27}{16}} = -\sqrt[3]{\frac{27}{16}} = -\frac{3}{\sqrt[3]{16}}" />
      <BlockMath math="\sqrt[3]{-2} = -\sqrt[3]{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Mnożenie wyników</h2>
      <p className="mb-2">
        Mnożymy wyniki:
      </p>
      <BlockMath math="-\frac{3}{\sqrt[3]{16}} \cdot (-\sqrt[3]{2}) = \frac{3 \cdot \sqrt[3]{2}}{\sqrt[3]{16}}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Upraszczamy wyrażenie:
      </p>
      <BlockMath math="\frac{3 \cdot \sqrt[3]{2}}{\sqrt[3]{16}} = \frac{3 \cdot \sqrt[3]{2}}{\sqrt[3]{2^4}} = \frac{3 \cdot \sqrt[3]{2}}{2 \cdot \sqrt[3]{2}} = \frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\sqrt[3]{-\frac{27}{16}} \cdot \sqrt[3]{-2}" /> jest równa <InlineMath math="\frac{3}{2}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;