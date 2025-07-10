import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja <InlineMath math="f" /> jest określona wzorem{' '}
        <InlineMath math="f(x) = 4^{-x} + 1" /> dla każdej liczby rzeczywistej{' '}
        <InlineMath math="x" />. Liczba <InlineMath math="f\left(\frac{1}{2}\right)" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{3}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="17" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zrozumienie funkcji</h2>
      <p className="mb-2">Mamy funkcję wykładniczą:</p>
      <BlockMath math="f(x) = 4^{-x} + 1" />
      <p className="mb-2">
        Chcemy obliczyć wartość funkcji dla <InlineMath math="x = \frac{1}{2}" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie wartości</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = \frac{1}{2}" /> do wzoru:
      </p>
      <BlockMath math="f\left(\frac{1}{2}\right) = 4^{-\frac{1}{2}} + 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie potęgi</h2>
      <p className="mb-2">Korzystając z własności potęg:</p>
      <BlockMath math="4^{-\frac{1}{2}} = \frac{1}{4^{\frac{1}{2}}} = \frac{1}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie końcowej wartości</h2>
      <p className="mb-2">Dodajemy 1 do otrzymanego wyniku:</p>
      <BlockMath math="f\left(\frac{1}{2}\right) = \frac{1}{2} + 1 = \frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Weryfikacja</h2>
      <p className="mb-2">Sprawdźmy alternatywne podejście - zamiana podstawy potęgi:</p>
      <BlockMath math="4^{-x} = (2^2)^{-x} = 2^{-2x}" />
      <BlockMath math="f\left(\frac{1}{2}\right) = 2^{-1} + 1 = \frac{1}{2} + 1 = \frac{3}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość funkcji wynosi <InlineMath math="\frac{3}{2}" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
