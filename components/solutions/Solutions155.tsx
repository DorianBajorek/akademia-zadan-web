import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="1" /> jest miejscem zerowym funkcji liniowej <InlineMath math="f(x) = ax + b" />, a punkt <InlineMath math="M = (3, -2)" /> należy do wykresu tej funkcji. Współczynnik <InlineMath math="a" /> we wzorze tej funkcji jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{3}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="-\frac{3}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="-1" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wykorzystanie miejsca zerowego</h2>
      <p className="mb-2">
        Skoro <InlineMath math="1" /> jest miejscem zerowym funkcji <InlineMath math="f(x) = ax + b" />, to:
      </p>
      <BlockMath math="f(1) = 0" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 1" /> do wzoru funkcji:
      </p>
      <BlockMath math="a \cdot 1 + b = 0" />
      <p className="mb-2">
        Otrzymujemy równanie:
      </p>
      <BlockMath math="a + b = 0 \quad \Rightarrow \quad b = -a" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wykorzystanie punktu <InlineMath math="M = (3, -2)" /></h2>
      <p className="mb-2">
        Punkt <InlineMath math="M = (3, -2)" /> należy do wykresu funkcji, zatem:
      </p>
      <BlockMath math="f(3) = -2" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = 3" /> do wzoru funkcji:
      </p>
      <BlockMath math="a \cdot 3 + b = -2" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="b = -a" /> (z kroku 1):
      </p>
      <BlockMath math="3a - a = -2" />
      <BlockMath math="2a = -2" />
      <BlockMath math="a = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Współczynnik <InlineMath math="a" /> jest równy <InlineMath math="-1" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;