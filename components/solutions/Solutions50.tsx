import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution50 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkty <InlineMath math="A = (-4, 4)" /> i <InlineMath math="B = (4, 0)" /> są sąsiednimi wierzchołkami kwadratu <InlineMath math="ABCD" />. Przekątna tego kwadratu ma długość:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="4\sqrt{10}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="4\sqrt{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="4\sqrt{5}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="4\sqrt{7}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie długości boku kwadratu</h2>
      <p className="mb-2">
        Najpierw obliczamy długość boku kwadratu, korzystając ze wzoru na odległość między dwoma punktami:
      </p>
      <BlockMath math="|AB| = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}" />
      <p className="mb-2">
        Podstawiamy współrzędne punktów <InlineMath math="A = (-4, 4)" /> i <InlineMath math="B = (4, 0)" />:
      </p>
      <BlockMath math="|AB| = \sqrt{(4 - (-4))^2 + (0 - 4)^2} = \sqrt{(8)^2 + (-4)^2} = \sqrt{64 + 16} = \sqrt{80} = 4\sqrt{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości przekątnej kwadratu</h2>
      <p className="mb-2">
        Przekątna kwadratu o boku <InlineMath math="a" /> jest równa:
      </p>
      <BlockMath math="d = a\sqrt{2}" />
      <p className="mb-2">
        Podstawiamy długość boku <InlineMath math="a = 4\sqrt{5}" />:
      </p>
      <BlockMath math="d = 4\sqrt{5} \cdot \sqrt{2} = 4\sqrt{10}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Przekątna kwadratu ma długość <InlineMath math="4\sqrt{10}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution50;