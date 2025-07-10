import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Wszystkich liczb naturalnych trzycyfrowych, większych od <InlineMath math="700" />, w
        których każda cyfra należy do zbioru <InlineMath math="\{1, 2, 3, 7, 8, 9\}" /> i żadna
        cyfra się nie powtarza, jest
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="108" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="60" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="40" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="299" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 1: Określenie możliwych cyfr setek</h2>
      <p className="mb-2">Liczba musi być większa od 700, więc cyfra setek może być:</p>
      <BlockMath math="7, 8, 9" />
      <p className="mb-2">Mamy więc 3 możliwości dla cyfry setek.</p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Określenie możliwych cyfr dziesiątek i jedności
      </h2>
      <p className="mb-2">
        Dla każdej wybranej cyfry setek, cyfra dziesiątek i jedności musi pochodzić z pozostałych
        cyfr zbioru <InlineMath math="\{1, 2, 3, 7, 8, 9\}" />, przy czym:
      </p>
      <ul className="list-disc pl-5 mb-2">
        <li>Cyfra dziesiątek: 5 możliwości (wszystkie pozostałe cyfry)</li>
        <li>Cyfra jedności: 4 możliwości (pozostałe cyfry, bez powtórzeń)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Obliczenie liczby możliwości</h2>
      <p className="mb-2">Korzystając z reguły mnożenia:</p>
      <BlockMath math="3 \text{ (setki)} \times 5 \text{ (dziesiątki)} \times 4 \text{ (jedności)} = 60" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Istnieje <InlineMath math="60" /> takich liczb (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
