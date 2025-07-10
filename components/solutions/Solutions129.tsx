import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W ciągu arytmetycznym <InlineMath math="(a_n)" />, określonym dla{' '}
        <InlineMath math="n \geq 1" />, dane są dwa wyrazy: <InlineMath math="a_1 = 7" /> i{' '}
        <InlineMath math="a_8 = -49" />. Suma ośmiu początkowych wyrazów tego ciągu jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-168" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-189" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="21" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="42" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Obliczenie sumy ośmiu początkowych wyrazów
      </h2>
      <p className="mb-2">
        Suma <InlineMath math="S_n" /> pierwszych <InlineMath math="n" /> wyrazów ciągu
        arytmetycznego jest dana wzorem:
      </p>
      <BlockMath math="S_n = \frac{n}{2} (a_1 + a_n)" />
      <p className="mb-2">
        Dla <InlineMath math="n = 8" />, <InlineMath math="a_1 = 7" /> i{' '}
        <InlineMath math="a_8 = -49" />:
      </p>
      <BlockMath math="S_8 = \frac{8}{2} (7 + (-49))" />
      <BlockMath math="S_8 = 4 \cdot (-42)" />
      <BlockMath math="S_8 = -168" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Suma ośmiu początkowych wyrazów tego ciągu jest równa <InlineMath math="-168" /> (odpowiedź{' '}
        <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
