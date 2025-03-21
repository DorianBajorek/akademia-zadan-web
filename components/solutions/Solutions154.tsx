import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wykresem funkcji kwadratowej <InlineMath math="f(x) = x^2 - 6x - 3" /> jest parabola, której wierzchołkiem jest punkt o współrzędnych:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-6, -3)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="(-6, 69)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="(3, -12)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="(6, -3)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie współrzędnej <InlineMath math="x" /> wierzchołka</h2>
      <p className="mb-2">
        Współrzędna <InlineMath math="x" /> wierzchołka paraboli dana jest wzorem:
      </p>
      <BlockMath math="x_w = -\frac{b}{2a}" />
      <p className="mb-2">
        Dla funkcji <InlineMath math="f(x) = x^2 - 6x - 3" /> współczynniki to:
      </p>
      <BlockMath math="a = 1, \quad b = -6" />
      <p className="mb-2">
        Podstawiamy do wzoru:
      </p>
      <BlockMath math="x_w = -\frac{-6}{2 \cdot 1} = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie współrzędnej <InlineMath math="y" /> wierzchołka</h2>
      <p className="mb-2">
        Współrzędną <InlineMath math="y" /> wierzchołka obliczamy, podstawiając <InlineMath math="x_w" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(3) = (3)^2 - 6 \cdot 3 - 3 = 9 - 18 - 3 = -12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Współrzędne wierzchołka</h2>
      <p className="mb-2">
        Wierzchołek paraboli ma współrzędne:
      </p>
      <BlockMath math="(x_w, y_w) = (3, -12)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wierzchołek paraboli ma współrzędne <InlineMath math="(3, -12)" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;