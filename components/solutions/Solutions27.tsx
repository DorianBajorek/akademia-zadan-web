import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution27 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)" /> dana jest prosta <InlineMath math="k" /> o równaniu:
        <BlockMath math="y = -\frac{1}{3}x + 2" />
        Prosta o równaniu:
        <BlockMath math="y = ax + b" />
        jest równoległa do prostej <InlineMath math="k" /> i przechodzi przez punkt <InlineMath math="P = (3, 5)" />, gdy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = 3 \, \text{i} \, b = 4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = -\frac{1}{3} \, \text{i} \, b = 4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = 3 \, \text{i} \, b = -4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = -\frac{1}{3} \, \text{i} \, b = 6" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Warunek równoległości prostych</h2>
      <p className="mb-2">
        Dwie proste są równoległe, jeśli mają ten sam współczynnik kierunkowy. Dla prostej <InlineMath math="k" /> współczynnik kierunkowy wynosi:
      </p>
      <BlockMath math="a_k = -\frac{1}{3}" />
      <p className="mb-2">
        Zatem współczynnik kierunkowy prostej równoległej <InlineMath math="y = ax + b" /> musi być równy:
      </p>
      <BlockMath math="a = -\frac{1}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie punktu do równania prostej</h2>
      <p className="mb-2">
        Prosta przechodzi przez punkt <InlineMath math="P = (3, 5)" />, więc podstawiamy współrzędne punktu do równania prostej:
      </p>
      <BlockMath math="5 = -\frac{1}{3} \cdot 3 + b" />
      <p className="mb-2">
        Obliczamy:
      </p>
      <BlockMath math="5 = -1 + b" />
      <BlockMath math="b = 6" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prosta równoległa do prostej <InlineMath math="k" /> i przechodząca przez punkt <InlineMath math="P = (3, 5)" /> ma równanie:
        <BlockMath math="y = -\frac{1}{3}x + 6" />
        Zatem prawidłowa odpowiedź to <strong>D</strong> (czyli <InlineMath math="a = -\frac{1}{3} \, \text{i} \, b = 6" />).
      </p>
    </div>
  );
};

export default Solution27;