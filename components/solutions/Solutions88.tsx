import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution88 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Z wierzchołków sześcianu <InlineMath math="ABCDEFGH" /> losujemy jednocześnie dwa różne
        wierzchołki. Prawdopodobieństwo tego, że wierzchołki te będą końcami przekątnej sześcianu{' '}
        <InlineMath math="ABCDEFGH" />, jest równe:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="\frac{1}{7}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="\frac{4}{7}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="\frac{1}{14}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="\frac{3}{7}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Liczba wszystkich możliwych par wierzchołków
      </h2>
      <p className="mb-2">
        Sześcian ma 8 wierzchołków. Liczba sposobów wyboru 2 różnych wierzchołków z 8 to kombinacja:
      </p>
      <BlockMath math="C(8, 2) = \frac{8!}{2! \cdot 6!} = 28" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Liczba przekątnych sześcianu</h2>
      <p className="mb-2">
        Sześcian ma 4 przekątne przestrzenne (łączące przeciwległe wierzchołki). Każda przekątna to
        jedna para wierzchołków.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie prawdopodobieństwa</h2>
      <p className="mb-2">
        Prawdopodobieństwo \( P \) tego, że wylosowane wierzchołki będą końcami przekątnej, to
        stosunek liczby przekątnych do liczby wszystkich możliwych par:
      </p>
      <BlockMath math="P = \frac{4}{28} = \frac{1}{7}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Prawdopodobieństwo tego, że wierzchołki te będą końcami przekątnej sześcianu, jest równe{' '}
        <InlineMath math="\frac{1}{7}" /> (odpowiedź <strong>A</strong>).
      </p>
    </div>
  );
};

export default Solution88;
