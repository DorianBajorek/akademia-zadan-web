import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wszystkich różnych liczb naturalnych czterocyfrowych nieparzystych podzielnych przez 5 jest:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="9 \cdot 8 \cdot 7 \cdot 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="9 \cdot 10 \cdot 10 \cdot 1" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="9 \cdot 10 \cdot 10 \cdot 2" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="9 \cdot 9 \cdot 8 \cdot 1" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Zrozumienie warunków</h2>
      <p className="mb-2">
        Szukamy liczb czterocyfrowych (od 1000 do 9999), które są:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>nieparzyste,</li>
        <li>podzielne przez 5.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Analiza cyfr</h2>
      <p className="mb-2">
        Liczba jest podzielna przez 5, jeśli jej ostatnia cyfra to 0 lub 5. Ponieważ liczba ma być nieparzysta, ostatnia cyfra musi być 5.
      </p>
      <p className="mb-2">
        Rozważmy każdą z czterech cyfr liczby czterocyfrowej:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li><strong>Cyfra tysięcy:</strong> Może być od 1 do 9 (9 możliwości).</li>
        <li><strong>Cyfra setek:</strong> Może być od 0 do 9 (10 możliwości).</li>
        <li><strong>Cyfra dziesiątek:</strong> Może być od 0 do 9 (10 możliwości).</li>
        <li><strong>Cyfra jedności:</strong> Musi być 5 (1 możliwość).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie liczby możliwości</h2>
      <p className="mb-2">
        Liczba możliwości to iloczyn możliwości dla każdej cyfry:
      </p>
      <BlockMath math="9 \cdot 10 \cdot 10 \cdot 1" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wszystkich różnych liczb naturalnych czterocyfrowych nieparzystych podzielnych przez 5 jest <InlineMath math="9 \cdot 10 \cdot 10 \cdot 1" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;