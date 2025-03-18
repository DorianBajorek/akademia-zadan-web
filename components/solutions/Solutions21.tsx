import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution21 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równanie
        <BlockMath math="\frac{(x+1)(x-1)^2}{(x-1)(x+1)^2} = 0" />
        w zbiorze liczb rzeczywistych:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> nie ma rozwiązania</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> ma dokładnie jedno rozwiązanie: <InlineMath math="-1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> ma dokładnie jedno rozwiązanie: <InlineMath math="1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> ma dokładnie dwa rozwiązania: <InlineMath math="-1" /> oraz <InlineMath math="1" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie dziedziny równania</h2>
      <p className="mb-2">
        Równanie ma sens, gdy mianownik nie jest równy zero. Zatem:
      </p>
      <BlockMath math="(x - 1)(x + 1)^2 \neq 0" />
      <p className="mb-2">
        Iloczyn dwóch liczb jest rózny od zera jeśli każdy z nawiasów jest różny od zera
      </p>
      <BlockMath math="x - 1 \neq 0" /> oraz <BlockMath math="x + 1 \neq 0" />
      <p className="mb-2">
        To oznacza, że <InlineMath math="x \neq 1" /> i <InlineMath math="x \neq -1" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie równania</h2>
      <p className="mb-2">
        Równanie jest równe zero, gdy licznik jest równy zero, a mianownik nie jest równy zero. Zatem:
      </p>
      <BlockMath math="(x + 1)(x - 1)^2 = 0" />
      <p className="mb-2">
        Rozwiązania to <InlineMath math="x = -1" /> i <InlineMath math="x = 1" />. Jednak z dziedziny wiemy, że <InlineMath math="x \neq 1" /> i <InlineMath math="x \neq -1" />.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioski</h2>
      <p className="mb-2">
        Ponieważ oba potencjalne rozwiązania są wykluczone z dziedziny, równanie nie ma rozwiązań.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie nie ma rozwiązania (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution21;