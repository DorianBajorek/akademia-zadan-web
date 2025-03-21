import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest ciąg <InlineMath math="(a_n)" /> określony wzorem <InlineMath math="a_n = \frac{5 - 2n}{6}" /> dla <InlineMath math="n \geq 1" />. Ciąg ten jest:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> arytmetyczny i jego różnica jest równa <InlineMath math="r = -\frac{1}{3}" />.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> arytmetyczny i jego różnica jest równa <InlineMath math="r = -2" />.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> geometryczny i jego iloraz jest równy <InlineMath math="q = -\frac{1}{3}" />.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> geometryczny i jego iloraz jest równy <InlineMath math="q = \frac{5}{6}" />.</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Sprawdzenie, czy ciąg jest arytmetyczny</h2>
      <p className="mb-2">
        Ciąg jest arytmetyczny, jeśli różnica między kolejnymi wyrazami jest stała. Obliczmy różnicę <InlineMath math="r = a_{n+1} - a_n" />:
      </p>
      <BlockMath math="a_n = \frac{5 - 2n}{6}" />
      <BlockMath math="a_{n+1} = \frac{5 - 2(n+1)}{6} = \frac{5 - 2n - 2}{6} = \frac{3 - 2n}{6}" />
      <p className="mb-2">
        Różnica <InlineMath math="r" /> wynosi:
      </p>
      <BlockMath math="r = a_{n+1} - a_n = \frac{3 - 2n}{6} - \frac{5 - 2n}{6} = \frac{3 - 2n - 5 + 2n}{6} = \frac{-2}{6} = -\frac{1}{3}" />
      <p className="mb-2">
        Różnica <InlineMath math="r" /> jest stała i wynosi <InlineMath math="-\frac{1}{3}" />, więc ciąg jest arytmetyczny.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprawdzenie, czy ciąg jest geometryczny</h2>
      <p className="mb-2">
        Ciąg jest geometryczny, jeśli iloraz między kolejnymi wyrazami jest stały. Obliczmy iloraz <InlineMath math="q = \frac{a_{n+1}}{a_n}" />:
      </p>
      <BlockMath math="q = \frac{a_{n+1}}{a_n} = \frac{\frac{3 - 2n}{6}}{\frac{5 - 2n}{6}} = \frac{3 - 2n}{5 - 2n}" />
      <p className="mb-2">
        Iloraz <InlineMath math="q" /> nie jest stały (zależy od <InlineMath math="n" />), więc ciąg nie jest geometryczny.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Ciąg jest arytmetyczny, a jego różnica wynosi <InlineMath math="r = -\frac{1}{3}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;