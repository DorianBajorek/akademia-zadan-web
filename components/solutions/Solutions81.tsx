import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Pole pewnego trójkąta równobocznego jest równe <InlineMath math="\frac{4\sqrt{3}}{9}" />.
        Obwód tego trójkąta jest równy
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{4}{3}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{2}{3}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wzór na pole trójkąta równobocznego
      </h2>
      <p className="mb-2">
        Pole trójkąta równobocznego o boku <InlineMath math="a" /> wyraża się wzorem:
      </p>
      <BlockMath math="P = \frac{a^2\sqrt{3}}{4}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie długości boku</h2>
      <p className="mb-2">Podstawiamy dane pole:</p>
      <BlockMath math="\frac{a^2\sqrt{3}}{4} = \frac{4\sqrt{3}}{9}" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="a^2 = \frac{4\sqrt{3}}{9} \cdot \frac{4}{\sqrt{3}} = \frac{16}{9}" />
      <BlockMath math="a = \sqrt{\frac{16}{9}} = \frac{4}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie obwodu</h2>
      <p className="mb-2">Obwód trójkąta równobocznego:</p>
      <BlockMath math="L = 3a = 3 \cdot \frac{4}{3} = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Obwód trójkąta wynosi <InlineMath math="4" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;
