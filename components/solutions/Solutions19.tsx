import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution19 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności <InlineMath math="-2(x + 3) \leq \frac{2-x}{3}" />{' '}
        jest przedział:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-\infty, -4]" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="(-\infty, 4]" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="[-4, \infty)" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="[4, \infty)" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie nierówności</h2>
      <p className="mb-2">Rozpoczynamy od rozwiązania nierówności:</p>
      <BlockMath math="-2(x + 3) \leq \frac{2-x}{3}" />
      <p className="mb-2">Najpierw mnożymy obie strony przez 3, aby pozbyć się ułamka:</p>
      <BlockMath math="3 \cdot (-2(x + 3)) \leq 2 - x" />
      <BlockMath math="-6(x + 3) \leq 2 - x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwijanie i upraszczanie</h2>
      <p className="mb-2">Rozwijamy lewą stronę:</p>
      <BlockMath math="-6x - 18 \leq 2 - x" />
      <p className="mb-2">Przenosimy wszystkie wyrazy na jedną stronę:</p>
      <BlockMath math="-6x + x - 18 - 2 \leq 0" />
      <BlockMath math="-5x - 20 \leq 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie dla x</h2>
      <p className="mb-2">Rozwiązujemy nierówność:</p>
      <BlockMath math="-5x \leq 20" />
      <p className="mb-2">
        Dzielimy obie strony przez -5, pamiętając o zmianie kierunku nierówności:
      </p>
      <BlockMath math="x \geq -4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiór rozwiązań nierówności to <InlineMath math="[-4, \infty)" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution19;
