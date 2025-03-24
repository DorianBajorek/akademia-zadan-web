import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Prosta o równaniu <InlineMath math="y = ax + b" /> jest prostopadła do prostej o równaniu <InlineMath math="y = -4x + 1" /> i przechodzi przez punkt <InlineMath math="P = \left(\frac{1}{2}, 0\right)" />, gdy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = -4" /> i <InlineMath math="b = -2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = \frac{1}{4}" /> i <InlineMath math="b = \frac{-1}{8}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = -4" /> i <InlineMath math="b = 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = \frac{1}{4}" /> i <InlineMath math="b = \frac{1}{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Warunek prostopadłości prostych</h2>
      <p className="mb-2">
        Dwie proste są prostopadłe, jeśli iloczyn ich współczynników kierunkowych wynosi <InlineMath math="-1" />. Prosta <InlineMath math="y = -4x + 1" /> ma współczynnik kierunkowy <InlineMath math="-4" />, więc współczynnik kierunkowy prostej prostopadłej <InlineMath math="a" /> musi spełniać warunek:
      </p>
      <BlockMath math="a \cdot (-4) = -1" />
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="a = \frac{1}{4}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyznaczenie współczynnika <InlineMath math="b" /></h2>
      <p className="mb-2">
        Prosta <InlineMath math="y = \frac{1}{4}x + b" /> przechodzi przez punkt <InlineMath math="P = \left(\frac{1}{2}, 0\right)" />. Podstawiamy współrzędne punktu do równania prostej:
      </p>
      <BlockMath math="0 = \frac{1}{4} \cdot \frac{1}{2} + b" />
      <p className="mb-2">
        Obliczamy:
      </p>
      <BlockMath math="0 = \frac{1}{8} + b" />
      <BlockMath math="b = -\frac{1}{8}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prosta jest prostopadła do <InlineMath math="y = -4x + 1" /> i przechodzi przez punkt <InlineMath math="P = \left(\frac{1}{2}, 0\right)" />, gdy <InlineMath math="a = \frac{1}{4}" /> i <InlineMath math="b = -\frac{1}{8}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;