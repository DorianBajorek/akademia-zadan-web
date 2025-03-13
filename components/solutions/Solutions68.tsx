import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności <InlineMath math="\frac{2-x}{2} - 2x \geq 1" /> jest przedział:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="[0, +\infty)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="(-\infty, 0]" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="(-\infty, 5]" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="(-\infty, \frac{1}{3}]" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie nierówności</h2>
      <p className="mb-2">
        Rozpoczynamy od rozwiązania nierówności:
      </p>
      <BlockMath math="\frac{2-x}{2} - 2x \geq 1" />
      <p className="mb-2">
        Najpierw mnożymy obie strony przez 2, aby pozbyć się ułamka:
      </p>
      <BlockMath math="2 \cdot \left( \frac{2-x}{2} - 2x \right) \geq 2 \cdot 1" />
      <BlockMath math="2 - x - 4x \geq 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Łączymy podobne wyrazy:
      </p>
      <BlockMath math="2 - 5x \geq 2" />
      <p className="mb-2">
        Odejmujemy 2 od obu stron:
      </p>
      <BlockMath math="-5x \geq 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie dla x</h2>
      <p className="mb-2">
        Dzielimy obie strony przez -5, pamiętając o zmianie kierunku nierówności:
      </p>
      <BlockMath math="x \leq 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiór rozwiązań nierówności to <InlineMath math="(-\infty, 0]" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;