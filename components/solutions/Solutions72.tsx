import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution72 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Funkcja <InlineMath math="f" /> jest określona wzorem <InlineMath math="f(x) = \frac{x^2}{2x - 2}" /> dla każdej liczby rzeczywistej  
        <InlineMath math="x \neq 1" />. Wtedy dla argumentu <InlineMath math="x = \sqrt{3} - 1" /> wartość funkcji <InlineMath math="f" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{\sqrt{3} - 1}" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="-1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{1}{\sqrt{3} - 2}" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Podstawienie wartości <InlineMath math="x" /> do wzoru funkcji</h2>
      <p className="mb-2">
        Podstawiamy <InlineMath math="x = \sqrt{3} - 1" /> do wzoru funkcji:
      </p>
      <BlockMath math="f(\sqrt{3} - 1) = \frac{(\sqrt{3} - 1)^2}{2(\sqrt{3} - 1) - 2}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie licznika</h2>
      <p className="mb-2">
        Obliczamy kwadrat w liczniku:
      </p>
      <BlockMath math="(\sqrt{3} - 1)^2 = (\sqrt{3})^2 - 2 \cdot \sqrt{3} \cdot 1 + 1^2 = 3 - 2\sqrt{3} + 1 = 4 - 2\sqrt{3}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie mianownika</h2>
      <p className="mb-2">
        Obliczamy mianownik:
      </p>
      <BlockMath math="2(\sqrt{3} - 1) - 2 = 2\sqrt{3} - 2 - 2 = 2\sqrt{3} - 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Uproszczenie wyrażenia</h2>
      <p className="mb-2">
        Podstawiamy obliczone wartości do wzoru:
      </p>
      <BlockMath math="f(\sqrt{3} - 1) = \frac{4 - 2\sqrt{3}}{2\sqrt{3} - 4}" />
      <p className="mb-2">
        Upraszczamy wyrażenie:
      </p>
      <BlockMath math="f(\sqrt{3} - 1) = \frac{4 - 2\sqrt{3}}{2\sqrt{3} - 4} = \frac{2(2 - \sqrt{3})}{2(\sqrt{3} - 2)} = \frac{2 - \sqrt{3}}{\sqrt{3} - 2}" />
      <p className="mb-2">
        Zauważamy, że <InlineMath math="\sqrt{3} - 2 = -(2 - \sqrt{3})" />, więc:
      </p>
      <BlockMath math="f(\sqrt{3} - 1) = \frac{2 - \sqrt{3}}{-(2 - \sqrt{3})} = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wartość funkcji <InlineMath math="f" /> dla argumentu <InlineMath math="x = \sqrt{3} - 1" /> jest równa <InlineMath math="-1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution72;