import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="(2\sqrt{8} - 3\sqrt{2})^2" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="26" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="14" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Uproszczenie wyrażenia wewnątrz nawiasu
      </h2>
      <p className="mb-2">
        Najpierw upraszczamy <InlineMath math="\sqrt{8}" />:
      </p>
      <BlockMath math="\sqrt{8} = 2\sqrt{2}" />
      <p className="mb-2">Podstawiamy do wyrażenia:</p>
      <BlockMath math="2\sqrt{8} = 2 \cdot 2\sqrt{2} = 4\sqrt{2}" />
      <p className="mb-2">Teraz upraszczamy całe wyrażenie wewnątrz nawiasu:</p>
      <BlockMath math="2\sqrt{8} - 3\sqrt{2} = 4\sqrt{2} - 3\sqrt{2} = \sqrt{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podniesienie do kwadratu</h2>
      <p className="mb-2">Teraz podnosimy uproszczone wyrażenie do kwadratu:</p>
      <BlockMath math="(\sqrt{2})^2 = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="(2\sqrt{8} - 3\sqrt{2})^2" /> jest równa <InlineMath math="2" />{' '}
        (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
