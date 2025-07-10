import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\sqrt[3]{54} - \sqrt[3]{2}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\sqrt[3]{52}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="2\sqrt[3]{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozłożenie pierwiastka</h2>
      <p className="mb-2">
        Rozłóżmy <InlineMath math="\sqrt[3]{54}" /> na iloczyn pierwiastków:
      </p>
      <BlockMath math="\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = \sqrt[3]{27} \cdot \sqrt[3]{2}" />
      <p className="mb-2">
        Ponieważ <InlineMath math="\sqrt[3]{27} = 3" />, otrzymujemy:
      </p>
      <BlockMath math="\sqrt[3]{54} = 3 \cdot \sqrt[3]{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Podstawiamy uproszczoną wartość <InlineMath math="\sqrt[3]{54}" /> do wyrażenia:
      </p>
      <BlockMath math="\sqrt[3]{54} - \sqrt[3]{2} = 3 \cdot \sqrt[3]{2} - \sqrt[3]{2}" />
      <p className="mb-2">
        Wyłączamy <InlineMath math="\sqrt[3]{2}" /> przed nawias:
      </p>
      <BlockMath math="\sqrt[3]{2} \cdot (3 - 1) = 2 \cdot \sqrt[3]{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">Po uproszczeniu otrzymujemy:</p>
      <BlockMath math="\sqrt[3]{54} - \sqrt[3]{2} = 2 \cdot \sqrt[3]{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\sqrt[3]{54} - \sqrt[3]{2}" /> jest równa{' '}
        <InlineMath math="2\sqrt[3]{2}" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
