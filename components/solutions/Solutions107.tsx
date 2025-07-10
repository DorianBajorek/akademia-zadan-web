import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W ciągu arytmetycznym <InlineMath math="(a_n)" />, określonym dla{' '}
        <InlineMath math="n \geq 1" />, czwarty wyraz jest równy 3, a różnica tego ciągu jest równa
        5. Suma <InlineMath math="a_1 + a_2 + a_3 + a_4" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-42" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-36" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="-18" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="6" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie pierwszego wyrazu ciągu
      </h2>
      <p className="mb-2">
        W ciągu arytmetycznym różnica <InlineMath math="r" /> jest stała. Mamy:
      </p>
      <BlockMath math="a_4 = a_1 + 3r" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="a_4 = 3" /> i <InlineMath math="r = 5" />:
      </p>
      <BlockMath math="3 = a_1 + 3 \cdot 5" />
      <BlockMath math="3 = a_1 + 15" />
      <BlockMath math="a_1 = 3 - 15 = -12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wyznaczenie kolejnych wyrazów ciągu
      </h2>
      <p className="mb-2">Obliczamy kolejne wyrazy ciągu:</p>
      <BlockMath math="a_2 = a_1 + r = -12 + 5 = -7" />
      <BlockMath math="a_3 = a_2 + r = -7 + 5 = -2" />
      <BlockMath math="a_4 = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie sumy</h2>
      <p className="mb-2">
        Suma <InlineMath math="a_1 + a_2 + a_3 + a_4" /> to:
      </p>
      <BlockMath math="(-12) + (-7) + (-2) + 3 = -18" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Suma <InlineMath math="a_1 + a_2 + a_3 + a_4" /> jest równa <InlineMath math="-18" />{' '}
        (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
