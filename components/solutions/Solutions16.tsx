import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\log_3 27 + \log_3 3" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="81" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="9" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="4" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="2" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Obliczenie logarytmów</h2>
      <p className="mb-2">
        Obliczamy każdy z logarytmów osobno:
      </p>
      <BlockMath math="\log_3 27 = 3 \quad \text{ponieważ} \quad 3^3 = 27" />
      <BlockMath math="\log_3 3 = 1 \quad \text{ponieważ} \quad 3^1 = 3" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Sumowanie logarytmów</h2>
      <p className="mb-2">
        Sumujemy wartości logarytmów:
      </p>
      <BlockMath math="\log_3 27 + \log_3 3 = 3 + 1 = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="\log_3 27 + \log_3 3" /> jest równa <InlineMath math="4" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;