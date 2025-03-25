import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ciąg <InlineMath math="(b_n)" /> jest określony wzorem <InlineMath math="b_n = 3n^2 - 25n" /> dla każdej liczby naturalnej <InlineMath math="n \geq 1" />. Liczba niedodatnich wyrazów ciągu <InlineMath math="(b_n)" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="14" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="13" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="9" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="8" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Znalezienie miejsc zerowych</h2>
      <p className="mb-2">
        Rozwiązujemy nierówność <InlineMath math="b_n \leq 0" />:
      </p>
      <BlockMath math="3n^2 - 25n \leq 0" />
      <p className="mb-2">
        Znajdujemy pierwiastki równania kwadratowego:
      </p>
      <BlockMath math="3n^2 - 25n = 0" />
      <BlockMath math="n(3n - 25) = 0" />
      <BlockMath math="n = 0 \quad \text{lub} \quad n = \frac{25}{3} \approx 8.\overline{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Analiza nierówności kwadratowej</h2>
      <p className="mb-2">
        Ponieważ współczynnik przy <InlineMath math="n^2" /> jest dodatni, parabola jest skierowana ramionami w górę. Zatem:
      </p>
      <BlockMath math="b_n \leq 0 \quad \text{dla} \quad n \in \left[0, \frac{25}{3}\right]" />
      <p className="mb-2">
        Uwzględniając, że <InlineMath math="n" /> jest liczbą naturalną <InlineMath math="\geq 1" />:
      </p>
      <BlockMath math="n \in \{1, 2, 3, 4, 5, 6, 7, 8\}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Weryfikacja wartości granicznych</h2>
      <p className="mb-2">
        Sprawdzamy wartość dla <InlineMath math="n = 8" />:
      </p>
      <BlockMath math="b_8 = 3 \cdot 8^2 - 25 \cdot 8 = 192 - 200 = -8 \leq 0" />
      <p className="mb-2">
        oraz dla <InlineMath math="n = 9" />:
      </p>
      <BlockMath math="b_9 = 3 \cdot 9^2 - 25 \cdot 9 = 243 - 225 = 18 > 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Podsumowanie</h2>
      <p className="mb-2">
        Niedodatnie wyrazy ciągu to:
      </p>
      <BlockMath math="b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_8" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba niedodatnich wyrazów ciągu wynosi <InlineMath math="8" /> (odpowiedź <strong>D</strong>).
      </p>
    </div>
  );
};

export default Solution;