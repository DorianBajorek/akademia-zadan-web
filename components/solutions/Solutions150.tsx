import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności <InlineMath math="\frac{1-2x}{2} > \frac{1}{3}" /> jest przedział:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-\infty, \frac{1}{6})" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="(-\infty, \frac{2}{3})" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="(\frac{1}{6}, +\infty)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="(\frac{2}{3}, +\infty)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie nierówności</h2>
      <p className="mb-2">
        Rozwiązujemy nierówność:
      </p>
      <BlockMath math="\frac{1-2x}{2} > \frac{1}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Pomnożenie obu stron przez 2</h2>
      <p className="mb-2">
        Mnożymy obie strony nierówności przez 2, aby pozbyć się mianownika:
      </p>
      <BlockMath math="1 - 2x > \frac{2}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Przeniesienie wyrazów</h2>
      <p className="mb-2">
        Przenosimy stałe na jedną stronę, a wyrazy z <InlineMath math="x" /> na drugą:
      </p>
      <BlockMath math="-2x > \frac{2}{3} - 1" />
      <p className="mb-2">
        Obliczamy prawą stronę:
      </p>
      <BlockMath math="-2x > -\frac{1}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Podzielenie przez -2</h2>
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="-2" />, pamiętając o zmianie kierunku nierówności:
      </p>
      <BlockMath math="x < \frac{1}{6}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiór rozwiązań nierówności to <InlineMath math="(-\infty, \frac{1}{6})" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution;