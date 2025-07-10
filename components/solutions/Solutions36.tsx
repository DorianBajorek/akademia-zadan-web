import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution36 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="3^{2+\frac{1}{4}}" /> jest równa:
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="3^2 \cdot \sqrt[4]{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\sqrt[3]{3^3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="3^2 + \sqrt[3]{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="3^2 + \sqrt[3]{3^4}" />
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozłożenie wykładnika</h2>
      <p className="mb-2">
        Liczbę <InlineMath math="3^{2+\frac{1}{4}}" /> można rozłożyć na iloczyn:
      </p>
      <BlockMath math="3^{2+\frac{1}{4}} = 3^2 \cdot 3^{\frac{1}{4}}" />
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Przekształcenie pierwiastka</h2>
      <p className="mb-2">
        Wyrażenie <InlineMath math="3^{\frac{1}{4}}" /> jest równe pierwiastkowi czwartego stopnia z
        3:
      </p>
      <BlockMath math="3^{\frac{1}{4}} = \sqrt[4]{3}" />
      Mamy więc, że
      <BlockMath math=" 3^{2+\frac{1}{4}} = 3^2 \cdot 3^{\frac{1}{4}} = 3^2 \cdot \sqrt[4]{3}" />
      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawidłowa odpowiedź to <strong>A</strong> (czyli{' '}
        <InlineMath math="3^2 \cdot \sqrt[4]{3}" />
        ).
      </p>
    </div>
  );
};

export default Solution36;
