import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\log_{\sqrt{2}} 2" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\sqrt{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{1}{2}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Zapisanie logarytmu w postaci potęgowej
      </h2>
      <p className="mb-2">
        Logarytm <InlineMath math="\log_{\sqrt{2}} 2" /> oznacza, że szukamy wykładnika{' '}
        <InlineMath math="x" />, dla którego:
      </p>
      <BlockMath math="(\sqrt{2})^x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Przekształcenie równania</h2>
      <p className="mb-2">
        Zauważmy, że <InlineMath math="\sqrt{2} = 2^{\frac{1}{2}}" />. Podstawiając to do równania:
      </p>
      <BlockMath math="(2^{\frac{1}{2}})^x = 2" />
      <p className="mb-2">Korzystając z własności potęg:</p>
      <BlockMath math="2^{\frac{x}{2}} = 2^1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Porównanie wykładników</h2>
      <p className="mb-2">Ponieważ podstawy są takie same, możemy porównać wykładniki:</p>
      <BlockMath math="\frac{x}{2} = 1" />
      <p className="mb-2">Rozwiązując to równanie:</p>
      <BlockMath math="x = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\log_{\sqrt{2}} 2" /> jest równa <InlineMath math="2" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
