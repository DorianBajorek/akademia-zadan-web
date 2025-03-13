import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Sinus kąta ostrego <InlineMath math="\alpha" /> jest równy <InlineMath math="\frac{4}{5}" />. Wtedy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\cos \alpha = \frac{5}{4}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\cos \alpha = \frac{1}{5}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="\cos \alpha = \frac{9}{25}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\cos \alpha = \frac{3}{5}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zastosowanie tożsamości trygonometrycznej</h2>
      <p className="mb-2">
        Z jedynki trygonometrycznej wiemy, że:
      </p>
      <BlockMath math="\sin^2 \alpha + \cos^2 \alpha = 1" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="\sin \alpha = \frac{4}{5}" />:
      </p>
      <BlockMath math="\left(\frac{4}{5}\right)^2 + \cos^2 \alpha = 1" />
      <BlockMath math="\frac{16}{25} + \cos^2 \alpha = 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie <InlineMath math="\cos^2 \alpha" /></h2>
      <p className="mb-2">
        Odejmujemy <InlineMath math="\frac{16}{25}" /> od obu stron:
      </p>
      <BlockMath math="\cos^2 \alpha = 1 - \frac{16}{25} = \frac{9}{25}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie <InlineMath math="\cos \alpha" /></h2>
      <p className="mb-2">
        Ponieważ <InlineMath math="\alpha" /> jest kątem ostrym, <InlineMath math="\cos \alpha" /> jest dodatni (gdyby kąt mógłby być rozwartwy wtedy mieliśbyśmy również ujemne rozwiązanie):
      </p>
      <BlockMath math="\cos \alpha = \sqrt{\frac{9}{25}} = \frac{3}{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        <InlineMath math="\cos \alpha = \frac{3}{5}" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;