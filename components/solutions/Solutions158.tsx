import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Dany jest ciąg geometryczny <InlineMath math="(a_n)" />, określony dla{' '}
        <InlineMath math="n \geq 1" />, w którym <InlineMath math="a_1 = \sqrt{2}" />,{' '}
        <InlineMath math="a_2 = 2\sqrt{2}" />, <InlineMath math="a_3 = 4\sqrt{2}" />. Wzór na{' '}
        <InlineMath math="n" />
        -ty wyraz tego ciągu ma postać:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="a_n = (\sqrt{2})^n" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="a_n = \frac{2^n}{\sqrt{2}}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong>{' '}
            <InlineMath math="a_n = \left(\frac{\sqrt{2}}{2}\right)^n" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="a_n = \frac{(\sqrt{2})^{n}}{2}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie ilorazu ciągu geometrycznego
      </h2>
      <p className="mb-2">
        Iloraz <InlineMath math="q" /> ciągu geometrycznego obliczamy jako stosunek dwóch kolejnych
        wyrazów:
      </p>
      <BlockMath math="q = \frac{a_2}{a_1} = \frac{2\sqrt{2}}{\sqrt{2}} = 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wzór na <InlineMath math="n" />
        -ty wyraz ciągu geometrycznego
      </h2>
      <p className="mb-2">
        Wzór na <InlineMath math="n" />
        -ty wyraz ciągu geometrycznego to:
      </p>
      <BlockMath math="a_n = a_1 \cdot q^{n-1}" />
      <p className="mb-2">
        Podstawiamy <InlineMath math="a_1 = \sqrt{2}" /> oraz <InlineMath math="q = 2" />:
      </p>
      <BlockMath math="a_n = \sqrt{2} \cdot 2^{n-1}" />
      <p className="mb-2">Możemy to uprościć:</p>
      <BlockMath math="a_n = \sqrt{2} \cdot \frac{2^n}{2} = \frac{2^n}{\sqrt{2}}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wzór na <InlineMath math="n" />
        -ty wyraz ciągu to <InlineMath math="a_n = \frac{2^n}{\sqrt{2}}" /> (odpowiedź{' '}
        <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
