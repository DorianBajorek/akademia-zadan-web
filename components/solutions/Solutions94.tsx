import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Cenę <InlineMath math="x" /> pewnego towaru obniżono o 20% i otrzymano cenę{' '}
        <InlineMath math="y" />. Aby przywrócić cenę <InlineMath math="x" />, nową cenę{' '}
        <InlineMath math="y" /> należy podnieść o:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> 25%
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> 20%
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> 15%
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> 12%
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie ceny po obniżce</h2>
      <p className="mb-2">
        Cenę <InlineMath math="x" /> obniżono o 20%, więc nowa cena <InlineMath math="y" /> wynosi:
      </p>
      <BlockMath math="y = x - 0.20x = 0.80x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Obliczenie wymaganego podwyższenia ceny
      </h2>
      <p className="mb-2">
        Aby przywrócić cenę <InlineMath math="x" />, musimy podnieść cenę <InlineMath math="y" /> o
        pewien procent. Oznaczmy ten procent jako <InlineMath math="p" />. Wtedy:
      </p>
      <BlockMath math="y \cdot (1 + \frac{p}{100}) = x" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="y = 0.80x" />:
      </p>
      <BlockMath math="0.80x \cdot (1 + \frac{p}{100}) = x" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="0.80x" />:
      </p>
      <BlockMath math="1 + \frac{p}{100} = \frac{x}{0.80x} = \frac{1}{0.80} = 1.25" />
      <p className="mb-2">Odejmujemy 1 od obu stron:</p>
      <BlockMath math="\frac{p}{100} = 0.25" />
      <p className="mb-2">Mnożymy przez 100:</p>
      <BlockMath math="p = 25" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Aby przywrócić cenę <InlineMath math="x" />, nową cenę <InlineMath math="y" /> należy
        podnieść o <InlineMath math="25\%" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
