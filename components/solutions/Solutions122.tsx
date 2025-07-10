import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równość <InlineMath math="\frac{1}{4} + \frac{1}{5} + \frac{1}{a} = 1" /> jest prawdziwa
        dla:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a = \frac{11}{20}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a = \frac{20}{9}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="a = \frac{8}{11}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a = \frac{20}{11}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie sumy ułamków</h2>
      <p className="mb-2">
        Najpierw obliczamy sumę <InlineMath math="\frac{1}{4} + \frac{1}{5}" />:
      </p>
      <BlockMath math="\frac{1}{4} + \frac{1}{5} = \frac{5}{20} + \frac{4}{20} = \frac{9}{20}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wyznaczenie wartości <InlineMath math="\frac{1}{a}" />
      </h2>
      <p className="mb-2">
        Z równania <InlineMath math="\frac{1}{4} + \frac{1}{5} + \frac{1}{a} = 1" /> wynika, że:
      </p>
      <BlockMath math="\frac{9}{20} + \frac{1}{a} = 1" />
      <p className="mb-2">
        Przenosimy <InlineMath math="\frac{9}{20}" /> na prawą stronę:
      </p>
      <BlockMath math="\frac{1}{a} = 1 - \frac{9}{20} = \frac{20}{20} - \frac{9}{20} = \frac{11}{20}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 3: Obliczenie wartości <InlineMath math="a" />
      </h2>
      <p className="mb-2">
        Z równania <InlineMath math="\frac{1}{a} = \frac{11}{20}" /> wynika, że:
      </p>
      <BlockMath math="a = \frac{20}{11}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równość jest prawdziwa dla <InlineMath math="a = \frac{20}{11}" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
