import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution43 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wszystkie wyrazy nieskończonego ciągu geometrycznego <InlineMath math="(a_n)" />, określonego dla każdej liczby naturalnej <InlineMath math="n \geq 1" />, są dodatnie oraz <InlineMath math="a_5 = 4a_3" />. Wtedy iloraz tego ciągu jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="q = 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="q = \frac{1}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="q = \sqrt{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="q = \frac{\sqrt{2}}{2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wzór na n-ty wyraz ciągu geometrycznego</h2>
      <p className="mb-2">
        N-ty wyraz ciągu geometrycznego wyraża się wzorem:
      </p>
      <BlockMath math="a_n = a_1 \cdot q^{n-1}" />
      <p className="mb-2">
        Gdzie:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li><InlineMath math="a_1" /> to pierwszy wyraz ciągu,</li>
        <li><InlineMath math="q" /> to iloraz ciągu.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zapisanie równania <InlineMath math="a_5 = 4a_3" /></h2>
      <p className="mb-2">
        Korzystając ze wzoru na n-ty wyraz, zapisujemy:
      </p>
      <BlockMath math="a_5 = a_1 \cdot q^{4}" />
      <BlockMath math="a_3 = a_1 \cdot q^{2}" />
      <p className="mb-2">
        Z warunku <InlineMath math="a_5 = 4a_3" /> otrzymujemy:
      </p>
      <BlockMath math="a_1 \cdot q^{4} = 4 \cdot a_1 \cdot q^{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie równania</h2>
      <p className="mb-2">
        Dzielimy obie strony równania przez <InlineMath math="a_1 \cdot q^{2}" /> (ponieważ <InlineMath math="a_1 \neq 0" /> i <InlineMath math="q \neq 0" />):
      </p>
      <BlockMath math="q^{2} = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="q^{2} = 4" />
      <p className="mb-2">
        Stąd:
      </p>
      <BlockMath math="q = 2 \quad \text{lub} \quad q = -2" />
      <p className="mb-2">
        Ponieważ wszystkie wyrazy ciągu są dodatnie, iloraz <InlineMath math="q" /> musi być dodatni. Zatem:
      </p>
      <BlockMath math="q = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Iloraz ciągu jest równy <InlineMath math="2" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution43;