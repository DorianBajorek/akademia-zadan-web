import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution39 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Miejscem zerowym funkcji liniowej <InlineMath math="f" /> określonej wzorem:
        <BlockMath math="f(x) = -\frac{1}{3}(x + 3) + 5" />
        jest liczba:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="-3" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{9}{2}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="5" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="12" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Znalezienie miejsca zerowego</h2>
      <p className="mb-2">
        Miejsce zerowe funkcji <InlineMath math="f" /> to wartość <InlineMath math="x" />, dla
        której <InlineMath math="f(x) = 0" />. Rozwiązujemy równanie:
      </p>
      <BlockMath math="-\frac{1}{3}(x + 3) + 5 = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">Najpier przenosimy liczbę 5 ze strony prawej na lewą:</p>
      <BlockMath math="-\frac{1}{3}(x + 3) = -5" />
      <p className="mb-2">
        Następnie mnożymy obie strony przez <InlineMath math="-3" />, aby pozbyć się ułamka:
      </p>
      <BlockMath math="x + 3 = 15" />
      <p className="mb-2">
        Przenosimy liczbę 3 ze strony lewej równania na prawą i otrzymujemy
        <InlineMath math="x" />:
      </p>
      <BlockMath math="x = 12" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Miejscem zerowym funkcji <InlineMath math="f" /> jest liczba <InlineMath math="12" />{' '}
        (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution39;
