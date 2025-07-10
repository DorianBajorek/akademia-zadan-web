import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Liczba <InlineMath math="100^5 \cdot (0,1)^{-6}" /> jest równa:
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="10^{13}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="10^{16}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="10^{-1}" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="10^{-30}" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Przekształcenie liczby 100 do postaci potęgi 10
      </h2>
      <p className="mb-2">
        Liczbę <InlineMath math="100" /> można zapisać jako <InlineMath math="10^2" />. Zatem:
      </p>
      <BlockMath math="100^5 = (10^2)^5 = 10^{10}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Przekształcenie liczby 0,1 do postaci potęgi 10
      </h2>
      <p className="mb-2">
        Liczbę <InlineMath math="0,1" /> można zapisać jako <InlineMath math="10^{-1}" />. Zatem:
      </p>
      <BlockMath math="(0,1)^{-6} = (10^{-1})^{-6} = 10^{6}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie iloczynu</h2>
      <p className="mb-2">Mnożymy obie potęgi:</p>
      <BlockMath math="100^5 \cdot (0,1)^{-6} = 10^{10} \cdot 10^{6} = 10^{16}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Liczba <InlineMath math="100^5 \cdot (0,1)^{-6}" /> jest równa <InlineMath math="10^{16}" />{' '}
        (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
