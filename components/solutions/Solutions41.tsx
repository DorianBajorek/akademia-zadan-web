import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution41 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ciąg <InlineMath math="(a_n)" /> jest określony wzorem:
        <BlockMath math="a_n = \frac{2n^2 - 30n}{n}" />
        dla każdej liczby naturalnej <InlineMath math="n \geq 1" />. Wtedy <InlineMath math="a_7" /> jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="-196" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="-32" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="-26" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="-16" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Uproszczenie wzoru ciągu</h2>
      <p className="mb-2">
        Najpierw uprośćmy wzór ciągu:
      </p>
      <BlockMath math="a_n = \frac{2n^2 - 30n}{n} = 2n - 30" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie wartości <InlineMath math="n = 7" /></h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="n = 7" /> do uproszczonego wzoru:
      </p>
      <BlockMath math="a_7 = 2 \cdot 7 - 30 = 14 - 30 = -16" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="a_7" /> wynosi <InlineMath math="-16" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution41;