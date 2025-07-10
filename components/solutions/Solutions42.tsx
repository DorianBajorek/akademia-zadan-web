import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution42 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W ciągu arytmetycznym <InlineMath math="(a_n)" />, określonym dla każdej liczby naturalnej{' '}
        <InlineMath math="n \geq 1" />,
        <InlineMath math="a_5 = -31" /> oraz <InlineMath math="a_{10} = -66" />. Różnica tego ciągu
        jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-7" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-19,4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="7" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="19,4" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyrażenie wyrazów ciągu</h2>
      <p className="mb-2">W ciągu arytmetycznym wyrazy można wyrazić jako:</p>
      <BlockMath math="a_n = a_1 + (n-1)r" />
      <p className="mb-2">
        Gdzie <InlineMath math="a_1" /> to pierwszy wyraz, a <InlineMath math="r" /> to różnica
        ciągu.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Ustalenie równań</h2>
      <p className="mb-2">
        Dla <InlineMath math="a_5 = -31" /> i <InlineMath math="a_{10} = -66" /> otrzymujemy:
      </p>
      <BlockMath math="a_5 = a_1 + 4r = -31" />
      <BlockMath math="a_{10} = a_1 + 9r = -66" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie układu równań</h2>
      <p className="mb-2">Odejmujemy pierwsze równanie od drugiego:</p>
      <BlockMath math="(a_1 + 9r) - (a_1 + 4r) = -66 - (-31)" />
      <BlockMath math="5r = -35" />
      <BlockMath math="r = -7" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Różnica tego ciągu jest równa <InlineMath math="-7" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution42;
