import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Układ równań <InlineMath math="\begin{cases} x-y=3 \\ 2x + 0.5y = 4 \end{cases}" /> opisuje w układzie współrzędnych na płaszczyźnie
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> zbiór pusty.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> dokładnie jeden punkt.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> dokładnie dwa różne punkty.</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> zbiór nieskończony.</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Rozwiązanie układu równań</h2>
      <p className="mb-2">
        Mamy układ:
      </p>
      <BlockMath math="\begin{cases} 
      x - y = 3 \\ 
      2x + 0.5y = 4 
      \end{cases}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wyznaczenie y z pierwszego równania</h2>
      <p className="mb-2">
        Z pierwszego równania:
      </p>
      <BlockMath math="y = x - 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Podstawienie do drugiego równania</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="y = x - 3" /> do drugiego równania:
      </p>
      <BlockMath math="2x + 0.5(x - 3) = 4" />
      <BlockMath math="2x + 0.5x - 1.5 = 4" />
      <BlockMath math="2.5x = 5.5" />
      <BlockMath math="x = \frac{5.5}{2.5} = 2.2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie y</h2>
      <p className="mb-2">
        Obliczamy <InlineMath math="y" />:
      </p>
      <BlockMath math="y = 2.2 - 3 = -0.8" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 5: Interpretacja geometryczna</h2>
      <p className="mb-2">
        Układ ma dokładnie jedno rozwiązanie <InlineMath math="(2.2, -0.8)" />, co oznacza że proste przecinają się w jednym punkcie.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Weryfikacja</h2>
      <p className="mb-2">
        Sprawdźmy podstawiając do obu równań:
      </p>
      <BlockMath math="2.2 - (-0.8) = 3 \quad \text{(spełnione)}" />
      <BlockMath math="2 \cdot 2.2 + 0.5 \cdot (-0.8) = 4.4 - 0.4 = 4 \quad \text{(spełnione)}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Układ opisuje <strong>dokładnie jeden punkt</strong> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;