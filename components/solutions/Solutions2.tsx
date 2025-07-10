import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution2 = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <p className="text-lg mb-4">
        Liczba <InlineMath math="\log_{\sqrt{3}} 9" /> jest równa:
      </p>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lf">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> 2
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> 3
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> 4
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> 9
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Rozwiązanie:</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">Krok 1: Oznaczenie równania</h3>
      <p className="mb-2">Oznaczmy:</p>
      <BlockMath math="\sqrt{3}^x = 9" />

      <h3 className="text-xl font-semibold mt-4 mb-2">
        Krok 2: Sprowadzenie do tej samej podstawy
      </h3>
      <p className="mb-2">Zapisujemy obie strony równania jako potęgi liczby 3:</p>
      <BlockMath math="\sqrt{3} = 3^{\frac{1}{2}}, \quad 9 = 3^2" />
      <p className="mb-2">Podstawiając do równania:</p>
      <BlockMath math="(3^{\frac{1}{2}})^x = 3^2" />

      <h3 className="text-xl font-semibold mt-4 mb-2">Krok 3: Uproszczenie równania</h3>
      <p className="mb-2">Korzystając z własności potęg:</p>
      <BlockMath math="3^{\frac{1}{2} \cdot x} = 3^2" />
      <p className="mb-2">Ponieważ podstawy są równe, możemy porównać wykładniki:</p>
      <BlockMath math="\frac{1}{2} \cdot x = 2" />

      <h3 className="text-xl font-semibold mt-4 mb-2">Krok 4: Rozwiązanie równania</h3>
      <p className="mb-2">Mnożymy obie strony równania przez 2:</p>
      <BlockMath math="x = 4" />

      <h3 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h3>
      <p className="text-lg font-bold text-green-600">
        Prawidłowa odpowiedź to: <InlineMath math="\log_{\sqrt{3}} 9 = 4" /> (odpowiedź{' '}
        <strong>C</strong>).
      </p>
    </div>
  );
};

export default Solution2;
