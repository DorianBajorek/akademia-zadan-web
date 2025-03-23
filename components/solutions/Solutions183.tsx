import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest trzywyrazowy ciąg geometryczny <InlineMath math="(24, 6, a - 1)" />. Stąd wynika, że:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = \frac{5}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = \frac{2}{5}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = \frac{3}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = \frac{2}{3}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wykorzystanie własności ciągu geometrycznego</h2>
      <p className="mb-2">
        Jeśli ciąg <InlineMath math="(a, b, c)" /> jest geometryczny, to zachodzi równość:
      </p>
      <BlockMath math="b^2 = a \cdot c" />
      <p className="mb-2">
        W naszym przypadku ciąg to <InlineMath math="(24, 6, a - 1)" />, więc:
      </p>
      <BlockMath math="6^2 = 24 \cdot (a - 1)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="36 = 24 \cdot (a - 1)" />
      <p className="mb-2">
        Dzielimy obie strony przez 24:
      </p>
      <BlockMath math="\frac{36}{24} = a - 1" />
      <p className="mb-2">
        Upraszczamy ułamek:
      </p>
      <BlockMath math="\frac{3}{2} = a - 1" />
      <p className="mb-2">
        Dodajemy 1 do obu stron:
      </p>
      <BlockMath math="a = \frac{3}{2} + 1 = \frac{5}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">
        Zatem <InlineMath math="a = \frac{5}{2}" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawidłowa odpowiedź to <InlineMath math="a = \frac{5}{2}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;