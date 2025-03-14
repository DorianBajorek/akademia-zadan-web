import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution142 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wszystkich liczb pięciocyfrowych, w których występują wyłącznie cyfry <InlineMath math="0, 2, 5" />, jest:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="12" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="36" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="162" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="243" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie możliwości dla każdej cyfry</h2>
      <p className="mb-2">
        Liczba pięciocyfrowa nie może zaczynać się od <InlineMath math="0" />, więc pierwsza cyfra może być <InlineMath math="2" /> lub <InlineMath math="5" /> (2 możliwości). Każda z pozostałych czterech cyfr może być <InlineMath math="0, 2" /> lub <InlineMath math="5" /> (3 możliwości).
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Obliczenie liczby możliwości</h2>
      <p className="mb-2">
        Liczba wszystkich możliwych liczb pięciocyfrowych wynosi:
      </p>
      <BlockMath math="2 \times 3 \times 3 \times 3 \times 3 = 2 \times 3^4 = 2 \times 81 = 162" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wszystkich liczb pięciocyfrowych, w których występują wyłącznie cyfry <InlineMath math="0, 2, 5" />, jest <InlineMath math="162" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution142;