import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution49 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Punkty <InlineMath math="K = (4, -10)" /> i <InlineMath math="L = (b, 2)" /> są końcami odcinka <InlineMath math="KL" />. Pierwsza współrzędna środka odcinka <InlineMath math="KL" /> jest równa <InlineMath math="-12" />. Wynika stąd, że:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="b = -28" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="b = -14" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="b = -24" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="b = -10" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na środek odcinka</h2>
      <p className="mb-2">
        Środek odcinka <InlineMath math="KL" /> o końcach <InlineMath math="K = (x_1, y_1)" /> i <InlineMath math="L = (x_2, y_2)" /> ma współrzędne:
      </p>
      <BlockMath math="S = \left( \frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2} \right)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie danych</h2>
      <p className="mb-2">
        Podstawiamy współrzędne punktów <InlineMath math="K = (4, -10)" /> i <InlineMath math="L = (b, 2)" /> oraz pierwszą współrzędną środka <InlineMath math="-12" />:
      </p>
      <BlockMath math="\frac{4 + b}{2} = -12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Mnożymy obie strony równania przez 2:
      </p>
      <BlockMath math="4 + b = -24" />
      <p className="mb-2">
        Odejmujemy 4 od obu stron:
      </p>
      <BlockMath math="b = -28" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="b" /> wynosi <InlineMath math="-28" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution49;