import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równanie <InlineMath math="\frac{x^2+2x}{x^2-4}=0" />:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> ma trzy rozwiązania: <InlineMath math="x = -2" />,{' '}
            <InlineMath math="x = 0" />, <InlineMath math="x = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> ma dwa rozwiązania: <InlineMath math="x = 0" />,{' '}
            <InlineMath math="x = -2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> ma dwa rozwiązania: <InlineMath math="x = -2" />,{' '}
            <InlineMath math="x = 2" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> ma jedno rozwiązanie: <InlineMath math="x = 0" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Wyznaczenie dziedziny równania</h2>
      <p className="mb-2">Równanie ma sens, gdy mianownik nie jest zerem. Zatem:</p>
      <BlockMath math="x^2 - 4 \neq 0" />
      <p className="mb-2">Rozwiązujemy nierówność:</p>
      <BlockMath math="x^2 - 4 \neq 0 \Rightarrow x \neq 2 \quad \text{oraz} \quad x \neq -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Równanie <InlineMath math="\frac{x^2+2x}{x^2-4}=0" /> jest spełnione, gdy licznik jest równy
        zero, a mianownik nie jest zerem. Zatem:
      </p>
      <BlockMath math="x^2 + 2x = 0" />
      <p className="mb-2">Rozkładamy licznik na czynniki:</p>
      <BlockMath math="x(x + 2) = 0" />
      <p className="mb-2">Rozwiązania to:</p>
      <BlockMath math="x = 0 \quad \text{lub} \quad x = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Sprawdzenie dziedziny</h2>
      <p className="mb-2">
        Z dziedziny wynika, że <InlineMath math="x \neq -2" /> oraz <InlineMath math="x \neq 2" />.
        Zatem jedynym rozwiązaniem jest:
      </p>
      <BlockMath math="x = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie ma jedno rozwiązanie: <InlineMath math="x = 0" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
