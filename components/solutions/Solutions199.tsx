import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const Solution = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-16">
      <div className="text-lg mb-4">
        Równość <InlineMath math="\frac{m}{5-\sqrt{5}}=\frac{5+\sqrt{5}}{5}" /> zachodzi dla
      </div>

      <div className="space-y-3 mb-6">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ A:</strong> <InlineMath math="m=5" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ B:</strong> <InlineMath math="m=4" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ C:</strong> <InlineMath math="m=1" />
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold">
            <strong>ODPOWIEDŹ D:</strong> <InlineMath math="m=-5" />
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Krok 1: Usunięcie niewymierności z mianownika
      </h2>
      <p className="mb-2">Mnożymy licznik i mianownik lewej strony przez sprzężenie mianownika:</p>
      <BlockMath math="\frac{m}{5-\sqrt{5}} \cdot \frac{5+\sqrt{5}}{5+\sqrt{5}} = \frac{m(5+\sqrt{5})}{(5)^2 - (\sqrt{5})^2} = \frac{m(5+\sqrt{5})}{25-5} = \frac{m(5+\sqrt{5})}{20}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 2: Przyrównanie do prawej strony</h2>
      <p className="mb-2">Porównujemy z prawą stroną równania:</p>
      <BlockMath math="\frac{m(5+\sqrt{5})}{20} = \frac{5+\sqrt{5}}{5}" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Krok 3: Rozwiązanie równania</h2>
      <p className="mb-2">Mnożymy obie strony przez 20:</p>
      <BlockMath math="m(5+\sqrt{5}) = 4(5+\sqrt{5})" />
      <p className="mb-2">
        Dzielimy obie strony przez <InlineMath math="(5+\sqrt{5})" />:
      </p>
      <BlockMath math="m = 4" />

      <h2 className="text-xl font-semibold mt-4 mb-2">Weryfikacja</h2>
      <p className="mb-2">
        Sprawdźmy podstawiając <InlineMath math="m=4" /> do oryginalnego równania:
      </p>
      <BlockMath math="\frac{4}{5-\sqrt{5}} = \frac{5+\sqrt{5}}{5}" />
      <p className="mb-2">
        Po usunięciu niewymierności obie strony są równe, co potwierdza poprawność rozwiązania.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Odpowiedź</h2>
      <p className="text-lg font-bold text-green-600">
        Równość zachodzi dla <InlineMath math="m=4" /> (odpowiedź <strong>B</strong>).
      </p>
    </div>
  );
};

export default Solution;
