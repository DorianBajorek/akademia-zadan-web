import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution37 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności <InlineMath math="\frac{2}{5} - \frac{x}{3} > \frac{x}{5}" /> jest przedział:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-\infty, 0)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="(0, +\infty)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="(-\infty, \frac{3}{4})" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="(\frac{3}{4}, +\infty)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Przeniesienie wszystkich wyrazów na jedną stronę</h2>
      <p className="mb-2">
        Rozpoczynamy od przeniesienia wszystkich wyrazów na lewą stronę nierówności:
      </p>
      <BlockMath math="\frac{2}{5} - \frac{x}{3} - \frac{x}{5} > 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprowadzenie do wspólnego mianownika</h2>
      <p className="mb-2">
        Sprowadzamy wyrazy do wspólnego mianownika, którym jest 15:
      </p>
      <BlockMath math="\frac{6}{15} - \frac{5x}{15} - \frac{3x}{15} > 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Połączenie wyrazów</h2>
      <p className="mb-2">
        Łączymy wyrazy:
      </p>
      <BlockMath math="\frac{6 - 5x - 3x}{15} > 0" />
      <BlockMath math="\frac{6 - 8x}{15} > 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Rozwiązanie nierówności</h2>
      <p className="mb-2">
        Mnożymy obie strony nierówności przez 15 (liczba dodatnia, nie zmienia kierunku nierówności):
      </p>
      <BlockMath math="6 - 8x > 0" />
      <p className="mb-2">
        Rozwiązujemy nierówność:
      </p>
      <BlockMath math="-8x > -6" />
      <BlockMath math="x < \frac{6}{8}" />
      <BlockMath math="x < \frac{3}{4}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiorem wszystkich rozwiązań nierówności jest przedział <InlineMath math="(-\infty, \frac{3}{4})" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution37;