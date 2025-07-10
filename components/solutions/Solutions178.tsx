import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równanie <InlineMath math="x(x^2 - 4)(x^2 + 4) = 0" /> z niewiadomą <InlineMath math="x" />:
      </div>
      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> nie ma rozwiązań w zbiorze liczb rzeczywistych.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> ma dokładnie dwa rozwiązania w zbiorze liczb
            rzeczywistych.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> ma dokładnie trzy rozwiązania w zbiorze liczb
            rzeczywistych.
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> ma dokładnie pięć rozwiązań w zbiorze liczb rzeczywistych.
          </p>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozłożenie równania na czynniki</h2>
      <p className="mb-2">
        Równanie <InlineMath math="x(x^2 - 4)(x^2 + 4) = 0" /> można rozłożyć na czynniki:
      </p>
      <BlockMath math="x(x^2 - 4)(x^2 + 4) = 0" />
      <p className="mb-2">Zauważmy, że:</p>
      <BlockMath math="x^2 - 4 = (x - 2)(x + 2)" />
      <BlockMath math="x^2 + 4" /> nie ma pierwiastków rzeczywistych, ponieważ{' '}
      <InlineMath math="x^2 + 4 > 0" /> dla każdego <InlineMath math="x" />.
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Znalezienie rozwiązań</h2>
      <p className="mb-2">Równanie jest równoważne:</p>
      <BlockMath math="x(x - 2)(x + 2) = 0" />
      <p className="mb-2">
        Rozwiązania to wartości <InlineMath math="x" />, dla których którykolwiek z czynników jest
        równy zero:
      </p>
      <BlockMath math="x = 0 \quad \text{lub} \quad x - 2 = 0 \quad \text{lub} \quad x + 2 = 0" />
      <p className="mb-2">Zatem:</p>
      <BlockMath math="x = 0 \quad \text{lub} \quad x = 2 \quad \text{lub} \quad x = -2" />
      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">
        Równanie ma dokładnie trzy rozwiązania rzeczywiste: <InlineMath math="x = -2" />,{' '}
        <InlineMath math="x = 0" /> oraz <InlineMath math="x = 2" />.
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie ma dokładnie trzy rozwiązania w zbiorze liczb rzeczywistych (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
