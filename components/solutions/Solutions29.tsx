import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution29 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        W pewnym ostrosłupie prawidłowym stosunek liczby <InlineMath math="W" /> wszystkich wierzchołków do liczby <InlineMath math="K" /> wszystkich krawędzi jest równy:
        <BlockMath math="\frac{W}{K} = \frac{3}{5}" />
        Podstawą tego ostrosłupa jest:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> kwadrat</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> pięciokąt foremny</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> sześciokąt foremny</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> siedmiokąt foremny</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie liczby wierzchołków i krawędzi</h2>
      <p className="mb-2">
        W ostrosłupie prawidłowym o podstawie <InlineMath math="n" />-kąta foremnego:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>Liczba wierzchołków <InlineMath math="W = n + 1" /> (wierzchołki podstawy + wierzchołek ostrosłupa).</li>
        <li>Liczba krawędzi <InlineMath math="K = 2n" /> (krawędzie podstawy + krawędzie boczne).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Ustalenie równania</h2>
      <p className="mb-2">
        Zgodnie z warunkiem zadania:
      </p>
      <BlockMath math="\frac{W}{K} = \frac{3}{5}" />
      <p className="mb-2">
        Podstawiamy wyrażenia na <InlineMath math="W" /> i <InlineMath math="K" />:
      </p>
      <BlockMath math="\frac{n + 1}{2n} = \frac{3}{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">
        Mnożymy na krzyż:
      </p>
      <BlockMath math="5(n + 1) = 3 \cdot 2n" />
      <p className="mb-2">
        Rozwiązujemy równanie:
      </p>
      <BlockMath math="5n + 5 = 6n" />
      <BlockMath math="5 = 6n - 5n" />
      <BlockMath math="n = 5" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Wnioskowanie</h2>
      <p className="mb-2">
        Podstawą ostrosłupa jest pięciokąt foremny.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Podstawą tego ostrosłupa jest pięciokąt foremny (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution29;