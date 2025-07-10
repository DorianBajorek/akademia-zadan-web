import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution189 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Na płaszczyźnie z układem współrzędnych proste <InlineMath math="k" /> i{' '}
        <InlineMath math="l" /> przecinają się pod kątem prostym w punkcie{' '}
        <InlineMath math="A = (-2, 4)" />. Prosta <InlineMath math="k" /> jest określona równaniem{' '}
        <InlineMath math="y = -\frac{1}{4}x + \frac{7}{2}" />. Zatem prostą <InlineMath math="l" />{' '}
        opisuje równanie:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="y = \frac{1}{4}x + \frac{7}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="y = -\frac{1}{4}x - \frac{7}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="y = 4x - 12" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="y = 4x + 12" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Wyznaczenie współczynnika kierunkowego prostej <InlineMath math="l" />
      </h2>
      <p className="mb-2">
        Proste <InlineMath math="k" /> i <InlineMath math="l" /> są prostopadłe, więc ich
        współczynniki kierunkowe spełniają warunek:
      </p>
      <BlockMath math="a_k \cdot a_l = -1" />
      <p className="mb-2">
        Współczynnik kierunkowy prostej <InlineMath math="k" /> to{' '}
        <InlineMath math="a_k = -\frac{1}{4}" />. Zatem współczynnik kierunkowy prostej{' '}
        <InlineMath math="l" /> wynosi:
      </p>
      <BlockMath math="a_l = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wyznaczenie równania prostej <InlineMath math="l" />
      </h2>
      <p className="mb-2">
        Prosta <InlineMath math="l" /> przechodzi przez punkt <InlineMath math="A = (-2, 4)" /> i ma
        współczynnik kierunkowy <InlineMath math="a_l = 4" />. Równanie prostej można zapisać jako:
      </p>
      <BlockMath math="y = 4x + b" />
      <p className="mb-2">
        Podstawiając współrzędne punktu <InlineMath math="A" /> do równania:
      </p>
      <BlockMath math="4 = 4 \cdot (-2) + b" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="4 = -8 + b \Rightarrow b = 12" />
      <p className="mb-2">
        Zatem równanie prostej <InlineMath math="l" /> to:
      </p>
      <BlockMath math="y = 4x + 12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prostą <InlineMath math="l" /> opisuje równanie <InlineMath math="y = 4x + 12" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution189;
