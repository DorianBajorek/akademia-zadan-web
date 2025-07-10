import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dodatnie liczby <InlineMath math="x" /> i <InlineMath math="y" /> spełniają warunek{' '}
        <InlineMath math="3x = 4y" />. Wynika stąd, że wartość wyrażenia
        <BlockMath math="\frac{x^2 + y^2}{x \cdot y}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{3}{4}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{4}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{25}{12}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{24}{13}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyrażenie jednej zmiennej przez drugą
      </h2>
      <p className="mb-2">
        Z warunku <InlineMath math="3x = 4y" /> możemy wyrazić <InlineMath math="x" /> przez{' '}
        <InlineMath math="y" />:
      </p>
      <BlockMath math="x = \frac{4}{3}y" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie do wyrażenia</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = \frac{4}{3}y" /> do wyrażenia{' '}
        <InlineMath math="\frac{x^2 + y^2}{x \cdot y}" />:
      </p>
      <BlockMath math="\frac{\left(\frac{4}{3}y\right)^2 + y^2}{\left(\frac{4}{3}y\right) \cdot y}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie wyrażenia</h2>
      <p className="mb-2">Upraszczamy wyrażenie:</p>
      <BlockMath math="\frac{\frac{16}{9}y^2 + y^2}{\frac{4}{3}y^2} = \frac{\frac{25}{9}y^2}{\frac{4}{3}y^2}" />
      <BlockMath math="= \frac{25}{9} \div \frac{4}{3} = \frac{25}{9} \cdot \frac{3}{4} = \frac{25}{12}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość wyrażenia <InlineMath math="\frac{x^2 + y^2}{x \cdot y}" /> jest równa{' '}
        <InlineMath math="\frac{25}{12}" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
