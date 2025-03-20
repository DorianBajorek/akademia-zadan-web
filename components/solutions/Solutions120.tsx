import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba naturalna <InlineMath math="n = 2^{14} \cdot 5^{15}" /> w zapisie dziesiętnym ma:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="14" /> cyfr</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="15" /> cyfr</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="16" /> cyfr</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="30" /> cyfr</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Uproszczenie liczby <InlineMath math="n" /></h2>
      <p className="mb-2">
        Liczba <InlineMath math="n = 2^{14} \cdot 5^{15}" /> może zostać uproszczona przez wyciągnięcie wspólnych czynników:
      </p>
      <BlockMath math="n = 2^{14} \cdot 5^{14} \cdot 5^{1} = (2 \cdot 5)^{14} \cdot 5 = 10^{14} \cdot 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zapisanie liczby w postaci dziesiętnej</h2>
      <p className="mb-2">
        Liczba <InlineMath math="10^{14}" /> to jedynka i 14 zer. Mnożąc ją przez 5, otrzymujemy:
      </p>
      <BlockMath math="10^{14} \cdot 5 = 5 \cdot 10^{14}" />
      <p className="mb-2">
        Jest to liczba <InlineMath math="5" />, po której następuje 14 zer.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie liczby cyfr</h2>
      <p className="mb-2">
        Liczba <InlineMath math="5 \cdot 10^{14}" /> ma:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>1 cyfrę (5),</li>
        <li>14 cyfr (zera).</li>
      </ul>
      <p className="mb-2">
        W sumie liczba ma <InlineMath math="1 + 14 = 15" /> cyfr.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="n" /> ma <InlineMath math="15" /> cyfr (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;