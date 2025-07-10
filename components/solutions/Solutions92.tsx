import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="\frac{2^{50} \cdot 3^{40}}{36^{10}}" /> jest równa
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="6^{70}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="6^{45}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="2^{30} \cdot 3^{20}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="2^{10} \cdot 3^{20}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Rozłożenie liczby 36 na czynniki pierwsze
      </h2>
      <p className="mb-2">Rozkładamy mianownik na czynniki pierwsze:</p>
      <BlockMath math="36 = 2^2 \cdot 3^2" />
      <BlockMath math="36^{10} = (2^2 \cdot 3^2)^{10} = 2^{20} \cdot 3^{20}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Podstawienie do wyrażenia</h2>
      <p className="mb-2">Podstawiamy rozłożony mianownik do pierwotnego wyrażenia:</p>
      <BlockMath math="\frac{2^{50} \cdot 3^{40}}{2^{20} \cdot 3^{20}} = 2^{50-20} \cdot 3^{40-20} = 2^{30} \cdot 3^{20}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Sprawdzenie odpowiedzi</h2>
      <p className="mb-2">Porównujemy otrzymany wynik z podanymi odpowiedziami:</p>
      <BlockMath math="2^{30} \cdot 3^{20}" />
      <p className="mb-2">co dokładnie odpowiada odpowiedzi C.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Poprawna odpowiedź to <InlineMath math="2^{30} \cdot 3^{20}" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution;
