import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\sqrt[3]{\frac{7}{3}} \cdot \sqrt[3]{\frac{81}{56}}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sqrt[2]{\frac{3}{2}}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{3}{2\sqrt[3]{21}}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{3}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{9}{4}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Połączenie pierwiastków</h2>
      <p className="mb-2">
        Korzystamy z własności pierwiastków:{' '}
        <InlineMath math="\sqrt[3]{a} \cdot \sqrt[3]{b} = \sqrt[3]{a \cdot b}" />. Zatem:
      </p>
      <BlockMath math="\sqrt[3]{\frac{7}{3}} \cdot \sqrt[3]{\frac{81}{56}} = \sqrt[3]{\frac{7}{3} \cdot \frac{81}{56}}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Uproszczenie ułamków przed mnożeniem
      </h2>
      <p className="mb-2">Upraszczamy ułamki przed mnożeniem:</p>
      <BlockMath math="\frac{7}{3} \cdot \frac{81}{56} = \frac{7 \cdot 81}{3 \cdot 56}" />
      <p className="mb-2">Zauważmy, że:</p>
      <BlockMath math="81 = 3^4 \quad \text{oraz} \quad 56 = 7 \cdot 8" />
      <p className="mb-2">Podstawiamy:</p>
      <BlockMath math="\frac{7 \cdot 3^4}{3 \cdot 7 \cdot 8} = \frac{3^3}{8} = \frac{27}{8}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie pierwiastka</h2>
      <p className="mb-2">Teraz obliczamy pierwiastek trzeciego stopnia:</p>
      <BlockMath math="\sqrt[3]{\frac{27}{8}} = \frac{\sqrt[3]{27}}{\sqrt[3]{8}} = \frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\sqrt[3]{\frac{7}{3}} \cdot \sqrt[3]{\frac{81}{56}}" /> jest równa{' '}
        <InlineMath math="\frac{3}{2}" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
