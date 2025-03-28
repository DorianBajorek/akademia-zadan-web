import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wartość wyrażenia <InlineMath math="x^2 - 6x + 9" /> dla <InlineMath math="x = \sqrt{3} + 3" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="1 + 2\sqrt{3}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="1 - 2\sqrt{3}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozpoznanie wzoru skróconego mnożenia</h2>
      <p className="mb-2">
        Wyrażenie <InlineMath math="x^2 - 6x + 9" /> można zapisać jako:
      </p>
      <BlockMath math="(x - 3)^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie wartości x</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = \sqrt{3} + 3" />:
      </p>
      <BlockMath math="(\sqrt{3} + 3 - 3)^2 = (\sqrt{3})^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie wartości</h2>
      <p className="mb-2">
        Obliczamy kwadrat pierwiastka:
      </p>
      <BlockMath math="(\sqrt{3})^2 = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość wyrażenia wynosi <InlineMath math="3" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;