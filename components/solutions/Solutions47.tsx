import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkty <InlineMath math="A = (-2, 6)" /> oraz <InlineMath math="B = (3, b)" /> leżą na prostej, która przechodzi przez początek układu współrzędnych. Wtedy <InlineMath math="b" /> jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="9" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="-9" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="4" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Równanie prostej przechodzącej przez początek układu</h2>
      <p className="mb-2">
        Prosta przechodząca przez początek układu współrzędnych ma równanie:
      </p>
      <BlockMath math="y = kx" />
      <p className="mb-2">
        Gdzie <InlineMath math="k" /> to współczynnik kierunkowy.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie współczynnika kierunkowego</h2>
      <p className="mb-2">
        Korzystając z punktu <InlineMath math="A = (-2, 6)" />, podstawiamy do równania prostej:
      </p>
      <BlockMath math="6 = k \cdot (-2)" />
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="k = \frac{6}{-2} = -3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wyznaczenie wartości <InlineMath math="b" /></h2>
      <p className="mb-2">
        Korzystając z punktu <InlineMath math="B = (3, b)" /> i współczynnika kierunkowego <InlineMath math="k = -3" />, podstawiamy do równania prostej:
      </p>
      <BlockMath math="b = -3 \cdot 3 = -9" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="b" /> jest równa <InlineMath math="-9" />. Prawidłowa odpowiedź to B
      </p>
    </div>
  );
};

export default Solution;