import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution5 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Rozwiąż równanie:
        <BlockMath math="\frac{x+1}{(x+2)(x-3)} = 0" />
        w zbiorze liczb rzeczywistych.
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> nie ma rozwiązania</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> ma dokładnie jedno rozwiązanie: <InlineMath math="-1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> ma dokładnie dwa rozwiązania: <InlineMath math="-2" /> oraz <InlineMath math="3" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> ma dokładnie trzy rozwiązania: <InlineMath math="-1" />, <InlineMath math="-2" /> oraz <InlineMath math="3" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zrozumienie równania</h2>
      <p className="mb-2">
        Równanie ma postać ułamka równą zero. Ułamek jest równy zero, gdy jego licznik jest równy zero, a mianownik jest różny od zera.
      </p>
      <BlockMath math="\frac{x+1}{(x+2)(x-3)} = 0" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Rozwiązanie licznika</h2>
      <p className="mb-2">
        Ustawiamy licznik równy zero:
      </p>
      <BlockMath math="x + 1 = 0" />
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="x = -1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Sprawdzenie mianownika</h2>
      <p className="mb-2">
        Mianownik nie może być równy zero, więc sprawdzamy, czy rozwiązanie nie zeruje mianownika:
      </p>
      <BlockMath math="(x + 2)(x - 3) \neq 0" />
      <p className="mb-2">
        Rozwiązujemy nierówność:
      </p>
      <BlockMath math="x \neq -2 \quad \text{oraz} \quad x \neq 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Wnioskowanie</h2>
      <p className="mb-2">
        Jedynym rozwiązaniem jest <InlineMath math="x = -1" />, ponieważ nie zeruje ono mianownika.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równanie ma dokładnie jedno rozwiązanie: <InlineMath math="-1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution5;