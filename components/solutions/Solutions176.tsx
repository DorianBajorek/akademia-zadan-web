import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Do zbioru rozwiązań nierówności <InlineMath math="(x^4 + 1)(2 - x) > 0" /> nie należy
        liczba:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="-1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="3" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Analiza wyrażenia</h2>
      <p className="mb-2">Rozważmy nierówność:</p>
      <BlockMath math="(x^4 + 1)(2 - x) > 0" />
      <p className="mb-2">
        Zauważmy, że <InlineMath math="x^4 + 1" /> jest zawsze dodatnie dla każdej liczby
        rzeczywistej <InlineMath math="x" />, ponieważ <InlineMath math="x^4 \geq 0" />, a dodanie 1
        sprawia, że całe wyrażenie jest większe od 0.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Uproszczenie nierówności</h2>
      <p className="mb-2">
        Ponieważ <InlineMath math="x^4 + 1 > 0" /> dla każdego <InlineMath math="x" />, nierówność
        sprowadza się do:
      </p>
      <BlockMath math="2 - x > 0" />
      <p className="mb-2">Rozwiązujemy tę nierówność:</p>
      <BlockMath math="2 - x > 0 \implies x < 2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Zbiór rozwiązań</h2>
      <p className="mb-2">
        Zbiór rozwiązań nierówności to wszystkie liczby rzeczywiste mniejsze od 2:
      </p>
      <BlockMath math="x \in (-\infty, 2)" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Sprawdzenie podanych liczb</h2>
      <p className="mb-2">Sprawdzamy, które z podanych liczb nie należą do zbioru rozwiązań:</p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <InlineMath math="x = -3" />: <InlineMath math="-3 < 2" /> — należy do zbioru rozwiązań.
        </li>
        <li>
          <InlineMath math="x = -1" />: <InlineMath math="-1 < 2" /> — należy do zbioru rozwiązań.
        </li>
        <li>
          <InlineMath math="x = 1" />: <InlineMath math="1 < 2" /> — należy do zbioru rozwiązań.
        </li>
        <li>
          <InlineMath math="x = 3" />: <InlineMath math="3 > 2" /> — nie należy do zbioru rozwiązań.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Do zbioru rozwiązań nierówności nie należy liczba <InlineMath math="3" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
