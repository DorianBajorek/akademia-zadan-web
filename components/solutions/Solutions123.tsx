import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Para liczb <InlineMath math="x = 2" /> i <InlineMath math="y = 2" /> jest rozwiązaniem układu równań:
        <BlockMath math="\begin{cases} ax + y = 4 \\ -2x + 3y = 2a \end{cases}" />
        dla:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = -1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = -2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = 2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Podstawienie wartości do pierwszego równania</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 2" /> i <InlineMath math="y = 2" /> do pierwszego równania:
      </p>
      <BlockMath math="a \cdot 2 + 2 = 4" />
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="2a + 2 = 4" />
      <BlockMath math="2a = 4 - 2" />
      <BlockMath math="2a = 2" />
      <BlockMath math="a = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprawdzenie wartości <InlineMath math="a" /> w drugim równaniu</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 2" />, <InlineMath math="y = 2" /> oraz <InlineMath math="a = 1" /> do drugiego równania:
      </p>
      <BlockMath math="-2 \cdot 2 + 3 \cdot 2 = 2 \cdot 1" />
      <p className="mb-2">
        Obliczamy:
      </p>
      <BlockMath math="-4 + 6 = 2" />
      <BlockMath math="2 = 2" />
      <p className="mb-2">
        Równość jest spełniona, co potwierdza, że <InlineMath math="a = 1" /> jest poprawną wartością.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Para liczb <InlineMath math="x = 2" /> i <InlineMath math="y = 2" /> jest rozwiązaniem układu dla <InlineMath math="a = 1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;