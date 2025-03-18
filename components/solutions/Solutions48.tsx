import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution48 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dane są cztery proste <InlineMath math="k, l, m, n" /> o równaniach:
        <BlockMath math="k : y = -x + 1" />
        <BlockMath math="l : y = \frac{2}{3}x + 1" />
        <BlockMath math="m : y = -\frac{3}{2}x + 4" />
        <BlockMath math="n : y = -\frac{2}{3}x - 1" />
        Wśród tych prostych prostopadłe są:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> proste <InlineMath math="k" /> oraz <InlineMath math="l" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> proste <InlineMath math="k" /> oraz <InlineMath math="n" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> proste <InlineMath math="l" /> oraz <InlineMath math="m" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> proste <InlineMath math="m" /> oraz <InlineMath math="n" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie współczynników kierunkowych</h2>
      <p className="mb-2">
        Dwie proste są prostopadłe, jeśli iloczyn ich współczynników kierunkowych wynosi <InlineMath math="-1" />. Współczynniki kierunkowe prostych to:
      </p>
      <BlockMath math="k: -1" />
      <BlockMath math="l: \frac{2}{3}" />
      <BlockMath math="m: -\frac{3}{2}" />
      <BlockMath math="n: -\frac{2}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprawdzenie prostopadłości</h2>
      <p className="mb-2">
        Sprawdzamy iloczyn współczynników kierunkowych dla każdej pary prostych:
      </p>
      <BlockMath math="k \text{ i } l: (-1) \cdot \frac{2}{3} = -\frac{2}{3} \neq -1" />
      <BlockMath math="k \text{ i } m: (-1) \cdot \left( \frac{-3}{2} \right)= \frac{3}{2} \neq -1" />
      <BlockMath math="k \text{ i } n: (-1) \cdot \left(-\frac{2}{3}\right) = \frac{2}{3} \neq -1" />
      <BlockMath math="l \text{ i } m: \frac{2}{3} \cdot \left(-\frac{3}{2}\right) = -1" />
      <BlockMath math="l \text{ i } n: \frac{2}{3} \cdot \left(-\frac{-2}{3}\right) = \left( \frac{-4}{9} \right) \neq -1 " />
      <BlockMath math="m \text{ i } n: -\frac{3}{2} \cdot \left(-\frac{2}{3}\right) = 1 \neq -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Proste <InlineMath math="l" /> oraz <InlineMath math="m" /> są prostopadłe (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution48;