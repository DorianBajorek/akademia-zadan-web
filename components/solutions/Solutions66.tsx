import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution66 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Suma <InlineMath math="2 \log \sqrt{10} + \log 10^3" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="5" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Najpierw upraszczamy każdy z logarytmów:
      </p>
      <BlockMath math="2 \log \sqrt{10} = 2 \log 10^{1/2} = 2 \cdot \frac{1}{2} \log 10 = \log 10" />
      <BlockMath math="\log 10^3 = 3 \log 10" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie sumy</h2>
      <p className="mb-2">
        Suma wyrażeń to:
      </p>
      <BlockMath math="\log 10 + 3 \log 10 = 4 \log 10" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wartość logarytmu</h2>
      <p className="mb-2">
        Wiemy, że <InlineMath math="\log 10 = 1" />, więc:
      </p>
      <BlockMath math="4 \log 10 = 4 \cdot 1 = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Suma <InlineMath math="2 \log \sqrt{10} + \log 10^3" /> jest równa <InlineMath math="4" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution66;