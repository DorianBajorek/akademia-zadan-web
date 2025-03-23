import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Średnia arytmetyczna ośmiu liczb: 3, 5, 7, 9, <InlineMath math="x" />, 15, 17, 19 jest równa 11. Wtedy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="x = 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="x = 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="x = 11" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="x = 13" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na średnią arytmetyczną</h2>
      <p className="mb-2">
        Średnia arytmetyczna ośmiu liczb jest dana wzorem:
      </p>
      <BlockMath math="\text{Średnia} = \frac{3 + 5 + 7 + 9 + x + 15 + 17 + 19}{8}" />
      <p className="mb-2">
        Z treści zadania wiemy, że średnia wynosi 11:
      </p>
      <BlockMath math="\frac{3 + 5 + 7 + 9 + x + 15 + 17 + 19}{8} = 11" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie sumy liczb</h2>
      <p className="mb-2">
        Najpierw obliczamy sumę znanych liczb:
      </p>
      <BlockMath math="3 + 5 + 7 + 9 + 15 + 17 + 19 = 75" />
      <p className="mb-2">
        Zatem równanie na średnią przyjmuje postać:
      </p>
      <BlockMath math="\frac{75 + x}{8} = 11" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="\frac{75 + x}{8} = 11" />
      <p className="mb-2">
        Mnożymy obie strony przez 8:
      </p>
      <BlockMath math="75 + x = 88" />
      <p className="mb-2">
        Odejmujemy 75 od obu stron:
      </p>
      <BlockMath math="x = 13" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="x" /> wynosi <InlineMath math="13" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;