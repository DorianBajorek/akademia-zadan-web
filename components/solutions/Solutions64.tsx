import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba 78 stanowi 150% liczby <InlineMath math="c" />. Wtedy liczba <InlineMath math="c" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="60" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="52" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="48" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="39" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Ustalenie równania</h2>
      <p className="mb-2">
        Liczba 78 stanowi 150% liczby <InlineMath math="c" />, więc możemy zapisać równanie:
      </p>
      <BlockMath math="78 = 150\% \cdot c" />
      <p className="mb-2">
        Zamieniamy procent na ułamek:
      </p>
      <BlockMath math="78 = 1.5 \cdot c" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie, aby znaleźć <InlineMath math="c" />:
      </p>
      <BlockMath math="c = \frac{78}{1.5} = 52" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="c" /> jest równa <InlineMath math="52" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;