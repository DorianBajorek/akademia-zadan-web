import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja liniowa <InlineMath math="f" /> określona jest wzorem{' '}
        <InlineMath math="f(x) = \frac{1}{3}x - 1" />, dla wszystkich liczb rzeczywistych{' '}
        <InlineMath math="x" />. Wskaż zdanie prawdziwe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> Funkcja <InlineMath math="f" /> jest malejąca i jej wykres
            przecina oś <InlineMath math="Oy" /> w punkcie{' '}
            <InlineMath math="P = (0, \frac{1}{3})" />.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> Funkcja <InlineMath math="f" /> jest malejąca i jej wykres
            przecina oś <InlineMath math="Oy" /> w punkcie <InlineMath math="P = (0, -1)" />.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> Funkcja <InlineMath math="f" /> jest rosnąca i jej wykres
            przecina oś <InlineMath math="Oy" /> w punkcie{' '}
            <InlineMath math="P = (0, \frac{1}{3})" />.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> Funkcja <InlineMath math="f" /> jest rosnąca i jej wykres
            przecina oś <InlineMath math="Oy" /> w punkcie <InlineMath math="P = (0, -1)" />.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Określenie monotoniczności funkcji
      </h2>
      <p className="mb-2">
        Funkcja liniowa <InlineMath math="f(x) = \frac{1}{3}x - 1" /> ma współczynnik kierunkowy{' '}
        <InlineMath math="a = \frac{1}{3}" />. Ponieważ <InlineMath math="a > 0" />, funkcja jest{' '}
        <strong>rosnąca</strong>.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Wyznaczenie punktu przecięcia z osią <InlineMath math="Oy" />
      </h2>
      <p className="mb-2">
        Punkt przecięcia z osią <InlineMath math="Oy" /> występuje, gdy <InlineMath math="x = 0" />.
        Podstawiamy <InlineMath math="x = 0" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(0) = \frac{1}{3} \cdot 0 - 1 = -1" />
      <p className="mb-2">
        Zatem wykres przecina oś <InlineMath math="Oy" /> w punkcie{' '}
        <InlineMath math="P = (0, -1)" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Funkcja <InlineMath math="f" /> jest rosnąca, a jej wykres przecina oś{' '}
        <InlineMath math="Oy" /> w punkcie <InlineMath math="P = (0, -1)" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
