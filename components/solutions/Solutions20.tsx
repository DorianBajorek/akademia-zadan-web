import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution20 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Jednym z rozwiązań równania:  
        <BlockMath math="\sqrt{3}(x^2 - 2)(x + 3) = 0" />
        jest liczba:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozłożenie równania na czynniki</h2>
      <p className="mb-2">
        Równanie <InlineMath math="\sqrt{3}(x^2 - 2)(x + 3) = 0" /> jest równoważne:
      </p>
      <BlockMath math="\sqrt{3} = 0 \quad \text{lub} \quad x^2 - 2 = 0 \quad \text{lub} \quad x + 3 = 0" />
      <p className="mb-2">
        Ponieważ <InlineMath math="\sqrt{3} \neq 0" />, rozwiązujemy pozostałe równania:
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równań</h2>
      <p className="mb-2">
        1. Rozwiązujemy równanie <InlineMath math="x^2 - 2 = 0" />:
      </p>
      <BlockMath math="x^2 = 2 \quad \Rightarrow \quad x = \sqrt{2} \quad \text{lub} \quad x = -\sqrt{2}" />
      <p className="mb-2">
        2. Rozwiązujemy równanie <InlineMath math="x + 3 = 0" />:
      </p>
      <BlockMath math="x = -3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Jednym z rozwiązań równania jest liczba <InlineMath math="-3" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution20;