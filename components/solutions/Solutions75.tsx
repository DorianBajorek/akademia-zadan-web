import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Trzywyrazowy ciąg <InlineMath math="(15, 3x, \frac{5}{3})" /> jest geometryczny i wszystkie
        jego wyrazy są dodatnie. Stąd wynika, że:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="x = \frac{3}{5}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="x = \frac{4}{5}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="x = 1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="x = \frac{5}{3}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Własność ciągu geometrycznego</h2>
      <p className="mb-2">
        W ciągu geometrycznym dla każdego wyrazu <InlineMath math="a_n" /> zachodzi:
      </p>
      <BlockMath math="a_n^2 = a_{n-1} \cdot a_{n+1}" />
      <p className="mb-2">
        Dla naszego ciągu <InlineMath math="(15, 3x, \frac{5}{3})" /> stosujemy tę własność dla
        drugiego wyrazu:
      </p>
      <BlockMath math="(3x)^2 = 15 \cdot \frac{5}{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">Obliczamy:</p>
      <BlockMath math="9x^2 = 15 \cdot \frac{5}{3}" />
      <BlockMath math="9x^2 = 25" />
      <p className="mb-2">Rozwiązujemy równanie:</p>
      <BlockMath math="x^2 = \frac{25}{9}" />
      <BlockMath math="x = \pm \frac{5}{3}" />
      <p className="mb-2">
        Ponieważ wszystkie wyrazy ciągu muszą być dodatnie, odrzucamy ujemne rozwiązanie{' '}
        <InlineMath math="x = -\frac{5}{3}" /> i wybieramy <InlineMath math="x = \frac{5}{3}" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość <InlineMath math="x" /> wynosi <InlineMath math="\frac{5}{3}" /> (odpowiedź{' '}
        <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;
