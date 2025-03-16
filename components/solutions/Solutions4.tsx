import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution4 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Zbiorem wszystkich rozwiązań nierówności:  
        <BlockMath math="1 - \frac{3}{2}x < \frac{2}{3} - x" />
        jest przedział:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="(-\infty, -\frac{2}{3})" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="(-\infty, \frac{2}{3})" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="(-\frac{2}{3}, +\infty)" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="(\frac{2}{3}, +\infty)" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Przeniesienie wyrazów z <InlineMath math="x" /> na jedną stronę</h2>
      <p className="mb-2">
        Przenosimy wyrazy zawierające <InlineMath math="x"/> na lewą stronę, a stałe na prawą stronę nierówności:
      </p>
      <BlockMath math="1 - \frac{2}{3} < \frac{3}{2}x - x" />
      <p className="mb-2">
        Obliczamy różnicę:
      </p>
      <BlockMath math="\frac{1}{3} < \frac{1}{2}x" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie nierówności względem <InlineMath math="x" /></h2>
      <p className="mb-2">
        Mnożymy obie strony nierówności przez 2, aby pozbyć się ułamka:
      </p>
      <BlockMath math="\frac{2}{3} < x" />
      <p className="mb-2">
        Ostatecznie otrzymujemy:
      </p>
      <BlockMath math="x > \frac{2}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Zbiór wszystkich rozwiązań nierówności to przedział <InlineMath math="(\frac{2}{3}, +\infty)" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution4;