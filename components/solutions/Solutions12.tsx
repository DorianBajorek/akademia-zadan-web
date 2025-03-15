import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution12 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W kartezjańskim układzie współrzędnych <InlineMath math="(x, y)" /> proste <InlineMath math="k" /> oraz <InlineMath math="l" /> są określone równaniami:
        <BlockMath math="k : y = (m + 1)x + 7" />
        <BlockMath math="l : y = -2x + 7" />
        Proste <InlineMath math="k" /> oraz <InlineMath math="l" /> są prostopadłe, gdy liczba <InlineMath math="m" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="-\frac{1}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{1}{2}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="-3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="1" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Warunek prostopadłości prostych</h2>
      <p className="mb-2">
        Dwie proste są prostopadłe, jeśli iloczyn ich współczynników kierunkowych jest równy <InlineMath math="-1" />. Dla prostych:
      </p>
      <BlockMath math="k : y = a_1 x + b_1" />
      <BlockMath math="l : y = a_2 x + b_2" />
      <p className="mb-2">
        Warunek prostopadłości ma postać:
      </p>
      <BlockMath math="a_1 \cdot a_2 = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Zastosowanie warunku do danych prostych</h2>
      <p className="mb-2">
        Dla prostych <InlineMath math="k" /> i <InlineMath math="l" />:
      </p>
      <BlockMath math="a_1 = m + 1, \quad a_2 = -2" />
      <p className="mb-2">
        Podstawiamy do warunku prostopadłości:
      </p>
      <BlockMath math="(m + 1) \cdot (-2) = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="(m + 1) \cdot (-2) = -1" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="-2" />:
      </p>
      <BlockMath math="m + 1 = \frac{1}{2}" />
      <p className="mb-2">
        Odejmujemy <InlineMath math="1" /> od obu stron:
      </p>
      <BlockMath math="m = \frac{1}{2} - 1 = -\frac{1}{2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="m" /> jest równa <InlineMath math="-\frac{1}{2}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution12;