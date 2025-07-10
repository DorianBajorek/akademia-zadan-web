import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution77 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ciąg arytmetyczny <InlineMath math="(a_n)" /> jest określony dla każdej liczby naturalnej{' '}
        <InlineMath math="n \geq 1" />. Trzeci i piąty wyraz ciągu spełniają warunek{' '}
        <InlineMath math="a_3 + a_5 = 58" />. Wtedy czwarty wyraz tego ciągu jest równy:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="28" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="29" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="33" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="40" />
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

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wyrażenie <InlineMath math="a_3" /> i <InlineMath math="a_5" />
      </h2>
      <p className="mb-2">
        Wyrażamy <InlineMath math="a_3" /> i <InlineMath math="a_5" />:
      </p>
      <BlockMath math="a_3 = a_1 + 2r" />
      <BlockMath math="a_5 = a_1 + 4r" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Ustalenie równania</h2>
      <p className="mb-2">
        Z warunku <InlineMath math="a_3 + a_5 = 58" /> otrzymujemy:
      </p>
      <BlockMath math="(a_1 + 2r) + (a_1 + 4r) = 58" />
      <BlockMath math="2a_1 + 6r = 58" />
      <BlockMath math="a_1 + 3r = 29" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie czwartego wyrazu</h2>
      <p className="mb-2">Czwarty wyraz ciągu to:</p>
      <BlockMath math="a_4 = a_1 + 3r" />
      <p className="mb-2">
        Z poprzedniego równania wiemy, że <InlineMath math="a_1 + 3r = 29" />, więc:
      </p>
      <BlockMath math="a_4 = 29" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Czwarty wyraz tego ciągu jest równy <InlineMath math="29" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution77;
