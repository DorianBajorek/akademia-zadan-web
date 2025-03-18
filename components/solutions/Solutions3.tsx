import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dla każdej liczby rzeczywistej <InlineMath math="a" /> i każdej liczby rzeczywistej <InlineMath math="b" /> wartość wyrażenia:
        <BlockMath math="(2a + b)^2 - (2a - b)^2" />
        jest równa wartości wyrażenia:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="8a^2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="8ab" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="-8ab" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="2b^2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwinięcie wyrażeń</h2>
      <p className="mb-2">
        Rozwińmy oba wyrażenia w nawiasach:
      </p>
      <BlockMath math="(2a + b)^2 = (2a)^2 + 2 \cdot 2a \cdot b + b^2 = 4a^2 + 4ab + b^2" />
      <BlockMath math="(2a - b)^2 = (2a)^2 - 2 \cdot 2a \cdot b + b^2 = 4a^2 - 4ab + b^2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie różnicy</h2>
      <p className="mb-2">
        Obliczmy różnicę między tymi wyrażeniami:
      </p>
      <BlockMath math="(2a + b)^2 - (2a - b)^2 = (4a^2 + 4ab + b^2) - (4a^2 - 4ab + b^2)" />
      <p className="mb-2">
        Po uproszczeniu otrzymujemy:
      </p>
      <BlockMath math="= 4a^2 + 4ab + b^2 - 4a^2 + 4ab - b^2 = 8ab" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość wyrażenia <InlineMath math="(2a + b)^2 - (2a - b)^2" /> jest równa <InlineMath math="8ab" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;