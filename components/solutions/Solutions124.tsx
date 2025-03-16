import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równanie <InlineMath math="\frac{(x-1)(x+2)}{x-3} = 0" />:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> ma trzy różne rozwiązania: <InlineMath math="x = 1, x = 3, x = -2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> ma trzy różne rozwiązania: <InlineMath math="x = -1, x = -3, x = 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> ma dwa różne rozwiązania: <InlineMath math="x = 1, x = -2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> ma dwa różne rozwiązania: <InlineMath math="x = -1, x = 2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Znalezienie miejsc zerowych licznika</h2>
      <p className="mb-2">
        Lewa strona równania jest równa zero, gdy licznik jest równy zero, a mianownik nie jest równy zero(nie możemy dzielić przez zero). Przyrównujemy licznik do zera:
      </p>
      <BlockMath math="(x - 1)(x + 2) = 0" />
      <p className="mb-2">
        Rozwiązania to:
      </p>
      <BlockMath math="x - 1 = 0 \Rightarrow x = 1" />
      <BlockMath math="x + 2 = 0 \Rightarrow x = -2" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sprawdzenie mianownika</h2>
      <p className="mb-2">
        Mianownik nie może być równy zero, więc:
      </p>
      <BlockMath math="x - 3 \neq 0 \Rightarrow x \neq 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wnioskowanie</h2>
      <p className="mb-2">
        Rozwiązania równania to <InlineMath math="x = 1" /> i <InlineMath math="x = -2" />. Wartość <InlineMath math="x = 3" /> nie jest rozwiązaniem, ponieważ zeruje mianownik.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie ma dwa różne rozwiązania: <InlineMath math="x = 1, x = -2" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;