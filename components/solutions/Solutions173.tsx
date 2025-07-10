import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="2 \log_2 3 - 2 \log_2 5" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\log_2 \frac{9}{25}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\log_2 \frac{3}{5}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\log_2 \frac{9}{5}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\log_2 \frac{6}{25}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wykorzystanie własności logarytmów
      </h2>
      <p className="mb-2">
        Korzystamy z własności logarytmów, która mówi, że{' '}
        <InlineMath math="a \log_b c = \log_b c^a" />. Zastosujemy tę własność do obu składników
        wyrażenia:
      </p>
      <BlockMath math="2 \log_2 3 = \log_2 3^2 = \log_2 9" />
      <BlockMath math="2 \log_2 5 = \log_2 5^2 = \log_2 25" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Uproszczenie wyrażenia</h2>
      <p className="mb-2">Teraz podstawiamy uproszczone wartości do wyrażenia:</p>
      <BlockMath math="2 \log_2 3 - 2 \log_2 5 = \log_2 9 - \log_2 25" />
      <p className="mb-2">
        Korzystamy z własności logarytmów, która mówi, że{' '}
        <InlineMath math="\log_b a - \log_b c = \log_b \frac{a}{c}" />:
      </p>
      <BlockMath math="\log_2 9 - \log_2 25 = \log_2 \frac{9}{25}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">Po uproszczeniu otrzymujemy:</p>
      <BlockMath math="2 \log_2 3 - 2 \log_2 5 = \log_2 \frac{9}{25}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="2 \log_2 3 - 2 \log_2 5" /> jest równa{' '}
        <InlineMath math="\log_2 \frac{9}{25}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
