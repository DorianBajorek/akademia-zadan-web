import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dla ciągu arytmetycznego <InlineMath math="(a_n)" />, określonego dla <InlineMath math="n \geq 1" />, jest spełniony warunek <InlineMath math="a_4 + a_5 + a_6 = 12" />. Wtedy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="a_5 = 4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="a_5 = 3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="a_5 = 6" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="a_5 = 5" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wykorzystanie własności ciągu arytmetycznego</h2>
      <p className="mb-2">
        W ciągu arytmetycznym wyrazy spełniają zależność:
      </p>
      <BlockMath math="a_n = a_1 + (n-1)r" />
      <p className="mb-2">
        gdzie <InlineMath math="a_1" /> to pierwszy wyraz, a <InlineMath math="r" /> to różnica ciągu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyrażenie wyrazów <InlineMath math="a_4" />, <InlineMath math="a_5" /> i <InlineMath math="a_6" /></h2>
      <p className="mb-2">
        Wyrażamy <InlineMath math="a_4" />, <InlineMath math="a_5" /> i <InlineMath math="a_6" /> za pomocą <InlineMath math="a_1" /> i <InlineMath math="r" />:
      </p>
      <BlockMath math="a_4 = a_1 + 3r" />
      <BlockMath math="a_5 = a_1 + 4r" />
      <BlockMath math="a_6 = a_1 + 5r" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Zastosowanie warunku z zadania</h2>
      <p className="mb-2">
        Z warunku <InlineMath math="a_4 + a_5 + a_6 = 12" /> mamy:
      </p>
      <BlockMath math="(a_1 + 3r) + (a_1 + 4r) + (a_1 + 5r) = 12" />
      <p className="mb-2">
        Upraszczamy:
      </p>
      <BlockMath math="3a_1 + 12r = 12" />
      <p className="mb-2">
        Dzielimy obie strony przez 3:
      </p>
      <BlockMath math="a_1 + 4r = 4" />
      <p className="mb-2">
        Zauważmy, że <InlineMath math="a_5 = a_1 + 4r" />, zatem:
      </p>
      <BlockMath math="a_5 = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="a_5" /> wynosi <InlineMath math="4" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;