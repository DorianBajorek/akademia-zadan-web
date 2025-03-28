import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkt <InlineMath math="A = (3, -5)" /> jest wierzchołkiem kwadratu <InlineMath math="ABCD" />, a punkt <InlineMath math="M = (1, 3)" /> jest punktem przecięcia się przekątnych tego kwadratu. Wynika stąd, że pole kwadratu <InlineMath math="ABCD" /> jest równe
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="68" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="136" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="2\sqrt{34}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="8\sqrt{34}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie długości przekątnej</h2>
      <p className="mb-2">
        Punkt <InlineMath math="M" /> to środek kwadratu. Obliczamy odległość między punktem <InlineMath math="A" /> a środkiem <InlineMath math="M" />:
      </p>
      <BlockMath math="AM = \sqrt{(3-1)^2 + (-5-3)^2} = \sqrt{4 + 64} = \sqrt{68} = 2\sqrt{17}" />
      <p className="mb-2">
        Ponieważ <InlineMath math="AM" /> to połowa przekątnej kwadratu, to cała przekątna ma długość:
      </p>
      <BlockMath math="d = 2 \times AM = 4\sqrt{17}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie pola kwadratu</h2>
      <p className="mb-2">
        Pole kwadratu można obliczyć ze wzoru na przekątną:
      </p>
      <BlockMath math="P = \frac{d^2}{2} = \frac{(4\sqrt{17})^2}{2} = \frac{16 \times 17}{2} = 136" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Pole kwadratu <InlineMath math="ABCD" /> wynosi <InlineMath math="136" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;