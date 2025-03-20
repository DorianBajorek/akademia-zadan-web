import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Ile jest wszystkich dwucyfrowych liczb naturalnych utworzonych z cyfr: 1, 3, 5, 7, 9, w których cyfry się nie powtarzają?
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ A:</strong> <InlineMath math="10" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ B:</strong> <InlineMath math="15" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ C:</strong> <InlineMath math="20" /></p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold"><strong>ODPOWIEDŹ D:</strong> <InlineMath math="25" /></p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie możliwości wyboru cyfr</h2>
      <p className="mb-2">
        Mamy do dyspozycji cyfry: 1, 3, 5, 7, 9. Każda liczba dwucyfrowa składa się z cyfry dziesiątek i cyfry jedności.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Wybór cyfry dziesiątek</h2>
      <p className="mb-2">
        Cyfrę dziesiątek możemy wybrać na 5 sposobów (spośród cyfr: 1, 3, 5, 7, 9).
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Wybór cyfry jedności</h2>
      <p className="mb-2">
        Po wyborze cyfry dziesiątek, cyfra jedności musi być różna od cyfry dziesiątek. Zatem mamy 4 możliwe cyfry do wyboru.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 4: Obliczenie liczby możliwości</h2>
      <p className="mb-2">
        Liczbę wszystkich możliwych liczb dwucyfrowych obliczamy, mnożąc liczbę możliwości wyboru cyfry dziesiątek przez liczbę możliwości wyboru cyfry jedności:
      </p>
      <BlockMath math="5 \text{ (cyfry dziesiątek)} \times 4 \text{ (cyfry jedności)} = 20" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Wszystkich możliwych liczb dwucyfrowych jest <InlineMath math="20" /> (odpowiedź <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;