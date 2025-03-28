import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ciąg <InlineMath math="(a_n)" /> jest określony wzorem <InlineMath math="a_n = 2n^2" /> dla <InlineMath math="n \geq 1" />. Różnica <InlineMath math="a_5 - a_4" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="20" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="36" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="18" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie wyrazu a₅</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="n = 5" /> do wzoru ciągu:
      </p>
      <BlockMath math="a_5 = 2 \times 5^2 = 2 \times 25 = 50" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie wyrazu a₄</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="n = 4" /> do wzoru ciągu:
      </p>
      <BlockMath math="a_4 = 2 \times 4^2 = 2 \times 16 = 32" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie różnicy</h2>
      <p className="mb-2">
        Obliczamy różnicę między wyrazami:
      </p>
      <BlockMath math="a_5 - a_4 = 50 - 32 = 18" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Weryfikacja</h2>
      <p className="mb-2">
        Możemy też użyć ogólnego wzoru na różnicę:
      </p>
      <BlockMath math="a_{n+1} - a_n = 2(n+1)^2 - 2n^2 = 2(n^2 + 2n + 1 - n^2) = 2(2n + 1) = 4n + 2" />
      <BlockMath math="a_5 - a_4 = 4 \times 4 + 2 = 18" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Różnica wynosi <InlineMath math="18" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;